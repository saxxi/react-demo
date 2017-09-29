Rails.application.routes.draw do

  root to: 'application#empty'

  get '*path' => 'application#empty', constraints: lambda { |req| req.format != :json }

  post 'auth_user' => 'authentication#authenticate_user'

  resources :documents, only: [:index, :show]

end
