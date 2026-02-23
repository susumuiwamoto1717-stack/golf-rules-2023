// 鶴舞カントリー倶楽部 競技規則データ
const CLUB_RULES_DATA = {
  categories: [
    {
      id: "competition",
      icon: "📋",
      title: "競技規則",
      items: [
        {
          title: "競技委員会の権限",
          content: "競技委員会は鶴舞カントリー倶楽部に於いて競技の条件を修正する権限を有し、すべての事項について競技委員会の裁定は最終である。\n\n1. 競技は特に定められた場合を除き、すべて倶楽部所定のハンディキャップ（以下HDCP）のもとに行い、倶楽部所定の競技使用ティーイングエリア（以下TA）とは次の通りとする。これを誤った場合は直ちに競技委員会に申告しなければならない。これを怠った場合は競技失格とする。\n\n2. 競技参加者は倶楽部所定のHDCPを有し、満20才以上の社会人であることとする。\n\n3. ハンディキャップに変動があった場合は、直ちに競技委員会に申告しなければならない。これを怠った場合は競技失格とする。"
        },
        {
          title: "HDCP区分と使用ティー",
          content: "<div class='club-rule-sub'>イ. HDCP別区分</div>\n<ul>\n<li>Aクラス：HDCP 13以下</li>\n<li>Bクラス：HDCP 14以上</li>\n</ul>\n\n<div class='club-rule-sub'>ロ. 月例杯オープンの使用ティーについて</div>\n<ul>\n<li>第一ブロックは男性「RT」女性「FT」</li>\n<li>第二ブロックは男性「BT」女性「RT」とする。</li>\n</ul>\n\n<div class='club-rule-sub'>ハ. 競技別使用TAと女子HDCP</div>\n<table class='club-rule-table'>\n<thead><tr><th>競技名</th><th>男子使用TA</th><th>女子使用TA</th><th>女子HDCP</th></tr></thead>\n<tbody>\n<tr><td>スクラッチ競技</td><td>バック</td><td>バック</td><td></td></tr>\n<tr><td>クラブ選手権</td><td>バック</td><td>レギュラー</td><td>HD+3</td></tr>\n<tr><td>キャプテン杯</td><td>バック</td><td>レギュラー</td><td>HD+6</td></tr>\n<tr><td>理事長杯</td><td>レギュラー</td><td>レギュラー</td><td>HD+2</td></tr>\n<tr><td>シニア選手権</td><td>レギュラー</td><td>フロント</td><td></td></tr>\n<tr><td>ミッドシニア杯</td><td>レギュラー</td><td>フロント</td><td>HD+2</td></tr>\n<tr><td>グランドシニア杯</td><td>レギュラー</td><td>フロント</td><td></td></tr>\n<tr><td>月例杯 A</td><td>バック</td><td>レギュラー</td><td>HD+3</td></tr>\n<tr><td>月例杯 B</td><td>レギュラー</td><td>レギュラー</td><td>HD+2</td></tr>\n<tr><td>月例杯オープン①</td><td>レギュラー</td><td>フロント</td><td>HD+3</td></tr>\n<tr><td>月例杯オープン②</td><td>レギュラー</td><td>フロント</td><td>HD+3</td></tr>\n<tr><td>上記以外の競技</td><td>フロント</td><td>フロント</td><td>HD+2</td></tr>\n</tbody>\n</table>\n\n※ 競技のHDCP上限は男子30とし女子は35とする。"
        },
        {
          title: "競技一覧表",
          content: "<table class='club-rule-table'>\n<thead><tr><th>競技名</th><th>競技方式</th><th>タイブレーク</th><th>決勝方式</th></tr></thead>\n<tbody>\n<tr><td>スクラッチ競技</td><td>36Hストローク（スクラッチ）</td><td>エキストラ</td><td>マッチプレー</td></tr>\n<tr><td>クラブ選手権</td><td>36Hストローク</td><td>エキストラ</td><td>マッチプレー</td></tr>\n<tr><td>キャプテン杯</td><td>18Hストローク</td><td>エキストラ</td><td>マッチプレー</td></tr>\n<tr><td>理事長杯</td><td>27Hストローク</td><td>マッチプレー</td><td>マッチプレー</td></tr>\n<tr><td>シニア選手権</td><td>36Hストローク</td><td>エキストラ</td><td>マッチプレー</td></tr>\n<tr><td>ミッドシニア杯</td><td>18Hストローク</td><td>エキストラ</td><td>マッチプレー</td></tr>\n<tr><td>グランドシニア杯</td><td>18Hストローク</td><td>エキストラ</td><td>マッチプレー</td></tr>\n</tbody>\n</table>"
        },
        {
          title: "参加条件・競技資格",
          content: "4. 競技参加者は16名（グランドシニア杯、平日競技は12名）に満たない場合は競技不成立とし、遅れた場合は競技委員とする。\n\n<div class='club-rule-sub'>競技資格</div>\n<ul>\n<li>スクラッチ競技：HDCP 10まで</li>\n<li>クラブ選手権：HDCP 24まで</li>\n<li>キャプテン杯：HDCP 24まで</li>\n<li>理事長杯：HDCP 24まで</li>\n<li>シニア選手権：本年中に55才以上、HDCP 24まで</li>\n<li>ミッドシニア杯：本年中に65才以上</li>\n<li>グランドシニア杯：本年中に70才以上</li>\n</ul>\n\n<div class='club-rule-sub'>全競技に共通</div>\n<ul>\n<li>男子HDCP 31以上はHDCP 30として参加することができる</li>\n<li>女子HDCP 36以上はHDCP 35として参加することができる</li>\n</ul>"
        },
        {
          title: "競技受付期間",
          content: "<table class='club-rule-table'>\n<thead><tr><th>競技名</th><th>受付開始</th><th>受付締切</th></tr></thead>\n<tbody>\n<tr><td>スクラッチ競技</td><td>2月開始日</td><td>競技日10日前</td></tr>\n<tr><td>クラブ選手権</td><td>2月開始日</td><td>競技日10日前</td></tr>\n<tr><td>キャプテン杯</td><td>2月開始日</td><td>競技日10日前</td></tr>\n<tr><td>理事長杯</td><td>2月開始日</td><td>競技日10日前</td></tr>\n<tr><td>シニア選手権</td><td>2月開始日</td><td>競技日10日前</td></tr>\n<tr><td>ミッドシニア杯</td><td>2月開始日</td><td>競技日10日前</td></tr>\n<tr><td>グランドシニア杯</td><td>2月開始日</td><td>競技日10日前</td></tr>\n<tr><td>上記以外の競技</td><td>1月開始日</td><td>競技日10日前</td></tr>\n</tbody>\n</table>"
        },
        {
          title: "エントリー・キャンセル",
          content: "※2024年1月1日より「上記以外の競技」は10月10日17時までの受付にてエントリー締め切りとする。各月の受付締め切り後にキャンセル待ちを行う。\n\nエントリー期間にエントリーした参加者が定員に満たない場合は、会員であればエントリー優先、それ以外は先着順にて受付する。\n\n<div class='club-rule-sub'>キャンセル規定</div>\n<ul>\n<li>予定及び入金をキャンセルした場合は1年間一般エントリーを停止する</li>\n<li>申込金と名義変更料HPより引き落とされる</li>\n<li>キャンセルは書面に明記する</li>\n</ul>\n\n10. 競技の組み合わせ及びスタートは全て倶楽部の予約システムで行う。競技参加料はスタートの10日前までの合計にて徴収する。なお不明な場合は競技委員会に確認すること。\n\n11. 9月以降の競技については、競技開催の都度確認をすること。但し、競技委員会がその都度改訂することがある。\n\n12. 予選日に代わる予備日にて新たな組み合わせが発生する場合、それまでの取消規定等はすべて適用されるものとする。\n\n13. 競技中のプレーヤーの行動はゴルフ規則（規則1.2b）を順守すること。\n\n14. 各ラウンドにおいてプレーヤーはティーイングエリアでは速やかにプレーの準備をし、グリーン上でのスコアの確認は次のティーイングエリアにて行うこと。一定の基準を超過したプレーヤーに対し当該ホールに一般の罰（2罰打）を科す（規則1.2b）。"
        },
        {
          title: "組み合わせ・スロープレー",
          content: "<div class='club-rule-sub'>5. 組み合わせ</div>\nイ. 組み合わせは原則として抽選により行う。競技参加者は1組4名とする。\n\nロ. 繰り上げ又は繰り下げの方法でHDCP順に混成することが出来る。\n\n<div class='club-rule-sub'>6. スコアカードの提出</div>\nスコアカードはプレーの終了後にアテストし、1時間以内に競技委員に提出すること。\n\n<div class='club-rule-sub'>スロープレーの規定</div>\n<ul>\n<li>スロープレーの基準はハーフ2時間10分とする</li>\n<li>超過した場合で前組に遅れた場合は競技委員が処置を取る</li>\n</ul>"
        },
        {
          title: "マッチング・乗用カート・その他",
          content: "<div class='club-rule-sub'>7. ハンディキャップ競技でマッチングスコアカード方式を用いる場合</div>\nマッチングするホール数に応じてフルハンディキャップの割合をHDCPとする。各種競技はHDCPにより区分する。\n\n<div class='club-rule-sub'>8. スロープレー</div>\n各組がハーフプレーに2時間10分を超過し前組に遅れた場合は、9H終了時に更に前組に遅れた場合は、その時点でハーフ最後のホールに全員に罰打2を附加する。\n\n<div class='club-rule-sub'>9. 乗用カート</div>\n乗用カートに乗車が認められない競技は下記の通り：\nスクラッチ競技、クラブ選手権。但し、プレー終了後は乗車可とする。\n\nイ. 乗車可とする。※気象状況により乗車可とする場合がある。\n\nロ. 乗用カートに乗車が認められていない競技で次の場合は乗車出来る。\n<ul>\n<li>（1）打ち忘れの場合</li>\n<li>（2）緊急時の任務</li>\n<li>（3）スカイレーダーが設置されているコース間</li>\n<li>（4）競技委員の判断により乗車可とする場合</li>\n</ul>\n\nハ. 乗用カートに乗車し移動した場合、罰打2を附加する。複数回乗車した場合は失格とする。\n\n<div class='club-rule-sub'>10. 各種乗用カートへの乗車</div>\n各種乗用カートへの乗車は可とする。乗用カートへの乗車について止むを得ない事情がある場合は、競技委員に申し出ること。競技に於いて、競技委員が止むを得ない事情により判断出来ない場合は、事務局が競技委員を代行する。\n\n<div class='club-rule-sub'>11. 最大スコア</div>\n最大スコア（ゴルフ規則 21.2）は採用せず、実際のスコアを採用する。\n\n<div class='club-rule-sub'>12. 距離計測機器</div>\n距離計測機器は高低差を計測すること、プレーヤーの球の位置に基づき、推奨されるプレーの線やクラブの選択に関する情報を得る機能をオフにした状態にて使用することが出来る。"
        },
        {
          title: "ローカルルール",
          content: "1. コースの境界は白杭、修理地は白線及び青杭と標示された区域とする。\n\n2. ワイヤ（鉄線）及び排水溝の蓋と隣接し球のある場合、もしくはこれらの敷設上その他の地面が球のライ、もしくは意図するスタンスの区域にかかっている場合は規則16.1aに基づく救済を受ける。もしくはカート道の反対側の完全な救済のニヤレストポイントの場所にドロップすることもできる。\n\n3. 樹木の保護又は養生のために設けられた支柱、養生マット等は動かせない障害物とする（ゴルフ規則16.1aによる）。\n\n4. 自然の力が吹き寄せた砂及びバラバラの土は、ジェネラルエリアにおいてルースインペディメントとして取り扱う。\n\n5. 練習場のネット及びフェンス、ヤーデージ杭は動かせない障害物とする。\n\n6. コース上のヤーデージポスト及び距離表示杭は動かせない障害物として取り扱う。\n\n7. ゴルフカート用の道路（舗装・砂利道）は、動かせない障害物として取り扱う。\n\n8. ペナルティーエリアの中で立入禁止の場所は、プレー禁止区域とする。球がペナルティーエリア内のプレー禁止区域にある場合は、ペナルティーエリアの規則に基づく救済を受けなければならない。\n\n9. 東1番ホールグリーン奥のフェンスはOBの境界とする。\n\n10. OBの白杭にかかって、カート路上に止まった球はOBとする。\n\n11. 上記以外はJ.G.Aのローカル・ルールひな形に準拠する。\n\n12. 本規則は2019年1月1日より施行する。"
        },
        {
          title: "附則（参加料・スコアカード）",
          content: "<div class='club-rule-sub'>15. ローカル・ルールの追加及び変更は競技委員会掲示板にて告示する。</div>\n\n16. 本則及びローカル・ルールに規定のない事項はすべてJ.G.Aの競技規則による。\n\n17. 本規則は2025年1月1日より実施する。\n\n<div class='club-rule-sub'>附則</div>\n\n<div class='club-rule-sub'>1. 競技当日のスタート</div>\n先行権を有する競技参加者を優先し、コース途中の先行権は有しない。18Hの競技に限り、9H終了後次のスタートまでを限度として、クラブハウス内にて食事をすることが出来る。\n\n<div class='club-rule-sub'>2. 各種競技の競技方式、及び入賞範囲は</div>\n競技日程表の通りとする。\n\n<div class='club-rule-sub'>3. 競技参加料を次の通り定める。（税別）</div>\n<table class='club-rule-table'>\n<thead><tr><th>競技名</th><th>参加料</th></tr></thead>\n<tbody>\n<tr><td>シニア選手権</td><td>3,000円</td></tr>\n<tr><td>クラブ選手権</td><td>3,000円</td></tr>\n<tr><td>理事長杯</td><td>3,000円</td></tr>\n<tr><td>キャプテン杯</td><td>3,000円</td></tr>\n<tr><td>スクラッチ競技</td><td>3,000円</td></tr>\n<tr><td>ミッドシニア杯</td><td>1,500円</td></tr>\n<tr><td>グランドシニア杯</td><td>1,500円</td></tr>\n<tr><td>その他の競技</td><td>1,500円</td></tr>\n</tbody>\n</table>\n\nなお、競技参加料は競技開催日の7日前より支払い義務が発生することとする。\n\n<div class='club-rule-sub'>5. スコアカードの提出</div>\n競技会に於いては、競技申込締切日の過去2ヵ月以内にテストされた当倶楽部のスコアカード2枚以上の提出を必要とする。但し、競技会のスコアカード1枚は3ヵ月間有効とする。\n（参考）11月の一般スコアカードは3月末まで有効。1月の競技会のスコアカードは4月末まで有効。\n\n<div class='club-rule-sub'>6. スクラッチ競技予選に於いて</div>\n1Rの通過ラインを89ストロークまでとし、90ストローク以上の者は2Rの出場はできない。"
        }
      ]
    },
    {
      id: "handicap",
      icon: "🏷️",
      title: "ハンディキャップ規定",
      items: [
        {
          title: "HDCP算出方法",
          content: "鶴舞カントリー倶楽部（以下TCC）は公益財団法人日本ゴルフ協会（以下JGA）のハンディキャップ規定をもとに以下の通りTCC/HDCP規定を制定する。\n\n<div class='club-rule-sub'>1. HDCPの算出</div>\nイ. JGAHDCPを参考とし、ハンディキャップ委員会（以下HC）により決定される。\nロ. 当倶楽部でのSCのみが有効とされる。\nハ. テストラウンドは4名1組にて行い、使用ティーは委員会が指定する。\n\n<div class='club-rule-sub'>2. SCの有効期限について</div>\nイ. SCの有効期限は原則なし。\nロ. ただし当倶楽部のSCのみが有効とされる。\n\n<div class='club-rule-sub'>3. 宣言制度</div>\n当日自身のプレーのSCのみが採用される。提出されたSCのみが有効とされる。\n\n<div class='club-rule-sub'>4. HDCPの発効</div>\nHDCP発効は毎月1日とし、7月1日のJGAHDCPインデックス（SC20のうちベスト8のディファレンシャルの平均）にて算出。8月1日以降も同HDCP有効とし、原則として直近のJGAHDCPインデックス（N.I）とし、TCC/HDCPの変更はN.Iの変動による。\n\n（HDCPが0〜9のTCC/HDCPはN.Iとする。）\n（HDCPが9以上のTCC/HDCPの変更はN.Iに基づく。）\n\n倶楽部はJGAHDCPの改正に基づきTCC/HDCPの変更を行う。JGAHDCPが5以上の変更の場合は速やかに変更する。TCC/HDCPの変更基準は別途定める。"
        },
        {
          title: "HDCP査定条件",
          content: "<div class='club-rule-sub'>HDCPが下がる場合</div>\n<table class='club-rule-table'>\n<thead><tr><th>鶴舞CC/HDCP</th><th>JGA HDCPとの差 4.1〜8.0</th><th>JGA HDCPとの差 8.1〜</th></tr></thead>\n<tbody>\n<tr><td>0〜9</td><td>＋1</td><td>＋2</td></tr>\n<tr><td>10〜40</td><td>＋2</td><td>＋3</td></tr>\n</tbody>\n</table>\n\n尚、HDCPは四捨五入により整数とする。\n\n<div class='club-rule-sub'>ロ. 競技入賞者及びマンスリースコア者は別途定める規定に</div>\nよりその都度見直しを実施する。\n\n<div class='club-rule-sub'>5. HDCP新規取得</div>\n提出されたSC10枚のうちベストディファレンシャル5枚にて算出する。\n\nイ. 提出されたSC5枚のうちベストディファレンシャル3枚と他倶楽部のHDCPを参考に査定する場合がある。\n\nロ. 参考ラウンドを実施する場合がある。\n\nハ. シングルHDCPを取得しようとする者に対してはその技量、マナー等別途査定を実施する。\n\n<div class='club-rule-sub'>6. HDCPを下げる場合の条件</div>\n<ul>\n<li>イ. 加齢理由による場合：申請時満60歳以上、TCC のSC3枚以上の提出。</li>\n<li>ロ. 病気理由による場合：医師の診断書、TCC のSC3枚以上の提出。</li>\n<li>ハ. 能力低下理由による場合：TCC のSC3枚以上の提出。</li>\n</ul>\n\n注1. 上記のSC3枚は申請時過去6ヵ月以内のものとする。\n注2. 改定は1年1回限りとする。但し70歳以上は2回まで。\n\n<div class='club-rule-sub'>HDCP別査定数値</div>\n<table class='club-rule-table'>\n<thead><tr><th>HDCP区分</th><th>査定値</th></tr></thead>\n<tbody>\n<tr><td>0〜5</td><td>＋2以内</td></tr>\n<tr><td>6〜9</td><td>＋3以内</td></tr>\n<tr><td>10〜20</td><td>＋4以内</td></tr>\n<tr><td>21以上</td><td>＋5以内</td></tr>\n</tbody>\n</table>\n\n<div class='club-rule-sub'>7. HDCP失効の要件</div>\n過去2年間にSC提出がない場合、HDCPは失効する。再取得は2枚以上のSC提出が必要（提出されたSC5枚のうちベストディファレンシャル3枚を参考に算出）。\n\n<div class='club-rule-sub'>8. その他</div>\n本規定に定めない事項は委員会が決定する。"
        },
        {
          title: "コースレート・スロープレート",
          content: "<div class='club-rule-sub'>男性</div>\n<table class='club-rule-table'>\n<thead><tr><th>コース</th><th>ティー</th><th>Rating</th><th>Slope</th></tr></thead>\n<tbody>\n<tr><td rowspan='6'>東</td><td>OLD Back</td><td>72.9</td><td>134</td></tr>\n<tr><td>OLD Regular</td><td>70.3</td><td>129</td></tr>\n<tr><td>OLD Front</td><td>67.0</td><td>123</td></tr>\n<tr><td>NEW Back</td><td>73.1</td><td>134</td></tr>\n<tr><td>NEW Regular</td><td>70.5</td><td>129</td></tr>\n<tr><td>NEW Front</td><td>67.2</td><td>123</td></tr>\n<tr><td rowspan='6'>西</td><td>OLD Back</td><td>72.8</td><td>128</td></tr>\n<tr><td>OLD Regular</td><td>70.2</td><td>122</td></tr>\n<tr><td>OLD Front</td><td>66.5</td><td>114</td></tr>\n<tr><td>NEW Back</td><td>73.2</td><td>131</td></tr>\n<tr><td>NEW Regular</td><td>70.5</td><td>125</td></tr>\n<tr><td>NEW Front</td><td>66.8</td><td>117</td></tr>\n</tbody>\n</table>\n\n<div class='club-rule-sub'>女性</div>\n<table class='club-rule-table'>\n<thead><tr><th>コース</th><th>ティー</th><th>Rating</th><th>Slope</th></tr></thead>\n<tbody>\n<tr><td rowspan='6'>東</td><td>OLD Back</td><td>79.4</td><td>143</td></tr>\n<tr><td>OLD Regular</td><td>76.3</td><td>136</td></tr>\n<tr><td>OLD Front</td><td>72.3</td><td>128</td></tr>\n<tr><td>NEW Back</td><td>79.6</td><td>142</td></tr>\n<tr><td>NEW Regular</td><td>76.4</td><td>135</td></tr>\n<tr><td>NEW Front</td><td>72.4</td><td>126</td></tr>\n<tr><td rowspan='6'>西</td><td>OLD Back</td><td>79.2</td><td>137</td></tr>\n<tr><td>OLD Regular</td><td>76.0</td><td>130</td></tr>\n<tr><td>OLD Front</td><td>71.4</td><td>120</td></tr>\n<tr><td>NEW Back</td><td>79.5</td><td>136</td></tr>\n<tr><td>NEW Regular</td><td>76.2</td><td>129</td></tr>\n<tr><td>NEW Front</td><td>71.6</td><td>120</td></tr>\n</tbody>\n</table>\n\n2016年9月査定"
        }
      ]
    },
    {
      id: "schedule",
      icon: "📅",
      title: "競技日程一覧（2026年）",
      items: [
        {
          title: "1月〜2月",
          content: "<div class='club-rule-sub'>1月</div>\n<ul class='schedule-list'>\n<li><span class='sch-date'>1(木)</span> 新年杯 18S（西）</li>\n<li><span class='sch-date'>2(金)</span> 月例杯 18S（西）</li>\n<li><span class='sch-date'>4(日)</span> 月例杯 18S（Bクラス）（西）</li>\n<li><span class='sch-date'>11(日)</span> 月例杯 18S（Aクラス）（西）</li>\n<li><span class='sch-date'>18(日)</span> 研修会（西）</li>\n<li><span class='sch-date'>25(日)</span> シニア研修会（西）</li>\n</ul>\n\n<div class='club-rule-sub'>2月</div>\n<ul class='schedule-list'>\n<li><span class='sch-date'>1(日)</span> 月例杯 18S（オープン）（東）第1ブロック</li>\n<li><span class='sch-date'>15(日)</span> 月例杯 18S（オープン）（東）第2ブロック</li>\n<li><span class='sch-date'>17(火)</span> ポイントターニー杯 18S（東）</li>\n<li><span class='sch-date'>21(土)</span> 研修会（東）・女子研修会（東）</li>\n<li><span class='sch-date'>22(日)</span> シニア研修会（東）</li>\n<li><span class='sch-date'>25(水)</span> 月例杯（東）</li>\n</ul>"
        },
        {
          title: "3月〜4月",
          content: "<div class='club-rule-sub'>3月</div>\n<ul class='schedule-list'>\n<li><span class='sch-date'>1(日)</span> 月例杯 18S（Bクラス）・女子研修会（東）</li>\n<li><span class='sch-date'>8(日)</span> 研修会 27S（Bクラス）・女子研修会（東）</li>\n<li><span class='sch-date'>15(日)</span> スクラッチ競技予選 36S（東）</li>\n<li><span class='sch-date'>  </span> HDCP 10迄 上位20位選出</li>\n<li><span class='sch-date'>  </span> （但し予選 1R 89S迄を通過ラインとし90S以上は</li>\n<li><span class='sch-date'>  </span> 2Rに出場できない）</li>\n<li><span class='sch-date'>22(日)</span> スクラッチ競技決勝 36S（72S通算）（西）</li>\n<li><span class='sch-date'>  </span> 月例杯 18S（Aクラス）（西）</li>\n<li><span class='sch-date'>26(木)</span> グランドシニア杯 予選 18S（西）</li>\n<li><span class='sch-date'>  </span> 本年中に70才以上に到達する者</li>\n<li><span class='sch-date'>  </span> 上位16名選出 クオリファイ賞</li>\n<li><span class='sch-date'>29(日)</span> 桜花杯 18S（各種名選）（西）</li>\n<li><span class='sch-date'>31(火)</span> グランドシニア杯（各種委員賞）（西）</li>\n</ul>\n\n<div class='club-rule-sub'>4月</div>\n<ul class='schedule-list'>\n<li><span class='sch-date'>4(土)</span> 土曜杯 18S（東）</li>\n<li><span class='sch-date'>5(日)</span> グランドシニア杯1回戦 18M（東）</li>\n<li><span class='sch-date'>  </span> 月例杯 18S（オープン）（東）第1ブロック</li>\n<li><span class='sch-date'>7(火)</span> グランドシニア杯2回戦 各18M（東）</li>\n<li><span class='sch-date'>12(日)</span> グランドシニア杯準決勝 各18M（西）</li>\n<li><span class='sch-date'>14(火)</span> グランドシニア杯決勝 各18M（西）</li>\n<li><span class='sch-date'>19(日)</span> 月例杯 18S（オープン）（東）第2ブロック</li>\n<li><span class='sch-date'>26(日)</span> 月例杯 18S（東）</li>\n</ul>"
        },
        {
          title: "5月〜6月",
          content: "<div class='club-rule-sub'>5月</div>\n<ul class='schedule-list'>\n<li><span class='sch-date'>3(日)</span> 研修会（西）</li>\n<li><span class='sch-date'>5(火)</span> ファミリー大会 ※非競技</li>\n<li><span class='sch-date'>6(水)</span> キャプテン杯 予選 18S（西）</li>\n<li><span class='sch-date'>10(日)</span> HDCP 24迄 上位32名選出（西）</li>\n<li><span class='sch-date'>  </span> キャプテン杯 決勝32名 18S（36S通算）（西）</li>\n<li><span class='sch-date'>17(日)</span> 月例杯 18S（Aクラス）（西）</li>\n<li><span class='sch-date'>20(水)</span> 関東女子倶楽部対抗 主催競技（西）</li>\n<li><span class='sch-date'>24(日)</span> シニア研修会（西）</li>\n<li><span class='sch-date'>  </span> 女子研修会</li>\n<li><span class='sch-date'>25(月)</span> 関東女子倶楽部対抗 主催競技</li>\n<li><span class='sch-date'>  </span> 関東女子倶楽部主催 予選</li>\n<li><span class='sch-date'>31(日)</span> 理事長杯 1次予選 18S（西）</li>\n<li><span class='sch-date'>  </span> HDCP 24迄 上位60名選出 クオリファイ賞</li>\n</ul>\n\n<div class='club-rule-sub'>6月</div>\n<ul class='schedule-list'>\n<li><span class='sch-date'>7(日)</span> 理事長杯 2次予選 18S（西）上位32名選出</li>\n<li><span class='sch-date'>  </span> 関東ゴルフ連盟 主催競技</li>\n<li><span class='sch-date'>9(火)</span> 関東倶楽部対抗 主催競技</li>\n<li><span class='sch-date'>14(日)</span> 理事長杯 1・2回戦 各18M（西）</li>\n<li><span class='sch-date'>15(月)</span> 月例杯 18S（Bクラス）（西）</li>\n<li><span class='sch-date'>  </span> 関東ゴルフ連盟 主催競技</li>\n<li><span class='sch-date'>21(日)</span> 理事長杯 3回戦・準決勝（予備日）各18M（西）</li>\n<li><span class='sch-date'>  </span> 月例杯 18S（Aクラス）（西）</li>\n<li><span class='sch-date'>28(日)</span> 理事長杯 決勝 36M（西）</li>\n<li><span class='sch-date'>  </span> 女子研修会（西）</li>\n</ul>"
        },
        {
          title: "7月〜8月",
          content: "<div class='club-rule-sub'>7月</div>\n<ul class='schedule-list'>\n<li><span class='sch-date'>4(土)</span> 土曜杯 18S（東）</li>\n<li><span class='sch-date'>5(日)</span> 月例杯 18S（東）</li>\n<li><span class='sch-date'>12(日)</span> 研修会（東）</li>\n<li><span class='sch-date'>19(日)</span> 月例杯 18S（Aクラス）（東）</li>\n<li><span class='sch-date'>26(日)</span> シニア研修会（東）</li>\n</ul>\n\n<div class='club-rule-sub'>8月</div>\n<ul class='schedule-list'>\n<li><span class='sch-date'>2(日)</span> 研修会（西）</li>\n<li><span class='sch-date'>9(日)</span> 女子研修会（西）</li>\n<li><span class='sch-date'>  </span> 月例杯 18S（オープン）（西）第1ブロック</li>\n<li><span class='sch-date'>22(土)</span> 女子研修会（西）</li>\n<li><span class='sch-date'>23(日)</span> シニア研修会（西）</li>\n<li><span class='sch-date'>30(日)</span> 月例杯 18S（西）</li>\n</ul>"
        },
        {
          title: "9月〜10月",
          content: "<div class='club-rule-sub'>9月</div>\n<ul class='schedule-list'>\n<li><span class='sch-date'>6(日)</span> 研修会 27S（東）</li>\n<li><span class='sch-date'>  </span> 女子研修会</li>\n<li><span class='sch-date'>13(日)</span> クラブ選手権 予選 18S（東）</li>\n<li><span class='sch-date'>  </span> HDCP 10迄</li>\n<li><span class='sch-date'>20(日)</span> クラブ選手権 予選 18S（東）</li>\n<li><span class='sch-date'>  </span> 予選第1ラウンドで上位32名まで第2ラウンド進出</li>\n<li><span class='sch-date'>  </span> 第1と第2の合計で上位16名決勝進出</li>\n<li><span class='sch-date'>22(火)</span> クラブ選手権 メダリスト・クオリファイ賞（東）</li>\n<li><span class='sch-date'>  </span> 月例杯 18S（Bクラス）（東）</li>\n<li><span class='sch-date'>27(日)</span> クラブ選手権 1・2回戦 各18M（東）</li>\n<li><span class='sch-date'>  </span> 月例杯 18S（Aクラス）（東）</li>\n</ul>\n\n<div class='club-rule-sub'>10月</div>\n<ul class='schedule-list'>\n<li><span class='sch-date'>3(土)</span> シニア研修会（西）</li>\n<li><span class='sch-date'>4(日)</span> クラブ選手権 準決勝 36M（東）</li>\n<li><span class='sch-date'>  </span> 月例杯 18S（Bクラス）（東）</li>\n<li><span class='sch-date'>11(日)</span> クラブ選手権 決勝 36M（東）</li>\n<li><span class='sch-date'>  </span> 研修会（東）</li>\n<li><span class='sch-date'>12(月)</span> 女子研修会</li>\n<li><span class='sch-date'>18(日)</span> シニア選手権 予選 18S（東/西）※非競技</li>\n<li><span class='sch-date'>  </span> （本年中に55才以上に到達する者）</li>\n<li><span class='sch-date'>  </span> HDCP 24迄 スクラッチにより上位32名選出</li>\n<li><span class='sch-date'>25(日)</span> シニア選手権 1・2回戦 各18M（西）</li>\n<li><span class='sch-date'>  </span> 月例杯 18S（Aクラス）（西）</li>\n</ul>"
        },
        {
          title: "11月〜12月",
          content: "<div class='club-rule-sub'>11月</div>\n<ul class='schedule-list'>\n<li><span class='sch-date'>1(日)</span> シニア選手権 3回戦・準決勝 各18M（西）</li>\n<li><span class='sch-date'>  </span> 月例杯 18S（オープン）（西）第1ブロック</li>\n<li><span class='sch-date'>3(火)</span> 文化の日杯 18S（オープン）（西）</li>\n<li><span class='sch-date'>8(日)</span> シニア選手権 決勝 27M（西）</li>\n<li><span class='sch-date'>  </span> 研修会・女子研修会（西）</li>\n<li><span class='sch-date'>15(日)</span> 月例杯 18S（オープン）（西）第2ブロック</li>\n<li><span class='sch-date'>21(土)</span> 紅葉杯（各種名選）18S（東）</li>\n<li><span class='sch-date'>22(日)</span> ミッドシニア杯 予選 18S（東）</li>\n<li><span class='sch-date'>  </span> （本年中に65才以上に到達する者）（36S通算）</li>\n<li><span class='sch-date'>  </span> HDCP 24迄 上位16名選出 クオリファイ賞</li>\n<li><span class='sch-date'>29(日)</span> ミッドシニア杯 決勝 18S（東）</li>\n</ul>\n\n<div class='club-rule-sub'>12月</div>\n<ul class='schedule-list'>\n<li><span class='sch-date'>6(日)</span> 研修会（東）・女子研修会（東）・シニア研修会（西）</li>\n<li><span class='sch-date'>12(土)</span> 土曜杯 18S（東）</li>\n<li><span class='sch-date'>13(日)</span> 月例杯 18S（Bクラス）（東）</li>\n<li><span class='sch-date'>20(日)</span> 月例杯 18S（Aクラス）（東）</li>\n<li><span class='sch-date'>27(日)</span> 2026チャンピオン杯 18S（東）</li>\n<li><span class='sch-date'>  </span> （本年度優勝者のみ）</li>\n<li><span class='sch-date'>  </span> 忘年杯 18S（東）</li>\n<li><span class='sch-date'>31(水)</span> 特別営業日</li>\n</ul>"
        }
      ]
    }
  ]
};
