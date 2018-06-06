class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :title
      t.string :description
      t.boolean :private_posts, default: false
      t.boolean :private_likes, default: true
      t.boolean :private_followers, default: true
      t.boolean :private_followings, default: true

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
