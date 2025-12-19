import CategoryList from "../component/Home/CategoryList/CategoryListComponent";
import LocalProductsCategoriesList from "../component/Home/localProductsCategories/LocalProductCategoriesList";
import RatedProductList from "../component/Home/RatededProducts/ProductList";
import BookBanner from "../component/Home/Banners/book-banner/BookBanner";
import BookList from "../component/Home/BookCardList/BookList";
import TechknowlogyBanner from "../component/Home/TechknowlogyBanner/TechknowlogyBanner";
import TechknowlogyProductsList from "../component/Home/TechknowlogyProductsList/TechknowlogyProductsListComponent";
function Home() {
  return (
    <div>
      <CategoryList></CategoryList>
      <LocalProductsCategoriesList></LocalProductsCategoriesList>
      <RatedProductList></RatedProductList>
      <BookBanner></BookBanner>
      <BookList></BookList>
      <TechknowlogyBanner></TechknowlogyBanner>
      <TechknowlogyProductsList></TechknowlogyProductsList>
    </div>
  );
};

export default Home;
