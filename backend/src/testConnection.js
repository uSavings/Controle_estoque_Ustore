const connection = require('./database');

connection.query('SELECT 1 + 1 AS solution', (err, results) => {
  if (err) {
    console.error('Erro ao executar a consulta:', err.message);
  } else {
    console.log('Resultado da consulta:', results);
  }
  
  connection.end();
});