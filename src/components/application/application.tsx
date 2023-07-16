import React from "react";

const Application = () => {
  return (
    <div>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <div data-testId="custom-element"> Custom HTML Element</div>
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
          <input type="text" id="name" value={"Amir"} onChange={() => {}} />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" cols={10} />
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
    </div>
  );
};

export default Application;
