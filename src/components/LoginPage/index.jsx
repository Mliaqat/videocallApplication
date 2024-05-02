import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

function LoginPage({ setUserData, setToggleShowNew }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setUserData(data), setToggleShowNew(true);
  };

  return (
    <div className="h-[100dvh] w-full relative box-border overflow-hidden flex justify-center items-center">
      <div className="z-50 w-[40%] 2xl:w-[35%]">
        <div className={style.card}>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className={style.title}>Enter Your Details</h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label for="desc" className={style.label}>
                  Meeting Description
                </label>
                <input
                  {...register("desc", { required: true })}
                  className={style.input(errors.name)}
                />
                {errors.desc && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <label for="name" className={style.label}>
                  Your Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className={style.input(errors.name)}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <button className={style.btn} type="submit">
                <span class="relative text-sm text-white">Get Started</span>
                <div class="flex items-center -space-x-3 translate-x-3">
                  <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </form>
            <p className="text-center text-gray-500">
              Enable users to join video call rooms through <br></br> a simple room-based
              system.
            </p>
          </div>
        </div>
      </div>
      <div className="circle-animation">
        <div className="inner-circle">
          <div className="innerMost-circle"></div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

const style = {
  card: "w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700",
  title:
    "text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",
  label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
  input: (data) => {
    return `bg-gray-50 border ${
      data ? "border-red-500" : "border-gray-300"
    }  text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 `;
  },
  btn: "relative group overflow-hidden px-6 h-12 rounded-xl flex space-x-2 items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:to-purple-600 m-auto",
};
