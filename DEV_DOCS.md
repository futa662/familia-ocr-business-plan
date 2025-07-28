# 開発ドキュメント - Familia OCR Business Plan

## 現在の問題点と解決方法

### 問題1: next-intl のバージョン互換性
現在のnext-intl v4.3.4は、Next.js 15.4.4との互換性に問題があります。

### 解決策（実装予定）
```bash
# next-intlを最新版にアップデート
npm install next-intl@latest
```

### 問題2: 型定義エラー
`getRequestConfig`の戻り値に`locale`プロパティが必要です。

### 一時的な回避策
シンプルな多言語対応を実装：

1. `middleware.ts`を簡略化
2. 手動でロケールを処理
3. 言語切り替えボタンをシンプルに実装

## 現在の構成

```
/app
  /[locale]
    /layout.tsx - ロケールパラメータの処理
    /page.tsx   - メインページ
/components         - 各セクションコンポーネント
/locales           
  /ja.json         - 日本語翻訳
  /vi.json         - ベトナム語翻訳
```

## 次の開発者への引き継ぎ

1. **ビルドエラーの修正**
   - next-intlを最新版にアップデート
   - 型定義を修正
   - middleware.tsを適切に設定

2. **テスト手順**
   ```bash
   npm run build  # ビルドテスト
   npm run dev    # 開発サーバー起動
   ```

3. **デプロイ準備**
   - ビルドエラーを解決
   - Vercelにデプロイ可能な状態にする

## 完成している機能

- ✅ 全9セクションのコンポーネント
- ✅ 日本語・ベトナム語の翻訳ファイル
- ✅ レスポンシブデザイン
- ✅ グラフコンポーネント（Recharts）
- ✅ スタイリング（Tailwind CSS）

## 未解決の課題

- ❌ next-intlの設定エラー
- ❌ ビルドエラーの解決
- ❌ 言語切り替え機能の動作確認

## 推奨される次のステップ

1. next-intlの問題を解決するか、別の多言語対応ライブラリ（例：react-i18next）を検討
2. ビルドエラーを完全に解決
3. 本番環境でのテスト