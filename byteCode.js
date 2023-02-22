const remenufill=document.querySelector("#nav-bar");
const overlay =document.querySelector("#top");
const manu=document.querySelector("#mainu-text");
const gift=document.querySelector("#Gifts");
const gift1=document.querySelector(".gift");
const Trending=document.querySelector(".ri-apps-fill");
const trending1=document.querySelector("#trending");
const mystuff=document.querySelector(".ri-file-cloud-fill");
const mystuff1=document.querySelector("#mystuff");
var flag = 1;
remenufill.addEventListener("click",function()
{
    overlay.style.pointerEvents = "initial";
    if(flag===1)
    {      
        manu.style.left = "0%";
        manu.style.opacity="1";
        flag = 0;
        gift1.style.left = "-100%";
    }
    else
    {
        manu.style.left = "-100%";
        manu.style.transition ="all cubic-bezier(0.165, 0.84, 0.44, 1) 1s";
        flag = 1;  
    }
})
overlay.addEventListener("click",function()
{
        manu.style.left = "-100%";
        manu.style.transition ="all cubic-bezier(0.165, 0.84, 0.44, 1) 1s"; 
        
})
var flag1=1;
gift.addEventListener("click",function()
{
    overlay.style.pointerEvents = "initial";
    if(flag1===1)
    {   trending1.style.left = "-100%";
        gift1.style.left = "0%";
        gift1.style.opacity="1";
        flag1 = 0;
        manu.style.left = "-100%";
    }
    else
    {
        gift1.style.left = "-100%";
        gift1.style.transition = "all cubic-bezier(0.165, 0.84, 0.44, 1) 1s";
        flag1 = 1;  
    }
})
overlay.addEventListener("click",function()
{
        gift1.style.left = "-100%";
        gift1.style.transition = "all cubic-bezier(0.165, 0.84, 0.44, 1) 1s";
})
var flag2=1;
Trending.addEventListener("click",function()
{  
    overlay.style.pointerEvents = "initial";
    if(flag2===1)
    {      
        trending1.style.left = "0%";
        trending1.style.opacity="1";
        flag2 = 0;
        manu.style.left = "-100%";
    }
    else
    {
        trending1.style.left = "-100%";
        trending1.style.transition = "all cubic-bezier(0.165, 0.84, 0.44, 1) 1s";
        flag2 = 1;  
    }
})
overlay.addEventListener("click",function()
{
        trending1.style.left = "-100%";
        trending1.style.transition = "all cubic-bezier(0.165, 0.84, 0.44, 1) 1s";
        
})
var flag3=1;
mystuff.addEventListener("click",function()
{  
    overlay.style.pointerEvents = "initial";
    if(flag3===1)
    {      
        mystuff1.style.left = "0%";
        mystuff1.style.opacity="1";
        flag3 = 0;
        manu.style.left = "-100%";
    }
    else
    {
        mystuff1.style.left = "-100%";
        mystuff1.style.transition =="all cubic-bezier(0.165, 0.84, 0.44, 1) 1s";
        flag3 = 1;  
    }
})
overlay.addEventListener("click",function()
{
        mystuff1.style.left = "-100%";
        mystuff1.style.transition = "all cubic-bezier(0.165, 0.84, 0.44, 1) 1s";
        
})




var tl = gsap.timeline()
tl.to("#itm3 h1",
{
    opacity : 1,
    duration : 2,
},"same")
.to("#itm3 h2",
{
    opacity : 1,
    duration : 2,
},"same")
.to("#itm3 button",
{
    opacity : 1,
})
.to("#itm3 h1",
{
    delay : 1,
    scale : 1,
    duration : 2,
},"same1")
.to("#itm3 h2",
{
    delay : 1,
   scale : 1,
   duration : 2,
},"same1")
.to("#itm3 button",
{
   delay : 1,
   scale : 1,
   duration : 2,
},"same1")
.from("#itm1",
{
    left : "-100%",
    duration : 3,
},"same1")
.from("#itm2",
{
    left : "-100%",
    duration : 3,
},"same1")
.from("#itm4",
{
    right : "-100%",
    duration : 3,
},"same1")
.from("#itm5",
{
    right : "-100%",
    duration : 3,
},"same1")
.from("#bt-itm3",
{
    bottom : "-100%", 
    duration : 3,
},"same1")
.from("#bt-itm1",
{
    left : "-100%", 
    delay : 1,
    duration : 3,
},"same1")
.from("#bt-itm2",
{
    left : "-100%",
    delay : 1, 
    duration : 3,
},"same1")
.from("#bt-itm4",
{
    right : "-100%", 
    delay : 1,
    duration : 3,
},"same1")
.from("#bt-itm5",
{
    right : "-100%", 
    delay : 1,
    duration : 3,
},"same1")

