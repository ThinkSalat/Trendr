Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :update, :show]
    resources :posts, only: [:create, :update, :show, :index, :destroy]
    resources :likes, only: [:create, :index]
    resources :followings, only: [:create, :index]
    resource :search, only: [:show, :index]
    delete 'followings(.:format)', to: 'followings#destroy'
  end

  # delete 'api/follows', to: 'api/follows#destroy'

  resources :images, only: [:show]

  root "static_pages#root"
end
