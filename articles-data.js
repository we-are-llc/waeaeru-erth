/**
 * 笑える地球 — 記事メタデータ一覧
 * ============================================================
 *
 * 🆕 記事を追加するには（2ステップ）:
 *
 *   Step 1. このファイルの ARTICLES_DATA 配列の末尾に新しいオブジェクトを追記する
 *           → id は既存の最大値 + 1 にする
 *           → thumbSvg に SVG文字列を書く（省略すると国旗だけのシンプルカードになる）
 *
 *   Step 2. article-template.html をコピーして article-NN.html を作成し、
 *           コメントに従って記事内容を編集する
 *
 *   ※ index.html の編集は不要。カードは ARTICLES_DATA から自動生成される。
 *   ※ sitemap.xml に新しい <url> エントリを追加することを推奨。
 *
 * ============================================================
 *
 *
 * データ仕様:
 *   id          : 記事の一意な番号（整数）
 *   url         : 記事HTMLファイル名
 *   flag        : 国旗絵文字
 *   country     : 表示用の国・地域名
 *   thumbSvg    : カードサムネイル用 SVG 文字列（400×200 viewBox 推奨）
 *                 省略すると国旗絵文字のシンプルサムネイルになる
 *   region      : フィルター用地域ラベル（下記から選択）
 *                 "アフリカ" | "中南米" | "アジア" | "ヨーロッパ" | "中央アジア" | "カリブ海" | "オセアニア" | "北米"
 *   dateLabel   : カード表示用の日付文字列
 *   dateISO     : ISO 8601 形式の日付（SEO・ソート用）
 *   title       : 記事タイトル（完全版）
 *   description : SEO用メタディスクリプション（155文字以内推奨）
 *   excerpt     : カード表示用の抜粋（〜110文字）
 *   tags        : タグの配列 [{ cls: "タグCSSクラス", label: "表示名" }, ...]
 *                 cls は "culture" | "crime" | "animals" | "politics" | "food" のいずれか
 *   source      : 掲載元メディア名
 *   sourceUrl   : 掲載元URL
 */

"use strict";

