import {IPlayer} from "../data/data";

export const getAllTeamScore = (players: IPlayer[]) => {
    return players.reduce((acc, item) => acc + item.score, 0)
}