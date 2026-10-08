const laptops = [
  {
    id: 1,
    featured: true,
    name: "Laptop Surface Go 2 US",
    brand: "Microsoft Surface",
    cpu: "Core i5-1135G7",
    ram: "8GB",
    ssd: "256GB",
    screen: "12.4 inch PixelSense",
    color: "Sandstone",
    price: 11000000,
    image: "/images/surface/go2/1.jpg",
    images: [
      "/images/surface/go2/1.jpg",
      "/images/surface/go2/2.jpg",
      "/images/surface/go2/3.jpg",
      "/images/surface/go2/4.jpg",
    ],
  },

  {
  id: 2,
  featured: true,
  name: "Surface Laptop Go",
  brand: "Microsoft Surface",
  cpu: "Intel Core i5 Gen 10",
  ram: "8GB",
  ssd: "256GB",
  screen: "12.4 inch PixelSense cảm ứng",
  color: "Ice Blue",
  price: 9200000,

  image: "/images/surface/laptop-go/blu1.jpg",

  images: [
    "/images/surface/laptop-go/blu1.jpg",
    "/images/surface/laptop-go/blu2.jpg",
    "/images/surface/laptop-go/blu3.jpg",
    "/images/surface/laptop-go/blu4.jpg",
  ],
},

{
  id: 3,
  featured: true,
  name: "MacBook Pro M1 13”",
  brand: "Apple MacBook",
  cpu: "Apple M1",
  ram: "8GB",
  ssd: "256GB",
  screen: "13.3 inch Retina",
  color: "Space Gray",
  price: 13000000,

  image: "/images/macbook/pro-m1/m1-1.jpg",

  images: [
    "/images/macbook/pro-m1/m1-1.jpg",
    "/images/macbook/pro-m1/m1-2.jpg",
    "/images/macbook/pro-m1/m1-3.jpg",
    "/images/macbook/pro-m1/m1-4.jpg",
  ],
},

{
  id: 4,
  featured: true,
  name: "MacBook Air M1 13”",
  brand: "Apple MacBook",
  cpu: "Apple M1",
  ram: "8GB",
  ssd: "256GB",
  screen: "13.3 inch Retina",
  color: "Gold",
  price: 12000000,

  image: "/images/macbook/air-m1/air1.jpg",

  images: [
    "/images/macbook/air-m1/air1.jpg",
    "/images/macbook/air-m1/air2.jpg",
    "/images/macbook/air-m1/air3.jpg",
    "/images/macbook/air-m1/air4.jpg",
  ],
},

{
    id: 5,
    category: "surface",
    featured: false,

    brand: "Microsoft Surface",

    name: "Surface Laptop 3 15”",

    cpu: "Intel Core i5",
    ram: "8GB",
    ssd: "128GB",

    price: 8300000,

    image: "/images/surface/laptop3/bac1.jpg",

    images: [
        "/images/surface/laptop3/bac1.jpg",
        "/images/surface/laptop3/bac2.jpg",
        "/images/surface/laptop3/bac3.jpg",
        "/images/surface/laptop3/bac4.jpg"
    ]
},

{
    id: 6,
    category: "dell",
    featured: false,
    brand: "Dell",
    name: "Dell Latitude 5520",
    cpu: "Intel Core i5-1145G7",
    ram: "8GB",
    ssd: "256GB",
    price: 8000000,

    image: "/images/Dell/latitude5520/1.jpg",

    images: [
        "/images/Dell/latitude5520/1.jpg",
        "/images/Dell/latitude5520/2.jpg",
        "/images/Dell/latitude5520/3.jpg",
        "/images/Dell/latitude5520/4.jpg"
    ]
},
{
    id: 7,
    category: "dell",
    featured: true,
    brand: "Dell",
    name: "Dell Latitude 7320 LTE",
    cpu: "Intel Core i7-1185G7",
    ram: "32GB",
    ssd: "512GB",
    price: 12000000,

    image: "/images/Dell/7320/1.jpg",

    images: [
        "/images/Dell/7320/1.jpg",
        "/images/Dell/7320/2.jpg",
        "/images/Dell/7320/3.jpg",
        "/images/Dell/7320/4.jpg"
    ]
},
 {
    id: 8,
    category: "dell",
    featured: true,
    brand: "Dell",
    name: "Dell Latitude 9420 2-in-1",
    cpu: "Intel Core i5-1145G7",
    ram: "16GB",
    ssd: "256GB",
    price: 10000000,

    image: "/images/Dell/9420/1.jpg",

    images: [
        "/images/Dell/9420/1.jpg",
        "/images/Dell/9420/2.jpg",
        "/images/Dell/9420/3.jpg",
        "/images/Dell/9420/4.jpg"
    ]
},
{
    id: 9,
    category: "surface",
    featured: false,
    brand: "Microsoft Surface",
    name: "Surface Pro 7 Plus LTE",
    cpu: "Intel Core i5 Gen 11",
    ram: "8GB",
    ssd: "256GB",
    price: 8300000,

    image: "/images/surface/pro7plus/1.jpg",

    images: [
        "/images/surface/pro7plus/1.jpg",
        "/images/surface/pro7plus/2.jpg",
        "/images/surface/pro7plus/3.jpg",
        "/images/surface/pro7plus/4.jpg"
    ]
},
{
    id: 10,
    category: "surface",
    featured: false,
    brand: "Microsoft Surface",
    name: "Surface Laptop 3 15” i7",
    cpu: "Intel Core i7-1065G7",
    ram: "16GB",
    ssd: "512GB",
    price: 11500000,
    image: "/images/surface/laptop3-i7/1.jpg",
    images: [
        "/images/surface/laptop3-i7/1.jpg",
        "/images/surface/laptop3-i7/2.jpg",
        "/images/surface/laptop3-i7/3.jpg",
        "/images/surface/laptop3-i7/4.jpg",
    ]
},
{
    id: 11,
    category: "surface",
    featured: false,
    brand: "Microsoft Surface",
    name: "Surface Laptop 6 US",
    cpu: "Intel Core Ultra 5-135H",
    ram: "8GB",
    ssd: "256GB",
    price: 15000000,
    image: "/images/surface/laptop6-us/1.jpg",
    images: [
        "/images/surface/laptop6-us/1.jpg",
        "/images/surface/laptop6-us/2.jpg",
        "/images/surface/laptop6-us/3.jpg",
        "/images/surface/laptop6-us/4.jpg"
    ]
},
{
    id: 12,
    category: "surface",
    featured: false,
    brand: "Microsoft Surface",
    name: "Surface Laptop 3 US i7",
    cpu: "Intel Core i7-1065G7",
    ram: "16GB",
    ssd: "256GB",
    price: 9300000,
    image: "/images/surface/laptop3-us/1.jpg",
    images: [
        "/images/surface/laptop3-us/1.jpg",
        "/images/surface/laptop3-us/2.jpg",
        "/images/surface/laptop3-us/3.jpg",
        "/images/surface/laptop3-us/4.jpg"
    ]
},
{
    id: 13,
    category: "surface",
    featured: false,
    brand: "Microsoft Surface",
    name: "Surface Laptop 4 i7 Matte Black",
    cpu: "Intel Core i7-1185G7",
    ram: "16GB",
    ssd: "256GB",
    price: 10000000,
    image: "/images/surface/laptop4/1.jpg",
    images: [
        "/images/surface/laptop4/1.jpg",
        "/images/surface/laptop4/2.jpg",
        "/images/surface/laptop4/3.jpg",
        "/images/surface/laptop4/4.jpg"
    ]
},
{
    id: 14,
    category: "surface",
    featured: true,
    brand: "Microsoft Surface",
    name: "Surface Laptop Studio i5 3-in-1",
    cpu: "Intel Core i5-11300H",
    ram: "16GB",
    ssd: "256GB",
    price: 15300000,
    image: "/images/surface/laptop-studio/1.jpg",
    images: [
        "/images/surface/laptop-studio/1.jpg",
        "/images/surface/laptop-studio/2.jpg",
        "/images/surface/laptop-studio/3.jpg",
        "/images/surface/laptop-studio/4.jpg"
    ]
},
{
    id: 15,
    category: "surface",
    featured: true,
    brand: "Microsoft Surface",
    name: "Surface Laptop 2 US Burgundy",
    cpu: "Intel Core i5-8250U",
    ram: "8GB",
    ssd: "256GB",
    price: 6500000,
    image: "/images/surface/laptop2-us-burgundy/1.jpg",
    images: [
        "/images/surface/laptop2-us-burgundy/1.jpg",
        "/images/surface/laptop2-us-burgundy/2.jpg",
        "/images/surface/laptop2-us-burgundy/3.jpg",
        "/images/surface/laptop2-us-burgundy/4.jpg"
    ]
},
{
    id: 16,
    category: "macbook",
    featured: false,
    brand: "Apple MacBook",
    name: "MacBook Air 2019",
    cpu: "Intel Core i5",
    ram: "8GB",
    ssd: "256GB",
    price: 7000000,
    image: "/images/macbook/air2019/1.jpg",
    images: [
        "/images/macbook/air2019/1.jpg",
        "/images/macbook/air2019/2.jpg",
        "/images/macbook/air2019/3.jpg",
        "/images/macbook/air2019/4.jpg"
    ]
},
{
    id: 17,
    category: "macbook",
    featured: false,
    brand: "Apple MacBook",
    name: "MacBook Pro 2020 13”",
    cpu: "Intel Core i5",
    ram: "8GB",
    ssd: "512GB",
    price: 10000000,
    image: "/images/macbook/pro2020/1.jpg",
    images: [
        "/images/macbook/pro2020/1.jpg",
        "/images/macbook/pro2020/2.jpg",
        "/images/macbook/pro2020/3.jpg",
        "/images/macbook/pro2020/4.jpg"
    ]
},
{
    id: 18,
    category: "macbook",
    featured: false,
    brand: "Apple MacBook",
    name: "MacBook Pro 2019 16”",
    cpu: "Intel Core i9",
    ram: "16GB",
    ssd: "1TB",
    price: 12000000,
    image: "/images/macbook/pro2019-16/1.jpg",
    images: [
        "/images/macbook/pro2019-16/1.jpg",
        "/images/macbook/pro2019-16/2.jpg",
        "/images/macbook/pro2019-16/3.jpg",
        "/images/macbook/pro2019-16/4.jpg"
    ]
},
{
    id: 19,
    category: "macbook",
    featured: false,
    brand: "Apple MacBook",
    name: "MacBook Air M1 13” Rose Gold",
    cpu: "Apple M1",
    ram: "8GB",
    ssd: "256GB",
    price: 11000000,
    image: "/images/macbook/air-m1-rose/1.jpg",
    images: [
        "/images/macbook/air-m1-rose/1.jpg",
        "/images/macbook/air-m1-rose/2.jpg",
        "/images/macbook/air-m1-rose/3.jpg",
        "/images/macbook/air-m1-rose/4.jpg"
    ]
},
{
    id: 20,
    category: "macbook",
    featured: false,
    brand: "Apple MacBook",
    name: "MacBook Pro 2019 15” US",
    cpu: "Intel Core i7",
    ram: "16GB",
    ssd: "256GB",
    price: 9000000,
    image: "/images/macbook/pro2019-15-us/1.jpg",
    images: [
        "/images/macbook/pro2019-15-us/1.jpg",
        "/images/macbook/pro2019-15-us/2.jpg",
        "/images/macbook/pro2019-15-us/3.jpg",
        "/images/macbook/pro2019-15-us/4.jpg"
    ]
},
{
    id: 21,
    category: "macbook",
    featured: false,
    brand: "Apple MacBook",
    name: "MacBook Pro 2020 13”",
    cpu: "Intel Core i5",
    ram: "8GB",
    ssd: "256GB",
    price: 9000000,
    image: "/images/macbook/pro2020-256/1.jpg",
    images: [
        "/images/macbook/pro2020-256/1.jpg",
        "/images/macbook/pro2020-256/2.jpg",
        "/images/macbook/pro2020-256/3.jpg",
        "/images/macbook/pro2020-256/4.jpg"
    ]
},
{
    id: 22,
    category: "dell",
    featured: false,
    brand: "Dell",
    name: "Dell Latitude 3330 2-in-1",
    cpu: "Intel Core i5-1155G7",
    ram: "8GB",
    ssd: "256GB",
    price: 8500000,
    image: "/images/Dell/3330/1.jpg",
    images: [
        "/images/Dell/3330/1.jpg",
        "/images/Dell/3330/2.jpg",
        "/images/Dell/3330/3.jpg",
        "/images/Dell/3330/4.jpg"
    ]
},
];

export default laptops;