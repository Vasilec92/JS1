const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

//1 Получить все товары, у которых есть фотографии, можете использовать метод filter

const productWithPhoto = products.filter(
  (product) => "photos" in product && product.photos.length > 0
);
console.log(productWithPhoto);

//2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort

products.sort((a, b) => a.price - b.price);

console.log(products);
