Rails.application.routes.draw do


  # get 'students/show'

  # get 'students/new'

  # get 'students/edit'

  root  'dojos#index'
  resources :dojos do
    resources :students
  end
  #   resources :students

  # get 'dojos/index'
  # post 'dojos' => 'dojos#create'
  # get 'dojos/new'
  # get 'dojos/:id/edit' => 'dojos#edit'
  # get 'dojos/:id' => 'dojos#show'
  # patch 'dojos/:id' => 'dojos#update'
  # put 'dojos/:id' => 'dojos#update'
  # delete 'dojos/:id' => 'dojos#destroy'

 
end
