require "test_helper"

class CoffeeSpotsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @coffee_spot = coffee_spots(:one)
  end

  test "should get index" do
    get coffee_spots_url, as: :json
    assert_response :success
  end

  test "should create coffee_spot" do
    assert_difference("CoffeeSpot.count") do
      post coffee_spots_url, params: { coffee_spot: { average_rating: @coffee_spot.average_rating, description: @coffee_spot.description, location: @coffee_spot.location, phonenumber: @coffee_spot.phonenumber } }, as: :json
    end

    assert_response :created
  end

  test "should show coffee_spot" do
    get coffee_spot_url(@coffee_spot), as: :json
    assert_response :success
  end

  test "should update coffee_spot" do
    patch coffee_spot_url(@coffee_spot), params: { coffee_spot: { average_rating: @coffee_spot.average_rating, description: @coffee_spot.description, location: @coffee_spot.location, phonenumber: @coffee_spot.phonenumber } }, as: :json
    assert_response :success
  end

  test "should destroy coffee_spot" do
    assert_difference("CoffeeSpot.count", -1) do
      delete coffee_spot_url(@coffee_spot), as: :json
    end

    assert_response :no_content
  end
end