.from("#mid-itm1",
{
    left : "-100%", 
    delay : 1,
    duration : 3,
},"same1")
.from("#mid-itm2",
{
    left : "-100%", 
    delay : 1,
    duration : 3,
},"same1")
.from("#mid-itm3",
{
    right : "-100%", 
    delay : 1,
    duration : 3,
},"same1")
.from("#mid-itm4",
{
    right : "-100%", 
    delay : 1,
    duration : 3,
},"same1")
.from("#mid-itm5",
{
    right : "-100%", 
    delay : 1,
    duration : 3,
},"same1")


var button = document.querySelector("#itm3 button");

button.addEventListener("click",function()
{
    var tl1 = gsap.timeline();
    tl1.to("#itm3 h1",
    {
        opacity : 0,
        // duration : 2,
    },"same")
    .to("#itm3 h2",
    {
        opacity : 0,
        // duration : 2,
    },"same")
    .to("#itm3 button",
    {
        opacity : 0,
    })
    .to("#itm1",
    {
        scale : 0,
        // duration : 3,
    },"same1")
    .to("#itm2",
    {
        scale : 0,
        // duration : 3,
    },"same1")
    .to("#itm4",
    {
        scale : 0,
        // duration : 3,
    },"same1")
    .to("#itm5",
    {
        scale : 0,
        // duration : 3,
    },"same1")
    .to("#bt-itm3",
    {
        scale : 0,
        // duration : 3,
    },"same1")
    .to("#bt-itm1",
    {
        scale : 0,
        // duration : 3,
    },"same1")
    .to("#bt-itm2",
    {
        scale : 0,
        // duration : 3,
    },"same1")
    .to("#bt-itm4",
    {
        scale : 0,
        // duration : 3,
    },"same1")
    .to("#bt-itm5",
    {
        scale : 0,
        // duration : 3,
    },"same1")
    
    .to("#mid-itm1",
    {
        scale : 0,
        // duration : 3,
    },"same1")
    .to("#mid-itm2",
    {
        scale : 0,
        // duration : 3,
    },"same1")
    .to("#mid-itm3",
    {
        scale : 0,
        // duration : 3,
    },"same1")
    .to("#mid-itm4",
    {
        scale : 0,
        // duration : 3,
    },"same1")
    .to("#mid-itm5",
    {
        scale : 0,
        // duration : 3,
    },"same1")
    .to("#buttum-mid",
    {
        display: "none",
    },"same2")
    .to("#bottum-top",
    {
        display: "none",
    },"same2")
    .to("#buttum-botm",
    {
        display: "none",
    },"same2")
    .to("#bottum #wraper",
    {
        duration : 1,
        display : "initial",
    })
    .to("#wraper .clmA img",
    {
        scale : 1,
    })
})

