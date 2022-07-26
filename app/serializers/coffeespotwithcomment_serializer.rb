class CoffeespotwithcommentSerializer < ActiveModel::Serializer
  attributes :id, :average_rating, :name, :image_url, :location, :phonenumber, :description
  has_many :comments
end
