import './index.css'

// Write your code here
const TeamCard = props => {
  const {cardList} = props
  console.log(cardList)
  return (
    <li className="home-team-card-list">
      <div className="team-card-container">
        <img src="o" alt="l" className="ipl-team-name-logo" />
        <h1 className="team-name-heading">l</h1>
      </div>
    </li>
  )
}

export default TeamCard
