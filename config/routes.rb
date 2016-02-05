Rails.application.routes.draw do
  devise_for :users, :controllers => {:sessions => "sessions", :registrations => "registrations"}
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"

  root 'home#index'
  resources :plans do 
    member do 
      get 'personal'
      get 'general'
      get 'investments'
      get 'purchase'
      get 'preview'
    end
  end

  resources :users do 
    member do 
      get 'account'
    end      
  end
  resources :documents do
    member do 
      get 'general_step1'
      get 'general_step2'
      get 'general_step3'
      get 'general_step4'

      get 'marketing_plan_step1'
      get 'marketing_plan_step2'
      get 'marketing_plan_step3'
      get 'marketing_plan_step4'
      get 'marketing_plan_step5'

      get 'financial_plan_step1'
      get 'financial_plan_step2'
      get 'financial_plan_step3'
      get 'financial_plan_step4'
      get 'financial_plan_step5'
      get 'financial_plan_step6'
      get 'financial_plan_step7'
      get 'financial_plan_step8'

      get 'financial'
    end
  end
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
