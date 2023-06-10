import React, { useState } from "react";

import styles from "./TaskList.module.css";
import handlers from "../../containers/Dashboard/Dashboard.handler";
import Task from "../Task/Task.component";

const { updateStatus, deleteTask } = handlers;

function TaskList({ tasks, fetchData }) {
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setStatus({ [e.target.name]: e.target.value });
  };

  const handleUpdateStatus = async (task) => {
    await updateStatus(task, status);
    fetchData();
  };

  const handleDelete = async (task) => {
    await deleteTask(task);
    fetchData();
  };

  const renderList = (
    <>
      <div className={styles.wrapper_list_left}>
        <h2 className={styles.title}>To Do</h2>
        {tasks
          .filter((item) => item.status === "to do")
          .map((item) => {
            return (
              <div className={styles.card_left} key={item.id}>
                <Task
                  item={item}
                  onChange={handleChange}
                  handleChangeStatus={() => handleUpdateStatus(item.id)}
                  handleDelete={() => handleDelete(item.id)}
                />
              </div>
            );
          })}
      </div>
      <div className={styles.wrapper_list_center}>
        <h2 className={styles.title}>Progress</h2>
        {tasks
          .filter((item) => item.status === "on progress")
          .map((item) => {
            return (
              <div className={styles.card_center} key={item.id}>
                <Task
                  item={item}
                  onChange={handleChange}
                  handleChangeStatus={() => handleUpdateStatus(item.id)}
                  handleDelete={() => handleDelete(item.id)}
                />
              </div>
            );
          })}
      </div>
      <div className={styles.wrapper_list_right}>
        <h2 className={styles.title_finish}>Finish</h2>
        {tasks
          .filter((item) => item.status === "finish")
          .map((item) => {
            return (
              <div className={styles.card_right} key={item.id}>
                <Task
                  item={item}
                  onChange={handleChange}
                  handleChangeStatus={() => handleUpdateStatus(item.id)}
                  handleDelete={() => handleDelete(item.id)}
                />
              </div>
            );
          })}
      </div>
    </>
  );

  return <div className={styles.wrapper}>{renderList}</div>;
}

export default TaskList;
