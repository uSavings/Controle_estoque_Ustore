# uSavings Challenges 

Desafios para candidatos(as) para vagas do time uSavings (Ustore/Claro Brasil)


## Introducao
[Keep it simple](https://pt.wikipedia.org/wiki/Princ%C3%ADpio_KISS), entendemos que você possui suas prioridades e nossa proposta com esse desafio é ter uma idéia de como você faz seus códigos, toma suas decisões arquiteturais e o seu conhecimento geral sobre os assuntos abordados.

Seu desafio precisa estar versionado no Github, em um repositório público ou privado.

A documentação é primordial e vamos nos guiar por ela, então documente os passos no README do projeto ;-)

A aplicação deve ser fácil de ser executada localmente
Não tem problema se você não conseguir finalizar tudo! Não deixe de enviar seu desafio por isso!

Temos alguns entregáveis que vão nos ajudar a entender em que ponto você está tecnicamente. Será muito legal se você nos mandar ao menos o entregável 1 completo, mas se isso não for possível, não deixe de mandar o case até onde conseguiu, queremos ver o seu código e a sua linha de raciocínio, avaliamos tudo ;-)
Temos um entregável que chamamos de **plus**, e será muito legal se você chegar até lá \o/


## Contexto

Lucas, um jovem empreendedor, observou que o processo de gerenciamento de inventário de sua empresa, especialmente no que diz respeito ao monitoramento das datas de validade dos produtos, é frequentemente manual e suscetível a erros. Ele decidiu que seria benéfico desenvolver uma aplicação web que simplificasse essa tarefa, permitindo-o controlar seus produtos de forma mais eficiente e evitar prejuízos decorrentes de produtos vencidos.

## Entregável 1

- Desenvolva uma aplicação web para gerenciamento de produtos (Angular)
- Desenvolver uma aplicação backend (Express, AdonisJS ou NestJS)
- Utilize TypeScript
- Utilize um banco de dados MySQL ou MongoDB
- Utilize um ORM (Lucid, TypeORM, Sequelize ou Mongoose)
- Documentação e descrição de funcionalidades e manuseio do projeto


## Front-end
![Simple Layout](/assets/layout.png)

### Funcionalidades
- [x] Adicionar um produto
- [x] Listar produtos
- [x] Editar um produto
- [x] Deletar um produto


> **Warning**
>: Apesar de sua simplicidade, trate a aplicação como algo que fosse ser usado no mundo real. Não deve haver duplicidade de dados, por exemplo. A API deve retornar os dados de forma correta e consistente. Mesmo as coisas simples precisam de atenção e qualidade.


## Entregável 2
- [ ] Componentizar a aplicação (Separar em componentes o formulário de adição de produtos, a listagem de produtos)
- [ ] Filtrar produtos por data de validade
- [x] Validar a data de validade do produto (não pode ser menor que a data de hoje)
- [x] Adicionar um campo de quantidade ao produto
- [ ] Um Dockerfile para cada aplicação para conseguirmos subí-la localmente.


## Plus ##
- Um Docker Compose com os serviços utilizados (web, backend e banco)
- Configure o deploy utilizando uma tecnologia provida pela (AWS || Vercel ||  Heroku || Netlify)


## Tecnologias que usamos e voce pode se inspirar
Aqui dentro do time temos algumas tecnologias que usamos no dia-a-dia e gostaríamos de validar seu conhecimento nas mesmas, sendo elas:
 - [ ] NodeJS (AdonisJS ou NestJS)
 - [ ] Angular
 - [ ] RabbitMQ
 - [ ] MySQL/MongoDB


## Definicao final de Entrega
- [x] Repositório no github com a aplicação
- [x] Documentação de como rodar a aplicação localmente
- [x] Endpoint acessível da aplicação

## O que será avaliado e valorizamos
Habilidades básicas de criação de projetos backend/frontend:

- Conhecimentos sobre REST
- Conhecimentos sobre TypeScript
- Padrões e Boas Práticas em Angular
- Uso do Git
- Capacidade analítica
- Apresentação de código limpo e organizado

## Respostas

### Certifique-se de que habilitar o CORS (Prioridade: Baixa)
Durante a revisão do seu código, identificamos o seguinte trecho no arquivo app.ts:

```javascript
app.use(cors());
```

Gostaríamos de chamar sua atenção para a questão de segurança relacionada ao uso de CORS (Cross-Origin Resource Sharing). Habilitar CORS de forma permissiva pode introduzir vulnerabilidades de segurança.

### Quais são os riscos?
Para garantir que a habilitação do CORS seja segura, é importante restringir as origens permitidas e configurar adequadamente as opções de CORS.

Seguem as seguintes vulnerabilidades:
  - [CVE-2018-0269](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2018-0269)
  - [CVE-2017-14460](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-14460)

A política de mesma origem em navegadores impede, por padrão e por motivos de segurança, que um frontend javascript execute uma solicitação HTTP de origem cruzada para um recurso que tenha uma origem diferente (domínio, protocolo ou porta) da sua própria. O destino solicitado pode anexar cabeçalhos HTTP adicionais em resposta, chamados CORS, que atuam como diretivas para o navegador e alteram a política de controle de acesso/relaxam a mesma política de origem.

Pergunte a si mesmo se:
  - Você não confia na origem especificada, exemplo: `Access-Control-Allow-Origin: untrustedwebsite.com`.
  - A política de controle de acesso está totalmente desabilitada: `Access-Control-Allow-Origin: *`.
  - Sua política de controle de acesso é definida dinamicamente por um cabeçalho controlado pelo usuário.

Existe um risco se você respondeu sim a qualquer uma dessas perguntas.

### Práticas de seguras recomendadas
  - O cabeçalho `Access-Control-Allow-Origin` deve ser definido apenas para uma origem confiável e para recursos específicos.
  - Permita apenas domínios selecionados e confiáveis ​​no cabeçalho `Access-Control-Allow-Origin`. Prefira colocar domínios na lista branca em vez de colocar na lista negra ou permitir qualquer domínio (não use o curinga * nem retorne cegamente o conteúdo do cabeçalho `Origin` sem nenhuma verificação).

#### Sensitive Code
```javascript
const cors = require('cors');

let app1 = express();
app1.use(cors()); // Sensitive: by default origin is set to *

let corsOptions = {
  origin: '*' // Sensitive
};

let app2 = express();
app2.use(cors(corsOptions));
```

#### Compliant Solution
```javascript
const cors = require('cors');

let corsOptions = {
  origin: 'trustedwebsite.com' // Compliant
};

let app = express();
app.use(cors(corsOptions));
```

Veja:
- OWASP - [Top 10 2021 Category A5 - Security Misconfiguration](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)
- OWASP - [Top 10 2021 Category A7 - Identification and Authentication Failures](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)
- [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) - CORS
- [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) - Same origin policy
- OWASP - [Top 10 2017 Category A6 - Security Misconfiguration](https://owasp.org/www-project-top-ten/2017/A6_2017-Security_Misconfiguration)
- OWASP - [HTML5 Security Cheat Sheet - Cross Origin Resource Sharing](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#cross-origin-resource-sharing)
- CWE - [CWE-346 - Origin Validation Error](https://cwe.mitre.org/data/definitions/346)
- CWE - [CWE-942 - Overly Permissive Cross-domain Whitelist](https://cwe.mitre.org/data/definitions/942)