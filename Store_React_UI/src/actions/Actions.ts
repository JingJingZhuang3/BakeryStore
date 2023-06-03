import * as api from '../api/ItemApi';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export const getItems = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchItems();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createItem = (post: IModel) => async (dispatch: any) => {
  try {
    const { data } = await api.createItem(post);

    console.log(data);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateItem = (id: string, post: IModel) => async (dispatch: any) => {
  try {
    const { data } = await api.updateItem(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deleteItem = (id: any) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
  try {
    await api.deleteItem(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
