import { DragDropContext } from 'react-beautiful-dnd';
import Column from './components/Column/Column';
import { ButtonPrimary } from './components/Button/Button';
import React, { useEffect, useState } from 'react';
import './app.scss';
import { Issues } from './services/issues';
import Modal from './components/Modal/Modal';
import CreateIssue from './components/CreateIssue/CreateIssue';

function App() {
  const [{ columnOrder, columns, tasks }, setData] = useState({
    columnOrder: '',
    columns: '',
    tasks: '',
  });
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (bool) => setShowModal(bool);

  const getIssues = async () => {
    const response = new Issues();

    const issues = await response.read();

    setData(issues);
  };

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
        [columnWhereTaskWasAdded.id]: columnWhereTaskWasAdded,
      },
    }));
  };

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <div className='app'>
      <div className='container'>
        <ButtonPrimary onClick={() => setShowModal(true)}>Создать</ButtonPrimary>
        {showModal && (
          <Modal close={handleShowModal}>
            <CreateIssue />
          </Modal>
        )}

        {columnOrder && (
          <DragDropContext onDragEnd={onDragEnd}>
            {columnOrder.map((columnId, index) => {
              const column = columns[columnId];
              const columnTasks = column.taskIds.map((id) => tasks[id]);

              return <Column key={columnId} column={column} tasks={columnTasks} index={index} />;
            })}
          </DragDropContext>
        )}
      </div>
    </div>
  );
}

export default App;
