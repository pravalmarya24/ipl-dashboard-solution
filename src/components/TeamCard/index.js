import {Link} from 'react-router-dom'
import './index.css'

// Write your code here
const TeamCard = props => {
  const {cardList} = props
  const {id, name, teamImageUrl} = cardList
  return (
    <Link to="/">
      <li className="home-team-card-list">
        <div className="team-card-container">
          <img src={teamImageUrl} alt={name} className="ipl-team-name-logo" />
          <h1 className="team-name-heading">{name}</h1>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
