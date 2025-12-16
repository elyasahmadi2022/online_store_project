import "./ProductList.css";
import ProductData from "./ratedProductData";

function RatedProductList() {
  return (
    <>
      <div className="grid">
        {ProductData.map((n) => (
          <div className="card">
            <div className="image-wrapper-product">
              <img src={n.img} alt="HydroSync Pro Water Bottle" />
              <button className="favorite-btn">♡</button>
            </div>

            <div className="content">
              <h3>{n.title}</h3>

              {/* <div className="sizes">
                <span>300 ml</span>
                <span className="active">800 ml</span>
                <span>1 Litre</span>
              </div> */}

              <p className="description">{n.desc}</p>

              <div className="botton-row">
                <span className="price">{n.price}</span>

                <button className="add-btn">
                  <span className="cart-icon">🛒</span> افزودن به سبد
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default RatedProductList;
