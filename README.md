## 1. Project setup : 
### 1-1. yarn install *インストールしていない場合
    npm install --global yarn
    yarn --version
### 1-2.  create-react-app
    npx create-react-app . --template redux-typescript
### 1-3.  Tailwind CSS のインストール
### https://tailwindcss.com/docs/guides/create-react-app
### 1-4. @tanstack/react-query axios react-router-dom heroicons のインストール
    yarn add @tanstack/react-query @tanstack/react-query-devtools react-router-dom @types/react-router-dom axios @heroicons/react
### 1-5.  prettierの設定 : settingsでRequire Config + Format On Saveにチェック
    touch .prettierrc
~~~
{
    "singleQuote": true,
    "semi": false
}
~~~  