import React from 'react';
import {getAllTeamScore} from "../../helpers/helpers";
import {team1, team2} from "../../data/data";
import './css/scoreboard.css'

let team1Result = '';
let team2Result = '';
const Scoreboard = () => {
    const team1Score = getAllTeamScore(team1)
    const team2Score = getAllTeamScore(team2)

    if (team1Score > team2Score) {
        team1Result = 'Wins!';
        team2Result = 'Lose!';
    } else if (team2Score > team1Score) {
        team1Result = 'Lose!';
        team2Result = 'Wins!';
    } else {
        team1Result = 'Team 1 wins!';
        team2Result = 'Team 1 wins!';
    }

    return (
        <div className="scoreboard">
            <h1 className="scoreboard-header">Scoreboard</h1>
            <div className="team-scores">
                <div className="team">
                    <h3>Team 1</h3>
                    <p>{team1Result}</p>
                    <p>Score: {team1Score}</p>
                </div>
                <div className="team">
                <h3>Team 2</h3>
                    <p>{team2Result}</p>
                    <p>Score: {team2Score}</p>
                </div>
            </div>
        </div>
    );
};

export default Scoreboard;
