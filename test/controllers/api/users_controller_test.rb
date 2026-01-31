require "test_helper"

class Api::UsersControllerTest < ActionDispatch::IntegrationTest

  test "creates user with valid credentials" do
    assert_difference("User.count", 1) do
      post "/api/signup", params: {
        username: "newuser",
        password: "securepass",
        password_confirmation: "securepass"
      }
    end

    assert_response :created
  end

  test "rejects signup when passwords do not match" do
    assert_no_difference("User.count") do
      post "/api/signup", params: {
        username: "baduser",
        password: "password1",
        password_confirmation: "password2"
      }
    end

    assert_response :unprocessable_entity
  end

  test "rejects signup when username already exists" do
    User.create!(
      username: "existinguser",
      password: "password",
      password_confirmation: "password"
    )

    assert_no_difference("User.count") do
      post "/api/signup", params: {
        username: "existinguser",
        password: "password",
        password_confirmation: "password"
      }
    end

    assert_response :unprocessable_entity
  end
end
