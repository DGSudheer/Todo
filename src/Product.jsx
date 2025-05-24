//import "./Product.css";

function Product({title, description, price, text}){
    let styles = {backgroundColor: text}
    return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <p>{description}</p>
            <h6>{price}</h6>
        </div>
    );
}

export { Product };