import { Fragment } from 'react';

import SubmitButton from '../../components/SubmitButton';
interface ResultProps {
  prevStep: () => void;
  who: string;
  what: string;
  when: string;
  where: string;
}

const Result = (props: ResultProps) => {
  return (
    <Fragment>
      <div className='card center'>
        <strong className='sentence'>{`${props.who} ${props.what} ${props.where} ${props.when}`}</strong>
        <SubmitButton value={'Back'} onClick={props.prevStep}></SubmitButton>
      </div>
    </Fragment>
  );
};

export default Result;
