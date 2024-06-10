import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    img: "/images/vanilla.png",
    name: "Vanilla Puff",
    price: 25000,
    briefDesc: "This classic favorite made from imported vanilla beans, rich custard, and fresh whipped cream. Discover why it’s our signature flavor!",
    description: "Our Vanilla Puff is a delightful pastry that combines a light, airy texture with the rich, comforting taste of vanilla. Each puff is crafted from layers of delicate, flaky dough that are baked to a golden perfection, creating a crisp outer shell that gives way to a soft, melt-in-your-mouth center. Infused with natural vanilla flavor and lightly dusted with powdered sugar, these puffs are perfect for any occasion, whether as a sweet breakfast treat, a midday snack, or a sophisticated dessert. Enjoy the timeless elegance and irresistible taste of our Vanilla Puffs, made with high-quality ingredients and a passion for exceptional baking.",
  },
  {
    id: 2,
    img: "/images/choco-1.png",
    name: "Chocolate Puff",
    price: 35000,
    briefDesc: "Experience pure chocolate bliss with our Chocolate Puff, a pastry crafted for true chocolate aficionados.",
    description: "Experience pure chocolate bliss with our Chocolate Puff, a pastry crafted for true chocolate aficionados. This exquisite treat features layers of light, flaky dough that are baked to golden perfection and filled with a rich, velvety chocolate center. Each puff is then generously coated with a smooth chocolate glaze, adding an extra layer of indulgence. Whether you're enjoying it with your morning coffee, as a midday snack, or as a decadent dessert, our Chocolate Puff promises a delightful and luxurious experience in every bite. Savor the perfect harmony of crisp pastry and creamy chocolate in this irresistible confection.",
  },
  {
    id: 3,
    img: "/images/oreo.png",
    name: "Oreo Puff",
    price: 30000,
    briefDesc: "A delectable pastry that marries the beloved taste of Oreo cookies with a light, airy puff.",
    description: "Introducing our Oreo Puff, a delectable pastry that marries the beloved taste of Oreo cookies with a light, airy puff. Each puff is crafted from layers of flaky dough, baked to a golden perfection, and filled with a creamy, Oreo-infused center. The outside is adorned with a dusting of crushed Oreo pieces, adding a delightful crunch and an extra burst of that iconic cookies-and-cream flavor. Perfect for Oreo lovers and pastry enthusiasts alike, our Oreo Puff is an irresistible treat for any time of day. Enjoy it as a sweet breakfast option, an afternoon snack, or a delicious dessert.",
  },
]

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}
})

export default productsSlice.reducer