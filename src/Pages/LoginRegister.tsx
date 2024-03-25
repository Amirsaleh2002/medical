import React, { useState, useEffect } from "react";
import {
  PersonLogIn,
  personSchemaLogIn,
  personSchemaRegister,
  PersonRegister,
} from "../Components/srcTs/Validation/validate";
import { Errors } from "../Components/srcTs/tsTypes/Errors.type";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function LoginRegister() {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [allUserRegistered, setAllUserRegistered] = useState<PersonRegister[]>(
    []
  );

  const [userPassword, setUserPassword] = useState<string>("");
  const [loginEmail, setLoginEmail] = useState<string>("");

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [registerPass, setRegisterPass] = useState<string>("");
  const [registerPassConfirm, setRegisterPassConfirm] = useState<string>("");
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const [registerErrors, setRegisterErrors] = useState<Errors>({});
  const [logInErrors, setLogInErrors] = useState<Errors>({});

  let navigator = useNavigate()

  useEffect(() => {
    fetch("http://localhost:4000/registereduser")
      .then((res) => res.json())
      .then((data) => setAllUserRegistered(data));
  }, []);

  const userLoggedIN = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    console.log(allUserRegistered);

    let userEntrance: PersonLogIn = {
      password: userPassword,
      email: loginEmail,
    };

    const isUserIsInSite = allUserRegistered.some(
      (user) =>
        user.email === userEntrance.email &&
        user.password === userEntrance.password
    );
    try {
      const isValid = await personSchemaLogIn.validate(userEntrance, {
        abortEarly: false,
      });
      if (isUserIsInSite && isValid) {
        swal({
          title: "ورود شما با موفقیت انجام شد",
          icon: "success",
          button: "باشه",
        })
        .then(result => {
          if (result) {
            navigator('/')
          }
        })
      }else{
        swal({
          title: "نام کاربری یا رمز عبور اشتباه است",
          icon: "error",
          button: "امتحان دوباره",
        });
      }
    } catch (err: any) {
      let errors = err.inner.reduce(
        (acc: any, err: any) => ({
          ...acc,
          [err.path]: err.message,
        }),
        {}
      );
      setLogInErrors(errors);
    }
  };

  const userRegistered = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    let userRegister: PersonRegister = {
      firstName,
      lastName,
      password: registerPass,
      ConfirmPassword: registerPassConfirm,
      email: registerEmail,
      desc,
    };

    try {
      const isValid = await personSchemaRegister.validate(userRegister, {
        abortEarly: false,
      });
      if (isValid && registerPass === registerPassConfirm) {
        const res = await fetch("http://localhost:4000/registereduser", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userRegister),
        });
        if (res.ok) {
          swal({
            title: "ثبت نام با موفقیت انجام شد",
            icon: "success",
            button: "باشه",
          });
        }
      } else {
        swal({
          title: "مشکلی در فرآیند ثبت نام رخ داد",
          icon: "error",
          button: "امتحان دوباره",
        });
      }
    } catch (err: any) {
      let errors = err.inner.reduce((acc: any, err: any) => ({
        ...acc,
        [err.path]: err.message,
      }));
      setRegisterErrors(errors);
    }
  };
  return (
    <>
      <div
        className={`${
          isRegister === true ? "bg-purple-800" : "bg-green-600"
        } col-span-12 w-full`}
      >
        <div className="w-full max-w-xl mx-auto my-[155.5px]">
          <form
            className={`bg-white shadow-md rounded mb-4 ${
              isRegister === true ? "hidden" : "block"
            }`}
          >
            <h2 className="text-center bg-green-400 py-6 text-2xl text-white">
              فرم ورود
            </h2>
            <div className="mb-4 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="emailInput"
              >
                ایمیل
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="emailInput"
                type="email"
                placeholder="ایمیل"
                value={loginEmail}
                onChange={(event) => setLoginEmail(event.target.value)}
              />
              <span className="text-red-400">{logInErrors.email}</span>
            </div>
            <div className="mb-6 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                رمزعبور
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                value={userPassword}
                onChange={(event) => setUserPassword(event.target.value)}
              />
              <span className="text-red-400">{logInErrors.password}</span>
            </div>
            <div className="flex items-center justify-between p-4">
              <a
                className="inline-block align-baseline font-bold text-sm text-green-500"
                href="#"
              >
                رمزعبور را فراموش کردم
              </a>
              <button
                className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={userLoggedIN}
              >
                ورود
              </button>
            </div>
            <div className="p-4">
              <button
                className="font-bold py-2 mt-6 bg-green-500 text-white rounded-md px-4"
                type="button"
                onClick={() => {
                  setIsRegister(true);
                }}
              >
                میخوام تازه ثبت نام کنم !!
              </button>
            </div>
          </form>
        </div>

        <div className="w-full max-w-xl mx-auto my-[155.5px]">
          <form
            className={`bg-white shadow-md rounded mb-4 ${
              isRegister === true ? "block" : "hidden"
            }`}
          >
            <h2 className="text-center bg-purple-600 py-6 text-2xl text-white">
              فرم ثبت نام
            </h2>
            <div className="mb-4 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                نام
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              <span className="text-red-400">{registerErrors.firstName}</span>
            </div>
            <div className="mb-4 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                نام خانوادگی
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
              <span className="text-red-400">{registerErrors.lastName}</span>
            </div>
            <div className="mb-4 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                ایمیل
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={registerEmail}
                onChange={(event) => setRegisterEmail(event.target.value)}
              />
              <span className="text-red-400">{registerErrors.email}</span>
            </div>
            <div className="mb-4 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                رمزعبور
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={registerPass}
                onChange={(event) => setRegisterPass(event.target.value)}
              />
              <span className="text-red-400">{registerErrors.password}</span>
            </div>
            <div className="mb-4 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                تاییدرمزعبور
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={registerPassConfirm}
                onChange={(event) => setRegisterPassConfirm(event.target.value)}
              />
              <span className="text-red-400">
                {registerErrors.ConfirmPassword}
              </span>
            </div>
            <div className="mb-4 p-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="desc"
              >
                توضیحات
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline h-40"
                id="desc"
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-end p-4">
              <button
                className="bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={userRegistered}
              >
                ثبت نام
              </button>
            </div>
            <div className="p-4">
              <button
                className="font-bold py-2 mt-6 bg-purple-600 text-white rounded-md px-4"
                type="button"
                onClick={() => {
                  setIsRegister(false);
                }}
              >
                ثبت نام کردم میخوام وارد بشم !!
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginRegister;
