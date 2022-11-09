import React from "react";
export function MonthDate({ value, onChange }) {
  return (
    <select
      className="mt-6 ml-60 mb-5 h-9 w-28 bg-[hsl(220,61%,25%)] text-white
      rounded-md"
      value={value}
      onChange={onChange}
    >
      <option value="0">January</option>
      <option value="1">February</option>
      <option value="2">March</option>
      <option value="3">April</option>
      <option value="4">May</option>
      <option value="5">June</option>
      <option value="6">July</option>
      <option value="7">August</option>
      <option value="8">September</option>
      <option value="9">October</option>
      <option value="10">November</option>
      <option value="11">December</option>
    </select>
  );
}
