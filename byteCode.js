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

