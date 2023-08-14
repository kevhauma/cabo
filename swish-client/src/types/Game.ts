import { CardType } from "./Card";
import { PlayerType } from "./Player";

export type GameType = {
    id: string,
    name: string,
    socketConnection: string,
    deck: CardType[],
    discard: CardType[],
    players: PlayerType[],
    gameState: GAME_STATE,

}


export enum GAME_STATE {
 PRE_START = "PRESTART",
 PREPARE = "PREPARE",
 ROUND_DECISION ="ROUNDDECISION",
 ROUND_ACTION ="ROUNDACTION",
 MATCH ="MATCH",
 SWISH_CALLED ="SWISHCALLED",
 SWISH_END="SWISHEND",
}