const { resolve } = require('path');

console.log(resolve(__dirname, 'src', 'database', 'migrations'));

// module.exports = {
//     config: resolve(__dirname, 'src', 'config', 'database.js'),
//     'models-paths': resolve(__dirname, 'src', 'app', 'models'),
//     'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
//     'seeders': resolve(__dirname, 'src', 'database', 'seeds')
// }