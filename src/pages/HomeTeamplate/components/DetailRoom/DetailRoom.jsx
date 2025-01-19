import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { phongService } from "../../../../services/phong.service";
import { binhLuanService } from "../../../../services/binhLuan.service";
import { Button, DatePicker, Input, Select } from "antd";

const DetailRoom = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [detailRoom, setDetailRoom] = useState([]);
  const [detailBinhLuan, setDetailBinhLuan] = useState([]);

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

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

  useEffect(() => {
    binhLuanService
      .getBinhLuanTheoId(id)
      .then((res) => {
        console.log(res.data.content);
        setDetailBinhLuan(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemListBinhLuan = useMemo(() => {
    return detailBinhLuan.map((item, index) => {
      return (
        <div className="binhLuan_item border border-gray-300 rounded-lg p-3">
          <div className="item_info flex items-center gap-3">
            <div className="info_img">
              <img
                src={item.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="info_user">
              <p className="font-semibold">{item.tenNguoiBinhLuan}</p>
              <p className="text-gray-700">{item.ngayBinhLuan}</p>
            </div>
          </div>
          <p>{item.noiDung}</p>
        </div>
      );
    });
  });

  return (
    <section className="detailRoom py-10 mt-[80px]">
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
          <div className="group_moTa grid grid-cols-12 gap-4 mt-5">
            <div className="moTa_left col-span-8">
              <div className="left_des">
                <ul>
                  <li className="inline-block mr-3 pt-2">
                    {detailRoom.khach} Khách
                  </li>
                  <li className="inline-block mr-3 pt-2">
                    {detailRoom.phongNgu} Phòng ngủ
                  </li>
                  <li className="inline-block mr-3 pt-2">
                    {detailRoom.giuong} Giường
                  </li>
                  <li className="inline-block mr-3 pt-2">
                    {detailRoom.phongTam} Phòng tắm
                  </li>
                </ul>
              </div>
              <div className="left_intro border-b border-gray-300">
                <h3 className="text-2xl font-semibold py-1">
                  Mô tả về địa điểm này
                </h3>
                <p className="py-1">{detailRoom.moTa}</p>
              </div>
              <div className="left_utilities border-b border-gray-300 py-3">
                <h2 className="text-2xl font-semibold">
                  Nơi này có những gì cho bạn
                </h2>
                <ul className="space-y-2">
                  {detailRoom.mayGiat && (
                    <li className="w-1/2 inline-block py-2">
                      <div className="flex items-center gap-2">
                        <div className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              height: 24,
                              width: 24,
                              fill: "currentcolor",
                            }}
                          >
                            <path d="M26.29 2a3 3 0 0 1 2.96 2.58c.5 3.56.75 7.37.75 11.42s-.25 7.86-.75 11.42a3 3 0 0 1-2.79 2.57l-.17.01H5.7a3 3 0 0 1-2.96-2.58C2.25 23.86 2 20.05 2 16s.25-7.86.75-11.42a3 3 0 0 1 2.79-2.57L5.7 2zm0 2H5.72a1 1 0 0 0-1 .86A80.6 80.6 0 0 0 4 16c0 3.96.24 7.67.73 11.14a1 1 0 0 0 .87.85l.11.01h20.57a1 1 0 0 0 1-.86c.48-3.47.72-7.18.72-11.14 0-3.96-.24-7.67-.73-11.14A1 1 0 0 0 26.3 4zM16 7a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm-5.84 7.5c-.34 0-.68.02-1.02.07a7 7 0 0 0 13.1 4.58 9.09 9.09 0 0 1-6.9-2.37l-.23-.23a6.97 6.97 0 0 0-4.95-2.05zM16 9a7 7 0 0 0-6.07 3.5h.23c2.26 0 4.44.84 6.12 2.4l.24.24a6.98 6.98 0 0 0 6.4 1.9A7 7 0 0 0 16 9zM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                          </svg>
                        </div>
                        <span>Máy giặt</span>
                      </div>
                    </li>
                  )}
                  {detailRoom.banLa && (
                    <li className="w-1/2 inline-block py-2">
                      <div className="flex items-center gap-2">
                        <div className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              height: 24,
                              width: 24,
                              fill: "currentcolor",
                            }}
                          >
                            <path d="M12 28a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-6-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM16.03 3h.3a12.5 12.5 0 0 1 11.82 9.48l.07.3 1.73 7.79.03.14A2 2 0 0 1 28.15 23H2.1a2 2 0 0 1-1.85-1.84v-7.38a5 5 0 0 1 4.77-4.77L5.25 9h9V5h-14V3zm11.53 16H2.25v2H28zM16.24 5v6H5.07a3 3 0 0 0-2.82 2.82V17H27.1l-.84-3.78-.07-.28a10.5 10.5 0 0 0-9.6-7.92L16.32 5z" />
                          </svg>
                        </div>
                        <span>Bàn là</span>
                      </div>
                    </li>
                  )}
                  {detailRoom.tivi && (
                    <li className="w-1/2 inline-block py-2">
                      <div className="flex items-center gap-2">
                        <div className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              height: 24,
                              width: 24,
                              fill: "currentcolor",
                            }}
                          >
                            <path d="M9 29v-2h2v-2H6a5 5 0 0 1-5-4.78V8a5 5 0 0 1 4.78-5H26a5 5 0 0 1 5 4.78V20a5 5 0 0 1-4.78 5H21v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-3 2.82V20a3 3 0 0 0 2.82 3H26a3 3 0 0 0 3-2.82V8a3 3 0 0 0-2.82-3z" />
                          </svg>
                        </div>
                        <span>Tivi</span>
                      </div>
                    </li>
                  )}
                  {detailRoom.dieuHoa && (
                    <li className="w-1/2 inline-block py-2">
                      <div className="flex items-center gap-2">
                        <div className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              height: 24,
                              width: 24,
                              fill: "currentcolor",
                            }}
                          >
                            <path d="M17 1v4.03l4.03-2.32 1 1.73L17 7.34v6.93l6-3.47V5h2v4.65l3.49-2.02 1 1.74L26 11.38l4.03 2.33-1 1.73-5.03-2.9L18 16l6 3.46 5.03-2.9 1 1.73L26 20.62l3.49 2.01-1 1.74L25 22.35V27h-2v-5.8l-6-3.47v6.93l5.03 2.9-1 1.73L17 26.97V31h-2v-4.03l-4.03 2.32-1-1.73 5.03-2.9v-6.93L9 21.2V27H7v-4.65l-3.49 2.02-1-1.74L6 20.62l-4.03-2.33 1-1.73L8 19.46 14 16l-6-3.46-5.03 2.9-1-1.73L6 11.38 2.51 9.37l1-1.74L7 9.65V5h2v5.8l6 3.47V7.34l-5.03-2.9 1-1.73L15 5.03V1z" />
                          </svg>
                        </div>
                        <span>Điều hòa</span>
                      </div>
                    </li>
                  )}
                  {detailRoom.wifi && (
                    <li className="w-1/2 inline-block py-2">
                      <div className="flex items-center gap-2">
                        <div className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              height: 24,
                              width: 24,
                              fill: "currentcolor",
                            }}
                          >
                            <path d="M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z" />
                          </svg>
                        </div>
                        <span>Wifi</span>
                      </div>
                    </li>
                  )}
                  {detailRoom.doXe && (
                    <li className="w-1/2 inline-block py-2">
                      <div className="flex items-center gap-2">
                        <div className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              height: 24,
                              width: 24,
                              fill: "currentcolor",
                            }}
                          >
                            <path d="M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z" />
                          </svg>
                        </div>
                        <span>Đỗ xe</span>
                      </div>
                    </li>
                  )}
                  {detailRoom.bep && (
                    <li className="w-1/2 inline-block py-2">
                      <div className="flex items-center gap-2">
                        <div className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              height: 24,
                              width: 24,
                              fill: "currentcolor",
                            }}
                          >
                            <path d="M26 1a5 5 0 0 1 5 5c0 6.39-1.6 13.19-4 14.7V31h-2V20.7c-2.36-1.48-3.94-8.07-4-14.36v-.56A5 5 0 0 1 26 1zm-9 0v18.12c2.32.55 4 3 4 5.88 0 3.27-2.18 6-5 6s-5-2.73-5-6c0-2.87 1.68-5.33 4-5.88V1zM2 1h1c4.47 0 6.93 6.37 7 18.5V21H4v10H2zm14 20c-1.6 0-3 1.75-3 4s1.4 4 3 4 3-1.75 3-4-1.4-4-3-4zM4 3.24V19h4l-.02-.96-.03-.95C7.67 9.16 6.24 4.62 4.22 3.36L4.1 3.3zm19 2.58v.49c.05 4.32 1.03 9.13 2 11.39V3.17a3 3 0 0 0-2 2.65zm4-2.65V17.7c.99-2.31 2-7.3 2-11.7a3 3 0 0 0-2-2.83z" />
                          </svg>
                        </div>
                        <span>Bếp</span>
                      </div>
                    </li>
                  )}
                  {detailRoom.hoBoi && (
                    <li className="w-1/2 inline-block py-2">
                      <div className="flex items-center gap-2">
                        <div className="inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              height: 24,
                              width: 24,
                              fill: "currentcolor",
                            }}
                          >
                            <path d="M24 26c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 28c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 26zm0-5c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 23c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 21zM20 3a4 4 0 0 1 4 3.8V9h4v2h-4v5a4 4 0 0 1 2.5.86l.17.15c.3.27.71.44 1.14.48l.19.01v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 18c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 16c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5a3.96 3.96 0 0 1 2.44-1H16v-5H4V9h12V7a2 2 0 0 0-4-.15V7h-2a4 4 0 0 1 7-2.65A3.98 3.98 0 0 1 20 3zm-2 13.52.46.31.21.18c.35.31.83.49 1.33.49a2 2 0 0 0 1.2-.38l.13-.11c.2-.19.43-.35.67-.49V11h-4zM20 5a2 2 0 0 0-2 1.85V9h4V7a2 2 0 0 0-2-2z" />
                          </svg>
                        </div>
                        <span>Hồ bơi</span>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="moTa_right col-span-4 border border-gray-300 rounded-lg p-4 space-y-2 sticky top-0 right-0">
              <div className="right_price  flex justify-between items-center space-y-2">
                <div className="price">${detailRoom.giaTien}/đêm</div>
                <div className="danhGia">18 đánh giá</div>
              </div>
              <div className="price_date  space-y-3">
                <div className="border border-black p-3 rounded-lg">
                  <div className="check flex justify-between items-center">
                    <div className="checkIn">
                      <label htmlFor="">NHẬN PHÒNG</label>
                      <DatePicker onChange={onChange} placeholder="Ngày nhận" />
                    </div>
                    <div className="checkOut">
                      <label htmlFor="">TRẢ PHÒNG</label>
                      <DatePicker onChange={onChange} placeholder="Ngày trả" />
                    </div>
                  </div>
                  <div className="quantity space-y-2">
                    <label htmlFor="">KHÁCH</label>
                    <Select
                      className="w-full"
                      showSearch
                      placeholder="Lựa chọn số người"
                      options={[
                        {
                          value: "1",
                          label: "1",
                        },
                        {
                          value: "2",
                          label: "2",
                        },
                        {
                          value: "3",
                          label: "3",
                        },
                      ]}
                    />
                  </div>
                </div>

                <div className="btn_book text-center">
                  <Button className="w-full bg-[#FF385C] text-white py-1 px-2">
                    Đặt phòng
                  </Button>
                  <span className="inline-block my-2">
                    Bạn vẫn chưa bị trừ tiền
                  </span>
                </div>

                <div className="bill space-y-2">
                  <div className="bill_room flex justify-between">
                    <p className="underline">${detailRoom.giaTien} x 5 đêm</p>
                    <p>$221</p>
                  </div>
                  <div className="bill_service flex justify-between">
                    <p className="underline">Phí dịch vụ</p>
                    <p>$31</p>
                  </div>
                  <div className="bill_total flex justify-between border-t border-gray-300 mt-3 py-3 font-semibold">
                    <p>Tổng</p>
                    <p>$252</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group_binhLuan">
            <h2 className="text-2xl font-semibold my-3">Bình luận</h2>
            <div className="binhLuan_group grid grid-cols-2 gap-5">
              {itemListBinhLuan}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailRoom;
