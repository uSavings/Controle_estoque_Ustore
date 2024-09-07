const mysql = require('mysql2');
const connection = require('./database');


const createTableQuery = `
  CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nm_produto VARCHAR(255) NOT NULL,
    validade DATE NOT NULL,
    quantidade INT NOT NULL
  )
`;

connection.query(createTableQuery, (err) => {
  if (err) {
    console.error('Erro ao criar a tabela:', err.message);
  } else {
    console.log('Tabela criada com sucesso.');
  }

  connection.end();
});

