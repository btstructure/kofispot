class CommentSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment

  has_one :user
  has_one :coffeespot
end
