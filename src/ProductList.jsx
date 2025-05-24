import { Product } from "./Product.jsx";

function ProductList() {
    return(
        <>
            <Product title="Macbook" description="Finest of all time" price="75000" text="black"/>
            <Product title="iphone" description="Costliest of all time" price="80000" text="red"/>
            <Product title="iglass" description="Latest of the time" price="50000" text="blue"/>
        </>
    );
}

export { ProductList };