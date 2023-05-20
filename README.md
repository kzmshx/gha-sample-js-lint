# github-action-sample-js

JavaScriptプロジェクトで husky, lint-staged, GitHub Action を活用して Lint 環境を整備するサンプル。

## ESLint/Prettier の構成

以下の設定で `npx eslint --init` を実行し standard スタイルを採用。

```shell
You can also run this command directly using 'npm init @eslint/config'.
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard
✔ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-standard@latest
The config that you've selected requires the following dependencies:

eslint-config-standard@latest eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
Installing eslint-config-standard@latest, eslint@^8.0.1, eslint-plugin-import@^2.25.2, eslint-plugin-n@^15.0.0, eslint-plugin-promise@^6.0.0

added 1 package, removed 2 packages, changed 2 packages, and audited 513 packages in 1s

124 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

prettier によるフォーマットを有効化するため `eslint-config-prettier` のみ追加。

```shell
npm i -D eslint-config-prettier
```

## Yaml のフォーマット

EditorConfig を使う。現状 `lint-staged` や GitHub Action でのフォーマットの矯正は行っていない。
