import { Action } from '../actions/index';
import { ActionType } from '../action-types/index';
const initialState = {
  step: 1,
  who: '',
  what: '',
  when: '',
  where: '',
  result: '',
};

const gameReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.PrevStep:
      return {
        ...state,
        step: state.step - 1,
      };
    case ActionType.NextStep:
      return {
        ...state,
        step: state.step + 1,
      };

    case ActionType.WhoQuestion:
      return {
        ...state,
        who: action.payload,
      };
    case ActionType.WhatQuestion:
      return {
        ...state,
        what: action.payload,
      };
    case ActionType.WhenQuestion:
      return {
        ...state,
        when: action.payload,
      };
    case ActionType.WhereQuestion:
      return {
        ...state,
        where: action.payload,
      };
    case ActionType.Result:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};
export default gameReducer;
