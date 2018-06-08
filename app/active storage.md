### Adding/Configuring ActiveStorage with AWS S3
- Run `rails active_storage: install` to create the migration for the `active_storage_blobs` and `active_storage_attachments` tables. Run `rails db:migrate` to run the new migration.
- Add `gem "aws-sdk-s3", require: false` to gem file and run bundle install
- inside of `config/storage.yml`, include the following:
```ruby
amazon:
  service: S3
  access_key_id: <%= Rails.application.credentials.dig(:aws, :access_key_id) %>
  secret_access_key: <%= Rails.application.credentials.dig(:aws, :secret_access_key) %>
  region: <your_region>
  bucket: <your_bucket_name>
```
- Rails 5.2 has replaced the `config/secrets.yml` file with an encrypted secrets file called `config/credentials.yml.enc`, and no longer allows the use of plain-text credentials. To edit this file, you will need to use the command `rails credentials:edit` to open a decrypted copy of your credentials file. 
- To open the credentials in vim, you can run `EDITOR=vim bin/rails credentials:edit`
- If you're not familiar with vim, press `i` to enter insert mode, then enter your aws credentials at the bottom of the file (after secret_key_base):
```ruby 
  aws:
    access_key_id: <your_access_key_id>
    secret_access_key: <your_secret_access_key>
```
- then press `ESC` to exit insert mode, and then `:wq` and `ENTER` to close the editor and save the new encrypted credentials.
- Note: If you were previously storing any other credentials in `secrets.yml`, you can use the above method to store those as well.
- To tell ActiveStorage to use AWS, you'll need to configure config.active_storage.service in each of your environment files. Open `config/environments/development.rb` and/or `config/environments/production.rb` and change the line `config.active_storage.service = :local` to `config.active_storage.service = :amazon`


### Using ActiveStorage
- Active storage allows you to specify a file attachment on any of your models as 
`has_one_attached :my_file_name` 
(for a single file) or 
`has_many_attached :my_collection_name`
 (for a collection of files)
- These attachments can be passed to controller methods as ordinary params. For instance, you could include something like:

```ruby
def user_params
  params.require(:user).permit(:username, :password, :profile_picture)
end
```
to allow an image file,   `profile_picture`,  to be included in `user_params`. By specifying that user `has_one_attached :profile_picture` in the user model, rails will automatically know to attach this file to the model.

- Similarly, to attach a collection of images, you can do something like this: 

```ruby
def post_params
  params.require(:post).permit(:title, :body, :images [])
end
```
- To retrieve the hosted url for these files, Rails includes a helper method, `url_for()`. For instance, `url_for(current_user.profile_picture)` will return the s3 hosted url of the current users profile picture.
- To get this to work on the front end, I had a separate column on my user model called profile_picture_url, and set this property equal to the result of calling url_for whenever I updated the model. You could also use the json.set! jbuilder method to fetch the url in the view.
- For a collection of files, you can use the `json.array!` jbuilder method to return an array of url strings


Add CommentCollapse 
Message Input

Message @Andy Wynkoop