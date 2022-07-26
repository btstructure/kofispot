class CoffeeSpot < ApplicationRecord
    has_many :comments
    has_many :users, through: :comments
    has_many :events
    has_many :users, through: :events

    validates :average_rating, numericality: {in: 1..5}

    def updated_coffee_spot_averag
         
    end
end
