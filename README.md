# green.agent-best.net

株式会社エージェントベスト「Green運用代行」LP（採用企業さま向け・B2B）。
IT/Web業界特化の求人媒体「Green」の運用代行、業界初の面談課金モデル（1面談2万円）を訴求するページです。

- 公開URL: https://green.agent-best.net/
- ホスティング: GitHub Pages（main / ルート）
- DNS: Squarespace管理（CNAME → agentbest.github.io）

## 構成

| ファイル | 役割 |
|---|---|
| `index.html` | LP本体。CSS/JS/アイコンをすべて内包した1ファイル構成（外部CDN依存なし） |
| `CNAME` | 独自ドメイン設定 |
| `.nojekyll` | GitHub PagesのJekyll処理を無効化 |

旧構成にあった `css/style.css`・`js/script.js`・Font Awesome/Google Fonts のCDN読み込みは、
index.html への内包にともない削除しました。

## お問い合わせフォーム

コーポレートサイト（https://www.agent-best.net/contact ）と**同一のGoogleフォーム**へ送信しています。
項目は 会社名／お名前／メールアドレス／お問い合わせ内容 の4つで、送信本文の末尾に
「お問い合わせ元：Green運用代行LP」を自動付記して、どのLP経由かを判別できるようにしています。

日程調整ツール（Timerex）へは、フォーム送信後のサンクス画面からのみ案内しています（いきなり遷移させない方針）。

## 編集方法

`index.html` を直接編集して push すれば、数分でGitHub Pagesに反映されます。
