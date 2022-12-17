# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_20_162029) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "coffee_spots", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "description"
    t.string "location"
    t.string "phonenumber"
    t.integer "average_rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.integer "rating"
    t.string "comment"
    t.bigint "user_id"
    t.bigint "coffee_spot_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coffee_spot_id"], name: "index_comments_on_coffee_spot_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.integer "time"
    t.bigint "coffee_spot_id"
    t.bigint "users_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coffee_spot_id"], name: "index_events_on_coffee_spot_id"
    t.index ["users_id"], name: "index_events_on_users_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.bigint "events_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["events_id"], name: "index_users_on_events_id"
  end

end
