import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

// Write your code here
class Home extends Component {
  state = {teamCardList: [], isLoader: true}

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const team = data.teams
    const formattedData = team.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamCardList: formattedData, isLoader: false})
  }

  render() {
    const {teamCardList, isLoader} = this.state
    return (
      <div className="home-bg-container" testid="loader">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="ipl-logo-card-list-container" testid="loader">
            <div className="ipl-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo-size"
              />
              <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
            </div>
            <ul className="team-card-unordered-list">
              <div className="flex-wrap-container" data-testid="loader">
                {teamCardList.map(eachListItem => (
                  <TeamCard cardList={eachListItem} key={eachListItem.id} />
                ))}
              </div>
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
