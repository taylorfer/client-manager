## O que é

Sistema de gerenciamento de clientes desenvolvido em Node.js puro (sem framework por enquanto). O objetivo é construir uma aplicação back-end completa, do zero, aplicando boas práticas de arquitetura, orientação a objetos e organização de código.

## Para que serve

Cadastrar clientes (Pessoa Física e Pessoa Jurídica)
Listar, buscar, atualizar e remover clientes (operações CRUD)
Persistir dados em arquivo JSON (sem banco de dados por enquanto)
Futuramente: expor essas operações via API REST

## Sobre o projeto

Aplicação back-end para cadastro e gerenciamento de clientes,
com suporte a Pessoa Física e Pessoa Jurídica.

## Tecnologias

- Node.js
- JavaScript (CommonJS)
- CommonJS (require/module.exports)
- Git
- JSON

## Status

🚧 Ordem de desenvolvimento

✅ Estrutura de pastas

✅ Endereco.js com validação de CEP

⬜ Cliente.js — classe base

⬜ PessoaFisica.js — herda de Cliente

⬜ PessoaJuridica.js — herda de Cliente

⬜ fileManager.js — leitura e escrita em JSON

⬜ clienteService.js — operações CRUD

⬜ index.js — ponto de entrada, testa o sistema

⬜ Transformar em API REST (próxima fase)
