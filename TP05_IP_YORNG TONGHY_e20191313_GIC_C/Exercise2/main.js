const guessEle = document.getElementById("guess");
const subBoxEle= document.getElementById("sub-box");
const subBoxEle2= document.getElementById("sub-box2");
const subBoxEle3= document.getElementById("sub-box3");
const inputEle= document.getElementById("myInput");
// const text = document.getElementById('text');
// text.innerHTML= inputEle.value;
const boxEle=document.getElementById("subBox");
boxEle.hidden=true;



guessEle.addEventListener('click',()=>{
    const n = inputEle.value;
    subBoxEle.innerHTML=" ";
    subBoxEle2.innerHTML=" ";
    subBoxEle3.innerHTML=" ";
    boxEle.hidden=false;
    
    
    fetch(`https://api.genderize.io?name=${n}`)
    .then(async(res)=>{
        const data = await res.json();
       
        subBoxEle.innerHTML="gender:"+data['gender'];
        subBoxEle2.innerHTML="probability: "+data['probability']*100+" %";
        subBoxEle3.innerHTML="name: "+data['name'];
        // console.log(data);
       
    }).catch((err)=>{
        console.log(err);
    })
 
})