import React, { Fragment } from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: InputFieldProps) => {
  return (
    <Fragment>
      <div>
        <label>{props.label}</label>
      </div>
      <div>
        <input
          type={props.type}
          required
          onChange={props.onChange}
          value={props.value}
        ></input>
      </div>
    </Fragment>
  );
};

export default InputField;
