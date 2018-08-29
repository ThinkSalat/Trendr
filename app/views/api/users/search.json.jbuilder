json.extract! @user, 
:id, 
:username, 
:title
json.avatar @user.avatar.service_url