import Link from "next/link";
import React from "react";
import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

const DropdownLink = ({ subs, route, title }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full">
      {" "}
      <div className="w-full flex justify-between items-center">
        <Link className="text-lg" href={route}>
          {title}
        </Link>
        <BsFillCaretDownFill
          onClick={() => setShow((state) => !state)}
          className={`w-4 h-4 text-blue-primary ${
            show === true ? "rotate-0" : "-rotate-90"
          } duration-200 ease-linear`}
        />
      </div>
      {subs?.length > 0 && show === true ? (
        <ul className="pl-3">
          {subs?.map((sub, index) => (
            <li key={index}>
              {" "}
              <Link href={route + sub.route}>{sub.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DropdownLink;
