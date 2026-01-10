# 🔗 QuickLinks - Encurtador de Links com Analytics

O **QuickLinks** é uma ferramenta moderna desenvolvida para simplificar o compartilhamento de URLs longas, oferecendo ao usuário um painel de controle simples para acompanhar o engajamento através de cliques.

---

## 🚀 Entrega: Parte 1 (Fundação e MVP)

Nesta primeira fase, o foco foi estabelecer uma base técnica sólida e uma interface de usuário (UI) funcional seguindo padrões de mercado.

### 📋 Requisitos Implementados

* **Ambiente Configurado:** Projeto inicializado com **Vite** e **React**, utilizando Hooks para gerenciamento de estado e ciclo de vida.
* **Wireframes e UI:** Design minimalista e responsivo desenvolvido com **Tailwind CSS**, apresentando uma paleta Dark Mode (Slate) para melhor legibilidade.
* **Landing Page Funcional:** Interface principal intuitiva com cabeçalho dinâmico e campo de entrada (input) otimizado.
* **MVP Parcial:**
    * **Geração de Hash:** Algoritmo para criação de IDs únicos para os links.
    * **Analytics Base:** Estrutura de dados preparada para contagem de cliques.
    * **Persistência Local:** Sincronização automática com a **Web Storage API (LocalStorage)** para manter os dados mesmo após o fechamento do navegador.

---

## 🛠️ Tecnologias Utilizadas

* **React:** Biblioteca principal para construção da interface.
* **Tailwind CSS:** Framework de utilitários para estilização rápida e responsiva.
* **Vite:** Ferramenta de build para um desenvolvimento ágil.
* **JavaScript (ES6+):** Lógica de manipulação de arrays e persistência de dados.

---

## 📁 Estrutura do Projeto

```text
src/
├── App.jsx        # Lógica central (State, Effects e UI)
├── main.jsx       # Inicialização do React
└── index.css      # Configurações do Tailwind CSS
