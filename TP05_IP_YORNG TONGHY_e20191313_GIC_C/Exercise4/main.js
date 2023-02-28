const selectEle = document.getElementById("mySelect");
const textEle = document.getElementById("text");
const list = document.getElementById('list');
const loadingSpinner = document.getElementById("loading-spinner");
textEle.hidden=true;

//loading spinner
function showLoadingSpinner() {
    loadingSpinner.style.display = "block";
  }
  
  function hideLoadingSpinner() {
    loadingSpinner.style.display = "none";
  }
  hideLoadingSpinner();
  list.hidden=true;
selectEle.addEventListener('change',()=>{
    showLoadingSpinner();
    list.hidden=false;
    
console.log(selectEle.value);
const api = `http://universities.hipolabs.com/search?country=${selectEle.value}`;
fetch(api)
.then(async(res)=>{
    const data =await res.json();
   
  for(let i of data){
        console.log(i.domains);
        textEle.innerHTML+=`
        <div class="university">
            <span>${i.name}</span>
            <br>
            <span>{${i.country} - ${i.alpha_two_code}}</span>
            <br>
            <div class="link">
                <span>🌎</span>
                <a href="${i.web_pages[0]}">
                    ${i.web_pages[0]}
                </a>
            </div>
        </div>
    
    `;
        
  } 
  console.log(data[0].domains);
}).catch ((err)=>{

    console.log(err);
    hideLoadingSpinner();
    listing.hidden = true;
}).finally(()=>{
    hideLoadingSpinner()
})
// hideLoadingSpinner();
})

// document.querySelector('.outputBox').style.border="1px solid black";