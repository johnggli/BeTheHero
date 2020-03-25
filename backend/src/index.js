const express = require('express'); /* pacote */
const routes = require('./routes'); /* arquivo */
const cors = require('cors');

const app = express();

app.use(cors()); /* todas as aplicações frontends podem acessar */
app.use(express.json());
app.use(routes);

/**
 * Driver: SELECT * FROM USERS
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333);
