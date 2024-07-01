export const getAllTeamScore = (players) => {
    return players.reduce((acc, item) => acc + item.score, 0)
}