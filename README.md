# Ignite Gym

Uma aplicação mobile para gerenciamento de treinos e exercícios de academia, desenvolvida com React Native e Expo.

## 📱 Demonstração

Veja abaixo uma demonstração da aplicação em funcionamento:

[Demo]

## 📱 Sobre o projeto

Ignite Gym é uma aplicação que permite gerenciar seus treinos e acompanhar seus exercícios na academia. Com esta aplicação, você pode:

- Fazer login e cadastro na plataforma
- Visualizar exercícios por grupo muscular
- Ver detalhes e instruções de cada exercício
- Acompanhar seu histórico de treinos
- Gerenciar seu perfil de usuário com upload de foto

## 🚀 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [GlueStack UI](https://gluestack.io/)
- [NativeWind (TailwindCSS)](https://nativewind.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [Axios](https://axios-http.com/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/en/) (recomendado v18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- Emulador Android/iOS ou dispositivo físico

## 🔧 Instalação e execução

1. Clone o repositório

```bash
git clone https://github.com/felipe-jm/ignite-gym.git
```

2. Acesse a pasta do projeto

```bash
cd ignite-gym
```

3. Instale as dependências

```bash
npm install
# ou
yarn install
```

4. Execute o projeto

```bash
npx expo
# ou
npm start
```

5. Após iniciar, você pode:
   - Pressionar `a` para abrir no emulador Android
   - Pressionar `i` para abrir no emulador iOS
   - Escanear o QR Code com o aplicativo Expo Go no seu dispositivo físico

## 📱 Executando em Dispositivos Específicos

Para executar diretamente em um dispositivo específico:

```bash
# Android
npm run android
# ou
yarn android

# iOS
npm run ios
# ou
yarn ios

# Web
npm run web
# ou
yarn web
```

## 📚 Estrutura do Projeto

```
ignite-gym/
├── screens/               # Telas principais da aplicação
│   ├── home.tsx           # Tela inicial com exercícios
│   ├── exercise.tsx       # Detalhes do exercício
│   ├── history.tsx        # Histórico de treinos
│   ├── profile.tsx        # Perfil do usuário
│   ├── sign-in.tsx        # Tela de login
│   └── sign-up.tsx        # Tela de cadastro
├── components/            # Componentes reutilizáveis
├── contexts/              # Contextos React (ex: autenticação)
├── routes/                # Configuração de navegação
├── services/              # Serviços de API
├── hooks/                 # Hooks customizados
├── utils/                 # Funções utilitárias
├── storage/               # Lógica de armazenamento local
├── assets/                # Imagens e arquivos estáticos
├── dtos/                  # Data Transfer Objects
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido durante o MBA de desenvolvimento Full Stack da Rocketseat
