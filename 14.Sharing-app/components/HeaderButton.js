import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import theme from '../theme';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      IconComponent={Ionicons}
      iconSize={23}
      color={theme.palette.white}
      {...props}
    />
  );
};

export default CustomHeaderButton;
