# tsconfog-module-bundlesize-compare

`tsconfig.json`の`module`オプションを`commonjs`にするか`esnext`にするかで最終的なバンドルサイズにどれくらい差が出るかを確認する。

## 確認方法

src ディレクトリのコードがバンドル/トランスパイルされ、dist ディレクトリにアウトプットされる。

outputディレクトリはリポジトリをクローンしなくてもGitHubから結果を確認するためのもの。

```tree
dist
├── main.commonjs.js // "module": "commonjs" でバンドルした結果
├── main.esm.js // "module": "esnext" でバンドルした結果
├── tscommonjs // "module": "commonjs" でトランスパイルした結果
│   ├── index.js
│   └── messages.js
└── tsesm // "module": "esnext" でトランスパイルした結果
    ├── index.js
    └── messages.js
```

### Webpack のバンドル / TypeScript のトランスパイル両方行う

```shell
$ npm run all
```

### Webpack のバンドルのみ行う

```shell
$ npm run bundle
```

### TypeScript のトランスパイルのみ行う

```shell
$ npm run ts
```