var arr = [
{id : "id0", img:"Images/bobo-handpainted-indian-vehicles/Truck/i4.png",
img2:"Images/metal-cup/p1/i2.png",
img3:"Images/Metal-glass/p1/i1.png",
img4:"Images/pen-holder/p2/i1.png",imgid: "A"},

{id : "id1", img:"Images/Personalised-Notebook-cover/i2.png",
img2:"Images/Printed-Indian-cup/i3.png",
img3:"Images/Tissue-Napekin-Holder/p2/i2.png",
img4:"Images/hanging-wall/p4/i3.png",imgid: "B"},

{id : "id2", img:"Images/indian-spice-collection-box/p1/i1.png",
img2:"Images/decotative-toy/p4/i3.png",
img3:"Images/Wooden-wall-hanger-spoons-for-home/Warli-Art/p1/i1.png",
img4:"Images/HandMade-bag/Handicraft-ethnic-vintage-banjara-handmade-handbag/p1/i1.png",imgid: "C"},

{id : "id3", img:"Images/HandMade-bag/Poly-Dopin-pouch-with-tassel-attached-for-women/p5/i2.png",
img2:"Images/HandMade-bag/Real-banjara-bag/p1/i3.png",
img3:"Images/Handmade-Moblile-pursh-with-name/i3.png",
img4:"Images/tree-shape-jwellery-stand-or-bangle-holder/tree-carving-antique-black/p1/i2.png",imgid: "D"},

{id : "id4", img:"Images/Wooden-drink-coaster-Mandala/Flower-Shaped/p1/i1.png",
img2:"Images/Wooden-Jewelry/IndianHandmadeCarvingBox/p3/i3.png",
img3:"Images/Wooden-Jewelry/IndianHandmadeCarvingBox/p11/i2.png",
img4:"Images/Wooden-Jewelry/wooden-and-brass-handmade/p7/i1.png",imgid: "E"},

{id : "id5", img:"Images/wooden-Tradition-item/p2/i1.png",
img2:"Images/Wooden-Folding-bangle-stand-holder/p1/i3.png",
img3:"Images/metal-cup/p2/i4.png",
img4:"Images/Dhoop-stand/Meditating-buddha/p3/i1.png",imgid: "F"},

{id : "id6", img:"Images/Golden-Handcrafted-Palm-buddha/p1/i2.png",
img2:"Images/wooden-Tradition-item/p1/i1.png",
img3:"Images/Wooden-wall-hanger-spoons-for-home/RajasthaniCulture/p1/i1.png",
img4:"Images/HandMade-bag/Poly-Dopin-pouch-with-tassel-attached-for-women/p3/i1.png",imgid: "G"},

{id : "id7", img:"Images/tree-shape-jwellery-stand-or-bangle-holder/tree-carving-sheesham-Handicraft/p5/i2.png",
img2:"Images/brass-product/Scooter/p1/i4.png",
img3:"Images/Wooden-drink-coaster-Mandala/Square-shaped-text/p1/i5.png",
img4:"Images/Wooden-Jewelry/wooden-and-brass-handmade/p4/i3.png",imgid: "H"},

{id : "id8", img:"Images/decotative-toy/p1/i3.png",
img2:"Images/decotative-toy/p5/i5.png",
img3:"Images/hanging-wall/p1/i1.png",
img4:"Images/woodchair.JPEG",imgid: "I"},

{id : "id9", img:"Images/bamboo_art-tractor.png",
img2:"Images/craftart-bucket.JPG",
img3:"Images/top.png",
img4:"Images/Hangling-Text/p1/i1.png",imgid: "J"},
];
var clutter = "";
arr.forEach(function(val,idx)
{
    clutter = clutter + `               
    <div id = "${val.id}" class = "clmA">
    <div id="${val.imgid}1" class="alpha">
        <img  src="${val.img}" alt="loading">
    </div>
    <div id="${val.imgid}2" class="beta">
    <img  src="${val.img2}" alt="loading">
    </div>
    <div id="${val.imgid}3" class="charlie">
    <img  src="${val.img3}" alt="loading">
    </div>
    <div id="${val.imgid}4" class="delta">
    <img  src="${val.img4}" alt="loading">
    </div>
 
    </div>`
    idx++
});

var columns = document.querySelector("#columns");
columns.innerHTML = clutter;

var A1 = document.querySelector("#A1");
var A2 = document.querySelector("#A2");
var A3 = document.querySelector("#A3");
var A4 = document.querySelector("#A4");

