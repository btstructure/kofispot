class UserwithcommentSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :comments
  has_many :comments
end
