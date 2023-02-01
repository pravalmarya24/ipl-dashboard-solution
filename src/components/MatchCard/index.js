import './index.css'

// Write your code here
const MatchCard = props => {
  const {eachList} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = eachList
  return (
    <li className="match-list">
      <div className="matches-card-container">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="match-card-logo"
        />
        <p className="team-heading">{competingTeam}</p>
        <p className="result-para">{result}</p>
        <p className="match-status-para">{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
