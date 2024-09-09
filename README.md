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

OBS: se for rodar no windows, é preciso que o docker desktop esteja em estado de execução.

Após essas instruções, o projeto vai subir na porta http://localhost:4200/ e estará rodando com essa interface abaixo:

![Captura de Tela (152)](https://github.com/user-attachments/assets/4c55c2c5-9e55-4423-862b-654e08b9808b)

Para Adcionar um produto, basta acionar o botão na parte superior direita da tela e informar os dados, como abaixo:

![Captura de Tela (153)](https://github.com/user-attachments/assets/6cd4188e-549c-439a-b5eb-b9c7d1410d6a)

Para editar um registro, basta clicar no botão editar como mostrado na imagem abaixo:
![Captura de Tela (155)](https://github.com/user-attachments/assets/b8c1d93e-d56a-4cb6-b946-e96031b6306d)

Para remover um registro, basta clicar no botão de remover e confirmar dando ok no alerta que surge na tela:
![Captura de Tela (156)](https://github.com/user-attachments/assets/c053ccbe-f577-4c66-89bb-536b6354284b)

Se você tentar adicionar ou editar um produto e esclher uma data que for antetior a data vigente, o sistema não vai deixar e vai estourar um erro na tela:
![Captura de Tela (154)](https://github.com/user-attachments/assets/548dd005-6d34-4cf7-b033-1a5a8277dc6e).

## 4. Considerações Finais

Esta documentação fornece uma visão geral de como configurar e executar um projeto de controle de estoque utilizando Docker Compose para orquestrar os serviços de backend e banco de dados e executando o frontend localmente.








