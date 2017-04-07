import React from 'react'

class Results extends React.Component {
  constructor() {
    super()
  }
  render() {
    const { twitterUrl, twitterProfilePhoto, sentiment, magnitude } = this.props
    return (
      <div id="results">
        <a id="profile" target="_blank" href={twitterUrl}><img id="twitter-photo" src={twitterProfilePhoto}></a>
        <span id="sentiment"></span>
        <p><span id="sentiment-exp" class="tip" data-toggle="tooltip" data-placement="bottom" title="How happy the person is from 1 (happy) to -1 (sad)"> Sentiment: {sentiment}</span>
        | <span id="magnitude-exp" class="tip" data-toggle="tooltip" data-placement="bottom" title="How emotionally charged the person is from 0 (not at all emotional) to 10 (highly emotional)"> Magnitude: {magnitude}</span></p>
      </div>
    )
  }
}
