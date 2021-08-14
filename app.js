const http = new EasyHTTP();

// //  Get Users
// http
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// // New data
// const data = {
//   name: 'Steven Smith',
//   username: 'steven',
//   email: 'steven@gmail.com',
// };

// Creat User

// http
//   .post('https://jsonplaceholder.typicode.com/users', data)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// New User Data
// const data = {
//   name: 'Steven Smith',
//   username: 'steven',
//   email: 'steven@gmail.com',
// };

// Update User
// http
//   .put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Delete
http
  .delete('https://jsonplaceholder.typicode.com/users/2')
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
