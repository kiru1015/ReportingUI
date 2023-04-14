import { IJob } from "./Job.type";
import "./JobModal.style.css";
import React from "react";

type Props = {
  onClose: () => void;
  data: IJob;
};

const JobModal = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Job Details</h3>
        <div>
          <div>
            <label>Raised By : {`${data.firstName} ${data.lastName}`}</label>
          </div>
          <div>
            <label>Summary : {data.summary}</label>
          </div>
          <div>
            <label>Description : {data.description}</label>
          </div>
          <div>
            <label>Status : {data.status}</label>
          </div>
          <div>
            <label>Property : {data.property}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModal;