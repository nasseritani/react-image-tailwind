import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        alt=""
        className="w-full object-cover repeat"
      />
      <div className="px-2 py-4">
        <div className="font-bold text-xl">Photo By John Doe</div>
        <ul>
          <li>
            <strong>Views:3000</strong>
          </li>
          <li>
            <strong>Likes:3000</strong>
          </li>
          <li>
            <strong>Downloads:3000</strong>
          </li>
        </ul>
      </div>
      <div className="px-6 py-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm mr-2">
          #tag3
        </span>
      </div>
    </div>
  );
};
export default Card;
