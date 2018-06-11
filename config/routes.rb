Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :update]
    resources :posts, only: [:create, :update, :show, :index, :destroy]
    resources :likes, only: [:create, :destroy, :index]
    resources :follows, only: [:create, :destroy, :index]
    resource :search, only: [:show, :index]
  end

  resources :images, only: [:show]

  root "static_pages#root"
end
