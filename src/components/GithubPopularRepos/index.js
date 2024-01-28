import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    repoItemList: [],
    selectedLanguage: languageFiltersData[0].id,
  }

  componentDidMount = () => {
    this.getRepositoryItems()
  }

  getRepositoryItems = async () => {
    const {selectedLanguage} = this.state

    const url = `https://apis.ccbp.in/popular-repos?language=${selectedLanguage}`

    const response = await fetch(url)

    const data = await response.json()
    const updatedData = data.popular_repos.map(each => ({
      name: each.name,
      id: each.id,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))

    this.setState({
      repoItemList: updatedData,
    })
  }

  handleLanguageClick = clickedLanguage => {
    const {repoItemList} = this.state

    const filteredRepoList = repoItemList.filter(
      each => each.languages && each.languages.includes(clickedLanguage),
    )

    this.setState(
      {
        selectedLanguage: clickedLanguage,
        repoItemList: filteredRepoList,
      },
      () => {
        this.getRepositoryItems()
      },
    )
  }

  render() {
    const {repoItemList, selectedLanguage} = this.state

    return (
      <div className="gitrepo-container">
        <h1 className="heading">Popular</h1>

        <div className="language-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              id={each.id}
              languages={each.language}
              onClick={() => this.handleLanguageClick(each.id)}
              selectedLanguage={selectedLanguage}
            />
          ))}
        </div>

        <ul className="repoItem-container">
          {repoItemList.length > 0 ? (
            repoItemList.map(each => (
              <RepositoryItem key={each.id} repoList={each} />
            ))
          ) : (
            <div data-testid="loader">
              <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default GithubPopularRepos
