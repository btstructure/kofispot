class CreateReports < ActiveRecord::Migration[7.0]
  def change
    create_table :reports do |t|
      t.references :user, null: false, foreign_key: true
      t.string :report_type
      t.jsonb :data

      t.timestamps
    end
  end
end
