# Controle de estoque Ustore

Projeto composto pelas 4 operações básicas de um CRUD, ou seja, create, read, update e delete. O sistema consiste numa rotina de inventário de produtos onde todas as operações citadas podem ser realizadas. Foi criada uma tabela de banco de dados para armazenar as informações passadas pelos usuários. 

## Como utilizar:

1 - Clonar o repositório do github para a sua máquina

2 - Abrir o projeto em sua IDE de preferência(é sugerida a utilização do vscode pois esse comporta as linguagens utilizadas no desenvolvimento)

3 - É necessário ter o docker desktop localmente na sua máquina(Se estiver utilizando o windows, seguir a documentação a seguir https://docs.docker.com/desktop/install/windows-install/. Se tiver utilizando Ubuntu, seguir o passo a passo abaixo:
3.1 -  Atualizar pacotes existentes - sudo apt-get update
3.2 -  Instalar pacotes necessários - sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
3.3 -  Adicionar a chave GPG do Docker - curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
3.4 - Adicionar o repositório Docker - echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
3.5 - Instalar o Docker - sudo apt-get update 
                        sudo apt-get install docker-ce docker-ce-cli containerd.io
3.6 - )

4 - É necessário a instalação do banco Mysql para alocar o banco de dados. Seguir a documentação a seguir para o windows:
(https://dev.mysql.com/downloads/installer/). No Ubuntu, seguir os passos a seguir:

4.1 - Atualize os pacotes e instale o MySQL Server - sudo apt-get update
                                                     sudo apt-get install mysql-server


4.2 - Inicie o serviço MySQL - brew services start mysql

4.3 - Verifique se o MySQL está funcionando - sudo systemctl status mysql

4.4 - Configure o MySQL - sudo mysql_secure_installation


Após esses passos, o ambiente estará pronto para executar a aplicação.

Para executar a aplicação, basta seguir a instrução abaixo:

Abrir um terminal no vscode, navegar até a pasta 'projeto_ustore' e executar o comando docker-compose up --build.
Após isso, acessar o endpoint http://localhost:4200(para usar apenas o backend em aplicativos de teste de requisição http como o postman e o insomnia, basta acessar o endpoint http://localhost:3000/products).



