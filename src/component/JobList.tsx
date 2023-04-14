import React, { useState, useEffect } from "react";
import { IJob } from "./Job.type";
import "./JobList.style.css";
import JobModal from "./JobModal";
import axios from "axios";

type Props = {
  list: IJob[];
 
};

const JobList = (props: Props) => {

  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IJob | null);
  const [jobs, setJobs] = useState([]);


  useEffect(() => {
    let jobData = [];
    axios.get("http://localhost:8000/job").then((res) => {
      console.log("res.data: ", res.data.data);
      res.data.data.forEach((data) => {
        jobData.push(
            {
          "id":data.id,
          "firstName":data.firstName,
          "lastName":data.lastName,
          "summary":data.summary,
          "description":data.description,
          "status":data.status,
          "property":data.property.name
        }
        );
      });
      console.log("jobData: ", jobData);
      setJobs(jobData);
  });
      console.log("jobData: ", jobData);
  }, []);

  const viewJob = (data: IJob) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <div>
      <table id="jobs">
        <tr>
          <th>Raised By</th>
          <th>Summary</th>
          <th>Description</th>
          <th>Status</th>
          <th>Property</th>
          <th>Action</th>
        </tr>
        {jobs.map((job) => {
          console.log(job);
          return (
            <tr key={job.id}>
              
              <td>{`${job.firstName} ${job.lastName}`}</td>
              <td>{job.summary} </td>
              <td>{job.description}</td>
              <td> {job.status}</td>
              <td>{job.property}</td>
              <td>
                <div>
                  <input type="button" value="View" onClick={() => viewJob(job)}/>
             
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      {showModal && dataToShow !== null && (
        <JobModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default JobList;
