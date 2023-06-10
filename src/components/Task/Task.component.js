import React from "react";

import styles from "./Task.module.css";

function Task({ onChange, handleChangeStatus, handleDelete, item }) {
  return (
    <>
      <p className={styles.title_card}>{item.title}</p>
      <p className={styles.description_card}>{item.description}</p>
      <select
        className={styles.select}
        name='status'
        id='status'
        onChange={onChange}
        onClick={handleChangeStatus}
        value={item.status}
      >
        <option value='to do'>To Do</option>
        <option value='on progress'>On Progress</option>
        <option value='finish'>Finish</option>
      </select>
      <button className={styles.btn} onClick={handleDelete} data-title='Delete'>
        <i className='fa-solid fa-trash'></i>
      </button>
    </>
  );
}

export default Task;
