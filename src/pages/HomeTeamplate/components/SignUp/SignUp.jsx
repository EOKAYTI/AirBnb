import { Button, Input } from "antd";
import React, { useContext } from "react";
import { pathDefault } from "../../../../common/path";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authService } from "../../../../services/auth.service";
import { NotificationContext } from "../../../../App";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleNofication = useContext(NotificationContext);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        authService
          .signUp(values)
          .then((res) => {
            console.log(res);
            // thao tác khi đăng ký thành công
            handleNofication("success", "Đăng ký tài khoản thành công", 1500);

            // đẩy người dùng vè trang đăng nhập
            setTimeout(() => {
              navigate(pathDefault.signIn);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
            // thao tác khi đăng ký thất bại
            handleNofication("err", "Đăng ký tài khoản thất bại");
          });
      },
      // validation
      //   validationSchema: Yup.object({
      //     taiKhoan: Yup.string()
      //       .required("Vui lòng không bỏ trống")
      //       .min(5, "Tài khoản phải có ít nhất 5 ký tự")
      //       .max(20, "Tài khoản chỉ có tối đa 20 ký tự"),
      //     password: Yup.string()
      //       .required("Vui lòng không bỏ trống")
      //       .matches(/[A-Z]/, "Mật khẩu phải có ít nhất một chữ cái viết hoa")
      //       .matches(/[a-z]/, "Mật khẩu phải có ít nhất một chữ cái viết thường")
      //       .matches(/[0-9]/, "Mật khẩu phải có ít nhất một số")
      //       .matches(/[@$!%*?&]/, "Mật khẩu phải có ít nhất một ký tự đặc biệt"),

      //     email: Yup.string()
      //       .email("Vui lòng nhập đúng định dạng email")
      //       .required("Vui lòng không bỏ trống"),
      //   }),
    });
  return (
    <section className="signUp">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to={pathDefault.homePage}>Go back</Link>
        </div>
        <h1>Đăng ký tài khoản</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Tài khoản</label>
            <Input
              name="taiKhoan"
              value={values.taiKhoan}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Vui lòng nhập tài khoản"
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <Input
              name="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Vui lòng nhập email"
            />
          </div>
          <div>
            <label htmlFor="">Mật khẩu</label>
            <Input
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Vui lòng nhập mật khẩu"
            />
          </div>
          <div>
            <button
              type="submit"
              className="border rounded-sm p-2 bg-green-500"
            >
              Đăng ký
            </button>
          </div>
        </form>
        <div>
          <span>Đã có tài khoản</span>
          <Link to={pathDefault.signIn}>Đăng nhập tại đây</Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
