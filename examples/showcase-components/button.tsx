import * as React from 'react';
import {ThemeContext} from './theme-provider';

type TButtonProps = {
  children: React.ReactNode;
  onClick: (e: any) => void;
  size: keyof typeof SIZE;
  disabled: boolean;
};

export const SIZE = {
  default: 'default',
  compact: 'compact',
  large: 'large',
};

export const Button: React.FC<TButtonProps> = ({children, onClick, size, disabled}) => {
  const colors = React.useContext(ThemeContext);
  const getSizeStyle = (size: keyof typeof SIZE) => {
    switch (size) {
      case SIZE.compact:
        return {
          padding: '8px',
          fontSize: '14px',
        };
      case SIZE.large:
        return {
          padding: '18px',
          fontSize: '20px',
        };
      default:
        return {
          padding: '12px',
          fontSize: '16px',
        };
    }
  };
  const btnStyle = {
    ...getSizeStyle(size),
    background: disabled ? '#CCC' : colors.background,
    margin: '0px',
    color: disabled ? '#000' : colors.text,
    borderRadius: '5px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: disabled ? '#CCC' : colors.background,
  };
  return (
    <button onClick={onClick} style={btnStyle} disabled={disabled}>
      {children}
    </button>
  );
};
