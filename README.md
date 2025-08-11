# 🐾 Hotel Pet — Backend

## 📋 Sobre o projeto  
O **backend** do Hotel Pet é responsável por toda a lógica de negócios e integração com o banco de dados.  
Ele oferece endpoints para:  
- Autenticação e autorização de usuários (JWT)  
- Cadastro e gerenciamento de tutores  
- Controle de vendas e emissão de notas fiscais  
- Geração de relatórios administrativos  

A API foi desenvolvida em **Node.js** seguindo o padrão **MVC** (Model-View-Controller), com separação clara de responsabilidades e aplicação de middlewares personalizados.

---

## 🚀 Tecnologias Utilizadas  
- **Node.js**  
- **Express.js**  
- **JWT** para autenticação  
- **Middlewares** para segurança e logging  
- **Arquitetura MVC**  
- *(Adicionar o banco de dados usado — ex.: MongoDB, MySQL)*

---

## 📂 Estrutura de Pastas  

```bash
src
├── controllers/               # Controladores da aplicação
│   ├── authController.js
│   ├── relatorioController.js
│   ├── tutorController.js
│   ├── vendasController.js
├── middleware/                 # Middlewares personalizados
│   ├── authenticate.js
│   ├── logger.js
├── models/                     # Modelos de dados
│   ├── tutorModel.js
│   ├── userModel.js
├── routes/                     # Rotas da aplicação
│   ├── authRoutes.js
│   ├── relatorioRoutes.js
│   ├── tutorRoutes.js
│   ├── vendasRoutes.js
├── utils/                      # Funções auxiliares
│   ├── gerarNotaFiscal.js
├── server.js                   # Arquivo principal do backend
````

---
1️⃣ Clonar o repositório


````
git clone https://github.com/seuusuario/hotel-pet-backend.git
````

---
2️⃣ Entrar na pasta do backend

````
cd backend
````

---
3️⃣ Instalar as dependências
````
npm install
````
---
4️⃣ Configurar variáveis de ambiente
Crie um arquivo .env na raiz com as seguintes variáveis:
````
PORT=5000
JWT_SECRET=sua_chave_secreta
DB_URI=sua_string_de_conexao
````

---
5️⃣ Iniciar o servidor
````
npm start

````

---
📌 Rotas Principais
````
| Método | Rota             | Descrição             |
| ------ | ---------------- | --------------------- |
| POST   | `/auth/login`    | Login do usuário      |
| POST   | `/auth/register` | Cadastro de usuário   |
| GET    | `/tutores`       | Lista de tutores      |
| POST   | `/tutores`       | Cadastrar novo tutor  |
| GET    | `/vendas`        | Lista de vendas       |
| POST   | `/vendas`        | Registrar venda       |
| GET    | `/relatorios`    | Geração de relatórios |


