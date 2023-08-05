// let jewelery = new APIRequests();
// let helpers  = new Helpers();

// jewelery
//     .getProduct(5)
//     .then(data => {
//         helpers.renderCart(data);
//     });

// let clickJ = document.querySelector(".product-card");
// function tovarConsole(event){
//     console.log(event.target);
// }
//         clickJ.addEventListener("click", tovarConsole);


// let tovar = document.getElementById("productJ");
// fetch(`https://fakestoreapi.com/products/6`)
//  .then(responce => responce.json())
//  .then(post => {
//     console.log("post", post);
//     tovar.innerHTML = `<div class="product-cardJ">
//     <img class="card-img-jiwJ" src="${post.image}" alt="Card image">
//     <div class="card-bodyJ">
//     <h4 class="card-titleJ">${post.title}</h4>
//     <a href="#" class="btn-defaultJ">Добавить в корзину</a> 
//     </div>
//     </div>`;
//  })


// let tovar = document.getElementById("productJ");

// fetch(`https://fakestoreapi.com/products/6`)
//  .then(response => response.json())
//  .then(post => {
//     console.log("post", post);
//     tovar.innerHTML = `<div class="product-cardJ">
//     <img class="card-img-jiwJ" src="${post.image}" alt="Card image">
//     <div class="card-bodyJ">
//     <h4 class="card-titleJ">${post.title}</h4>
//     <a href="#" class="btn-defaultJ">Добавить в корзину</a> 
//     </div>
//     </div>`;
//  })




//  .catch(error => console.error("Error fetching data:", error));

// function dataProtuct(){
//    console.log("e", event.target);
// }

// function productText(dataProtuct){
//    let p = document.querySelector(dataProtuct());
//    console.log(p.innerText);
// }

// renderCardInformation(data, selectorParentBtn, selectorBtn, selectorElem, selectorHideElement){
//    const cards = document.querySelectorAll(selectorParentBtn),
//        element = document.querySelector(selectorElem),
//        btn = document.querySelectorAll(selectorBtn),
//        hideBlock = document.querySelector(selectorHideElement);

//    cards.forEach(items => {
//        items.addEventListener('click', (e) => {
//            if (e.target && e.target.classList.contains('btn-jewelery')) {
//                btn.forEach((item, i) => {
//                    console.log("e", e.target);
//                    if (e.target == item) {
//                        hideBlock.style.display = 'none';
//                        element.style.display = 'flex';
//                        element.innerHTML = `
//                        <div class="descr__img">
//                            <img src="./images/prod.png" alt="">
//                        </div>
//                        <div class="descr__right">
//                        <h2 class="descr__right-title">${data[i].title}</h2>
//                        <p class="descr__right-text">${data[i].description}</p>
//                        <div class="descr__right-total">
//                            <div class="price">Price: <span>${data[i].price}</span></div>
//                            <button class="btn-jewelery">Добавить в корзину</button>
//                        </div>
//                        </div>
//                        <button class="go-back">&larr;</button>
//                        `;
//                    }
//                });
//            }
//        });
//    });

// //    element.addEventListener('click', (e) => {
// //        if (e.target && e.target.classList.contains('go-back')) {
// //            hideBlock.style.display = 'block';
// //            element.style.display = 'none';
// //        }
// //    });
// }
