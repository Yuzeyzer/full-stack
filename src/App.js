import { DragDropContext } from 'react-beautiful-dnd';
import Column from './components/Column/Column';
import { initialData } from './data';
import React, { useState } from 'react';
import './app.scss';

function App() {
  const [{ columnOrder, columns, tasks }, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    if (start === finish) {
      const taskIds = Array.from(start.taskIds); // получаем все ID задач

      taskIds.splice(source.index, 1); // удаляем из массива выбранный элемент
      taskIds.splice(destination.index, 0, draggableId); // вставляем выбранные элемент в выбранное место

      const newColumn = {
        ...start,
        taskIds,
      }; // Создаем новую колонку с новым массивом задач

      setData((prev) => ({
        ...prev,
        columns: {
          ...columns,
          [newColumn.id]: newColumn,
        },
      }));
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);

    const columnFromTaskWasDeleted = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const columnWhereTaskWasAdded = {
      ...finish,
      taskIds: finishTaskIds,
    };

    setData((prev) => ({
      ...prev,
      columns: {
        ...columns,
        [columnFromTaskWasDeleted.id]: columnFromTaskWasDeleted,
        [columnWhereTaskWasAdded.id]: columnWhereTaskWasAdded
      },
    }));
  };

  return (
    <div className='app'>
      <div className='container'>
        <DragDropContext onDragEnd={onDragEnd}>
          {columnOrder.map((columnId, index) => {
            const column = columns[columnId];
            const columnTasks = column.taskIds.map((id) => tasks[id]);

            return <Column key={columnId} column={column} tasks={columnTasks} index={index} />;
          })}
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
