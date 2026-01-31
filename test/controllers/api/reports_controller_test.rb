require "test_helper"

class Api::ReportsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
    @coffee_spot = coffee_spots(:one)
    @comment = Comment.create!(
      user: @user,
      coffee_spot: @coffee_spot,
      rating: 4,
      comment: "Great coffee!"
    )
  end

  test "should get empty report initially" do
    get api_reports_user_comments_url(user_id: @user.id)
    assert_response :success
    assert_equal nil, response.parsed_body
  end

  test "should create a user comments report" do
    post api_reports_user_comments_url(user_id: @user.id)
    assert_response :created
    json = response.parsed_body

    assert_equal @user.id, json["user"]["id"]
    assert_equal @user.username, json["user"]["name"]
    assert json["total_comments"] >= 1
    assert json["comments"].any? { |c| c["comment"] == "Great coffee!" }
  end
end
