Rails.application.routes.draw do

  get '/users/:twitter_handle/get_tweet_text_block', to: "users#get_tweet_text_block"

end
