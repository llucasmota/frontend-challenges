import React, {
  InputHTMLAttributes,
  useRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ name, type, placeholder, ...rest }) => {
  // const { fieldName, defaultValue, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFiled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container>
      <span>{name}</span>
      <input
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={handleInputBlur}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  );
};

export default Input;
