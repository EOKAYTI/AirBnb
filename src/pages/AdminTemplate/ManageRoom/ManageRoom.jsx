import React, { useContext, useEffect, useState } from "react";

import {
  Avatar,
  Button,
  DatePicker,
  Input,
  Modal,
  Popconfirm,
  Table,
  Tag,
} from "antd";
import { NotificationContext } from "../../../App";
import { phongService } from "../../../services/phong.service";

const ManageRoom = () => {
  const handleNotification = useContext(NotificationContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listRoom, setListRoom] = useState([]);

  const layDanhSachNguoiDung = () => {
    phongService
      .getDanhSachPhongThue()
      .then((res) => {
        console.log(res);
        setListRoom(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "2",
      render: (text, record, index) => {
        // Quang Khải ==> Q  split()
        return text ? (
          <img src={text} className="w-10 h-10" />
        ) : (
          //   <Avatar size={40}>{record.name[0]}</Avatar>
          <p>hello</p>
        );
      },
    },
    {
      title: "Số lượng khách",
      dataIndex: "soLuongKhach",
      key: "3",
    },
    // {
    //   title: "Hành động",
    //   key: "5",
    //   render: (text, record, index) => {
    //     return (
    //       <div className="space-x-3">
    //         <Popconfirm
    //           title="Thực hiện xoá người dùng"
    //           description="Bạn có chắc muốn xoá người dùng không?"
    //           onConfirm={() => {
    //             nguoiDungService
    //               .xoaNguoiDung(record.id)
    //               .then((res) => {
    //                 layDanhSachNguoiDung();
    //                 handleNotification("success", res.data.message);
    //               })
    //               .catch((err) => {
    //                 layDanhSachNguoiDung();
    //                 handleNotification("error", err.response.data.content);
    //               });
    //           }}
    //           onCancel={() => {}}
    //           okText="Yes"
    //           cancelText="No"
    //         >
    //           <Button danger>Xoá</Button>
    //         </Popconfirm>
    //         <Button className="border-yellow-500 text-yellow-500">Sửa</Button>
    //       </div>
    //     );
    //   },
    // },
  ];

  useEffect(() => {
    layDanhSachNguoiDung();
  }, []);

  return (
    <div className="space-y-3">
      <h1 className="font-bold text-3xl">Danh sách phòng trong hệ thống</h1>
      <Button
        onClick={() => {
          setIsModalOpen(true);
        }}
        variant="solid"
        className="bg-green-600 text-white"
        size="large"
      >
        Thêm vị trí
      </Button>
      <Table dataSource={listRoom} columns={columns} />
      <Modal
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={null}
        title="Thêm vị trí"
        open={isModalOpen}
      >
        {/* <FormAddUser
              handleCloseModal={() => {
                setIsModalOpen(false);
              }}
              layDanhSachNguoiDung={layDanhSachNguoiDung}
            /> */}
      </Modal>
    </div>
  );
};

export default ManageRoom;
