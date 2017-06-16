Rails.application.routes.draw do
  # resources :ninjas
  root  'ninjas#index'

  post 'ninjas' => 'ninjas#create'
  delete 'reset' => 'ninjas#reset'
end
