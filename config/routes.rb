Rails.application.routes.draw do
  get 'cars/index'
  root 'cars#index'
  resources :brands
end
