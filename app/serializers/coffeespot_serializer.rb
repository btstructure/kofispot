class CoffeespotSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :location, :description, :phonenumber, :average_rating

  has_many :comments
end
