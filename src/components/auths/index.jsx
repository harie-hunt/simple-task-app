import { useEffect, useLayoutEffect, useState } from "react";
import { useApiContext } from "../../contexts/ApiContext";

// AUTH
const Auth = () => {
  const { setIsAuth, ApiAuth, handleSuccessLogin } = useApiContext();

  const [preLoading, setPreLoading] = useState(true);

  const [isLogin, setIsLogin] = useState(true);
  const [isProcess, setIsProcess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState();
  const [form, setForm] = useState();

  const handleSwitchForm = () => {
    setIsLogin((cur) => !cur);
    setMessage("");
    setIsError();
  };

  const handleInputChange = (e) => {
    setForm((cur) => ({ ...cur, [e.target.name]: e.target.value }));
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setIsProcess(true);

    try {
      const res = await ApiAuth.login(form);
      console.log(res);

      handleSuccessLogin(res.data);
      setIsError(false);
      setMessage("Anda berhasil login");

      e.target.reset();

      setTimeout(() => {
        setIsAuth(true);
      }, 2000);
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setMessage(error.response.data);
    } finally {
      setIsProcess(false);
    }
    //
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    setIsProcess(true);

    try {
      const res = await ApiAuth.register(form);
      console.log(res);

      e.target.reset();

      setIsError(false);
      setMessage(`Hai.. ${res.data.username} /n Anda berhasil register`);
      setIsLogin(true);
    } catch (error) {
      console.log(error.response);
      setIsError(true);
      setMessage(error.response.data);
    } finally {
      setIsProcess(false);
    }
  };

  function checkAuth() {
    ApiAuth.auth()
      .then((res) => {
        setTimeout(() => {
          setIsAuth(true);
        }, 2000);
      })
      .catch((error) => {
        setIsError(true);
        setMessage(error.response.data);
        loadPreLoading();
      });
  }

  function loadPreLoading() {
    setTimeout(() => setPreLoading(false), 2000);
  }

  //
  useLayoutEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {}, []);
  //
  return (
    <>
      <PreLoading preLoading={preLoading} />

      {isProcess && (
        <section className="absolute right-0 top-2 rounded-l-full bg-gray-500 text-gray-100 pl-4 pr-2">
          <div className="animate-pulse">Loading...</div>
        </section>
      )}

      <main className="space-y-6 w-3/4 md:w-2/6 mx-auto">
        <div className="text-center text-5xl mt-20 font-semibold text-gray-400">
          {"{"}
          <span className="text-4xl mx-4 text-gray-500">
            {isLogin ? "Login" : "Register"}
          </span>
          {"}"}
        </div>

        {isError != null && (
          <section
            className={`py-2 px-4 rounded-lg ${
              isError
                ? "text-red-700 bg-red-200"
                : "text-green-700 bg-green-200"
            }`}
          >
            <div>{message}</div>
          </section>
        )}

        <form
          className="space-y-2"
          onSubmit={isLogin ? handleSubmitLogin : handleSubmitRegister}
        >
          <input
            className="w-full border py-2 px-4 rounded-full"
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
            onChange={handleInputChange}
          />

          <input
            className="w-full border py-2 px-4 rounded-full"
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
            onChange={handleInputChange}
          />

          {!isLogin && (
            <input
              className="w-full border py-2 px-4 rounded-full"
              type="password"
              name="confirmPassword"
              autoComplete="off"
              placeholder="Confirm Password"
              onChange={handleInputChange}
            />
          )}

          <button
            className={`w-full p-2 ${
              isProcess ? "bg-gray-400" : "bg-blue-400"
            } rounded-full text-white font-semibold`}
          >
            {isProcess ? "process" : isLogin ? "LOGIN" : "REGISTER"}
          </button>
        </form>

        <div className="text-center">
          <button
            className="px-4 py-1 rounded-full bg-gray-300 text-gray-500"
            onClick={handleSwitchForm}
          >
            {isLogin ? "Register" : "Login"} klik here !
          </button>
        </div>
      </main>
    </>
  );
};

export const PreLoading = (props) => {
  return (
    <>
      {props.preLoading && (
        <section className="flex justify-center items-center bg-gray-300 min-h-screen text-white">
          <div className="text-center">
            <div className="text-5xl font-extrabold">Momo Task</div>
            <span className="font-bold text-gray-400">
              Powered By Momo Creative
              <div>&copy; {new Date().getFullYear()}</div>
            </span>
          </div>
        </section>
      )}
    </>
  );
};

export default Auth;
