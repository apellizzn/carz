Rails.application.routes.draw do
  root 'cars#index'
  resources :cars do
  	collection do 
  	  get :colors
  	end
    resources :photos
  end
  resources :brands
  resources :fuels
end
