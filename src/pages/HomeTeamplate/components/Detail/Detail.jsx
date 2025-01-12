import React, { useEffect, useMemo, useState } from "react";
import { phongService } from "../../../../services/phong.service";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const navigate = useNavigate();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    phongService
      .getPhongThueTheoViTri(id)
      .then((res) => {
        console.log(res.data.content);
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemListDetail = useMemo(() => {
    return detail.map((item, index) => {
      return (
        <div
          key={index}
          className="item_item rounded-lg mb-5 cursor-pointer space-y-3"
          onClick={() => {
            console.log(index);
            navigate(`/detail-room/${item.id}`);
          }}
        >
          <div className="item_img h-40">
            <img
              src={item.hinhAnh}
              alt="hinhAnh"
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
          <div className="item_info">
            <h2 className="font-semibold text-lg">{item.tenPhong}</h2>
            <p className="text-gray-500 truncate">{item.moTa}</p>
            <p className="font-semibold">
              <span className="underline underline-offset-1">đ</span>
              {item.giaTien}
              <span className="text-gray-500"> /đêm</span>
            </p>
          </div>
        </div>
      );
    });
  });

  return (
    <section className="detail">
      <div className="container">
        <h1 className="text-4xl font-semibold my-4">
          Chỗ ở tại khu vực bản đồ đã chọn
        </h1>
        <div className="detail_list grid grid-cols-4 gap-6 my-2">
          {itemListDetail}
        </div>
      </div>
    </section>
  );
};

export default Detail;
