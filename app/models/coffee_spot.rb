class CoffeeSpot < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :users, through: :comments
    has_many :events
    has_many :users, through: :events
    validates :average_rating, numericality: {in: 1..5}

    def average_rating
        (comments.average(:rating).to_f * 4).round / 4.0    
    end
end
