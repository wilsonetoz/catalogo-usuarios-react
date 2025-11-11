# 🧑‍💻 Catálogo Avançado de Usuários

Aplicação web desenvolvida com **React** e **Vite**, que consome a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com) para listar usuários, exibir detalhes e posts associados.

---

## 🚀 Funcionalidades

- Listagem de usuários com **nome**, **e-mail** e **cidade**  
- Tela de **detalhes** com informações completas e posts  
- **Busca combinada** (nome, e-mail ou cidade)  
- **Filtro por cidade**  
- **Paginação** (5 usuários por página)  
- **Contagem de posts** por usuário  
- **Loading animado** durante o carregamento  
- **Persistência de filtros** no `localStorage`  
- Página **Sobre**, com informações do projeto  

---

## 🧱 Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/) *(opcional)*
- [Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API)

---

### 🔧 Pré-requisitos
- Node.js instalado (versão 18 ou superior)
- npm (vem junto com o Node)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
