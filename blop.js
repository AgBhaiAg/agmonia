
const submit = document.getElementById("qwert");
const val = document.getElementById("whomp whomp");
let loi;
let converter;


let t;
let l = 0;


    submit.onclick = function(){
    const value = document.getElementById("wert").value;
    const yu = document.getElementById("c2").value;
    if(yu == `INR`){
        t = '₹';
        converter = 1;
    }
    if(yu == `USD`){
        t = '$';
        converter = 83.38;
    }
    if(yu == `GBP`){
        t = '£';
        converter = 104.63;
    }
    if(yu == `CAD`){
        t = 'CA$';
        converter = 60.99;
    }
    if(yu == `AED`){
        t = 'د.إ';
        converter = 22.7;
    }
    
    loi = value / converter;
    if(yu == `AED`){
        val.textContent = loi + t;
    }else{
    val.textContent = t + loi;
    }
}
