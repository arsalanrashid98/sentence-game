import { Fragment } from 'react';
import WhoQuestionForm from './forms/WhoQuestionForm';
import WhatQuestionForm from './forms/WhatQuestionForm';
import WhenQuestionForm from './forms/WhenQuestionForm';
import WhereQuestionForm from './forms/WhereQuestionForm';
import Result from './forms/Result';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator, State } from '../state';

const Sentence = () => {
  const dispatch = useDispatch();
  const {
    PrevStep,
    NextStep,
    getWhoQuestion,
    getWhatQuestion,
    getWhenQuestion,
    getWhereQuestion,
  } = bindActionCreators(actionCreator, dispatch);

  const { step, who, what, when, where } = useSelector(
    (state: State) => state.game
  );
  const renderSwitch = (param: number) => {
    switch (param) {
      case 1:
        return (
          <WhoQuestionForm
            answer={who}
            nextStep={NextStep}
            getQuestion={getWhoQuestion}
          />
        );
      case 2:
        return (
          <WhatQuestionForm
            answer={what}
            prevStep={PrevStep}
            nextStep={NextStep}
            getQuestion={getWhatQuestion}
          />
        );
      case 3:
        return (
          <WhenQuestionForm
            answer={when}
            prevStep={PrevStep}
            nextStep={NextStep}
            getQuestion={getWhenQuestion}
          />
        );
      case 4:
        return (
          <WhereQuestionForm
            answer={where}
            prevStep={PrevStep}
            nextStep={NextStep}
            getQuestion={getWhereQuestion}
          />
        );
      case 5:
        return (
          <Result
            prevStep={PrevStep}
            who={who}
            what={what}
            when={when}
            where={where}
          />
        );
      default:
        break;
    }
  };

  return <Fragment>{renderSwitch(step)}</Fragment>;
};

export default Sentence;
