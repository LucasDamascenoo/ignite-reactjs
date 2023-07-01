# ignite-reactjs

## Fundamentos do React

- O que é o react?

é uma biblioteca baseada em javascript para criar interfaces(web/mobile) interativas.

- O que é são patterns de redenrização: ?

**SSR**: É o conceito de carregar as informações que o Browser (Usuario) solicita apenas quando o server processa toda a informação e todo orontend(html,css,js) e só depois de ter tudo carregado trás as infos/tela pro usuario.

**SPA**: Nos novos conceitos, quando o Browser(Usuario) solicitada algo, o servidor não é mais responsavel de carregar o Frontend(html,css,js), o servidor só retorna os dados solicitados (Json).

- Bundlers e Compilers

**Compilers** : são compiladores de codigos, são ferramentas que convertem nosso codigo ( meu navegador não "aceita" um funcionalidade do react) o compiler entra e converte o react para uma versão aceitavel para aquele navegador.

-[x] Babel (Mais conhecido)

**Bundlers**: São responsavel por "juntar" diversos arquivos de uma aplicação para um unico, fazendo com que os navegadores suportem

-[x] webpack (Mais conhecido)

Hoje os navegadores já suportam importações de arquivos js(e6 modules) .

**vite**: vite que roda nativamente o e6 modules e faz o compiler o que faz com que não precisamos mais de Compilers e Bundlers.

# Como criar uma aplicação React?

Vamos criar nossas aplicações react utilizando o vite.

## O que é o vite?

Vite cria um ambiente de desenvolvimento para aplicações web, seje ele react/vue/svelte já configurado (Boielerplate) sem precisar de muitas configuração. No nosso aprendizado vamos criar um ambiente react que anteriormente usavamos o Create React App(cra).

# Estrutura das pastas geradas

## main.jsx

Dentro do main.jsx vamos encontrar 3 importações por padrão.

- **import React from "react"**

  Responsavel por trazer todas as funcionalidades existente no react

- **import react from "react/cliente**

Responsavel por integração todo o core do react(funcionalidades) para o DOM.

- **import React from "./APP.jsx"**

Responsavel por trazer importar nossa função/componente

- **Função de redenrização**

```react:
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

Nessa função (já criada pelo proprio react) cria um elemento root ( nossa div que está no html) e redenriza ( mostra na tela) tudo que está sendo importado (no exemplo o componente APP) ou podemos incluir nosso proprio html.

## O que são componentes?

componentes é a "divisao" de partes do nossa aplicação web, onde cada parte é um componente separado.Podemos ter um componentes dentro de componente como por exemplo ( header > nav) onde o header é um componente e o nav é outro.

Componentes são funções que retornam HTML ( por isso o .jsx (HTMl + js)) todos os componentes precisam dessa extenção

## O que são as propriedades?

Propriedades: são "atributos" que damos aos nossos componentes para que cada um tenha ( aqueles diferentes) tenha sua propria caracteristica.

Com os componentes podemos reaproveitar HTML,estilos, funcionalidades e dando atributos individuais para cada componente (mesmo que se repita) fazendo essa diferenciação.

## Explicar exportação

## explicar o porque componentes precisam ser com H
