import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

// Write your code here
class Home extends Component {
  state = {teamCardList: []}

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

    this.setState({teamCardList: formattedData})
  }

  render() {
    const {teamCardList} = this.state
    return (
      <div className="home-bg-container">
        <div className="ipl-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo-size"
          />
          <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
        </div>
        <ul className="team-card-unordered-list">
          {teamCardList.map(eachListItem => (
            <TeamCard cardList={eachListItem} key={eachListItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
