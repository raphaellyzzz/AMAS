# 🟣 AMAS - Projeto Integrador 3

## 📌 Descrição

**AMAS** é um projeto web desenvolvido com objetivo de melhorar antiga implementação feita no site. Feito com base nos requisitos da cliente em sala, orientada pelo professor Ricson

---

## 📁 Estrutura do Projeto

```txt
.vscode/
└── settings.json                 # Configurações do VS Code

arquivos/
├── javaBlogs.js                 # Scripts de funcionalidades de blog
├── script.js                    # Script principal do site
├── style.css                    # Estilo principal
├── imagens/                     # Imagens utilizadas no site
└── arquivos/
    ├── datasComemorativas.html # Página com datas comemorativas
    ├── blog.html                # Página de blog
    ├── contatos.html            # Página de formulário
    ├── membros.html             # Página com informações de membros
    ├── parceiros.html           # Página com informações de parceiros
    ├── script.js                # Script específico da subpasta
    ├── scriptForms.js           # Scripts para formulários
    ├── styleblog.css            # Estilo da página de blog
    ├── styledatas.css           # Estilo da página de datas comemorativas

```
## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**

## 🚀 Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/raphaellyzzz/AMAS

2. Acesse a pasta e clique em index.html

## 💡 Funcionalidades

- **Página do Blog**
  - Exibe posts e artigos sobre temas relacionados à AMAS, proporcionando uma leitura simples e limpa.
  - Conta com scripts JavaScript para adicionar interatividade, com mudança dinâmica de conteúdo conforme o usuário interage.

- **Datas Comemorativas**
  - Apresenta datas comemorativas importantes para a AMAS e eventos relacionados.
  - Cada data é destacada com estilos específicos, tornando a navegação mais visualmente atraente e funcional.

- **Página de Contatos**
  - Oferece um formulário de contato, permitindo que os visitantes da página enviem mensagens diretamente para a AMAS.
  - A validação dos campos do formulário garante que o e-mail seja inserido corretamente, com feedback imediato para o usuário. Utilizando o emailJS

- **Página de Membros**
  - Exibe informações sobre os membros da AMAS, incluindo nome, cargo e, se necessário, uma foto de perfil.
  - A lista de membros é facilmente atualizável, podendo ser expandida conforme novos membros entram para a associação.

- **Página de Parceiros**
  - Mostra os parceiros da AMAS com informações básicas, como nome e descrição.
  - Interação com o usuário assim que passa o mouse por algum parceiro.

- **Interatividade com JavaScript e emailJs**
  - O JavaScript foi utilizado para adicionar funcionalidades interativas nas páginas, como animações, validações de formulários e manipulação dinâmica de conteúdos.
  - Alguns exemplos incluem a alteração de conteúdo na página sem recarregar o navegador e animações de transição suaves.
  - Foi configurado também o uso do EmailJS para se livrar de uma api antiga e desfuncional que o projeto tinha, fazendo assim não ter necessidade de configurar servidor node.js, todo backend é feito pelo emailJS e apenas precisamos configurar o template. Funcionalidade pode ser vista melhor na página: `scriptForms.js`
