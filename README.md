<h1>CRUD em Node.js</h1>

<p>Este repositório contém o código-fonte do CRUD desenvolvido durante uma aula de Node.js. O CRUD permite criar, ler, atualizar e excluir registros em um banco de dados.</p>

<h2>Instruções de Uso</h2>

<ol>
    <li>Clone este repositório em sua máquina:</li>
    <code>git clone https://github.com/Gabpnavarro/CRUD_Node.js.git</code>
    <li>Acesse o diretório do projeto:</li>
    <code>cd CRUD_Nodejs</code>
    <li>Instale as dependências necessárias executando o seguinte comando:</li>
    <code>npm install</code>
    <li>Certifique-se de que o pacote <code>nodemon</code> esteja instalado globalmente. Caso contrário, instale-o com o seguinte comando:</li>
    <code>npm install -g nodemon</code>
    <li>Inicie o servidor de desenvolvimento com o seguinte comando:</li>
    <code>npm run dev</code>
    <p>Isso iniciará o servidor usando o <code>nodemon</code>, que irá monitorar as alterações no código e reiniciar automaticamente o servidor sempre que um arquivo for modificado e salvo.</p>
    <li>Acesse o projeto em seu postman no seguinte endereço:</li>
    <code>http://localhost:3000</code>
</ol>

<h2>Observações</h2>

<ul>
    <li>Se deseja fazer do zero seu projeto de CRUD utilize o comando:</li>
    <code>npm init -y</code>
    <p>Siga a partir do terceiro comando, leia todas as obervações e por fim use de paralelo meu projeto.</p>
    <li>Este projeto utiliza o framework Express, que já está incluído no pacote <code>node.module</code>.</li>
    <li>Certifique-se de que seu arquivo <code>package.json</code> contenha a seguinte linha:</li>
    <code>"type": "module"</code>
    <p>Isso permite a utilização de módulos ES no projeto.</p>
    <li>Certifique-se de que seu arquivo <code>package.json</code> contenha a seguinte linha:</li>
    <code>"scripts:" {"dev": "nodemon server.js"}"</code>
    <p>Isso permite que seu código atualize após suas alterações.</p>
    <li>Se você deseja apenas executar o arquivo em sua máquina, você pode usar esses dois comandos:</li>
      <ol>
        <li><code>npm install</code></li>
        <li><code>npm run dev</code></li>
      </ol>
</ul>