var B1 = document.querySelector("#B1");
var B2 = document.querySelector("#B2");
var B3 = document.querySelector("#B3");
var B4 = document.querySelector("#B4");

var C1 = document.querySelector("#C1");
var C2 = document.querySelector("#C2");
var C3 = document.querySelector("#C3");
var C4 = document.querySelector("#C4");

var D1 = document.querySelector("#D1");
var D2 = document.querySelector("#D2");
var D3 = document.querySelector("#D3");
var D4 = document.querySelector("#D4");

var E1 = document.querySelector("#E1");
var E2 = document.querySelector("#E2");
var E3 = document.querySelector("#E3");
var E4 = document.querySelector("#E4");

var F1 = document.querySelector("#F1");
var F2 = document.querySelector("#F2");
var F3 = document.querySelector("#F3");
var F4 = document.querySelector("#F4");

var G1 = document.querySelector("#G1");
var G2 = document.querySelector("#G2");
var G3 = document.querySelector("#G3");
var G4 = document.querySelector("#G4");

var H1 = document.querySelector("#H1");
var H2 = document.querySelector("#H2");
var H3 = document.querySelector("#H3");
var H4 = document.querySelector("#H4");

var I1 = document.querySelector("#I1");
var I2 = document.querySelector("#I2");
var I3 = document.querySelector("#I3");
var I4 = document.querySelector("#I4");

var J1 = document.querySelector("#J1");
var J2 = document.querySelector("#J2");
var J3 = document.querySelector("#J3");
var J4 = document.querySelector("#J4");

var exit = document.querySelector("#exit");
var flag = true;
function animation()
{
    flag = false;
    var tl3 = gsap.timeline();
    tl3.to("#id0",
    {
      position : "absolute",
      left : "-20%",
      duration : 2,
    },"juliet")
    .to("#id1",
    {
      position : "absolute",
      left : "-20%",
      duration : 2,
    },"juliet")
    .to("#id2",
    {
      position : "absolute",
      left : "0%",
      duration : 2,
    },"juliet")
  
    .to("#id3",
    {
      position : "absolute",
      left : "10%",
      duration : 2,
    },"juliet")
    .to("#id4",
    {
      position : "absolute",
      left : "20%",
      duration : 2,
    },"juliet")
    .to("#id5",
    {
      position : "absolute",
      right : "20%",
      duration : 2,
    },"juliet")
    .to("#id6",
    {
      position : "absolute",
      right : "10%",
      duration : 2,
    },"juliet")
    .to("#id7",
    {
      position : "absolute",
      right : "0%",
      duration : 2,
    },"juliet")
    .to("#id8",
    {
      position : "absolute",
      right : "-20%",
      duration : 2,
    },"juliet")
    .to("#id9",
    {
      position : "absolute",
      right : "-20%",
      duration : 2,
    },"juliet")  
}

A1.addEventListener("click",function(det)
{exit.style.display = "initial";
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    gsap.to("#A1",
    {
        position : "absolute",
        duration : 2,
        left : "650%",
        top : "40%",
        scale : 2,
    })
})
A2.addEventListener("click",function(det)
{exit.style.display = "initial";
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    gsap.to("#A2",
    {
        position : "absolute",
        duration : 2,
        left : "650%",
        top : "40%",
        scale : 2,
    })
})
A3.addEventListener("click",function(det)
{
    exit.style.display = "initial";
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    gsap.to("#A3",
    {
        position : "absolute",
        duration : 2,
        left : "650%",
        top : "40%",
        scale : 2,
    })
})
A4.addEventListener("click",function(det)
{
    exit.style.display = "initial";
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    console.log(det.target);
    gsap.to("#A4",
    {
        position : "absolute",
        duration : 2,
        left : "650%",
        top : "40%",
        scale : 2,
    })
})

