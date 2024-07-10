import { useCallback, useRef, useState } from 'react';

import {
  Button,
  CircularProgress,
  ClickAwayListener,
  Grid,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';

import { useDispatch } from 'react-redux';

import ActionIcon from '@/assets/svg/add-circle.svg';

import styles from './styles';

import { setInput } from '@/redux/slices/chatSlice';

const QuickActionButton = (props) => {
  const { onAction, defaultText } = props;

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [buttonText, setButtonText] = useState(defaultText);
  const [buttonColor, setButtonColor] = useState(null);
  const anchorRef = useRef(null);

  const handleQuickAction = useCallback(() => {
    setLoading(true);

    // Add any other logic you want to perform when the button is clicked
    setTimeout(() => {
      setLoading(false);
      setOpen((preOpen) => !preOpen);
    }, 500);
  }, [dispatch, onAction]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleActionClick = ( text, color) => {
    dispatch(setInput(onAction));
    setButtonText(text);
    setButtonColor(color);
    handleClose();
  };

  const isDisabled = loading; 

  return (
    <Grid {...styles.actionButtonGridProps}>
      <IconButton>
        <Button
          onClick={handleQuickAction}
          {...styles.actionButtonProps(buttonColor)}
          disabled={loading}
          ref={anchorRef}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: '#FFFFFF' || 'inherit' }}/>
          ) : (
            <ActionIcon {...styles.iconButtonProps} />
          )}
          <span style={{ paddingLeft: '5px' }}>
            {loading ? 'Loading...' : buttonText}
          </span>
        </Button>
      </IconButton>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="top"
        disablePortal
        {...styles.popperProps}
      >
        <Paper elevation={3} {...styles.paperProps}>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList {...styles.menuListProps}>
            <MenuItem
                onClick={() => handleActionClick('Actions', null)}
                disabled={isDisabled}
                {...styles.menuItemProps(isDisabled)}
              >
                Default Actions
              </MenuItem>
              <MenuItem
                onClick={() => handleActionClick('Suggest Techniques', '#1AD6A1')}
                disabled={isDisabled}
                {...styles.menuItemProps(isDisabled)}
              >
                Suggest Techniques
              </MenuItem>
              <MenuItem
                onClick={() => handleActionClick('Recommend Books', '#1AD6A1')}
                disabled={isDisabled}
                {...styles.menuItemProps(isDisabled)}
              >
                Recommend Books
              </MenuItem>
              <MenuItem
                onClick={() => handleActionClick('Summarize', '#1AD6A1')}
                disabled={isDisabled}
                {...styles.menuItemProps(isDisabled)}
              >
                Summarize
              </MenuItem>
             
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </Grid>
  );
};

export default QuickActionButton;
