import {Component} from 'react'
import './index.css'
import MatchCard from '../MatchCard'

// Write your code here
class TeamMatches extends Component {
  state = {matchesDetailsList: [], latestMatchsList: []}

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchData = await latest_match_details.map(eachObject => ({
      competingTeam: eachObject.competing_team,
      competingTeamLogo: eachObject.competing_team_logo,
      date: eachObject.date,
      firstInnings: eachObject.first_innings,
      secondInnings: eachObject.second_innings,
      manOfTheMatch: eachObject.man_of_the_match,
      venue: eachObject.venue,
      umpires: eachObject.umpires,
      result: eachObject.result,
    }))
    const formattedData = data.recent_matches.map(each => ({
      competingTeamLogo: each.competing_team_logo,
      competingTeam: each.competing_team,
      result: each.result,
      matchStatus: each.match_status,
    }))
    this.setState({
      matchesDetailsList: formattedData,
      latestMatchsList: latestMatchData,
    })
    console.log(data)
  }

  render() {
    const {matchesDetailsList, latestMatchsList} = this.state
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      venue,
      result,
      umpires,
    } = latestMatchsList
    return (
      <div className="bg-container">
        <div className="team-banner-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/kkr-team-img.png"
            alt="banner"
            className="team-banner-img-size"
          />
        </div>
        <h1 className="latest-matches-heading">Latest Matches</h1>
        <div className="latest-matches-container">
          <div className="latest-match-description">
            <h1 className="compete-team-heading">{competingTeam}</h1>
            <p className="date">{date}</p>
            <p className="venu">{venue}</p>
            <p className="status">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="compete-team-logo"
          />
          <div className="innings-details-container">
            <h1 className="first-innings-heading">First Innings</h1>
            <p className="innings-para">{firstInnings}</p>
            <h1 className="second-innings-heading">Seconds Innings</h1>
            <p className="innings-para">{secondInnings}</p>
            <h1 className="man-of-the-match-heading">Man Of The Match</h1>
            <h1 className="innings-para">{manOfTheMatch}</h1>
            <h1 className="umpires-heading">Umpires</h1>
            <p className="innings-para">{umpires}</p>
          </div>
        </div>
        <ul>
          <div className="flex-wrap-container">
            {matchesDetailsList.map(eachItem => (
              <MatchCard eachList={eachItem} key={eachItem.id} />
            ))}
          </div>
        </ul>
      </div>
    )
  }
}

export default TeamMatches
