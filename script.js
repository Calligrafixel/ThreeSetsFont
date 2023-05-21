const _cells = document.querySelectorAll("span");
const _main = document.querySelector("main");
const _text_area = document.querySelector("textarea");

const sample_text = "세벌체는 과거 세벌식 타자기로 입력할 수 있던 글자꼴의 한 종류로, 닿자, 홀자, 받침자를 디자인하여 한 벌의 조합형 글꼴로 탄생한다.";
_text_area.onkeydown = function() {
    const text = _text_area.value;
    if (text == "" || text == " " || text == "   " || text == "    ")
        text = sample_text;
    for (let i=0; i<9; i++) {
        _cells[i].innerHTML = text;
    }
};

const _tds = document.querySelectorAll("td");
//const _spans = document.querySelectorAll("td span")
var font_idx = 0;
function changeFont(idx) {
    _tds[font_idx].style.backgroundColor = "#e5e6e7";
    _tds[font_idx].style.color = "#000000"
    
    font_idx = idx - 1;
    _tds[font_idx].style.backgroundColor = "#0000ff";
    _tds[font_idx].style.color = "#ffffff"
//    _text_area.style.fontFamily = "1";
    _text_area.style.fontFamily = "4";
}
function changeBackground(bg_color, text_color) {
    _main.style.backgroundColor = bg_color;
    _text_area.style.backgroundColor = bg_color;
    _text_area.color = text_color;
}