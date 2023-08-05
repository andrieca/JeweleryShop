class Helpers{
    constructor() {
    }

    renderJewelery(data) {
        // показываем данные в HTML
                    console.log("data", data);
                    data.map((elem) => {
                
                      let productsJiwe = `<div class="product-card">

                      <img class="card-img-jiw" src="${elem.image}" alt="Card image" onclick="window.location.href='/productJewelery.html'" >
                      
                      <div class="card-body">
                      <h4 class="card-title">${elem.title}</h4>
                      <a href="/cart" class="btn-default">Добавить в корзину</a> 
                      </div>
                      </div>
                      `;
                      document.querySelector("#content").innerHTML += productsJiwe;
                    })
                }
    renderCart(data) {
        // данные одного товара
                    
                 
                    let tovar = document.getElementById("productJ");
                    console.log("post", data);
                        tovar.innerHTML = `<div class="product-cardJ">
                        <img class="card-img-jiwJ" src="${data.image}" alt="Card image">
                        <div class="card-bodyJ">
                        <h4 class="card-titleJ">${data.title}</h4>
                        <a href="#" class="btn-defaultJ">Добавить в корзину</a> 
                        </div>
                        </div>`;
                }
                    
                    
        }
    

      

      // onclick="window.location.href='/productJewelery.html'

//       let clickJ = document.querySelector(".product-card");
// // function tovarConsole(event){
// //     console.log(event.target);
// // }
//         clickJ.addEventListener("click", function(e){
//           console.log(e);
        // });