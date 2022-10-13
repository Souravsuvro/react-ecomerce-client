import ProductImage from './Product/ProductImage';
import AddtoCartButton from './Product/AddtoCartButton';
import FavoriteIcon from './Product/FavoriteIcon';
import RatingIcon from './Product/RatingIcon';
import Speaker from './Product/Images/speaker.png';


import SaleTag from './Product/Saletag';
const ProductBox = () => {
  
    return <>
    <ProductImage imageSource={Speaker}/>
    <FavoriteIcon />
    <SaleTag />
    <h1>Product Name</h1>
    <RatingIcon />
    <AddtoCartButton />
    </>
  }


  export default ProductBox