const ARTICLES_DATA = [
  {
    id: 1,
    url: "article-01.html",
    flag: "🇧🇴",
    country: "ボリビア・エルアルト",
    region: "中南米",
    dateLabel: "2019.03.11",
    dateISO: "2019-03-11",
    title: "「空飛ぶチョリータ」——ボリビアの先住民族女性がボウラーハットと民族衣装で空中プロレスに挑む",
    description: "ボリビアの先住民族アイマラ族の女性レスラー「チョリータ」がボウラーハットと民族衣装のまま空中プロレスを披露。ナショナルジオグラフィックが2019年に報道し世界的な注目を集めた実話。",
    excerpt: "ボリビア先住民族の女性「チョリータ」がボウラーハットと民族衣装のまま空中プロレスを披露。ナショジオが世界に紹介した実話。",
    tags: [
      { cls: "culture", label: "文化" },
      { cls: "culture", label: "スポーツ" }
    ],
    source: "National Geographic",
    sourceUrl: "https://www.nationalgeographic.com/culture/article/flying-cholitas-indigenous-women-bolivia-wrestling",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#87CEEB"/>
          <polygon points="0,140 80,60 160,95 240,35 320,75 400,50 400,140" fill="#8B9D77"/>
          <polygon points="220,140 240,35 260,70 280,45 320,75 400,55 400,140" fill="#6B7E5E"/>
          <rect y="140" width="400" height="60" fill="#D4A96A"/>
          <!-- リング -->
          <rect x="50" y="90" width="300" height="4" fill="#E63946" rx="1"/>
          <rect x="50" y="108" width="300" height="4" fill="#E63946" rx="1"/>
          <rect x="50" y="126" width="300" height="4" fill="#E63946" rx="1"/>
          <rect x="48" y="85" width="8" height="60" fill="#8B6914" rx="2"/>
          <rect x="344" y="85" width="8" height="60" fill="#8B6914" rx="2"/>
          <rect x="50" y="140" width="300" height="20" fill="#4A90D9" rx="3"/>
          <!-- チョリータ1（左） -->
          <ellipse cx="135" cy="137" rx="38" ry="14" fill="#FF1493"/>
          <ellipse cx="135" cy="130" rx="32" ry="11" fill="#FF69B4"/>
          <rect x="121" y="105" width="28" height="28" fill="#9B59B6" rx="3"/>
          <circle cx="135" cy="100" r="14" fill="#C8A882"/>
          <ellipse cx="135" cy="88" rx="16" ry="5" fill="#2C1810"/>
          <rect x="122" y="83" width="26" height="9" fill="#2C1810" rx="2"/>
          <circle cx="127" cy="85" r="3" fill="#FF1493"/>
          <circle cx="135" cy="82" r="3" fill="#FFD700"/>
          <circle cx="143" cy="85" r="3" fill="#FF1493"/>
          <text x="135" y="105" text-anchor="middle" font-size="10">💪</text>
          <!-- チョリータ2（右、空中） -->
          <ellipse cx="268" cy="88" rx="32" ry="13" fill="#1565C0" transform="rotate(-18 268 88)"/>
          <ellipse cx="264" cy="82" rx="26" ry="10" fill="#1976D2" transform="rotate(-18 264 82)"/>
          <rect x="248" y="62" width="26" height="30" fill="#E53935" rx="3" transform="rotate(-12 248 62)"/>
          <circle cx="260" cy="58" r="14" fill="#8B5E3C"/>
          <ellipse cx="258" cy="46" rx="16" ry="5" fill="#2C1810" transform="rotate(-18 258 46)"/>
          <rect x="245" y="40" width="26" height="9" fill="#2C1810" rx="2" transform="rotate(-18 245 40)"/>
          <text x="262" y="64" text-anchor="middle" font-size="10">😱</text>
          <!-- 観客 -->
          <circle cx="35"  cy="160" r="10" fill="#5C3317"/>
          <text x="35" y="164" text-anchor="middle" font-size="8">🤩</text>
          <circle cx="365" cy="158" r="10" fill="#FDBCB4"/>
          <text x="365" y="162" text-anchor="middle" font-size="8">😲</text>
          <!-- 看板 -->
          <rect x="260" y="48" width="132" height="30" fill="#FFD700" rx="4"/>
          <text x="326" y="60" text-anchor="middle" font-size="8" fill="#333" font-weight="bold">チョリータ・レスリング</text>
          <text x="326" y="72" text-anchor="middle" font-size="7" fill="#555">毎週日曜エルアルト市</text>
        </svg>`
  },
  {
    id: 2,
    url: "article-02.html",
    flag: "🇳🇬",
    country: "ナイジェリア・クワラ州",
    region: "アフリカ",
    dateLabel: "2009.01.22",
    dateISO: "2009-01-22",
    title: "ナイジェリア警察、「強盗犯に変身した」山羊を逮捕・競売——容疑者「黒魔術で化けた」と住民が主張",
    description: "2009年ナイジェリアで強盗の容疑者が「山羊に変身した」と住民が警察に連行。警察は山羊を逮捕し競売にかけた。サハラ・リポーターズが報道した実際の事件。",
    excerpt: "2009年ナイジェリアで「強盗犯が山羊に変身」と住民が主張し山羊が警察に逮捕・競売。実際にあった黒魔術騒動。",
    tags: [
      { cls: "crime", label: "犯罪" },
      { cls: "animals", label: "動物" }
    ],
    source: "Sahara Reporters",
    sourceUrl: "https://saharareporters.com/2009/01/22/updated-nigeria-police-auction-robber-goat-2-champion",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#E8E0D0"/>
          <rect width="400" height="140" fill="#D8CCBC"/>
          <rect y="140" width="400" height="60" fill="#C0A878"/>
          <!-- 警察署看板 -->
          <rect x="130" y="12" width="140" height="32" fill="#006400" rx="4"/>
          <text x="200" y="24" text-anchor="middle" font-size="7.5" fill="white" font-weight="bold">NIGERIA POLICE FORCE</text>
          <text x="200" y="36" text-anchor="middle" font-size="6.5" fill="#90EE90">KWARA STATE</text>
          <!-- 山羊（中央） -->
          <ellipse cx="190" cy="110" rx="55" ry="32" fill="#F5F0E0"/>
          <ellipse cx="190" cy="110" rx="45" ry="26" fill="#EDE8D5"/>
          <ellipse cx="238" cy="90" rx="30" ry="24" fill="#F5F0E0"/>
          <ellipse cx="258" cy="95" rx="9"  ry="7"  fill="#DDD0B0"/>
          <circle cx="256" cy="92" r="2" fill="#777"/>
          <circle cx="262" cy="92" r="2" fill="#777"/>
          <circle cx="244" cy="85" r="4" fill="white"/>
          <circle cx="245" cy="85" r="2.5" fill="#333"/>
          <path d="M 226 80 Q 222 72 218 75" stroke="#C8B88A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <path d="M 236 78 Q 241 70 246 73" stroke="#C8B88A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <rect x="150" y="128" width="8" height="24" fill="#DDD0B0" rx="2"/>
          <rect x="165" y="130" width="8" height="22" fill="#DDD0B0" rx="2"/>
          <rect x="200" y="130" width="8" height="22" fill="#DDD0B0" rx="2"/>
          <rect x="215" y="128" width="8" height="24" fill="#DDD0B0" rx="2"/>
          <!-- 名札 -->
          <rect x="160" y="100" width="50" height="22" fill="#FFD700" rx="3"/>
          <text x="185" y="110" text-anchor="middle" font-size="6.5" fill="#333" font-weight="bold">被疑者 No.1</text>
          <text x="185" y="118" text-anchor="middle" font-size="5.5" fill="#555">ARMED ROBBERY</text>
          <text x="238" y="97" text-anchor="middle" font-size="10">😇</text>
          <!-- 刑事 -->
          <circle cx="330" cy="95" r="18" fill="#3D2215"/>
          <rect x="314" y="113" width="32" height="42" fill="#006400" rx="3"/>
          <ellipse cx="330" cy="82" rx="20" ry="6" fill="#004000"/>
          <rect x="320" y="76" width="20" height="10" fill="#004000" rx="2"/>
          <text x="330" y="102" text-anchor="middle" font-size="13">😕</text>
          <!-- 競売告知 -->
          <rect x="15" y="100" width="110" height="50" fill="white" stroke="#006400" stroke-width="1.5" rx="4"/>
          <text x="70" y="116" text-anchor="middle" font-size="7" fill="#006400" font-weight="bold">公売告知</text>
          <text x="70" y="128" text-anchor="middle" font-size="6.5" fill="#333">山羊（元・強盗被疑者）</text>
          <text x="70" y="140" text-anchor="middle" font-size="6.5" fill="#E63946">落札: 300ナイラ（約30円）</text>
          <text x="70" y="150" text-anchor="middle" font-size="9">🐐❓</text>
        </svg>`
  },
  {
    id: 3,
    url: "article-03.html",
    flag: "🇲🇻",
    country: "モルディブ・水深4メートル",
    region: "アジア",
    dateLabel: "2009.10.17",
    dateISO: "2009-10-17",
    title: "モルディブ内閣が水深4mの海中でスキューバ姿のまま閣議を開催——「地球温暖化で沈む前に世界に警告」",
    description: "2009年、沈みゆく島国モルディブの閣僚がスキューバダイビング装備で水深4mの海底に集まり閣議を開催。地球温暖化への抗議として世界に衝撃を与えた。CBC・NBC報道。",
    excerpt: "モルディブ内閣が水深4mの海中でスキューバ姿のまま閣議を開催。「地球温暖化で沈む前に世界へ警告」という異例の行動。CBC・NBC報道。",
    tags: [
      { cls: "politics", label: "政治" },
      { cls: "culture", label: "環境" }
    ],
    source: "CBC / NBC News",
    sourceUrl: "https://www.cbc.ca/news/world/maldives-cabinet-holds-underwater-meeting-1.864322",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sea2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#0094C6"/>
              <stop offset="100%" stop-color="#003A6B"/>
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#sea2)"/>
          <path d="M 0 5 Q 100 15 200 5 Q 300 -5 400 8" stroke="#48CAE4" stroke-width="3" fill="none" opacity="0.7"/>
          <!-- 海底 -->
          <ellipse cx="200" cy="197" rx="220" ry="12" fill="#D4B07A"/>
          <!-- 光の筋 -->
          <path d="M 80 0 L 70 200"  stroke="rgba(255,255,255,0.05)" stroke-width="20"/>
          <path d="M 230 0 L 220 200" stroke="rgba(255,255,255,0.06)" stroke-width="18"/>
          <!-- テーブル -->
          <ellipse cx="200" cy="160" rx="105" ry="28" fill="#3E2318"/>
          <ellipse cx="200" cy="155" rx="100" ry="24" fill="#4A2A1E"/>
          <!-- スキューバ閣僚5名 -->
          <ellipse cx="90"  cy="128" rx="14" ry="15" fill="#2C2C2C"/>
          <ellipse cx="90"  cy="128" rx="9"  ry="10" fill="#87CEEB" opacity="0.8"/>
          <rect x="76"  y="112" width="28" height="30" fill="#1565C0" rx="4"/>
          <circle cx="98"  cy="108" r="4" fill="rgba(255,255,255,0.4)" stroke="white" stroke-width="1"/>
          <circle cx="94"  cy="96"  r="2.5" fill="rgba(255,255,255,0.35)" stroke="white" stroke-width="1"/>
          <ellipse cx="148" cy="122" rx="14" ry="15" fill="#2C2C2C"/>
          <ellipse cx="148" cy="122" rx="9"  ry="10" fill="#87CEEB" opacity="0.8"/>
          <rect x="134" y="106" width="28" height="30" fill="#B71C1C" rx="4"/>
          <ellipse cx="200" cy="115" rx="16" ry="17" fill="#2C2C2C"/>
          <ellipse cx="200" cy="115" rx="11" ry="12" fill="#87CEEB" opacity="0.85"/>
          <rect x="184" y="98"  width="32" height="34" fill="#006400" rx="4"/>
          <ellipse cx="252" cy="122" rx="14" ry="15" fill="#2C2C2C"/>
          <ellipse cx="252" cy="122" rx="9"  ry="10" fill="#87CEEB" opacity="0.8"/>
          <rect x="238" y="106" width="28" height="30" fill="#6A1B9A" rx="4"/>
          <ellipse cx="310" cy="128" rx="14" ry="15" fill="#2C2C2C"/>
          <ellipse cx="310" cy="128" rx="9"  ry="10" fill="#87CEEB" opacity="0.8"/>
          <rect x="296" y="112" width="28" height="30" fill="#E65100" rx="4"/>
          <!-- ホワイトボード（大統領） -->
          <rect x="158" y="55" width="84" height="35" fill="white" rx="4" opacity="0.92"/>
          <text x="200" y="68" text-anchor="middle" font-size="7.5" fill="#003087" font-weight="bold">地球温暖化SOS</text>
          <text x="200" y="81" text-anchor="middle" font-size="6.5" fill="#E63946">モルディブは沈む！</text>
          <line x1="200" y1="90" x2="200" y2="98" stroke="#888" stroke-width="1.5" stroke-dasharray="2,2"/>
          <!-- 泡 -->
          <circle cx="210" cy="92" r="3.5" fill="rgba(255,255,255,0.4)" stroke="white" stroke-width="1"/>
          <circle cx="206" cy="80" r="2.5" fill="rgba(255,255,255,0.3)" stroke="white" stroke-width="1"/>
          <circle cx="318" cy="104" r="3" fill="rgba(255,255,255,0.35)" stroke="white" stroke-width="1"/>
          <circle cx="98"  cy="96"  r="2" fill="rgba(255,255,255,0.3)" stroke="white" stroke-width="0.8"/>
          <!-- 熱帯魚 -->
          <ellipse cx="350" cy="55" rx="16" ry="9" fill="#FFA726"/>
          <polygon points="364,55 376,48 376,62" fill="#FF8C00"/>
          <circle cx="342" cy="52" r="3" fill="white"/>
          <circle cx="342" cy="52" r="1.5" fill="#333"/>
        </svg>`
  },
  {
    id: 4,
    url: "article-04.html",
    flag: "🇵🇾",
    country: "パラグアイ・アスンシオン",
    region: "中南米",
    dateLabel: "2023.11.30",
    dateISO: "2023-11-30",
    title: "パラグアイ政府職員、実在しない「架空の国・カイラサ」と正式な協定書に署名して解雇される",
    description: "2023年、パラグアイの政府職員がインターネット上の自称「ヒンドゥー国家」カイラサと正式な協定を締結し、解雇された。France24が報道した実在しない国との国際条約事件。",
    excerpt: "2023年パラグアイの政府職員が「カイラサ」という架空の国と正式な協定書に署名し解雇された。实在しないインターネット国家との国際条約締結事件。France24報道。",
    tags: [
      { cls: "politics", label: "政治" },
      { cls: "crime", label: "外交" }
    ],
    source: "France24",
    sourceUrl: "https://www.france24.com/en/live-news/20231130-paraguay-official-sacked-after-dealings-with-fictitious-country",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#F5F0E8"/>
          <rect width="400" height="35" fill="#8B6914" opacity="0.35"/>
          <rect y="165" width="400" height="35" fill="#C8B090"/>
          <!-- パラグアイ国旗 -->
          <rect x="15" y="45" width="55" height="12" fill="#D52B1E"/>
          <rect x="15" y="57" width="55" height="12" fill="white"/>
          <rect x="15" y="69" width="55" height="12" fill="#009B3A"/>
          <line x1="15" y1="45" x2="15" y2="81" stroke="#555" stroke-width="1.5"/>
          <!-- カイラサの旗（架空） -->
          <rect x="330" y="45" width="55" height="36" fill="#FF6600" rx="2"/>
          <circle cx="357" cy="63" r="12" fill="#FFD700"/>
          <circle cx="357" cy="63" r="8"  fill="#FF6600"/>
          <text x="357" y="67" text-anchor="middle" font-size="8">✦</text>
          <text x="357" y="90" text-anchor="middle" font-size="6.5" fill="#888">KAILASA</text>
          <line x1="330" y1="45" x2="330" y2="84" stroke="#555" stroke-width="1.5"/>
          <!-- テーブルと書類 -->
          <rect x="80" y="88" width="240" height="12" fill="#5A3820" rx="3"/>
          <rect x="88" y="100" width="224" height="65" fill="#6B4530" rx="2"/>
          <rect x="130" y="92" width="140" height="80" fill="white" stroke="#ccc" rx="2"/>
          <text x="200" y="106" text-anchor="middle" font-size="7.5" fill="#003087" font-weight="bold">国際協定書</text>
          <text x="200" y="118" text-anchor="middle" font-size="6.5" fill="#333">パラグアイ × カイラサ</text>
          <text x="200" y="130" text-anchor="middle" font-size="6"   fill="#555">経済・文化協力協定</text>
          <text x="200" y="145" text-anchor="middle" font-size="6"   fill="#E63946">※カイラサは架空の国</text>
          <line x1="140" y1="155" x2="192" y2="155" stroke="#333" stroke-width="1"/>
          <text x="166" y="150" text-anchor="middle" font-size="5.5" fill="#aaa">署名（翌日辞任）</text>
          <!-- 高官（左） -->
          <circle cx="110" cy="82" r="16" fill="#FDBCB4"/>
          <rect x="96"  y="98"  width="28" height="40" fill="#1a237e" rx="3"/>
          <text x="110" y="91" text-anchor="middle" font-size="13">😄</text>
          <!-- カイラサ「代表」（右） -->
          <circle cx="290" cy="82" r="16" fill="#C8A882"/>
          <rect x="276" y="98"  width="28" height="40" fill="#8B0000" rx="3"/>
          <ellipse cx="290" cy="70" rx="18" ry="6" fill="#FF6600"/>
          <rect x="278" y="64"  width="24" height="9"  fill="#FF6600" rx="2"/>
          <text x="290" y="91" text-anchor="middle" font-size="13">😏</text>
        </svg>`
  },
  {
    id: 5,
    url: "article-05.html",
    flag: "🇿🇦",
    country: "南アフリカ・バードアイランド",
    region: "アフリカ",
    dateLabel: "2025.04.13",
    dateISO: "2025-04-13",
    title: "南アフリカでペンギンが固定されていない荷物からコックピットに侵入してヘリコプターを墜落させた",
    description: "2025年4月、南アフリカのバードアイランドでペンギンが荷物から脱走しヘリコプターのコックピットに侵入。操縦不能となり機体は墜落したが、パイロットと乗客は全員無事。Daily Maverick報道。",
    excerpt: "2025年4月、南アフリカでペンギンがヘリコプターのコックピットに侵入し墜落事故を引き起こした。パイロットと乗客は無事。Daily Maverick・CBS報道。",
    tags: [
      { cls: "animals", label: "動物" },
      { cls: "crime", label: "事故" }
    ],
    source: "Daily Maverick / CBS News",
    sourceUrl: "https://www.dailymaverick.co.za/article/2025-04-13-penguin-causes-helicopter-crash-bird-humans-okay/",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#87CEEB"/>
          <ellipse cx="100" cy="45" rx="55" ry="22" fill="white" opacity="0.9"/>
          <ellipse cx="300" cy="38" rx="52" ry="20" fill="white" opacity="0.8"/>
          <!-- 海 -->
          <rect y="148" width="400" height="52" fill="#006994"/>
          <rect y="144" width="400" height="8"  fill="#0077B6"/>
          <!-- 傾いたヘリコプター -->
          <ellipse cx="230" cy="105" rx="75" ry="25" fill="#CC4400" transform="rotate(18 230 105)"/>
          <ellipse cx="230" cy="100" rx="63" ry="20" fill="#E05520" transform="rotate(18 230 100)"/>
          <ellipse cx="260" cy="88"  rx="18" ry="13" fill="#87CEEB" opacity="0.8" transform="rotate(18 260 88)"/>
          <rect x="165" y="78" width="75" height="12" fill="#B03800" rx="3" transform="rotate(18 165 78)"/>
          <!-- 煙 -->
          <ellipse cx="198" cy="72" rx="14" ry="9" fill="#666" opacity="0.7"/>
          <ellipse cx="191" cy="60" rx="11" ry="8" fill="#777" opacity="0.6"/>
          <ellipse cx="185" cy="50" rx="9"  ry="7" fill="#888" opacity="0.5"/>
          <!-- ローター -->
          <line x1="155" y1="92" x2="308" y2="88" stroke="#555" stroke-width="5" transform="rotate(18 230 90)"/>
          <line x1="228" y1="68" x2="232" y2="112" stroke="#555" stroke-width="5" transform="rotate(18 230 90)"/>
          <!-- ペンギン（ヒーロー顔） -->
          <ellipse cx="340" cy="140" rx="22" ry="30" fill="#1A1A2E"/>
          <ellipse cx="340" cy="132" rx="16" ry="22" fill="white"/>
          <ellipse cx="340" cy="155" rx="11" ry="6" fill="#FF8C00"/>
          <circle cx="332" cy="125" r="4" fill="white"/>
          <circle cx="333" cy="125" r="2.5" fill="#333"/>
          <circle cx="348" cy="125" r="4" fill="white"/>
          <circle cx="349" cy="125" r="2.5" fill="#333"/>
          <ellipse cx="320" cy="148" rx="6" ry="14" fill="#1A1A2E" transform="rotate(-20 320 148)"/>
          <ellipse cx="360" cy="148" rx="6" ry="14" fill="#1A1A2E" transform="rotate(20 360 148)"/>
          <text x="340" y="133" text-anchor="middle" font-size="10">😇</text>
          <!-- 事故報告書 -->
          <rect x="14" y="45" width="130" height="82" fill="white" stroke="#333" stroke-width="1.5" rx="4"/>
          <rect x="14" y="45" width="130" height="22" fill="#333" rx="4"/>
          <rect x="14" y="61" width="130" height="6"  fill="#333"/>
          <text x="79" y="58" text-anchor="middle" font-size="7.5" fill="white" font-weight="bold">事故報告書</text>
          <text x="79" y="78" text-anchor="middle" font-size="7"   fill="#333">2025年4月13日</text>
          <text x="79" y="90" text-anchor="middle" font-size="7"   fill="#333">負傷者：0名</text>
          <text x="79" y="102" text-anchor="middle" font-size="7"  fill="#E63946" font-weight="bold">原因：ペンギン（未固定）</text>
          <text x="79" y="116" text-anchor="middle" font-size="9">🐧✈️💥</text>
        </svg>`
  },
  {
    id: 6,
    url: "article-06.html",
    flag: "🇪🇨",
    country: "エクアドル・ガラパゴス",
    region: "中南米",
    dateLabel: "2020.01.15",
    dateISO: "2020-01-15",
    title: "130歳のガラパゴスゾウガメ「ディエゴ」、800頭以上の子孫を残して種を救い引退——研究者「精力的すぎる」と驚嘆",
    description: "ガラパゴスのゾウガメ「ディエゴ」が60年間で800頭以上の子孫を残し、絶滅危機種を15頭から2000頭に回復させた。「種の救世主」として故郷のエスパニョーラ島へ帰還。ABCニュース・UNEP報道。",
    excerpt: "ガラパゴスのゾウガメ「ディエゴ」が800頭以上の子孫を残し絶滅危機種を15頭から2000頭に回復。「精力的すぎる」と研究者も驚嘆。ABCニュース・UNEP報道。",
    tags: [
      { cls: "animals", label: "動物" },
      { cls: "culture", label: "自然" }
    ],
    source: "ABC News / UNEP",
    sourceUrl: "https://abcnews.go.com/International/galapagos-giant-tortoise-sex-retires-saving-species/story?id=68231846",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#87CEEB"/>
          <rect y="148" width="400" height="52" fill="#0096C7"/>
          <rect y="144" width="400" height="8"  fill="#48CAE4"/>
          <!-- 島 -->
          <ellipse cx="200" cy="158" rx="185" ry="20" fill="#8B6914"/>
          <ellipse cx="200" cy="150" rx="178" ry="15" fill="#A07830"/>
          <!-- サボテン -->
          <rect x="42" y="100" width="10" height="55" fill="#5A7A2A" rx="3"/>
          <ellipse cx="47" cy="100" rx="17" ry="6" fill="#6B8E3A"/>
          <rect x="345" y="105" width="10" height="50" fill="#5A7A2A" rx="3"/>
          <ellipse cx="350" cy="105" rx="17" ry="6" fill="#6B8E3A"/>
          <!-- ディエゴ（中央の大きな亀） -->
          <ellipse cx="200" cy="138" rx="75" ry="46" fill="#4A5A1A"/>
          <ellipse cx="200" cy="132" rx="66" ry="40" fill="#556622"/>
          <!-- 甲羅模様 -->
          <polygon points="200,100 218,118 200,128 182,118" fill="#445518"/>
          <polygon points="162,118 182,118 188,138 165,142" fill="#445518"/>
          <polygon points="238,118 218,118 212,138 235,142" fill="#445518"/>
          <!-- 頭 -->
          <path d="M 262 128 Q 295 115 316 112" stroke="#8B7D3A" stroke-width="15" fill="none" stroke-linecap="round"/>
          <ellipse cx="323" cy="116" rx="22" ry="15" fill="#9B8D4A"/>
          <circle cx="329" cy="110" r="5.5" fill="#1A1A1A"/>
          <circle cx="331" cy="108" r="2.5" fill="white"/>
          <text x="316" y="120" text-anchor="middle" font-size="9">🦎</text>
          <!-- 足 -->
          <ellipse cx="148" cy="165" rx="24" ry="10" fill="#8B7D3A" transform="rotate(-20 148 165)"/>
          <ellipse cx="258" cy="167" rx="22" ry="9"  fill="#8B7D3A" transform="rotate(12 258 167)"/>
          <!-- 子亀たち -->
          <ellipse cx="90"  cy="155" rx="14" ry="9"  fill="#6B8B2A"/>
          <ellipse cx="115" cy="158" rx="12" ry="8"  fill="#7A9A3A"/>
          <ellipse cx="140" cy="155" rx="13" ry="8"  fill="#5A7A1A"/>
          <ellipse cx="260" cy="155" rx="13" ry="8"  fill="#7A9A3A"/>
          <ellipse cx="285" cy="158" rx="12" ry="8"  fill="#6B8B2A"/>
          <ellipse cx="310" cy="155" rx="13" ry="8"  fill="#5A7A1A"/>
          <!-- バッジ -->
          <rect x="148" y="118" width="105" height="28" fill="#FFD700" rx="5"/>
          <text x="200" y="128" text-anchor="middle" font-size="7.5" fill="#333" font-weight="bold">🏆 種の救世主 DIEGO</text>
          <text x="200" y="140" text-anchor="middle" font-size="7"   fill="#555">子孫800頭以上・130歳</text>
          <!-- 数字 -->
          <rect x="14" y="35" width="105" height="52" fill="rgba(255,255,255,0.9)" rx="5"/>
          <text x="66" y="52" text-anchor="middle" font-size="7.5" fill="#4A5A1A" font-weight="bold">現種の個体数</text>
          <text x="66" y="67" text-anchor="middle" font-size="16"  fill="#4A5A1A" font-weight="bold">2,000頭</text>
          <text x="66" y="80" text-anchor="middle" font-size="7"   fill="#888">（15頭から回復）</text>
        </svg>`
  },
  {
    id: 7,
    url: "article-07.html",
    flag: "🇬🇭",
    country: "ガーナ・クマシ",
    region: "アフリカ",
    dateLabel: "2020.04.24",
    dateISO: "2020-04-24",
    title: "「棺桶ダンス」ガーナの踊る棺桶担ぎ業者、コロナ禍で世界バズり——数億回再生のミーム動画の元祖",
    description: "ガーナの棺桶担ぎチームの陽気なダンス動画がコロナ禍の2020年に「無謀運転の末路」ミームとして世界中に拡散し数億回再生。リーダーのベンジャミン・アイドゥー氏の文化的背景をワシントン・ポストが解説。",
    excerpt: "ガーナの棺桶担ぎチームの動画がコロナ禍に世界バズり。「無謀運転の末路」ミームとして数億回再生。ベンジャミン・アイドゥー氏が率いるクマシの葬儀文化。ワシントン・ポスト報道。",
    tags: [
      { cls: "culture", label: "文化" }
    ],
    source: "Washington Post / OkayAfrica",
    sourceUrl: "https://www.okayafrica.com/ghanas-dancing-pallbearers-are-showing-the-world-how-to-grieve/",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#FFF8E7"/>
          <rect y="160" width="400" height="40" fill="#CC8844"/>
          <rect y="158" width="400" height="5"  fill="#AA6622"/>
          <!-- ヤシの木 -->
          <rect x="22" y="80" width="8" height="90" fill="#8B6914"/>
          <ellipse cx="26" cy="80" rx="30" ry="13" fill="#228B22" transform="rotate(-20 26 80)"/>
          <ellipse cx="26" cy="80" rx="28" ry="12" fill="#32CD32" transform="rotate(15 26 80)"/>
          <rect x="362" y="78" width="8" height="92" fill="#8B6914"/>
          <ellipse cx="366" cy="78" rx="28" ry="12" fill="#228B22" transform="rotate(20 366 78)"/>
          <ellipse cx="366" cy="78" rx="26" ry="11" fill="#32CD32" transform="rotate(-15 366 78)"/>
          <!-- 棺桶 -->
          <rect x="130" y="105" width="140" height="55" fill="#6B3A1F" rx="6"/>
          <rect x="135" y="110" width="130" height="45" fill="#8B4A2F" rx="5"/>
          <rect x="140" y="120" width="120" height="6" fill="#DAA520" rx="2"/>
          <rect x="140" y="146" width="120" height="6" fill="#DAA520" rx="2"/>
          <circle cx="200" cy="133" r="6" fill="#DAA520"/>
          <!-- 担ぎ手3名 -->
          <circle cx="100" cy="98"  r="16" fill="#2C1810"/>
          <rect x="86"  y="114" width="28" height="48" fill="#FF6B00" rx="4"/>
          <line x1="86"  y1="126" x2="66"  y2="108" stroke="#2C1810" stroke-width="8" stroke-linecap="round"/>
          <line x1="114" y1="122" x2="130" y2="108" stroke="#2C1810" stroke-width="8" stroke-linecap="round"/>
          <text x="100" y="104" text-anchor="middle" font-size="12">😄</text>
          <circle cx="200" cy="92"  r="16" fill="#3D2215"/>
          <text x="200" y="98" text-anchor="middle" font-size="12">🎉</text>
          <circle cx="300" cy="98"  r="16" fill="#2C1810"/>
          <rect x="286" y="114" width="28" height="48" fill="#FF6B00" rx="4"/>
          <line x1="286" y1="126" x2="268" y2="110" stroke="#2C1810" stroke-width="8" stroke-linecap="round"/>
          <line x1="314" y1="122" x2="332" y2="108" stroke="#2C1810" stroke-width="8" stroke-linecap="round"/>
          <text x="300" y="104" text-anchor="middle" font-size="12">💃</text>
          <!-- 音符 -->
          <text x="55"  y="65" font-size="24" fill="#E85D04" opacity="0.9">♪</text>
          <text x="320" y="60" font-size="20" fill="#9B59B6" opacity="0.9">♫</text>
          <text x="168" y="48" font-size="18" fill="#27AE60" opacity="0.8">♩</text>
          <text x="220" y="55" font-size="18" fill="#E85D04" opacity="0.7">♬</text>
          <!-- SNS数字 -->
          <rect x="55" y="120" width="62" height="30" fill="#1DA1F2" rx="4"/>
          <text x="86" y="132" text-anchor="middle" font-size="6.5" fill="white">再生回数</text>
          <text x="86" y="144" text-anchor="middle" font-size="9"   fill="white" font-weight="bold">数億回超</text>
        </svg>`
  },
  {
    id: 8,
    url: "article-08.html",
    flag: "🇧🇷",
    country: "ブラジル・サンパウロ",
    region: "中南米",
    dateLabel: "2016.10",
    dateISO: "2016-10-01",
    title: "サンパウロ市議会選挙でサイ「カカレコ」が100,000票超を獲得——人間候補を全員圧倒し1位、当選は無効に",
    description: "2016年ブラジル・サンパウロ市議会選挙で動物園のサイ「カカレコ」が10万票超を獲得し1位に。2位の人間候補の4倍の得票。「動物に被選挙権なし」と当選無効。The Daily Beast報道。",
    excerpt: "2016サンパウロ市議会選挙で動物園のサイ「カカレコ」が10万票超で1位に。2位の人間候補の4倍の差で圧勝するも「動物に被選挙権なし」で当選無効。",
    tags: [
      { cls: "politics", label: "選挙" },
      { cls: "animals", label: "動物" }
    ],
    source: "Wikipedia / The Daily Beast",
    sourceUrl: "https://en.wikipedia.org/wiki/Cacareco",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#F0F4E8"/>
          <rect width="400" height="18" fill="#009C3B"/>
          <rect y="18" width="400" height="7" fill="#FFDF00"/>
          <rect y="25" width="400" height="7" fill="#002776"/>
          <rect y="170" width="400" height="30" fill="#D4C8A8"/>
          <!-- バナー -->
          <rect x="40" y="38" width="320" height="28" fill="#002776" rx="4"/>
          <text x="200" y="52" text-anchor="middle" font-size="8" fill="white" font-weight="bold">SÃO PAULO ELEIÇÕES 1959</text>
          <text x="200" y="62" text-anchor="middle" font-size="6.5" fill="#FFDF00">サンパウロ市議会選挙</text>
          <!-- サイ（カカレコ） -->
          <ellipse cx="165" cy="130" rx="85" ry="52" fill="#B0A090"/>
          <ellipse cx="165" cy="123" rx="75" ry="44" fill="#C0B0A0"/>
          <ellipse cx="240" cy="108" rx="48" ry="38" fill="#B0A090"/>
          <ellipse cx="280" cy="112" rx="20" ry="14" fill="#A09080"/>
          <path d="M 292 103 Q 308 84 302 70 Q 298 60 292 68 Q 290 78 292 103" fill="#888"/>
          <circle cx="258" cy="100" r="7" fill="#3A2A1A"/>
          <circle cx="260" cy="98"  r="4" fill="#1A1A1A"/>
          <circle cx="261" cy="97"  r="1.5" fill="white"/>
          <rect x="90"  y="168" width="20" height="28" fill="#A09080" rx="4"/>
          <rect x="118" y="170" width="20" height="26" fill="#A09080" rx="4"/>
          <rect x="182" y="170" width="20" height="26" fill="#A09080" rx="4"/>
          <rect x="210" y="168" width="20" height="28" fill="#A09080" rx="4"/>
          <!-- タスキ -->
          <path d="M 108 108 Q 140 96 165 110 Q 175 155 150 170 Q 122 158 108 108 Z" fill="#009C3B" opacity="0.85"/>
          <text x="148" y="132" text-anchor="middle" font-size="7.5" fill="white" font-weight="bold" transform="rotate(-8 148 132)">CACARECO</text>
          <!-- 得票数ボード -->
          <rect x="14" y="72" width="130" height="90" fill="white" stroke="#002776" stroke-width="2" rx="5"/>
          <rect x="14" y="72" width="130" height="24" fill="#002776" rx="5"/>
          <rect x="14" y="90" width="130" height="6"  fill="#002776"/>
          <text x="79" y="86" text-anchor="middle" font-size="8" fill="white" font-weight="bold">最終得票数</text>
          <text x="22"  y="112" font-size="7" fill="#E63946" font-weight="bold">🦏 カカレコ（サイ）</text>
          <text x="136" y="112" text-anchor="end" font-size="9" fill="#E63946" font-weight="bold">100,000+</text>
          <rect x="62" y="100" width="34" height="12" fill="#FFD700" rx="2"/>
          <text x="79" y="110" text-anchor="middle" font-size="6" fill="#333" font-weight="bold">★1位★</text>
          <line x1="20" y1="118" x2="136" y2="118" stroke="#eee" stroke-width="1"/>
          <text x="22"  y="132" font-size="6.5" fill="#555">ドゥルバル・T.</text>
          <text x="136" y="132" text-anchor="end" font-size="8" fill="#555">26,000</text>
          <line x1="20" y1="138" x2="136" y2="138" stroke="#eee" stroke-width="1"/>
          <text x="22"  y="150" font-size="6.5" fill="#555">エジソン・P.</text>
          <text x="136" y="150" text-anchor="end" font-size="8" fill="#555">21,000</text>
          <line x1="20" y1="156" x2="136" y2="156" stroke="#eee" stroke-width="1"/>
          <text x="79" y="157" text-anchor="middle" font-size="6.5" fill="#888">（人間候補多数）</text>
        </svg>`
  },
  {
    id: 9,
    url: "article-09.html",
    flag: "🇯🇲",
    country: "ジャマイカ・キングストン",
    region: "カリブ海",
    dateLabel: "2014.01.20",
    dateISO: "2014-01-20",
    title: "インターネットのミーム通貨「ドージコイン」がジャマイカのボブスレーチームをソチ五輪に送り込んだ",
    description: "2014年、渡航費不足のジャマイカボブスレーチームに「ドージコイン」コミュニティが2日間で約3万ドルを寄付し、16年ぶりの冬季五輪出場を実現した。NPR・CoinDesk報道。",
    excerpt: "渡航費不足のジャマイカボブスレーチームにドージコインコミュニティが2日間で約3万ドルを寄付。16年ぶりのソチ五輪出場を実現させたミーム通貨の実話。NPR報道。",
    tags: [
      { cls: "culture", label: "文化" },
      { cls: "politics", label: "経済" }
    ],
    source: "NPR / CoinDesk",
    sourceUrl: "https://www.npr.org/sections/thetwo-way/2014/01/22/265060754/wow-dogecoin-other-donors-send-jamaican-bobsled-team-to-sochi",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#E8F4FC"/>
          <!-- 雪山 -->
          <polygon points="0,140 80,50 160,85 240,28 320,65 400,40 400,140" fill="white" opacity="0.95"/>
          <polygon points="0,140 80,50 160,85"     fill="#D0E8F8"/>
          <polygon points="160,85 240,28 320,65"   fill="#C8E0F0"/>
          <!-- 木々 -->
          <polygon points="25,115 35,88 45,115" fill="#2E5A1A"/>
          <polygon points="350,115 360,88 370,115" fill="#2E5A1A"/>
          <!-- コース -->
          <path d="M 0 130 Q 200 118 400 126" stroke="#A0C8E0" stroke-width="18" fill="none"/>
          <path d="M 0 130 Q 200 118 400 126" stroke="white" stroke-width="12" fill="none"/>
          <!-- ボブスレー（ジャマイカカラー） -->
          <path d="M 80 124 Q 200 112 320 122" stroke="#009B3A" stroke-width="14" fill="none" stroke-linecap="round"/>
          <path d="M 83 124 Q 200 114 318 122" stroke="#FED100" stroke-width="9"  fill="none" stroke-linecap="round"/>
          <path d="M 86 124 Q 200 115 316 122" stroke="#000000" stroke-width="5"  fill="none" stroke-linecap="round"/>
          <!-- 選手4名 -->
          <ellipse cx="275" cy="116" rx="12" ry="9" fill="#1A1A1A"/>
          <ellipse cx="275" cy="115" rx="8"  ry="6" fill="#FED100" opacity="0.9"/>
          <text x="275" y="120" text-anchor="middle" font-size="7">😤</text>
          <ellipse cx="250" cy="118" rx="12" ry="9" fill="#1A1A1A"/>
          <ellipse cx="215" cy="119" rx="12" ry="9" fill="#1A1A1A"/>
          <ellipse cx="180" cy="120" rx="12" ry="9" fill="#1A1A1A"/>
          <!-- スピードライン -->
          <line x1="45"  y1="121" x2="80"  y2="124" stroke="white" stroke-width="2.5" opacity="0.8"/>
          <line x1="38"  y1="127" x2="80"  y2="128" stroke="white" stroke-width="2" opacity="0.6"/>
          <!-- ドージコインロゴ -->
          <circle cx="336" cy="65" r="46" fill="#C8A500"/>
          <circle cx="336" cy="65" r="40" fill="#E0BB10"/>
          <ellipse cx="336" cy="60" rx="20" ry="18" fill="#F5D5A0"/>
          <circle cx="328" cy="55" r="4" fill="#333"/>
          <circle cx="329" cy="53" r="1.5" fill="white"/>
          <circle cx="344" cy="55" r="4" fill="#333"/>
          <circle cx="345" cy="53" r="1.5" fill="white"/>
          <ellipse cx="336" cy="68" rx="7" ry="5" fill="#E8A8A0"/>
          <text x="336" y="96" text-anchor="middle" font-size="11" fill="white" font-weight="bold">DOGE</text>
          <!-- 「wow」テキスト -->
          <text x="295" y="38" font-size="10" fill="#C8A500" font-weight="bold" transform="rotate(-10 295 38)">wow</text>
          <text x="375" y="42" font-size="9"  fill="#C8A500" transform="rotate(8 375 42)">such coin</text>
          <!-- 募金ボード -->
          <rect x="14" y="40" width="130" height="72" fill="white" stroke="#009B3A" stroke-width="1.5" rx="5"/>
          <rect x="14" y="40" width="130" height="20" fill="#009B3A" rx="5"/>
          <rect x="14" y="54" width="130" height="6"  fill="#009B3A"/>
          <text x="79" y="52" text-anchor="middle" font-size="8" fill="white" font-weight="bold">🇯🇲 ソチ五輪 募金</text>
          <text x="79" y="70" text-anchor="middle" font-size="7"  fill="#333">ドージコインで</text>
          <text x="79" y="82" text-anchor="middle" font-size="12" fill="#C8A500" font-weight="bold">$30,000</text>
          <text x="79" y="95" text-anchor="middle" font-size="6.5" fill="#555">2日間・26,000,000 DOGE</text>
          <text x="79" y="105" text-anchor="middle" font-size="6.5" fill="#009B3A">総額 $129,687 達成✓</text>
        </svg>`
  },
  {
    id: 10,
    url: "article-10.html",
    flag: "🇿🇼",
    country: "ジンバブエ・ハラレ",
    region: "アフリカ",
    dateLabel: "2009.01.16",
    dateISO: "2009-01-16",
    title: "額面30円の「100兆ドル紙幣」が今や数万円のコレクターズアイテムに——史上最大額面の紙幣、価値が逆転",
    description: "2009年に発行されたジンバブエ100兆ドル紙幣。発行当時の実勢価値は約30円だったが、現在はeBayで数千〜数万円のコレクターズアイテムに。年率89.7垓%のハイパーインフレが生んだ珍品。Wikipedia掲載。",
    excerpt: "2009年発行のジンバブエ100兆ドル紙幣。当時の価値は約30円だが今は高グレード品が数万円に。年率89.7垓%のハイパーインフレが生んだ逆転現象。Wikipedia掲載。",
    tags: [
      { cls: "politics", label: "経済" },
      { cls: "culture", label: "歴史" }
    ],
    source: "Wikipedia / Collectibles Currency",
    sourceUrl: "https://en.wikipedia.org/wiki/Zimbabwean_one_hundred_trillion_dollar_note",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#1A1A1A"/>
          <rect y="170" width="400" height="30" fill="#2C2010"/>
          <!-- スポットライト -->
          <path d="M 200 0 L 110 180 L 290 180 Z" fill="rgba(255,220,100,0.07)"/>
          <ellipse cx="200" cy="8" rx="18" ry="7" fill="#FFD700" opacity="0.85"/>
          <!-- 紙幣 -->
          <rect x="60" y="55" width="280" height="115" fill="#1A4A1A" rx="8" stroke="#DAA520" stroke-width="2"/>
          <rect x="66" y="61" width="268" height="103" fill="#1E5A1E" rx="6"/>
          <!-- 額面 -->
          <text x="200" y="90"  text-anchor="middle" font-size="8"  fill="#DAA520" font-weight="bold">RESERVE BANK OF ZIMBABWE</text>
          <text x="200" y="115" text-anchor="middle" font-size="26" fill="#FFD700" font-weight="bold">$100兆</text>
          <text x="200" y="132" text-anchor="middle" font-size="7"  fill="#DAA520">ONE HUNDRED TRILLION DOLLARS</text>
          <!-- ヴィクトリアの滝シルエット -->
          <rect x="72" y="142" width="50" height="28" fill="rgba(0,80,0,0.5)" rx="2"/>
          <path d="M 78 152 L 83 144 L 88 152 L 93 144 L 98 152 L 103 148 L 108 152 L 113 144 L 118 152" stroke="rgba(150,200,255,0.6)" stroke-width="1.5" fill="none"/>
          <!-- シリアル番号 -->
          <text x="80"  y="172" font-size="5.5" fill="#DAA520" opacity="0.7">AA 2008 ·· 001</text>
          <text x="316" y="172" text-anchor="end" font-size="5.5" fill="#DAA520" opacity="0.7">16 JAN 2009</text>
          <!-- 発行時 vs 現在 -->
          <rect x="14" y="35" width="100" height="62" fill="rgba(255,255,255,0.07)" rx="5" stroke="#888" stroke-width="1"/>
          <rect x="14" y="35" width="100" height="18" fill="rgba(100,100,100,0.5)" rx="5"/>
          <text x="64" y="47" text-anchor="middle" font-size="6.5" fill="white" font-weight="bold">2009年発行時</text>
          <text x="64" y="62" text-anchor="middle" font-size="6.5" fill="#aaa">実際の価値</text>
          <text x="64" y="76" text-anchor="middle" font-size="14"  fill="#E63946" font-weight="bold">0.30 USD</text>
          <text x="64" y="90" text-anchor="middle" font-size="6.5" fill="#888">（約30円）</text>
          <rect x="286" y="35" width="100" height="62" fill="rgba(255,215,0,0.1)" rx="5" stroke="#DAA520" stroke-width="1"/>
          <rect x="286" y="35" width="100" height="18" fill="rgba(218,165,32,0.4)" rx="5"/>
          <text x="336" y="47" text-anchor="middle" font-size="6.5" fill="white" font-weight="bold">現在の相場</text>
          <text x="336" y="62" text-anchor="middle" font-size="6.5" fill="#DAA520">高グレード品</text>
          <text x="336" y="76" text-anchor="middle" font-size="12"  fill="#FFD700" font-weight="bold">$500〜</text>
          <text x="336" y="90" text-anchor="middle" font-size="6.5" fill="#888">（数万円）</text>
          <!-- 価値逆転テキスト -->
          <rect x="128" y="35" width="144" height="30" fill="rgba(218,165,32,0.18)" rx="4" stroke="#DAA520" stroke-width="1"/>
          <text x="200" y="48" text-anchor="middle" font-size="7"   fill="#DAA520" font-weight="bold">★ 価値が逆転 ★</text>
          <text x="200" y="60" text-anchor="middle" font-size="6.5" fill="#FFD700">30円→数万円のアイテムに</text>
        </svg>`
  },
  {
    id: 11,
    url: "article-11.html",
    flag: "🇨🇴",
    country: "コロンビア",
    region: "中南米",
    dateLabel: "2021.05",
    dateISO: "2021-05-01",
    title: "麻薬王エスコバルのペットだったカバ4頭が野生化——30年で80頭超に増殖し、もはや手がつけられない",
    description: "麻薬王パブロ・エスコバルが連れてきたカバ4頭が1993年の彼の死後に野生化。天敵ゼロのコロンビアで30年間増殖し続け80頭以上に。科学者は警告するが地元では人気者扱い。BBC・ナショジオ報道。",
    excerpt: "麻薬王エスコバルが連れてきたカバ4頭が1993年の彼の死後に野生化し80頭超に増殖。科学者は「生態系崩壊」と警告するが地元では人気キャラ扱い。BBC・ナショジオ報道。",
    tags: [
      { cls: "animals", label: "動物" },
      { cls: "crime", label: "犯罪" }
    ],
    source: "BBC / National Geographic",
    sourceUrl: "https://www.bbc.com/news/science-environment-57170110",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#4A9B4A"/>
          <rect width="400" height="80" fill="#87CEEB"/>
          <ellipse cx="50"  cy="72" rx="45" ry="32" fill="#388E3C"/>
          <ellipse cx="140" cy="66" rx="52" ry="36" fill="#2E7D32"/>
          <ellipse cx="260" cy="68" rx="50" ry="34" fill="#388E3C"/>
          <ellipse cx="365" cy="64" rx="44" ry="30" fill="#2E7D32"/>
          <rect y="105" width="400" height="62" fill="#4FC3F7"/>
          <rect y="101" width="400" height="10" fill="#81D4FA" opacity="0.6"/>
          <rect y="162" width="400" height="38" fill="#5D4037"/>
          <!-- カバ1（大） -->
          <ellipse cx="115" cy="124" rx="50" ry="24" fill="#708090"/>
          <ellipse cx="115" cy="117" rx="44" ry="19" fill="#8898A8"/>
          <ellipse cx="152" cy="111" rx="28" ry="20" fill="#708090"/>
          <ellipse cx="168" cy="107" rx="16" ry="10" fill="#607080"/>
          <ellipse cx="173" cy="106" rx="3" ry="2.5" fill="#4A5A6A"/>
          <ellipse cx="179" cy="105" rx="3" ry="2.5" fill="#4A5A6A"/>
          <circle cx="157" cy="108" r="4" fill="#333"/>
          <!-- カバ2（小・陸上） -->
          <ellipse cx="280" cy="168" rx="40" ry="19" fill="#708090"/>
          <ellipse cx="280" cy="162" rx="35" ry="15" fill="#8898A8"/>
          <ellipse cx="313" cy="157" rx="23" ry="17" fill="#708090"/>
          <ellipse cx="328" cy="153" rx="13" ry="9" fill="#607080"/>
          <circle cx="318" cy="154" r="3.5" fill="#333"/>
          <!-- カバ3（背景） -->
          <ellipse cx="205" cy="120" rx="32" ry="14" fill="#8090A0" opacity="0.75"/>
          <ellipse cx="228" cy="113" rx="20" ry="13" fill="#8090A0" opacity="0.75"/>
          <!-- カウンター -->
          <rect x="8" y="8" width="118" height="58" fill="rgba(255,255,255,0.93)" rx="5" stroke="#E63946" stroke-width="1.5"/>
          <rect x="8" y="8" width="118" height="19" fill="#E63946" rx="5"/>
          <text x="67" y="21" text-anchor="middle" font-size="6.5" fill="white" font-weight="bold">🦛 エスコバルのカバ</text>
          <text x="67" y="36" text-anchor="middle" font-size="6.5" fill="#555">1993年：4頭 → 2021年</text>
          <text x="67" y="52" text-anchor="middle" font-size="16" fill="#1A237E" font-weight="bold">80頭以上</text>
          <text x="67" y="62" text-anchor="middle" font-size="5.5" fill="#888">増殖中・手がつけられない</text>
        </svg>`
  },
  {
    id: 12,
    url: "article-12.html",
    flag: "🇸🇻",
    country: "エルサルバドル",
    region: "中南米",
    dateLabel: "2021.06.09",
    dateISO: "2021-06-09",
    title: "エルサルバドルが世界初「ビットコインを法定通貨」に制定——全国民に30ドル配布もATMが故障してIMFが仰天",
    description: "2021年6月、エルサルバドルが世界初のビットコイン法定通貨国に。全国民に30ドル相当のBTCを配布したがATM初日から大量故障し、IMFが「深刻な懸念」を表明。BBCが速報。",
    excerpt: "2021年6月、エルサルバドルが世界初のビットコイン法定通貨国に。チーボアプリ・全国ATM整備も初日に大量故障。IMFは「深刻な懸念」。BBCが速報。",
    tags: [
      { cls: "politics", label: "経済" },
      { cls: "culture", label: "テクノロジー" }
    ],
    source: "BBC News / Al Jazeera",
    sourceUrl: "https://www.bbc.com/news/business-57398640",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#E3F2FD"/>
          <rect width="400" height="62" fill="#87CEEB"/>
          <rect x="135" y="62" width="130" height="100" fill="#ECEFF1" stroke="#B0BEC5" stroke-width="1.5"/>
          <rect x="142" y="69" width="116" height="93" fill="#F5F5F5"/>
          <rect x="146" y="67" width="9" height="96" fill="#CFD8DC"/>
          <rect x="166" y="67" width="9" height="96" fill="#CFD8DC"/>
          <rect x="186" y="67" width="9" height="96" fill="#CFD8DC"/>
          <rect x="206" y="67" width="9" height="96" fill="#CFD8DC"/>
          <rect x="226" y="67" width="9" height="96" fill="#CFD8DC"/>
          <rect x="246" y="67" width="9" height="96" fill="#CFD8DC"/>
          <ellipse cx="200" cy="63" rx="28" ry="22" fill="#FFD700"/>
          <ellipse cx="200" cy="61" rx="23" ry="18" fill="#FFC107"/>
          <!-- ビットコインロゴ -->
          <circle cx="200" cy="118" r="34" fill="#F7931A"/>
          <circle cx="200" cy="118" r="28" fill="#FF9800"/>
          <text x="200" y="129" text-anchor="middle" font-size="26" fill="white" font-weight="bold">₿</text>
          <!-- 国旗 -->
          <rect x="184" y="16" width="32" height="22" fill="#1565C0"/>
          <rect x="184" y="24" width="32" height="8" fill="white"/>
          <rect x="198" y="10" width="4" height="8" fill="#8D6E63"/>
          <rect y="158" width="400" height="42" fill="#8D6E63"/>
          <!-- IMF -->
          <circle cx="48" cy="170" r="14" fill="#FDBCB4"/>
          <rect x="36" y="184" width="24" height="12" fill="#1A237E" rx="2"/>
          <text x="48" y="177" text-anchor="middle" font-size="12">😱</text>
          <rect x="68" y="155" width="115" height="26" fill="rgba(255,255,255,0.93)" rx="4" stroke="#ccc"/>
          <text x="125" y="166" text-anchor="middle" font-size="6" fill="#1A237E" font-weight="bold">「深刻な懸念を表明する」</text>
          <text x="125" y="176" text-anchor="middle" font-size="5.5" fill="#555">— IMF</text>
          <rect x="240" y="155" width="152" height="34" fill="rgba(255,255,255,0.93)" rx="4" stroke="#E63946"/>
          <text x="316" y="168" text-anchor="middle" font-size="7" fill="#E63946" font-weight="bold">★ 世界初 ★</text>
          <text x="316" y="181" text-anchor="middle" font-size="6.5" fill="#333">全国民に$30 BTC配布</text>
        </svg>`
  },
  {
    id: 13,
    url: "article-13.html",
    flag: "🇪🇸",
    country: "スペイン・バレンシア州ブニョル",
    region: "ヨーロッパ",
    dateLabel: "毎年8月最終水曜日",
    dateISO: "1944-08-01",
    title: "「ラ・トマティーナ」——1時間で145,000kgのトマトを街中に投げ合うスペインの祭り、起源は偶然の喧嘩",
    description: "毎年8月最終水曜日、スペイン・バレンシア州ブニョル村で2万人が145,000kgのトマトを1時間で投げ合う世界最大の食べ物バトル「ラ・トマティーナ」。起源は1944年の偶発的な口論だった。",
    excerpt: "毎年8月最終水曜日、スペイン・ブニョル村で2万人が145,000kgのトマトを1時間投げ合う世界最大の食べ物バトル。1944年の偶然の口論が起源。Wikipedia・BBC掲載。",
    tags: [
      { cls: "culture", label: "文化" },
      { cls: "food", label: "食" }
    ],
    source: "Wikipedia / BBC Travel",
    sourceUrl: "https://en.wikipedia.org/wiki/La_Tomatina",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#E53935"/>
          <rect x="0"   y="28" width="62"  height="172" fill="#F5E6C8"/>
          <rect x="18"  y="50" width="24"  height="32" fill="#90CAF9" stroke="#1565C0" stroke-width="1"/>
          <rect x="338" y="28" width="62"  height="172" fill="#F5E6C8"/>
          <rect x="354" y="50" width="24"  height="32" fill="#90CAF9" stroke="#1565C0" stroke-width="1"/>
          <!-- 飛ぶトマト -->
          <circle cx="80"  cy="32"  r="14" fill="#C62828" stroke="#8B0000" stroke-width="1.5"/>
          <circle cx="85"  cy="28"  r="5"  fill="rgba(255,255,255,0.15)"/>
          <text x="74"   y="20"  font-size="8" fill="#388E3C">✿</text>
          <circle cx="185" cy="18"  r="17" fill="#E53935" stroke="#C62828" stroke-width="1.5"/>
          <text x="178"  y="6"   font-size="9" fill="#388E3C">✿</text>
          <circle cx="285" cy="25"  r="15" fill="#EF5350" stroke="#B71C1C" stroke-width="1.5"/>
          <text x="278"  y="13"  font-size="8" fill="#388E3C">✿</text>
          <circle cx="340" cy="16"  r="13" fill="#C62828" stroke="#8B0000" stroke-width="1.5"/>
          <circle cx="130" cy="72"  r="12" fill="#E53935" stroke="#C62828" stroke-width="1.5"/>
          <circle cx="310" cy="65"  r="13" fill="#EF5350" stroke="#B71C1C" stroke-width="1.5"/>
          <!-- 参加者 -->
          <circle cx="100" cy="140" r="20" fill="#B71C1C"/>
          <circle cx="100" cy="134" r="17" fill="#FDBCB4"/>
          <text x="100" y="141" text-anchor="middle" font-size="14">😂</text>
          <rect x="82"  y="158" width="36" height="38" fill="#C62828" rx="3"/>
          <circle cx="200" cy="132" r="22" fill="#C62828"/>
          <circle cx="200" cy="126" r="18" fill="#FDBCB4"/>
          <text x="200" y="133" text-anchor="middle" font-size="16">🍅</text>
          <rect x="182" y="150" width="36" height="42" fill="#B71C1C" rx="3"/>
          <circle cx="300" cy="138" r="20" fill="#B71C1C"/>
          <circle cx="300" cy="132" r="17" fill="#FDBCB4"/>
          <text x="300" y="139" text-anchor="middle" font-size="14">🤣</text>
          <rect x="282" y="156" width="36" height="40" fill="#C62828" rx="3"/>
          <rect y="165" width="400" height="35" fill="#8B0000"/>
          <!-- データ -->
          <rect x="65" y="82" width="112" height="44" fill="rgba(255,255,255,0.9)" rx="4"/>
          <text x="121" y="97" text-anchor="middle" font-size="7" fill="#C62828" font-weight="bold">145,000 kg のトマト</text>
          <text x="121" y="110" text-anchor="middle" font-size="7" fill="#555">わずか1時間で投げ合う</text>
          <text x="121" y="121" text-anchor="middle" font-size="6.5" fill="#888">毎年8月 最終水曜日</text>
        </svg>`
  },
  {
    id: 14,
    url: "article-14.html",
    flag: "🇵🇭",
    country: "フィリピン・セブ",
    region: "アジア",
    dateLabel: "2020.04",
    dateISO: "2020-04-01",
    title: "コロナ外出禁止令を守らせるためにドラキュラとゾンビに変装した警察官が夜間巡回——「法律より怖いものを見せる」",
    description: "2020年4月、フィリピン・セブ州ラプラプ市警察がコロナ外出禁止令違反者を取り締まるためドラキュラとゾンビに変装して夜間巡回。「法律より怖いものを見せる」作戦がReutersを通じ世界に配信。",
    excerpt: "フィリピン・セブ州ラプラプ市警察がコロナ外出禁止令違反者にドラキュラとゾンビで対抗。「法律より怖いものを見せる」作戦がReuters経由で世界へ。2020年4月。",
    tags: [
      { cls: "crime", label: "治安" },
      { cls: "culture", label: "文化" }
    ],
    source: "Reuters / BBC News",
    sourceUrl: "https://www.reuters.com/article/us-health-coronavirus-philippines-undead/philippine-police-dress-as-vampires-to-enforce-coronavirus-curfew-idUSKCN21S0TS",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#0D1B2A"/>
          <circle cx="360" cy="30" r="26" fill="#FFF9C4" opacity="0.9"/>
          <circle cx="372" cy="20" r="22" fill="#0D1B2A"/>
          <circle cx="40"  cy="18" r="2" fill="white" opacity="0.8"/>
          <circle cx="110" cy="10" r="1.5" fill="white" opacity="0.7"/>
          <circle cx="210" cy="22" r="2" fill="white" opacity="0.6"/>
          <circle cx="290" cy="8"  r="1.5" fill="white" opacity="0.8"/>
          <rect x="0"  y="90" width="55"  height="110" fill="#1A2A3A"/>
          <rect x="60" y="105" width="42" height="95"  fill="#162030"/>
          <rect x="300" y="94" width="50" height="106" fill="#1A2A3A"/>
          <rect x="355" y="102" width="45" height="98" fill="#162030"/>
          <rect x="8"  y="106" width="12" height="14" fill="#FFF176" opacity="0.5"/>
          <rect x="30" y="120" width="12" height="14" fill="#FFF176" opacity="0.4"/>
          <rect x="306" y="112" width="12" height="14" fill="#FFF176" opacity="0.5"/>
          <rect y="164" width="400" height="36" fill="#263238"/>
          <rect y="176" width="400" height="3" fill="#FFEB3B" opacity="0.5"/>
          <!-- ドラキュラ警察官 -->
          <path d="M 175 148 L 142 195 L 208 195 Z" fill="#B71C1C"/>
          <rect x="152" y="150" width="46" height="46" fill="#1A1A1A" rx="3"/>
          <rect x="160" y="154" width="28" height="26" fill="white" rx="2"/>
          <ellipse cx="175" cy="140" rx="21" ry="25" fill="#EEEEEE"/>
          <ellipse cx="166" cy="136" rx="6" ry="5" fill="white"/>
          <ellipse cx="184" cy="136" rx="6" ry="5" fill="white"/>
          <circle cx="167" cy="137" r="4" fill="#B71C1C"/>
          <circle cx="185" cy="137" r="4" fill="#B71C1C"/>
          <circle cx="168" cy="136" r="2" fill="#1A1A1A"/>
          <circle cx="186" cy="136" r="2" fill="#1A1A1A"/>
          <rect x="170" y="150" width="3" height="7" fill="white" rx="1"/>
          <rect x="177" y="150" width="3" height="7" fill="white" rx="1"/>
          <path d="M 168 118 Q 175 102 182 118 L 182 140 Q 175 130 168 140 Z" fill="#1A1A1A"/>
          <circle cx="163" cy="166" r="6" fill="#FFD700"/>
          <text x="163" y="170" text-anchor="middle" font-size="4.5" fill="#333" font-weight="bold">PNP</text>
          <!-- 外出禁止サイン -->
          <rect x="58" y="136" width="72" height="46" fill="#F44336" rx="4" stroke="#B71C1C" stroke-width="1.5"/>
          <text x="94" y="151" text-anchor="middle" font-size="7.5" fill="white" font-weight="bold">外出禁止令</text>
          <text x="94" y="163" text-anchor="middle" font-size="7" fill="#FFEB3B">PM8〜AM5</text>
          <text x="94" y="175" text-anchor="middle" font-size="6.5" fill="white">違反→ドラキュラ遭遇</text>
          <!-- 逃げる市民 -->
          <circle cx="320" cy="162" r="16" fill="#FDBCB4"/>
          <rect x="306" y="178" width="28" height="20" fill="#FF5722" rx="2"/>
          <text x="320" y="169" text-anchor="middle" font-size="13">😱</text>
          <rect x="224" y="136" width="78" height="26" fill="rgba(255,255,255,0.9)" rx="4"/>
          <text x="263" y="148" text-anchor="middle" font-size="6.5" fill="#CC0000" font-weight="bold">Reuters 配信</text>
          <text x="263" y="158" text-anchor="middle" font-size="6" fill="#333">2020年4月</text>
        </svg>`
  },
  {
    id: 15,
    url: "article-15.html",
    flag: "🇹🇲",
    country: "トルクメニスタン",
    region: "中央アジア",
    dateLabel: "2018〜継続中",
    dateISO: "2018-09-01",
    title: "大統領令「国中の車を白くせよ」——白大理石の首都アシガバットに黒い車を乗り入れると当局に嫌がらせされる謎の国",
    description: "トルクメニスタンの大統領が「白は幸運の色」として首都アシガバットの車を全部白くさせる非公式命令を発動。黒い車を持つ市民は当局に嫌がらせされ、やむなく塗り替えた。BBC・ガーディアンが報道。",
    excerpt: "トルクメニスタンの大統領が首都の車を全部白くさせる非公式命令を発動。黒い車のオーナーは当局に嫌がらせされ市民は塗り替えた。世界一奇妙な独裁国家の実態。BBC・ガーディアン報道。",
    tags: [
      { cls: "politics", label: "政治" },
      { cls: "culture", label: "文化" }
    ],
    source: "BBC News / The Guardian",
    sourceUrl: "https://www.bbc.com/news/world-asia-45463027",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#E8F4FD"/>
          <rect width="400" height="62" fill="#87CEEB"/>
          <polygon points="0,62 55,18 115,48 175,8 235,38 295,12 355,36 400,20 400,62" fill="#B0BEC5"/>
          <rect x="150" y="62" width="100" height="105" fill="white" stroke="#E0E0E0" stroke-width="1.5"/>
          <rect x="157" y="69" width="86"  height="98"  fill="#FAFAFA"/>
          <rect x="161" y="67" width="8"   height="102" fill="#ECEFF1"/>
          <rect x="180" y="67" width="8"   height="102" fill="#ECEFF1"/>
          <rect x="199" y="67" width="8"   height="102" fill="#ECEFF1"/>
          <rect x="218" y="67" width="8"   height="102" fill="#ECEFF1"/>
          <rect x="237" y="67" width="8"   height="102" fill="#ECEFF1"/>
          <ellipse cx="200" cy="63" rx="28" ry="22" fill="#FFD700"/>
          <ellipse cx="200" cy="61" rx="23" ry="17" fill="#FFC107"/>
          <rect y="160" width="400" height="40" fill="#CFD8DC"/>
          <rect y="156" width="400" height="8"  fill="#B0BEC5"/>
          <rect x="30"  y="173" width="38" height="3" fill="white" opacity="0.6"/>
          <rect x="108" y="173" width="38" height="3" fill="white" opacity="0.6"/>
          <rect x="186" y="173" width="38" height="3" fill="white" opacity="0.6"/>
          <rect x="264" y="173" width="38" height="3" fill="white" opacity="0.6"/>
          <rect x="342" y="173" width="38" height="3" fill="white" opacity="0.6"/>
          <!-- 白い車1 -->
          <rect x="24"  y="162" width="60" height="26" fill="white" stroke="#E0E0E0" stroke-width="1.5" rx="5"/>
          <rect x="32"  y="165" width="44" height="15" fill="#F5F5F5" rx="3"/>
          <rect x="35"  y="167" width="17" height="9" fill="#B3D9F5" rx="2" opacity="0.9"/>
          <circle cx="40" cy="190" r="7" fill="#666"/>
          <circle cx="40" cy="190" r="4" fill="#999"/>
          <circle cx="78" cy="190" r="7" fill="#666"/>
          <circle cx="78" cy="190" r="4" fill="#999"/>
          <!-- 白い車2 -->
          <rect x="178" y="160" width="64" height="28" fill="white" stroke="#E0E0E0" stroke-width="1.5" rx="5"/>
          <rect x="186" y="163" width="48" height="17" fill="#F5F5F5" rx="3"/>
          <rect x="189" y="165" width="19" height="10" fill="#B3D9F5" rx="2" opacity="0.9"/>
          <circle cx="193" cy="190" r="7" fill="#666"/>
          <circle cx="193" cy="190" r="4" fill="#999"/>
          <circle cx="236" cy="190" r="7" fill="#666"/>
          <circle cx="236" cy="190" r="4" fill="#999"/>
          <!-- 黒い車（禁止） -->
          <rect x="308" y="163" width="56" height="24" fill="#212121" rx="4" stroke="#E63946" stroke-width="1.5"/>
          <rect x="315" y="166" width="42" height="14" fill="#333" rx="3"/>
          <circle cx="318" cy="189" r="6" fill="#1A1A1A"/>
          <circle cx="356" cy="189" r="6" fill="#1A1A1A"/>
          <line x1="310" y1="162" x2="320" y2="172" stroke="#E63946" stroke-width="2.5"/>
          <line x1="320" y1="162" x2="310" y2="172" stroke="#E63946" stroke-width="2.5"/>
          <!-- 大統領の言葉 -->
          <rect x="8" y="8" width="136" height="50" fill="rgba(255,255,255,0.93)" rx="5" stroke="#FFD700" stroke-width="1.5"/>
          <text x="76" y="22" text-anchor="middle" font-size="6.5" fill="#333" font-weight="bold">「白は幸運の色」</text>
          <text x="76" y="34" text-anchor="middle" font-size="6"   fill="#555">大統領令：首都の車は</text>
          <text x="76" y="45" text-anchor="middle" font-size="6"   fill="#555">すべて白くすること</text>
          <text x="76" y="54" text-anchor="middle" font-size="5.5" fill="#888">— BBC / Guardian</text>
        </svg>`
  },
  {
    id: 16,
    url: "article-16.html",
    flag: "🇵🇪",
    country: "ペルー・クスコ",
    region: "中南米",
    dateLabel: "毎年12月25日",
    dateISO: "2018-12-25",
    title: "クリスマスに隣人と素手で殴り合い恨みを晴らす——ペルーのアンデス先住民族の祭り「タカナクイ」",
    description: "ペルー・クスコ県チュンビルカスで毎年クリスマス（12月25日）に開催される先住民族ケチュア族の祭り「タカナクイ」。その年の恨みを素手格闘でリセットし、翌日から友人として再出発する紛争解決文化。",
    excerpt: "ペルー・チュンビルカス県のケチュア族が毎年クリスマスに開催する「タカナクイ」。その年の恨みを素手の格闘でリセットし翌日から友人として再出発。Vice・BBCが「世界一奇妙なクリスマス」と報道。",
    tags: [
      { cls: "culture", label: "文化" }
    ],
    source: "Vice / BBC News",
    sourceUrl: "https://www.vice.com/en/article/takanakuy-the-peruvian-christmas-tradition-of-settling-scores-with-fist-fights",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#BBDEFB"/>
          <polygon points="0,108 60,38 120,68 180,22 240,52 300,16 360,42 400,26 400,108" fill="white"/>
          <polygon points="55,38 48,64 72,64" fill="white" opacity="0.7"/>
          <polygon points="180,22 170,52 195,52" fill="white" opacity="0.7"/>
          <rect y="108" width="400" height="92" fill="#8B7355"/>
          <rect y="108" width="400" height="22" fill="#5D8A3C" opacity="0.6"/>
          <circle cx="200" cy="158" r="68" fill="rgba(255,255,255,0.1)" stroke="#FFD700" stroke-width="2" stroke-dasharray="8 4"/>
          <!-- 見物人シルエット -->
          <circle cx="133" cy="118" r="12" fill="#5D4037"/>
          <circle cx="162" cy="112" r="12" fill="#4A3728"/>
          <circle cx="238" cy="112" r="12" fill="#5D4037"/>
          <circle cx="267" cy="118" r="12" fill="#4A3728"/>
          <!-- 戦闘者1 -->
          <path d="M 148 168 L 128 198 L 168 198 Z" fill="#E91E63"/>
          <rect x="132" y="148" width="32" height="24" fill="#C2185B" rx="2"/>
          <rect x="136" y="134" width="26" height="20" fill="#1565C0" rx="2"/>
          <ellipse cx="148" cy="128" rx="16" ry="18" fill="#4CAF50"/>
          <ellipse cx="148" cy="128" rx="11" ry="13" fill="#FDBCB4"/>
          <text x="148" y="134" text-anchor="middle" font-size="11">😤</text>
          <line x1="164" y1="144" x2="186" y2="154" stroke="#FDBCB4" stroke-width="8" stroke-linecap="round"/>
          <!-- 戦闘者2 -->
          <path d="M 252 168 L 232 198 L 272 198 Z" fill="#FF5722"/>
          <rect x="236" y="148" width="32" height="24" fill="#E64A19" rx="2"/>
          <rect x="240" y="134" width="26" height="20" fill="#8B0000" rx="2"/>
          <ellipse cx="252" cy="128" rx="16" ry="18" fill="#FF9800"/>
          <ellipse cx="252" cy="128" rx="11" ry="13" fill="#FDBCB4"/>
          <text x="252" y="134" text-anchor="middle" font-size="11">😠</text>
          <line x1="236" y1="144" x2="214" y2="154" stroke="#FDBCB4" stroke-width="8" stroke-linecap="round"/>
          <text x="200" y="162" text-anchor="middle" font-size="26" opacity="0.9">💥</text>
          <rect x="8" y="8" width="140" height="70" fill="rgba(255,255,255,0.93)" rx="5" stroke="#E91E63" stroke-width="1.5"/>
          <rect x="8" y="8" width="140" height="22" fill="#E91E63" rx="5"/>
          <text x="78" y="22" text-anchor="middle" font-size="7.5" fill="white" font-weight="bold">🥊 タカナクイ</text>
          <text x="78" y="40" text-anchor="middle" font-size="7" fill="#333">毎年 12月25日</text>
          <text x="78" y="53" text-anchor="middle" font-size="7" fill="#E91E63" font-weight="bold">クリスマスに殴り合い</text>
          <text x="78" y="65" text-anchor="middle" font-size="6.5" fill="#555">恨みをリセットして新年へ</text>
          <text x="78" y="74" text-anchor="middle" font-size="6" fill="#888">ペルー・クスコ県</text>
        </svg>`
  },
  {
    id: 17,
    url: "article-17.html",
    flag: "🇬🇹",
    country: "グアテマラ",
    region: "中南米",
    dateLabel: "2015.10.25",
    dateISO: "2015-10-25",
    title: "「政治経験ゼロ」のコメディアン俳優ジミー・モラレスが得票率67%で大統領選を圧勝——スローガンは「腐敗もしていないし、泥棒でもない」",
    description: "2015年10月、グアテマラの国民的コメディアン俳優ジミー・モラレス氏が政治経験ゼロで大統領決選投票を67%の得票率で圧勝。前大統領の汚職逮捕直後の選挙で「芸人の方がまし」と民意が爆発。BBC速報。",
    excerpt: "グアテマラのコメディアン俳優ジミー・モラレス氏が政治経験ゼロで大統領選を67%の得票率で圧勝。スローガン「腐敗もせず泥棒でもない」が刺さった。前大統領汚職逮捕直後の選挙。BBC・Reuters速報。",
    tags: [
      { cls: "politics", label: "政治" },
      { cls: "culture", label: "文化" }
    ],
    source: "BBC News / Reuters",
    sourceUrl: "https://www.bbc.com/news/world-latin-america-34618382",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#F1F8E9"/>
          <rect width="400" height="14" fill="#4A90D9"/>
          <rect y="186" width="400" height="14" fill="#4A90D9"/>
          <rect x="110" y="14" width="180" height="172" fill="rgba(255,255,255,0.3)"/>
          <rect x="98"  y="48" width="204" height="122" fill="#E8F5E9" stroke="#A5D6A7" stroke-width="1.5"/>
          <rect x="105" y="55" width="190" height="115" fill="#F1F8E9"/>
          <rect x="109" y="53" width="10" height="120" fill="#C8E6C9"/>
          <rect x="133" y="53" width="10" height="120" fill="#C8E6C9"/>
          <rect x="157" y="53" width="10" height="120" fill="#C8E6C9"/>
          <rect x="181" y="53" width="10" height="120" fill="#C8E6C9"/>
          <rect x="205" y="53" width="10" height="120" fill="#C8E6C9"/>
          <rect x="229" y="53" width="10" height="120" fill="#C8E6C9"/>
          <rect x="253" y="53" width="10" height="120" fill="#C8E6C9"/>
          <rect x="277" y="53" width="10" height="120" fill="#C8E6C9"/>
          <rect x="96" y="46" width="208" height="10" fill="#81C784"/>
          <rect x="185" y="18" width="30" height="30" fill="#A5D6A7"/>
          <circle cx="200" cy="30" r="10" fill="white" stroke="#81C784" stroke-width="1.5"/>
          <line x1="200" y1="30" x2="200" y2="23" stroke="#333" stroke-width="1.5"/>
          <line x1="200" y1="30" x2="206" y2="30" stroke="#333" stroke-width="1.5"/>
          <!-- 人物 -->
          <rect x="175" y="118" width="50" height="54" fill="#1565C0" rx="3"/>
          <line x1="175" y1="120" x2="225" y2="170" stroke="#4A90D9" stroke-width="7" opacity="0.9"/>
          <ellipse cx="200" cy="110" rx="20" ry="24" fill="#FDBCB4"/>
          <path d="M 182 98 Q 200 84 218 98 L 218 115 Q 200 105 182 115 Z" fill="#3E2723"/>
          <circle cx="191" cy="108" r="4" fill="white"/>
          <circle cx="209" cy="108" r="4" fill="white"/>
          <circle cx="192" cy="109" r="2.5" fill="#333"/>
          <circle cx="210" cy="109" r="2.5" fill="#333"/>
          <path d="M 191 120 Q 200 130 209 120" stroke="#333" stroke-width="2" fill="none"/>
          <rect x="215" y="124" width="8" height="16" fill="#555" rx="4"/>
          <ellipse cx="219" cy="122" rx="7" ry="8" fill="#333"/>
          <!-- 得票グラフ -->
          <rect x="8" y="38" width="80" height="92" fill="white" rx="5" stroke="#4A90D9" stroke-width="1.5"/>
          <rect x="8" y="38" width="80" height="20" fill="#4A90D9" rx="5"/>
          <text x="48" y="52" text-anchor="middle" font-size="7" fill="white" font-weight="bold">得票率</text>
          <rect x="18" y="68" width="14" height="54" fill="#E63946" rx="2"/>
          <text x="25" y="66" text-anchor="middle" font-size="7" fill="#E63946" font-weight="bold">67%</text>
          <text x="25" y="130" text-anchor="middle" font-size="5.5" fill="#888">モラレス</text>
          <rect x="54" y="96" width="14" height="26" fill="#90A4AE" rx="2"/>
          <text x="61" y="94" text-anchor="middle" font-size="7" fill="#555">33%</text>
          <text x="61" y="130" text-anchor="middle" font-size="5.5" fill="#888">対立候補</text>
          <!-- スローガン -->
          <rect x="308" y="38" width="84" height="52" fill="rgba(255,255,255,0.95)" rx="5" stroke="#FFC107" stroke-width="1.5"/>
          <text x="350" y="52" text-anchor="middle" font-size="6"   fill="#333" font-weight="bold">スローガン</text>
          <text x="350" y="64" text-anchor="middle" font-size="6"   fill="#555">「腐敗もしておらず</text>
          <text x="350" y="75" text-anchor="middle" font-size="6"   fill="#555">　泥棒でもない」</text>
          <text x="350" y="85" text-anchor="middle" font-size="5.5" fill="#888">政治経験：ゼロ</text>
        </svg>`
  },
  {
    id: 18,
    url: "article-18.html",
    flag: "🇲🇽",
    country: "メキシコ・オアハカ",
    region: "中南米",
    dateLabel: "2013（FAO推薦）",
    dateISO: "2013-05-13",
    title: "国連「昆虫を食べましょう」報告書にオアハカ人「え、今さら？うちは2000年前から食べてるけど」——バッタ料理「チャプリネス」が世界デビュー",
    description: "2013年に国連FAOが昆虫食を世界に推薦した際、メキシコ・オアハカ州の人々の反応は「今さら？2000年前から食べてるけど」だった。バッタ料理「チャプリネス」は今や世界の高級レストランでも供される。",
    excerpt: "2013年にFAOが昆虫食を世界推薦した際、オアハカ人の反応は「今さら？2000年前から食べてるけど」。バッタ料理「チャプリネス」は今や世界の高級レストランでも。FAO・NYTimes報道。",
    tags: [
      { cls: "food", label: "食" },
      { cls: "culture", label: "文化" }
    ],
    source: "FAO / New York Times",
    sourceUrl: "https://www.fao.org/news/story/en/item/185551/icode/",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#FFF8E7"/>
          <rect width="400" height="30" fill="#E64A19"/>
          <text x="200" y="20" text-anchor="middle" font-size="10" fill="white" font-weight="bold">MERCADO DE OAXACA</text>
          <rect y="170" width="400" height="30" fill="#D7CCC8"/>
          <!-- バッタの大皿 -->
          <ellipse cx="200" cy="148" rx="118" ry="42" fill="#E0E0E0" stroke="#BDBDBD" stroke-width="2"/>
          <ellipse cx="200" cy="140" rx="105" ry="34" fill="#F5F5F5"/>
          <ellipse cx="200" cy="122" rx="92" ry="32" fill="#8D6E18"/>
          <ellipse cx="175" cy="114" rx="52" ry="18" fill="#A0831A"/>
          <ellipse cx="226" cy="112" rx="46" ry="16" fill="#8D6E18"/>
          <ellipse cx="200" cy="106" rx="66" ry="20" fill="#B5951E"/>
          <!-- バッタ個体 -->
          <ellipse cx="126" cy="118" rx="16" ry="6" fill="#7A5C10" transform="rotate(-12 126 118)"/>
          <line x1="118" y1="114" x2="104" y2="104" stroke="#7A5C10" stroke-width="2"/>
          <line x1="134" y1="115" x2="146" y2="104" stroke="#7A5C10" stroke-width="2"/>
          <ellipse cx="274" cy="116" rx="15" ry="6" fill="#6A4E0E" transform="rotate(8 274 116)"/>
          <line x1="266" y1="111" x2="252" y2="101" stroke="#6A4E0E" stroke-width="2"/>
          <line x1="282" y1="113" x2="296" y2="102" stroke="#6A4E0E" stroke-width="2"/>
          <circle cx="116" cy="142" r="12" fill="#8BC34A"/>
          <circle cx="116" cy="142" r="8" fill="#CDDC39"/>
          <ellipse cx="288" cy="142" rx="14" ry="8" fill="#EF5350"/>
          <!-- FAOパネル -->
          <rect x="8" y="36" width="128" height="84" fill="white" rx="5" stroke="#1565C0" stroke-width="1.5"/>
          <rect x="8" y="36" width="128" height="22" fill="#1565C0" rx="5"/>
          <text x="72" y="51" text-anchor="middle" font-size="7" fill="white" font-weight="bold">🌐 国連FAO 2013</text>
          <text x="72" y="70" text-anchor="middle" font-size="7" fill="#1565C0" font-weight="bold">「昆虫を食べよう！」</text>
          <text x="72" y="82" text-anchor="middle" font-size="6.5" fill="#555">タンパク質：牛肉の2倍</text>
          <text x="72" y="94" text-anchor="middle" font-size="6.5" fill="#555">CO₂：牛の1/100</text>
          <text x="72" y="106" text-anchor="middle" font-size="6.5" fill="#555">→ 世界に衝撃</text>
          <!-- オアハカ人の反応 -->
          <rect x="264" y="36" width="128" height="84" fill="white" rx="5" stroke="#FF9800" stroke-width="1.5"/>
          <rect x="264" y="36" width="128" height="22" fill="#FF9800" rx="5"/>
          <text x="328" y="51" text-anchor="middle" font-size="7" fill="white" font-weight="bold">🇲🇽 オアハカ人</text>
          <circle cx="292" cy="76" r="13" fill="#FDBCB4"/>
          <text x="292" y="81" text-anchor="middle" font-size="11">🤷</text>
          <text x="336" y="72" text-anchor="middle" font-size="7" fill="#333" font-weight="bold">「今さら？」</text>
          <text x="336" y="84" text-anchor="middle" font-size="6.5" fill="#555">2000年前から</text>
          <text x="336" y="96" text-anchor="middle" font-size="6.5" fill="#555">普通に食べてる</text>
        </svg>`
  },
  {
    id: 19,
    url: "article-19.html",
    flag: "🇦🇷",
    country: "アルゼンチン",
    region: "中南米",
    dateLabel: "2014.12.18",
    dateISO: "2014-12-18",
    title: "ブエノスアイレスの裁判所がオランウータン「サンドラ」に「非人間的人格」を認定——史上初、動物が法的権利を獲得",
    description: "2014年12月、アルゼンチン・ブエノスアイレスの裁判所が動物園のオランウータン「サンドラ」に「非人間的人格」としての法的地位を認定。史上初めて動物が法的権利を持つ存在に。BBC・ガーディアン報道。",
    excerpt: "2014年12月、アルゼンチンの裁判所が動物園のオランウータン「サンドラ」に世界初の「法的人格」を認定。BBCとガーディアンが「法学史の転換点」として報道。",
    tags: [
      { cls: "animals", label: "動物" },
      { cls: "politics", label: "法律" }
    ],
    source: "BBC News / The Guardian",
    sourceUrl: "https://www.bbc.com/news/world-latin-america-30505671",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#F3E5D0"/>
          <rect width="400" height="52" fill="#DEB887"/>
          <rect x="170" y="8" width="60" height="36" fill="#74ACDF"/>
          <rect x="170" y="21" width="60" height="12" fill="white"/>
          <circle cx="200" cy="27" r="5" fill="#F6B40E"/>
          <rect x="138" y="80" width="124" height="125" fill="#A0783A" rx="3"/>
          <rect x="145" y="87" width="110" height="118" fill="#B8964A" rx="2"/>
          <rect x="151" y="93" width="98" height="50"  fill="#A0783A" rx="2"/>
          <rect x="116" y="125" width="168" height="62" fill="#5D4037" rx="4"/>
          <rect x="123" y="132" width="154" height="49" fill="#6D4C41" rx="3"/>
          <rect x="146" y="116" width="108" height="34" fill="rgba(255,255,255,0.9)" rx="3" stroke="#8B6914" stroke-width="1"/>
          <text x="200" y="128" text-anchor="middle" font-size="6.5" fill="#333" font-weight="bold">判決：「非人間的人格」</text>
          <text x="200" y="139" text-anchor="middle" font-size="6"   fill="#1565C0">法的権利の認定</text>
          <text x="200" y="148" text-anchor="middle" font-size="5.5" fill="#888">2014年12月18日</text>
          <ellipse cx="200" cy="100" rx="17" ry="20" fill="#FDBCB4"/>
          <path d="M 185 89 Q 200 76 215 89 L 215 105 Q 200 95 185 105 Z" fill="#1A1A1A"/>
          <text x="200" y="107" text-anchor="middle" font-size="13">🧐</text>
          <!-- オランウータン -->
          <ellipse cx="65"  cy="142" rx="36" ry="42" fill="#8B4513"/>
          <ellipse cx="65"  cy="136" rx="30" ry="35" fill="#A0522D"/>
          <path d="M 32 122 Q 16 150 10 175" stroke="#8B4513" stroke-width="13" fill="none" stroke-linecap="round"/>
          <path d="M 98 122 Q 114 150 120 175" stroke="#8B4513" stroke-width="13" fill="none" stroke-linecap="round"/>
          <ellipse cx="65"  cy="112" rx="27" ry="28" fill="#D2691E"/>
          <ellipse cx="65"  cy="120" rx="19" ry="16" fill="#F4A460"/>
          <circle cx="55"  cy="107" r="6" fill="#3A1A0A"/>
          <circle cx="75"  cy="107" r="6" fill="#3A1A0A"/>
          <circle cx="56"  cy="105" r="3" fill="#1A0A00"/>
          <circle cx="76"  cy="105" r="3" fill="#1A0A00"/>
          <circle cx="57"  cy="104" r="1.5" fill="white"/>
          <circle cx="77"  cy="104" r="1.5" fill="white"/>
          <path d="M 57 120 Q 65 128 73 120" stroke="#7A3B0A" stroke-width="2" fill="none"/>
          <ellipse cx="47"  cy="106" rx="8" ry="10" fill="#8B4513"/>
          <ellipse cx="83"  cy="106" rx="8" ry="10" fill="#8B4513"/>
          <rect x="44" y="152" width="42" height="16" fill="white" stroke="#1565C0" stroke-width="1" rx="3"/>
          <text x="65" y="161" text-anchor="middle" font-size="6.5" fill="#1565C0" font-weight="bold">SANDRA 法的権利保持者</text>
          <!-- ニュース -->
          <rect x="270" y="80" width="122" height="110" fill="white" rx="5" stroke="#E63946" stroke-width="1.5"/>
          <rect x="270" y="80" width="122" height="20" fill="#E63946" rx="5"/>
          <text x="331" y="93" text-anchor="middle" font-size="7" fill="white" font-weight="bold">世界の反応</text>
          <text x="280" y="112" font-size="6.5" fill="#333" font-weight="bold">BBC：</text>
          <text x="280" y="123" font-size="6"   fill="#555">「法学史上の転換点」</text>
          <text x="280" y="138" font-size="6.5" fill="#333" font-weight="bold">Guardian：</text>
          <text x="280" y="149" font-size="6"   fill="#555">「哲学者の夢が現実に」</text>
          <text x="331" y="165" text-anchor="middle" font-size="6.5" fill="#E63946" font-weight="bold">史上初の「動物の法人格」</text>
          <text x="331" y="178" text-anchor="middle" font-size="5.5" fill="#888">→フロリダの保護区へ移送</text>
        </svg>`
  },
  {
    id: 20,
    url: "article-20.html",
    flag: "🇹🇼",
    country: "台湾・全土",
    region: "アジア",
    dateLabel: "2021.03",
    dateISO: "2021-03-17",
    title: "「名前に鮭の字があれば寿司食べ放題」キャンペーンに台湾人が本気で改名——役所「もうやめてください」と公式苦言",
    description: "2021年3月、スシロー台湾の「鮭魚の名がある人は食べ放題」キャンペーンに便乗して本名を「鮭魚」に改名した台湾市民が100件超。内政部が正式に苦言を呈する事態に。BBCが報道。",
    excerpt: "スシロー台湾の「鮭の字があれば食べ放題」キャンペーンに便乗し本名を「鮭魚」に改名した台湾市民が100件超。役所が「もうやめて」と公式苦言。BBC・ジャパン・タイムズ報道。",
    tags: [
      { cls: "food", label: "食" },
      { cls: "culture", label: "文化" }
    ],
    source: "BBC News",
    sourceUrl: "https://www.bbc.com/news/world-asia-56395657",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#FFF9F0"/>
          <rect width="400" height="26" fill="#E53935"/>
          <text x="200" y="17" text-anchor="middle" font-size="9" fill="white" font-weight="bold">壽司郎（スシロー）台湾 🐟</text>
          <rect y="83" width="400" height="5" fill="#BDBDBD" rx="2"/>
          <!-- 寿司皿 -->
          <ellipse cx="80"  cy="81" rx="26" ry="8" fill="white" stroke="#E0E0E0" stroke-width="1"/>
          <rect x="62"  y="72" width="36" height="9" fill="#FFF9C4" rx="2"/>
          <ellipse cx="80"  cy="72" rx="15" ry="4.5" fill="#FF8C42"/>
          <rect x="66"  y="68" width="28" height="6" fill="white" rx="1"/>
          <ellipse cx="200" cy="81" rx="26" ry="8" fill="white" stroke="#E0E0E0" stroke-width="1"/>
          <rect x="182" y="72" width="36" height="9" fill="#FFF9C4" rx="2"/>
          <ellipse cx="200" cy="72" rx="15" ry="4.5" fill="#FF8C42"/>
          <rect x="186" y="68" width="28" height="6" fill="white" rx="1"/>
          <ellipse cx="330" cy="81" rx="26" ry="8" fill="white" stroke="#E0E0E0" stroke-width="1"/>
          <rect x="312" y="72" width="36" height="9" fill="#FFF9C4" rx="2"/>
          <ellipse cx="330" cy="72" rx="15" ry="4.5" fill="#FF8C42"/>
          <rect x="316" y="68" width="28" height="6" fill="white" rx="1"/>
          <rect y="108" width="400" height="15" fill="#8B6914"/>
          <rect y="105" width="400" height="6"  fill="#A0783A"/>
          <!-- 改名した人物1 -->
          <circle cx="90"  cy="137" r="16" fill="#F5DEB3"/>
          <rect x="75"  y="153" width="30" height="35" fill="#E91E63" rx="3"/>
          <text x="90"  y="144" text-anchor="middle" font-size="13">😁</text>
          <rect x="26" y="130" width="55" height="32" fill="white" rx="3" stroke="#4CAF50" stroke-width="1.5"/>
          <text x="53" y="141" text-anchor="middle" font-size="5.5" fill="#555">姓名</text>
          <text x="53" y="151" text-anchor="middle" font-size="6" fill="#E53935" font-weight="bold">陳 鮭魚</text>
          <text x="53" y="159" text-anchor="middle" font-size="4.5" fill="#888">旧：陳 偉盛</text>
          <!-- 人物2 -->
          <circle cx="200" cy="136" r="15" fill="#FDBCB4"/>
          <rect x="186" y="151" width="28" height="34" fill="#2196F3" rx="3"/>
          <text x="200" y="143" text-anchor="middle" font-size="12">🤩</text>
          <!-- 役所職員 -->
          <circle cx="330" cy="137" r="16" fill="#FDBCB4"/>
          <rect x="315" y="153" width="30" height="35" fill="#455A64" rx="3"/>
          <text x="330" y="144" text-anchor="middle" font-size="13">😩</text>
          <rect x="186" y="158" width="206" height="34" fill="rgba(255,255,255,0.97)" rx="5" stroke="#E53935" stroke-width="1.5"/>
          <polygon points="328,173 322,177 328,181" fill="white" stroke="#E53935"/>
          <text x="289" y="172" text-anchor="middle" font-size="6.5" fill="#E53935" font-weight="bold">「改名申請が殺到しています」</text>
          <text x="289" y="184" text-anchor="middle" font-size="6"   fill="#555">「もうやめてください」— 内政部</text>
        </svg>`
  },
  {
    id: 21,
    url: "article-21.html",
    flag: "🇸🇦",
    country: "サウジアラビア",
    region: "アジア",
    dateLabel: "2021.01",
    dateISO: "2021-01-17",
    title: "「ラクダ美人コンテスト」でボトックス注射・整形手術のラクダ40頭以上が失格——賞金総額10億円超の大会で獣医が不正を摘発",
    description: "2021年1月、サウジアラビアの「キング・アブドゥルアジーズ・ラクダフェスティバル」でラクダ40頭以上がボトックス注射や整形手術で失格処分。賞金総額10億円超の大会で獣医が不正を摘発。BBCが報道。",
    excerpt: "2021年1月、サウジアラビアのラクダフェスティバルで40頭以上がボトックス注射・整形手術で失格。賞金10億円超の大会で獣医が不正摘発。BBC・Reuters報道。",
    tags: [
      { cls: "animals", label: "動物" },
      { cls: "culture", label: "文化" }
    ],
    source: "BBC News / Reuters",
    sourceUrl: "https://www.bbc.com/news/world-middle-east-55547665",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#FDF0C0"/>
          <rect width="400" height="110" fill="#87CEEB"/>
          <path d="M 0 125 Q 100 105 200 118 Q 300 130 400 112 L 400 200 L 0 200 Z" fill="#E8C84A"/>
          <path d="M 0 140 Q 100 125 200 132 Q 300 140 400 128 L 400 200 L 0 200 Z" fill="#D4A832"/>
          <!-- テント -->
          <polygon points="160,38 240,38 240,96 160,96" fill="#1E8A30" opacity="0.9"/>
          <polygon points="143,38 257,38 200,12" fill="#16701F"/>
          <!-- ラクダ（主役） -->
          <ellipse cx="220" cy="142" rx="56" ry="28" fill="#C8A26A"/>
          <ellipse cx="220" cy="136" rx="48" ry="22" fill="#D4AE78"/>
          <!-- コブ -->
          <ellipse cx="210" cy="115" rx="20" ry="24" fill="#C0985E"/>
          <!-- 首・頭 -->
          <path d="M 254 130 Q 278 115 292 108" stroke="#C8A26A" stroke-width="16" fill="none" stroke-linecap="round"/>
          <ellipse cx="298" cy="104" rx="22" ry="16" fill="#C8A26A"/>
          <!-- 誇張した唇（ボトックス） -->
          <ellipse cx="312" cy="110" rx="18" ry="12" fill="#E8B090"/>
          <!-- 失格スタンプ -->
          <rect x="248" y="118" width="78" height="35" fill="#E63946" rx="4" transform="rotate(-10 248 118)"/>
          <text x="287" y="136" text-anchor="middle" font-size="14" fill="white" font-weight="bold" transform="rotate(-10 287 136)">失格!</text>
          <!-- 注射器 -->
          <rect x="328" y="96" width="28" height="6" fill="#E0E0E0" rx="2" transform="rotate(-35 328 96)"/>
          <rect x="348" y="84" width="5" height="12" fill="#BDBDBD" transform="rotate(-35 348 84)"/>
          <!-- 得票・賞金 -->
          <rect x="8" y="30" width="110" height="68" fill="white" rx="4" stroke="#1E8A30" stroke-width="1.5"/>
          <rect x="8" y="30" width="110" height="20" fill="#1E8A30" rx="4"/>
          <text x="63" y="44" text-anchor="middle" font-size="7" fill="white" font-weight="bold">🐪 ラクダ美人コンテスト</text>
          <text x="63" y="62" text-anchor="middle" font-size="7" fill="#555">賞金総額 約10億円</text>
          <text x="63" y="76" text-anchor="middle" font-size="12" fill="#E63946" font-weight="bold">43頭以上失格</text>
          <text x="63" y="91" text-anchor="middle" font-size="6.5" fill="#888">ボトックス注射で</text>
          <!-- 足 -->
          <rect x="174" y="164" width="10" height="26" fill="#B89055" rx="4"/>
          <rect x="192" y="166" width="10" height="24" fill="#B89055" rx="4"/>
          <rect x="238" y="166" width="10" height="24" fill="#B89055" rx="4"/>
          <rect x="255" y="164" width="10" height="26" fill="#B89055" rx="4"/>
        </svg>`
  },
  {
    id: 22,
    url: "article-22.html",
    flag: "🇫🇮",
    country: "フィンランド・ハイノラ",
    region: "ヨーロッパ",
    dateLabel: "2000年〜毎年夏",
    dateISO: "2000-08-01",
    title: "参加費は「古い携帯電話1台」——フィンランドが2000年から毎年開催する「世界携帯電話投げ選手権」、世界記録は約102m",
    description: "フィンランドのハイノラ市で2000年から毎年開催される「世界携帯電話投げ選手権」。参加費は古い携帯電話1台で、飛距離部門と芸術点部門がある。世界記録は約102m。BBCも報道した実在の競技。",
    excerpt: "フィンランド・ハイノラ市で2000年から毎年夏に開催される「世界携帯電話投げ選手権」。参加費は古い携帯1台。飛距離部門・芸術点部門があり世界記録は102.68m。BBCが報道。",
    tags: [
      { cls: "culture", label: "文化" },
      { cls: "culture", label: "スポーツ" }
    ],
    source: "BBC News / Wikipedia",
    sourceUrl: "https://en.wikipedia.org/wiki/Mobile_phone_throwing",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#B8D4E8"/>
          <rect width="400" height="110" fill="#87CEEB"/>
          <!-- 森 -->
          <polygon points="0,110 22,60 44,110" fill="#2E5A1A"/>
          <polygon points="24,110 44,65 64,110" fill="#3A6E22"/>
          <polygon points="336,110 356,62 376,110" fill="#2E5A1A"/>
          <polygon points="358,110 378,65 398,110" fill="#3A6E22"/>
          <!-- 湖 -->
          <rect x="0" y="110" width="400" height="90" fill="#5BA3C9"/>
          <ellipse cx="200" cy="120" rx="180" ry="6" fill="rgba(255,255,255,0.15)"/>
          <!-- 投げる選手 -->
          <rect x="170" y="76" width="22" height="34" fill="#003580" rx="3"/>
          <line x1="170" y1="82" x2="192" y2="82" stroke="#87CEEB" stroke-width="3"/>
          <circle cx="181" cy="70" r="12" fill="#FDBCB4"/>
          <line x1="192" y1="83" x2="222" y2="55" stroke="#FDBCB4" stroke-width="7" stroke-linecap="round"/>
          <!-- 飛ぶ携帯 -->
          <rect x="220" y="50" width="12" height="7" fill="#333" rx="2" transform="rotate(-40 220 50)"/>
          <!-- 軌跡 -->
          <path d="M 226 50 Q 290 18 340 72" stroke="#888" stroke-width="1.5" stroke-dasharray="5 3" fill="none"/>
          <!-- 距離ライン -->
          <line x1="181" y1="112" x2="340" y2="112" stroke="#E63946" stroke-width="1.5" stroke-dasharray="4 2"/>
          <rect x="218" y="100" width="88" height="16" fill="#E63946" rx="3"/>
          <text x="262" y="112" text-anchor="middle" font-size="7.5" fill="white" font-weight="bold">世界記録 102.68m</text>
          <!-- フィンランド国旗 -->
          <rect x="8" y="8" width="44" height="28" fill="white" rx="2" stroke="#ccc" stroke-width="1"/>
          <rect x="8" y="20" width="44" height="5" fill="#003580"/>
          <rect x="22" y="8" width="5" height="28" fill="#003580"/>
          <!-- 参加費 -->
          <rect x="300" y="8" width="92" height="50" fill="rgba(255,255,255,0.9)" rx="4" stroke="#003580" stroke-width="1.5"/>
          <text x="346" y="22" text-anchor="middle" font-size="6.5" fill="#003580" font-weight="bold">参加費</text>
          <text x="346" y="36" text-anchor="middle" font-size="10" fill="#333" font-weight="bold">古い携帯</text>
          <text x="346" y="48" text-anchor="middle" font-size="10" fill="#333" font-weight="bold">1台だけ</text>
        </svg>`
  },
  {
    id: 23,
    url: "article-23.html",
    flag: "🇦🇺",
    country: "オーストラリア・タスマニア",
    region: "オセアニア",
    dateLabel: "2009.07",
    dateISO: "2009-07-01",
    title: "タスマニア州議会「ワラビーがケシを食べてハイになり、ミステリーサークルを作っている」と公式証言——農家も「確かに円を描いて歩いてる」",
    description: "2009年、オーストラリア・タスマニア州の議会でケシ農場のオーナーが「ワラビーがケシを食べてハイになり、ミステリーサークルを作っている」と証言。BBCが世界に報道した実際の出来事。",
    excerpt: "2009年、タスマニア州議会でワラビーがケシを食べてハイになりミステリーサークルを作ると公式証言。世界のモルヒネ生産量50%を担うタスマニアならでは。BBC・Guardian報道。",
    tags: [
      { cls: "animals", label: "動物" },
      { cls: "food", label: "農業" }
    ],
    source: "BBC News / The Guardian",
    sourceUrl: "https://www.bbc.com/news/uk-10918429",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#E8F5E9"/>
          <rect width="400" height="100" fill="#B3D9F8"/>
          <!-- 遠くの山 -->
          <polygon points="0,100 80,55 160,85 240,45 320,70 400,52 400,100" fill="#8DB68D"/>
          <!-- 地面 -->
          <rect x="0" y="100" width="400" height="100" fill="#6BB35A"/>
          <!-- ケシの花 -->
          <rect x="100" y="130" width="3" height="30" fill="#5A8A30"/>
          <circle cx="101" cy="128" r="8" fill="#FF6B8A"/>
          <rect x="140" y="122" width="3" height="38" fill="#5A8A30"/>
          <circle cx="141" cy="120" r="8" fill="#FF8CA0"/>
          <rect x="180" y="128" width="3" height="32" fill="#5A8A30"/>
          <circle cx="181" cy="126" r="8" fill="#FF6B8A"/>
          <rect x="220" y="124" width="3" height="36" fill="#5A8A30"/>
          <circle cx="221" cy="122" r="8" fill="#FF8CA0"/>
          <rect x="260" y="130" width="3" height="30" fill="#5A8A30"/>
          <circle cx="261" cy="128" r="8" fill="#FF6B8A"/>
          <rect x="300" y="125" width="3" height="35" fill="#5A8A30"/>
          <circle cx="301" cy="123" r="8" fill="#FF8CA0"/>
          <!-- ミステリーサークル -->
          <circle cx="200" cy="148" rx="40" ry="15" fill="none" stroke="#8B6914" stroke-width="6" opacity="0.4"/>
          <!-- ワラビー -->
          <ellipse cx="216" cy="158" rx="18" ry="10" fill="#B5844A"/>
          <path d="M 200 162 Q 188 172 184 182" stroke="#B5844A" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M 222 165 Q 215 175 210 185" stroke="#B5844A" stroke-width="5" fill="none" stroke-linecap="round"/>
          <path d="M 232 154 Q 246 140 254 132" stroke="#B5844A" stroke-width="8" fill="none" stroke-linecap="round"/>
          <ellipse cx="258" cy="128" rx="14" ry="10" fill="#C89055"/>
          <text x="257" y="132" text-anchor="middle" font-size="10">😵‍💫</text>
          <text x="268" y="120" font-size="10">⭐</text>
          <!-- 議会パネル -->
          <rect x="8" y="8" width="115" height="52" fill="rgba(255,255,255,0.95)" rx="4" stroke="#2E7D32" stroke-width="1.5"/>
          <text x="65" y="22" text-anchor="middle" font-size="6.5" fill="#2E7D32" font-weight="bold">🏛️ タスマニア州議会証言</text>
          <text x="65" y="35" text-anchor="middle" font-size="6.5" fill="#333">「ワラビーがハイになり</text>
          <text x="65" y="47" text-anchor="middle" font-size="6.5" fill="#333">　円を描いて歩いてる」</text>
          <!-- タスマニアのケシ -->
          <rect x="278" y="8" width="114" height="40" fill="rgba(255,255,255,0.95)" rx="4" stroke="#E63946" stroke-width="1.5"/>
          <text x="335" y="22" text-anchor="middle" font-size="6" fill="#E63946" font-weight="bold">世界のモルヒネ生産量</text>
          <text x="335" y="36" text-anchor="middle" font-size="14" fill="#E63946" font-weight="bold">約50%</text>
          <text x="335" y="44" text-anchor="middle" font-size="6" fill="#888">タスマニア産</text>
        </svg>`
  },
  {
    id: 24,
    url: "article-24.html",
    flag: "🇨🇦",
    country: "カナダ・ケベック州",
    region: "北米",
    dateLabel: "2012.08",
    dateISO: "2012-08-01",
    title: "「世界戦略メープルシロップ備蓄庫」から3,000トン・27億円相当が消えた——カナダ史上最大の食品強盗、犯人はシロップ仲買人たちだった",
    description: "2012年発覚、カナダ・ケベック州の「世界戦略メープルシロップ備蓄」から約3000トン・27億円相当のシロップが抜き取られていた。カナダ史上最大の食品強盗事件。BBCとThe New Yorkerが報道。",
    excerpt: "2012年、カナダ・ケベック州の「世界戦略メープルシロップ備蓄庫」から3,000トン（約27億円相当）が盗まれた。定期検査で樽の重量不足から発覚。BBC・New Yorker報道。",
    tags: [
      { cls: "food", label: "食" },
      { cls: "crime", label: "犯罪" }
    ],
    source: "BBC News / The New Yorker",
    sourceUrl: "https://www.bbc.com/news/world-us-canada-19636898",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#F5E6C8"/>
          <!-- 倉庫 -->
          <rect x="40" y="32" width="320" height="140" fill="#D9CCA0" stroke="#B8A870" stroke-width="2"/>
          <rect x="40" y="32" width="320" height="16" fill="#B8A870"/>
          <text x="200" y="44" text-anchor="middle" font-size="7" fill="white" font-weight="bold">WORLD STRATEGIC MAPLE SYRUP RESERVE</text>
          <!-- 棚の構造 -->
          <rect x="50" y="55" width="300" height="6" fill="#8B6914"/>
          <rect x="50" y="105" width="300" height="5" fill="#8B6914"/>
          <rect x="50" y="148" width="300" height="5" fill="#8B6914"/>
          <rect x="50" y="55" width="5" height="100" fill="#7A5A10"/>
          <rect x="165" y="55" width="5" height="100" fill="#7A5A10"/>
          <rect x="280" y="55" width="5" height="100" fill="#7A5A10"/>
          <rect x="345" y="55" width="5" height="100" fill="#7A5A10"/>
          <!-- 樽（正常） -->
          <ellipse cx="100" cy="62" rx="18" ry="6" fill="#C8A050"/>
          <rect x="82" y="60" width="36" height="40" fill="#D46A12" rx="2" opacity="0.8"/>
          <ellipse cx="100" cy="100" rx="18" ry="6" fill="#C8A050"/>
          <text x="100" y="83" text-anchor="middle" font-size="7" fill="#FFF5E0" font-weight="bold">MAPLE</text>
          <!-- 樽（空） -->
          <ellipse cx="220" cy="62" rx="18" ry="6" fill="#8B6914" opacity="0.5"/>
          <rect x="202" y="60" width="36" height="40" fill="#EDE0C4" rx="2" stroke="#8B6914" stroke-width="1" opacity="0.8"/>
          <ellipse cx="220" cy="100" rx="18" ry="6" fill="#8B6914" opacity="0.5"/>
          <text x="220" y="83" text-anchor="middle" font-size="16" fill="#E63946">空</text>
          <!-- 横倒し樽 -->
          <ellipse cx="310" cy="90" rx="6" ry="20" fill="#C8A050" opacity="0.6"/>
          <rect x="300" y="68" width="40" height="36" fill="#D4A850" rx="2" opacity="0.6" transform="rotate(90 320 86)"/>
          <!-- シロップが流れる -->
          <path d="M 305 100 Q 310 125 308 148" stroke="#D46A12" stroke-width="4" fill="none" opacity="0.7"/>
          <!-- 警察テープ -->
          <line x1="40" y1="170" x2="360" y2="170" stroke="#FFD700" stroke-width="4"/>
          <text x="200" y="169" text-anchor="middle" font-size="6.5" fill="#333" font-weight="bold">POLICE LINE — NE PAS FRANCHIR</text>
          <!-- 被害額 -->
          <rect x="8" y="8" width="28" height="18" fill="#FF0000" rx="2"/>
          <text x="22" y="20" text-anchor="middle" font-size="12">🍁</text>
          <rect x="8" y="30" width="28" height="145" fill="rgba(255,255,255,0.92)" rx="3" stroke="#CC0000" stroke-width="1.5"/>
          <text x="22" y="48" text-anchor="middle" font-size="5.5" fill="#CC0000" font-weight="bold">被害</text>
          <text x="22" y="62" text-anchor="middle" font-size="6" fill="#333" font-weight="bold">3000t</text>
          <text x="22" y="76" text-anchor="middle" font-size="5" fill="#888">盗難量</text>
          <line x1="10" y1="82" x2="34" y2="82" stroke="#eee" stroke-width="1"/>
          <text x="22" y="95" text-anchor="middle" font-size="5.5" fill="#E63946" font-weight="bold">27億円</text>
          <text x="22" y="108" text-anchor="middle" font-size="5" fill="#888">相当</text>
          <line x1="10" y1="115" x2="34" y2="115" stroke="#eee" stroke-width="1"/>
          <text x="22" y="128" text-anchor="middle" font-size="5.5" fill="#333">逮捕</text>
          <text x="22" y="142" text-anchor="middle" font-size="6" fill="#333" font-weight="bold">17名</text>
          <!-- 右側 -->
          <rect x="364" y="8" width="28" height="160" fill="rgba(255,255,255,0.9)" rx="3" stroke="#CC0000" stroke-width="1.5"/>
          <text x="378" y="25" text-anchor="middle" font-size="5.5" fill="#CC0000" font-weight="bold">発覚</text>
          <text x="378" y="40" text-anchor="middle" font-size="5" fill="#555">定期</text>
          <text x="378" y="53" text-anchor="middle" font-size="5" fill="#555">検査で</text>
          <text x="378" y="66" text-anchor="middle" font-size="5" fill="#555">樽の</text>
          <text x="378" y="79" text-anchor="middle" font-size="5" fill="#555">重量</text>
          <text x="378" y="92" text-anchor="middle" font-size="5" fill="#555">不足</text>
        </svg>`
  },
  {
    id: 25,
    url: "article-25.html",
    flag: "🇨🇳",
    country: "中国・河南省",
    region: "アジア",
    dateLabel: "2013.08",
    dateISO: "2013-08-14",
    title: "動物園「これがアフリカライオンです」→来場者の子ども「吠えてますよ」——中国の動物園がチベタン・マスティフをライオンの檻に展示して発覚、同園でロバはシマウマに偽装",
    description: "2013年8月、中国・河南省の動物園が「アフリカライオン」の檻にチベタン・マスティフ（大型犬）を入れて展示していたことが発覚。来場者の子どもが「ライオンが吠えてる」と指摘し騒ぎに。BBCが報道。",
    excerpt: "2013年8月、中国の動物園が「アフリカライオン」の檻に大型犬チベタン・マスティフを展示。来場者の子どもが「ライオンが吠えてる」と気づき発覚。ロバのシマウマも同時発覚。BBC報道。",
    tags: [
      { cls: "animals", label: "動物" },
      { cls: "crime", label: "詐欺" }
    ],
    source: "BBC News / The Guardian",
    sourceUrl: "https://www.bbc.com/news/world-asia-china-22907321",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="200" fill="#F0F4E8"/>
          <!-- 動物園看板 -->
          <rect x="100" y="6" width="200" height="20" fill="#1565C0" rx="3"/>
          <text x="200" y="19" text-anchor="middle" font-size="7.5" fill="white" font-weight="bold">人民公園動物園</text>
          <!-- 檻 -->
          <rect x="70" y="32" width="260" height="148" fill="#8B6914" rx="4" stroke="#6B4A0E" stroke-width="2"/>
          <rect x="75" y="37" width="250" height="138" fill="#EDE0C4" rx="3"/>
          <!-- 縦棒 -->
          <rect x="75" y="37" width="6" height="138" fill="#6B4A0E"/>
          <rect x="115" y="37" width="6" height="138" fill="#6B4A0E"/>
          <rect x="155" y="37" width="6" height="138" fill="#6B4A0E"/>
          <rect x="195" y="37" width="6" height="138" fill="#6B4A0E"/>
          <rect x="245" y="37" width="6" height="138" fill="#6B4A0E"/>
          <rect x="285" y="37" width="6" height="138" fill="#6B4A0E"/>
          <rect x="319" y="37" width="6" height="138" fill="#6B4A0E"/>
          <!-- 看板「アフリカライオン」 -->
          <rect x="110" y="42" width="110" height="22" fill="#E63946" rx="3"/>
          <text x="165" y="52" text-anchor="middle" font-size="7" fill="white" font-weight="bold">🦁 非洲雄狮</text>
          <text x="165" y="61" text-anchor="middle" font-size="6" fill="#FFCCCC">（アフリカライオン）</text>
          <!-- チベタン・マスティフ（犬本体） -->
          <ellipse cx="200" cy="136" rx="52" ry="28" fill="#5C3A1A"/>
          <ellipse cx="200" cy="128" rx="44" ry="22" fill="#7A5225"/>
          <!-- たてがみ的な毛 -->
          <ellipse cx="240" cy="116" rx="30" ry="26" fill="#5C3A1A"/>
          <ellipse cx="240" cy="114" rx="24" ry="20" fill="#8B6B35"/>
          <ellipse cx="240" cy="116" rx="18" ry="15" fill="#C09050"/>
          <!-- 足 -->
          <rect x="162" y="156" width="12" height="18" fill="#5C3A1A" rx="4"/>
          <rect x="184" y="158" width="12" height="16" fill="#5C3A1A" rx="4"/>
          <rect x="210" y="158" width="12" height="16" fill="#5C3A1A" rx="4"/>
          <rect x="232" y="156" width="12" height="18" fill="#5C3A1A" rx="4"/>
          <!-- 目 -->
          <circle cx="234" cy="110" r="4" fill="white"/>
          <circle cx="234" cy="110" r="2.5" fill="#3A1A00"/>
          <circle cx="246" cy="110" r="4" fill="white"/>
          <circle cx="246" cy="110" r="2.5" fill="#3A1A00"/>
          <!-- 吠えの吹き出し -->
          <path d="M 258 108 Q 278 96 295 90" stroke="#E63946" stroke-width="1.5" fill="none"/>
          <rect x="294" y="74" width="78" height="28" fill="white" rx="4" stroke="#E63946" stroke-width="1.5"/>
          <text x="333" y="87" text-anchor="middle" font-size="10" fill="#333" font-weight="bold">ワン！</text>
          <text x="333" y="98" text-anchor="middle" font-size="6" fill="#E63946">（犬の声）</text>
          <!-- 驚く子ども -->
          <circle cx="38" cy="152" r="12" fill="#FDBCB4"/>
          <text x="38" y="158" text-anchor="middle" font-size="9">👦</text>
          <rect x="8" y="118" width="58" height="30" fill="rgba(255,255,255,0.95)" rx="3" stroke="#ccc" stroke-width="1"/>
          <text x="37" y="131" text-anchor="middle" font-size="6" fill="#333" font-weight="bold">「ライオンが</text>
          <text x="37" y="143" text-anchor="middle" font-size="6" fill="#333" font-weight="bold">　吠えてる！」</text>
          <!-- 地面 -->
          <rect x="75" y="155" width="250" height="20" fill="#C4A87A" rx="2"/>
        </svg>`
  },
  {
    id: 26,
    url: "article-26.html",
    flag: "🇨🇳",
    country: "中国・内モンゴル",
    region: "アジア",
    dateLabel: "2010年代〜",
    dateISO: "2012-01-01",
    title: "住民ゼロの超高層都市——中国・オルドス「カンバシ新区」、幽霊都市の全貌",
    description: "内モンゴル自治区オルドス市に建設された近代的な新都市「カンバシ新区」。高層マンション・官庁・広場が立ち並ぶが住民はほぼゼロ。BBCが「幽霊都市」として報じ世界に衝撃を与えた。",
    excerpt: "内モンゴルに建設された近代的な新都市。高層マンションが立ち並ぶが住民はほぼゼロ。BBCが「中国の幽霊都市」として世界に報じた衝撃の実態。",
    tags: [
      { cls: "politics", label: "政治・経済" },
      { cls: "culture", label: "文化" }
    ],
    source: "BBC News",
    sourceUrl: "https://www.bbc.com/news/magazine-23279240",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#C8C4B8"/>
      <rect width="400" height="100" fill="#B0B0A8"/>
      <rect x="20"  y="60"  width="35" height="140" fill="#909088"/>
      <rect x="62"  y="45"  width="40" height="155" fill="#888880"/>
      <rect x="110" y="55"  width="35" height="145" fill="#909088"/>
      <rect x="155" y="40"  width="42" height="160" fill="#888880"/>
      <rect x="205" y="50"  width="38" height="150" fill="#909088"/>
      <rect x="252" y="38"  width="40" height="162" fill="#888880"/>
      <rect x="300" y="55"  width="36" height="145" fill="#909088"/>
      <rect x="344" y="44"  width="40" height="156" fill="#888880"/>
      <rect x="0"   y="165" width="400" height="35" fill="#A0988A"/>
      <rect x="160" y="145" width="80" height="8"  fill="#C0B8AA" rx="2"/>
      <text x="200" y="185" text-anchor="middle" font-size="11" fill="#555" font-weight="bold">人影なき都市</text>
    </svg>`
  },
  {
    id: 27,
    url: "article-27.html",
    flag: "🇨🇳",
    country: "中国・広東省",
    region: "アジア",
    dateLabel: "2005年〜",
    dateISO: "2005-06-01",
    title: "世界最大なのにガラガラ——中国「ニュー・サウス・チャイナ・モール」、開業即ゴーストモール化",
    description: "2005年広東省東莞に開業した延べ床面積世界最大のショッピングモール。エッフェル塔レプリカや運河まであるが入居店舗は数%で閑散。The Guardianが「世界最大のゴーストモール」として報道。",
    excerpt: "エッフェル塔レプリカまで備えた世界最大のモールが開業直後から閑散。入居率数%のゴーストモールをThe Guardianが報道した衝撃の実態。",
    tags: [
      { cls: "culture", label: "文化" }
    ],
    source: "The Guardian",
    sourceUrl: "https://www.theguardian.com/cities/2014/may/27/new-south-china-mall-worlds-biggest-shopping-centre",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#E8E0D0"/>
      <rect x="30"  y="60"  width="340" height="120" fill="#D8D0C0"/>
      <rect x="30"  y="55"  width="340" height="15"  fill="#C8C0B0"/>
      <!-- 閉まっているシャッター -->
      <rect x="45"  y="80"  width="50" height="80" fill="#BBB0A0" rx="2"/>
      <rect x="47"  y="82"  width="46" height="4"  fill="#AAA090"/>
      <rect x="47"  y="90"  width="46" height="4"  fill="#AAA090"/>
      <rect x="47"  y="98"  width="46" height="4"  fill="#AAA090"/>
      <rect x="47"  y="106" width="46" height="4"  fill="#AAA090"/>
      <rect x="47"  y="114" width="46" height="4"  fill="#AAA090"/>
      <rect x="47"  y="122" width="46" height="4"  fill="#AAA090"/>
      <rect x="47"  y="130" width="46" height="4"  fill="#AAA090"/>
      <rect x="47"  y="138" width="46" height="4"  fill="#AAA090"/>
      <rect x="47"  y="146" width="46" height="4"  fill="#AAA090"/>
      <rect x="110" y="80"  width="50" height="80" fill="#BBB0A0" rx="2"/>
      <rect x="112" y="82"  width="46" height="4"  fill="#AAA090"/>
      <rect x="112" y="90"  width="46" height="4"  fill="#AAA090"/>
      <rect x="112" y="98"  width="46" height="4"  fill="#AAA090"/>
      <rect x="112" y="106" width="46" height="4"  fill="#AAA090"/>
      <rect x="112" y="114" width="46" height="4"  fill="#AAA090"/>
      <rect x="112" y="122" width="46" height="4"  fill="#AAA090"/>
      <!-- エッフェル塔レプリカ（小） -->
      <polygon points="230,62 222,155 238,155" fill="#B0A888" opacity="0.7"/>
      <polygon points="230,62 226,90 234,90"   fill="#C0B898" opacity="0.8"/>
      <line x1="222" y1="120" x2="238" y2="120" stroke="#B0A888" stroke-width="2"/>
      <!-- 一人の人 -->
      <circle cx="310" cy="155" r="6" fill="#C8A070"/>
      <rect x="306" y="161" width="8" height="14" fill="#4488CC" rx="1"/>
      <text x="200" y="185" text-anchor="middle" font-size="10" fill="#777" font-weight="bold">開業即ゴーストモール</text>
    </svg>`
  },
  {
    id: 28,
    url: "article-28.html",
    flag: "🇨🇳",
    country: "中国・北京",
    region: "アジア",
    dateLabel: "2013〜2015年",
    dateISO: "2014-01-01",
    title: "北京のスモッグに「空気の缶詰め」で抗議——中国の億万長者が新鮮な空気を1缶9円で販売、BBCが報道",
    description: "2013〜2015年、中国の実業家・陳光標氏が北京の深刻な大気汚染に抗議するため、フランス・プロヴァンスや台湾の山岳地帯の新鮮な空気を缶詰めにして1缶0.5元（約9円）で販売。BBCが報道。",
    excerpt: "北京のスモッグに抗議するため、中国の億万長者がフランス産・台湾産の空気を缶詰めにして1缶9円で販売。BBCが「世界で最もユニークな環境活動」と報じた。",
    tags: [
      { cls: "politics", label: "政治・経済" },
      { cls: "culture", label: "文化" }
    ],
    source: "BBC News",
    sourceUrl: "https://www.bbc.com/news/world-asia-china-25587465",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#C0B8A8"/>
      <rect x="200" width="200" height="200" fill="#B0D8F0"/>
      <rect width="200" height="100" fill="#A8A090"/>
      <rect x="200" width="200" height="100" fill="#85C8E8"/>
      <rect x="20"  y="80"  width="30" height="120" fill="#808070"/>
      <rect x="55"  y="65"  width="35" height="135" fill="#787868"/>
      <rect x="98"  y="75"  width="30" height="125" fill="#808070"/>
      <rect x="135" y="60"  width="32" height="140" fill="#787868"/>
      <ellipse cx="100" cy="125" rx="100" ry="40" fill="rgba(150,140,120,0.5)"/>
      <ellipse cx="280" cy="35" rx="35" ry="13" fill="white" opacity="0.85"/>
      <polygon points="200,155 230,100 260,125 300,95 340,115 400,100 400,155" fill="#5A9450"/>
      <rect x="200" y="155" width="200" height="45" fill="#80A860"/>
      <rect x="155" y="130" width="22" height="35" fill="#4CAF50" rx="3"/>
      <text x="166" y="143" text-anchor="middle" font-size="5" fill="white" font-weight="bold">新鮮</text>
      <text x="166" y="152" text-anchor="middle" font-size="5" fill="white">空気</text>
      <rect x="180" y="133" width="20" height="35" fill="#2196F3" rx="3"/>
      <text x="190" y="146" text-anchor="middle" font-size="5" fill="white">台湾</text>
      <rect x="203" y="130" width="20" height="35" fill="#FF9800" rx="3"/>
      <text x="213" y="143" text-anchor="middle" font-size="5" fill="white">仏産</text>
      <text x="200" y="185" text-anchor="middle" font-size="10" fill="#333" font-weight="bold">空気を売る男</text>
    </svg>`
  },
  {
    id: 29,
    url: "article-29.html",
    flag: "🇨🇳",
    country: "中国・浙江省",
    region: "アジア",
    dateLabel: "1959年水没",
    dateISO: "2001-01-01",
    title: "水深40mに眠る「水没都市・獅城」——1,300年前の唐代城塞がほぼ完全な姿で湖底に保存",
    description: "1959年に水力発電ダム建設のため水没した中国・浙江省千島湖の「獅城」。水深40mの湖底に唐代の城壁・石畳・彫刻が驚くほど完全な状態で残り「中国のアトランティス」と世界で話題に。",
    excerpt: "1959年にダム建設で沈んだ古代城塞「獅城」。水深40mの湖底に1,300年前の建物がほぼ完全な姿で残り、「中国のアトランティス」として世界中のダイバーを魅了する。",
    tags: [
      { cls: "culture", label: "文化" }
    ],
    source: "The Guardian",
    sourceUrl: "https://www.theguardian.com/world/2014/may/22/lion-city-qiandao-lake-china",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="90" fill="#7ABCD0"/>
      <polygon points="0,90 40,55 80,75 120,48 200,65 280,42 340,58 400,48 400,90" fill="#4A7A40"/>
      <defs>
        <linearGradient id="lake29" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3A88A8"/>
          <stop offset="100%" stop-color="#0D2B40"/>
        </linearGradient>
      </defs>
      <rect y="90"  width="400" height="20" fill="url(#lake29)" opacity="0.8"/>
      <rect y="110" width="400" height="90" fill="#1B4F72"/>
      <ellipse cx="200" cy="130" rx="120" ry="15" fill="rgba(80,160,200,0.1)"/>
      <rect x="80"  y="148" width="240" height="10" fill="#6A6050" opacity="0.85"/>
      <rect x="95"  y="130" width="30" height="28" fill="#5A5040" opacity="0.85"/>
      <polygon points="95,130 110,116 125,130" fill="#4A4030" opacity="0.85"/>
      <rect x="145" y="135" width="25" height="23" fill="#6A6050" opacity="0.85"/>
      <polygon points="145,135 157,123 170,135" fill="#5A5040" opacity="0.85"/>
      <rect x="240" y="132" width="28" height="26" fill="#5A5040" opacity="0.85"/>
      <polygon points="240,132 254,119 268,132" fill="#4A4030" opacity="0.85"/>
      <rect x="285" y="137" width="25" height="21" fill="#6A6050" opacity="0.85"/>
      <polygon points="285,137 297,126 310,137" fill="#5A5040" opacity="0.85"/>
      <text x="200" y="186" text-anchor="middle" font-size="10" fill="rgba(180,220,255,0.9)" font-weight="bold">水深40mの古代都市</text>
    </svg>`
  },
  {
    id: 30,
    url: "article-30.html",
    flag: "🇨🇳",
    country: "中国・重慶市",
    region: "アジア",
    dateLabel: "2007年",
    dateISO: "2007-03-27",
    title: "ビルに囲まれても断固として立ち退かない——「釘子戸」夫妻、崖の上の孤島で開発業者と戦う",
    description: "2007年中国・重慶市で開発業者に立ち退きを拒否し続けた呉苹夫妻の自宅が、周囲を掘り崩され崖の上の孤島になった。「釘子戸」として世界中のメディアが報じ、中国のBBSで英雄視された社会現象。",
    excerpt: "重慶市の開発現場で立ち退きを拒否した夫妻の家が崖の孤島に。「釘子戸（くぎ建物）」として世界中が報じ、中国版SNSで英雄扱いされた2007年の社会現象。",
    tags: [
      { cls: "politics", label: "政治・経済" },
      { cls: "culture", label: "文化" }
    ],
    source: "The Guardian",
    sourceUrl: "https://www.theguardian.com/world/2007/mar/27/china.jonathanwatts",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#87CEEB"/>
      <rect x="0"   y="40"  width="55" height="160" fill="#8899AA"/>
      <rect x="60"  y="30"  width="60" height="170" fill="#778899"/>
      <rect x="280" y="35"  width="60" height="165" fill="#8899AA"/>
      <rect x="345" y="25"  width="55" height="175" fill="#778899"/>
      <ellipse cx="200" cy="155" rx="155" ry="40" fill="#8B7355"/>
      <ellipse cx="200" cy="148" rx="130" ry="32" fill="#7A6545"/>
      <polygon points="160,148 175,110 200,105 225,110 240,148" fill="#9B8565"/>
      <rect x="172" y="88"  width="56" height="34" fill="#C8B090"/>
      <polygon points="172,88 200,72 228,88" fill="#B8604A"/>
      <rect x="183" y="95"  width="11" height="11" fill="#87CEEB" opacity="0.9"/>
      <rect x="206" y="95"  width="11" height="11" fill="#87CEEB" opacity="0.9"/>
      <rect x="192" y="100" width="14" height="22" fill="#7A5A40"/>
      <rect x="168" y="70"  width="64" height="10" fill="#E63946" rx="2"/>
      <text x="200" y="79" text-anchor="middle" font-size="6.5" fill="white" font-weight="bold">立退拒否！我が家を守る</text>
      <line x1="200" y1="72" x2="200" y2="55" stroke="#555" stroke-width="1.5"/>
      <polygon points="200,55 214,60 200,66" fill="#E63946"/>
      <text x="200" y="188" text-anchor="middle" font-size="10" fill="#333" font-weight="bold">重慶「釘子戸」孤島の一軒家</text>
    </svg>`
  },
  {
    id: 31,
    url: "article-31.html",
    flag: "🇹🇭",
    country: "タイ・ロッブリー",
    region: "アジア",
    dateLabel: "毎年11月",
    dateISO: "2018-10-28",
    title: "サル3,000頭のために豪華ビュッフェを開催——タイ・ロッブリー「モンキーバンケット」、世界が注目する奇祭",
    description: "タイ・ロッブリー市で毎年11月の最終日曜日に開かれる「モンキーバンケット」。果物・野菜・デザート4トンを3,000頭以上の野生のサルに振る舞う世界的に珍しい奇祭。1989年から続く観光イベント。",
    excerpt: "タイ・ロッブリーでは毎年11月、3,000頭以上の野生のサルのために4トンのビュッフェを用意する奇祭「モンキーバンケット」が開催。1989年から続く世界的に有名な人気イベント。",
    tags: [
      { cls: "animals", label: "動物" },
      { cls: "culture", label: "文化" }
    ],
    source: "BBC News",
    sourceUrl: "https://www.bbc.com/news/world-asia-45950431",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#E8D898"/>
      <rect width="400" height="90" fill="#FFD88A"/>
      <rect x="170" y="40" width="90" height="60" fill="#C8A050"/>
      <polygon points="170,40 215,20 260,40" fill="#B89040"/>
      <rect x="185" y="50" width="30" height="50" fill="#A07030"/>
      <rect x="40"  y="110" width="320" height="10" fill="#8B5A2B" rx="3"/>
      <ellipse cx="80"  cy="108" rx="18" ry="10" fill="#FFE135"/>
      <ellipse cx="130" cy="106" rx="16" ry="12" fill="#4CAF50"/>
      <ellipse cx="130" cy="106" rx="13" ry="9"  fill="#E53935"/>
      <ellipse cx="185" cy="107" rx="12" ry="14" fill="#F4C430"/>
      <ellipse cx="240" cy="107" rx="14" ry="10" fill="#FF8F00"/>
      <ellipse cx="295" cy="108" rx="16" ry="10" fill="#F4C430"/>
      <text x="80"  y="98"  text-anchor="middle" font-size="14">🐒</text>
      <text x="135" y="96"  text-anchor="middle" font-size="13">🐒</text>
      <text x="200" y="95"  text-anchor="middle" font-size="15">🐒</text>
      <text x="260" y="97"  text-anchor="middle" font-size="13">🐒</text>
      <text x="315" y="98"  text-anchor="middle" font-size="14">🐒</text>
      <text x="50"  y="150" text-anchor="middle" font-size="11">🐒</text>
      <text x="110" y="155" text-anchor="middle" font-size="12">🐒</text>
      <text x="290" y="152" text-anchor="middle" font-size="11">🐒</text>
      <text x="350" y="148" text-anchor="middle" font-size="12">🐒</text>
      <rect y="165" width="400" height="35" fill="#C8A860"/>
      <text x="200" y="188" text-anchor="middle" font-size="10" fill="#555" font-weight="bold">ロッブリー モンキーバンケット</text>
    </svg>`
  },
  {
    id: 32,
    url: "article-32.html",
    flag: "🇹🇭",
    country: "タイ・チェンマイ",
    region: "アジア",
    dateLabel: "2000年代〜",
    dateISO: "2014-02-01",
    title: "象が鼻でブラシを持ち絵を描いて販売——タイ・チェンマイの「絵描きゾウ」が世界中で話題に",
    description: "タイ北部チェンマイの象キャンプで象が鼻でブラシを握り絵を描き観光客に販売するビジネスが人気に。BBCやAPが報道し動物の創造性をめぐる国際的な議論を呼んだ。",
    excerpt: "タイ・チェンマイで象が鼻でブラシを持ち絵を描いて観光客に販売。「芸術家か、調教か」をめぐる議論を呼んだ絵描きゾウが世界中のメディアで報じられた。",
    tags: [
      { cls: "animals", label: "動物" },
      { cls: "culture", label: "文化" }
    ],
    source: "BBC News",
    sourceUrl: "https://www.bbc.com/news/magazine-26116991",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#B8D898"/>
      <rect width="400" height="100" fill="#87CEEB"/>
      <ellipse cx="40"  cy="70" rx="35" ry="45" fill="#3A7A30"/>
      <rect x="33" y="108" width="10" height="45" fill="#6B4226"/>
      <ellipse cx="360" cy="65" rx="38" ry="48" fill="#3A7A30"/>
      <rect x="353" y="105" width="10" height="48" fill="#6B4226"/>
      <!-- イーゼルとキャンバス -->
      <line x1="270" y1="85"  x2="248" y2="165" stroke="#8B5A2B" stroke-width="3"/>
      <line x1="270" y1="85"  x2="292" y2="165" stroke="#8B5A2B" stroke-width="3"/>
      <rect x="240" y="72"  width="62" height="52" fill="white" stroke="#C8A060" stroke-width="2"/>
      <!-- 象の絵（キャンバス内） -->
      <ellipse cx="271" cy="106" rx="18" ry="13" fill="#D0C0A8" stroke="#A09080" stroke-width="1"/>
      <circle cx="271" cy="95"  r="9"  fill="#D0C0A8" stroke="#A09080" stroke-width="1"/>
      <path d="M267,98 Q260,108 263,118" stroke="#A09080" stroke-width="1.5" fill="none"/>
      <!-- 象本体 -->
      <ellipse cx="150" cy="125" rx="70" ry="45" fill="#9B9080"/>
      <circle cx="208" cy="98"  r="38" fill="#9B9080"/>
      <ellipse cx="228" cy="103" rx="18" ry="26" fill="#B8A898"/>
      <circle cx="218" cy="90"  r="5"  fill="#333"/>
      <path d="M218,108 Q210,128 215,138" stroke="#9B9080" stroke-width="9" fill="none" stroke-linecap="round"/>
      <!-- ブラシを持った鼻先 -->
      <line x1="215" y1="138" x2="240" y2="115" stroke="#8B5A2B" stroke-width="3"/>
      <rect x="237" y="110" width="10" height="7"  fill="#FF6030" rx="1"/>
      <rect x="100" y="152" width="18" height="40" fill="#8B8070" rx="5"/>
      <rect x="140" y="152" width="18" height="40" fill="#8B8070" rx="5"/>
      <rect x="172" y="152" width="18" height="40" fill="#8B8070" rx="5"/>
      <rect y="175"  width="400" height="25" fill="#A8906A"/>
      <text x="200" y="192" text-anchor="middle" font-size="10" fill="white" font-weight="bold">絵描きゾウ（チェンマイ）</text>
    </svg>`
  },
  {
    id: 33,
    url: "article-33.html",
    flag: "🇮🇳",
    country: "インド・ラジャスタン",
    region: "アジア",
    dateLabel: "15世紀創建・現在も",
    dateISO: "2015-01-01",
    title: "2万匹のネズミが神の使い——インド「カルニマタ寺院」、ラット・テンプルの聖なる日常",
    description: "インド・ラジャスタン州デシュノクのカルニマタ寺院には約2万匹のネズミが生息し、神の使いとして崇拝される。白いネズミを見ると幸運とされ、参拝者は素足でネズミの間を歩く。国際メディアが繰り返し報道。",
    excerpt: "インド・ラジャスタンのカルニマタ寺院には約2万匹のネズミが神の使いとして生息。白いネズミを見ると幸運とされ、参拝者は素足でその間を歩く。ナショジオが報じた奇習。",
    tags: [
      { cls: "animals", label: "動物" },
      { cls: "culture", label: "文化" }
    ],
    source: "National Geographic",
    sourceUrl: "https://www.nationalgeographic.com/travel/article/karni-mata",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#F0E4CC"/>
      <rect width="400" height="90" fill="#F5E8D0"/>
      <rect x="80"  y="55"  width="240" height="120" fill="#EDD8B0"/>
      <rect x="80"  y="48"  width="240" height="16"  fill="#D8C090"/>
      <polygon points="190,25 200,12 210,25" fill="#C04020"/>
      <polygon points="175,32 200,15 225,32" fill="#D04020"/>
      <rect x="175" y="32"  width="50" height="36"  fill="#C8A060"/>
      <rect x="160" y="100" width="80" height="75"  fill="#2A1A0A"/>
      <path d="M160,100 Q200,78 240,100" fill="#C04020"/>
      <line x1="170" y1="100" x2="170" y2="175" stroke="silver" stroke-width="1.5"/>
      <line x1="185" y1="100" x2="185" y2="175" stroke="silver" stroke-width="1.5"/>
      <line x1="200" y1="100" x2="200" y2="175" stroke="silver" stroke-width="1.5"/>
      <line x1="215" y1="100" x2="215" y2="175" stroke="silver" stroke-width="1.5"/>
      <line x1="230" y1="100" x2="230" y2="175" stroke="silver" stroke-width="1.5"/>
      <line x1="160" y1="130" x2="240" y2="130" stroke="silver" stroke-width="1.2"/>
      <line x1="160" y1="155" x2="240" y2="155" stroke="silver" stroke-width="1.2"/>
      <text x="90"  y="178" text-anchor="middle" font-size="13">🐀</text>
      <text x="120" y="172" text-anchor="middle" font-size="12">🐀</text>
      <text x="270" y="176" text-anchor="middle" font-size="12">🐀</text>
      <text x="305" y="173" text-anchor="middle" font-size="13">🐀</text>
      <circle cx="200" cy="170" r="6" fill="white" stroke="#DDD" stroke-width="1"/>
      <text x="200" y="188" text-anchor="middle" font-size="9.5" fill="#8B4513" font-weight="bold">カルニマタ寺院（ラット・テンプル）</text>
    </svg>`
  },
  {
    id: 34,
    url: "article-34.html",
    flag: "🇮🇳",
    country: "インド・ビハール州",
    region: "アジア",
    dateLabel: "2015年3月",
    dateISO: "2015-03-19",
    title: "カンニングを手伝うために試験会場の外壁をよじ登る保護者——インド・ビハール州、世界が唖然とした光景",
    description: "2015年インド・ビハール州の中学卒業試験で、保護者が試験会場の外壁をよじ登り窓越しにカンニングペーパーを渡そうとした写真が世界中で拡散。BBCが報じ教育格差の象徴として話題に。",
    excerpt: "インド・ビハール州の試験会場で、保護者が外壁をよじ登り窓越しにカンニングペーパーを渡す光景が世界に衝撃を。BBCが報じた「愛情が形を間違えた」事件。",
    tags: [
      { cls: "culture", label: "文化" },
      { cls: "crime", label: "犯罪・事故" }
    ],
    source: "BBC News",
    sourceUrl: "https://www.bbc.com/news/world-asia-india-31747898",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#87CEEB"/>
      <rect x="60"  y="50"  width="280" height="150" fill="#D4C5A0"/>
      <rect x="60"  y="44"  width="280" height="16"  fill="#C4B590"/>
      <!-- 窓 -->
      <rect x="80"  y="65"  width="42" height="36" fill="#87CEEB" stroke="#A09070" stroke-width="1.5"/>
      <rect x="140" y="65"  width="42" height="36" fill="#FFD080" stroke="#A09070" stroke-width="1.5"/>
      <rect x="200" y="65"  width="42" height="36" fill="#FFD080" stroke="#A09070" stroke-width="1.5"/>
      <rect x="260" y="65"  width="42" height="36" fill="#87CEEB" stroke="#A09070" stroke-width="1.5"/>
      <rect x="80"  y="115" width="42" height="38" fill="#FFD080" stroke="#A09070" stroke-width="1.5"/>
      <rect x="260" y="115" width="42" height="38" fill="#FFD080" stroke="#A09070" stroke-width="1.5"/>
      <text x="101" y="90"  text-anchor="middle" font-size="11">📝</text>
      <text x="161" y="88"  text-anchor="middle" font-size="10">😓</text>
      <text x="221" y="90"  text-anchor="middle" font-size="10">📝</text>
      <text x="281" y="88"  text-anchor="middle" font-size="10">😰</text>
      <!-- よじ登る人1 -->
      <circle cx="128" cy="120" r="8"  fill="#C8A070"/>
      <rect x="123" y="128" width="9" height="18" fill="#8B4513" rx="1"/>
      <line x1="132" y1="132" x2="145" y2="112" stroke="#C8A070" stroke-width="3" stroke-linecap="round"/>
      <rect x="143" y="106" width="12" height="8"  fill="#FFF9C4" stroke="#999" stroke-width="0.8" transform="rotate(-10,149,110)"/>
      <line x1="124" y1="146" x2="116" y2="158" stroke="#C8A070" stroke-width="3" stroke-linecap="round"/>
      <line x1="131" y1="146" x2="138" y2="155" stroke="#C8A070" stroke-width="3" stroke-linecap="round"/>
      <!-- よじ登る人2 -->
      <circle cx="283" cy="108" r="8"  fill="#B8906A"/>
      <rect x="278" y="116" width="9" height="18" fill="#556B2F" rx="1"/>
      <line x1="278" y1="120" x2="262" y2="103" stroke="#B8906A" stroke-width="3" stroke-linecap="round"/>
      <rect x="250" y="97" width="11" height="8"  fill="#FFF9C4" stroke="#999" stroke-width="0.8" transform="rotate(8,255,101)"/>
      <line x1="279" y1="134" x2="271" y2="145" stroke="#B8906A" stroke-width="3" stroke-linecap="round"/>
      <rect y="175"  width="400" height="25" fill="#8B7355"/>
      <text x="200" y="192" text-anchor="middle" font-size="9.5" fill="white" font-weight="bold">ビハール州「外壁登りカンニング」2015</text>
    </svg>`
  },
  {
    id: 35,
    url: "article-35.html",
    flag: "🇮🇳",
    country: "インド各地",
    region: "アジア",
    dateLabel: "古来〜現在",
    dateISO: "2017-07-01",
    title: "カエルの結婚式で雨乞い——インド農村に残る「カエル婚」の風習、科学と信仰が交差する奇習",
    description: "インドの農村部で干ばつが続くと、カエルを新郎・新婦に見立ててバラモン僧が婚礼を執り行う「カエル婚」で雨乞いをする風習が各地に残る。BBCやロイターが繰り返し報道した。",
    excerpt: "インド農村では干ばつになるとカエルを新郎・新婦に見立て本物の結婚式を挙げる「カエル婚」で雨乞いをする。科学と信仰が交差する奇習をBBCが報道した。",
    tags: [
      { cls: "culture", label: "文化" },
      { cls: "animals", label: "動物" }
    ],
    source: "BBC News",
    sourceUrl: "https://www.bbc.com/news/world-asia-india-40728697",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#D8C888"/>
      <rect width="400" height="80"  fill="#B0C0D0"/>
      <ellipse cx="100" cy="42" rx="55" ry="22" fill="#8090A0" opacity="0.9"/>
      <ellipse cx="135" cy="32" rx="42" ry="18" fill="#7080909" opacity="0.9"/>
      <ellipse cx="290" cy="40" rx="58" ry="24" fill="#8090A0" opacity="0.9"/>
      <line x1="90"  y1="64" x2="88"  y2="76" stroke="#6699CC" stroke-width="1.5"/>
      <line x1="108" y1="62" x2="106" y2="74" stroke="#6699CC" stroke-width="1.5"/>
      <line x1="275" y1="64" x2="273" y2="76" stroke="#6699CC" stroke-width="1.5"/>
      <line x1="300" y1="62" x2="298" y2="74" stroke="#6699CC" stroke-width="1.5"/>
      <!-- 祭壇 -->
      <rect x="150" y="95"  width="100" height="48" fill="#F0E0A8" stroke="#C09050" stroke-width="1.5" rx="3"/>
      <ellipse cx="150" cy="95"  rx="8" ry="6" fill="#4A8A40"/>
      <ellipse cx="250" cy="95"  rx="8" ry="6" fill="#4A8A40"/>
      <ellipse cx="200" cy="89"  rx="14" ry="6" fill="#FF6090" opacity="0.8"/>
      <!-- カエル新郎 -->
      <ellipse cx="178" cy="130" rx="14" ry="10" fill="#4CAF50"/>
      <circle cx="178" cy="120" r="9"  fill="#4CAF50"/>
      <circle cx="173" cy="117" r="3"  fill="white" stroke="#333" stroke-width="0.8"/>
      <circle cx="183" cy="117" r="3"  fill="white" stroke="#333" stroke-width="0.8"/>
      <rect x="171" y="110" width="13" height="4" fill="#FFD700" rx="1"/>
      <!-- カエル新婦 -->
      <ellipse cx="222" cy="130" rx="14" ry="10" fill="#66BB6A"/>
      <circle cx="222" cy="120" r="9"  fill="#66BB6A"/>
      <circle cx="217" cy="117" r="3"  fill="white" stroke="#333" stroke-width="0.8"/>
      <circle cx="227" cy="117" r="3"  fill="white" stroke="#333" stroke-width="0.8"/>
      <circle cx="222" cy="110" r="5"  fill="#FF6090"/>
      <!-- 司祭 -->
      <circle cx="200" cy="162" r="9"  fill="#C8A070"/>
      <rect x="195" y="171" width="9"  height="20" fill="#FF9800" rx="1"/>
      <rect y="175"  width="400" height="25" fill="#B09850"/>
      <text x="200" y="192" text-anchor="middle" font-size="10" fill="white" font-weight="bold">インド「カエル婚」雨乞い儀式</text>
    </svg>`
  },
  {
    id: 36,
    url: "article-36.html",
    flag: "🇧🇩",
    country: "バングラデシュ・ナラヤンガンジ",
    region: "アジア",
    dateLabel: "2026.05.27",
    dateISO: "2026-05-27",
    title: "金髪アルビノ水牛「ドナルド・トランプ」、犠牲祭直前に政府介入で動物園へ——「髪型がそっくり」とSNSで世界バズり",
    description: "2026年5月、バングラデシュで「トランプ大統領に髪型がそっくり」と話題になったアルビノ水牛がイード直前に内務大臣命令で救出され、ダッカ国立動物園に移送された。Reuters・AFP報道。",
    excerpt: "金髪のアルビノ水牛が「トランプに似てる」とバズり、犠牲祭直前に政府介入で動物園送りに。バングラデシュ内務大臣が直々に救出命令。Reuters・AFP報道。",
    tags: [
      { cls: "animals", label: "動物" },
      { cls: "politics", label: "政治" }
    ],
    source: "Reuters / AFP",
    sourceUrl: "https://en.wikipedia.org/wiki/Donald_Trump_(buffalo)",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#8DC870"/>
      <rect width="400" height="80" fill="#87CEEB"/>
      <rect y="80" width="400" height="120" fill="#7AB85A"/>
      <!-- 水牛の体 -->
      <ellipse cx="220" cy="145" rx="100" ry="50" fill="#F5E8D8"/>
      <ellipse cx="300" cy="120" rx="50" ry="42" fill="#F5E8D8"/>
      <!-- 金髪 -->
      <path d="M265,95 Q275,80 290,78 Q305,72 315,80 Q325,68 338,75 Q335,92 320,97 Q300,94 280,98 Z" fill="#FFD700"/>
      <!-- 鼻 -->
      <ellipse cx="335" cy="135" rx="15" ry="9" fill="#FBBDB0"/>
      <!-- 目 -->
      <circle cx="308" cy="110" r="7" fill="white" stroke="#D4705A" stroke-width="1"/>
      <circle cx="308" cy="110" r="3" fill="#C05040"/>
      <!-- 角 -->
      <path d="M278,105 Q260,90 250,78" stroke="#D4C090" stroke-width="6" fill="none" stroke-linecap="round"/>
      <!-- 見物人 -->
      <circle cx="80" cy="140" r="10" fill="#C8A070"/>
      <rect x="74" y="150" width="12" height="28" fill="#E63946" rx="2"/>
      <!-- ラベル -->
      <rect y="175" width="400" height="25" fill="rgba(0,0,0,0.6)"/>
      <text x="200" y="192" text-anchor="middle" font-size="10" fill="#FFD070" font-weight="bold">🇧🇩 金髪アルビノ水牛「ドナルド・トランプ」</text>
    </svg>`
  },
  {
    id: 37,
    url: "article-37.html",
    flag: "🇮🇳",
    country: "インド・バレーリー",
    region: "アジア",
    dateLabel: "2015.12.22",
    dateISO: "2015-12-22",
    title: "サルがバスのエンジンをかけてセカンドギアで発進——インド・バレーリー、運転手は昼寝中だった",
    description: "2015年12月、インド・バレーリーのバス停で昼寝中の運転手のバスにサルが侵入しエンジンを始動。セカンドギアで発進し停車中の2台に衝突。Times of India・UPI報道。",
    excerpt: "インド・バレーリーでサルがバスのエンジンを始動しセカンドギアで発進。停車中の2台に衝突。運転手は昼寝中だった。Times of India・UPI報道。",
    tags: [
      { cls: "animals", label: "動物" },
      { cls: "crime", label: "事故" }
    ],
    source: "Times of India / UPI",
    sourceUrl: "https://timesofindia.indiatimes.com/city/bareilly/Monkey-drives-bus-rams-it-into-2-other-vehicles/articleshow/50286858.cms",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#87CEEB"/>
      <rect y="140" width="400" height="60" fill="#888"/>
      <line x1="0" y1="162" x2="400" y2="162" stroke="white" stroke-width="2" stroke-dasharray="18,12"/>
      <!-- メインバス -->
      <rect x="120" y="90" width="200" height="70" fill="#F4A261" rx="6"/>
      <rect x="135" y="100" width="45" height="30" fill="#B8D8F0" rx="3"/>
      <rect x="195" y="100" width="45" height="30" fill="#B8D8F0" rx="3"/>
      <rect x="250" y="93" width="15" height="58" fill="#E08040" rx="3"/>
      <circle cx="150" cy="163" r="14" fill="#333"/>
      <circle cx="150" cy="163" r="7" fill="#555"/>
      <circle cx="240" cy="163" r="14" fill="#333"/>
      <circle cx="240" cy="163" r="7" fill="#555"/>
      <!-- サル（運転席） -->
      <circle cx="148" cy="110" r="10" fill="#C8904A"/>
      <circle cx="148" cy="101" r="7" fill="#C8904A"/>
      <circle cx="144" cy="99" r="2" fill="#333"/>
      <circle cx="152" cy="99" r="2" fill="#333"/>
      <!-- 速度線 -->
      <line x1="265" y1="110" x2="295" y2="106" stroke="#FF4444" stroke-width="2" stroke-dasharray="5,3"/>
      <line x1="265" y1="120" x2="295" y2="120" stroke="#FF4444" stroke-width="2" stroke-dasharray="5,3"/>
      <!-- 衝突バス -->
      <rect x="20" y="100" width="110" height="65" fill="#4488CC" rx="5"/>
      <text x="75" y="138" text-anchor="middle" font-size="20">💥</text>
      <!-- ZZZ昼寝 -->
      <text x="220" y="112" font-size="14" fill="#FFE082" font-weight="bold">Z z</text>
      <!-- ラベル -->
      <rect y="178" width="400" height="22" fill="rgba(0,0,0,0.6)"/>
      <text x="200" y="193" text-anchor="middle" font-size="9" fill="#FFD070" font-weight="bold">🇮🇳 バレーリー「サル無免許運転」2015年</text>
    </svg>`
  },
  {
    id: 38,
    url: "article-38.html",
    flag: "🇹🇭",
    country: "タイ・ロッブリー県",
    region: "アジア",
    dateLabel: "毎年11月最終日曜日",
    dateISO: "1989-11-01",
    title: "2,000匹のサルに2トンのご馳走——タイ・ロッブリー「猿のビュッフェ祭り」、起源はホテル経営者の金運祈願",
    description: "タイ・ロッブリー県で毎年11月に開催される「モンキー・ビュッフェ・フェスティバル」。2,000匹超のカニクイザルに2トン以上の食事が振る舞われる。1989年にホテル経営者が金運祈願で始めた。BBC報道。",
    excerpt: "タイ・ロッブリーで毎年11月、2,000匹のサルに2トンの果物・もち米が振る舞われる世界最大の「猿の宴」。起源は1989年、ホテル経営者の金運祈願だった。BBC報道。",
    tags: [
      { cls: "culture", label: "文化" },
      { cls: "animals", label: "動物" },
      { cls: "food", label: "食" }
    ],
    source: "BBC / Thailand NOW",
    sourceUrl: "https://www.thailandnow.in.th/event/lopburi-monkey-festival/",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#87CEEB"/>
      <rect y="90" width="400" height="110" fill="#8DC870"/>
      <!-- 遺跡 -->
      <rect x="150" y="40" width="100" height="70" fill="#C8A060"/>
      <rect x="160" y="20" width="28" height="55" fill="#C8A060" rx="3"/>
      <polygon points="174,5 160,25 188,25" fill="#B89040"/>
      <rect x="200" y="14" width="28" height="58" fill="#C8A060" rx="3"/>
      <polygon points="214,0 200,20 228,20" fill="#B89040"/>
      <rect x="240" y="20" width="28" height="50" fill="#C8A060" rx="3"/>
      <polygon points="254,5 240,25 268,25" fill="#B89040"/>
      <!-- ビュッフェテーブル -->
      <rect x="60" y="110" width="280" height="10" fill="#8B4513" rx="3"/>
      <rect x="65" y="120" width="270" height="45" fill="#DEB887" rx="3"/>
      <!-- 果物 -->
      <ellipse cx="120" cy="115" rx="18" ry="9" fill="#FFD700"/>
      <ellipse cx="175" cy="114" rx="20" ry="10" fill="#FF6060"/>
      <ellipse cx="240" cy="115" rx="18" ry="10" fill="#FFA040"/>
      <polygon points="310,105 290,125 330,125" fill="white"/>
      <!-- サル絵文字 -->
      <text x="95" y="145" font-size="14">🐒</text>
      <text x="140" y="142" font-size="13">🐒</text>
      <text x="195" y="145" font-size="14">🐒</text>
      <text x="255" y="143" font-size="13">🐒</text>
      <text x="305" y="145" font-size="14">🐒</text>
      <!-- ラベル -->
      <rect y="177" width="400" height="23" fill="rgba(0,0,0,0.6)"/>
      <text x="200" y="192" text-anchor="middle" font-size="9" fill="#FFD070" font-weight="bold">🇹🇭 ロッブリー 猿のビュッフェ祭り（1989〜）</text>
    </svg>`
  },
  {
    id: 39,
    url: "article-39.html",
    flag: "🇴🇲",
    country: "オマーン・アル=ムサンナ",
    region: "アジア",
    dateLabel: "2026.02",
    dateISO: "2026-02-01",
    title: "ラクダ美人コンテストで「コブ膨張」「唇ヒアルロン酸」発覚——オマーンで20頭が整形手術で失格、SNSでは「ラクダ版カーダシアン」",
    description: "2026年2月、オマーンのラクダ美人コンテストで20頭がボトックス注射、唇フィラー、シリコンによるコブ膨張などの美容整形で失格処分。SNSでは「Camel Kardashians」と呼ばれ話題に。Forbes・VICE報道。",
    excerpt: "2026年2月、オマーンのラクダ美人コンテストで20頭がボトックス・フィラー・「コブ膨張」で失格。SNSでは「ラクダ版カーダシアン」と命名。Forbes・VICE報道。",
    tags: [
      { cls: "animals", label: "動物" },
      { cls: "culture", label: "文化" }
    ],
    source: "Forbes / VICE / People",
    sourceUrl: "https://www.forbes.com/sites/tanyaakim/2026/02/24/another-camel-beauty-contest-is-rocked-by-a-botox-cheating-scandal/",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#F5D06A"/>
      <rect y="100" width="400" height="100" fill="#E8C87A"/>
      <!-- 砂丘 -->
      <ellipse cx="80" cy="105" rx="120" ry="18" fill="#D4A840"/>
      <ellipse cx="350" cy="108" rx="100" ry="15" fill="#D4A840"/>
      <!-- ラクダ体 -->
      <ellipse cx="210" cy="155" rx="90" ry="45" fill="#C8964A"/>
      <!-- 大きなコブ -->
      <ellipse cx="195" cy="108" rx="45" ry="40" fill="#B87830"/>
      <ellipse cx="240" cy="115" rx="35" ry="33" fill="#B87830"/>
      <text x="210" y="114" text-anchor="middle" font-size="11">💉</text>
      <!-- 首・頭 -->
      <rect x="265" y="120" width="28" height="45" fill="#C8964A" rx="5"/>
      <ellipse cx="290" cy="112" rx="32" ry="26" fill="#C8964A"/>
      <!-- 大きな唇 -->
      <ellipse cx="314" cy="127" rx="16" ry="9" fill="#FF8070"/>
      <!-- 目 -->
      <ellipse cx="298" cy="106" rx="6" ry="7" fill="white" stroke="#555" stroke-width="1"/>
      <circle cx="298" cy="107" r="3" fill="#333"/>
      <!-- 失格スタンプ -->
      <circle cx="340" cy="75" r="25" fill="none" stroke="#E84040" stroke-width="3"/>
      <line x1="322" y1="57" x2="358" y2="93" stroke="#E84040" stroke-width="3"/>
      <line x1="358" y1="57" x2="322" y2="93" stroke="#E84040" stroke-width="3"/>
      <!-- ラベル -->
      <rect y="177" width="400" height="23" fill="rgba(0,0,0,0.6)"/>
      <text x="200" y="192" text-anchor="middle" font-size="9" fill="#FFD070" font-weight="bold">🇴🇲 ラクダ整形スキャンダル「Camel Kardashians」</text>
    </svg>`
  },
  {
    id: 40,
    url: "article-40.html",
    flag: "🇮🇩",
    country: "インドネシア",
    region: "アジア",
    dateLabel: "2020年頃",
    dateISO: "2020-01-01",
    title: "「借金3万8千円を踏み倒すため死んだふり」——インドネシアの女性がFacebookに遺体写真を投稿させて債権者を撃退",
    description: "インドネシアの女性が約270ドルの借金を逃れるため、遺体のふりをして写真を撮影し息子にFacebookへ投稿させた。債権者は驚いて取り立てを断念したが、SNSで拡散し発覚。Oddity Central報道。",
    excerpt: "インドネシアの女性が約3万8千円の借金逃れのため死んだふりをしてFacebookに投稿。債権者は撃退したがSNSで拡散しバレた。Oddity Central報道。",
    tags: [
      { cls: "crime", label: "詐欺" },
      { cls: "culture", label: "文化" }
    ],
    source: "Oddity Central",
    sourceUrl: "https://www.odditycentral.com/tag/indonesia",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#F5E8D0"/>
      <rect width="400" height="120" fill="#EDD9B0"/>
      <rect y="160" width="400" height="40" fill="#C4A36A"/>
      <!-- マット -->
      <rect x="70" y="135" width="260" height="40" fill="#8B7355" rx="4"/>
      <!-- 横になっている人 -->
      <ellipse cx="200" cy="148" rx="120" ry="14" fill="#F0C090"/>
      <circle cx="305" cy="143" r="17" fill="#D4A070"/>
      <line x1="298" y1="140" x2="308" y2="140" stroke="#333" stroke-width="2" stroke-linecap="round"/>
      <!-- 花 -->
      <circle cx="170" cy="143" r="4" fill="#FF7090"/>
      <circle cx="240" cy="142" r="4" fill="#FF7090"/>
      <!-- Facebook投稿 -->
      <rect x="290" y="60" width="100" height="80" fill="white" rx="5" stroke="#1877F2" stroke-width="2"/>
      <rect x="290" y="60" width="100" height="22" fill="#1877F2" rx="4"/>
      <text x="340" y="75" text-anchor="middle" font-size="7" fill="white" font-weight="bold">Facebook</text>
      <text x="340" y="98" text-anchor="middle" font-size="7" fill="#333">「母は</text>
      <text x="340" y="110" text-anchor="middle" font-size="7" fill="#333">亡くなりました」</text>
      <text x="340" y="130" text-anchor="middle" font-size="9" fill="#1877F2">👍 156</text>
      <!-- 息子（撮影） -->
      <circle cx="60" cy="125" r="12" fill="#C8A070"/>
      <rect x="42" y="112" width="18" height="13" fill="#333" rx="2"/>
      <rect x="44" y="114" width="14" height="9" fill="#87CEEB" rx="1"/>
      <!-- ラベル -->
      <rect y="177" width="400" height="23" fill="rgba(0,0,0,0.6)"/>
      <text x="200" y="192" text-anchor="middle" font-size="9" fill="#FFD070" font-weight="bold">🇮🇩 インドネシア「借金逃れ死んだふり」作戦</text>
    </svg>`
  },
  {
    id: 41,
    url: "article-41.html",
    flag: "🇰🇪",
    country: "ケニア・ナイロビ",
    region: "アフリカ",
    dateLabel: "2020.04",
    dateISO: "2020-04-01",
    title: "コロナ外出禁止令で人間が消えた道路にライオンが堂々と昼寝——ナイロビ国立公園のライオンが市街地を「占拠」",
    description: "2020年4月、コロナ外出禁止令下のケニア・ナイロビで、ナイロビ国立公園のライオンたちが人気のない市街地の道路に出没し堂々と昼寝する姿をKWS（ケニア野生生物局）が撮影・公開。BBC・CNN報道。",
    excerpt: "コロナ外出禁止令で人が消えたナイロビの道路にライオンが出没し堂々と昼寝。ケニア野生生物局が写真を公開し世界に衝撃。BBC・CNN報道。",
    tags: [
      { cls: "animals", label: "動物" },
      { cls: "culture", label: "自然" }
    ],
    source: "BBC / CNN",
    sourceUrl: "https://www.bbc.com/news/world-africa-52266395",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#F4A460"/>
      <rect y="100" width="400" height="100" fill="#707070"/>
      <line x1="0" y1="142" x2="400" y2="142" stroke="white" stroke-width="2" stroke-dasharray="18,12"/>
      <!-- ナイロビビル（シルエット） -->
      <rect x="10" y="55" width="20" height="50" fill="#555" opacity="0.6"/>
      <rect x="40" y="42" width="18" height="62" fill="#666" opacity="0.6"/>
      <rect x="68" y="50" width="22" height="55" fill="#555" opacity="0.6"/>
      <rect x="340" y="45" width="22" height="60" fill="#555" opacity="0.6"/>
      <rect x="370" y="35" width="25" height="70" fill="#666" opacity="0.6"/>
      <!-- ライオン（道路に寝転がる） -->
      <ellipse cx="210" cy="158" rx="95" ry="33" fill="#C8A030"/>
      <!-- 頭 -->
      <circle cx="290" cy="148" rx="30" fill="#C8A030"/>
      <circle cx="290" cy="148" rx="37" fill="#8B5E20" opacity="0.65"/>
      <circle cx="290" cy="146" rx="26" fill="#C8A030"/>
      <!-- 目（半目） -->
      <ellipse cx="280" cy="143" rx="6" ry="4" fill="#333"/>
      <ellipse cx="300" cy="143" rx="6" ry="4" fill="#333"/>
      <!-- 尻尾 -->
      <path d="M120,155 Q95,142 88,158 Q82,170 96,172" stroke="#C8A030" stroke-width="7" fill="none" stroke-linecap="round"/>
      <circle cx="96" cy="172" r="5" fill="#8B5E20"/>
      <!-- ZZZ -->
      <text x="325" y="128" font-size="14" fill="#FFE082" font-weight="bold">Z z</text>
      <!-- ラベル -->
      <rect y="178" width="400" height="22" fill="rgba(0,0,0,0.65)"/>
      <text x="200" y="193" text-anchor="middle" font-size="9" fill="#FFD070" font-weight="bold">🇰🇪 ナイロビ 人間不在→ライオンが道路占拠 2020年</text>
    </svg>`
  },
  {
    id: 42,
    url: "article-42.html",
    flag: "🇨🇳",
    country: "中国・雲南省昆明",
    region: "アジア",
    dateLabel: "2011.07",
    dateISO: "2011-07-01",
    title: "従業員すら本物だと信じていた——中国・昆明の「偽アップルストア」が完璧すぎて世界騒然",
    description: "2011年7月、中国・昆明で発見された偽アップルストアが世界的話題に。木製螺旋階段、青いTシャツの店員、Genius Barまで完全再現。従業員すら「自分はApple社員」と信じていた。BBC・Reuters報道。",
    excerpt: "2011年、中国・昆明で偽アップルストアが発見。内装・制服・Genius Barまで完全コピー。従業員すら自分がApple社員だと信じていた衝撃の事件。BBC報道。",
    tags: [
      { cls: "crime", label: "詐欺" },
      { cls: "culture", label: "テクノロジー" }
    ],
    source: "BBC News / Reuters",
    sourceUrl: "https://www.bbc.com/news/technology-14352680",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#F5F5F5"/>
      <!-- 店舗外観 -->
      <rect x="50" y="20" width="300" height="155" fill="#E8E8E8" stroke="#CCC" stroke-width="2"/>
      <rect x="60" y="40" width="280" height="130" fill="white"/>
      <!-- Appleロゴ風（×マーク付き） -->
      <circle cx="200" cy="35" rx="15" fill="#999"/>
      <rect x="193" y="22" width="10" height="10" fill="#E8E8E8"/>
      <circle cx="200" cy="35" rx="10" fill="#999"/>
      <rect x="190" y="30" width="20" height="12" fill="#E8E8E8"/>
      <text x="218" y="38" font-size="10" fill="#E84040">❌</text>
      <!-- 展示台 -->
      <rect x="70" y="110" width="80" height="6" fill="#D0D0D0" rx="2"/>
      <rect x="170" y="110" width="80" height="6" fill="#D0D0D0" rx="2"/>
      <rect x="270" y="110" width="60" height="6" fill="#D0D0D0" rx="2"/>
      <!-- 青Tシャツ店員 -->
      <circle cx="100" cy="138" r="9" fill="#F0C090"/>
      <rect x="94" y="147" width="12" height="20" fill="#0071E3" rx="2"/>
      <circle cx="195" cy="136" r="9" fill="#D4A070"/>
      <rect x="189" y="145" width="12" height="20" fill="#0071E3" rx="2"/>
      <circle cx="290" cy="137" r="9" fill="#C8A070"/>
      <rect x="284" y="146" width="12" height="20" fill="#0071E3" rx="2"/>
      <!-- FAKEスタンプ -->
      <rect x="115" y="65" width="70" height="32" fill="none" stroke="#E84040" stroke-width="3" rx="4" transform="rotate(-12,150,81)"/>
      <text x="150" y="84" text-anchor="middle" font-size="18" fill="#E84040" font-weight="bold" transform="rotate(-12,150,81)">FAKE</text>
      <!-- ラベル -->
      <rect y="177" width="400" height="23" fill="rgba(0,0,0,0.6)"/>
      <text x="200" y="192" text-anchor="middle" font-size="9" fill="#FFD070" font-weight="bold">🇨🇳 昆明「完璧すぎる偽アップルストア」2011年</text>
    </svg>`
  },
  {
    id: 43,
    url: "article-43.html",
    flag: "🇰🇷",
    country: "韓国・ソウル",
    region: "アジア",
    dateLabel: "2026.05.18",
    dateISO: "2026-05-18",
    title: "スタバ韓国「タンク・デー」が光州事件記念日と重なり大炎上——CEO即日解任、大統領も激怒、全国ボイコットに発展",
    description: "2026年5月18日、スターバックス韓国が「タンク・デー」タンブラーキャンペーンを開始。同日は光州事件の記念日。大統領が激怒しCEOは即日解任。全国規模のボイコットに発展。CNBC・Reuters報道。",
    excerpt: "スタバ韓国が「タンク・デー」キャンペーンを光州事件記念日に開始し大炎上。大統領が「下劣な商人」と激怒、CEOは即日解任。CNBC・Reuters報道。",
    tags: [
      { cls: "politics", label: "政治" },
      { cls: "culture", label: "文化" }
    ],
    source: "CNBC / Reuters / Al Jazeera",
    sourceUrl: "https://www.cnbc.com/2026/05/19/starbucks-korea-head-fired-after-tank-day-promotion-sparks-public-uproar.html",
    thumbSvg: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#1A1A2E"/>
      <!-- 炎 -->
      <ellipse cx="200" cy="195" rx="200" ry="30" fill="#FF6B00" opacity="0.35"/>
      <path d="M80,185 Q70,145 90,128 Q85,158 108,145 Q96,175 120,162 Q110,185 80,185 Z" fill="#FF6B00"/>
      <path d="M320,180 Q330,140 310,125 Q315,155 292,142 Q304,170 280,158 Q290,182 320,180 Z" fill="#FF6B00"/>
      <!-- スタバカップ -->
      <path d="M155,48 L163,165 L237,165 L245,48 Z" fill="#00704A"/>
      <ellipse cx="200" cy="48" rx="45" ry="9" fill="#1E3932"/>
      <circle cx="200" cy="100" rx="32" fill="#1E3932"/>
      <circle cx="200" cy="100" rx="26" fill="#00704A"/>
      <circle cx="200" cy="100" rx="20" fill="#1E3932"/>
      <text x="200" y="105" text-anchor="middle" font-size="14" fill="#CBA135">☕</text>
      <!-- タンクデザイン -->
      <rect x="165" y="138" width="70" height="25" fill="#556B2F" rx="3"/>
      <ellipse cx="172" cy="151" rx="11" ry="9" fill="#444"/>
      <ellipse cx="228" cy="151" rx="11" ry="9" fill="#444"/>
      <rect x="205" y="134" width="35" height="7" fill="#4A5A30" rx="2"/>
      <!-- 怒りの炎テキスト -->
      <text x="80" y="55" text-anchor="middle" font-size="22" fill="#FF4500">🔥</text>
      <text x="320" y="55" text-anchor="middle" font-size="22" fill="#FF4500">🔥</text>
      <!-- CEO解任 -->
      <rect x="270" y="68" width="120" height="40" fill="rgba(255,255,255,0.9)" rx="5" stroke="#E84040" stroke-width="1.5"/>
      <text x="330" y="84" text-anchor="middle" font-size="8" fill="#E84040" font-weight="bold">CEO 即日解任</text>
      <text x="330" y="99" text-anchor="middle" font-size="7.5" fill="#333">CNBC / Reuters</text>
      <!-- ラベル -->
      <rect y="177" width="400" height="23" fill="rgba(0,0,0,0.7)"/>
      <text x="200" y="192" text-anchor="middle" font-size="8.5" fill="#FFD070" font-weight="bold">🇰🇷 スタバ韓国「タンク・デー」炎上→CEO解任 2026.5.18</text>
    </svg>`
  }
];

/* ----------------------------------------------------------------
 * ユーティリティ関数（index.html・seo.js から利用）
 * ---------------------------------------------------------------- */

/**
 * 記事IDからデータを取得する
 * @param {number} id
 * @returns {object|null}
 */
function getArticleById(id) {
  return ARTICLES_DATA.find(a => a.id === id) || null;
}

/**
 * ファイル名から記事データを取得する
 * @param {string} filename  例: "article-05.html"
 * @returns {object|null}
 */
function getArticleByFilename(filename) {
  return ARTICLES_DATA.find(a => a.url === filename) || null;
}

/**
 * 地域フィルター用: 利用されているすべての地域を取得する
 * @returns {string[]}
 */
function getAllRegions() {
  return [...new Set(ARTICLES_DATA.map(a => a.region))].sort();
}

/**
 * タグクラスの表示名マップ
 */
const TAG_LABELS = {
  culture:  "文化",
  crime:    "犯罪・事故",
  animals:  "動物",
  politics: "政治・経済",
  food:     "食"
};
