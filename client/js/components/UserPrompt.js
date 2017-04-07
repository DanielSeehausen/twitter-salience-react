import React from 'react'

class UserPrompt extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    $("#search-field").keypress((e) => {
      if (e.which == 13)
        this.props.onSubmit.bind(null, this.state.input)
    })
  }

  handleChange(evt) {
    this.setState({
      input: evt.target.value
    })
  }

  componentWillMount(nextProps, nextState) {
    if (nextProps.userInputError)
      $("#search-field").addClass("errorAnimator")
  }

  normalizeSearchField() {
    // if the search text field is in wrong user error mode, this will reset text/color
    if ($("#search-field").hasClass("errorAnimator")) {
      $("#search-field").val("")
      $("#search-field").removeClass("errorAnimator")
    }
  }

  render() {
    return(
      <div className="all-prompt">
        <span id="prompt" class="text-center">
          <h2>How is @<input id="search-field" type="text" placeholder="twitter_handle" value={this.state.input} onChange={this.handleChange} onClick={this.normalizeSearchField}> doing?</h2>
        </span>
        <div class="text-center">
          <button id="query" class="text-center" onClick={this.props.onSubmit.bind(null, this.state.input)}>Let's Check</button>
        </div>
      </div>
    )
  }
}

export default UserPrompt
