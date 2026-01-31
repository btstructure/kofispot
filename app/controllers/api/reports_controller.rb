class Api::ReportsController < ApplicationController
  before_action :set_user


  def index
    report = @user.reports
      .where(report_type: "user_comments")
      .order(created_at: :desc)
      .first

    render json: report&.data
  end

  def create
    comments = @user.comments.includes(:coffee_spot)

    most_commented = comments
      .joins(:coffee_spot)
      .group("coffee_spots.id", "coffee_spots.name")
      .order(Arel.sql("COUNT(comments.id) DESC"))
      .limit(1)
      .pluck("coffee_spots.id", "coffee_spots.name", "COUNT(comments.id)")
      .first

    report_data = {
      user: { id: @user.id, name: @user.username },
      generated_at: Time.current,
      total_comments: comments.count,
      most_commented_coffee_spot: most_commented && {
        coffee_spot_id: most_commented[0],
        coffee_spot_name: most_commented[1],
        comment_count: most_commented[2]
      },
      comments: comments.map do |comment|
        {
          coffee_spot_name: comment.coffee_spot.name,
          rating: comment.rating,
          comment: comment.comment,
          commented_at: comment.created_at
        }
      end
    }

    report = Report.create!(
      user: @user,
      report_type: "user_comments",
      data: report_data
    )

    render json: report.data, status: :created
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end
end
