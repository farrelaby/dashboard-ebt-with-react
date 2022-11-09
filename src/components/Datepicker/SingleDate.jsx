import React from "react";
import { DatePicker } from "@mantine/dates";

export function SingleDate({ startDate, setStartdate }) {
  return (
    <form className="flex flex-row gap-8 ml-40">
      <div className="flex flex-row gap-3 items-center bg-[hsl(230,8%,16%)] p-2 my-4 rounded-md shadow-lg">
        <div className="text-white">Tanggal</div>
        <DatePicker value={startDate} onChange={setStartdate} />
      </div>
    </form>
  );
}
