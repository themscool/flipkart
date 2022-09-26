import Product from './model/product-schema.js';
import {products} from './constants/data.js';


const DefaultData = async () =>{
    try {
    await Product.deleteMany({});
      await Product.insertMany(products);
        console.log(`Products inserted successfully on database`);
    } catch (error) {
        console.log(`Error`, error.message);
    }
}

export default DefaultData;

