import { cartBtnRemoveHandler } from "../app/cat";
import { categoryBtnHandler } from "../app/category";
import { shopCartBtnHandler } from "../app/product";
import { categoryGroup, productGroup, shopCartGroup } from "./selectors";

const listener = () => {
    categoryGroup.addEventListener("click", categoryBtnHandler);
    productGroup.addEventListener("click", shopCartBtnHandler);
    shopCartGroup.addEventListener("click",cartBtnRemoveHandler);
}

export default listener;