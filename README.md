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

## Como criar uma aplicação React?

- O que são componentes?

componentes é a "divisao" de partes do nossa aplicação web, onde cada parte é um componente separado.Podemos ter um componentes dentro de componente como por exemplo ( header > nav) onde o header é um componente e o nav é outro.
