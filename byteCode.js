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
})

var arr = [{img:"lmn.png"},
{img:"lmn.png"},
{img:"lmn.png"},
{img:"lmn.png"},
{img:"lmn.png"},
{img:"lmn.png"},
{img:"lmn.png"},
{img:"lmn.png"},
{img:"lmn.png"},
{img:"lmn.png"}
];

var clutter = "";
arr.forEach(function(val)
{
    clutter = clutter + `               
    <div class = "clmA">
    <div id="A" class="alpha">
        <img src="${val.img}" alt="loading">
    </div>
    <div class="beta">
    <img src="${val.img}" alt="loading">
    </div>
    <div class="charlie">
    <img src="${val.img}" alt="loading">
    </div>
    <div class="delta">
    <img src="${val.img}" alt="loading">
    </div>
    <div class="echo">
    <img src="${val.img}" alt="loading">
    </div>
    <div class="foxtrot">
    <img src="${val.img}" alt="loading">
    </div>
    </div>`
});

var columns = document.querySelector("#columns");
columns.innerHTML = clutter;