B1.addEventListener("click",function(det)
{
    exit.style.display = "initial";
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    gsap.to("#B1",
    {
        position : "absolute",
        duration : 2,
        left : "650%",
        top : "40%",
        scale : 2,
    })
})
B2.addEventListener("click",function(det)
{
    exit.style.display = "initial";
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    gsap.to("#B2",
    {
        position : "absolute",
        duration : 2,
        left : "650%",
        top : "40%",
        scale : 2,
    })
})
B3.addEventListener("click",function(det)
{
    exit.style.display = "initial";
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    gsap.to("#B3",
    {
        position : "absolute",
        duration : 2,
        left : "650%",
        top : "40%",
        scale : 2,
    })
})
B4.addEventListener("click",function(det)
{exit.style.display = "initial";
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    console.log(det.target);
    gsap.to("#B4",
    {
        position : "absolute",
        duration : 2,
        left : "650%",
        top : "40%",
        scale : 2,
    })
})

function c1()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function c2()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function c3()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function c4()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}

C1.addEventListener("click",function(det)
{  exit.style.display = "initial"; 
    exit.style.opacity = 1;
     if(flag)
    {
        animation();
    }
    c1();
    gsap.to("#C1",
    {
        position : "absolute",
        duration : 2,
        left : "460%",
        top : "40%",
        scale : 2,
    })
})
C2.addEventListener("click",function(det)
{   exit.style.display = "initial";
     exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    c2();
    gsap.to("#C2",
    {
        position : "absolute",
        duration : 2,
        left : "460%",
        top : "40%",
        scale : 2,
    })
})
C3.addEventListener("click",function(det)
{   exit.style.display = "initial";
     exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    c3();
    gsap.to("#C3",
    {
        position : "absolute",
        duration : 2,
        left : "460%",
        top : "40%",
        scale : 2,
    })
})
C4.addEventListener("click",function(det)
{   exit.style.display = "initial";
     exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    c4();
    gsap.to("#C4",
    {
        position : "absolute",
        duration : 2,
        left : "460%",
        top : "40%",
        scale : 2,
    })
})
function d1()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
  
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function d2()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
  
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function d3()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
  
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function d4()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
  
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
D1.addEventListener("click",function(det)
{   exit.style.display = "initial";
     exit.style.opacity = 1;
    animation();
    d1();
    gsap.to("#D1",
    {
        position : "absolute",
        duration : 2,
        left : "330%",
        top : "40%",
        scale : 2,
    })
})
D2.addEventListener("click",function(det)
{   exit.style.display = "initial";
     exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    d2();
    gsap.to("#D2",
    {
        position : "absolute",
        duration : 2,
        left : "330%",
        top : "40%",
        scale : 2,
    })
})
D3.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    d3();
    gsap.to("#D3",
    {
        position : "absolute",
        duration : 2,
        left : "330%",
        top : "40%",
        scale : 2,
    })
})
D4.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    d3();
    gsap.to("#D4",
    {
        position : "absolute",
        duration : 2,
        left : "330%",
        top : "40%",
        scale : 2,
    })
})

function e1()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })


    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
  
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function e2()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function e3()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function e4()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
E1.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    animation();
    e1();
    gsap.to("#E1",
    {
        position : "absolute",
        duration : 2,
        left : "230%",
        top : "40%",
        scale : 2,
    })
})
E2.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    e2();
    gsap.to("#E2",
    {
        position : "absolute",
        duration : 2,
        left : "230%",
        top : "40%",
        scale : 2,
    })
})
E3.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    e3();
    gsap.to("#E3",
    {
        position : "absolute",
        duration : 2,
        left : "230%",
        top : "40%",
        scale : 2,
    })
})
E4.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    e4();
    gsap.to("#E4",
    {
        position : "absolute",
        duration : 2,
        left : "230%",
        top : "40%",
        scale : 2,
    })
})

J1.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    gsap.to("#J1",
    {
        position : "absolute",
        duration : 2,
        right : "650%",
        top : "40%",
        scale : 2,
    })
})
J2.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    gsap.to("#J2",
    {
        position : "absolute",
        duration : 2,
        right : "650%",
        top : "40%",
        scale : 2,
    })
})
J3.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    gsap.to("#J3",
    {
        position : "absolute",
        duration : 2,
        right : "650%",
        top : "40%",
        scale : 2,
    })
})
J4.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    gsap.to("#J4",
    {
        position : "absolute",
        duration : 2,
        right : "650%",
        top : "40%",
        scale : 2,
    })
})

I1.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    gsap.to("#I1",
    {
        position : "absolute",
        duration : 2,
        right : "650%",
        top : "40%",
        scale : 2,
    })
})
I2.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    gsap.to("#I2",
    {
        position : "absolute",
        duration : 2,
        right : "650%",
        top : "40%",
        scale : 2,
    })
})
I3.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    gsap.to("#I3",
    {
        position : "absolute",
        duration : 2,
        right : "650%",
        top : "40%",
        scale : 2,
    })
})
I4.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    console.log(det.target);
    gsap.to("#I4",
    {
        position : "absolute",
        duration : 2,
        right : "650%",
        top : "40%",
        scale : 2,
    })
})

function f1()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function f2()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function f3()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function f4()
{   
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
F1.addEventListener("click",function(det)
{   exit.style.display = "initial";    
    exit.style.opacity = 1;
     if(flag)
    {
        animation();
    }
    f1();
    gsap.to("#F1",
    {
        position : "absolute",
        duration : 2,
        right : "230%",
        top : "40%",
        scale : 2,
    })
})
F2.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    f2();
    gsap.to("#F2",
    {
        position : "absolute",
        duration : 2,
        right : "230%",
        top : "40%",
        scale : 2,
    })
})
F3.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    f3();
    gsap.to("#F3",
    {
        position : "absolute",
        duration : 2,
        right : "230%",
        top : "40%",
        scale : 2,
    })
})
F4.addEventListener("click",function(det)
{   exit.style.display = "initial";
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    f4();
    gsap.to("#F4",
    {
        position : "absolute",
        duration : 2,
        right : "230%",
        top : "40%",
        scale : 2,
    })
})

function g1()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function g2()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function g3()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function g4()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
G1.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    animation();
    g1();
    gsap.to("#G1",
    {
        position : "absolute",
        duration : 2,
        right : "330%",
        top : "40%",
        scale : 2,
    })
})
G2.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    g2();
    gsap.to("#G2",
    {
        position : "absolute",
        duration : 2,
        right : "330%",
        top : "40%",
        scale : 2,
    })
})
G3.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    g3();
    gsap.to("#G3",
    {
        position : "absolute",
        duration : 2,
        right : "330%",
        top : "40%",
        scale : 2,
    })
})
G4.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    g4();
    gsap.to("#G4",
    {
        position : "absolute",
        duration : 2,
        right : "330%",
        top : "40%",
        scale : 2,
    })
})

function h1()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function h2()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function h3()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
function h4()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}
H1.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    animation();
    h1();
    gsap.to("#H1",
    {
        position : "absolute",
        duration : 2,
        right : "460%",
        top : "40%",
        scale : 2,
    })
})
H2.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    h2();
    gsap.to("#H2",
    {
        position : "absolute",
        duration : 2,
        right : "460%",
        top : "40%",
        scale : 2,
    })
})
H3.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    h3();
    gsap.to("#H3",
    {
        position : "absolute",
        duration : 2,
        right : "460%",
        top : "40%",
        scale : 2,
    })
})
H4.addEventListener("click",function(det)
{   exit.style.display = "initial"; 
    exit.style.opacity = 1;
    if(flag)
    {
        animation();
    }
    h4();
    gsap.to("#H4",
    {
        position : "absolute",
        duration : 2,
        right : "460%",
        top : "40%",
        scale : 2,
    })
})


