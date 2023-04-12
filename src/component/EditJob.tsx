import React, { useState } from "react";
import { IJob } from "./Job.type";
import "./JobForm.style.css";

type Props = {
  data: IJob;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IJob) => void;
};

const EditJob = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [summary, setSummary] = useState(data.summary);
  const [description, setDescription] = useState(data.description);
  const [status, setStatus] = useState(data.status);
  const [property, setProperty] = useState(data.property);


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
    const updatedData: IJob = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      summary: summary,
      description: description,
      status: status,
      property: property,
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>
        <h3>Edit Job Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
      <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={onFirstNameChangeHnd} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={firstName} onChange={onLastNameChangeHnd} />
        </div>
        <div>
          <label>Summary:</label>
          <input type="text" value={summary} onChange={onSummaryChangeHnd} maxLength={150} />
        </div>
        <div>
          <label>Description:</label>
          <textarea
        id="description"
        onChange={onDescriptionChangeHnd}
        placeholder=""
       
        maxLength={500}
        value={description}
      />
        </div>
       
        <div>
         <label>Status:</label>
        <select onChange={onStatusChangeHnd}>
          <option>Open</option>
          <option>InProgress</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
        </div>
        <div>
          <label>Property:</label>
          <input type="text" value={property} onChange={onPropertyChangeHnd} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default EditJob;