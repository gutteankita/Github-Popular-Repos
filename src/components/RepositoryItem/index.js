// Write your code here

import {Component} from 'react'
import './index.css'

class RepositoryItem extends Component {
  render() {
    const {repoList} = this.props
    const {name, issuesCount, forksCount, starsCount, avatarUrl} = repoList
    return (
      <>
        {repoList ? (
          <li className="repo-lists">
            <img src={avatarUrl} alt={name} className="avtar-img" />
            <h1 className="name-heading">{name}</h1>
            <div>
              <div className="card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
                  alt="stars"
                  className="counts-img"
                />
                <p>{starsCount}</p>
              </div>
              <div className="card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
                  alt="forks"
                  className="counts-img"
                />
                <p>{forksCount}</p>
              </div>
              <div className="card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
                  alt="open issues"
                  className="counts-img"
                />
                <p>{issuesCount}</p>
              </div>
            </div>
          </li>
        ) : (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
            />
            <p>Something Went Wrong</p>
          </>
        )}
      </>
    )
  }
}

export default RepositoryItem