var close = document.querySelector("#cancle");
function animationClose()
{
    flag = true;
    var tl4 = gsap.timeline();
    tl4.to("#id0",
    {
      position : "absolute",
      left : "0%",
      duration : 2,
    },"bro")
    .to("#id1",
    {
      position : "absolute",
      left : "10%",
      duration : 2,
    },"bro")
    .to("#id2",
    {
      position : "absolute",
      left : "20%",
      duration : 2,
    },"bro")
  
    .to("#id3",
    {
      position : "absolute",
      left : "30%",
      duration : 2,
    },"bro")
    .to("#id4",
    {
      position : "absolute",
      left : "40%",
      duration : 2,
    },"bro")
    .to("#id5",
    {
      position : "absolute",
      right : "40%",
      duration : 2,
    },"bro")
    .to("#id6",
    {
      position : "absolute",
      right : "30%",
      duration : 2,
    },"bro")
    .to("#id7",
    {
      position : "absolute",
      right : "20%",
      duration : 2,
    },"bro")
    .to("#id8",
    {
      position : "absolute",
      right : "10%",
      duration : 2,
    },"bro")
    .to("#id9",
    {
      position : "absolute",
      right : "0%",
      duration : 2,
    },"bro")
}

function back()
{
    gsap.to("#A1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#A3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#A4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#B1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#B3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#B4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#I1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#I3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#I4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#J1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })    
    gsap.to("#J3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#J4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#C3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#C4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#D3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#D4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E1",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#E2",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E3",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#E4",
    {
        position : "relative",
        duration : 2,
        left : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#F1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#F3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#F4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#G3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#G4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })

    gsap.to("#H1",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    }) 
    gsap.to("#H2",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H3",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
    gsap.to("#H4",
    {
        position : "relative",
        duration : 2,
        right : "0%",
        top : "0%",
        scale : 1,
    })
}

close.addEventListener("click",function()
{
    back();
    animationClose();
    exit.style.opacity = 0;
    exit.style.display = "none";
})





/*
// var friend = document.querySelector("h1");
// var b = document.querySelector("button");
// var flag = 0;
// var timer;
// b.addEventListener("click",function(){
//     if(flag ===0)
//     {
//         friend.style.color = "rgb(205, 212, 0)";
//         friend.textContent = "requested";
//         b.textContent = "remove friend";
//         b.style.backgroundColor = "red";
//         timer = setTimeout(function(){
//             friend.style.color = "green";
//             friend.textContent = "Friend";
//         },2000);
//     flag = 1;
//     }
//     else{
//         friend.style.color = "rgb(230, 161, 161)";
//         friend.textContent = "stranger";
//         b.textContent = "Add friend";
//         b.style.backgroundColor = "green";
//         clearTimeout(timer);
//     flag = 0;
//     }
// });


// var cluster = "";

// arr.forEach(function(val,index){
//     cluster = cluster+`<div id="card">
//     <div id="pic">
//     <img src="${val.img}" alt="">
//     </div>
//     <h1 id = status>${val.name}</h1>
//     <div id="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente!
//         Lorem ipsum dolor sit amet.
//     </div>
//     <button ">add friend</button>
// </div>`;
// console.log(index);
// })
var overlay = document.querySelector("#overlay");
var arr = [
    {name:"Alpha",img:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1727&q=80",status:"Strenger"},
    {name:"Beta",img:"https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",status:"Strenger"},
    {name:"Gama",img:"https://images.unsplash.com/photo-1611558709798-e009c8fd7706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1891&q=80",status:"Strenger"},
];
var show = function(){
    var cluster = "";
    var index = 0;

    arr.forEach(function(val){
        cluster = cluster+`<div id="card">
        <div id="pic">
        <img src="${val.img}" alt="">
        </div>
        <h1 id = "name">${val.name}</h1>
        <h3 id = "${val.status}"> ${val.status}</h1>
        <div id="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente!
            Lorem ipsum dolor sit amet.
        </div>
        <button class = "${val.status}" id=${index}>${(val.status==="Strenger")?"Add Friend":"Remove Friend"}</button>
    </div>`;
    index++;
    });
   overlay.innerHTML = cluster;

}
var flag = 0;
var timer;

show();
overlay.addEventListener("click",function(det){
    if(flag===0){
            arr[det.target.id].status = "Friend";
        show();
        flag =1;
    }
    else{
        arr[det.target.id].status = "Strenger";
        flag = 0
        show();
    }     
})


*/