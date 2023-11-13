import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import  './fish.css'
import './index.css'
 
const  RegistrationForm = () => {
    const [showModal, setShowModal] = useState(false); // Состояние модального окна
    const [modalContent, setModalContent] = useState(null); // Состояние контента модального окна
  
    const handleSubmit = (values) => {
    //   console.log(JSON.stringify(values));
    console.log((values))
      const content = (
         <>
         <h2>привет {values.username}</h2>
          <div className="aquarium"> 
  <div className="aquarium__table"></div> 
  <div className="aquarium__aquarium"> 
    <div className="aquarium__water"></div> 
    <div className="aquarium__bubble"></div> 
    <div className="aquarium__bubble"></div> 
    <div className="aquarium__bubble"></div> 
    <div className="aquarium__bubble"></div> 
    <div className="aquarium__bubble"></div> 
    <div className="aquarium__bubble"></div> 
    <div className="aquarium__bubble"></div> 
    <div className="aquarium__bubble"></div> 
  </div> 
  <div className="aquarium__drops"> 
    <div className="aquarium__drop"></div> 
    <div className="aquarium__water-column"></div> 
    <div className="aquarium__splash"></div> 
    <div className="aquarium__splash"></div> 
  </div> 
  <div className="aquarium__sponge-box"> 
    <div className="aquarium__body"> 
      <div className="aquarium__body-stripe"></div> 
      <div className="aquarium__body-hole"></div> 
    </div> 
    <div className="aquarium__face"> 
      <div className="aquarium__mouth"></div> 
      <div className="aquarium__smile"></div> 
    </div> 
  </div> 
</div> 
          <button onClick={closeModal}>Закрыть</button>
        </>
      );
    //   setModalContent(content);
    //   setShowModal(true); // Показать модальное окно после успешной регистрации
    // };
  
    // const closeModal = () => setShowModal(false);

    setModalContent(content);
    setShowModal(true); // Показать модальное окно после успешной регистрации
  };

  const closeModal = () => setShowModal(false);

  const customStyles = {};

    return (
      <>
       {showModal && (
        <div className="modal" style={customStyles}>
          <div className="modal__content">{modalContent}</div>
        </div>
      )}
      {!showModal && (
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            dateOfBirth: "",
            gender: "",
            phoneNumber: ""
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required("Имя пользователя обязательно"),
            email: Yup.string()
              .email("Некорректный формат email")
              .required("Email обязателен"),
            password: Yup.string()
              .min(6, "Минимальная длина пароля - 6 символов")
              .matches(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
              .required("Пароль обязателен"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password")], "Пароли должны совпадать")
              .required("Подтверждение пароля обязательно"),
            dateOfBirth: Yup.string().required("Дата рождения обязательна"),
            gender: Yup.string().required("Пол обязателен"),
            phoneNumber: Yup.string().required("Номер телефона обязателен")
          })}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <Field type="text" name="username" className="inpt" placeholder="Имя пользователя"/>
                <ErrorMessage name="username" component="div" className="error-message" />
              </div>
              <div>
                <Field type="email" name="email" className="inpt" placeholder="Email"/>
                <ErrorMessage name="email" component="div" className="error-message"/>
              </div>
              <div>
                <Field type="password" name="password" className="inpt" placeholder="Пароль"/>
                <ErrorMessage name="password" component="div" className="error-message"/>
              </div>
              <div>
                <Field type="password" name="confirmPassword" className="inpt" placeholder="Подтверждение пароля"/>
                <ErrorMessage name="confirmPassword" component="div" className="error-message"/> 
            </div> 
            <div> 
              <Field type="date" name="dateOfBirth" className="inpt" placeholder="Дата рождения"/> 
              <ErrorMessage name="dateOfBirth" component="div" className="error-message" /> 
            </div> 
            <div> 
              <Field as="select" name="gender" className="inpt" placeholder="Выберите пол"> 
                <option value="">Выберите пол</option> 
                <option value="male">Мужской</option> 
                <option value="female">Женский</option> 
              </Field> 
              <ErrorMessage name="gender" component="div" className="error-message" /> 
            </div> 
            <div> 
              <Field type="tel" name="phoneNumber" className="inpt" placeholder="Номер телефона"/> 
              <ErrorMessage name="phoneNumber" component="div" className="error-message"/> 
            </div> 
            <div> 
              <button type="submit" disabled={isSubmitting}>Зарегистрироваться</button> 
            </div> 
          </Form> 
        )} 
      </Formik> 
)}
    </> 
  ); 
}; 
 
export default RegistrationForm;
