import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './style.scss';

const Card = ({ title, index,id }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provide) => (
        <div
          ref={provide.innerRef}
          {...provide.dragHandleProps}
          {...provide.draggableProps}
          className='card'>
          <h5 className='card__title'>{title}</h5>
          <div className='card__details'>
            <div className='card__row'>
              <div className='card__type'>
                <svg width='16px' height='16px' viewBox='0 0 16 16'>
                  <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                    <g id='bug'>
                      <g id='Bug' transform='translate(1.000000, 1.000000)'>
                        <rect
                          id='Rectangle-36'
                          fill='#E5493A'
                          x='0'
                          y='0'
                          width='14'
                          height='14'
                          rx='2'
                        />
                        <path
                          d='M10,7 C10,8.657 8.657,10 7,10 C5.343,10 4,8.657 4,7 C4,5.343 5.343,4 7,4 C8.657,4 10,5.343 10,7'
                          id='Fill-2'
                          fill='#FFFFFF'
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className='card__priority'>
                <img src='https://i.imgur.com/qVaZWPW.png' />
              </div>
            </div>
            <div className='card__row'>
              <div className='card-key'>BM-2122</div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
