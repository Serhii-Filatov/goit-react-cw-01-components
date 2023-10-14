import { Card } from './Card';

const imageUrl =
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
const productsData = [
  {
    id: '1',
    title: 'Tacos With Lime XXL',
    price: '10.99',
    discount: 30,
    imageUrl
  },
  {
    id: '2',
    title: 'Tacos With Lime XL',
    price: '6.99',
    discount: null,
    imageUrl
  },
  {
    id: '3',
    title: 'Tacos With Lime M',
    price: '5.85',
    discount: 15,
    imageUrl
  },
];

export const App = () => {
  return (
    <section>
      <h1>Hello FSON89</h1>
                        {/* тут диструктуризацию */}
      {productsData.map(product => {
        return <Product key={product.id} title={product.title} discount={product.discount} price={product.price}/>
      })}
      <Card />

    </section>
  );
};



const Product = ({title, price, discount}) => {
  return (
    <div>
      <img src={imageUrl} alt="Tacos With Lime" width="640" />
      <h2>{title}</h2>
      {/* {discount && <h3>Discount: {discount}$</h3>} */}
      {discount ? <h3>Discount: {discount}$</h3> : <p>Sorry, not discount</p>}
      <p>Price: {price}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
};
