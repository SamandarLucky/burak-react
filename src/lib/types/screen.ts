import { Member } from "./member";
import { Product } from "./product";

/* REACT APP STATE */

export interface AppRootState {
    homePage: HomePageState;
    // productsPage: ProductsPageState;

}

/* HOMEPAGE */
export interface HomePageState { // barcha malumotlarni o'zida jamlidigan interface
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
}

/* PRODUCTS PAGE*/


/* ORDERS PAGE */