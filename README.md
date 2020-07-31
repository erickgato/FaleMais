# FaleMais
Projeto para LOLDESIGN do sistema fale mais
## Descrição
    A empresa de telefonia Telzir, especializada em chamadas de longa distância nacional, vai
colocar um novo produto no mercado chamado FaleMais.
    Normalmente um cliente Telzir pode fazer uma chamada de uma cidade para outra pagando
uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs
de origem e destino.
    Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até
um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos
excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são
FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).

    A Telzir, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma
página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os
códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o
plano FaleMais. O sistema deve mostrar dois valores: 
    1. o valor da ligação com o plano 
    2. sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para este problema. 

## Analise de requisitos
    Possibilita entender a necessidade do cliente e analisar a possivel solução.
### Usabilidade
   - [x] deve ser prático e de fácil uso
### Portabilidade
   - [x] deve ser responsivo e/ou possuir uma versão mobile
### Funcionalidades
    1. Possibilidade de consultar tarifa. 
    2. Possibilidade de visualizar todos as tarifas por cada DDD cadastrado
    3. Possibilidade de consultar planos.

## Database
   - [x]  Tabela DDD { ddd_id: int, DDD: varchar[3] }
   - [x]  Tabela tarifa { tr_id: int, ddd_origin: int, ddd_dest: int, val_per_minute: varchar[5]  }
### Nota: 
    Você apenas deve criar um banco de dados chamado falemais e configurá-lo,
    as tabelas e seeds serão criadas com o query builder
## Técnologias Utilizadas
    1. Nodejs
    2. Mysql
    3. Express
    4. knex


## Comandos
### Passos
- [x] Abra o bash na raiz do projeto
- [x] Execute: yarn
- [x] Execute: yarn knex migrate:latest 
- [x] Execute: yarn knex seed:run
#### Servidor
Para iniciar a api utilize a porta 4000(importante pois o frontend está escutando esta porta)
-[x] Digite yarn dev
### Coletion do PostMAN para a api: https://www.getpostman.com/collections/d9d42d4d651d83d13740

### Testes
-[x] Crie uma base de dados para teste e a coloque no arquivo .env.test
-[x] execute yarn test
-[x] Prooonto
