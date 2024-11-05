import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import initialState from "./initialState";

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLORCHANGED:
      //   const { color, changeType } = action.payload;
      switch (action.payload.changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, action.payload.color],
          };

        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== action.payload.color
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default filtersReducer;
