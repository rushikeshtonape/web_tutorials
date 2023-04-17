var qnum = 0, pnum = 0, qnum1 = 0, pnum1 = 0, qnum2 = 0, pnum2 = 0, qnum3 =0,pnum3 = 0,qnum4 =0,pnum4 = 0,qnum5 =0,pnum5 = 0;
var totalbill = 0, totalbill1 = 0, totalbill2 = 0, totalbill4 = 0, totalbill5 = 0;
document.getElementById("qnum1").addEventListener("keyup",function(){
    qnum = document.getElementById("qnum1").value;
    console.log(qnum);
});
document.getElementById("pnum1").addEventListener("keyup",function(){
    pnum = document.getElementById("pnum1").value;
    console.log(pnum);
    
});
document.getElementById("pnum1").addEventListener("keyup",function(){
    totalbill = qnum * pnum;
    //console.log(totalbill);
    document.getElementById("total1").innerHTML = totalbill;     
});

 document.getElementById("qnum2").addEventListener("keyup",function(){
     qnum1 = document.getElementById("qnum2").value;
     console.log(qnum1);
 });
 document.getElementById("pnum2").addEventListener("keyup",function(){
     pnum1 = document.getElementById("pnum2").value;
     console.log(pnum1);
    
 });
 document.getElementById("pnum2").addEventListener("keyup",function(){
     totalbill1 = qnum1 * pnum1;
     console.log(totalbill1);
     document.getElementById("total2").innerHTML = totalbill1;     
});

 document.getElementById("qnum3").addEventListener("keyup",function(){
     qnum2 = document.getElementById("qnum3").value;
     console.log(qnum2);
 });
 document.getElementById("pnum3").addEventListener("keyup",function(){
     pnum2 = document.getElementById("pnum3").value;
     console.log(pnum2);
    
 });
 document.getElementById("pnum3").addEventListener("keyup",function(){
     totalbill2 = qnum2 * pnum2;
     console.log(totalbill2);
     document.getElementById("total3").innerHTML = totalbill2;     
});

document.getElementById("qnum4").addEventListener("keyup",function(){
    qnum3 = document.getElementById("qnum4").value;
    console.log(qnum3);
});
document.getElementById("pnum4").addEventListener("keyup",function(){
    pnum3 = document.getElementById("pnum4").value;
    console.log(pnum3);
   
});
document.getElementById("pnum4").addEventListener("keyup",function(){
    totalbill3 = qnum3 * pnum3;
    console.log(totalbill3);
    document.getElementById("total4").innerHTML = totalbill3;     
});
document.getElementById("qnum5").addEventListener("keyup",function(){
    qnum4 = document.getElementById("qnum5").value;
    console.log(qnum4);
});
document.getElementById("pnum5").addEventListener("keyup",function(){
    pnum4 = document.getElementById("pnum5").value;
    console.log(pnum4);
   
});
document.getElementById("pnum5").addEventListener("keyup",function(){
    totalbill4 = qnum4 * pnum4;
    console.log(totalbill4);
    document.getElementById("total5").innerHTML = totalbill4;     
});
document.getElementById("qnum6").addEventListener("keyup",function(){
    qnum5 = document.getElementById("qnum6").value;
    console.log(qnum5);
});
document.getElementById("pnum6").addEventListener("keyup",function(){
    pnum5 = document.getElementById("pnum6").value;
    console.log(pnum5);
   
});
document.getElementById("pnum6").addEventListener("keyup",function(){
    totalbill5 = qnum5 * pnum5;
    console.log(totalbill5);
    document.getElementById("total6").innerHTML = totalbill5;     
});
document.getElementById("pnum6").addEventListener("keyup",function(){
    document.getElementById("final").innerText = totalbill+totalbill1+totalbill2+totalbill3+totalbill4+totalbill5;
});

document.getElementById("sub").addEventListener("click",function(){
    alert("Hey!, Your data is submitted successfully");
})