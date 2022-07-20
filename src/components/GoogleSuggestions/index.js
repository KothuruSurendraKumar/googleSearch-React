// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    changeInput: '',
  }

  updateSearchInput = value => {
    this.setState({
      changeInput: value,
    })
  }

  onChangeInput = event => {
    this.setState({changeInput: event.target.value})
  }

  render() {
    const {changeInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachUser =>
      eachUser.suggestion.toLowerCase().includes(changeInput),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo"
        />
        <div className="search-container">
          <div className="inner">
            <img
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
            />
            <input
              type="search"
              onChange={this.onChangeInput}
              value={changeInput}
              placeholder="Search Google"
              className="search-item"
            />
          </div>
          <ul className="list-container">
            {searchResults.map(each => (
              <SuggestionItem
                key={each.id}
                suggestionDetails={each}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
