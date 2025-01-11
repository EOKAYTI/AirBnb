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
          className="list_item flex border border-gray-300 rounded-lg mb-5 p-5"
        >
          <div
            className="item_left w-8/12"
            onClick={() => {
              console.log(index);
              navigate(`/detail-room/${item.id}`);
            }}
          >
            <div className="item_img ">
              <img src={item.hinhAnh} alt="" className="rounded-lg" />
            </div>
            <div className="item_info">
              <h2 className="font-semibold text-2xl">{item.tenPhong}</h2>
              <p>{item.moTa}</p>
              <p className="text-red-500">đ{item.giaTien}</p>
            </div>
          </div>
          <div
            className="item_right w-4/12"
            style={{ height: "300px", width: "50%" }}
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.451998241504!2d106.65843041533436!3d10.762622092327857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ecd5b549e01%3A0x3e4b2674324d6a7c!2zVGjhu4sgxJDhu5NuZyBWaeG7h3QgdHLhu41pIFRo4buNIFRo4bunIMSQ4buB!5e0!3m2!1sen!2s!4v1697044251932!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      );
    });
  });

  return (
    <section className="detail">
      <div className="container">
        <h1 className="text-4xl font-semibold">
          Chỗ ở tại khu vực bản đồ đã chọn
        </h1>
        {itemListDetail}
      </div>
    </section>
  );
};

export default Detail;
