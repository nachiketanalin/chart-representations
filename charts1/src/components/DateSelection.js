import React, { useEffect } from "react";

function DateSelection({
  startDay,
  setStartDay,
  startMonth,
  setStartMonth,
  endDay,
  setEndDay,
  endMonth,
  setEndMonth,
  getBooking,
}) {
  function change(e) {
    const sMonth = document.querySelector("#select1").value;
    const eMonth = document.querySelector("#select2").value;
    const sDay = Number(document.querySelector("#input1").value);
    const eDay = Number(document.querySelector("#input2").value);

    setStartDay(sDay);
    setEndDay(eDay);
    setStartMonth(sMonth);
    setEndMonth(eMonth);

    console.log("start day", startDay);

    getBooking();
  }
  useEffect(() => {
    change();
  }, []);
  return (
    <div className="dateselection">
      {/* from */}
      FROM &nbsp;
      <input type="number" placeholder="Enter from 1 to 31" id="input1" />{" "}
      &nbsp;
      <select id="select1">
        <option value="July">July</option>
        <option value="August">August</option>
      </select>{" "}
      &nbsp;
      {/* to */}
      TO &nbsp;
      <input type="number" placeholder="Enter from 1 to 31" id="input2" />{" "}
      &nbsp;
      <select id="select2">
        <option value="July">July</option>
        <option value="August">August</option>
      </select>{" "}
      &nbsp;
      <button onClick={change}> CLICK HERE FOR USE STATE TESTING</button>
    </div>
  );
}

export default DateSelection;
