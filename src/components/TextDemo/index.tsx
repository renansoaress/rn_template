import React, { memo } from 'react';
import { TextProps } from 'react-native';
import { StyledText } from './styles';

interface TextDemoProps extends TextProps {
  children: string;
}

const TextDemo: React.FC<TextDemoProps> = ({ children }) => {
  const test = () => {
    console.log('oiii');
  };
  return <StyledText>{children}</StyledText>;
};

export default memo(TextDemo);
