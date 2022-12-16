class Api::SessionsController < ApplicationController 
    skip_before_action :authorize, only: [:create]
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :ok
        else
          render json: { errors: 'Invalid credentials' }, status: :unauthorized
        end
      end
    
      # DELETE '/logout'
      def destroy
        if session[:user_id]
          session.clear
        else
          render json: { errors: "No active session" }, status: :unauthorized
        end
      end
end
