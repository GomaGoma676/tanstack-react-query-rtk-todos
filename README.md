## 1. Project setup : 
### 1-1. yarn install *インストールしていない場合
    npm install --global yarn
    yarn --version
### 1-2.  create-react-app
    npx create-react-app react-query-todos --template redux-typescript
### 1-3.  Tailwind CSS のインストール
### https://tailwindcss.com/docs/guides/create-react-app
1. 下記二つのコマンドの実行
~~~
yarn add -D tailwindcss postcss autoprefixer  
npx tailwindcss init -p
~~~
2. tailwind.config.jsファイルを開いて、contentの箇所を下記内容に書き換え
~~~
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
~~~
3. src/index.cssを下記3行で書き換え
~~~
@tailwind base;
@tailwind components;
@tailwind utilities;
~~~
### 1-4. @tanstack/react-query axios react-router-dom heroicons のインストール
    yarn add @tanstack/react-query @tanstack/react-query-devtools react-router-dom @types/react-router-dom axios @heroicons/react@1.0.6
### 1-5.  prettierの設定 : settingsでRequire Config + Format On Saveにチェック
    touch .prettierrc
~~~
{
    "singleQuote": true,
    "semi": false
}
~~~  
