const guessBtn  =document.getElementById("guessBtn");
const inputEle = document.getElementById("myInput");
const textEle=document.getElementById("text");
const percentEle=document.getElementById("percent");
const subBoxEle=document.getElementById("sub_box");
const mainSubBox=document.getElementById("sub_boxes");


subBoxEle.style.display="none";

guessBtn.addEventListener('click',()=>{
    // subBoxEle.style.display="block";

    const value = inputEle.value;
   
 
    fetch(`https://api.nationalize.io/?name=${value}`)
    .then(async(res)=>{
        const data = await res.json();
        // alert(data);
        
        // textEle.textContent=" ";
        // percentEle.textContent=" ";
        let obj = data.country;
        // alert(JSON.stringify(obj));
        //    value = null;
    if(value ===' '){
       
        mainSubBox.innerHTML="No data 404 please input the data!!"
        mainSubBox.style.fontSize="1rem"
     }
     mainSubBox.style.justifyContent='center'
        for(let n of obj){
            // textEle.textContent=
            // percentEle.textContent=
     mainSubBox.style.justifyContent='center'
          

            let div = document.createElement('div');
            let mainDiv = document.createElement('div')
            // mainDiv.style.width = '500px';
            // mainDiv.style.height = '100vh';
            document.body.appendChild(mainDiv);
            mainDiv.appendChild(div);
            mainSubBox.appendChild(mainDiv);

            // div.style.width = '300px';
            // div.style.height = '100px';
            // div.style.border='1px solid black ';
            div.style.display='flex';
            div.style.justifyContent="space-around";
            div.style.width="200px";
            // div.style.height="40px"
            div.style.marginTop="5px";
            // style with box 
            div.style.backgroundColor="#17e6f7"
            div.style.borderRadius='10px'
            div.style.boxShadow='0 3px 3px 0 black'
            


           
            
            // div.style.backgroundColor="brown";
            let Element= document.createElement('p');
            let Element2= document.createElement('p');
            
            div.appendChild(Element);
            div.appendChild(Element2);
            Element.textContent=n['country_id'];
            // let number = Element2.toFixed(2);
            Element2.textContent=n['probability']*100+" %";
            mainDiv.style.display="flex";
            mainDiv.style.flexDirection="column";
         
         }
      
    }).catch((err)=>{
        console.log(err);
    })
})