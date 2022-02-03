import React from 'react';
import Company from './components/Company';
import './style.scss';

const Job = ({
  setFilterItems,
  logo,
  languages,
  company,
  position,
  role,
  level,
  isNew,
  isFeatured,
}) => {
  const handleClickToSkill = (event) => {
    const newSkill = event.target.textContent
    setFilterItems((prev) => prev.includes(newSkill) ? prev : [...prev,newSkill]);
  };

  return (
    <div className={`job ${isNew && isFeatured ? ' job_active' : ''}`}>
      <div className='job__left'>
        <div className='job__image'>
          <img className='job__logo' src={logo} alt={company} />
        </div>
        <div className='job__info'>
          <Company />
          <h3 className='job__title'>{position}</h3>
          <ul className='job__details job-details'>
            <li className='job-details__item'>1d ago</li>
            <li className='job-details__item'>Full Time</li>
            <li className='job-details__item'>USA only</li>
          </ul>
        </div>
      </div>
      <div className='job__right'>
        <ul onClick={handleClickToSkill} className='job-skills'>
          <li className='job-skills__item'>{role}</li>
          <li className='job-skills__item'>{level}</li>
          {languages.map((language) => {
            return (
              <li key={language} className='job-skills__item'>
                {language}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Job;
