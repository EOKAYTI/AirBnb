import React, { useEffect, useMemo, useState } from "react";
import { viTriService } from "../../../../services/viTri.service";
import { useNavigate } from "react-router-dom";

const Location = () => {
  const navigate = useNavigate();
  const [listLocation, setListLocation] = useState([]);

  useEffect(() => {
    viTriService
      .getViTri()
      .then((res) => {
        console.log(res.data.content);
        setListLocation(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemListLocation = useMemo(() => {
    return listLocation.map((item, index) => {
      return (
        <div
          className="w-3/12 flex items-center"
          key={index}
          onClick={() => {
            console.log(index);
            navigate(`/detail/${item.id}`);
          }}
        >
          <img className="w-14 h-14 rounded-lg" src={item.hinhAnh} alt="" />
          <div className="infor ms-2">
            <h5 className="inline-block font-semibold">{item.tenViTri}</h5>
            <p className="">{item.tinhThanh}</p>
          </div>
        </div>
      );
    });
  });

  return (
    <section className="location">
      <div className="container">
        <h2 className="text-3xl font-bold my-5">
          Khám phá những điểm đến gần đây
        </h2>
        <div className="location_group flex justify-start items-center flex-wrap gap-y-5">
          {itemListLocation}
        </div>
      </div>
    </section>
  );
};

export default Location;