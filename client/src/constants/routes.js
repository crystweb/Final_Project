const routes = {
  home: {name: 'California', href: '/'},
  employees: {name: 'Сотрудники', href: '/employees'},
  employeeList: {name: 'Список сотрудников', href: '/employees/list'},
  vacancies: {name: 'Открытые вакансии', href: '/employees/vacancies'},
  comments: {name: 'Передача смены', href: '/comments'},
  commentsHistory: {name: 'История смен', href: '/comments/history'},
  addNewComments: {name: 'Передать смену', href: '/comments/new'},
    tasks: {
    name: 'Задачи',
    href: '/tasks',
    hotelTasks: {name: 'Отель', href: '/tasks/hotel'},
    kitchenTasks: {name: 'Кухня', href: '/tasks/kitchen'},
    firstRestaurantTasks: {name: 'Первый Ресторан', href: '/tasks/firstRestaurant'},
    secondRestaurantTasks: {name: 'Второй Ресторан', href: '/tasks/secondRestaurant'},
    cyclicTasks: {name: 'Циклические задачи', href: '/tasks/cyclic'}
  }
}

export default routes
