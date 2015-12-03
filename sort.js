head = $("th");
    text = $("td");
    for (var i = 0; i < 6; i++) {
        head[i].id = i + "";
    }
    for (var i = 0; i < 18; i++) {
        text[i].id = i + "";
    }
    $("th").click(function () {
        if (this.className == "" || this.className == "up") {
            this.className = "dowm";
            clear(this.id);
            if (this.id < 3) var num = parseInt(this.id);
            if (this.id >= 3) var num = parseInt(this.id) + 6;
            sort(num);
        }
        else if (this.className == "dowm") {
            this.className = "up";
            clear(this.id);
            if (this.id < 3) var num = parseInt(this.id);
            if (this.id >= 3) var num = parseInt(this.id) + 6;
            resort(num);
        }
    });
}
function sort(num) {
    for (var i = 0; i < 10; i = i + 3) {
        for (var j = 0; j < 6; j = j + 3) {
            if (text[num].innerHTML > text[num + j].innerHTML)
                swap(text[num], text[num + j]);
            if (text[num + j].innerHTML > text[num + j + j].innerHTML)
                swap(text[num + j], text[num + j + j]);
        }
    }
}
function resort(num) {
    for (var i = 0; i < 10; i = i + 3) {
        for (var j = 0; j < 6; j = j + 3) {
            if (text[num].innerHTML < text[num + j].innerHTML)
                swap(text[num], text[num + j]);
            if (text[num + j].innerHTML < text[num + j + j].innerHTML)
                swap(text[num + j], text[num + j + j]);
        }
    }
}
function clear(id) {
    for (var i = 0; i < 6; i++) {
        if (i == id) continue;
        $("th")[i].className = "";
    }
}
function swap(a, b) {
    var numa = parseInt(a.id);
    var numb = parseInt(b.id);
    if (numa == 0) var hang = 0;
    else 
        var hang = parseInt(numa / 3);
    if (numb == 0) var hang2 = 0;
    else
        var hang2 = parseInt(numb / 3);
    for (var i = 0; i < 3; i++) {
        var temp;
        temp = text[hang * 3+i].innerHTML;
        text[hang * 3+i].innerHTML = text[hang2 * 3+i].innerHTML;
        text[hang2 * 3+i].innerHTML = temp;
    }
