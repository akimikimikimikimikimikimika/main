## Password Generator

Password Generatorは,条件に合わせてランダムなパスワードを生成するためのツールです。ページデザインが粗雑ながら,パスワード生成という目的に特化して設計しています。モバイルデバイスで動作します。

### 基本
- Lengthでパスワードの文字数を設定できます。
- Characterでパスワードに含める文字を制限できます。
- Generateをタップすると,条件に合わせてパスワードを生成します。
- Copyをタップすると,生成したパスワードをクリップボードにコピーします。

### Character
- 文字群(英字大文字,英字小文字,数字,記号)の中から,使用するものを選べる
- 表示された文字群を選択すると,オン/オフが切り替えできる
- 文字群の右側にある歯車をタップすると,個別の文字ごとにオン/オフを選択できる

### 特記事項
- JavaScript,CSSを無効にすると利用できない。
- Generateを押しても直ぐに生成されない場合がある。(仕様)
- iOSデバイスでの動作のみ検証済。その他の閲覧環境では作動しない可能性もある。

### 開く
- [オンライン版](https://akimikimikimikimikimikimika.github.io/main/PasswordGenerator/PasswordGenerator.html "Password Generatorオンライン版")
- [オフライン版](https://akimikimikimikimikimikimika.github.io/main/PasswordGenerator/offline.html "Password Generatorオフライン版")
- [ソースコード (GitHub)](https://github.com/akimikimikimikimikimikimika/main/tree/master/PasswordGenerator "ソースコード")

オンライン版では,全てのコンテンツを組み込み,常に最新の状態で利用できます。
オフライン版では,オンライン版と同じ体験をオフラインでもできるようにします。URLのdataスキームに全てのソースコードを埋め込んでいるので,一部コンテンツに制限があります。
