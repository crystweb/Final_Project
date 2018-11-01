const routes = {
  home: {name: 'грилив отель', href: '/', previousHref: null},
  employees: {name: 'персонал', href: '/employees', previousHref: '/'},
  employeesList: {name: 'сотрудники', href: '/employees/list', previousHref: '/employees'},
  updateEmployee: {name: 'изменить данные сотрудника', href: '/employees/list/factory/', previousHref: '/employees/list'},
  addNewEmployee: {name: 'добавить нового сотрудника', href: '/employees/list/factory/', previousHref: '/employees/list'},
  tasks: {name: 'Задачи', href: '/tasks', previousHref: '/'},
  vacancies: {name: 'вакансии', href: '/employees/vacancies', previousHref: '/employees'},
  comments: {name: 'смены', href: '/shifts', previousHref: '/'},
  commentsHistory: {name: 'История смен', href: '/shifts/history', previousHref: '/shifts'},
  addNewComments: {name: 'Передать смену', href: '/shift/new', previousHref: '/shifts'},
  updateComment: {name: 'изменить комментарий ', href: '/shift/update/', previousHref: '/shifts'},
  addNewVacancy: {name: 'добавить вакансию', href: '/employees/vacancies/service/', previousHref: '/employees/vacancies'},
  updateVacancy: {name: 'изменить вакансию', href: '/employees/vacancies/service/', previousHref: '/employees/vacancies'},
  createNewTask: {name: 'назначить задачу', href: '/tasks/add/', previousHref: '/tasks'},
  tasksView: {name: 'Мои задачи', href: '/tasks/myTasks', previousHref: '/tasks'},
  tasksHistory: {name: 'история задач', href: '/tasks/history', previousHref: '/tasks'},
  washingData: {name: 'стирка', href: '/washingData', previousHref: '/'},
  salesNumbers: {name: 'Продажные номера', href: '/washingData/salesNumbers', previousHref: '/washingData'},
  lodgers: {name: 'Постояльцы', href: '/washingData/lodgers', previousHref: '/washingData'},
  roomCheckIn: {name: 'Обход номеров', href: '/rooms', previousHref: '/'},
  taskForRoom: {name: 'Задачи', href: '/rooms/', previousHref: '/rooms'},
  createTaskForRoom: {name: 'Создать', href: '/tasks/add/'},
  checkInHistory: {name: 'Обходы', href: '/check', previousHref: '/rooms'}
}

export default routes
