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