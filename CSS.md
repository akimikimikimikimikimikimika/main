# CSSのテンプレート
ここでは,テキスト設定の一例を示す。使い方や好みに応じて変更する必要がある。

## テキストの基本設定

```CSS
font-family:sans-serif;
font-size:18px;
text-align:left;
```

- `text-align`
	* `left` … 左端揃え
	* `center` … 中央揃え
	* `right` … 右端揃え
	* `justify` … 両端揃え

## 折り返し

### 折り返す場合
```CSS
word-break:normal;
overflow-wrap:break-word;
white-space:normal;
hyphens:manual;
```

### 折り返さない場合
```CSS
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;
```

- `overflow-wrap`
	* `break-word` … **1行に収まらないような長い単語やURL等**の途中に改行を挿入する。
	* `normal` … 空白でのみ改行する。

- `word-break`
	* `break-all` … **任意の単語**の途中でも改行を挿入する。
	* `normal` … 空白でのみ改行する。CJKは文末で強制改行される。
	* `keep-all` … 空白でのみ改行する。CJKは改行されない。

- `hyphens`
	* `manual` … ハイフン処理は行わない。明示的にハイフンを示したい場合は,以下に示すハイフンを挿入する。
		* `&hyphen;` … 通常の可視ハイフン。
		* `&shy;` … 不可視のハイフン。折り返す位置を示す役割。
	* `auto` … 行末での単語途中の折り返しで必要に応じてハイフン処理を行う。

- `white-space`

| | 空白/タブ文字 | 改行文字 | 折り返し |
|:-|:-:|:-:|:-:|
| `normal`   | 詰める | 詰める | する |
| `nowrap`   | 詰める | 詰める | しない |
| `pre`      | 残す | 残す | しない |
| `pre-wrap` | 残す | 残す | する |
| `pre-line` | 残す | 詰める | する |

`pre`系はHTMLの`<pre>`要素のような整形済みテキストを表すから,基本的に改行文字はそのまま改行し,空白もそのまま残す。

- `text-overflow`
	* `ellipsis` … テキストがはみ出した場合は省略記号(…)で省略を示す。
	* `clip` … 単にはみ出した部分を切り取る。

### ソースコードなどの整形済みテキストのプリセット

```CSS
font-size:18px;
font-weight:300;
font-family:monospace;
word-break:normal;
overflow-wrap:break-word;
white-space:pre-wrap;
tab-size:4;
```

- `tab-size` … タブ文字の幅を指定する。つまり,`tab-indent:4;`とすれば,1つのタブ文字の幅はスペース4つ分に相当する。

## 装飾

```CSS
font-weight:normal;
font-style:normal;
line-height:normal;
text-align:left;
text-transform:normal;
text-decoration:none;
text-emphasis:none;
```

- `font-weight`
	* `normal` … 通常 (400)
	* `bold` … **太字 (700)**

- `font-style`
	* `normal` … 通常
	* `italic` … *斜体*

- `line-height` … 行の高さ
	* `normal` … 通常
	* `1.5`など … 高さ調整

- `text-align`
	* `left` … 左端揃え
	* `center` … 中央揃え
	* `right` … 右端揃え
	* `justify` … 両端揃え

- `text-transform`
	* `normal` … 通常
	* `capitalize` … 全ての単語の先頭を大文字にする
	* `uppercase` … 全て大文字にする
	* `lowercase` … 全て小文字にする

- `text-decoration` … 線を引く
    - `text-decoration-line`
        * `none` … なし
        * `underline` … 下線
        * `overline` … 上線
        * `line-through` … 打ち消し線
    - `text-decoration-color`
    - `text-decoration-style`
        * `solid` … 1本の直線
        * `double` … 2本の直線
        * `dotted` … 1本の点線
        * `dashed` … 1本の破線
        * `wavy` … 1本の波線

- `text-emphasis` … 圏点を打つ
    - `text-emphasis-style`
        * `none` … なし
        * `dot` … • / ◦
        * `circle` … ● / ○
        * `double-circle` … ◉ / ◎
        * `triangle` … ▲ / △
        * `sesame` … ﹅ / ﹆
        * 又は,好きな文字
        上の5つのキーワードは,`open`を前置すれば後者の中抜き文字になる。
    - `text-emphasis-color`

## 高度なフォント設定

```CSS
word-spacing:3px;
letter-spacing:1px;
font-synthesis:weight style;
font-kerning:normal;
font-variant-caps:normal;
font-variant-ligatures:common-ligatures;
font-variant-east-asian:jis04;
font-stretch:normal;
```

- `word-spacing`
	単語間の空白のスペースの大きさ。通常は `normal` を指定する。

- `letter-spacing`
	文字間のスペースの大きさ。通常は `normal` を指定する。

- `font-synthesis`
	フォントにボールド体/イタリック体が含まれていない場合,合成して良いかどうか。
    * `weight` … ボールド体の合成を許可
    * `style` … イタリック体の合成を許可
    * `none` … 許可しない

- `font-kerning`
	文字間の間隔に関するカーニングを適用するかどうか。オンにすると,例えばLTの文字並びで,空白部分が詰められる。オフにすれば,全ての文字が等間隔に並ぶ。
    * `normal` … オン
    * `none` … オフ

- `font-variant-caps`
	スモールキャップ(小ぶりな大文字)で表示するかどうか。
    * `normal` … 通常の表示
    * `small-caps` … 小文字をスモールキャップにする
    * `all-small-caps` … 大文字もスモールキャップにする

- `font-variant-ligatures`
	fiなどでリガチャ(合字)を行うかどうか。ここでは一般的なリガチャにのみ言及する。
    * `common-ligatures`, `normal` … オン
    * `no-common-ligatures` … オフ

- `font-variant-east-asian`
	漢字の字形の違いを調整する。
    * `jis04` … 日本語 (JIS)
    * `simplified` … 簡体字中国語
    * `traditional` … 繁体字中国語

- `font-stretch`
	フォントを横に伸縮する。これにより,一部のフォントでは,コンデンストフォントが指定できる。又,パーセント表記でも指定でき,ごく一部に数値に対してフレキシブルに動くフォントもある。
    * `normal` … 通常 (`100%`に相当)
    * `condensed` … 縮んだフォント (`75%`に相当)
