# GitHub API チャレンジ

## ゴール
このチャレンジは Node.js を使った GitHub API へのアクセス方法を学ぶ事を目標としています。

## 必要項目
- Node.js ([https://nodejs.org/](https://nodejs.org/))
- GitHub トークン ([https://github.com/settings/tokens](https://github.com/settings/tokens))
- ローカル環境での受験が推奨です。

### 環境変数の設定

このチャレンジをローカル環境で受験する際には GitHub で生成したトークンを環境変数に設定する必要があります。環境変数名は `GITHUB_TOKEN` で設定してください。

もし環境変数の設定に不慣れな場合は `specifications` フォルダの中に `env.json` というファイルを設置することでその中に設定している情報を読み込ませる事も可能です。下の例のように`GITHUB_TOKEN` をキーとして、生成したトークンを設定してください。
```json
{
  "GITHUB_TOKEN": "生成した GitHub トークンを設定"
}
```

## ステップ
### ユーザ情報の取得
GitHub はユーザ情報を取得するための API エンドポイントを提供しています。
指定したユーザに関する情報を取得するプログラムを実装してください。

ユーザ情報に関するエンドポイントの詳細は [このページ](https://developer.github.com/v3/users/#get-a-single-user) を参考にしてください。

### リポジトリ情報の取得
ユーザは全てのユーザの公開リポジトリ情報を取得する事が可能です。
指定したユーザの公開リポジトリ一覧を取得するプログラムを実装してください。
また、一覧取得 API にオプションを渡せるように引数を取るようにしてください。

ユーザに紐づく情報に関するエンドポイントの詳細については [このページ](https://developer.github.com/v3/users/#get-a-single-user) を参考にしてください。

### Issue の作成と編集
ユーザは全ての公開リポジトリに関して Issue を作成する事ができます。また、自身が作った Issue もしくはコラボレーター設定によって権限を付与されたリポジトリの Issue は編集する事も可能です。
Issue を作成するプログラムと Issue を編集するプログラムの2つを実装してください。

Issue に関するエンドポイントの詳細は [このページ](https://developer.github.com/v3/issues/#create-an-issue)を参考にしてください。
