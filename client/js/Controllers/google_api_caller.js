function googleCall() {
  $.ajax({
    url: `http://localhost:3000/users/${twitterHandle}/get_tweet_text_block`,
    success: (data) => {
      let userPhoto = data.user_photo
      GoogleApi.parseSentiment(data.tweet_text, twitterHandle)
      $("#twitter-photo").attr("src", userPhoto)
      $("#profile").attr("href",data.link)
    },
    error: () => { setNoUserFound(twitterHandle) }
  })
}
