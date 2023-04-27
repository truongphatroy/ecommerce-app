import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/actions/action";
import classes from "./ListImage.module.scss";

const ListImage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return <div>ListImage</div>;
};

export default ListImage;
