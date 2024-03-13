import { products } from "../core/data";
import { categoryGroup, categoryTemplate } from "../core/selectors"
import { renderProduct } from "./product";

export const createCategory = (categoryName) => {
    const btnTemplateClone = categoryTemplate.content.cloneNode(true);
    btnTemplateClone.querySelector(".cat-btn").innerText = categoryName;
    return btnTemplateClone;
}

export const renderCategory = (categories) => {
    categories.forEach(category => {
        categoryGroup.append(createCategory(category));
    });
}

export const categoryBtnHandler = (event) => {
    if (event.target.classList.contains("cat-btn")) {
        const currentCategory = event.target.innerText;
        const currentCategoryActive = event.target;
        document.querySelector(".cat-btn.active")?.classList.remove("active")
        currentCategoryActive.classList.add("active")
        renderProduct(products.filter(product => product.category === currentCategory || currentCategory === "All"));
    };
}

