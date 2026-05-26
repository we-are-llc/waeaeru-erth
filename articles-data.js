/**
 * 笑える地球 — 記事メタデータ一覧
 * ============================================================
 *
 * 🆕 記事を追加するには（4ステップ）:
 *
 *   Step 1. このファイルの ARTICLES_DATA 配列の末尾に新しいオブジェクトを追記する
 *           → id は既存の最大値 + 1 にする
 *
 *   Step 2. article-template.html をコピーして article-NN.html を作成し、
 *           コメントに従って記事内容・SVGイラストを編集する
 *
 *   Step 3. index.html の「SVG サムネイル テンプレート」セクションに
 *           <template id="thumb-NN">...</template> を追加する
 *           ※ SVG を省略した場合は国旗＋国名のシンプルなカードが自動生成される
 *
 *   Step 4. sitemap.xml に新しい <url> エントリを追加する
 *
 * ============================================================
 *
 * データ仕様:
 *   id          : 記事の一意な番号（整数）
 *   url         : 記事HTMLファイル名
 *   flag        : 国旗絵文字
 *   country     : 表示用の国・地域名
 *   region      : フィルター用地域ラベル（下記から選択）
 *                 "アフリカ" | "中南米" | "アジア" | "ヨーロッパ" | "中央アジア" | "カリブ海"
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
    sourceUrl: "https://www.nationalgeographic.com/culture/article/flying-cholitas-indigenous-women-bolivia-wrestling"
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
    sourceUrl: "https://saharareporters.com/2009/01/22/updated-nigeria-police-auction-robber-goat-2-champion"
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
    sourceUrl: "https://www.cbc.ca/news/world/maldives-cabinet-holds-underwater-meeting-1.864322"
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
    sourceUrl: "https://www.france24.com/en/live-news/20231130-paraguay-official-sacked-after-dealings-with-fictitious-country"
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
    sourceUrl: "https://www.dailymaverick.co.za/article/2025-04-13-penguin-causes-helicopter-crash-bird-humans-okay/"
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
    sourceUrl: "https://abcnews.go.com/International/galapagos-giant-tortoise-sex-retires-saving-species/story?id=68231846"
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
    sourceUrl: "https://www.okayafrica.com/ghanas-dancing-pallbearers-are-showing-the-world-how-to-grieve/"
  },
  {
    id: 8,
    url: "article-08.html",
    flag: "🇧🇷",
    country: "ブラジル・サンパウロ",
    region: "中南米",
    dateLabel: "1959.10",
    dateISO: "1959-10-01",
    title: "サンパウロ市議会選挙でサイ「カカレコ」が100,000票超を獲得——人間候補を全員圧倒し1位、当選は無効に",
    description: "1959年ブラジル・サンパウロ市議会選挙で動物園のサイ「カカレコ」が10万票超を獲得し1位に。2位の人間候補の4倍の得票。「動物に被選挙権なし」と当選無効。The Daily Beast報道。",
    excerpt: "1959年サンパウロ市議会選挙で動物園のサイ「カカレコ」が10万票超で1位に。2位の人間候補の4倍の差で圧勝するも「動物に被選挙権なし」で当選無効。",
    tags: [
      { cls: "politics", label: "選挙" },
      { cls: "animals", label: "動物" }
    ],
    source: "Wikipedia / The Daily Beast",
    sourceUrl: "https://en.wikipedia.org/wiki/Cacareco"
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
    sourceUrl: "https://www.npr.org/sections/thetwo-way/2014/01/22/265060754/wow-dogecoin-other-donors-send-jamaican-bobsled-team-to-sochi"
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
    sourceUrl: "https://en.wikipedia.org/wiki/Zimbabwean_one_hundred_trillion_dollar_note"
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
    sourceUrl: "https://www.bbc.com/news/science-environment-57170110"
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
    sourceUrl: "https://www.bbc.com/news/business-57398640"
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
    sourceUrl: "https://en.wikipedia.org/wiki/La_Tomatina"
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
    sourceUrl: "https://www.reuters.com/article/us-health-coronavirus-philippines-undead/philippine-police-dress-as-vampires-to-enforce-coronavirus-curfew-idUSKCN21S0TS"
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
    sourceUrl: "https://www.bbc.com/news/world-asia-45463027"
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
    sourceUrl: "https://www.vice.com/en/article/takanakuy-the-peruvian-christmas-tradition-of-settling-scores-with-fist-fights"
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
    sourceUrl: "https://www.bbc.com/news/world-latin-america-34618382"
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
    sourceUrl: "https://www.fao.org/news/story/en/item/185551/icode/"
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
    sourceUrl: "https://www.bbc.com/news/world-latin-america-30505671"
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
    sourceUrl: "https://www.bbc.com/news/world-asia-56395657"
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
    sourceUrl: "https://www.bbc.com/news/world-middle-east-55547665"
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
    sourceUrl: "https://en.wikipedia.org/wiki/Mobile_phone_throwing"
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
    sourceUrl: "https://www.bbc.com/news/uk-10918429"
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
    sourceUrl: "https://www.bbc.com/news/world-us-canada-19636898"
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
    sourceUrl: "https://www.bbc.com/news/world-asia-china-22907321"
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
