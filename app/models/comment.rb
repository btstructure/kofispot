class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :coffee_spot

    validates :rating, numericality: {in: 1..5}
end
