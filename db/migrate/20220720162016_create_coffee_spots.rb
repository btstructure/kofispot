class CreateCoffeeSpots < ActiveRecord::Migration[7.0]
  def change
    create_table :coffee_spots do |t|
      t.string :name
      t.string :description
      t.string :location
      t.string :phonenumber
      t.integer :average_rating

      t.timestamps
    end
  end
end
