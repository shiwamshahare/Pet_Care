import React from "react";

const BookingForm = () => {
  return (
    <div className="h-full bg-[#FF5000] lg:px-12 sm:px-20 px-12 py-8 md:py-20 grid ">
      <form action="#" className="grid gap-5">
        <input
          type="text"
          className="px-5 py-2 lg:py-0 rounded-md"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="px-5 py-2 lg:py-0 rounded-md"
          placeholder="Your Email"
        />
        <input
          type="date"
          className="px-5 py-2 lg:py-0 rounded-md w-auto"
          placeholder="Reservation Date"
        />
        <input
          type="time"
          className="px-5 py-2 lg:py-0 rounded-md w-auto"
          placeholder="Reservation Time"
        />
        <select
          name="sevice"
          id="service"
          className="px-5 py-2 lg:py-0 rounded-md"
          placeholder="Select A Service"
        >
          <option value="">Select A Service</option>
          <option value="Pet Boarding">Boarding</option>
          <option value="Pet Feeding">Feeding</option>
          <option value="Pet Grooming">Grooming</option>
          <option value="Pet Training">Training</option>
        </select>
        <button className="bg-black text-white px-5 py-2 lg:py-0 rounded-md">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
