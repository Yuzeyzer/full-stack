import React from 'react';
import './style.scss';

const Job = ({logo, languages, company,isFeatured, isNew, position, role, level }) => {
  return (
    <div className='job'>
      <div className='job__left'>
        <div className='job__image'>
          <img className='job__logo' src={logo} alt={company} />
        </div>
        <div className='job__info'>
          <div className='job__company job-company'>
            <span className='job-company__name'>{company}</span>
            {isNew && <span className='job-company__new'>NEW!</span>}
            {isFeatured && <span className='job-company__featured'>FEATURED</span>}
          </div>
          <h3 className='job__title'>{position}</h3>
          <ul className='job__details job-details'>
            <li className='job-details__item'>1d ago</li>
            <li className='job-details__item'>Full Time</li>
            <li className='job-details__item'>USA only</li>
          </ul>
        </div>
      </div>
      <div className='job__right'>
        <ul className='job-skills'>
          <li className='job-skills__item'>{role}</li>
          <li className='job-skills__item'>{level}</li>
          {languages.map((language) => {
            return <li className='job-skills__item'>{language}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Job;
