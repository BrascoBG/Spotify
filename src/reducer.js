export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQDA1GTenBkPyz4LJxTbfd93nJojodjtTOygR882LaxJD9H_-Dv-gqjYwkIqmoSSnN_mOYzVDw0lXVBRq93tbmHFYb9wABkLMGdz4NEtjHARfG9ktQHqsAfB_ypzLhiQuMcv07Nz53owzbIB_qFgEBqvakvTrSKd5TjDqCyRmzEKf3M2",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
