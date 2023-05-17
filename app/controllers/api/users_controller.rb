class Api::UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]
  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else render json: { errors: user.errors.full_messages }, status: :unprocessable_entity 
    end
  end

  def show
    user = User.find(session[:user_id])
    render json: user, status: :ok, serializer: UserwithcommentSerializer
  end

  def update_password
    user = User.find(session[:user_id])

    if user.update(user_password_params)
      render json: {message: 'Password successfully updated'}, status: :ok
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

  def user_password_params 
    params.require(:user).permit(:password, :password_confirmation)
  end


end
