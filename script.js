// ==UserScript==
// @name         move oliv slide
// @namespace    
// @version      0.1
// @description  move the oliv slide
// @author       You
// @match        https://learning.sit.kmutt.ac.th/
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    function moveSlidePreview() {
        // remove slide
        let x = document.querySelectorAll("vg-cuepoints");
        x[0].style.marginTop = "-1%"

    }
    setInterval(moveSlidePreview, 1000)

    function toggleSlidePreview(){
        let z = document.querySelectorAll("vg-cuepoints");
        if (z[0].style.display === "none") {
          z[0].style.display = "block";
        } else {
          z[0].style.display = "none";
        }
    }

    function addBtn() {
        let y = document.querySelector("div.video-info-container");
        var btn = document.createElement('button');
        btn.innerText = "Toggle Slide Preview"
        btn.addEventListener("click", toggleSlidePreview, false);
        btn.style.textAlign = "right"
        y.parentNode.insertBefore(btn, y);
    }
    function addDropDownSpeed(){
        let y = document.querySelector("div.video-info-container");
        let div1 = document.createElement('div');
        let label1 = document.createElement('label');
        label1.innerHTML = "Speed : "

        let selectMenu = document.createElement('select');
        selectMenu.name = "setSpeed"
        selectMenu.id = "setSpeed"
        selectMenu.addEventListener("change", changeSpeed, false);


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
        selectMenu.appendChild(option2);
        selectMenu.appendChild(option3);
        selectMenu.appendChild(option4);
        selectMenu.appendChild(option5);

        div1.appendChild(label1)
        div1.appendChild(selectMenu)

        y.parentNode.insertBefore(div1, y);
    }

    function changeSpeed(){
        let speedRate = document.getElementById("setSpeed").value;
        let vid = document.querySelector("video");
        vid.playbackRate = speedRate;
        // alert("ปรับความเร็วเป็น x " + speedRate +" แล้ว");
    }
    setTimeout(addBtn, 3000)
    setTimeout(addDropDownSpeed, 3000)



})();
