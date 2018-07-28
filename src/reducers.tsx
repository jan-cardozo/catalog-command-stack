import { Set } from "immutable";
import { ADD_PRIZE, REMOVE_PRIZE, UPDATE_PRIZE } from "./actions";
import { IPrize, IStandardAction } from "./types";

/**
 * Creates a new Prize instance.
 * @constructor
 * @param aId Id of the new instance
 * @param aName Name of the new instance
 * @param isHot Should the Prize be marked as hot?
 * @param isNew Should the Prize be marked as new?
 */
function Prize(aId: number, aName: string, isHot: boolean, isNew: boolean): IPrize {
    return {
        hot: isHot,
        id: aId,
        name: aName,
        new: isNew
    };
}

const defaultState = Set.of(
    Prize(1, "Prize 1", true, true),
    Prize(2, "Prize 2", false, false),
    Prize(3, "Prize 3", true, false)
);

export default function appReducer(state: Set<IPrize> = defaultState, action: IStandardAction){
    switch (action.type) {
        case ADD_PRIZE:
            return state.add(Prize(state.size, "", false, false));
        case REMOVE_PRIZE:
            break;
        case UPDATE_PRIZE:
            break;
    
        default:
            return state;
    }
}