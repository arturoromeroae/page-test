'use strict'

function argentina() {
    var showHidden = document.getElementById("argen");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        argen.innerHTML = `
        <p>${data['0'].capital}</p>
        `
        // for (let i = 0; i < data.length; i++) {
        //     bel.innerHTML = `
        //     <p>Capitales: ${data['i'].capital}<p>
        //     `
        // }
    })
    
    if (showHidden.style.display === "none") {
        showHidden.style.display = "block";
    } else {
        showHidden.style.display = "none";
    }
}

function belize() {
    var showHidden = document.getElementById("bel");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        bel.innerHTML = `
        <p>${data['1'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function bolivia() {
    var showHidden = document.getElementById("bol");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        bol.innerHTML = `
        <p>${data['2'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function chile() {
    var showHidden = document.getElementById("chil");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        chil.innerHTML = `
        <p>${data['3'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function colombia() {
    var showHidden = document.getElementById("col");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        col.innerHTML = `
        <p>${data['4'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function costa() {
    var showHidden = document.getElementById("cost");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        cost.innerHTML = `
        <p>${data['5'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function cuba() {
    var showHidden = document.getElementById("cub");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        cub.innerHTML = `
        <p>${data['6'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function dominican() {
    var showHidden = document.getElementById("dom");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        dom.innerHTML = `
        <p>${data['7'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function ecuador() {
    var showHidden = document.getElementById("ecu");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        ecu.innerHTML = `
        <p>${data['8'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function salvador() {
    var showHidden = document.getElementById("salv");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        salv.innerHTML = `
        <p>${data['9'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function equatorial() {
    var showHidden = document.getElementById("equa");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        equa.innerHTML = `
        <p>${data['10'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function guam() {
    var showHidden = document.getElementById("gua");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        gua.innerHTML = `
        <p>${data['11'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function guatemala() {
    var showHidden = document.getElementById("guat");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        guat.innerHTML = `
        <p>${data['12'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function honduras() {
    var showHidden = document.getElementById("hon");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        hon.innerHTML = `
        <p>${data['13'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function mexico() {
    var showHidden = document.getElementById("mex");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        mex.innerHTML = `
        <p>${data['14'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function nicaragua() {
    var showHidden = document.getElementById("nic");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        nic.innerHTML = `
        <p>${data['15'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function panama() {
    var showHidden = document.getElementById("pan");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        pan.innerHTML = `
        <p>${data['16'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function paraguay() {
    var showHidden = document.getElementById("par");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        par.innerHTML = `
        <p>${data['17'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function peru() {
    var showHidden = document.getElementById("pe");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        pe.innerHTML = `
        <p>${data['18'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function puerto() {
    var showHidden = document.getElementById("pr");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        pr.innerHTML = `
        <p>${data['19'].capital}</p>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function spain() {
    var showHidden = document.getElementById("spa");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        spa.innerHTML = `
        <p>${data['20'].capital}</p>
        `
    })
    if (showHidden.style.display === "none") {
        showHidden.style.display = "block";
    } else {
        showHidden.style.display = "none";
    }
}

function uruguay() {
    var showHidden = document.getElementById("uru");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        uru.innerHTML = `
        <h3>${data['21'].capital}</h3>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function venezuela() {
    var showHidden = document.getElementById("ve");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        ve.innerHTML = `
        <h3>${data['22'].capital}</h3>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

function western() {
    var showHidden = document.getElementById("wes");

    fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        wes.innerHTML = `
        <h3>${data['23'].capital}</h3>
        `
    })
    // if (showHidden.style.display === "none") {
    //     showHidden.style.display = "block";
    // } else {
    //     showHidden.style.display = "none";
    // }
}

var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');
var modal6 = document.getElementById('myModal6');
var modal7 = document.getElementById('myModal7');
var modal8 = document.getElementById('myModal8');
var modal9 = document.getElementById('myModal9');
var modal10 = document.getElementById('myModal10');
var modal11 = document.getElementById('myModal11');
var modal12 = document.getElementById('myModal12');
var modal13 = document.getElementById('myModal13');
var modal14 = document.getElementById('myModal14');
var modal15 = document.getElementById('myModal15');
var modal16 = document.getElementById('myModal16');
var modal17 = document.getElementById('myModal17');
var modal18 = document.getElementById('myModal18');
var modal19 = document.getElementById('myModal19');
var modal20 = document.getElementById('myModal20');
var modal21 = document.getElementById('myModal21');
var modal22 = document.getElementById('myModal22');
var modal23 = document.getElementById('myModal23');
var modal24 = document.getElementById('myModal24');

var btn = document.getElementById('myBtn');
var btn2 = document.getElementById('myBtn2');
var btn3 = document.getElementById('myBtn3');
var btn4 = document.getElementById('myBtn4');
var btn5 = document.getElementById('myBtn5');
var btn6 = document.getElementById('myBtn6');
var btn7 = document.getElementById('myBtn7');
var btn8 = document.getElementById('myBtn8');
var btn9 = document.getElementById('myBtn9');
var btn10 = document.getElementById('myBtn10');
var btn11 = document.getElementById('myBtn11');
var btn12 = document.getElementById('myBtn12');
var btn13 = document.getElementById('myBtn13');
var btn14 = document.getElementById('myBtn14');
var btn15 = document.getElementById('myBtn15');
var btn16 = document.getElementById('myBtn16');
var btn17 = document.getElementById('myBtn17');
var btn18 = document.getElementById('myBtn18');
var btn19 = document.getElementById('myBtn19');
var btn20 = document.getElementById('myBtn20');
var btn21 = document.getElementById('myBtn21');
var btn22 = document.getElementById('myBtn22');
var btn23 = document.getElementById('myBtn23');
var btn24 = document.getElementById('myBtn24');

var span = document.getElementsByClassName('close')[0];
var span2 = document.getElementsByClassName('close')[1];
var span3 = document.getElementsByClassName('close')[2];
var span4 = document.getElementsByClassName('close')[3];
var span5 = document.getElementsByClassName('close')[4];
var span6 = document.getElementsByClassName('close')[5];
var span7 = document.getElementsByClassName('close')[6];
var span8 = document.getElementsByClassName('close')[7];
var span9 = document.getElementsByClassName('close')[8];
var span10 = document.getElementsByClassName('close')[9];
var span11 = document.getElementsByClassName('close')[10];
var span12 = document.getElementsByClassName('close')[11];
var span13 = document.getElementsByClassName('close')[12];
var span14 = document.getElementsByClassName('close')[13];
var span15 = document.getElementsByClassName('close')[14];
var span16 = document.getElementsByClassName('close')[15];
var span17 = document.getElementsByClassName('close')[16];
var span18 = document.getElementsByClassName('close')[17];
var span19 = document.getElementsByClassName('close')[18];
var span20 = document.getElementsByClassName('close')[19];
var span21 = document.getElementsByClassName('close')[20];
var span22 = document.getElementsByClassName('close')[21];
var span23 = document.getElementsByClassName('close')[22];
var span24 = document.getElementsByClassName('close')[23];

btn.onclick = function() {
    modal.style.display = 'block';
}
btn2.onclick = function() {
    modal2.style.display = 'block';
}
btn3.onclick = function() {
    modal3.style.display = 'block';
}
btn4.onclick = function() {
    modal4.style.display = 'block';
}
btn5.onclick = function() {
    modal5.style.display = 'block';
}
btn6.onclick = function() {
    modal6.style.display = 'block';
}
btn7.onclick = function() {
    modal7.style.display = 'block';
}
btn8.onclick = function() {
    modal8.style.display = 'block';
}
btn9.onclick = function() {
    modal9.style.display = 'block';
}
btn10.onclick = function() {
    modal10.style.display = 'block';
}
btn11.onclick = function() {
    modal11.style.display = 'block';
}
btn12.onclick = function() {
    modal12.style.display = 'block';
}
btn13.onclick = function() {
    modal13.style.display = 'block';
}
btn14.onclick = function() {
    modal14.style.display = 'block';
}
btn15.onclick = function() {
    modal15.style.display = 'block';
}
btn16.onclick = function() {
    modal16.style.display = 'block';
}
btn17.onclick = function() {
    modal17.style.display = 'block';
}
btn18.onclick = function() {
    modal18.style.display = 'block';
}
btn19.onclick = function() {
    modal19.style.display = 'block';
}
btn20.onclick = function() {
    modal20.style.display = 'block';
}
btn21.onclick = function() {
    modal21.style.display = 'block';
}
btn22.onclick = function() {
    modal22.style.display = 'block';
}
btn23.onclick = function() {
    modal23.style.display = 'block';
}
btn24.onclick = function() {
    modal24.style.display = 'block';
}


span.onclick = function() {
  modal.style.display = 'none';
}
span2.onclick = function() {
  modal2.style.display = 'none';
}
span3.onclick = function() {
    modal3.style.display = 'none';
  }
span4.onclick = function() {
    modal4.style.display = 'none';
}
span5.onclick = function() {
    modal5.style.display = 'none';
}
span6.onclick = function() {
    modal6.style.display = 'none';
}
span7.onclick = function() {
    modal7.style.display = 'none';
}
span8.onclick = function() {
    modal8.style.display = 'none';
}
span9.onclick = function() {
    modal9.style.display = 'none';
}
span10.onclick = function() {
    modal10.style.display = 'none';
}
span11.onclick = function() {
    modal11.style.display = 'none';
}
span12.onclick = function() {
    modal12.style.display = 'none';
}
span13.onclick = function() {
    modal13.style.display = 'none';
}
span14.onclick = function() {
    modal14.style.display = 'none';
}
span15.onclick = function() {
    modal15.style.display = 'none';
}
span16.onclick = function() {
    modal16.style.display = 'none';
}
span17.onclick = function() {
    modal17.style.display = 'none';
}
span18.onclick = function() {
    modal18.style.display = 'none';
}
span19.onclick = function() {
    modal19.style.display = 'none';
}
span20.onclick = function() {
    modal20.style.display = 'none';
}
span21.onclick = function() {
    modal21.style.display = 'none';
}
span22.onclick = function() {
    modal22.style.display = 'none';
}
span23.onclick = function() {
    modal23.style.display = 'none';
}
span24.onclick = function() {
    modal24.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal || event.target == modal2 || event.target == modal3
    || event.target == modal4 || event.target == modal5 || event.target == modal6
    || event.target == modal7 || event.target == modal8 || event.target == modal9
    || event.target == modal10 || event.target == modal11 || event.target == modal12
    || event.target == modal13 || event.target == modal14 || event.target == modal15
    || event.target == modal16 || event.target == modal17 || event.target == modal18
    || event.target == modal19 || event.target == modal20 || event.target == modal21
    || event.target == modal22 || event.target == modal23 || event.target == modal24) {
    modal.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
    modal4.style.display = 'none';
    modal5.style.display = 'none';
    modal6.style.display = 'none';
    modal7.style.display = 'none';
    modal8.style.display = 'none';
    modal9.style.display = 'none';
    modal10.style.display = 'none';
    modal11.style.display = 'none';
    modal12.style.display = 'none';
    modal13.style.display = 'none';
    modal14.style.display = 'none';
    modal15.style.display = 'none';
    modal16.style.display = 'none';
    modal17.style.display = 'none';
    modal18.style.display = 'none';
    modal19.style.display = 'none';
    modal20.style.display = 'none';
    modal21.style.display = 'none';
    modal22.style.display = 'none';
    modal23.style.display = 'none';
    modal24.style.display = 'none';
  }
}

