import React from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

export enum ButtonVariant {
  Normal = 'normal',
  Outlined = 'outlined',
  Contained = 'contained',
}

type PropsTypes = {
  children?: React.ReactNode;
  variant?: ButtonVariant,
  fullWidth?: boolean,
  onClick?: () => void;
};

function Button(props: PropsTypes) {
  const {
    children,
    variant = ButtonVariant.Normal,
    fullWidth = false,
    onClick = () => {},
  } = props;

  return (
    <button
      className={
        classNames(
          styles.button,
          {
            [styles.fullWidth]: fullWidth,
            [styles.variantNormal]: variant === ButtonVariant.Normal,
            [styles.variantOutlined]: variant === ButtonVariant.Outlined,
            [styles.variantContained]: variant === ButtonVariant.Contained,
          },
        )
      }
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
