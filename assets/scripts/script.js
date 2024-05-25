const bodyList = document.getElementById('body-list');
const hatList = document.getElementById('hat-list');
const accList = document.getElementById('acc-list');
const bgList = document.getElementById('bg-list');

var current_body = undefined;
var current_hat = undefined;
var current_acc = undefined;
var current_bg = undefined;

var selected_body = 1;
var selected_hat = 0;
var selected_acc = 0;
var selected_bg = 1;

function setImage(type, image) {
    switch(type) {
        case 'body':
            current_body = image;
            break;
        case 'hat':
            current_hat = image;
            break;
        case 'acc':
            current_acc = image;
            break;
        case 'bg':
            current_bg = image;
            break;
    }
}

function loadImage(type, imgURL) {
    if(imgURL == undefined) {
        setImage(type, undefined);
    }

    var newImage = new Image();
    newImage.src = imgURL;
    newImage.crossOrigin = 'Anonymous';
    newImage.onload = () => {
        setImage(type, newImage);
    }
}

function getSelectedIdx(type) {
    switch(type) {
        case 'body':
            return selected_body;
        case 'hat':
            return selected_hat;
        case 'acc':
            return selected_acc;
        case 'bg':
            return selected_bg;
    }
}

function setSelectedIdx(type,idx) {
    switch(type) {
        case 'body':
            selected_body = idx;
            break;
        case 'hat':
            selected_hat = idx;
            break;
        case 'acc':
            selected_acc = idx;
            break;
        case 'bg':
            selected_bg = idx;
            break;
    }
}

function AddParts(listElem, type, idx, iconURL, imgURL, selected=false) {
    let parts = document.createElement('div');
    parts.className = 'parts';
    parts.id = `${type}-${idx}`;
    if(selected == true) {
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }
    
    let iconImg = document.createElement('img');
    iconImg.src = iconURL;

    parts.onclick = () => {
        const prevIdx = getSelectedIdx(type);
        let prevParts = document.getElementById(`${type}-${prevIdx}`);
        if(prevParts) {
            prevParts.classList.remove('parts-selected');
        }

        setSelectedIdx(type, idx);
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }

    parts.appendChild(iconImg);
    listElem.appendChild(parts);

    return parts;
}

function selectParts(type, idx) {
    let parts = document.getElementById(`${type}-${idx}`);
    if(parts == undefined) {
        console.log(`${type} ${idx}`)
    }
    parts.click();
    setSelectedIdx(type, idx);
}
    
AddParts(bodyList, 'body',1, 'assets/img/body-icon-1.png', 'assets/img/body-1.png', true);
AddParts(bodyList, 'body',2, 'assets/img/body-icon-2.png', 'assets/img/body-2.png');
AddParts(bodyList, 'body',3, 'assets/img/body-icon-3.png', 'assets/img/body-3.png');
AddParts(bodyList, 'body',4, 'assets/img/body-icon-4.png', 'assets/img/body-4.png');
AddParts(bodyList, 'body',5, 'assets/img/body-icon-5.png', 'assets/img/body-5.png');
AddParts(bodyList, 'body',6, 'assets/img/body-icon-6.png', 'assets/img/body-6.png');
AddParts(bodyList, 'body',7, 'assets/img/body-icon-7.png', 'assets/img/body-7.png');
AddParts(bodyList, 'body',8, 'assets/img/body-icon-8.png', 'assets/img/body-8.png');

AddParts(hatList, 'hat',0, 'assets/img/none.png', undefined, true);
AddParts(hatList, 'hat',1, 'assets/img/hat-icon-1.png', 'assets/img/hat-1.png');
AddParts(hatList, 'hat',2, 'assets/img/hat-icon-2.png', 'assets/img/hat-2.png');
AddParts(hatList, 'hat',3, 'assets/img/hat-icon-3.png', 'assets/img/hat-3.png');
AddParts(hatList, 'hat',4, 'assets/img/hat-icon-4.png', 'assets/img/hat-4.png');
AddParts(hatList, 'hat',5, 'assets/img/hat-icon-5.png', 'assets/img/hat-5.png');

AddParts(accList, 'acc',0, 'assets/img/none.png', undefined, true);
AddParts(accList, 'acc',1, 'assets/img/acc-icon-1.png', 'assets/img/acc-1.png');
AddParts(accList, 'acc',2, 'assets/img/acc-icon-2.png', 'assets/img/acc-2.png');
AddParts(accList, 'acc',3, 'assets/img/acc-icon-3.png', 'assets/img/acc-3.png');

AddParts(bgList, 'bg',1, 'assets/img/bg-icon-1.png', 'assets/img/bg-1.png', true);
AddParts(bgList, 'bg',2, 'assets/img/bg-icon-2.png', 'assets/img/bg-2.png');
AddParts(bgList, 'bg',3, 'assets/img/bg-icon-3.png', 'assets/img/bg-3.png');
AddParts(bgList, 'bg',4, 'assets/img/bg-icon-4.png', 'assets/img/bg-4.png');
AddParts(bgList, 'bg',5, 'assets/img/bg-icon-5.png', 'assets/img/bg-5.png');



const canvas = document.getElementById('mainCanvas');
canvas.width = 400;
canvas.height = 400;
const context = canvas.getContext('2d');

setInterval(() => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 400, 400);

    if(current_bg != undefined) {
        context.drawImage(current_bg, 0, 0, 400, 400 );
    }

    if(current_body != undefined) {
        context.drawImage(current_body, 0, 0, 400, 400 );
    }

    if(current_acc != undefined) {
        context.drawImage(current_acc, 0, 0, 400, 400 );
    }

    if(current_hat != undefined) {
        context.drawImage(current_hat, 0, 0, 400, 400 );
    }
}, 100);

function randRange(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

const resetBtn = document.getElementById('reset-btn');
resetBtn.onclick = () => {
    selectParts('body', 1);
    selectParts('hat', 0);
    selectParts('acc', 0);
    selectParts('bg', 1);
}

const randomBtn = document.getElementById('random-btn');
randomBtn.onclick = () => {
    selectParts('body', randRange(1,8));
    selectParts('hat', randRange(0,5));
    selectParts('acc', randRange(0,3));
    selectParts('bg', randRange(1,5));
}

const downloadBtn = document.getElementById('download-btn');
downloadBtn.onclick = () => {
    var link = document.createElement('a');
    link.download = 'cony.png';
    link.href = canvas.toDataURL()
    link.click();
}

const bodyLeftBtn = document.getElementById('body-left');
bodyLeftBtn.onclick = () => {
    bodyList.style.transform = 'translateX(0px)';
}

const bodyRightBtn = document.getElementById('body-right');
bodyRightBtn.onclick = () => {
    bodyList.style.transform = 'translateX(-130px)';
}

const hatLeftBtn = document.getElementById('hat-left');
hatLeftBtn.onclick = () => {
    hatList.style.transform = 'translateX(0px)';
}

const hatRightBtn = document.getElementById('hat-right');
hatRightBtn.onclick = () => {
    hatList.style.transform = 'translateX(-30px)';
}