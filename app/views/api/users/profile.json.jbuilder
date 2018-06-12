json.user do 
  json.extract! @user, 
  :id, 
  :username, 
  :email, 
  :title, 
  :description, 
  :private_posts, 
  :private_likes, 
  :private_followers, 
  :private_followings
end

json.posts do
  json.array! @user.posts.take(10) do |post|
    json.extract! post, :id, :user_id, :title, :slug, :state, :post_type, :summary, :body, :private, :photoset_layout, :caption, :source_url, :source_title
    json.images do 
      json.array! post.images do |img| 
        json.url img.service_url 
      end
    end
  end
end