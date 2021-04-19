import * as filterTypes from "./types"

function reducer(_, action){
    switch (action.type) {
        case filterTypes.TOGGLE_FILTER:
            return action.payload.filterTypes
        default:
            throw new Error()    
    }
}

export default reducer;