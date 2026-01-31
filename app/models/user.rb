class User < ApplicationRecord
    has_many :comments
    has_many :coffee_spots, through: :comments
    has_many :events
    has_many :coffee_spot, through: :events
    
    has_secure_password

    has_many :reports, dependent: :destroy 

    validates :username, presence: true, uniqueness: true
    
end
