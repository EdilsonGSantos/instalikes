# Instalikes

Instalikes é uma API desenvolvida em **Node.js** que permite criar, recuperar e atualizar posts com imagem, descrição e texto alternativo (alt). A descrição da imagem é gerada automaticamente usando a **IA da Google**. O projeto utiliza **MongoDB** como banco de dados para armazenar os posts, e o deploy é feito no **Google Cloud**.

## Funcionalidades

- **POST**: Criar um novo post com imagem, descrição e alt. A descrição é gerada automaticamente com a IA da Google.
- **GET**: Recuperar todos os posts existentes.
- **PUT**: Atualizar um post existente com nova imagem, descrição ou alt.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construção da API.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar os posts.
- **Google Cloud**: Serviço utilizado para deploy da aplicação.
- **Google Gemini AI**: Utilizado para gerar automaticamente a descrição das imagens.
