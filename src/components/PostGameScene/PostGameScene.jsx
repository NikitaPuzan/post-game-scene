import React from 'react';
import {team1, team2} from "../../data/data";
import PlayerList from "../PlayerBlock/PlayerList";
import './css/postGameScene.css'

const PostGameScene = () => {
    return (
        <div className="container">
            <div className="player-stats">
                {team1.map(player => <PlayerList key={player.id} player={player}/>)}
            </div>
            <div className="player-stats">
                {team2.map(player => <PlayerList key={player.id} player={player}/>)}
            </div>
        </div>
    );
};

export default PostGameScene;