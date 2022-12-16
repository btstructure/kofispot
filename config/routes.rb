Rails.application.routes.draw do
  namespace :api do
    resources :events
    resources :coffee_spots
    resources :comments
    resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
    get "/coffeespots", to: "coffee_spots#index"
    get "/coffeespots/:id", to: "coffee_spots#show"
    # get "/coffeespots/:id", to: "comments#show"
    delete "/deletecomment/:comment_id", to: "comments#destroy"
    patch "/newcomment/:comment_id", to: "comments#update" 
    post "/newcomment/:comment_id", to: "comments#create"
    # root "articles#index"
    get "/me", to: "users#show"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
