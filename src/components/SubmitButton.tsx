import { Fragment } from 'react';

interface SubmitButtonProps {
  value: string;
  onClick: () => void;
}

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <Fragment>
      <div className='center'>
        <button
          onClick={() => {
            props.onClick();
          }}
        >
          {props.value}
        </button>
      </div>
    </Fragment>
  );
};

export default SubmitButton;
