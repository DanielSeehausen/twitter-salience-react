var currView = false

class ViewController {
  static displayScore(analyzedText) {
    $("#sentiment").text(analyzedText.snippet)
    $("#sentiment").attr('style','color: ' + analyzedText.color)
    $("#sentiment-score").text(analyzedText.sentiment)
    $("#magnitude-score").text(analyzedText.magnitude)
    $("#results").attr('style','visibility: visible')
  }

  static resetView(analyzedText) {
    $("#moodView").empty("")
  }

  static renderGreat(analyzedText) {
    //daniel

  }

  static renderGood(analyzedText) {
    //daniel
  }

  static renderOk(analyzedText) {
    //frederico

  }

  static renderPoor(analyzedText) {
    //frederico

  }

  static renderBad(analyzedText) {
    //daniel

  }

  static renderMiserable(analyzedText) {
    //frederico
    currView = "miserable"


  }

  static renderMood(analyzedText) {
    this.resetView()
    this[`render${analyzedText.mood}`](analyzedText)
  }
  
}
