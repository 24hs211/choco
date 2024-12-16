        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result ="コイン"; // デフォルトの値

            if (colour === "赤" && number === 0) {
                result = "キラー";
            } else if (colour === "赤" && number === 1) {
                result = "スター";
            } else if (colour === "赤" && number === 2) {
                result = "キノコ";     
            } else if (colour === "青" && number === 0) {
                result = "みどり甲羅";
            } else if (colour === "青" && number === 1) {
                result = "バナナ";
            } else if (colour === "青" && number === 2) {
                result = "サンダー";
            } else if (colour === "黄色" && number === 0) {
                result = "トゲ甲羅";
            } else if (colour === "黄色" && number === 1) {
                result = "赤甲羅";
            } else if (colour === "黄色" && number === 2) {
                result = "ゲッソー";
            }else if (colour === "オレンジ" && number === 1) {
                result = "パックン";
            }else if (colour === "オレンジ" && number === 2) {
                result = "テレサ";
            }else if (colour === "オレンジ" && number === 0) {
                result = "テレサ";
            } else if (colour === "赤" && number === 3) {
                result = "ブーメラン";     
            } else if (colour === "青" && number === 3) {
                result = "ファイアフラワー";
            }else if (colour === "黄色" && number === 3) {
                result = "ボム兵";
            } else if (colour === "オレンジ" && number === 3) {
                result = "クラクション";
            }



            document.getElementById('result-output').innerText = "あなたの今週のアイテムは【" + result + "】です";
        }
