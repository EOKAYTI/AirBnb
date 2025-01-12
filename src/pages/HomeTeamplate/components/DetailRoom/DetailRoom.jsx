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
            <h3 className="font-semibold text-3xl my-4">
              {detailRoom.tenPhong}
            </h3>
            <img
              className="w-full rounded-lg"
              src={detailRoom.hinhAnh}
              alt="hinh anh"
            />
          </div>
          <div className="group_moTa grid grid-cols-12 gap-4">
            <div className="moTa_left col-span-8">
              <p>{detailRoom.moTa}</p>
              <ul>
                <li>Khách: {detailRoom.khach}</li>
                <li>Phòng ngủ: {detailRoom.phongNgu}</li>
                <li>Giường: {detailRoom.giuong}</li>
                <li>Phòng tắm: {detailRoom.phongTam}</li>
              </ul>
            </div>
            <div className="moTa_right col-span-4">hi</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailRoom;
