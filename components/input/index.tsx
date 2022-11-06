import React, { useState, useCallback } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

export enum InputType {
  Text = 'text',
  Search = 'search',
}

type PropsTypes = {
  type?: InputType
  fullWidth?: boolean,
  value?: string,
  placeholder?: string,
  onChange?: (value: string) => void;
};

function Input(props: PropsTypes) {
  const {
    type = InputType.Text,
    fullWidth = false,
    value: defaultValue = '',
    placeholder = '',
    onChange = () => {},
  } = props;

  const [value, setValue] = useState(defaultValue.toString());

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      onChange(e.target.value);
    },
    [],
  );

  return (
    <input
      className={
        classNames(
          styles.input,
          {
            [styles.fullWidth]: fullWidth,
          },
        )
      }
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleOnChange}
    />
  );
}

export default Input;
