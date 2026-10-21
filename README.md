# ZUTIC — Site Corporativo

Website institucional da ZUTIC, construído com Next.js App Router, React e Tailwind CSS.

## Estrutura da aplicação

- `app/page.tsx`: entrada da rota inicial.
- `app/_components/`: composição visual da página inicial.
- `app/_hooks/`: estado e interações reutilizáveis, como navegação e formulário de contacto.
- `app/layout.tsx` e `app/globals.css`: layout raiz, metadados e estilos globais.

As pastas privadas `_components` e `_hooks` organizam o código sem criar segmentos ou rotas públicas.

## Desenvolvimento

```bash
npm run dev
```

Verificações:

```bash
npm run lint
npm run build
```
