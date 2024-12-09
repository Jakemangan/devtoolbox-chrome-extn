import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface GradientBackgroundProps extends BoxProps {
  showGradient?: boolean;
  children: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ 
  showGradient = false, 
  children, 
  ...props 
}) => {
  return (
    <Box
      className={`input-container ${showGradient ? 'show-gradient' : ''}`}
      p="1px"
      borderRadius="lg"
      w="full"
      {...props}
    >
      {children}
    </Box>
  );
};

export default GradientBackground;