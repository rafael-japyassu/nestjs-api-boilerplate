# Nestjs API Boilerplate

Projeto padrão seguindo a **Clean Architecture** com algumas funcionalidades já configuradas, que serão listadas abaixo:

## Features:
 - Nestjs
 - TypeORM
 - Eslint
 - Prettier
 - Jest

## Configurando a aplicação:
Incialmente, é recomendado ter o **Docker** instalado em sua máquina, pois o banco de dados já está condifurado a partir do arquivo **docker-compose**.

### Passo 1:
Crie um arquivo na raiz do projeto chamado `.env`, seguindo o exeplo do `.env.example`.

### Passo 2:
Execute o seguinte comando no seu terminal na pasta do projeto: (Criar banco de dados)
```bash
docker-compose up -d
```

### Passo 3:
Instale as dependencias do projeto:
```bash
yarn install
```

### Passo 4:
Executar as migrations:
```bash
yarn typeorm migration:run
```

### Passo 5:
Executar a aplicação:
```bash
yarn start:dev
```