# Deploy para Railway

Siga estas instruções para realizar o deploy da aplicação na Railway:

## 1. Crie uma conta ou faça login na Railway

Acesse [Railway.app](https://railway.app/) e crie uma conta ou faça login.

## 2. Crie um novo projeto

1. Clique em "New Project"
2. Selecione "Deploy from GitHub repo"
3. Conecte sua conta GitHub e selecione o repositório do projeto

## 3. Configure as variáveis de ambiente

Adicione as seguintes variáveis de ambiente no painel da Railway:

```
NODE_ENV=production
```

Adicione também quaisquer outras variáveis listadas em `.env.example`.

## 4. Configure o domínio (opcional)

1. Vá para a seção "Settings" do seu projeto
2. Configure um domínio personalizado ou use o fornecido pela Railway

## 5. Deploy automático

O deploy será realizado automaticamente a partir do seu repositório GitHub quando você enviar alterações para a branch principal.

## Notas importantes

- A Railway usa o arquivo `railway.json` para configurações de deploy
- O comando de início é definido no `Procfile` e no `railway.json`
- Certifique-se que todas as variáveis de ambiente necessárias estão configuradas

## Comandos úteis para desenvolvimento local

```bash
# Iniciar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar em produção
npm run start
```