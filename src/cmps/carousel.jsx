import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { SearchOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { searchJobByName } from "../store/actions/jobs.actions.js";
import { NavLink } from "react-router-dom";

