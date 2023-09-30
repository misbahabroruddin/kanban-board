import React from 'react';

import ModalForm from '../Modal/Modal.component';
import styles from './Navbar.module.css';

function Navbar({
  onChange,
  onSubmit,
  title,
  desc,
  status,
  setOpen,
  open,
  handleClose,
}) {
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <p className={styles.brand}>Kanban Board</p>
        <ModalForm
          onChange={onChange}
          onSubmit={onSubmit}
          title={title}
          desc={desc}
          status={status}
          setOpen={setOpen}
          open={open}
          handleClose={handleClose}
        />
      </div>
    </nav>
  );
}

export default Navbar;
