class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.integer :user_id, null: false

      
      # one of the folowing text, photo , quote link video
      t.string :type, null: false

      # summary is main content underneath the media, slug is url version of this, if not too long
      # essentially a description
      t.string :summary

      # this is the value used in text posts
      t.text :body 
      t.boolean :private, default: false
      
      # "photoset_layout": "111111"
      t.string :photoset_layout
      
      # caption is the little link at the bottom of some posts  - don't need to implement 
      t.string :caption
      
      t.date :date
      # FROM API:

      t.string :source_url
      t.string :source_title
      # //short text summary to he ned of the post url
      t.string :slug
      
      # published or draft or deleted
      t.string :state

      t.timestamps
    end
    add_index :posts, :user_id
  end
end
