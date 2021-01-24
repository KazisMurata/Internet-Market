import { ADD_LIGHT_TO_BASKET } from "../../Constants/Type";

const initialState: Array<number> = [];

export const basket = (state = initialState, {type, payload}: any) => {
    switch (type) {
        case ADD_LIGHT_TO_BASKET:
            return [...state, payload];
        default :
            return state;
    };
};