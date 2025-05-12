# Deploy para Railway

Siga estas instruções passo a passo para realizar o deploy da aplicação Agentes de Conversão na Railway:

## 1. Crie uma conta ou faça login na Railway

Acesse [Railway.app](https://railway.app/) e crie uma conta ou faça login. Railway suporta autenticação via GitHub, Google ou email.

## 2. Crie um novo projeto

1. No dashboard da Railway, clique em "New Project"
2. Selecione "Deploy from GitHub repo"
3. Conecte sua conta GitHub se ainda não estiver conectada
4. Procure e selecione o repositório `lucasnobrega7/agentesdeconversao-t3`
5. Clique em "Deploy Now"

## 3. Configure as variáveis de ambiente

No painel do projeto na Railway, navegue até a aba "Variables" e adicione as seguintes variáveis:

```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://agentesdeconversao-t3.up.railway.app
```

Observe que o URL pode variar dependendo do domínio gerado pela Railway.

## 4. Monitoramento do Deploy

1. Na aba "Deployments", você pode monitorar o progresso do deploy
2. Railway detectará automaticamente que é um projeto Next.js e configurará o build corretamente
3. O primeiro deploy pode levar alguns minutos para ser concluído

## 5. Configure o domínio (opcional)

1. Vá para a seção "Settings" do seu projeto
2. Role até a seção "Domains"
3. Você pode usar o domínio gerado pela Railway (algo como `agentesdeconversao-t3.up.railway.app`) ou configurar um domínio personalizado

## 6. Deploy automático

A Railway está configurada para realizar deploy automático sempre que houver novos commits na branch principal do GitHub. Isso significa que:

1. Qualquer push para a branch `main` iniciará um novo deploy
2. Você pode ver o histórico de deploys na aba "Deployments"
3. É possível reverter para uma versão anterior se necessário

## Configurações específicas do projeto

Este projeto já está configurado para Railway com:

- `railway.json` - Define as configurações de build e deploy
- `Procfile` - Especifica o comando para iniciar a aplicação
- Configurações do Tailwind CSS para garantir uma interface responsiva

## Comandos úteis para desenvolvimento local

```bash
# Instalar dependências
npm install

# Iniciar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar em produção
npm run start

# Verificar tipos TypeScript
npm run typecheck
```

## Solução de problemas

Se você encontrar problemas durante o deploy:

1. Verifique os logs na aba "Deployments"
2. Confirme que todas as variáveis de ambiente estão corretamente configuradas
3. Verifique se o arquivo `railway.json` está presente no repositório
4. Certifique-se de que o Node.js está na versão 18+ na Railway