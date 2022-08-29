const root=document.documentElement;

//Parallax
let layer=document.getElementById("parallax").children;
const sun_moon=document.getElementById("sun_moon");
const nav_pills=document.getElementsByClassName("nav-pills");
window.addEventListener("scroll",(e)=>{
    let scroll_vector=window.scrollY;
    
    nav_pills[0].style.transform=nav_pills[1].style.transform=
        `scaleX(${Math.min(2.5,1+2*scroll_vector/200)})`;

    sun_moon.style.transform=
        `translateY(${Math.max(0,163*(1-scroll_vector/200))}px)`;

    for(let i=0;i<layer.length;i++){
        layer[i].style.bottom=
            -100-(scroll_vector*0.1*(6-i))+'px'
    }

})

//Day Night Switching
let mode=1;
const logoimg=document.getElementById("Logoimg");
function mode_switch(){
    
    if ((mode++)%2) {
        root.style.setProperty('--font_clr',"white");
        root.style.setProperty('--clr_lt1',"#C3BCF4");
        root.style.setProperty('--clr_lt2',"#624EE2");
        root.style.setProperty('--clr_dk1',"#0D083A");
        logoimg.src="Media/logow.png";
        sun_moon.src="Media/Parallax/Blue/Moon.svg";
        for(let i=0;i<7;i++){
            layer[i].src=
                `Media/Parallax/Blue/layer_${7-i}.png`;
        }
    } else {
        root.style.setProperty('--font_clr',"black");
        root.style.setProperty('--clr_lt1',"#FFFBC8");
        root.style.setProperty('--clr_lt2',"#FDDA0D");
        root.style.setProperty('--clr_dk1',"#2D111A");
        logoimg.src="Media/logo.png";
        sun_moon.src="Media/Parallax/Yellow/Sun.svg";
        for(let i=0;i<7;i++){
            layer[i].src=
                `Media/Parallax/Yellow/layer_${7-i}.png`;
        }
    }
    
}

//Mobile Hamburger
function menushow(){
    console.log('Hello');
    document.getElementById("navlist").classList.toggle('active');
}


