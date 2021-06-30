import { Fragment } from 'react';
import InputField from '../../components/InputField';
import SubmitButton from '../../components/SubmitButton';

interface WhoQuestionProps {
  nextStep: () => void;
  answer: string;
  getQuestion: (word: string) => void;
}

const WhoQuestionForm = (props: WhoQuestionProps) => {
  return (
    <Fragment>
      <div className='card center'>
        <form>
          <InputField
            label={'Who ?'}
            type={'string'}
            value={props.answer}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              props.getQuestion(e.target.value)
            }
          ></InputField>
          <SubmitButton value={'Next'} onClick={props.nextStep}></SubmitButton>
        </form>
      </div>
    </Fragment>
  );
};

export default WhoQuestionForm;
