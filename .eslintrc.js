module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'eslint linebreak-style': '["error", "windows"]',
  },
};

/*
 Para fazer a instalação do Eslint, você deve dar o comando npx eslint --init
 Responda às configurações iniciais e não se esqueça de ativar o Eslint no
 Editor de texto usando a Extenção para mostrar os erros

 É possível que na ativação dê algum erro por conta da versão isntalada, mas o
 próprio sistema te dá no terminal uma sugestão de qual versão colcoar no json.
 Mude a versão pra a recomendada, dê um npm install e rode o sistema dnv
*/
