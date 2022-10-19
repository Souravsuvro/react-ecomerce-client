import ProductImage from './Product/ProductImage';
import AddtoCartButton from './Product/AddtoCartButton';
import FavoriteIcon from './Product/FavoriteIcon';
import RatingIcon from './Product/RatingIcon';
import Speaker from './Product/Images/speaker.png';
import SaleTag from './Product/Saletag';
import Catergories from '../pages/Categories';


const ProductBox = () => {
  
    return <>
    <SaleTag />
    <FavoriteIcon />
    <ProductImage imageSource={Speaker}/>
    <Catergories/>
    <h1>Product Name</h1>
    <RatingIcon />
    <AddtoCartButton />
    </>
  }


  export default ProductBox