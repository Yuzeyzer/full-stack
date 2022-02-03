import React from 'react';
import './style.scss'

const Filter = ({filterItems}) => {
	return <div className="filter">
		<ul className="filter__list">
			{filterItems.map(skill => {
				return <li key={skill}>{skill}</li>
			})}
		</ul>
	</div>;
};

export default Filter;
