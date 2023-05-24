import { AnyAction } from 'redux';
import { CREATE, DELETE, FETCH_ALL, UPDATE } from '../constants/actionTypes';

const initialState = [{
    title: "",
    info: "",
    price: 0,
    id: "",
    selectedFile: "",
},]

const itemsReducer = (items = initialState, action: AnyAction): any => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
      case CREATE:
        return [...items, action.payload];
      case UPDATE:
        return items.map((item: { id: any; }) => (item.id === action.payload.id ? action.payload : item));
      case DELETE:
        return items.filter((item: { id: any; }) => item.id !== action.payload);
      default:
        return items;
    }
};

export default itemsReducer;
  