export interface IStandardAction {
    type: string,
    payload?: any
}

export interface IPrize {
    hot: boolean,
    id: number,
    name: string,
    new: boolean
}