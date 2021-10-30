// ==UserScript==
// @name         Oliv-Speed-Up
// @version      1.4
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
        black : "black"
    }

    function createEl(elName, attributes) {
        let el = document.createElement(elName);
        for (const key in attributes) {
            if (key == 'innerText') {
                el.innerText = attributes[key];
            } else {
                el.setAttribute(key, attributes[key]);
            }
        }
    }

    function appendManyChilds(parent, ...childs) {
        childs.forEach(e => parent.appendChild(e));
    }

    function changeColorBar() {
        let container = document.getElementsByClassName("container");
        if (container != undefined) {
            container[0].style.backgroundColor = blue;
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
            toastBox("Show Slide Preview");
        } else {
            point[0].style.display = "none";
            toastBox("Hidden Slide Preview");

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
            })
            // let div1 = document.createElement('div');
            // div1.style.marginTop = "1em";
            // div1.style.padding = "1em";
            // div1.style.color = "#626262"
            // div1.style.backgroundColor = "#f6f6f6"
            // div1.style.width = "100%";
            // div1.style.textAlign = "center";
            let btn = createEl("button", {
                style: `
                text-align : right;
                color : white;
                background-color : ${colors.blue};
                border : none;
                font-size : 1em;
                `,
                onclick: `toggleSlidePreview()`
            })

            // var btn = document.createElement('button');
            // btn.innerText = "Toggle Slide Preview"
            // btn.addEventListener("click", toggleSlidePreview, false);
            // btn.style.textAlign = "right"
            // btn.style.color = "white"
            // btn.style.backgroundColor = blue
            // btn.style.border = "none"
            // btn.style.fontSize = "1em";
            appendManyChilds(div1, btn)
            // div1.appendChild(btn)
            container.parentNode.insertBefore(div1, container);

            clearInterval(addBtnInterval)
        }
    }
    let addBtnInterval = setInterval(addBtn, 1000)

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
            })
            // let div1 = document.createElement('div');
            // div1.style.padding = "1em";
            // div1.style.color = "#626262"
            // div1.style.backgroundColor = "#f6f6f6"
            // div1.style.width = "100%";
            // div1.style.textAlign = "center";

            // div1.id = "setSpeedDiv"
            let label1 = createEl("label", {
                innerText: "Speed : &nbsp;"
            })
            // let label1 = document.createElement('label');
            // label1.innerHTML = "Speed : &nbsp;"

            let selectMenu = createEl('select', {
                name: "setSpeed",
                id: "setSpeed",
                onchange: changeSpeed,
                style: `
                color : ${colors.white};
                background-color : ${colors.blue};
                border : none;
                `,
            });
            // let selectMenu = document.createElement('select');
            // selectMenu.name = "setSpeed"
            // selectMenu.id = "setSpeed"
            // selectMenu.addEventListener("change", changeSpeed, false);
            // selectMenu.style.color = "white"
            // selectMenu.style.backgroundColor = blue
            // selectMenu.style.border = "none"
            let option0 = createEl('option', {
                value: 0.5,
                innerText: "x0.5"
            });
            // let option0 = document.createElement('option');
            // option0.value = 0.5
            // option0.innerHTML = "x0.5"

            let option1 = createEl('option', {
                value: 1,
                innerText: "x1",
                selected: 'selected'
            });
            // let option1 = document.createElement('option');
            // option1.value = 1
            // option1.innerHTML = "x1"
            // option1.setAttribute('selected', 'selected');

            let option2 = createEl('option', {
                value: 1.25,
                innerText: "x1.25",
            });
            // let option5 = document.createElement('option');
            // option5.value = 1.25
            // option5.innerHTML = "x1.25"

            let option3 = createEl('option', {
                value: 1.5,
                innerText: "x1.5",
            });
            // let option2 = document.createElement('option');
            // option2.value = 1.5
            // option2.innerHTML = "x1.5"

            let option4 = createEl('option', {
                value: 2,
                innerText: "x2",
            });
            // let option3 = document.createElement('option');
            // option3.value = 2
            // option3.innerHTML = "x2"

            let option4 = createEl('option', {
                value: 5,
                innerText: "x5",
            });
            // let option4 = document.createElement('option');
            // option4.value = 5
            // option4.innerHTML = "x5"

            let option5 = createEl('option', {
                value: 16,
                innerText: "x16",
            });
            // let option6 = document.createElement('option');
            // option6.value = 16
            // option6.innerHTML = "x16 Max Speed"


            let options = [option0, option1, option2, option3, option4, option5];
            appendManyChilds(selectMenu, ...options)
            // selectMenu.appendChild(option0);
            // selectMenu.appendChild(option1);
            // selectMenu.appendChild(option5);
            // selectMenu.appendChild(option2);
            // selectMenu.appendChild(option3);
            // selectMenu.appendChild(option4);
            // selectMenu.appendChild(option6);

            appendManyChilds(div1, label1, selectMenu);
            // div1.appendChild(label1)
            // div1.appendChild(selectMenu)

            container.parentNode.insertBefore(div1, container);

            clearInterval(addDropDownSpeedInterval)
        }
    }
    let addDropDownSpeedInterval = setInterval(addDropDownSpeed, 1000)

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
            // let div1 = document.createElement('div');
            // div1.style.padding = "1em";
            // div1.style.color = "#626262"
            // div1.style.backgroundColor = "#f6f6f6"
            // div1.style.width = "100%";
            // div1.style.textAlign = "center";
            // div1.id = "skipTime"

            let label1 = createEl('label', {
                innerText = 'Set Skip time : &nbsp;'
            });
            // let label1 = document.createElement('label');
            // label1.innerHTML = "Set Skip time : &nbsp;"

            let selectMenu = createEl('select', {
                name: "setSkipTime",
                id: "setSkipTime",
                onchange: changeSkipTime,
                style: `
                color : ${colors.white};
                background-color : ${colors.blue};
                border : none;
                `,
            });
            // let selectMenu = document.createElement('select');
            // selectMenu.name = "setSkipTime"
            // selectMenu.id = "setSkipTime"
            // selectMenu.addEventListener("change", changeSkipTime, false);
            // selectMenu.style.color = "white"
            // selectMenu.style.backgroundColor = blue
            // selectMenu.style.border = "none"

            let option0 = createEl('option', {
                value: 1,
                innerText: "1 sec"
            });
            // let option0 = document.createElement('option');
            // option0.value = 1
            // option0.innerHTML = "1 sec"

            let option1 = createEl('option', {
                value: 2,
                innerText: "2 sec"
            });
            // let option1 = document.createElement('option');
            // option1.value = 2
            // option1.innerHTML = "2 sec"

            let option2 = createEl('option', {
                value: 3,
                innerText: "3 sec"
            });
            // let option5 = document.createElement('option');
            // option5.value = 3
            // option5.innerHTML = "3 sec"

            let option3 = createEl('option', {
                value: 5,
                innerText: "5 sec",
                selected: 'selected'
            });
            // let option2 = document.createElement('option');
            // option2.value = 5
            // option2.innerHTML = "5 sec"
            // option2.setAttribute('selected', 'selxected');

            let option4 = createEl('option', {
                value: 10,
                innerText: "10 sec"
            });
            // let option3 = document.createElement('option');
            // option3.value = 10
            // option3.innerHTML = "10 sec"

            let option5 = createEl('option', {
                value: 10,
                innerText: "10 sec"
            });
            // let option4 = document.createElement('option');
            // option4.value = 30
            // option4.innerHTML = "30 sec"

            let options = [option0, option1, option2, option3, option4, option5];
            appendManyChilds(selectMenu, ...options)
            // selectMenu.appendChild(option0);
            // selectMenu.appendChild(option1);
            // selectMenu.appendChild(option5);
            // selectMenu.appendChild(option2);
            // selectMenu.appendChild(option3);
            // selectMenu.appendChild(option4);

            let small1 = createEl("small", {
                innerText: '**Skip time when you press the arrow key**'
            });
            // let small = document.createElement("small")
            // small.innerHTML = "**Skip time when you press the arrow key**"


            let br = createEl("br")
            let hr = createEl("hr");

            let small2 = createEl("small", {
                innerText: 'develop by '
            })
            let alink = createEl("a", {
                href: 'https://github.com/siraom15/Oliv-Speed-Up',
                target: '_blank',
                innerText: "aommie"
            })
            // alink.href = "https://github.com/siraom15"
            // alink.target = "_blank"
            // alink.innerHTML = "áommie"
            // sm.innerHTML = "develop by "

            appendManyChilds(sm, alink)
            // sm.appendChild(alink)


            // let sm2 = document.createElement("small")
            // let alink2 = document.createElement("a")
            // alink2.href = "https://github.com/siraom15/Oliv-Speed-Up/raw/main/Oliv-Speed-Up.user.js"
            // alink2.target = "_blank"
            // alink2.innerHTML = " here"
            // sm2.innerHTML = "Check for update"

            // sm2.appendChild(alink2)

            appendManyChilds(div1, label1, selectMenu, br, small1, hr,small2)
            // div1.appendChild(label1)
            // div1.appendChild(selectMenu)
            // div1.appendChild(br1)
            // div1.appendChild(small)
            // div1.appendChild(hr)
            // div1.appendChild(sm)
            // div1.appendChild(br)
            // div1.appendChild(sm2)

            container.parentNode.insertBefore(div1, container);

            clearInterval(addSkipTimeInterval)
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
            let div = createEl("div",{
                id : 'toastBox',
                style : `
                color: ${colors.black};
                color: ${colors.white};
                left: 50%;
                background-color: rgb(91, 144, 191);
                position: absolute;
                top: 0;
                padding: 2em;
                box-shadow: 0.1em 0.1em beige;
                left: 50%;
                margin-right: -50%;
                transform: translate(-50%, -50%);
                `
            })
            // let div = document.createElement("div")
            // div.setAttribute("style", "color: black;color: white;left: 50%;background-color: rgb(91, 144, 191);position: absolute;top: 0;padding: 2em;box-shadow: 0.1em 0.1em beige;left: 50%;margin-right: -50%;transform: translate(-50%, -50%);");
            // div.innerHTML = text;
            container.parentNode.insertBefore(div, container);
            setTimeout(() => {
                document.getElementById('toastBox').remove()
            }, 1000)

        }
    }

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
        toastBox("changed speed to x" + speedRate);
    }
    function skipTime(time) {
        let vid = document.querySelector("video");
        vid.play()
        vid.currentTime += time;

    }
})();
