import { ActionType } from '../action-types/index';

interface PrevStepAction {
  type: ActionType.PrevStep;
}
interface NextStepAction {
  type: ActionType.NextStep;
}
interface WhoQuestionAction {
  type: ActionType.WhoQuestion;
  payload: string;
}
interface WhatQuestionAction {
  type: ActionType.WhatQuestion;
  payload: string;
}
interface WhenQuestionAction {
  type: ActionType.WhenQuestion;
  payload: string;
}
interface WhereQuestionAction {
  type: ActionType.WhereQuestion;
  payload: string;
}
interface ResultAction {
  type: ActionType.Result;
  payload: string;
}
export type Action =
  | PrevStepAction
  | NextStepAction
  | WhoQuestionAction
  | WhatQuestionAction
  | WhenQuestionAction
  | WhereQuestionAction
  | ResultAction;
