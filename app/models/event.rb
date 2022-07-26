class Event < ApplicationRecord
    belongs_to :user
    belongs_to :coffee_spot
end
