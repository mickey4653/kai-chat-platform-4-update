// src/components/DiscoveryButton.jsx

import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { Button, useTheme } from '@mui/material';

import DiscoveryIcon from '@/assets/svg/discovery-icon.svg';

import styles from './styles';

const DiscoveryButton = ({ onClick }) => {
  const theme = useTheme();
  return (
    <Button
      variant="outlined"
      startIcon={<DiscoveryIcon />}
      sx={styles.actionButtonProps(theme.palette.Background.purple3).sx}
      onClick={onClick}
    >
      Discovery
    </Button>
  );
};

export default DiscoveryButton;
