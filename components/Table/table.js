import React from "react";

export default function Table({
  nature,
  image,
  name,
  price,
  owned,
  to,
  time,
  link,
}) {
  return (
    <div className="overflow-x-auto w-full   dark:text-black dark:bg-black bg-white text-gray-600 border dark:border-gray-900 border-gray-200 rounded-3xl">
      <table className="table w-full  dark:bg-black bg-white">
        <tbody className="  dark:bg-black bg-white">
          <tr className="  dark:bg-black bg-white">
            <th>{nature}</th>
            <td>
              <div className="flex items-center space-x-3 mx-44">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{name}</div>
                </div>
              </div>
            </td>
            <td>{price}</td>
            <td>
              <div className="flex items-center ">
                <div className="avatar">{owned}</div>
              </div>
            </td>

            <td>{to}</td>
            <td>{time}</td>
            <td>
              <a
                className="flex-col flex justify-center items-center"
                href={link}
              >
                Click
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
