json.posts do
  @posts.each do |post| 
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
json.users do |post|
  @posts.each do |post|
    user = post.user
    json.set! user.id do
      json.extract! user, 
        :id, 
        :username, 
        :email, 
        :title, 
        :description, 
        :private_posts, 
        :private_likes, 
        :private_followers, 
        :private_followings
        json.avatar user.avatar.service_url
    end
  end
end