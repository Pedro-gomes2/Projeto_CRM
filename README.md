
<div style="display: flex; align-items: center; margin: 0; padding: 0;"><h1 style="margin: 0; padding: 0;">ConnectElas</h1>
  <img src="https://ik.imagekit.io/majulial/CRM/Gemini_Generated_Image_sxhu1nsxhu1nsxhu%20(1).png"
       width="120"
       style="margin: 0; padding: 0;" /></div>



O **ConnectElas** é uma plataforma de empregos desenvolvida para pessoas que estão em busca da sua primeira oportunidade na área da tecnologia tendo como público alvo mulheres 30+. A plataforma utiliza um CRM para gerenciar candidaturas e vagas, organizando todo o fluxo de forma automatizada. Ele permite que recrutadores publiquem vagas e que candidatas acompanhem suas candidaturas, garantindo um processo ágil, eficiente e personalizado.

---

## 📋 Sobre o Projeto



<div align="center">
	<img src="https://ik.imagekit.io/majulial/CRM/logo.png" title="source: imgur.c" width="80%"/>
</div>


O projeto foi desenvolvido como parte do **Desafio 03 - Projeto Integrador** para a **Generation Brasil**. O objetivo principal é realocar mulheres que nunca tiveram oportunidade ou que estão em transição de carreira para a tecnologia, aumentando a porcentagem de mulheres nesse mercado. Atualmente, as mulheres representam cerca de 25% a 30% da força de trabalho no setor de tecnologia global, e a plataforma busca impulsionar essa participação.

### Principais Objetivos:
* Auxiliar na inclusão de mulheres 30+ no mercado de tecnologia.
* Aumentar a presença feminina, incentivando a equidade no setor.
* Utilizar otimização de tempo para facilitar a busca e a inserção no mercado.

---

## 🛠️ Tecnologias Utilizadas

A stack tecnológica do projeto foca em robustez e escalabilidade para o desenvolvimento backend:

| Item | Tecnologia |
| :--- | :--- |
| **Linguagem** | TypeScript |
| **Framework** | Nest.js |
| **ORM** | TypeORM |
| **Banco de Dados** | MySQL (db_crmproject) |
| **Servidor** | Node.js               |

---

## 🗄️ Estrutura de Dados

O banco de dados foi estruturado para gerenciar o fluxo de candidaturas e vagas de forma eficiente, garantindo a organização das informações e o acompanhamento de cada etapa do processo seletivo.



### Tabelas Principais:

* **tb_usuario:** Gerencia informações de cadastro (nome, email, senha, foto) e controle de data de criação da conta e data de nascimento.

* **tb_oportunidades:** Armazena as vagas de emprego, com detalhes sobre a empresa, área, remuneração e requisitos, facilitando a busca de oportunidades.

* **tb_candidata:** Registra as candidatas, com seus dados pessoais e profissionais, permitindo que acompanhem e se candidatem às vagas disponíveis.Contém o tipo e a descrição da categoria do produto.

  <div align="center">
  	<img src="https://ik.imagekit.io/majulial/CRM/Gemini_Generated_Image_ck21jdck21jdck21.png" title="source: imgur.com" width="100%"/>
  </div>

---



## ⚙️ Arquitetura do Projeto

Estrutura organizada para facilitar **manutenção, escalabilidade e leitura técnica**:

```text
📦 ConnectElas
 ┣ 📂 src
 ┃ ┣ 📂 auth                # Módulo de autenticação e segurança.
 ┃ ┃ ┣ 📂 bcrypt             # Funções de hash de senhas.
 ┃ ┃ ┣ 📂 constants          # Constantes de configuração de auth.
 ┃ ┃ ┣ 📂 controllers        # Controladores de rotas de login e autenticação.
 ┃ ┃ ┣ 📂 entities           # Entidade de dados de login.
 ┃ ┃ ┣ 📂 guard              # Guardas para proteger rotas (ex: JWT).
 ┃ ┃ ┣ 📂 services           # Serviços que lidam com lógica de autenticação.
 ┃ ┃ ┗ 📂 strategy           # Estratégias de autenticação (JWT, local).
 ┃ ┣ 📂 candidata            # Módulo de gerenciamento de candidatas.
 ┃ ┣ 📂 oportunidade         # Módulo de gerenciamento de oportunidades de trabalho.
 ┃ ┣ 📂 usuario              # Módulo de gerenciamento dos usuários da plataforma.
 ┃ ┣ 📜 app.module.ts        # Arquivo principal que configura os módulos do aplicativo.
 ┃ ┣ 📜 app.service.ts       # Contém lógica geral da aplicação.
 ┃ ┣ 📜 app.controller.ts    # Controlador de rotas principais da aplicação.
 ┃ ┗ 📜 main.ts              # Inicializa e executa a aplicação NestJS.
 ┣ 📂 test                   # Contém testes automatizados (end-to-end).
 ┣ 📜 package-lock.json      # Controle de versões exatas das dependências.
 ┣ 📜 eslint.config.mjs      # Configuração de linting do código.
 ┣ 📜 nest-cli.json          # Configurações específicas do NestJS.
 ┣ 📜 README.md              # Documentação principal do projeto.
 ┗ 📜 tsconfig.json          # Configuração de compilação do TypeScript.
```





## 🚀 Implementações Futuras

O roteiro de evolução do ConnectElas prevê as seguintes funcionalidades:

* **Integração de Plataformas:** Conectar o sistema a sites de vagas externas.
* **Notificações:** Alertar candidatas sobre novas vagas ou status de candidaturas em tempo real.
* **Dashboard:** Apresentar métricas de inclusão e contratações.
* **Mentoria:** Oferecer um espaço para networking ou mentorias entre candidatas e recrutadores.
* **Capacitação:** Criar uma área com cursos ou treinamentos internos.
* **Recomendação:** Implementar um sistema inteligente de recomendação de vagas.

---

## 👥 Equipe (Grupo 05)

* Ana Beatriz Carvalho
* Daniella Camillo
* João Pedro
* Júlia Lima
* Larissa Mendonça
* Lucas Ribeiro
* Matheus Tiago Canellas