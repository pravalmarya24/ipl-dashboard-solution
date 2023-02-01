import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'

// Write your code here
class TeamMatches extends Component {
  state = {
    matchesDetailsList: [],
    latestMatchesList: [],
    bannerUrl: '',
    isLoader: true,
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatchData = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      venue: data.latest_match_details.venue,
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      id: data.latest_match_details.id,
    }
    const formattedData = data.recent_matches.map(each => ({
      competingTeamLogo: each.competing_team_logo,
      competingTeam: each.competing_team,
      result: each.result,
      matchStatus: each.match_status,
      id: each.id,
    }))
    const bannerUrlData = {
      teamBannerUrl: data.team_banner_url,
    }

    this.setState({
      matchesDetailsList: formattedData,
      latestMatchesList: latestMatchData,
      bannerUrl: bannerUrlData,
      isLoader: false,
    })
  }

  render() {
    const {
      matchesDetailsList,
      latestMatchesList,
      bannerUrl,
      isLoader,
    } = this.state
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
    } = latestMatchesList
    return (
      <div className="bg-container" testid="loader">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div data-testid="loader">
            <div className="team-banner-img-container" testid="loader">
              <img
                src={bannerUrl.teamBannerUrl}
                alt="team banner"
                className="team-banner-img-size"
              />
            </div>

            <h1 className="latest-matches-heading">Latest Matches</h1>
            <div className="latest-matches-container">
              <div className="latest-match-description">
                <p className="compete-team-heading">{competingTeam}</p>
                <p className="date">{date}</p>
                <p className="venue">{venue}</p>
                <p className="status">{result}</p>
              </div>
              <img
                src={competingTeamLogo}
                alt={`latest match ${competingTeam}`}
                className="compete-team-logo"
              />
              <div className="innings-details-container">
                <h1 className="first-innings-heading">First Innings</h1>
                <p className="innings-para">{firstInnings}</p>
                <h1 className="second-innings-heading">Seconds Innings</h1>
                <p className="innings-para">{secondInnings}</p>
                <p className="man-of-the-match-heading">Man Of The Match</p>
                <p className="innings-para">{manOfTheMatch}</p>
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
        )}
      </div>
    )
  }
}

export default TeamMatches
