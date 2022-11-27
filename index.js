const size = document.getElementById('size');
const editor = document.getElementById('editor');
//editor.value = "ఘ";
var font_size_bool = false;
var editor_color_bool = false;
//functions
function size_ok() {
    let size = document.getElementById('size_input').value;
    editor.style.fontSize = size+"px";    
}

function font_size() {
    if (font_size_bool === false) {
        size.style.display = "block";
        font_size_bool = true;
        
    }else
    if (font_size_bool === true) {
        size.style.display = "none";
        font_size_bool = false;
    }
}
function bg_btn_fun() {
    if (editor_color_bool === false) {
        document.getElementById('bg_options').style.display = "block";
        editor_color_bool = true;
    } else 
    if (editor_color_bool === true) {
        document.getElementById('bg_options').style.display = "none";
        editor_color_bool = false;
    }
}
function bg(color) {
    
    editor.style.backgroundColor = color;
    
}

