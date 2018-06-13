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
  json.avatar @user.avatar.service_url
  json.followed_users json.array! @user.followed_users.pluck(:id)
end

json.posts do
  @user.posts.take(3).each do |post|
    json.set! post.id do
      json.extract! post, :id, :user_id, :title, :slug, :state, :post_type, :summary, :body, :private, :photoset_layout, :caption, :source_url, :source_title
      json.images do 
        json.array! post.images do |img| 
          json.url img.service_url 
        end
      end
    end
  end
end