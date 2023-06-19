import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, DatePicker, Select } from "antd";
import dayjs from "dayjs";

const Task = () => {
  const [des, setDesp] = useState("");
  const [select, setSelect] = useState("");
  const [dte, setDte] = useState("");
  const [err, setErr] = useState("");
  const [arr, setArr] = useState([]);

  const user = useSelector((state) => {
    return state.assign.map((item) => ({
      url: item.url,
      id: item.id,
      value: item.value,
      count: item.count,
    }));
  });

  const handleChange = (value) => {
    setSelect(value);
  };

  const addetails = () => {
    const values = {
      name: select,
      dte: dte,
      description: des,
    };
    if (!select || !des|| !dte) {
      setErr("Please fill all fields");
    }else {
      const existItem = arr.find((item) => item.name === select);
      if (existItem) {
        const updatedArr = arr.map((item) => {
          if (item.name === select) {
            return {
              ...item,
              count: item.count + 1,
              tasks: [...item.tasks, values],
            };
          }
          return item;
        });
        setArr(updatedArr);
      } else {
        setArr([...arr, { ...values, count: 1, tasks: [values] }]);
      }
      setDesp("");
      setSelect("");
      setDte("");
      setErr("");
    }
  };
  

  return (
    <>
      <div className="parent">
        <h1>Assign Task</h1>
        <textarea
          className="textarea"
          placeholder="Fill Description for project"
          onChange={(e) => {
            setDesp(e.target.value);
          }}
        />
        <Select
          className="select"
          defaultValue="select"
          onChange={handleChange}
          options={user}
        />
        <DatePicker
          className="datepicker"
          presets={[
            {
              label: "Yesterday",
              value: dayjs().add(-1, "d"),
            },
            {
              label: "Last Week",
              value: dayjs().add(-7, "d"),
            },
            {
              label: "Last Month",
              value: dayjs().add(-1, "month"),
            },
          ]}
          onChange={(e, dateString) => {
            setDte(dateString);
          }}
        />
        <Button
          type="dashed"
          size={"large"}
          className="button"
          onClick={addetails}
        >
          Add Details
        </Button>
        {err}
      </div>
      <div className="list">
        <div className="header">
          {user.map((i, index) => {
            const item = arr.find((element) => element.name === i.value);
            const count = item ? item.count : 0;

            return (
              <div className="items" key={index}>
                <img src={i.url} />
                <p>{i.value}</p>
                <p>{count}</p>
              </div>
            );
          })}
        </div>
        <h1 style={{ textAlign: "center" }}>List of users</h1>
        <div className="data">
          {arr.map((i, index) => {
            return (
              <div key={index} className="detailslist">
                <h5>{i.name}</h5>
                <p>All Tasks:</p>
                {i.tasks.map((task, taskIndex) => (
                  <div key={taskIndex}>
                    <p>Description:- {task.description}</p>
                    <p>Date: {task.dte}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Task;
