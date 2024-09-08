# Controle de estoque Ustore

Projeto composto pelas 4 operações básicas de um CRUD, ou seja, create, read, update e delete. O sistema consiste numa rotina de inventário de produtos onde todas as operações citadas podem ser realizadas. Foi criada uma tabela de banco de dados para armazenar as informações passadas pelos usuários. 


## Documentação do Projeto: Sistema de Controle de Estoque com Docker Compose

### 1. Visão Geral
O projeto de controle de estoque utiliza Docker e Docker Compose para gerenciar os serviços de frontend (Angular), backend (Node.js) e banco de dados (MySQL). Docker Compose facilita a configuração e o gerenciamento desses serviços em containers.

### 2. Arquitetura
2.1 Frontend: Contém a aplicação Angular.

2.2 Backend: Contém a aplicação Node.js que expõe a API.

2.3 Banco de Dados: Contém o MySQL, responsável pelo armazenamento de dados.

### 3. Como Executar o Projeto

3.1 Iniciar o serviço frontend - Para rodar o serviço frontend é necessário abrir um terminal no vscode, navegar até a pasta 'frontend' rodar o comando 'npm install' e depois rodar o comando 'ng serve'

3.2 Para rodar o backend e o banco de dados Mysql, é necessário abrir um terminal no diretório raiz(projeto_ustore) e rodar o comando 'docker-compose up --build'.

Após essas instruções, o projeto vai estar rodando e vai aparecer com essa interface abaixo:

![Captura de Tela (152)](https://github.com/user-attachments/assets/4c55c2c5-9e55-4423-862b-654e08b9808b)

