import React, { useEffect, useState } from 'react';

import config from './Dashboard.config';
import styles from './Dashboard.module.css';
import handlers from './Dashboard.handler';
import Navbar from '../../components/Navbar/Navbar.component';
import Loading from '../../components/Loading/Loading.component';
import TaskList from '../../components/TaskList/TaskList.component';

const { initialValues } = config;
const { fetch, createTask, fetchById } = handlers;

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [inputValues, setInputValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = React.useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetch();
    setTasks(data);
    setIsLoading(false);
  };

  const handleClose = () => {
    setInputValues(initialValues);
    setOpen(false);
  };

  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      await createTask(inputValues);
      setInputValues(initialValues);
      fetchData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <Navbar
            onChange={handleChange}
            onSubmit={handleSubmit}
            title={inputValues.title}
            desc={inputValues.description}
            status={inputValues.status}
            setOpen={() => setOpen(true)}
            open={open}
            handleClose={handleClose}
          />
          <TaskList tasks={tasks} fetchData={fetchData} />
        </div>
      )}
    </>
  );
}

export default Dashboard;
