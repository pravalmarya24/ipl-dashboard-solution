import {Component} from 'react'
import './index.css'

// Write your code here
class TeamMatches extends Component {
  render() {
    return (
      <div className="team-matches-bg-container">
        <div className="team-banner-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/kkr-team-img.png"
            alt="kkr"
            className="team-banner-img-size"
          />
          <h1 className="latest-matches">Latest Matches</h1>
          <div className="latest-matches-details-container">
            <div className="compete-team-description-container">
              <h1 className="compete-team-heading">Delhi Capitals</h1>
              <p className="date">2020-10-20</p>
              <p className="venue">At Haridwar</p>
              <p className="team-status">Won by 10 wickets</p>
            </div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png"
              alt="Sunrisers Hyderabad"
              className="compete-team-logo"
            />
            <div className="innings-container">
              <h1 className="first-innings-heading">First Innings</h1>
              <p className="first-innings-para">First Innings</p>
              <h1 className="second_innings-heading">Second Innings</h1>
              <p className="second_innings-para">Second Innings</p>
              <h1 className="man-of-the-match-heading">Man Of The Match</h1>
              <p className="team-status-para">Man Of The Match</p>
              <h1 className="umpires-heading">Umpires</h1>
              <p className="umpires-para">umpires</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamMatches
