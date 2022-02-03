export const initialData = {
  tasks: {
    task1: {
      id: 'task1',
      title: 'Надо убить Сейтека',
    },
    task2: {
      id: 'task2',
      title: 'Надо убить Бекжана',
    },
    task3: {
      id: 'task3',
      title: 'Надо убить Нурсултана',
    },
  },
  columns: {
    column1: {
      id: 'column1',
      title: 'To do',
      taskIds: ['task2', 'task3'],
    },
    column2: {
      id: 'column2',
      title: 'In Progress',
      taskIds: ['task1'],
    },
  },
  columnOrder: ['column1', 'column2'],
};
