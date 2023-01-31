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
          alt={competingTeam}
          className="match-card-logo"
        />
        <h1 className="team-heading">{competingTeam}</h1>
        <p className="result-para">{result}</p>
        <p className="match-status-para">{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
