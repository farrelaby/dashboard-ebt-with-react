import React from "react";
import { DatePicker } from "@mantine/dates";
export function RangeDate({ startDate, setStartdate, endDate, setEnddate }) {
  return (
    <div className="flex flex-row gap-8">
      <div className="flex flex-row gap-3 items-center bg-[hsl(230,8%,16%)] p-2 my-4 rounded-md shadow-lg">
        <div className="text-white">Dari</div>
        <DatePicker value={startDate} onChange={setStartdate} />
      </div>
      <div className="flex flex-row gap-3 items-center bg-[hsl(230,8%,16%)] p-2 my-4 rounded-md shadow-lg">
        <div className="text-white">Sampai</div>
        <DatePicker value={endDate} onChange={setEnddate} />
      </div>
    </div>
  );
}
