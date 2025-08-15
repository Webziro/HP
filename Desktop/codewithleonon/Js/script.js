const todos = [
  { 
    id: 1,
    title: 'Learn JavaScript',
    completed: true
  },
  {
    id: 2,
    title: 'Build a Todo App',
    completed: false
  },
  {
    id: 3,
    title: 'Master CSS',
    completed: false
  }
];
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

for(let todo of todos){
    console.log(todo.title);
}