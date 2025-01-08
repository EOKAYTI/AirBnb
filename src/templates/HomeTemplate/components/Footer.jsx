import React from "react";

import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7] py-10">
      <div className="container">
        <div className="footer_content">
          <div className="footer_group flex justify-between mb-8">
            <div className="footer_item w-1/3">
              <h5 className="font-semibold">Hỗ trợ</h5>
              <ul>
                <li>
                  <a href="#">Trung tâm trợ giúp</a>
                </li>
                <li>
                  <a href="#">AirCover</a>
                </li>
                <li>
                  <a href="#">Chống phân biệt đối xử</a>
                </li>
                <li>
                  <a href="#">Hỗ trợ người khuyết tật</a>
                </li>
                <li>
                  <a href="#">Các tùy chọn hủy</a>
                </li>
                <li>
                  <a href="#">Báo cáo lo ngại của khu dân cư</a>
                </li>
              </ul>
            </div>
            <div className="footer_item w-1/3">
              <h5 className="font-semibold">Đón tiếp khách</h5>
              <ul>
                <li>
                  <a href="#">Cho thuê nhà trên Airbnb</a>
                </li>
                <li>
                  <a href="#">AirCover cho Chủ nhà</a>
                </li>
                <li>
                  <a href="#">Tài nguyên về đón tiếp khách</a>
                </li>
                <li>
                  <a href="#">Diễn đàn cộng đồng</a>
                </li>
                <li>
                  <a href="#">Đón tiếp khách có trách nhiệm</a>
                </li>
                <li>
                  <a href="#">
                    Tham gia khóa học miễn phí về công việc Đón tiếp khách
                  </a>
                </li>
                <li>
                  <a href="#">Tìm đồng chủ nhà</a>
                </li>
              </ul>
            </div>
            <div className="footer_item w-1/3">
              <h5 className="font-semibold">Airbnb</h5>
              <ul>
                <li>
                  <a href="#">Trang tin tức</a>
                </li>
                <li>
                  <a href="#">Tính năng mới</a>
                </li>
                <li>
                  <a href="#">Nhà đầu tư</a>
                </li>
                <li>
                  <a href="#">Chỗ ở khẩn cấp Airbnb.org</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_bottom flex justify-between items-center pt-10">
            <div className="bottom_left">
              <ul>
                <li>
                  <a href="#">© 2024 Airbnb, Inc.</a>
                </li>
                <li>
                  <a href="#">Quyền riêng tư</a>
                </li>
                <li>
                  <a href="#">Điều khoản</a>
                </li>
                <li>
                  <a href="#">Sơ đồ trang web</a>
                </li>
              </ul>
            </div>
            <div className="bottom_right flex justify-between items-center gap-x-3">
              <div className="right_language">
                <i className="fa-solid fa-earth-americas"></i>
                <span> Tiếng Việt (VN)</span>
              </div>
              <div className="right_currency">
                <span>đ VND</span>
              </div>
              <div className="right_social space-x-3">
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-square-twitter"></i>
                <i className="fa-brands fa-square-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
