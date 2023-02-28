const buttonEle = document.getElementById("btn1");
const activityNameEle=document.getElementById("activity-name");
const linkEle=document.getElementById("link");
const typeEle=document.getElementById("type");
const participateEle=document.getElementById("participate");
const priceEle=document.getElementById("price");

activityNameEle.innerHTML="";
linkEle.innerHTML="";
typeEle.innerHTML="";
participateEle.innerHTML="";
priceEle.innerHTML="";



buttonEle.addEventListener('click',()=>{
    fetch("https://www.boredapi.com/api/activity")
    .then(async(res)=>{
        const data =await res.json();
        activityNameEle.innerHTML=data['activity'];
        typeEle.innerHTML="🏷️ type: "+data['type'];
        participateEle.innerHTML="👥 Participate: "+data['participants'];
        priceEle.innerHTML="💰 Price: "+data['price'];
        linkEle.innerHTML="🔗 link: "+data['link'];

    }).catch ((err)=>{
        console.log(err);
    }).finally(()=>{
        console.log("yes");
    })
})