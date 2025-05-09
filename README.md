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

   OU

1. Clique no link para ser direcionado ao site: <a href="https://raphaellyzzz.github.io/AMAS/" target="_blank">https://raphaellyzzz.github.io/AMAS/</a>

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

 ## 🌐 Funcionamento do EmailJS em integração com o "Entre em contato"
- Quando o usuário preenche o formulário, ele envia uma mensagem para o email lgbtamas@gmail.com através do EmailJS configurado para enviar com o seguinte template:
![image](https://github.com/user-attachments/assets/7acc2893-ebca-4abb-9167-119cd2a28cc0)

-> Código do template para uso, caso tenha interesse em usar o template
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <title>Nova Mensagem do Site</title>
</head>
<body style="font-family: 'Arial', sans-serif; color: #333; background-color: #f8f8f8; padding: 20px;">
    <div style="background-color: #fff; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); padding: 25px;">
        <h2 style="color: #ff69b4; /* Rosa choque */ margin-top: 0;">Nova Mensagem do Site!</h2>
        <p style="font-size: 16px; line-height: 1.5;">Olá,</p>
        <p style="font-size: 16px; line-height: 1.5;">Você recebeu uma nova mensagem através do formulário de contato do site do AMAS LGBT:</p>
        <ul style="list-style: none; padding-left: 0;">
            <li style="margin-bottom: 8px;"><strong style="color: #555;">Nome:</strong> {{ nome }}</li>
            <li style="margin-bottom: 8px;"><strong style="color: #555;">E-mail:</strong> {{ email }}</li>
            <li style="margin-bottom: 8px;"><strong style="color: #555;">Telefone:</strong> {{ telefone }}</li>
            <li style="margin-bottom: 8px;"><strong style="color: #555;">Cidade:</strong> {{ cidade }}</li>
        </ul>
        <p style="font-size: 16px; line-height: 1.5;"><strong>Mensagem:</strong></p>
        <div style="background-color: #f0f0f0; border-radius: 5px; padding: 15px; margin-bottom: 15px;">
            <p style="font-size: 16px; line-height: 1.5;">{{ mensagem }}</p>
        </div>
        <p style="font-size: 14px; color: #777;">Atenciosamente,<br>AMAS LGBT</p>
    </div>
</body>
</html>

```

- Com isso, após o usuário enviar a mensagem ele recebe uma mensagem de confirmação por alguns segundos, logo abaixo da página:
![image](https://github.com/user-attachments/assets/3ac277ff-5fd0-46b4-b459-492d9c59db9a)

- Se abrirmos o EmailJS podemos ver na aba "Email History" o histórico de todos os emails enviados com as seguintes informações de quem enviou o email:
### Informações da Requisição

- **Histórico ID**
- **Provider ID** 
- **Service ID** 
- **Template ID** 
- **Tempo de envio** 
- **Atualizado em**

### Dados do Usuário

- **Nome** 
- **Email**  
- **Telefone** 
- **Cidade**   
- **Mensagem** 

### Informações Técnicas do Navegador

- **Sistema Operacional**  
- **Plataforma**  
- **Navegador**   
- **Versão** 
- **País**
- **Endereço IP (hash)**
- **Referência de origem**

<br>

- Essas são as informações que o usuário vai oferecer ao entrar em contato com a página da AMAS. No email vai aparecer para a AMAS dessa maneira:
![image](https://github.com/user-attachments/assets/5c1d3fab-96f1-4259-92f2-7971c27b832c)

