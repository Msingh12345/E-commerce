let sortby_btn = document.getElementById('sortby_btn');
let sortby_opt = document.getElementsByClassName('sortby_opt')[0];

sortby_btn.addEventListener('click', () => {
    sortby_opt.classList.toggle('sortby_opt_active');
})


let newest = document.getElementById('newest');
let all_shoes = document.getElementById('all_shoes');
let low = document.getElementById('low')
let high = document.getElementById('high')
let url ="shoes.json";
let main_shoes_bx=document.getElementsByClassName('main_shoes_bx')[0];
let lofer = document.getElementById('lofer');
let boots = document.getElementById('boots')



fetch(url).then((Response=>Response.json())).then((data)=>{
      console.log(data);
      const all_shoes_array = [...data];
      const high_array = [...data]
      const low_array = [...data]
      const newest_array =[...data].splice(0,6);

      data.forEach((elm,i) => {
        const {Img,Name,Category,MRP,Price,Tag,Color}=elm;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}">
                <h5 class="card_title">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price} </h5>
                    <h5>MRP: <del>${MRP}</del></h5>
                </div>
                <div class="colortag">
                    <h6>${Color}</h6>
                    <h6>${Tag}</h6>
                </div>
        `;
main_shoes_bx.appendChild(card);
});

newest.addEventListener('click',()=>{
    main_shoes_bx.innerHTML='';
    sortby_btn.innerHTML = `
    <h5>Sort By : Newest</h5>
    <i class="fa-solid fa-chevron-down"></i>
    `;
    sortby_opt.classList.toggle('sortby_opt_active');

    newest_array.forEach((elm,i) => {
        const {Img,Name,Category,MRP,Price,Tag,Color}=elm;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}">
                <h5 class="card_title">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price} </h5>
                    <h5>MRP: <del>${MRP}</del></h5>
                </div>
                <div class="colortag">
                    <h6>${Color}</h6>
                    <h6>${Tag}</h6>
                </div>
        `;
main_shoes_bx.appendChild(card);
});
})

all_shoes.addEventListener('click',()=>{
    main_shoes_bx.innerHTML='';
    sortby_btn.innerHTML = `
    <h5>Sort By : All shoes</h5>
    <i class="fa-solid fa-chevron-down"></i>
    `;
    sortby_opt.classList.toggle('sortby_opt_active');

    all_shoes_array.forEach((elm,i) => {
        const {Img,Name,Category,MRP,Price,Tag,Color}=elm;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}">
                <h5 class="card_title">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price} </h5>
                    <h5>MRP: <del>${MRP}</del></h5>
                </div>
                <div class="colortag">
                    <h6>${Color}</h6>
                    <h6>${Tag}</h6>
                </div>
        `;
main_shoes_bx.appendChild(card);
});
})
    
low.addEventListener('click',()=>{
    main_shoes_bx.innerHTML='';
    sortby_btn.innerHTML = `
    <h5>Sort By : Low</h5>
    <i class="fa-solid fa-chevron-down"></i>
    `;
    sortby_opt.classList.toggle('sortby_opt_active');
    
    low_array.sort(({Price : a} , {Price : b}) => a-b);

    low_array.forEach((elm,i) => {
        const {Img,Name,Category,MRP,Price,Tag,Color}=elm;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}">
                <h5 class="card_title">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price} </h5>
                    <h5>MRP: <del>${MRP}</del></h5>
                </div>
                <div class="colortag">
                    <h6>${Color}</h6>
                    <h6>${Tag}</h6>
                </div>
        `;
main_shoes_bx.appendChild(card);
});
})

