const AuthDesign = () => {
  return (
    <main className="pt-20 px-10 space-y-8">
      <section className="absolute top-2 bg-green-700 rounded-sm">
        <div className="mx-4 my-1">Berhasil login !</div>
      </section>

      <div className="text-center text-4xl text-blue-500">Login</div>

      {/* <section className="p-4 border border-red-500 bg-red-900 rounded-md text-red-200">
        Lorem ipsum dolor sit amet.
      </section> */}

      <div className="space-y-4">
        <input
          className="ring-1 ring-blue-800 bg-transparent w-full px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700"
          type="text"
          name="username"
          placeholder="Username"
        />

        <input
          className="ring-1 ring-blue-800 bg-transparent w-full px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700"
          type="text"
          name="password"
          placeholder="Password"
        />

        <input
          className="ring-1 ring-blue-800 bg-transparent w-full px-6 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-700"
          type="text"
          name="password"
          placeholder="Password"
        />

        <div className="flex justify-end">
          <button className="bg-blue-800 p-2 px-10 rounded-full">LOGIN</button>
        </div>
      </div>
      <div>
        <button className="bg-gray-800 px-8 py-2 rounded-full text-gray-400 focus:text-gray-100">
          Register klik here !
        </button>
      </div>
    </main>
  );
};

export default AuthDesign;
