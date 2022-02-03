import Job from './components/Job/Job';
import { api } from './api';
import React from 'react';
import { JobsContext } from './context/jobsContext';
import Filter from './components/Filter/Filter';

function App() {
  const [jobs, setJobs] = React.useState([]);
  const [filterItems, setFilterItems] = React.useState([]);

  const getJobs = async () => {
    const response = await fetch(api + '/jobs');
    const json = await response.json();

    setJobs(json);
  };

  React.useEffect(() => {
    getJobs();
  }, []);

  React.useEffect(() => {
    const filteredJobs = jobs.filter((job) =>
      filterItems.every((filterItem) => {
        if (job.role === filterItem) return true;
        if (job.level === filterItem) return true;
        if (job.languages.includes(filterItem)) return true;
      }),
    );

    if (filteredJobs.length) setJobs(filteredJobs);
  }, [filterItems]);

  return (
    <div className='app'>
      <img className='app__header' src='./images/bg-header-desktop.svg' />
      <div className='container app__container'>
        {filterItems.length > 0 && <Filter filterItems={filterItems} />}
        {jobs.map((job) => (
          <JobsContext.Provider key={job.id} value={job}>
            <Job {...job} setFilterItems={setFilterItems} />
          </JobsContext.Provider>
        ))}
      </div>
    </div>
  );
}

export default App;
