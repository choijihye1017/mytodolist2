// src/modules/toDo.js

const INSERT_TODO = "INSERT_TODO";
const ITIS_DONE = "ITIS_DONE";
const DELETE_TODO = "DELETE_TODO";
export const insertToDo = (payload) => {
  return {
    type: INSERT_TODO,
    payload: payload,
  };
};
export const itIsDone = (payload) => {
  return {
    type: ITIS_DONE,
    payload: payload,
  };
};

export const deleteToDo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};
// 초기 상태값
const initialState = [];

// 리듀서
const toDo = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO:
      return state.filter((item) => {
        if (item.id === action.payload) {
          return;
        } else {
          return item;
        }
      });
    case INSERT_TODO:
      return [...state, action.payload];
    case ITIS_DONE:
      return state.filter((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
          return item;
        } else {
          return item;
        }
      });

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default toDo;
