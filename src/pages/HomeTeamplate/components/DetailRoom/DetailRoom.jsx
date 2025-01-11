import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { phongService } from "../../../../services/phong.service";

const DetailRoom = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [detailRoom, setDetailRoom] = useState([]);

  useEffect(() => {
    phongService
      .getChiTietPhong(id)
      .then((res) => {
        console.log(res.data.content);
        setDetailRoom(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="detailRoom">
      <div className="container">
        <div className="detail_group">
          <div className="group_info">
            <h3>{detailRoom.tenPhong}</h3>
            <img
              className="w-full rounded-lg"
              src={detailRoom.hinhAnh}
              alt=""
            />
          </div>
          <div className="group_moTa">{detailRoom.moTa}</div>
        </div>
      </div>
    </section>
  );
};

export default DetailRoom;
