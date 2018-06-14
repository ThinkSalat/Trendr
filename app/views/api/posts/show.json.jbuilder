json.post do
  json.extract! @post, :id, :user_id, :title, :slug, :state, :post_type, :summary, :body, :private, :photoset_layout, :caption, :source_url, :source_title
  json.images do
    json.array! @post.images do |img|
      json.url img.service_url
    end
  end
end

json.user do
  json.extract! @post.user, :id, :username, :title, :description, :avatar
  json.avatar @post.user.avatar.service_url
  json.followed_users do
    json.array! @post.user.followed_users.pluck(:id)
 end
end
# json.array! @post.likes
# json.array! @post.reblogs
# json.array! @post.comments