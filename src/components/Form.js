import React, { useState } from "react";

const Form = ({ setQuery }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(text);
    setText("");
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="m-4 flex justify-center mx-w-lg">
        <input
          className="rounded-l-lg p-4 w-1/3 outline-none	 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Search Image.."
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="px-8 rounded-r-lg bg-green-400  outline-none text-white-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r"
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default Form;
