# XP-APP
Desenvovimento de uma aplicação Fron-end para o processo seletivo da XPInc, na Trybe - Turma XP.

Desde o planejamento, o projeto foi todo pensado na experiência do cliente. 

Inicialmente, eu li e entendi bem os requisitos propostos pela XP. Logo depois, eu esbocei a aplicação no excalidraw para depois passar um protótipo e fluxo de informações para o figma.

Entendidos os requisitos e com o esboço da aplicação em mãos, eu pesquisei sobre as melhores ferramentas de desenvolvimento e gestão de dados do projeto. Nessa linha, eu desenhei um fluxo de informações com base no estado global da aplicação e estados de cada página ou componente.

Após decidir quais ferramentas eu iria utilizar, dei início à configuração inicial da aplicação:
* Criei o app com npx create-react-app
* Configurei o EsLint e Preetier
* Criei o estado global, actions e reducers
* Desenvolvi as páginas e componentes na seguinte ordem: Login, Account, Investments (onde são renderizadas os componentes de ações do usuário e ações disponíveis no mercado) e, por fim, a página de Trade.
* Refatoração ao longo de todo o desenvolvimento da aplicação
* Intervalos para estilização das páginas e componentes
* Inserção de alertas para melhor experiência do usuário
* Configurar localStorage e opção de logout do usuário
* Ajustes finos

Foi um processo de muitas descobertas e aprendizados! Durante o desenvolvimento tive a certeza: quero ser um desenvolvedor Front-end, de preferência na XPInc - empresa a qual ganhou minha admiração ao longo da jornada de estudos na Trybe :)

Fiquem à vontade. Espero que gostem!

## A aplicação está on-line no link:
https://xp-app.netlify.app/

## Caso você queira rodar o projeto na sua maquina, siga o passo a passo:

### Clone o repositório na sua máquina (SSH)
```javascript
git clone git@github.com:AmorimTorres/xp-app.git
```

### Acesse o diretorio
```javascript
cd xp-app
```
  
### Instale as dependências
```javascript
$ npm install
```

### Inicie a aplicação
```javascript
$ npm start
```

### A aplicação, por padrão, roda na porta:
http://localhost:3000/

## Imagens do projeto:
<img src="https://user-images.githubusercontent.com/92737274/180508254-ae79300c-93da-4ac0-b7bb-05c5dfb5d499.png" width="300" height="300"> <img src="https://user-images.githubusercontent.com/92737274/180510834-3d5924c4-f52f-433e-a1c3-06155a76bea7.png" width="400" height="300">

## Tecnologias utilizadas:
<table>
  <tr> 
    <td> JavaScript </td>
    <td> React JS  </td>
    <td> Styled Components </td>
    <td> Redux Toolkit </td>
    <td> React-hot-toast </td>
  </tr>
  <tr> 
    <td> ES13 </td>
    <td> 18.2.0 </td>
    <td> 5.3.5 </td>
    <td> 1.8.3 </td>
    <td> 2.3.0 </td>
  </tr>
</table> 
  
## Autor
* André Amorim Torres
* E-mail: amorimtorresandre@gmail.com
* Linkedin: https://www.linkedin.com/in/andreamorimtorres/
