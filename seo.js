/**
 * seo.js — 笑える地球 個別記事ページ SEO インジェクター
 *
 * 各記事ページの <head> 内で articles-data.js の後に読み込む。
 * 現在のページファイル名を元に ARTICLES_DATA からメタ情報を取得し、
 * Open Graph / Twitter Card / JSON-LD (NewsArticle) をページに動的に挿入する。
 *
 * 使い方（各 article-NN.html の <head> 内）:
 *   <script src="articles-data.js"></script>
 *   <script src="seo.js"></script>
 */
(function () {
  "use strict";

  /* ── ページ特定 ── */
  var filename = location.pathname.split("/").pop() || "index.html";
  /* Netlify の Pretty URL が /article-01 → .html 無し に変換するため正規化 */
  if (filename && !filename.includes(".")) {
    filename = filename + ".html";
  }
  var article =
    typeof getArticleByFilename === "function"
      ? getArticleByFilename(filename)
      : null;
  if (!article) return;

  var SITE_URL  = "https://laughingearth.example.com"; // ← 本番ドメインに変更してください
  var SITE_NAME = "笑える地球";
  var pageUrl   = SITE_URL + "/" + article.url;
  var pageTitle = article.title + " | " + SITE_NAME;

  var head = document.head;

  /* ── ヘルパー: <meta> を追加（既存なら上書き） ── */
  function setMeta(attrs) {
    var key   = attrs.property ? "property" : "name";
    var value = attrs.property || attrs.name;
    var sel   = 'meta[' + key + '="' + value + '"]';
    var el    = head.querySelector(sel) || document.createElement("meta");
    for (var k in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, k)) el.setAttribute(k, attrs[k]);
    }
    if (!head.contains(el)) head.appendChild(el);
  }

  /* ── ヘルパー: <link> を追加 ── */
  function setLink(attrs) {
    var sel = 'link[rel="' + attrs.rel + '"]';
    var el  = head.querySelector(sel) || document.createElement("link");
    for (var k in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, k)) el.setAttribute(k, attrs[k]);
    }
    if (!head.contains(el)) head.appendChild(el);
  }

  /* ── <title> ── */
  document.title = pageTitle;

  /* ── description (静的 meta が無ければ挿入) ── */
  setMeta({ name: "description", content: article.description });

  /* ── canonical ── */
  setLink({ rel: "canonical", href: pageUrl });

  /* ── Open Graph ── */
  setMeta({ property: "og:type",        content: "article" });
  setMeta({ property: "og:locale",      content: "ja_JP" });
  setMeta({ property: "og:site_name",   content: SITE_NAME });
  setMeta({ property: "og:url",         content: pageUrl });
  setMeta({ property: "og:title",       content: pageTitle });
  setMeta({ property: "og:description", content: article.description });

  /* ── Twitter Card ── */
  setMeta({ name: "twitter:card",        content: "summary_large_image" });
  setMeta({ name: "twitter:title",       content: pageTitle });
  setMeta({ name: "twitter:description", content: article.description });

  /* ── JSON-LD: NewsArticle ── */
  var ld = {
    "@context":         "https://schema.org",
    "@type":            "NewsArticle",
    "headline":         article.title,
    "description":      article.description,
    "datePublished":    article.dateISO,
    "inLanguage":       "ja",
    "url":              pageUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name":  SITE_NAME,
      "url":   SITE_URL
    },
    "about": article.tags.map(function (t) {
      return { "@type": "Thing", "name": t.label };
    })
  };

  var script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(ld, null, 2);
  head.appendChild(script);
})();
