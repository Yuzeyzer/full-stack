import Job from './components/Job/Job';
import { api } from './api';
import React from 'react';

function App() {
  const [jobs, setJobs] = React.useState([]);

  const getJobs = async () => {
    const response = await fetch(api + '/jobs');
    const json = await response.json();

    setJobs(json);
  };

  React.useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className='App'>
      <div className="container">
        {jobs.map((job) => {
          return <Job key={job.id} {...job}/>;
        })}
      </div>
    </div>
  );
}

export default App;
