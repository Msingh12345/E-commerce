let pop_art_left = document.getElementById("pop_art_left")
let pop_art_right = document.getElementById("pop_art_right")
let item = document.getElementsByClassName("item")[0];

pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 300;
})
pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 300;
})
let pop_art_left1 = document.getElementById("pop_art_left1")
let pop_art_right1 = document.getElementById("pop_art_right1")
let item1 = document.getElementsByClassName("item")[1];

pop_art_left1.addEventListener('click', () => {
    item1.scrollLeft -= 300;
})
pop_art_right1.addEventListener('click', () => {
    item1.scrollLeft += 300;
})




function myFunction() {
    let menu_bar=document.getElementById('menu_bar')
    let sec=document.getElementById('sec')
    menu_bar.style.display = "block"
    sec.style.opacity='0.3'
}


function xmarkfunction(){
    let menu_bar=document.getElementById('menu_bar')
    let sec=document.getElementById('sec')
    menu_bar.style.display = "none"
    sec.style.opacity='1'
}

let sec=document.getElementById('sec')
sec.addEventListener('click',()=>{
    menu_bar.style.display = "none"
    sec.style.opacity='1'
    // console.log("qqqqqqqqqqqqqqq")
})









// let url="json.json"
// let item11=document.getElementsByClassName('item1')
// console.log("fghjkl")
// fetch(url).then((Response=>Response.json())).then((data)=>{
//     const all_list_data=[...data];
//     console.log(all_list_data)

//     data.forEach((el,i) => {
//          const {Img,Name, MRP,Price,id}=el;
//          let card=document.createElement('a')
//          card.classList.add('card')
//          card.innerHTML=`
//          <img src="${Img}" alt="">
//          <h5 class="card_title">${Name}</h5>
//          <div class="price">
//             <div class="mrptag"><h5>Rs ${Price}</h5></div>
//              <h5>MRP: <del>${MRP}</del></h5>
//          </div>`;
//         item11.appendChild(card)
        
//     });
// })
         