class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.integer :rating
      t.string :comment
      t.belongs_to :user
      t.belongs_to :coffee_spot

      t.timestamps
    end
  end
end
