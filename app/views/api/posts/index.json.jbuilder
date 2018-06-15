json.posts do
  @posts.each do |post| 
    json.set! post.id do
    json.extract! post, :id, :user_id, :title, :slug, :state, :post_type, :summary, :body, :private, :photoset_layout, :caption, :source_url, :source_title
      json.images do 
        json.array! post.images do |img| 
          json.url img.service_url 
        end
      end
      json.likes do
        json.array! post.users_who_like_post_ids
      end
      json.number_notes post.likes.count
    end
  end
end
json.users do
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
        json.followed_users do
          json.array! user.followed_users.pluck(:id)
       end
    end
  end
end

