import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {Spin } from 'antd';
import { getAllActivities } from "../../../features/activities/activitySlice";
import "./Activity.css";

const Activity = () => {
  const { activities, isLoading } = useSelector((state) => state.activities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities());
  }, []);

  console.log(activities);

  const activity = activities?.map((a) => {
    if (isLoading) {
      return <div>
        <h1>Cargando...</h1>;
        <Spin size="large" />
      </div>
    }

    return (
      <div className="activity" key={a.id}>
        <div>
        <Link to = {"/activity/" + a.id }>
          {a.image}
          <br />
          <br />
          {a.title}
          <br />
          {a.body}
          <br />
          {a.address}
        </Link>
        </div>
      </div>
    );
  });

  return <div>{activity}</div>;
};

export default Activity;
