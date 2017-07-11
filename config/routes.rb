Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api do
    resources :todos, only: [:index, :create, :destroy, :show, :update],      defaults: {format: :json}
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
