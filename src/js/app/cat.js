import Swal from "sweetalert2";
import { cartItemCount, cartTotal, countItem, shopCartTemplate } from "../core/selectors";

export const createShopCart = (product, quantity) => {
    const cartTemplateClone = shopCartTemplate.content.cloneNode(true);
    cartTemplateClone.querySelector(".shop-cart-img").src = product.image;
    cartTemplateClone.querySelector(".shop-cart-title").innerText = product.title;
    cartTemplateClone.querySelector(".shop-cart-price").innerText = product.price;
    cartTemplateClone.querySelector(".shop-cart-quantity").innerText = quantity;
    return cartTemplateClone;
}

export const cartCountShopItem = () => {
    const shopCart = document.querySelectorAll(".shop-cart");
    return shopCart.length;
}

export const updateCountShop = () => {
    const currentCountTotal = cartCountShopItem();
    cartItemCount.innerText = currentCountTotal;
    countItem.innerText = currentCountTotal; 
}

export const cartNetTotal = () => {
    const total = document.querySelectorAll(".shop-cart-price");
    const netTotal= [...total].reduce((pv,cv) => pv + parseFloat(cv.innerText), 0);
    return netTotal;
}

export const updateCartNetTotal = () => {
    const currentTotal = cartNetTotal().toFixed(2);
    cartTotal.innerText = currentTotal;
}

export const cartBtnRemoveHandler = (event) => {
    if(event.target.classList.contains("cart-btn-remove")) {
        const currentCart = event.target.closest(".shop-cart")
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#111827",
            cancelButtonColor: "#0284c7",
            confirmButtonText: "Delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              currentCart.remove();
              updateCartNetTotal();
              updateCountShop();

              const Toast = Swal.mixin({
                toast: true,
                position: "bottom-start",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "remove in successfully"
              });
            }
          });
    }
}