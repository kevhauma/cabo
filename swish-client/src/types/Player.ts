import { CardType } from "./Card";

export type PlayerType = {
    id: string,
    name: string,
    score: number,
    cards: CardType[],
}