import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

export const colorchanged = (color, changeType) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};

export const statuschanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};
