json.results do
  @users.each do |user| 
    json.set! user.id do
      json.extract! user, :id, :username, :title
      json.avatar user.avatar.service_url
    end
  end
end
