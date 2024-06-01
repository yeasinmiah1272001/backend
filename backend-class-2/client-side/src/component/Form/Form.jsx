import { useState } from "react";

const Form = () => {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const passWord = e.target.password.value;
    if (passWord.length < 6) {
      setError("Password must be 6 charecter");
      return;
    } else {
      setError("");
    }

    const obj = {
      name,
      email,
      passWord,
    };
   
  };
  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-red-300 p-8 rounded shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            defaultValue={"yeasin"}
            name="name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Your email"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Your password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </form>
      {error && <p>Password must be 6 charecter</p>}
    </div>
  );
};

export default Form;
