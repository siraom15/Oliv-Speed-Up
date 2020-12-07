// ==UserScript==
// @name         Oliv-Speed-Up
// @version      1.0
// @description  Oliv-Speed-Up
// @author       siraom15
// @match        https://learning.sit.kmutt.ac.th/
// @grant        none
// @updateURL    https://raw.githubusercontent.com/siraom15/Oliv-Speed-Up/main/Oliv-Speed-Up.user.js
// @downloadURL  https://raw.githubusercontent.com/siraom15/Oliv-Speed-Up/main/Oliv-Speed-Up.user.js
// ==/UserScript==

(function () {
    'use strict';

    var blue_color = "#5B90BF";

    // test update hello world
    function changeColorBar() {
        let container = document.getElementsByClassName("container");
        if (container != undefined) {
            container[0].style.backgroundColor = blue_color;
            container[0].style.height = "20%";
            clearInterval(changeColorBarInterVal);
        }
    }
    let changeColorBarInterVal = setInterval(changeColorBar, 1000);

    function moveSlidePreview() {
        let point = document.querySelectorAll("vg-cuepoints");
        if (point != undefined) {
            point[0].style.marginTop = "-1%"
            clearInterval(moveSlidePreviewInterVal)
        }
    }
    let moveSlidePreviewInterVal = setInterval(moveSlidePreview, 1000)


    function toggleSlidePreview() {
        let point = document.querySelectorAll("vg-cuepoints");
        if (point[0].style.display === "none") {
            point[0].style.display = "block";
        } else {
            point[0].style.display = "none";
        }
    }

    function addBtn() {
        let container = document.querySelector("div.video-info-container");
        if (container != undefined) {
            let div1 = document.createElement('div');
            div1.style.marginTop = "1em";
            div1.style.padding = "1em";
            div1.style.color = "#626262"
            div1.style.backgroundColor = "#f6f6f6"
            div1.style.width = "100%";
            div1.style.textAlign = "center";
            var btn = document.createElement('button');
            btn.innerText = "Toggle Slide Preview"
            btn.addEventListener("click", toggleSlidePreview, false);
            btn.style.textAlign = "right"
            btn.style.color = "white"
            btn.style.backgroundColor = blue_color
            btn.style.border = "none"
            btn.style.fontSize = "1em";
            div1.appendChild(btn)
            container.parentNode.insertBefore(div1, container);

            clearInterval(addBtnInterval)
        }
    }
    let addBtnInterval = setInterval(addBtn, 1000)

    function addDropDownSpeed() {
        let container = document.querySelector("div.video-info-container");
        if (container != undefined) {
            let div1 = document.createElement('div');
            div1.style.padding = "1em";
            div1.style.color = "#626262"
            div1.style.backgroundColor = "#f6f6f6"
            div1.style.width = "100%";
            div1.style.textAlign = "center";

            div1.id = "setSpeedDiv"
            let label1 = document.createElement('label');
            label1.innerHTML = "Speed : &nbsp;"

            let selectMenu = document.createElement('select');
            selectMenu.name = "setSpeed"
            selectMenu.id = "setSpeed"
            selectMenu.addEventListener("change", changeSpeed, false);
            selectMenu.style.color = "white"
            selectMenu.style.backgroundColor = blue_color
            selectMenu.style.border = "none"

            let option0 = document.createElement('option');
            option0.value = 0.5
            option0.innerHTML = "x0.5"

            let option1 = document.createElement('option');
            option1.value = 1
            option1.innerHTML = "x1"
            option1.setAttribute('selected', 'selected');

            let option5 = document.createElement('option');
            option5.value = 1.25
            option5.innerHTML = "x1.25"

            let option2 = document.createElement('option');
            option2.value = 1.5
            option2.innerHTML = "x1.5"

            let option3 = document.createElement('option');
            option3.value = 2
            option3.innerHTML = "x2"

            let option4 = document.createElement('option');
            option4.value = 5
            option4.innerHTML = "x5"

            let option6 = document.createElement('option');
            option6.value = 16
            option6.innerHTML = "x16 Max Speed"

            selectMenu.appendChild(option0);
            selectMenu.appendChild(option1);
            selectMenu.appendChild(option5);
            selectMenu.appendChild(option2);
            selectMenu.appendChild(option3);
            selectMenu.appendChild(option4);
            selectMenu.appendChild(option6);

            div1.appendChild(label1)
            div1.appendChild(selectMenu)

            container.parentNode.insertBefore(div1, container);

            clearInterval(addDropDownSpeedInterval)
        }
    }
    let addDropDownSpeedInterval = setInterval(addDropDownSpeed, 1000)

    function addSkipTime() {
        let container = document.querySelector("div.video-info-container");
        if (container != undefined) {
            let div1 = document.createElement('div');
            div1.style.padding = "1em";
            div1.style.color = "#626262"
            div1.style.backgroundColor = "#f6f6f6"
            div1.style.width = "100%";
            div1.style.textAlign = "center";

            div1.id = "skipTime"
            let label1 = document.createElement('label');
            label1.innerHTML = "Set Skip time : &nbsp;"

            let selectMenu = document.createElement('select');
            selectMenu.name = "setSkipTime"
            selectMenu.id = "setSkipTime"
            selectMenu.addEventListener("change", changeSpeed, false);
            selectMenu.style.color = "white"
            selectMenu.style.backgroundColor = blue_color
            selectMenu.style.border = "none"
            let option0 = document.createElement('option');
            option0.value = 1
            option0.innerHTML = "1 sec"


            let option1 = document.createElement('option');
            option1.value = 2
            option1.innerHTML = "2 sec"

            let option5 = document.createElement('option');
            option5.value = 3
            option5.innerHTML = "3 sec"

            let option2 = document.createElement('option');
            option2.value = 5
            option2.innerHTML = "5 sec"
            option2.setAttribute('selected', 'selxected');

            let option3 = document.createElement('option');
            option3.value = 10
            option3.innerHTML = "10 sec"

            let option4 = document.createElement('option');
            option4.value = 30
            option4.innerHTML = "30 sec"

            selectMenu.appendChild(option0);
            selectMenu.appendChild(option1);
            selectMenu.appendChild(option5);
            selectMenu.appendChild(option2);
            selectMenu.appendChild(option3);
            selectMenu.appendChild(option4);

            let small = document.createElement("small")
            small.innerHTML = "**Skip time when you press the arrow key**"


            let br = document.createElement("br")
            let br1 = document.createElement("br")

            let sm = document.createElement("small")
            let alink = document.createElement("a")
            alink.href = "https://github.com/siraom15"
            alink.target = "_blank"
            alink.innerHTML = "áommie"
            sm.innerHTML = "develop by "

            sm.appendChild(alink)

            div1.appendChild(label1)
            div1.appendChild(selectMenu)
            div1.appendChild(br1)
            div1.appendChild(small)
            div1.appendChild(br)
            div1.appendChild(sm)

            container.parentNode.insertBefore(div1, container);

            clearInterval(addSkipTimeInterval)
        }
    }
    let addSkipTimeInterval = setInterval(addSkipTime, 1000)




    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '37') {
            // left arrow
            let skipTimeVal = document.getElementById("setSkipTime").value
            console.log(skipTimeVal);
            skipTime(-skipTimeVal);

        }
        else if (e.keyCode == '39') {
            // right arrow
            let skipTimeVal = document.getElementById("setSkipTime").value
            console.log(skipTimeVal);
            skipTime(-(-skipTimeVal));
        }
        else if (e.keyCode == '32') {
            togglePlay();
        }
    }

    function togglePlay() {
        let vid = document.querySelector("video");
        if (vid.paused) {
            vid.play()
        } else {
            vid.pause()
        }
    }
    function changeSpeed() {
        let speedRate = document.getElementById("setSpeed").value;
        let vid = document.querySelector("video");
        vid.playbackRate = speedRate;
    }
    function skipTime(time) {
        let vid = document.querySelector("video");
        vid.currentTime += time;
        vid.play()
    }

})();
