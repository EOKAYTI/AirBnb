import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useContext } from "react";
import { authService } from "../../../../services/auth.service";
import { Input } from "antd";
import { NotificationContext } from "../../../../App";
import { pathDefault } from "../../../../common/path";
import { Link, useNavigate } from "react-router-dom";

import Lottie from "lottie-react";
import signin from "/public/signin.json";

const SignIn = () => {
  const navigate = useNavigate();
  const handleNotification = useContext(NotificationContext);
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        authService
          .signIn(values)
          .then((res) => {
            console.log(res);
            // thực hiện khi đăng nhập thành công sẽ lưu dữ liệu dưới localStorage
            localStorage.setItem("userInfo", JSON.stringify(res.data.content)); // [Object,Object]
            // thay đổi dữ liệu cho redux
            //    dispatch(handleUpdateUser(res.data.content.user));
            // hiển thị thông báo thành công và đá người dùng về trang chủ
            handleNotification("success", "Đăng nhập thành công", 1500);

            // đẩy người dùng về trang home
            setTimeout(() => {
              navigate(pathDefault.homePage);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
            handleNotification("error", err.response.data.content);
          });
        // xử dụng axios để xử lí đăng nhập
        // sử dụng then catch để xử lí kết quả trả về
      },
      // validationSchema
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Vui lòng nhập đúng định dạng email")
          .required("Vui lòng không bỏ trống"),
        password: Yup.string().required("Vui lòng không bỏ trống"),
      }),
    });
  return (
    <section className="signIn">
      <div className="container">
        <div className="signIn_content grid grid-cols-12 justify-items-center items-center">
          <div className="signIn_logo col-span-8">
            <Lottie animationData={signin} style={{ width: "85%" }} />
          </div>
          <div className="signIn_form col-span-4 space-y-5">
            <div className="flex justify-between items-center">
              <Link to={pathDefault.homePage} className="hover:text-red-500">
                Go back
              </Link>
            </div>
            <h1 className="font-semibold text-2xl">Đăng nhập tài khoản</h1>
            <form onSubmit={handleSubmit} className="space-y-5">
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
                  Đăng nhập
                </button>
              </div>
            </form>
            <div>
              <span>Bạn chưa có tài khoản, hãy đăng ký? </span>
              <Link to={pathDefault.signUp} className="hover:text-red-500">
                Đăng ký tại đây
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
