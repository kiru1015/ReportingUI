import React, { useState,useEffect } from "react";
import "./Header.style.css";
import EditJob from "./EditJob";
import { IJob, PageEnum } from "./Job.type";
import JobList from "./JobList";
import AddJob from "./AddJob";


const Header = () => {
  const [jobList, setJobList] = useState([] as IJob[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IJob);

  useEffect(() => {
    const listInString = window.localStorage.getItem("JobList");
    if (listInString) {
      setJobList(JSON.parse(listInString));
    }
  
  }, []);


  const onAddJobClickHnd = async () => {

    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const addJob = (data: IJob) => {
    setJobList([...jobList, data]);
  };

  const deleteJob = (data: IJob) => {
    
    const indexToDelete = jobList.indexOf(data);
    const tempList = [...jobList];

    tempList.splice(indexToDelete, 1);
    setJobList(tempList);
  };

  const editJobData = (data: IJob) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IJob) => {
    const filteredData = jobList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = jobList.indexOf(filteredData);
    const tempData = [...jobList];
    tempData[indexOfRecord] = data;
    setJobList(tempData);
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h1>Reporting System</h1>
        </header>
      </article>

      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            {" "}
            <input
              type="button"
              value="Add Job"
              onClick={onAddJobClickHnd}
              className="add-job-btn"
            />

            <JobList list={jobList}  onDeleteClickHnd={deleteJob}  onEdit={editJobData}/>
          </>
        )}
        {shownPage === PageEnum.add && (
          <AddJob onBackBtnClickHnd={showListPage} onSubmitClickHnd={addJob} />
        )}
        {shownPage === PageEnum.edit && (
          <EditJob
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Header;
