# Gutour Frontend

Aplicação Next.js do projeto Gutour - plataforma de descoberta e planejamento de viagens.

## 🚀 Tecnologias

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis e personalizáveis
- **Lucide React** - Biblioteca de ícones
- **React Hook Form** - Gerenciamento de formulários
- **Vercel Analytics** - Analytics

## 📋 Pré-requisitos

- Node.js 18 ou superior
- npm, yarn ou pnpm

## 🔧 Instalação

Instale as dependências:

```bash
npm install
```

## 🏃 Como Rodar

### Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

O servidor recarrega automaticamente quando você edita os arquivos.

### Produção

Para criar e executar o build de produção:

```bash
npm run build
npm start
```

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento na porta 3000 |
| `npm run build` | Cria build otimizado para produção |
| `npm start` | Inicia servidor de produção (após build) |
| `npm run lint` | Executa ESLint para verificar o código |

## 📁 Estrutura

```
src/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
└── components/            # Componentes React
    ├── hero.tsx           # Seção hero da landing page
    ├── how-it-works.tsx   # Seção "como funciona"
    ├── trips.tsx          # Listagem de viagens
    ├── trip-card.tsx      # Card de viagem individual
    ├── cta.tsx            # Call to action
    ├── header.tsx         # Cabeçalho
    └── footer.tsx         # Rodapé
```

## 🎨 Desenvolvimento

- Os componentes estão em `src/components/`
- As páginas utilizam o App Router em `src/app/`
- Estilos globais em `src/app/globals.css`
- Edite `src/app/page.tsx` para modificar a página inicial

## 🔍 Lint

Para verificar problemas no código:

```bash
npm run lint
```
