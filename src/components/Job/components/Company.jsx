import React from 'react';
import { JobsContext } from '../../../context/jobsContext';

const Company = () => {
  const { company, isNew, isFeatured } = React.useContext(JobsContext);

  return (
    <div className='job__company job-company'>
      <span className='job-company__name'>{company}</span> 
      {isNew && <span className='job-company__new'>NEW!</span>}
      {isFeatured && <span className='job-company__featured'>FEATURED</span>}
    </div>
  );
};

export default Company;
