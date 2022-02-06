import React, { useState } from 'react';
import { baseUrl } from '../../api';
import { ButtonPrimary } from '../Button/Button';
import './style.scss';

const CreateIssue = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    postNewIssue(event);
  };

  const postNewIssue = async (event) => {
    const { title, description } = event.target.elements;

    const response = await fetch(baseUrl + '/issues');
    const json = await response.json();

    await fetch(baseUrl + '/issues', {
      method: 'POST',
      body: JSON.stringify({
        ...json,
        tasks: {
          ...json.tasks,
          oolleegg: {
            id: 'oolleegg',
            title: title.value,
            description: description.value,
          },
        },
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    await fetch(baseUrl + '/issues', {
      method: 'PATCH',
      body: JSON.stringify({
        columns: {
					...json.columns,
          column1: {
						...json.columns.column1,
            taskIds: [...json.columns.column1.taskIds, 'oolleegg'],
          },
        },
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  return (
    <div className='create-issue'>
      <h4 className='create-issue__title'>Создать задачу</h4>
      <form onSubmit={handleSubmit}>
        <input name='title' type='text' placeholder='Введите заголовок задачу' />
        <textarea name='description' placeholder='Введите описание задачи'></textarea>
        <ButtonPrimary>Создать</ButtonPrimary>
      </form>
    </div>
  );
};

export default CreateIssue;
