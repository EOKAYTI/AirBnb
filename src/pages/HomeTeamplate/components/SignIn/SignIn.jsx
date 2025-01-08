import { useFormik } from "formik";
import React, { useContext } from "react";
import { authService } from "../../../../services/auth.service";
import { Input } from "antd";
import { NotificationContext } from "../../../../App";
import { pathDefault } from "../../../../common/path";
import { Link, useNavigate } from "react-router-dom";

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
      //  validationSchema: Yup.object({
      //    email: Yup.string()
      //      .email("Vui lòng nhập đúng định dạng email")
      //      .required("Vui lòng không bỏ trống"),
      //    password: Yup.string().required("Vui lòng không bỏ trống"),
      //  }),
    });
  return (
    <section className="signUp">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to={pathDefault.homePage}>Go back</Link>
        </div>
        <h1>Đăng nhập tài khoản</h1>
        <form onSubmit={handleSubmit}>
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
              Đăng nhập
            </button>
          </div>
        </form>
        <div>
          <span>Bạn chưa có tài khoản, hãy đăng ký</span>
          <Link to={pathDefault.signUp}>Đăng ký tại đây</Link>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
