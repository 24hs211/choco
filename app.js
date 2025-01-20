        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result ="市民"; // デフォルトの値

            if (colour === "赤" && number === 0) {
                result = "人狼";
            } else if (colour === "赤" && number === 1) {
                result = "騎士";
            } else if (colour === "赤" && number === 2) {
                result = "占い師";     
            } else if (colour === "青" && number === 0) {
                result = "恋人";
            } else if (colour === "青" && number === 1) {
                result = "裏切り者";
            } else if (colour === "青" && number === 2) {
                result = "霊媒師";
            } else if (colour === "黄色" && number === 0) {
                result = "市民";
            } else if (colour === "黄色" && number === 1) {
                result = "双子";
            } else if (colour === "黄色" && number === 2) {
                result = "預言者";
            }else if (colour === "オレンジ" && number === 1) {
                result = "市民";
            }else if (colour === "オレンジ" && number === 2) {
                result = "予言者";
            }else if (colour === "オレンジ" && number === 0) {
                result = "人狼";
            }



            document.getElementById('result-output').innerText = "あなたの役職は【" + result + "】です";
        }
