import action from "./../classes/action";
import { actionTypeEnum } from "./../enums/actionTypeEnum";
import { item } from "../components/indexContainer";

export default function itemsReducer(state = new Array<item>(), action: action<any>) {
    switch (action.type) {
        case actionTypeEnum[actionTypeEnum.fetchAllData]: {
            return [...state, ...action.payload];
        }
        case actionTypeEnum[actionTypeEnum.deleteItem]: {
            const newList = state.filter((i)=>i._id !== action.payload)
            return [...newList]
        }
        case actionTypeEnum[actionTypeEnum.addItem]: {
            console.log('action.payload = ',action.payload);
            return [...state, ...action.payload];
        } 
    }
    return state;
}