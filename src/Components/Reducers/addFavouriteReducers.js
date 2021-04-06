const AddToFavourite = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVOURITE": {
      return [action.payload, ...state];
    }

    case "REMOVE_FAVOURITE": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default AddToFavourite;