high.addEventListener('click',()=>{
    main_shoes_bx.innerHTML='';
    sortby_btn.innerHTML = `
    <h5>Sort By : High</h5>
    <i class="fa-solid fa-chevron-down"></i>
    `;
    sortby_opt.classList.toggle('sortby_opt_active');
   
    high_array.sort(({Price : a} , {Price : b})=> b-a);

    high_array.forEach((elm,i) => {
        const {Img,Name,Category,MRP,Price,Tag,Color}=elm;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}">
                <h5 class="card_title">${Name}</h5>
                <p>${Category} Shoes</p>
                <div class="price">
                    <h5>Rs. ${Price} </h5>
                    <h5>MRP: <del>${MRP}</del></h5>
                </div>
                <div class="colortag">
                    <h6>${Color}</h6>
                    <h6>${Tag}</h6>
                </div>
        `;
main_shoes_bx.appendChild(card);
});
})


let boot_array =all_shoes_array.filter((el)=>{
    return el.Type ==='Boots';
})

let all_main_filter_array = [];

// let boots = document.getElementById(boots);
boots.addEventListener('click',()=>{
    if(boots.title==="boots_filter_on"){
        main_shoes_bx.innerHTML='';
        boots.classList.toggle('i_active');
        boots.classList.toggle('fa-toggle-off')
        boots.classList.toggle('fa-toggle-on')
        title = "boots_filte_off";
        all_main_filter_array=all_main_filter_array.concat(boot_array);
        all_main_filter_array.forEach((elm,i) => {
            const {Img,Name,Category,MRP,Price,Tag,Color}=elm;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                    <h5 class="card_title">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs. ${Price} </h5>
                        <h5>MRP: <del>${MRP}</del></h5>
                    </div>
                    <div class="colortag">
                        <h6>${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
            `;
    main_shoes_bx.appendChild(card);
    });
    }else{
           main_shoes_bx.innerHTML=''
           boots.classList.toggle('i_active');
           boots.classList.toggle('fa-toggle-off')
           boots.classList.toggle('fa-toggle-on')
           title = "boots_filte_on";
           all_main_filter_array = all_main_filter_array.filter((el)=>{
               return boot_array.indexOf(el)<0;
           })
           all_main_filter_array.forEach((elm,i) => {
            const {Img,Name,Category,MRP,Price,Tag,Color}=elm;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                    <h5 class="card_title">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs. ${Price} </h5>
                        <h5>MRP: <del>${MRP}</del></h5>
                    </div>
                    <div class="colortag">
                        <h6>${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
            `;
    main_shoes_bx.appendChild(card);
    });

    }
   
})


let lofer_array =all_shoes_array.filter((el)=>{
    return el.Type ==='Loafer';
})


// let lofer = document.getElementById(lofer);
lofer.addEventListener('click',()=>{
    if(lofer.title==="lofer_filter_on"){
        main_shoes_bx.innerHTML='';
        lofer.classList.toggle('i_active');
        lofer.classList.toggle('fa-toggle-off')
        lofer.classList.toggle('fa-toggle-on')
        title = "lofer_filte_off";
        all_main_filter_array=all_main_filter_array.concat(lofer_array);
        all_main_filter_array.forEach((elm,i) => {
            const {Img,Name,Category,MRP,Price,Tag,Color}=elm;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                    <h5 class="card_title">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs. ${Price} </h5>
                        <h5>MRP: <del>${MRP}</del></h5>
                    </div>
                    <div class="colortag">
                        <h6>${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
            `;
    main_shoes_bx.appendChild(card);
    });
    }else{
           main_shoes_bx.innerHTML=''
           lofer.classList.toggle('i_active');
           lofer.classList.toggle('fa-toggle-off')
           lofer.classList.toggle('fa-toggle-on')
           title = "lofer_filte_on";
           all_main_filter_array = all_main_filter_array.filter((el)=>{
            return lofer_array.indexOf(el)<0;
           })
           all_main_filter_array.forEach((elm,i) => {
            const {Img,Name,Category,MRP,Price,Tag,Color}=elm;
            let card = document.createElement('a');
            card.classList.add('card');
            card.innerHTML = `
            <img src="${Img}" alt="${Name}">
                    <h5 class="card_title">${Name}</h5>
                    <p>${Category} Shoes</p>
                    <div class="price">
                        <h5>Rs. ${Price} </h5>
                        <h5>MRP: <del>${MRP}</del></h5>
                    </div>
                    <div class="colortag">
                        <h6>${Color}</h6>
                        <h6>${Tag}</h6>
                    </div>
            `;
    main_shoes_bx.appendChild(card);
    });

    }
    console.log('sdfghjkl;dfgh')
})




})