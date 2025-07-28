# Familia OCR 事業計画書

株式会社ハウディ × TERACOM社のFamilia OCR事業計画書Webサイト

## 概要

AI OCRとLLM（大規模言語モデル）を融合した革新的な文書処理ソリューション「Familia OCR」の事業計画書をWebサイトとして実装しました。

## 機能

- 🌐 日本語・ベトナム語の多言語対応
- 📊 インタラクティブなグラフ表示
- 📱 レスポンシブデザイン
- 🖨️ 印刷対応
- ✨ スムーズなアニメーション

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Recharts（グラフ表示）
- next-intl（多言語対応）
- Lucide React（アイコン）

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

http://localhost:3000 でアプリケーションにアクセスできます。

## ビルド＆デプロイ

### ローカルビルド
```bash
# プロダクションビルド
npm run build

# ビルドしたアプリケーションの起動
npm start
```

### Vercelへのデプロイ

1. [Vercel](https://vercel.com)にサインイン
2. "New Project"をクリック
3. GitHubリポジトリをインポート
4. 自動的にNext.jsプロジェクトとして認識される
5. "Deploy"をクリック

環境変数の設定は不要です。

## ディレクトリ構造

```
/app
  /[locale]        # 多言語対応のルーティング
    /page.tsx      # メインページ
    /layout.tsx    # レイアウト
/components        # Reactコンポーネント
  /charts          # グラフコンポーネント
/locales          # 翻訳ファイル
  /ja.json        # 日本語
  /vi.json        # ベトナム語
/public           # 静的ファイル
```

## カスタマイズ

### 色の変更
`app/globals.css`の以下の変数を編集：
```css
:root {
  --primary: #50A69F;
  --secondary: #3D7F7A;
  --accent: #7BC4BF;
  --dark-accent: #2C5F5B;
}
```

### 翻訳の追加・編集
`locales/ja.json`または`locales/vi.json`を編集してください。

## ライセンス

株式会社ハウディの専有コンテンツです。