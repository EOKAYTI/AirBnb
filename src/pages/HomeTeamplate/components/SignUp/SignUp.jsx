import { Button, Input } from "antd";
import React, { useContext } from "react";
import { pathDefault } from "../../../../common/path";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authService } from "../../../../services/auth.service";
import { NotificationContext } from "../../../../App";
import { Link, useNavigate } from "react-router-dom";

import Lottie from "lottie-react";
import signup from "/public/signup.json";

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
      validationSchema: Yup.object({
        taiKhoan: Yup.string()
          .required("Vui lòng không bỏ trống")
          .min(5, "Tài khoản phải có ít nhất 5 ký tự")
          .max(20, "Tài khoản chỉ có tối đa 20 ký tự"),
        email: Yup.string()
          .email("Vui lòng nhập đúng định dạng email")
          .required("Vui lòng không bỏ trống"),
        password: Yup.string()
          .required("Vui lòng không bỏ trống")
          .matches(/[A-Z]/, "Mật khẩu phải có ít nhất một chữ cái viết hoa")
          .matches(/[a-z]/, "Mật khẩu phải có ít nhất một chữ cái viết thường")
          .matches(/[0-9]/, "Mật khẩu phải có ít nhất một số")
          .matches(/[@$!%*?&]/, "Mật khẩu phải có ít nhất một ký tự đặc biệt"),
      }),
    });
  return (
    <section className="signUp">
      <div className="container">
        <div className="signUp_content grid grid-cols-12 justify-items-center items-center">
          <div className="signUp_logo col-span-8">
            <Lottie animationData={signup} style={{ width: "80%" }} />
          </div>
          <div className="signUp_form col-span-4 space-y-5">
            <div className="flex justify-between items-center">
              <Link to={pathDefault.homePage} className="hover:text-red-500">
                Go back
              </Link>
            </div>

            <h1 className="font-semibold text-2xl">Đăng ký tài khoản</h1>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="">Tài khoản</label>
                <Input
                  name="taiKhoan"
                  value={values.taiKhoan}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Vui lòng nhập tài khoản"
                />
                {errors.taiKhoan && touched.taiKhoan && (
                  <p className="text-red-500 text-sm mt-1">{errors.taiKhoan}</p>
                )}
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
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
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
                {errors.password && touched.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="border rounded-lg p-2 bg-[#FF8299] text-white w-full hover:opacity-50"
                >
                  Đăng ký
                </button>
              </div>
            </form>

            <div>
              <span>Đã có tài khoản? </span>
              <Link to={pathDefault.signIn} className="hover:text-red-500">
                Đăng nhập tại đây
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
