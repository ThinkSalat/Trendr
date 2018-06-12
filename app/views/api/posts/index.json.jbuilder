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

# json.images do
#   @posts.each do |post|
#     json.set! post.id do
#       json.array! post.images.map do |img| 
#         img.service_url
#       end
#     end
#   end
# end