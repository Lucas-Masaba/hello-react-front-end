import getMessage from '../APIHelper';

// Constants
const GET_MESSAGE = 'GET_MESSAGE';

// Actions
export const getRandomMessage = () => async (dispatch) => {
  const message = await getMessage();

  dispatch({
    type: GET_MESSAGE,
    payload: message,
  });
};

// Reducers
const initialState = { message: '' };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
