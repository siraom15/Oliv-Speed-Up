// ==UserScript==
// @name         Oliv-Speed-Up
// @version      2.0
// @description  Oliv-Speed-Up
// @author       siraom15
// @match        https://learning.sit.kmutt.ac.th/
// @grant        none
// @updateURL    https://raw.githubusercontent.com/siraom15/Oliv-Speed-Up/main/Oliv-Speed-Up.user.js
// @downloadURL  https://raw.githubusercontent.com/siraom15/Oliv-Speed-Up/main/Oliv-Speed-Up.user.js
// ==/UserScript==

(function () {
    'use strict';

    let colors = {
        blue: "#5B90BF",
        gray: "#626262",
        whiteGray: "#f6f6f6",
        white: "white",
        black: "black"
    };

    function createEl(elName, attributes, eventListen) {
        let el = document.createElement(elName);
        for (const key in attributes) {
            if (key == 'innerText') {
                el.innerText = attributes[key];
            } else {
                el.setAttribute(key, attributes[key]);
            }
        }
        if (eventListen) {
            el.addEventListener(eventListen.on, eventListen.function, false);
        }
        return el;
    }

    function appendManyChilds(parent, ...childs) {
        childs.forEach(e => parent.appendChild(e));
    }

    function changeColorBar() {
        let container = document.getElementsByClassName("container");
        if (container != undefined) {
            container[0].style.backgroundColor = colors.blue;
            container[0].style.height = "20%";
            clearInterval(changeColorBarInterVal);
        }
    }
    let changeColorBarInterVal = setInterval(changeColorBar, 1000);

    function moveSlidePreview() {
        let point = document.querySelectorAll("vg-cuepoints");
        if (point != undefined) {
            point[0].style.marginTop = "-1%";
            clearInterval(moveSlidePreviewInterVal);
        }
    }
    let moveSlidePreviewInterVal = setInterval(moveSlidePreview, 1000);


    function toggleSlidePreview() {
        let point = document.querySelectorAll("vg-cuepoints");
        if (point[0].style.display === "none") {
            point[0].style.display = "block";
            toastBox("Show Slide Preview");
        } else {
            point[0].style.display = "none";
            toastBox("Hide Slide Preview");

        }
    }

    function addBtn() {
        let container = document.querySelector("div.video-info-container");
        if (container != undefined) {
            let div1 = createEl("div", {
                style: `
                margin-top : 1em;
                padding : 1em;
                color : #626262;
                background-color : ${colors.whiteGray};
                width : 100%;
                text-align : center;
                `
            });
            let btn = createEl("button", {
                style: `
                text-align : right;
                color : white;
                background-color : ${colors.blue};
                border : none;
                font-size : 1em;
                `,
                innerText: "Toggle Slide Preview"
            }, {
                on: "click",
                function: toggleSlidePreview
            });

            appendManyChilds(div1, btn);
            container.parentNode.insertBefore(div1, container);
            clearInterval(addBtnInterval);
        }
    }
    let addBtnInterval = setInterval(addBtn, 1000);

    function addDropDownSpeed() {
        let container = document.querySelector("div.video-info-container");
        if (container != undefined) {
            let div1 = createEl("div", {
                style: `
                padding : 1em;
                color : ${colors.gray};
                background-color : ${colors.whiteGray};
                width : 100%;
                text-align : center;
                `,
                id: "setSpeedDiv",
            });

            let label1 = createEl("label", {
                innerText: "Speed : "
            });

            let selectMenu = createEl('select', {
                name: "setSpeed",
                id: "setSpeed",
                style: `
                color : ${colors.white};
                background-color : ${colors.blue};
                border : none;
                `,
            },{
                on:"change",
                function : changeSpeed
            });

            let option0 = createEl('option', {
                value: 0.5,
                innerText: "x0.5"
            });

            let option1 = createEl('option', {
                value: 1,
                innerText: "x1",
                selected: 'selected'
            });

            let option2 = createEl('option', {
                value: 1.25,
                innerText: "x1.25",
            });

            let option3 = createEl('option', {
                value: 1.5,
                innerText: "x1.5",
            });

            let option4 = createEl('option', {
                value: 2,
                innerText: "x2",
            });

            let option5 = createEl('option', {
                value: 5,
                innerText: "x5",
            });

            let option6 = createEl('option', {
                value: 16,
                innerText: "x16",
            });

            let options = [option0, option1, option2, option3, option4, option5, option6];
            appendManyChilds(selectMenu, ...options);

            appendManyChilds(div1, label1, selectMenu);

            container.parentNode.insertBefore(div1, container);

            clearInterval(addDropDownSpeedInterval);
        }
    }
    let addDropDownSpeedInterval = setInterval(addDropDownSpeed, 1000);

    function addSkipTime() {
        let container = document.querySelector("div.video-info-container");
        if (container != undefined) {
            let div1 = createEl('div', {
                style: `
                padding : 1em;
                color : ${colors.gray};
                background-color : ${colors.whiteGray};
                width : 100%;
                text-align : center;
                `,
                id: "skipTime"
            });

            let label1 = createEl('label', {
                innerText: 'Set Skip time : '
            });

            let selectMenu = createEl('select', {
                name: "setSkipTime",
                id: "setSkipTime",
                style: `
                color : ${colors.white};
                background-color : ${colors.blue};
                border : none;
                `,
            },{
                on : "change",
                function : changeSkipTime
            });

            let option0 = createEl('option', {
                value: 1,
                innerText: "1 sec"
            });

            let option1 = createEl('option', {
                value: 2,
                innerText: "2 sec"
            });

            let option2 = createEl('option', {
                value: 3,
                innerText: "3 sec"
            });

            let option3 = createEl('option', {
                value: 5,
                innerText: "5 sec",
                selected: 'selected'
            });

            let option4 = createEl('option', {
                value: 10,
                innerText: "10 sec"
            });

            let option5 = createEl('option', {
                value: 10,
                innerText: "10 sec"
            });

            let options = [option0, option1, option2, option3, option4, option5];
            appendManyChilds(selectMenu, ...options);

            let small1 = createEl("small", {
                innerText: '**Skip time when you press the arrow key**'
            });

            let br = createEl("br")
            let hr = createEl("hr");

            let small2 = createEl("small", {
                innerText: 'develop by '
            });

            let alink = createEl("a", {
                href: 'https://github.com/siraom15/Oliv-Speed-Up',
                target: '_blank',
                innerText: "aommie"
            });

            appendManyChilds(small2, alink);

            appendManyChilds(div1, label1, selectMenu, br, small1, hr, small2);

            container.parentNode.insertBefore(div1, container);

            clearInterval(addSkipTimeInterval);
        }
    }
    let addSkipTimeInterval = setInterval(addSkipTime, 1000)

    function changeSkipTime() {
        let skipTime = document.getElementById("setSkipTime").value;
        toastBox("Changed Skip time to : " + skipTime + " sec");
    }

    function toastBox(text) {
        let container = document.querySelector("div.video-info-container");
        if (container != undefined) {
            let div = createEl("div", {
                id: 'toastBox',
                style: `
                color: ${colors.black};
                color: ${colors.white};
                left: 50%;
                background-color: ${colors.blue};
                position: absolute;
                top: 0;
                padding: 2em;
                box-shadow: 0.1em 0.1em beige;
                left: 50%;
                margin-right: -50%;
                transform: translate(-50%, -50%);
                `,
                innerText: text
            });

            container.parentNode.insertBefore(div, container);

            setTimeout(() => {
                document.getElementById('toastBox').remove();
            }, 1000)

        }
    }

    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '37') {
            // left arrow
            let skipTimeVal = document.getElementById("setSkipTime").value;
            console.log(skipTimeVal);
            skipTime(-skipTimeVal);

        }
        else if (e.keyCode == '39') {
            // right arrow
            let skipTimeVal = document.getElementById("setSkipTime").value;
            console.log(skipTimeVal);
            skipTime(-(-skipTimeVal));
        }
        else if (e.keyCode == '32') {
            //space bar
            togglePlay();
        }
    }

    function togglePlay() {
        let vid = document.querySelector("video");
        if (vid.paused) {
            vid.play();
        } else {
            vid.pause();
        }
    }
    function changeSpeed() {
        let speedRate = document.getElementById("setSpeed").value;
        let vid = document.querySelector("video");
        vid.playbackRate = speedRate;
        toastBox(`changed speed to x ${speedRate}`);
    }
    function skipTime(time) {
        let vid = document.querySelector("video");
        vid.play();
        vid.currentTime += time;
    }
})();
