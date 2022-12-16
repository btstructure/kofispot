class Api::CommentsController < ApplicationController
  def index 
    comments = Comment.all
    render json: comments, status: :ok
  end
  
  def show
    comments = Comment.find_by!(id: params[:id])
    render json: comment, status: :ok
  end

  def create 
    comment = Comment.create!(comment_params)
    render json: comment, status: :created
  end
  
  def update
    updated_review = Comment.find(params[:comment_id])
    updated_review.update(comment: params[:comment])
    render json: updated_review, status: :created
  end

  def destroy 
    
    comment = Comment.find(params[:comment_id])
    if session[:user_id] == comment.user_id
    comment.destroy
    end

    # render json: params[:comment.id]

    head :no_content
  end

  private

  def comment_params 
    params.permit(:comment, :rating, :coffee_spot_id, :user_id)
  end

end
