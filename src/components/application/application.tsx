import React from "react";

const Application = () => {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "10px",
      }}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="job-location">Job location</label>
        <select id="jon-location">
          <option value="">Select a country</option>
          <option value="US">United State</option>
          <option value="UK">United Kingdom</option>
          <option value="IN">India</option>
          <option value="CA">Canada</option>
          <option value="AUS">Australia</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" id="terms" /> I agree to the terms and
          conditions
        </label>
      </div>
      <button style={{ width: "fit-content" }}>Submit</button>
    </form>
  );
};

export default Application;