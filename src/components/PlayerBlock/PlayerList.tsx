import React, {useState} from 'react';
import Tooltip from "../Tooltip/Tooltip";

import './css/playerBlock.css';
import tooltipSvg from '../../img/tooltip.svg';
import addFriendsSvg from '../../img/add-friend.svg';
import doneSvg from '../../img/done.svg';
import {IPlayer} from "../../data/data";

interface IPlayerListProps {
    player: IPlayer
}

const PlayerList: React.FC<IPlayerListProps> = ({player}) => {
    const [isFriend, setIsFriend] = useState(false);
    const [tooltip, setTooltip] = useState(false);

    const handleTooltip = () => {
        setTooltip(!tooltip)
    }

    const closeTooltip = () => {
        setTooltip(false)
    }

    const handleAddFriend = () => {
        setIsFriend(!isFriend)
    }

    return (
        <div className="player-card">
            <div className="player-info">
                <div className="player-friends">
                    {
                        isFriend ? <img className="done"  onClick={handleAddFriend} src={doneSvg} alt="done"/>
                            : <img className="tooltip" onClick={handleAddFriend} src={addFriendsSvg} alt="add friends" title="Send a friend request"/>
                    }
                </div>
                <div className="player-nickname">
                    {player.nickname}
                    <img className="tooltip" onClick={handleTooltip} src={tooltipSvg} alt="tooltip"/>
                </div>
                <div className="player-score">{player.score}</div>
                <div className={`player-status ${player.status === 'alive' ? 'alive' : 'dead'}`}>
                    {player.status}
                </div>
            </div>
            {tooltip && <Tooltip isOpen={tooltip} kills={player.info.kill} death={player.info.death} onClose={closeTooltip}/>}
        </div>
    );
};

export default PlayerList;