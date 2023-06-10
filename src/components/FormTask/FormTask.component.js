import React from "react";

import styles from "./FormTask.module.css";

function FormTask({ onChange, onSubmit, onClick, title, desc, status }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label} htmlFor='title'>
        Title
      </label>
      <input
        className={styles.input}
        type='text'
        name='title'
        id='title'
        onChange={onChange}
        value={title}
        placeholder='Add Title'
        required
      />
      <label className={styles.label} htmlFor='description'>
        Description
      </label>
      <textarea
        className={styles.textarea}
        name='description'
        id='description'
        cols='10'
        rows='10'
        onChange={onChange}
        value={desc}
        placeholder='Add Description'
      />
      <label className={styles.label} htmlFor='status'>
        Status
      </label>
      <select
        className={styles.select}
        name='status'
        id='status'
        onChange={onChange}
        value={status}
      >
        <option className={styles.opt} value='to do'>
          To Do
        </option>
        <option value='on progress'>On Progress</option>
        <option value='finish'>Finish</option>
      </select>
      <button className={styles.btn} type='submit' onSubmit={onClick}>
        Add Card
      </button>
    </form>
  );
}

export default FormTask;
