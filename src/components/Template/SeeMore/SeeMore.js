import React, { useState } from "react";
import DataListrik from "../DataListrik/DataListrik";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export function SeeMore({ volt, ampere }) {
  const [isAdv, setIsAdv] = useState(false);

  const [seeRef] = useAutoAnimate();

  return (
    <div
      ref={seeRef}
      id="seemore"
      className="flex flex-col gap-8 place-items-center mt-8"
    >
      <button
        className={`${
          isAdv
            ? `bg-[hsl(220,80%,50%)]`
            : `bg-[hsl(220,60%,35%)] hover:bg-[hsl(220,60%,45%)]`
        } text-white font-bold mt-4 rounded shadow-md`}
        onClick={() => {
          setIsAdv(!isAdv);
        }}
      >
        See More
      </button>

      {isAdv ? (
        <div className="flex flex-row gap-4">
          <div className="text-white w-60 h-60 bg-[#111827] outline outline-offset-1 outline-1 outline-white rounded-xl shadow-xl hover:scale-105 hover:-translate-x-2 transition-transform">
            <DataListrik judul="Tegangan" angka={volt} satuan="V" />
          </div>
          <div className="text-white w-60 h-60 bg-[#111827] outline outline-offset-1 outline-1 outline-white rounded-xl shadow-xl hover:scale-105 hover:translate-x-2 transition-transform">
            <DataListrik judul="Arus" angka={ampere} satuan="A" />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
