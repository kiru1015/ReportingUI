import React, { useState } from "react";
import "./JobForm.style.css";
import { IJob } from "./Job.type";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IJob) => void;
};

const AddJob = (props: Props) => {
  const options = [
    { label: "Open", value: "Open" },
    { label: "In-progress", value: "In-progress" },
    { label: "Completed", value: "Completed" },
    { label: "cancelled", value: "cancelled" },
  ];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Open");
  const [property, setProperty] = useState("");
  // const [propertyOptions, setPropertyOptions] = useState([]);

  //const { onBackBtnClickHnd, onSubmitClickHnd } = props;
  const { onBackBtnClickHnd } = props;

  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const onSummaryChangeHnd = (e: any) => {
    setSummary(e.target.value);
  };
  const onDescriptionChangeHnd = (e: any) => {
    setDescription(e.target.value);
  };
  const onStatusChangeHnd = (e: any) => {
    setStatus(e.target.value);
  };
  const onPropertyChangeHnd = (e: any) => {
    setProperty(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:8000/add_job", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        summary: summary,
        description: description,
        status: status,
        propertyName: property,
        // propertyName: propertyName
      }),
    });

  };

  return (
    <div className="form-container">
      <div><h3>Log a Job</h3></div>
      <form onSubmit={onSubmitBtnClickHnd} className="jobWrapper">
        <div> 
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={onFirstNameChangeHnd} placeholder="Enter First Name" required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={onLastNameChangeHnd} placeholder="Enter Last Name" required />
        </div>
        <div>
          <label>Summary:</label>
          <input
            type="text"
            value={summary}
            onChange={onSummaryChangeHnd}
            placeholder="Enter Summary here...(max 150 characters)"
            maxLength={150}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            id="description"
            onChange={onDescriptionChangeHnd}
            placeholder="Enter Description...(max 500 characters)"
            maxLength={500}
            value={description}
            required
          />
        </div>

        <div>
          <label>Status:</label>
          <select onChange={onStatusChangeHnd} disabled>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Property Name:</label>
          <input type="text" value={property} onChange={onPropertyChangeHnd}  placeholder="Enter Property Name" required />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddJob;
