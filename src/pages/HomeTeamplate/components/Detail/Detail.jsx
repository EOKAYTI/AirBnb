import React, { useEffect, useMemo, useState } from "react";
import { phongService } from "../../../../services/phong.service";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [detail, setDetail] = useState([[]]);

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
        <div key={index} className="flex gap-5">
          <img src={item.hinhAnh} alt="" />
        </div>
      );
    });
  });

  return (
    <section className="detail">
      <div className="container">
        <h1>Chỗ ở tại khu vực bản đồ đã chọn</h1>
        {itemListDetail}
      </div>
    </section>
  );
};

export default Detail;
