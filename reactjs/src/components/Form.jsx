import { useState } from "react";

const Form = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    remember_me: false,
  });

  return (
    <div>
      <form className="flex flex-col w-[50%] mx-auto border-2 p-5 rounded-md justify-between">
        <input
          className="border-2 w-96"
          type="text"
          value={userDetails.username}
          onChange={(e) => {
            setUserDetails((user) => ({
              ...user,
              username: e.target.value,
            }));
          }}
          placeholder="Username"
        />
        <input
          type="password"
          className="border-2 w-96"
          value={userDetails.password}
          onChange={(e) => {
            setUserDetails((user) => ({
              ...user,
              password: e.target.value,
            }));
          }}
          placeholder="Password"
        />
        <div className="flex gap-0">
          <label htmlFor="checked" className="w-auto">
            Remember Me
          </label>
          <input
            type="checkbox"
            value={userDetails.remember_me}
            className="border-2 w-auto ml-2"
            onChange={(e) => {
              setUserDetails((user) => ({
                ...user,
                remember_me: e.target.checked,
              }));
            }}
            id="checked"
          />
        </div>
        <button type="submit" className="bg-green-500 w-24 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
