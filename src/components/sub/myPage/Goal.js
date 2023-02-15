import React from "react";

const Goal = () => {
  return (
    <div className="m-auto grid grid-cols-3 gap-3 mb-[20px] rounded-2xl">
      <div className="h-[200px] bg-white rounded-2xl border">
        <p className="text-main m-8 text-xl">기간</p>
        <span className="flex items-center justify-center">
          <p className="text-[62px] font-MuseoModerno">300</p>
          <p className="text-[26px] text-textGray font-normal">일</p>
        </span>
      </div>
      <div className="h-[200px] bg-white rounded-2xl border">
        <p className="text-main m-8 text-xl">목표칼로리</p>
        <span className="flex items-center justify-center">
          <p className="text-[62px] font-MuseoModerno">2500</p>
          <p className="text-[26px] text-textGray font-MuseoModerno font-normal">Kcal</p>
        </span>
      </div>
      <div className="h-[200px] bg-white rounded-2xl border">
        <p className="text-main m-8 text-xl">목표음수량</p>
        <span className="flex items-center justify-center">
          <p className="text-[62px] font-MuseoModerno">8</p>
          <p className="text-[26px] text-textGray font-normal">컵</p>
        </span>
      </div>
    </div>
  );
};

export default Goal;