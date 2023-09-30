import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import { Modal } from '@mui/base/Modal';
import FormTask from '../FormTask/FormTask.component';
import { Typography } from '@mui/material';

export default function ModalForm({
  onChange,
  onSubmit,
  title,
  desc,
  status,
  setOpen,
  open,
  handleClose,
}) {
  const handleOpen = () => setOpen(true);

  const handleCloseOnSubmit = (e) => {
    onSubmit(e);
    setOpen(false);
  };

  return (
    <div>
      <TriggerButton type='button' onClick={handleOpen}>
        Create Task
      </TriggerButton>
      <StyledModal
        aria-labelledby='unstyled-modal-title'
        aria-describedby='unstyled-modal-description'
        open={open}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            sx={{ pb: 2, textAlign: 'center' }}
          >
            Add new task
          </Typography>
          <FormTask
            onChange={onChange}
            onSubmit={handleCloseOnSubmit}
            title={title}
            desc={desc}
            status={status}
          />
        </Box>
      </StyledModal>
    </div>
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const blue = {
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
};

const grey = {
  50: '#ff2e63',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#ff2e63',
  900: '#24292f',
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: 400,
  borderRadius: '12px',
  padding: '16px 32px 24px 32px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : '#252A34',
  color: '#eaeaea',
  boxShadow: `0px 2px 24px ${
    theme.palette.mode === 'dark' ? '#000' : '#383838'
  }`,
});

const TriggerButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.2em + 22px);
  border-radius: 10px;
  padding: 5px 12px;
  line-height: 1.2;
  background-color: #252a34;
  color: #eaeaea;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    color: #eaeaea;
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
  `
);
