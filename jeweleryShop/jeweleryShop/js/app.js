console.log("App is ready...");
let jewelery = new APIRequests();
let helpers  = new Helpers();

jewelery
    .getJewelery()
    .then(data => {
        helpers.renderJewelery(data);
    });

jewelery
    .getProduct(6)
    .then(data => {
        helpers.renderCart(data);
       

        
        // let clickJ = document.querySelector(".product-card")
        // clickJ.addEventListener("click", helpers.renderCardInformation(data, ), false);
    });


// document
//     .getElementById("outside")
//     .addEventListener("click", helpers.renderCart, false);