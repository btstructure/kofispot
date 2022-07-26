class CommentsController < ApplicationController
  def update
    updated_review = Comment.find(params[:comment_id])
    render json: updated_review, status: :created
  end

  def destroy 
    comment = Comment.find(params[:comment_id])
    comment.destroy

    head :no_content
  end

end
