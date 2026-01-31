require "test_helper"

class Api::SessionsControllerTest < ActionDispatch::IntegrationTest

  setup do
    @user = User.create!(
      username: "testuser",
      password: "password123",
      password_confirmation: "password123"
    )
  end

  test "logs in with correct credentials" do
    post "/api/login", params: {
      username: "testuser",
      password: "password123"
    }

    assert_response :success
    assert_equal @user.id, session[:user_id]
  end

  test "fails login with incorrect password" do
    post "/api/login", params: {
      username: "testuser",
      password: "wrongpassword"
    }

    assert_response :unauthorized
    assert_nil session[:user_id]
  end
end
