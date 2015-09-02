Rails.application.routes.draw do
  root 'cars#index'
  resources :cars do
    resources :photos
  end
  resources :brands
  resources :fuels
end
