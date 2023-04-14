import React, { useState,useEffect } from "react";
import "./Header.style.css";
import { IJob, PageEnum } from "./Job.type";
import JobList from "./JobList";
import AddJob from "./AddJob";


const Header = () => {
  const [jobList, setJobList] = useState([] as IJob[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  // const [dataToEdit, setDataToEdit] = useState({} as IJob);

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
            <JobList list={jobList} />
          </>
        )}
        {shownPage === PageEnum.add && (
          <AddJob onBackBtnClickHnd={showListPage} onSubmitClickHnd={addJob} />
        )}
       
      </section>
    </>
  );
};

export default Header;
