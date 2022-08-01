class CommentSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :coffee_spot_id, :user

  belongs_to :user
  has_one :coffee_spot
end
