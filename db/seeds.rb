# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# json = ActiveSupport::JSON.decode(File.read('db/seeds/countries.json'))

# json.each do |a|
#   Country.create!(a['country'], without_protection: true)
# end

require 'open-uri'


# User.delete_all
# Post.delete_all

# User.create!({username: 'Demo User', email: 'Demo@email.com', password: 'password'})

# Dir.foreach('./db/blogs') do |file|
#   next if file[0] == '.'
#   puts '==================================='
#   puts file
#   puts '==================================='
#   file = File.read("./db/blogs/#{file}")
#   file = JSON.parse(file)
  
  
#   # User creation
#   puts '---------User Creation-------------'
#   userdata = file['response']['blog']
#   user = {}
#   user['username'] = userdata['name']
#   user['username'] += '    ' if user['username'].length < 5
#   user['title'] = userdata['title']
#   user['description'] = userdata['description']
#   user['email'] = userdata['name'] + '@gmail.com'
#   user['password'] = 'password'
#   print 'Username: '
#   puts user['username']
#   User.create!(user)
#   user_id = User.last.id
#   print "User id: "
#   puts user_id
  
#   # Post Creation
#   puts '---------Post Creation-------------'
#   seed_posts = file['response']['posts']
#   seed_posts.each do |seed_post|
#     next unless ['photo','text','photoset'].include?(seed_post['type'])

#     post = {}
#     post['user_id'] = user_id
#     post['post_type'] = seed_post['type']
#     post['body'] = seed_post['body']
      # post['summary'] = seed_post['caption']
#     post['title'] = seed_post['title']
#     post['source_url'] = seed_post['source_url']
#     post['source_title'] = seed_post['source_title']
#     post['slug'] = seed_post['slug']
#     post['caption'] = seed_post['caption']
#     post['post_type'] = seed_post['type']
#     post['state'] = 'published'
#     Post.create!(post)
    
#     puts '-------Post Created!----------'

#     puts '-----Uploading Post Media-----'
#     puts user['username'] + "'s post"
#     post = Post.last
#     seed_post['photos'].each do |photo|
#       print 'downloading '
#       puts photo['original_size']['url'].slice(17)
        
#       media = open(photo['original_size']['url'])
#       i = 0
#       post.images.attach(
#         io: media,
#         filename: "post_id" + post['id'].to_s + 'photo' + i.to_s
#       )
#       i += 1
#     end unless seed_post['photos'].nil?
    
#   end
# end

User.all.each do |user|
  uri = 'https://randomuser.me/api/?format=json&inc=picture&results=1'
  avatar = open(JSON.parse(open(uri).string).first.last.first['picture']['large'])
  user.avatar.attach(io: avatar, filename: "#{user.email}_avatar")
end