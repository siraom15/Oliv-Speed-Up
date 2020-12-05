// ==UserScript==
// @name         Oliv-Speed-Up
// @version      0.1
// @description  Oliv-Speed-Up
// @author       siraom15
// @match        https://learning.sit.kmutt.ac.th/
// @grant        none
// @updateURL    https://raw.githubusercontent.com/siraom15/Oliv-Speed-Up/main/script.js
// @downloadURL  https://raw.githubusercontent.com/siraom15/Oliv-Speed-Up/main/script.js
// ==/UserScript==

(function () {
    'use strict';

    function changeColorBar(){
        let x = document.getElementsByClassName("container");
        if(x != undefined){
            x[0].style.backgroundColor = "#5B90BF";
            x[0].style.height = "10%";
            clearInterval(pe);
        }
    }
    let pe = setInterval(changeColorBar,1000);

    function moveSlidePreview() {
        // remove slide
        let x = document.querySelectorAll("vg-cuepoints");
        if (x != undefined) {
            x[0].style.marginTop = "-1%"
            clearInterval(te)
        }
    }
    let te = setInterval(moveSlidePreview, 1000)

    function toggleSlidePreview() {
        let z = document.querySelectorAll("vg-cuepoints");
        if (z[0].style.display === "none") {
            z[0].style.display = "block";
        } else {
            z[0].style.display = "none";
        }
    }
    function addBtn() {
        let y = document.querySelector("div.video-info-container");
        if (y != undefined) {
            let div1 = document.createElement('div');
            div1.style.marginTop = "1em";
            div1.style.padding = "1em";
            div1.style.color = "#626262"
            div1.style.backgroundColor = "#f6f6f6"
            // div1.style.backgroundColor = "#5B90BF"
            div1.style.width = "100%";
            div1.style.textAlign = "center";
            var btn = document.createElement('button');
            btn.innerText = "Toggle Slide Preview"
            btn.addEventListener("click", toggleSlidePreview, false);
            btn.style.textAlign = "right"
            btn.style.color = "white"
            btn.style.backgroundColor = "#5B90BF"
            btn.style.border = "none"
            // btn.style.borderWidth = "thin"
            // btn.style.borderStyle = "solid"
            btn.style.fontSize = "1em";
            div1.appendChild(btn)
            y.parentNode.insertBefore(div1, y);

            clearInterval(re)
        }
    }
    function addDropDownSpeed() {
        let y = document.querySelector("div.video-info-container");
        if (y != undefined) {
            let div1 = document.createElement('div');
            div1.style.padding = "1em";
            div1.style.color = "#626262"
            div1.style.backgroundColor = "#f6f6f6"
            div1.style.width = "100%";
            div1.style.textAlign = "center";

            div1.id = "setSpeedDiv"
            let label1 = document.createElement('label');
            label1.innerHTML = "Speed : "

            let selectMenu = document.createElement('select');
            selectMenu.name = "setSpeed"
            selectMenu.id = "setSpeed"
            selectMenu.addEventListener("change", changeSpeed, false);
            selectMenu.style.color = "black"

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

            selectMenu.appendChild(option0);
            selectMenu.appendChild(option1);
            selectMenu.appendChild(option5);
            selectMenu.appendChild(option2);
            selectMenu.appendChild(option3);
            selectMenu.appendChild(option4);

            div1.appendChild(label1)
            div1.appendChild(selectMenu)

            y.parentNode.insertBefore(div1, y);

            clearInterval(qe)
        }
    }

    function changeSpeed() {
        let speedRate = document.getElementById("setSpeed").value;
        let vid = document.querySelector("video");
        vid.playbackRate = speedRate;
        // alert("ปรับความเร็วเป็น x " + speedRate +" แล้ว");
    }
    let re = setInterval(addBtn, 1000)
    let qe = setInterval(addDropDownSpeed, 1000)



})();
