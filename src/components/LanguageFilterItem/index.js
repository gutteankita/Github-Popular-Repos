import {Component} from 'react'
import './index.css'

class LanguageFilterItem extends Component {
  handleClick = () => {
    const {id, onClick} = this.props
    onClick(id)
    console.log('iiiii', id)
  }

  render() {
    const {id, languages, selectedLanguage} = this.props
    const isActive = selectedLanguage === id ? 'active-lang' : ''

    return (
      <>
        <button className={`lists ${isActive}`} onClick={this.handleClick}>
          {languages}
        </button>
      </>
    )
  }
}

export default LanguageFilterItem
