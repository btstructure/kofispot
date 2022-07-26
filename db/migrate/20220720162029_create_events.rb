class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.integer :time
      t.belongs_to :coffee_spot
      t.belongs_to :users

      t.timestamps
    end
  end
end
