window.onload = function () {
    function setColor() {
        let userColor = document.getElementById('color').value;
        document.getElementById('myPara').style.color = userColor;
    }

    document.getElementById('btn').onclick = setColor;
};