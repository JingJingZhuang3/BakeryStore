import * as api from "../Api/apiUtils"

export const getAllItems = () => async (dispatch: any) => {
  try {
    const { data } = await api.retrieveAllitems();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log("error?.message");
  }
};