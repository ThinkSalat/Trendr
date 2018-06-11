json.post do
  json.extract! @post, :id, :user_id, :title, :slug, :state, :post_type, :summary, :body, :private, :photoset_layout, :caption, :source_url, :source_title
end
puts '----------------------------------------------------------------------------------------------------------------------------------------------------------------------------'

puts '----------------------------------------------------------------------------------------------------------------------------------------------------------------------------'
# json.images do
#   json.array! @post.images do |image|
#     json.set! image_url: url_for(image)
#   end
# end
json.user do
  json.extract! @post.user, :id, :username, :title, :description, :avatar
end


# json.array! @post.likes
# json.array! @post.reblogs
# json.array! @post.comments