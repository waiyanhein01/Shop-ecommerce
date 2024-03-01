import initialRender from "./core/initialRender";
import listener from "./core/listener";


class Shop {
    init() {
        initialRender();
        listener();
        // console.log("Shop app start");
    }
}

export default Shop;