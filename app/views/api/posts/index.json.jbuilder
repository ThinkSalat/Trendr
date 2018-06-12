@posts.each do |post| 
  json.set! post.id do
   json.extract! post, :id, :user_id, :title, :slug, :state, :post_type, :summary, :body, :private, :photoset_layout, :caption, :source_url, :source_title
  end
end

json.images do
  @posts.each do |post|
    json.set! post.id do
      post.images 
    end
  end
end