const initialState = { ListImage: null, loading: false, error: null };

const reducerListImage = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_IMAGE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_IMAGE_SUCCESS":
      return {
        ...state,
        loading: false,
        ListImage: action.payload,
      };
    case "FETCH_IMAGE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducerListImage;
