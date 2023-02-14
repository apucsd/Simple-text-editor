
function bold(){
    const textField = document.getElementById('text');

    textField.style.fontWeight = 'bold';
}
function italic(){
    const textField = document.getElementById('text');

    textField.style.fontStyle = 'italic';
}
function underline(){
    const textField = document.getElementById('text');

    textField.style.textDecoration = 'underline';
}
function leftAlign(){
    const textField = document.getElementById('text');

    textField.style.textAlign = 'left';
}
function centerAlign(){
    const textField = document.getElementById('text');

    textField.style.textAlign = 'center';
}
function rightAlign(){
    const textField = document.getElementById('text');

    textField.style.textAlign = 'right';
}
function textTransform(){
    const textField = document.getElementById('text');

    textField.style.textTransform = 'uppercase';
}


document.getElementById('fontSize').addEventListener('change',function(e){
    
    const fontSizeValue = parseInt( e.target.value);
    const textField = document.getElementById('text');
 
   textField.style.fontSize = fontSizeValue + 'px';


    
})
document.getElementById('color').addEventListener('input',function(e){
    const textField = document.getElementById('text');

    textField.style.color = e.target.value;

    
})

