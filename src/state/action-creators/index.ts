import { ActionType } from '../action-types/index';
import { Action } from '../actions/index';
import { Dispatch } from 'redux';

export const PrevStep = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.PrevStep,
    });
  };
};
export const NextStep = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.NextStep,
    });
  };
};

export const getWhoQuestion = (answer: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WhoQuestion,
      payload: answer,
    });
  };
};
export const getWhatQuestion = (answer: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WhatQuestion,
      payload: answer,
    });
  };
};
export const getWhenQuestion = (answer: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WhenQuestion,
      payload: answer,
    });
  };
};
export const getWhereQuestion = (answer: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WhereQuestion,
      payload: answer,
    });
  };
};
export const getResult = (answer: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.Result,
      payload: answer,
    });
  };
};
