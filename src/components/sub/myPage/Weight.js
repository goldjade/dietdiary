import React from "react";
import up from "../../../assets/images/icon/icon_m_Increase.png";
import down from "../../../assets/images/icon/icon_m_descent.png";
import { useContext } from "react";
import { MypageContext } from "../../../context/MypageContext";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Weight = ({userInfo}) => {
  const { human } = useContext(MypageContext);
  const weightChange = userInfo.miWeight - userInfo.miGoalKg;
  // console.log(weightChange);
  return (
    <div className="m-auto w-full h-[165px] rounded-2xl bg-white border box-border mb-[20px]">
      <p className="text-xl text-main m-8 mb-1">체중 변화</p>
      <div className="flex items-center justify-center gap-40">
        <div className="grid justify-center text-center">
          <p className="text-3xl text-textGray font-MuseoModerno font-normal">
            {userInfo.miGoalKg} kg
          </p>
          <p className="text-m text-second">목표체중</p>
        </div>
        <div className="grid justify-center text-center">
          <p className="text-3xl text-textGray font-MuseoModerno font-normal">
            {userInfo.miWeight} kg
          </p>
          <p className="text-m text-second">현재체중</p>
        </div>
        <div className="grid justify-center text-center">
          <div className="flex items-center">
            {/* <p className="text-3xl text-textRed font-MuseoModerno font-medium">
              0.5 kg
            </p> */}
            <p className="text-3xl text-main font-MuseoModerno font-medium">
              {weightChange} kg
            </p>
            {weightChange > 0 ? (
              <img src={up} alt="up" className="w-[20px] h-[14px]" />
            ) : (
              <img src={down} alt="up" className="w-[20px] h-[14px]" />
            )}
            {/* <img src={up} alt="up" className="w-[20px] h-[14px]"/>
            <img src={down} alt="up" className="w-[20px] h-[14px]" /> */}
          </div>
          <p className="text-m text-second">체중증감</p>
        </div>
      </div>
    </div>
  );
};

export default Weight;
