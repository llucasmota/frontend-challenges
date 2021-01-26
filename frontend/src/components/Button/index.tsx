import React from 'react';
import { IconBaseProps } from 'react-icons';
import { ButtonComponent, Container } from './style';

interface IButton {
  icon?: React.ComponentType<IconBaseProps>;
  text?: string;
}

const Button: React.FC<IButton> = ({ text, icon: Icon }) => {
  return (
    <Container>
      <ButtonComponent>
        {Icon && <Icon size={20} />}
        {text && text}
      </ButtonComponent>
    </Container>
  );
};

export default Button;
