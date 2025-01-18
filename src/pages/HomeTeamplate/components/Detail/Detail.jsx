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
          className="item_item rounded-lg mb-5 cursor-pointer grid grid-cols-12 gap-5"
          onClick={() => {
            console.log(index);
            navigate(`/detail-room/${item.id}`);
          }}
        >
          <div className="item_img col-span-6 h-40">
            <img
              src={item.hinhAnh}
              alt="hinhAnh"
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
          <div className="item_info col-span-6">
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
    <section className="detail mt-[120px]">
      <div className="container">
        <div className="detail_content grid grid-cols-12 gap-3">
          <div className="content_left col-span-8">
            <h1 className="text-4xl font-semibold my-4">
              Chỗ ở tại khu vực bản đồ đã chọn
            </h1>
            <div className="detail_list grid grid-cols-1 gap-6 my-2">
              {itemListDetail}
            </div>
          </div>
          <div className="content_right col-span-4 mt-4">
            <div className="right_map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28416.16092031636!2d106.67798806147742!3d10.77523301704673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2zUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1736994656658!5m2!1svi!2s"
                width={400}
                height={600}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
