import { IStandardAction } from "./types";

/**
 * Action type for when the user adds a new prize.
 * @type {string}
 */
export const ADD_PRIZE: string = 'ADD_PRIZE';
export type ADD_PRIZE = typeof ADD_PRIZE;

/**
 * Action type for when the user removes a prize.
 * @type {string}
 */
export const REMOVE_PRIZE: string = 'REMOVE_PRIZE';
export type REMOVE_PRIZE = typeof REMOVE_PRIZE;

/**
 * Action type for when the user updates the data of a prize.
 * @type {string}
 */
export const UPDATE_PRIZE: string = 'UPDATE_PRIZE';
export type UPDATE_PRIZE = typeof UPDATE_PRIZE;


export function addPrize(): IStandardAction {
    return {
        type: ADD_PRIZE
    };
}

export function removePrize(): IStandardAction {
    return {
        type: REMOVE_PRIZE
    }
}

export function updatePrize(prize: object): IStandardAction {
    return {
        payload: prize,
        type: UPDATE_PRIZE,
    }
}