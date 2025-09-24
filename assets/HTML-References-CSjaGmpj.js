import{j as n}from"./index-C8ADKtso.js";import{useMDXComponents as i}from"./index-BwRnHMUQ.js";function s(e){const l={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(l.h1,{id:"html-要素リファレンス",children:"HTML 要素リファレンス"}),`
`,n.jsx(l.h2,{id:"main",children:"<main>"}),`
`,n.jsx(l.p,{children:"主要なコンテンツを表す"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"コンテンツ区分"}),`
`,n.jsx(l.li,{children:"最も主要なコンテンツであることを表す"}),`
`,n.jsx(l.li,{children:"サイト全体で固有のコンテンツに対して使用する"}),`
`,n.jsx(l.li,{children:"1ページで複数回使ってはいけない"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<body>
  <header>
    <p>サイトロゴ</p>
    <nav>ナビゲーションリンク</nav>
  </header>

  <!-- 記事の内容をmainに -->
  <main>
    <article>
      <h1>記事のタイトル</h1>
      <p>記事の本文</p>
    </article>
  </main>

  <footer>
    <p>コピーライト情報</p>
  </footer>
</body>
`})}),`
`,n.jsx(l.h2,{id:"header",children:"<header>"}),`
`,n.jsx(l.p,{children:"ヘッダー領域（サイトやセクションの冒頭）"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"コンテンツ区分"}),`
`,n.jsx(l.li,{children:"複数回使用できる"}),`
`,n.jsx(l.li,{children:"装飾を目的として使わない"}),`
`]}),`
`,n.jsx(l.h3,{id:"ページのヘッダー",children:"ページのヘッダー"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<header class="header">
  <div class="header__inner">
    <a href="#" class="header__logo">
      <img class="header__logo-img" src="assets/images/logo.svg" alt="サイトロゴ" />
    </a>

    <nav class="header__nav" aria-label="メインナビゲーション">
      <ul class="header__nav-list">
        <li class="header__nav-item"><a href="#" class="header__link">ホーム</a></li>
        <li class="header__nav-item"><a href="#" class="header__link">記事一覧</a></li>
        <li class="header__nav-item"><a href="#" class="header__link">お問い合わせ</a></li>
      </ul>
    </nav>
  </div>
</header>
`})}),`
`,n.jsx(l.h3,{id:"記事のヘッダー",children:"記事のヘッダー"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<article class="article">
  <header class="article__header">
    <h1 class="article__title">記事タイトル</h1>
    <p class="article__meta"><time class="article__date" datetime="2025-09-10">2025/09/10</time></p>
  </header>

  <section class="article__section">
    <h2 class="article__section-title">セクションタイトル</h2>
    <p class="article__paragraph">これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。</p>
  </section>
</article>
`})}),`
`,n.jsx(l.h2,{id:"footer",children:"<footer>"}),`
`,n.jsx(l.p,{children:"フッター領域（サイトやセクションの末尾）"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"コンテンツ区分"}),`
`,n.jsx(l.li,{children:"複数回使用できる"}),`
`,n.jsx(l.li,{children:"装飾を目的として使わない"}),`
`]}),`
`,n.jsx(l.h3,{id:"ページのフッター",children:"ページのフッター"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<body>
  ～ コンテンツ ～

  <footer class="footer">
    <div class="footer__inner">
      <nav class="footer__nav" aria-label="フッターナビゲーション">
        <ul class="footer__nav-list">
          <li class="footer__nav-item"><a href="#" class="footer__link">利用規約</a></li>
          <li class="footer__nav-item"><a href="#" class="footer__link">プライバシーポリシー</a></li>
          <li class="footer__nav-item"><a href="#" class="footer__link">お問い合わせ</a></li>
        </ul>
      </nav>

      <address class="footer__address">
        <span class="footer__address-item">
          電話: <a href="tel:0312345678" class="footer__address-link">03-1234-5678</a>
        </span>
        <span class="footer__address-item">
          Email: <a href="mailto:info@example.com" class="footer__address-link">info@example.com</a>
        </span>
        <span class="footer__address-item">
          住所: <a href="https://maps.google.com/?q=東京都千代田区1-2-3" target="_blank" rel="noopener noreferrer" class="footer__address-link">東京都千代田区1-2-3</a>
        </span>
      </address>
      <div class="footer__copy">&copy; 2025 MySite. All rights reserved.</div>
    </div>
  </footer>
</body>
`})}),`
`,n.jsx(l.h3,{id:"記事のフッター",children:"記事のフッター"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<article class="article">
  <section class="article__section">
    <h2 class="article__section-title">セクションタイトル</h2>
    <p class="article__paragraph">これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。</p>
  </section>

  <footer class="article__footer">
    <nav class="article__actions" aria-label="記事操作">
      <button class="article__action article__action--bookmark" type="button">ブックマーク</button>
      <button class="article__action article__action--share" type="button">共有</button>
    </nav>
  </footer>
</article>
`})}),`
`,n.jsx(l.h2,{id:"article",children:"<article>"}),`
`,n.jsx(l.p,{children:"独立した記事やコンテンツ"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"コンテンツ区分"}),`
`,n.jsx(l.li,{children:"見出し（<h1>〜<h6>要素）により内容を示す"}),`
`,n.jsx(l.li,{children:"複数回使用できる"}),`
`,n.jsx(l.li,{children:"<article>要素の中でテーマが分かれる場合は<section>要素を使うと良い"}),`
`,n.jsx(l.li,{children:"<article>要素は入れ子にできる"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<article class="article">
  <header class="article__header">
    <h1 class="article__title">記事タイトル</h1>
    <p class="article__meta"><time class="article__date" datetime="2025-09-10">2025/09/10</time></p>
  </header>

  <div class="article__content">
    <section class="article__section">
      <h2 class="article__section-title">セクションタイトル</h2>
      <p class="article__paragraph">これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。</p>
    </section>

    <figure class="article__figure">
      <img class="article__img" src="assets/images/" alt="画像の説明文" />
      <figcaption class="article__figcaption">図1：画像のキャプション</figcaption>
    </figure>

    <section class="article__section">
      <h3 class="article__section-subtitle">セクションサブタイトル</h3>
      <p class="article__paragraph">これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。</p>
    </section>

    <section class="article__section">
      <article class="article__nested">
        <h4 class="article__nested-title">入れ子の記事のタイトル1</h4>
        <p class="article__paragraph">これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。</p>
      </article>

      <article class="article__nested">
        <h4 class="article__nested-title">入れ子の記事のタイトル2</h4>
        <p class="article__paragraph">これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。</p>
      </article>
    </section>
  </div>
</article>
`})}),`
`,n.jsx(l.h2,{id:"section",children:"<section>"}),`
`,n.jsx(l.p,{children:"1つのセクション（区間）を表す"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"コンテンツ区分"}),`
`,n.jsx(l.li,{children:"まとまりを作る最も汎用的なタグ"}),`
`,n.jsx(l.li,{children:"見出し（<h1>〜<h6>要素）により内容を示す"}),`
`,n.jsx(l.li,{children:"複数回使用できる"}),`
`,n.jsx(l.li,{children:"装飾を目的として使わない"}),`
`,n.jsx(l.li,{children:"<article>要素は独立したまとまりに対して、<section>要素は小さなテーマのまとまりに対して使うのが理想的"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<article class="article">
  <h1 class="article__title">記事タイトル</h1>

  <section class="article__section">
    <h2 class="article__section-title">セクションタイトル</h2>
    <p class="article__paragraph">これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。</p>
  </section>

  <section class="article__section">
    <h3 class="article__section-subtitle">セクションサブタイトル</h3>
    <p class="article__paragraph">これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。</p>
  </section>
</article>
`})}),`
`,n.jsx(l.h2,{id:"aside",children:"<aside>"}),`
`,n.jsx(l.p,{children:"補足的な内容であることを表す"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"コンテンツ区分"}),`
`,n.jsx(l.li,{children:"複数回使用できる"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<article class="article">
  <header class="article__header">
    <h1 class="article__title">記事タイトル</h1>
  </header>

  <div class="article__content">
    <section class="article__section">
      <h2 class="article__section-title">セクションタイトル</h2>
      <p class="article__paragraph">これは本文の段落です。</p>
    </section>

    <aside class="article__aside">
      <h3 class="article__aside-title">記事の補足情報</h3>
      <p class="article__aside-text">これは補足情報のテキストです。これは補足情報のテキストです。これは補足情報のテキストです。これは補足情報のテキストです。</p>
    </aside>

    <section class="article__section">
      <h2 class="article__section-title">セクションタイトル</h2>
      <p class="article__paragraph">これは本文の段落です。</p>
    </section>
  </div>
</article>
`})}),`
`,n.jsx(l.h3,{id:"関連記事",children:"関連記事"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<article class="article">
  <section class="article__section">
    <h2 class="article__section-title">セクションタイトル</h2>
    <p class="article__paragraph">これは本文の段落です。</p>
  </section>

  <aside class="article__aside">
    <h2 class="article__aside-title">関連記事</h2>
    <ul class="article__related">
      <li class="article__related-item"><a href="#" class="article__related-link">関連記事リンク1</a></li>
      <li class="article__related-item"><a href="#" class="article__related-link">関連記事リンク2</a></li>
    </ul>
  </aside>
</article>
`})}),`
`,n.jsx(l.h3,{id:"サイドバー",children:"サイドバー"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<main class="main">
  <article class="article">
    <h1 class="article__title">記事タイトル</h1>
    <p class="article__paragraph">これは本文の段落です。</p>
  </article>

  <aside class="sidebar">
    <div class="sidebar__content">サイドバー</div>
  </aside>
</main>
`})}),`
`,n.jsx(l.h2,{id:"nav",children:"<nav>"}),`
`,n.jsx(l.p,{children:"ナビゲーションセクション要素"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"コンテンツ区分"}),`
`,n.jsx(l.li,{children:"複数回使用できる"}),`
`,n.jsx(l.li,{children:"複数のナビゲーション がある場合はそれぞれを区別できるように aria-label属性 を付ける"}),`
`]}),`
`,n.jsx(l.h3,{id:"メニュー",children:"メニュー"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<nav class="menu" aria-label="グローバルメニュー">
  <ul class="menu__list">
    <li class="menu__item menu__item--active">
      <a href="/" class="menu__link">ホーム</a>
    </li>
    <li class="menu__item">
      <a href="/about" class="menu__link">私たちについて</a>
    </li>
    <li class="menu__item menu__item--has-children">
      <a href="/services" class="menu__link">サービス</a>
      <ul class="menu__sublist">
        <li class="menu__subitem">
          <a href="/services/web" class="menu__sublink">Web開発</a>
        </li>
        <li class="menu__subitem">
          <a href="/services/design" class="menu__sublink">デザイン</a>
        </li>
      </ul>
    </li>
    <li class="menu__item">
      <a href="/contact" class="menu__link">お問い合わせ</a>
    </li>
  </ul>
</nav>
`})}),`
`,n.jsx(l.h3,{id:"記事の目次",children:"記事の目次"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<article class="article">
  <header class="article__header">
    <h1 class="article__title">記事のタイトル</h1>
  </header>

  <nav class="article__toc" aria-label="記事の目次">
    <h2 class="article__toc-title">目次</h2>
    <ol class="article__toc-list">
      <li class="article__toc-item">
        <a href="#section-1" class="article__toc-link">1. セクション</a>
      </li>
      <li class="article__toc-item">
        <a href="#section-2" class="article__toc-link">2. セクション</a>
        <ol class="article__toc-list article__toc-list--nested">
          <li class="article__toc-item">
            <a href="#section-2-1" class="article__toc-link">2.1 セクション</a>
          </li>
          <li class="article__toc-item">
            <a href="#section-2-2" class="article__toc-link">2.2 セクション</a>
          </li>
        </ol>
      </li>
      <li class="article__toc-item">
        <a href="#section-3" class="article__toc-link">3. セクション</a>
      </li>
    </ol>
  </nav>

  <p class="article__paragraph">本文</p>
</article>
`})}),`
`,n.jsx(l.h3,{id:"パンくずリスト",children:"パンくずリスト"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:'現在ページを示すにためにaria-current="page"を使う'}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<nav class="breadcrumb" aria-label="パンくずリスト">
  <ol class="breadcrumb__list">
    <li class="breadcrumb__item">
      <a href="/" class="breadcrumb__link">ホーム</a>
    </li>
    <li class="breadcrumb__item">
      <a href="/category" class="breadcrumb__link">カテゴリー</a>
    </li>
    <li class="breadcrumb__item breadcrumb__item--current" aria-current="page">
      記事タイトル
    </li>
  </ol>
</nav>
`})}),`
`,n.jsx(l.h2,{id:"address",children:"<address>"}),`
`,n.jsx(l.p,{children:"連絡先の情報を表す"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"コンテンツ区分"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<address class="contact-address">
  株式会社HOGEへのお問い合わせ<br>
  メール：<a href="mailto:hoge@hoge.com" class="contact-address__link">hoge@hoge.com</a><br>
  電話：<a href="tel:012-345-6789" class="contact-address__link">012-345-6789</a>
</address>
`})}),`
`,n.jsx(l.h3,{id:"たとえば以下のようなものを含める",children:"たとえば以下のようなものを含める"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"メールアドレス"}),`
`,n.jsx(l.li,{children:"電話番号"}),`
`,n.jsx(l.li,{children:"住所"}),`
`,n.jsx(l.li,{children:"ウェブサイトのURL"}),`
`,n.jsx(l.li,{children:"ソーシャルメディアのアカウントへのURL"}),`
`]}),`
`,n.jsx(l.h2,{id:"h1h6",children:"<h1>〜<h6>"}),`
`,n.jsx(l.p,{children:"見出し要素"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"コンテンツ区分"}),`
`,n.jsx(l.li,{children:"見出しタグには、まとまり（セクション）の内容を一言で表すようなテキストを入れる"}),`
`,n.jsx(l.li,{children:"h1は基本的には1回だけ使う"}),`
`,n.jsx(l.li,{children:"見出しタグの中に画像を入れる場合はalt属性に内容を書く"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<article class="article">
  <h1 class="article__title">記事タイトル</h1>

  <section class="article__section">
    <h2 class="article__section-title">大セクション1始まり</h2>

    <h3 class="article__subsection-title">小セクション</h3>
    <p class="article__paragraph">...</p>

    <h3 class="article__subsection-title">小セクション</h3>
    <p class="article__paragraph">...</p>

    <h4 class="article__subsubsection-title">小小セクション</h4>
    <p class="article__paragraph">...</p>
  </section>

  <section class="article__section">
    <h2 class="article__section-title">大セクション2始まり</h2>
        ...
  </section>
</article>
`})}),`
`,n.jsx(l.h2,{id:"ulli",children:"<ul>、<li>"}),`
`,n.jsx(l.p,{children:"順序なしリスト要素"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"テキストコンテンツ"}),`
`,n.jsx(l.li,{children:"項目の並び順を入れ替えても、問題のないリストに使う"}),`
`,n.jsx(l.li,{children:"ulの直下にはliタグしか使えない"}),`
`,n.jsx(l.li,{children:"リストの中に、別のリストを入れることができる"}),`
`,n.jsx(l.li,{children:"複数の項目のまとまりには積極的にリストを使う"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<ul class="my-list">
  <li class="my-list-item">
    第一の項目
    <ul class="my-list my-list--nested">
      <li class="my-list-item">第一の項目の子1</li>
      <li class="my-list-item">第一の項目の子2</li>
      <li class="my-list-item">
        第一の項目の子3
        <ul class="my-list my-list--nested">
          <li class="my-list-item">さらに子1</li>
          <li class="my-list-item">さらに子2</li>
        </ul>
      </li>
    </ul>
  </li>
  <li class="my-list-item">第二の項目</li>
  <li class="my-list-item">第三の項目</li>
</ul>
`})}),`
`,n.jsx(l.h2,{id:"olli",children:"<ol>、<li>"}),`
`,n.jsx(l.p,{children:"順序付きリスト要素"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"テキストコンテンツ"}),`
`,n.jsx(l.li,{children:"項目の順番が入れ替わると、意味が変わってしまうようなリストに使う"}),`
`,n.jsx(l.li,{children:"olの直下にはliタグしか使えない"}),`
`,n.jsx(l.li,{children:"リストの中に、別のリストを入れることができる"}),`
`,n.jsx(l.li,{children:"複数の項目のまとまりには積極的にリストを使う"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<ol class="my-list">
  <li class="my-list-item">
    手順1: 環境を準備する
    <ol class="my-list my-list--nested">
      <li class="my-list-item">エディタをインストール</li>
      <li class="my-list-item">ブラウザを最新化</li>
    </ol>
  </li>
  <li class="my-list-item">手順2: プロジェクトを作成する</li>
  <li class="my-list-item">手順3: コードを書き始める</li>
</ol>
`})}),`
`,n.jsx(l.h3,{id:"順序を逆にする",children:"順序を逆にする"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<ol class="my-list" reversed>
  <li class="my-list-item">第3位: りんご</li>
  <li class="my-list-item">第2位: バナナ</li>
  <li class="my-list-item">第1位: みかん</li>
</ol>
`})}),`
`,n.jsx(l.h3,{id:"開始番号を変える",children:"開始番号を変える"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<ol class="my-list" start="4">
  <li class="my-list-item">手順4: テスト環境を構築する</li>
  <li class="my-list-item">手順5: 動作確認を行う</li>
  <li class="my-list-item">手順6: 本番環境へデプロイする</li>
</ol>
`})}),`
`,n.jsx(l.h3,{id:"数字を途中で変更する",children:"数字を途中で変更する"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<ol class="my-list">
  <li class="my-list-item">手順1: 環境を準備する</li>
  <li class="my-list-item">手順2: プロジェクトを作成する</li>
  <li class="my-list-item" value="10">手順10: 特殊ケースの処理</li>
  <li class="my-list-item">手順11: テストを実行する</li>
  <li class="my-list-item" value="20">手順20: 本番デプロイ</li>
</ol>
`})}),`
`,n.jsx(l.h3,{id:"type-属性",children:"type 属性"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:'"A" → A, B, C…'}),`
`,n.jsx(l.li,{children:'"a" → a, b, c…'}),`
`,n.jsx(l.li,{children:'"I" → I, II, III…'}),`
`,n.jsx(l.li,{children:'"i" → i, ii, iii…'}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<ol class="my-list" type="A">
  <li class="my-list-item">項目A: 前提条件の確認</li>
  <li class="my-list-item">項目B: 環境設定</li>
  <li class="my-list-item">項目C: プロジェクト作成</li>
</ol>
`})}),`
`,n.jsx(l.h2,{id:"dldtdd",children:"<dl>、<dt>、<dd>"}),`
`,n.jsx(l.p,{children:"説明リストを表す"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"テキストコンテンツ"}),`
`,n.jsx(l.li,{children:"各項目に「名前」と「説明文」が必要なリストに使う"}),`
`,n.jsx(l.li,{children:"複数の説明（dd）を並べてもOK"}),`
`,n.jsx(l.li,{children:"複数の名前（dt）を並べてもOK"}),`
`,n.jsx(l.li,{children:"dlの中でdivタグを使ってもOK"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<dl>
  <div>
    <dt>HTML</dt>
    <dd>Web ページの構造を記述するマークアップ言語。</dd>
    <dd>HyperText Markup Language の略。</dd>
  </div>

  <div>
    <dt>CSS</dt>
    <dd>文書の見た目やレイアウトを指定するスタイルシート言語。</dd>
  </div>

  <div>
    <dt>JavaScript</dt>
    <dd>ブラウザ上で動作するスクリプト言語で、ページに動きをつけることができる。</dd>
    <dd>サーバーサイド（Node.js）でも利用可能。</dd>
  </div>
</dl>
`})}),`
`,n.jsx(l.h3,{id:"dlに入れてはいけないもの",children:"dlに入れてはいけないもの"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"段落タグ（<p>）"}),`
`,n.jsx(l.li,{children:"見出しタグ（<h1>〜<h6>）"}),`
`,n.jsx(l.li,{children:`リストタグ（<ul>、<ol>）
など`}),`
`]}),`
`,n.jsx(l.h3,{id:"q--aで使うこともできる",children:"Q & Aで使うこともできる"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<dl>
  <dt>Q. サービスは無料ですか？</dt>
  <dd>A. 基本プランは無料で利用できます。有料プランもあります。</dd>
</dl>
`})}),`
`,n.jsx(l.h2,{id:"p",children:"<p>"}),`
`,n.jsx(l.p,{children:"段落を表す"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"テキストコンテンツ"}),`
`,n.jsx(l.li,{children:"文章のまとまりごとに使う（文章の途中で次の<p>に移ってはいけない）"}),`
`,n.jsx(l.li,{children:"画像を「段落の一部」として扱いたいときは<p>の中に<img>を入れる"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<p>
  これはテキストの最初の段落です。これはテキストの最初の段落です。これはテキストの最初の段落です。これはテキストの最初の段落です。
</p>
<p>
  これはテキストの二番目の段落です。これはテキストの二番目の段落です。これはテキストの二番目の段落です。これはテキストの二番目の段落です。
</p>
<p>
  画像はこちらです。
</p>
<p>
  <img src="assets/images/image_example.jpg" alt="altテキスト" />
</p>
`})}),`
`,n.jsx(l.h3,{id:"画像の使い分け",children:"画像の使い分け"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"タグ"}),n.jsx("th",{children:"用途"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"<p>"})}),n.jsx("td",{children:"画像が記事を構成する一部の場合。文章の流れ的に画像がそこに無いといけない場合。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"<figure>"})}),n.jsx("td",{children:"画像を別の場所に移しても、本文の意味が成り立つ場合（キャプション付きの図表など）。"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"<div>"})}),n.jsx("td",{children:"装飾のため、見栄えのために画像を使うとき。"})]})]})]}),`
`,n.jsx(l.h3,{id:"p以外を使う例",children:"p以外を使う例"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"タグ"}),n.jsx("th",{children:"用途"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"<h1>〜<h6>"})}),n.jsx("td",{children:"見出しを書くとき"})]}),n.jsxs("tr",{children:[n.jsxs("td",{children:[n.jsx("code",{children:"<pre>"}),"、",n.jsx("code",{children:"<code>"})]}),n.jsx("td",{children:"ソースコードを貼るとき"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"<address>"})}),n.jsx("td",{children:"連絡先を書くとき"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"<div>"})}),n.jsx("td",{children:"単純にブロックを作りたいとき"})]})]})]}),`
`,n.jsx(l.h2,{id:"figurefigcaption",children:"<figure>、<figcaption>"}),`
`,n.jsx(l.p,{children:"自己完結するコンテンツを表す"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"テキストコンテンツ"}),`
`,n.jsx(l.li,{children:"その部分だけを抜き出しても意味が成り立つ（図表やイラスト、写真など）"}),`
`,n.jsx(l.li,{children:"figcaptionと合わせて使われることが多い"}),`
`,n.jsx(l.li,{children:"必要であれば、1つのfigureタグの中に複数の画像を入れることもできる"}),`
`,n.jsx(l.li,{children:"キャプションをコンテンツの前に配置してもOK"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<figure>
  <img src="assets/images/image_example01.jpg" alt="サンプル画像" />
  <img src="assets/images/image_example02.jpg" alt="サンプル画像" />
  <figcaption>
    図1: サンプル画像のキャプション
  </figcaption>
</figure>
`})}),`
`,n.jsx(l.h3,{id:"注釈付きでコードを掲載する",children:"注釈付きでコードを掲載する"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<figure>
  <figcaption>JavaScriptで3秒後に処理を行う</figcaption>
  <pre><code>
    setTimeout(function(){
      console.log("Hello");
    }, 3000);
  </code></pre>
</figure>
`})}),`
`,n.jsx(l.h3,{id:"引用文で使う",children:"引用文で使う"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<figure>
  <blockquote>
    <p>成功する人は「思い通りに行かない事が起きるのはあたりまえ」という前提で挑戦している。</p>
  </blockquote>
  <figcaption>
    — トーマス・エジソン, <cite><a href="https://○○">成功哲学について</a></cite>
  </figcaption>
</figure>
`})}),`
`,n.jsx(l.h2,{id:"blockquoteciteq",children:"<blockquote>、<cite>、<q>"}),`
`,n.jsx(l.p,{children:"引用文を表す"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"テキストコンテンツ（blockquote）、インラインテキスト（cite、q）"}),`
`,n.jsx(l.li,{children:"Webページの文章を引用するときには、そのページのURLをcite属性に載せる"}),`
`,n.jsxs(l.li,{children:["citeタグで引用元の「名前」を示す",`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"歌詞の引用であれば<cite>曲名</cite>"}),`
`,n.jsx(l.li,{children:"Webページであれば<cite>サイト名や記事タイトル</cite>"}),`
`]}),`
`]}),`
`,n.jsx(l.li,{children:"citeタグは人の名前を含めない"}),`
`,n.jsx(l.li,{children:"他のWebページから引用するのであれば、aタグをciteタグ内に含めると親切"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<figure>
  <blockquote cite="引用元のURL">
    <p>引用文</p>
  </blockquote>
  <figcaption>
    出典：<cite><a href="https://○○" target="_blank" rel="noopener noreferrer">引用元の名前</a></cite>
  </figcaption>
</figure>
`})}),`
`,n.jsx(l.h3,{id:"citeタグは作品名だけを紹介したい場合に使うことができる",children:"<cite>タグは「作品名だけを紹介したい」場合に使うことができる"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<h2>好きな映画ベスト5</h2>
<ol>
  <li><cite>映画名</cite>（199X）</li>
  ...
</ol>
`})}),`
`,n.jsx(l.h3,{id:"短い引用文にはqタグを使う",children:"短い引用文には<q>タグを使う"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"段落の中で部分的に引用が入るときにはblockquoteではなくqタグを使う"}),`
`,n.jsx(l.li,{children:"qタグにもcite属性を指定できる"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<p>エジソンは<q cite="https://○○">私は毎日、18時間働くことにしている</q>と言っていたそうです。</p>
`})}),`
`,n.jsx(l.h2,{id:"precode",children:"<pre>、<code>"}),`
`,n.jsx(l.p,{children:"整形済みのテキストを表す"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"テキストコンテンツ（pre）、インラインテキスト（code）"}),`
`,n.jsx(l.li,{children:"preでは改行やスペースがそのまま表示される"}),`
`]}),`
`,n.jsx(l.h3,{id:"複数行のコードを載せるならpreとcodeを使う",children:"複数行のコードを載せるならpreとcodeを使う"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<pre>
  <code>
    ここにコードを書く
  </code>
</pre>
`})}),`
`,n.jsx(l.h3,{id:"codeタグを段落やリストなどの文中で使う",children:"codeタグを段落やリストなどの文中で使う"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<p>まずは<code>console.log('Hello, world!')</code>を実行してみましょう。</p>
`})}),`
`,n.jsx(l.h2,{id:"div",children:"<div>"}),`
`,n.jsx(l.p,{children:"意味的要素がない汎用コンテナー"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"テキストコンテンツ"}),`
`,n.jsx(l.li,{children:"他に適切な意味的要素がない場合に限り使用"}),`
`,n.jsx(l.li,{children:"CSSで見た目を変えたいときに使う"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<div class="my-box">
  <p class="my-box-text">
    これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。これはテキストの段落です。
  </p>
</div>
`})}),`
`,n.jsx(l.h3,{id:"意味を持つタグの例",children:"意味を持つタグの例"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"タグ"}),n.jsx("th",{children:"用途"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"<header>"})}),n.jsx("td",{children:"ヘッダー"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"<footer>"})}),n.jsx("td",{children:"フッター"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"<main>"})}),n.jsx("td",{children:"主要なコンテンツ"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"<aside>"})}),n.jsx("td",{children:"補足的なコンテンツ"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"<section>"})}),n.jsx("td",{children:"1つのセクション"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"<article>"})}),n.jsx("td",{children:"1つの独立した記事"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"<nav>"})}),n.jsx("td",{children:"メニューなどのナビゲーション"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"<h1>〜<h6>"})}),n.jsx("td",{children:"見出し"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"<p>"})}),n.jsx("td",{children:"段落"})]})]})]}),`
`,n.jsx(l.h2,{id:"a",children:"<a>"}),`
`,n.jsx(l.p,{children:"アンカー要素"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"インラインテキスト"}),`
`,n.jsx(l.li,{children:"hrefでURLを指定する"}),`
`,n.jsx(l.li,{children:'href="#飛ぶ先のid"を指定すると、ページ内リンクができる'}),`
`,n.jsx(l.li,{children:'target="_blank"で別タブで開く（セキュリティ対策のためrel="noopener"も合わせて指定する）'}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<a href="リンク先のURL" target="_blank" rel="noopener noreferrer">表示テキストや画像</a>
`})}),`
`,n.jsx(l.h3,{id:"buttonタグとの使い分け",children:"buttonタグとの使い分け"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"クリックで他のページへ飛ぶようにしたい：<a>"}),`
`,n.jsx(l.li,{children:"クリックでJavaScriptを動かしたい：<button>"}),`
`,n.jsx(l.li,{children:"フォームの送信・リセット：<button>"}),`
`]}),`
`,n.jsx(l.h3,{id:"rel属性",children:"rel属性"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsxs(l.li,{children:["nofollowの使いどころの例",`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"広告のリンクを貼るとき"}),`
`,n.jsx(l.li,{children:"ユーザーが文章を投稿できるWebサービスをつくるとき"}),`
`]}),`
`]}),`
`,n.jsxs(l.li,{children:["noopenerの使いどころ",`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:'外部サイトへのリンクで別タブで開く設定（target="_blank"）にするとき'}),`
`]}),`
`]}),`
`,n.jsxs(l.li,{children:["noreferrerの使いどころ",`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"信頼できない外部サイトへのリンクを貼るとき"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(l.h3,{id:"mailtoでメールリンクを作る",children:"mailtoでメールリンクを作る"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<a href="mailto:hoge@hoge.com">hoge@hoge.com</a>
`})}),`
`,n.jsx(l.h3,{id:"telで電話番号リンクを作る",children:"telで電話番号リンクを作る"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"href内の電話番号は、ハイフンありでも無しでもどちらでも可"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<a href="tel:01203456789">0120-345-6789</a>
`})}),`
`,n.jsx(l.h3,{id:"download属性でダウンロードリンクを作る",children:"download属性でダウンロードリンクを作る"}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<a href="ファイルのURL" download="ダウンロード時のファイル名">ダウンロード</a>
`})}),`
`,n.jsx(l.h2,{id:"span",children:"<span>"}),`
`,n.jsx(l.p,{children:"意味的要素がない汎用的なインラインコンテナー"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"インラインテキスト"}),`
`,n.jsx(l.li,{children:"CSSで見た目を変えたいときに使う"}),`
`,n.jsx(l.li,{children:"<span>要素にwidth、height、margin、paddingを反映したいときは、display: inline-blockを合わせて指定する"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<p>このサイトの名前は<span>Code Stock</span>です。</p>
`})}),`
`,n.jsx(l.h2,{id:"img",children:"<img>"}),`
`,n.jsx(l.p,{children:"画像埋め込み要素"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsxs(l.li,{children:[`
`,n.jsx(l.p,{children:"マルティメディアリソース"}),`
`]}),`
`,n.jsxs(l.li,{children:[`
`,n.jsx(l.p,{children:"装飾のための画像ならaltの中身は何も書かなくていい"}),`
`]}),`
`,n.jsxs(l.li,{children:[`
`,n.jsx(l.p,{children:'開いた瞬間に表示したい画像以外はloading="lazy"（遅延読み込み）を指定'}),`
`]}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<img
  class="example-img"
  src="assets/images/image_example.jpg"
  alt="altテキスト"
  loading="lazy"
  width="180"
  height="94"
/>
`})}),`
`,n.jsx(l.h3,{id:"対応している画像形式",children:"対応している画像形式"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"形式"}),n.jsx("th",{children:"特徴"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:"JPEG"}),n.jsx("td",{children:"写真など、色数の多い画像向け"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"PNG"}),n.jsx("td",{children:"イラストや図表など、色数の少ない画像向け。背景を透過できる"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"GIF"}),n.jsx("td",{children:"おもにアニメーション画像で使う"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"SVG"}),n.jsx("td",{children:"ベクター画像形式。ロゴ画像やアイコンに最適"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"WebP"}),n.jsx("td",{children:"画像とアニメーションの両方に対応。軽量で広く使える実用画像形式。非対応ブラウザ用にpictureタグを合わせて使う"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"AVIF"}),n.jsx("td",{children:"画像とアニメーションの両方に対応。より高画質・高効率な次世代の画像形式。非対応ブラウザ用にpictureタグを合わせて使う"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:"APNG"}),n.jsx("td",{children:"アニメーション対応PNG画像フォーマット。非対応ブラウザ用にpictureタグを合わせて使う"})]})]})]}),`
`,n.jsx(l.h2,{id:"audio",children:"<audio>"}),`
`,n.jsx(l.p,{children:"音声データを埋め込む"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"マルティメディアリソース"}),`
`,n.jsx(l.li,{children:"src属性で音声データのURLを指定する"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<audio controls src="音声データのURL"></audio>
`})}),`
`,n.jsx(l.h3,{id:"属性",children:"属性"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"controls"})}),n.jsx("td",{children:"ブラウザのオーディオプレイヤーが表示される"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"autoplay"})}),n.jsx("td",{children:"音声を自動再生"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"loop"})}),n.jsx("td",{children:"ループ再生"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:'preload="metadata"'})}),n.jsx("td",{children:"音声のメタデータ（長さなど）だけを事前に読み込むように"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:'controlslist="nodownload"'})}),n.jsx("td",{children:"ダウンロードを禁止にする（Chrome）"})]})]})]}),`
`,n.jsx(l.h3,{id:"sourceタグで音声データを複数指定する",children:"sourceタグで音声データを複数指定する"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"対応している音声ファイルの1つだけを再生"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<audio controls>
  <source src="example.mp3" type="audio/mp3"/>
  <source src="example.wav" type="audio/wav"/>
  <source src="example.ogg" type="audio/ogg"/>
</audio>
`})}),`
`,n.jsx(l.h2,{id:"video",children:"<video>"}),`
`,n.jsx(l.p,{children:"動画埋め込み要素"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"マルティメディアリソース"}),`
`,n.jsx(l.li,{children:"src属性に動画データのURLを指定する"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<video controls src="動画データのURL"></video>
`})}),`
`,n.jsx(l.h3,{id:"属性-1",children:"属性"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"属性"}),n.jsx("th",{children:"説明"})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"controls"})}),n.jsx("td",{children:"ブラウザの再生コントローラーが表示される"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"loop"})}),n.jsx("td",{children:"動画をループ再生する"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"muted"})}),n.jsx("td",{children:"音声を消音にする"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"autoplay"})}),n.jsx("td",{children:"自動再生する（同時にmutedを指定しておく）"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:'preload="metadata"'})}),n.jsx("td",{children:"動画のメタデータ（長さなど）だけ事前に読み込むように"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:'poster="画像のURL"'})}),n.jsx("td",{children:"サムネイル画像を指定"})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"playsinline"})}),n.jsx("td",{children:"動画をインライン再生する（全画面表示せずに再生する）"})]}),n.jsxs("tr",{children:[n.jsxs("td",{children:[n.jsx("code",{children:"width"}),"・",n.jsx("code",{children:"height"})]}),n.jsx("td",{children:"高さ・幅を指定する"})]})]})]}),`
`,n.jsx(l.h3,{id:"sourceタグで動画データを複数指定する",children:"sourceタグで動画データを複数指定する"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"対応している動画ファイルの1つだけを再生"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<video controls>
  <source src="movie.mp4" type="video/mp4"/>
  <source src="movie.avi" type="video/avi"/>
  <source src="movie.ogv" type="video/ogv"/>
</video>
`})}),`
`,n.jsx(l.h2,{id:"detailssummary",children:"<details>、<summary>"}),`
`,n.jsx(l.p,{children:"折りたたみコンテンツ"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"インタラクティブ要素"}),`
`,n.jsx(l.li,{children:"詳細には、複数の要素を配置できる"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<details class="accordion">
  <summary class="accordion__summary">
    アコーディオンのタイトル
  </summary>
  <div class="accordion__content">
    <p class="accordion__paragraph">これはアコーディオンの詳細です。</p>
    <ul class="accordion__list">
      <li class="accordion__list-item">リスト1</li>
      <li class="accordion__list-item">リスト2</li>
    </ul>
  </div>
</details>
`})}),`
`,n.jsx(l.h3,{id:"はじめからアコーディオンを開いておく",children:"はじめからアコーディオンを開いておく"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsx(l.li,{children:"<details>要素にopen属性を指定"}),`
`]}),`
`,n.jsx(l.pre,{children:n.jsx(l.code,{className:"language-html",children:`<details class="accordion" open>
  <summary class="accordion__summary">
    アコーディオンのタイトル
  </summary>
  <div class="accordion__content">アコーディオンの詳細</div>
</details>
`})}),`
`,n.jsx(l.h1,{id:"参考",children:"参考"}),`
`,n.jsxs(l.ul,{children:[`
`,n.jsxs(l.li,{children:[`
`,n.jsx("a",{href:"https://developer.mozilla.org/",target:"_blank",rel:"noopener noreferrer",children:"MDN Web Docs"}),`
`]}),`
`,n.jsxs(l.li,{children:[`
`,n.jsx("a",{href:"https://catnose.me/learning/html",target:"_blank",rel:"noopener noreferrer",children:"初心者向けHTMLリファレンス"}),`
`]}),`
`]})]})}function d(e={}){const{wrapper:l}={...i(),...e.components};return l?n.jsx(l,{...e,children:n.jsx(s,{...e})}):s(e)}export{d as default};
