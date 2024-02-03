import React, { useState } from "react";

const TableReserv = () => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("12:00 PM");
  const [table, settable] = useState("Table for 2");
  const [event, setevent] = useState("Birthday Party");
  const [submitted, setSubmitted] = useState(false);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      phone: phone,
      date: date,
      time: time,
      table: table,
      event: event,
    };
    setname("");
    setphone("");
    setdate("");
    settime("12:00 PM");
    settable("Table for 2");
    setevent("Birthday Party");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 1700);

    console.log(data);
  };
  return (
    <>
      <div className=" h-[85vh] bg-[#e2e2e2] w-full flex justify-center items-center px-[1vw] py-[2vh] relative">
        <div
          className={`absolute z-10 bg-[#5f7236af] w-[25vw] h-[10vh] rounded-md backdrop-blur flex items-center justify-center  left-[50%] [transform:translate(-50%,50%)] transition-all ease-in-out ${
            submitted ? "opacity-100 top-[2%] " : "opacity-0 top-[-50%]"
          }`}
        >
          <h1 className=" text-[#ffffee] font-semibold text-[1.3vw] text-center  whitespace-nowrap ">
            Table Table Booking Confirmed !!
          </h1>
        </div>
        <form
          className=" bg-[#ece9df]  w-[45vw] h-[45vh] rounded-lg drop-shadow-md flex flex-col px-[2vw] py-[2vh] gap-[1vh] relative"
          onSubmit={formSubmitHandler}
        >
          <div className=" flex flex-col">
            <label htmlFor="Name" className=" cursor-pointer font-medium">
              Name
            </label>
            <input
              required
              type="text"
              id="Name"
              className=" bg-[#d6d1ae] rounded-md py-[.2vh] px-[1vw]"
              onChange={(e) => setname(e.target.value)}
              value={name}
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="phone" className=" cursor-pointer font-medium">
              Phone
            </label>
            <input
              required
              type="tel"
              id="phone"
              className=" bg-[#d6d1ae] rounded-md py-[.2vh] px-[1vw]"
              onChange={(e) => setphone(e.target.value)}
              value={phone}
            />
          </div>
          <div className=" flex justify-stretch gap-[3vw]">
            <div className=" flex flex-col">
              <label htmlFor="dates" className=" cursor-pointer font-medium">
                Date
              </label>
              <input
                required
                type="date"
                id="dates"
                className=" bg-[#d6d1ae] rounded-md py-[.2vh] px-[1vw]"
                onChange={(e) => setdate(e.target.value)}
                value={date}
              />
            </div>
            <div className=" flex flex-col">
              <label htmlFor="time" className=" cursor-pointer font-medium">
                Time
              </label>
              <select
                id="time"
                className=" bg-[#d6d1ae] rounded-md py-[.2vh] px-[1vw]"
                onChange={(e) => settime(e.target.value)}
                required
              >
                <option>12:00 PM</option>
                <option>1:00 PM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
                <option>5:00 PM</option>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
              </select>
            </div>
          </div>

          <div className=" flex justify-stretch gap-[3vw]">
            <div className=" flex flex-col">
              <label htmlFor="table" className=" cursor-pointer font-medium">
                Table
              </label>
              <select
                name=""
                id="table"
                className=" bg-[#d6d1ae] rounded-md py-[.2vh] px-[1vw]"
                onChange={(e) => settable(e.target.value)}
              >
                <option>Table for 2</option>
                <option>Table for 4</option>
                <option>Table for 6</option>
                <option>Table for 8</option>
              </select>
            </div>

            <div className=" flex flex-col">
              <label htmlFor="event" className=" cursor-pointer font-medium">
                Event
              </label>
              <select
                name=""
                id="event"
                className=" bg-[#d6d1ae] rounded-md py-[.2vh] px-[1vw]"
                onChange={(e) => setevent(e.target.value)}
              >
                <option>Birthday Party</option>
                <option>Family Get Together</option>
                <option>Anniversery</option>
                <option>Normal Dinner</option>
              </select>
            </div>
          </div>

          <input
            type="submit"
            value="Reserve Now !!"
            className=" absolute top-[45vh] left-[50%] [transform:translate(-50%,-50%)] bg-[#d4d36c] border border-[#2e2e2e] px-[1vw] w-[10vw] py-[2vh] rounded-lg font-semibold drop-shadow-md hover:brightness-110 transition-all active:brightness-95 cursor-pointer "
          />
        </form>
      </div>
    </>
  );
};

export default TableReserv;
