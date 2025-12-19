import categoriesData from "./CategroyData";
import "./CategoryLIstComponent.css";

function CategoryList() {
  return (
    <div className="categorylistcontainer">
      {categoriesData.map((item) => {
        return (
          <div className="categorycard">
            <img src={item.img} alt="icon" />
            <div className="text">
              <h2>{item.title}</h2>
              <p> {item.description}.</p>
              <button>بیشتر</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CategoryList;
