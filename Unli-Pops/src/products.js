const data = [
  {
    catogeries: "phone",
    id: "1",
    name: "Coca-Cola 237ml",
    rating: "4.5",
    discription:
      "Refreshing Coca-Cola in a convenient 237ml can. Perfect for on-the-go refreshment.",
    price: "₱10",

    image: [
      "https://i5.walmartimages.com/asr/55302035-ddde-4f5a-8171-ef0cba5e6877.ff7ec9bcc9eb1272577b040b212ee0e0.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    ],
    review: ["Always my favorite go-to drink!"],
  },

  {
    catogeries: "phone",
    id: "2",
    name: "Coca-Cola Mismo 300ml",
    rating: "4.5",
    discription:
      "Coca-Cola in a classic 300ml bottle, just the right size to enjoy with your meal.",
    price: "₱17",

    image: [
      "https://www.srssulit.com/wp-content/uploads/products/2004853827-1.png",
    ],
    review: [`Love the taste, it always hits the spot!`],
  },

  {
    catogeries: "phone",
    id: "3",
    name: "Coca-cola Kasalo 750ml",
    rating: "4.5",
    discription:
      "Share the joy with this 750ml Coca-Cola bottle, perfect for gatherings and celebrations.",
    price: "₱27",

    image: [
      "https://i.pinimg.com/originals/84/d2/a1/84d2a18a91eb7894e45e62d83cf3a5bd.jpg",
    ],
    review: ["Great for parties, everyone loves it!"],
  },

  {
    catogeries: "phone",
    id: "4",
    name: "Coca-cola 1.5l",
    rating: "4.5",
    discription:
      "A family-sized 1.5l bottle of Coca-Cola, ideal for enjoying with friends and family.",
    price: "₱72",

    image: [
      "https://www.chickeysinasal.com/cdn/shop/products/158_540x540.jpg?v=1680167489",
    ],
    review: [`The best drink to pair with a movie night!`],
  },

  {
    catogeries: "phone",
    id: "5",
    name: "Sprite 237ml",
    rating: "4.2",
    discription:
      "Crisp and refreshing Sprite in a convenient 237ml can, perfect for a quick pick-me-up.",
    price: "₱10",
    image: [
      "https://www.coca-cola.com/content/dam/onexp/ph/en/offerings/kolek-and-win/sprite/s237.jpg",
    ],
    review: ["Always refreshing, especially on a hot day!"],
  },
  {
    catogeries: "phone",
    name: "Sprite Mismo 300ml",
    id: "6",
    rating: "4.5",
    discription:
      "Enjoy Sprite in a classic 300ml bottle, with its lemon-lime flavor brightening your day.",
    price: "₱17",
    image: [
      "https://www.srssulit.com/wp-content/uploads/products/2004890123-1.png",
    ],
    review: ["Sprite is my go-to when I need a caffeine-free option!"],
  },
  {
    catogeries: "phone",
    id: "7",
    name: "Sprite Kasalo 750ml",
    rating: "4.2",
    discription:
      "Share the joy with this 750ml Sprite bottle, perfect for parties and special occasions.",
    price: "₱27",
    image: [
      "https://covidstore.weeblysite.com/uploads/1/3/1/4/131466460/s534306311107824257_p14_i1_w288.jpeg",
    ],
    review: ["Love the fizziness of Sprite, great for mixing cocktails!"],
  },
  {
    catogeries: "phone",
    id: "8",
    name: "Sprite 1.5l",
    rating: "4.1",
    discription:
      "A large 1.5l bottle of Sprite, perfect for sharing or keeping all to yourself.",
    price: "₱72",
    image: [
      "https://boozy.ph/cdn/shop/products/Sprite_1.5L_large.png?v=1591902192",
    ],
    review: ["Sprite is my go-to drink for a refreshing burst of flavor!"],
  },

  {
    catogeries: "phone",
    id: "9",
    name: "Royal 237ml",
    rating: "4.3",
    discription:
      "Royal Tru-Orange in a convenient 237ml can, with its unique orange flavor that's loved by many.",
    price: "₱10",
    image: [
      "https://akabanebussan.com/wp-content/uploads/2018/04/41410-01.jpg",
    ],
    review: ["Royal Tru-Orange always brings back childhood memories!"],
  },

  {
    catogeries: "phone",
    id: "10",
    name: "Royal Mismo 300ml",
    rating: "4.5",
    discription:
      "Enjoy the classic taste of Royal Tru-Orange in a 300ml bottle, perfect for any occasion.",
    price: "₱17",
    image: [
      "https://imartgrocersph.com/wp-content/uploads/2020/09/Royal-Mismo-12_s.png",
    ],
    review: ["Royal Tru-Orange is my favorite orange soda, hands down!"],
  },
  {
    catogeries: "Electronics",
    id: "11",
    name: "Coca-Cola Swakto 190ml",
    rating: "4.5",
    discription:
      "Convenient 190ml size of Coca-Cola, perfect for a quick refreshment.",
    price: "₱18",

    image: [
      "https://shopmetro.ph/lapulapu-supermarket/wp-content/uploads/2023/10/SM103103535-6.jpg",
    ],

    review: ["Always reach for a Swakto when I need a quick Coke fix!"],
  },

  {
    catogeries: "Electronics",
    id: "12",
    name: "Sprite Swakto 190ml",
    rating: "4.3",
    discription: "Enjoy the crisp taste of Sprite in a convenient 190ml size.",
    price: "₱18",

    image: [
      "https://shopsuki.ph/cdn/shop/files/107622421_800x.png?v=1711524143",
    ],

    review: ["Sprite Swakto is perfect for satisfying my soda cravings!"],
  },

  {
    catogeries: "Electronics",
    id: "13",
    name: "Royal Swakto 190ml",
    rating: "4.2",
    discription:
      "Royal Tru-Orange in a small 190ml size, perfect for a burst of orange flavor.",
    price: "₱18",

    image: [
      "https://www.magicstarsupermarket.com/cdn/shop/files/7441543_580x.webp?v=1697180386",
    ],

    review: ["Royal Swakto is my favorite pick-me-up during busy days!"],
  },

  {
    catogeries: "Electronics",
    id: "14",
    name: "Coca-Cola in Can 325ml ",
    rating: "4.0",
    discription:
      "Classic Coca-Cola in a convenient 325ml can, perfect for on-the-go.",
    price: "₱38",

    image: [
      "https://d2t3trus7wwxyy.cloudfront.net/catalog/product/cache/d166c7ea81ddc4172de536322110c911/c/o/coke-regular-in-can-330ml_3.jpg ",
    ],

    review: ["Coca-Cola in a can is a timeless classic, always hits the spot!"],
  },

  {
    catogeries: "Electronics",
    id: "15",
    name: "Sprite in Can 325ml",
    rating: "4.9",
    discription: "Crisp and refreshing Sprite in a convenient 325ml can.",
    price: "₱38",

    image: [
      "https://www.allday.com.ph/media/catalog/product/s/p/spite-in-can-330325ml_2.jpg ",
    ],

    review: ["Sprite in a can is my favorite drink for staying refreshed!"],
  },
  {
    catogeries: "Electronics",
    id: "16",
    name: "Coca-Cola Light 325ml",
    rating: "3.9",
    discription: "Enjoy the lighter taste of Coca-Cola Light in a 325ml can.",
    price: "₱40",

    image: [
      "https://boozy.ph/cdn/shop/products/CokeLight320Can.png?v=1659546684 ",
    ],

    review: ["Coca-Cola Light is my go-to for a guilt-free soda option!"],
  },
  {
    catogeries: "Electronics",
    id: "17",
    name: "Coca-Cola Zero 325ml",
    rating: "4.7",
    discription: "Coca-Cola Zero in a convenient 325ml can, with zero sugar.",
    price: "₱40",

    image: [
      "https://boozy.ph/cdn/shop/products/CokeZero320mlCan.png?v=1659546641",
    ],

    review: [
      "Coca-Cola Zero is perfect for those who want the classic taste without the sugar!",
    ],
  },

  {
    catogeries: "Electronics",
    id: "18",
    name: "Pepsi in Can 325ml",
    rating: "4.6",
    discription:
      "Classic Pepsi in a convenient 325ml can, with its distinct cola flavor.",
    price: "₱38",

    image: [
      "https://shopmetro.ph/pasig-supermarket/wp-content/uploads/2023/08/SM1995244-11.jpg",
    ],

    review: ["Pepsi in a can is always a refreshing choice!"],
  },
  {
    catogeries: "fashion",
    id: "19",
    name: "Dr. Pepper Original Soda Can 355ml",
    rating: "4.4",
    discription:
      "Dr. Pepper Original Soda, in a 355ml can, offers a unique blend of flavors with a sweet, slightly spicy taste, making it a bold and refreshing beverage choice.",
    price: "₱68",
    image: [
      "https://down-ph.img.susercontent.com/file/e8d386b4debe8352ab6e7ab402c9a517",
    ],
    review: ["Dr. Pepper is my absolute favorite, I love the unique taste!"],
  },
  {
    catogeries: "Sports",
    id: "20",
    name: "Royal Grapes 320ml",
    rating: "3.6",
    discription:
      "Exquisite Royal Tru-Orange with a grape twist in a 320ml can.",
    price: "₱45",

    image: [
      "https://www.allday.com.ph/media/catalog/product/1/0/10041745_royal_tru-grape_can_325ml.jpg ",
    ],

    review: ["The Royal Grapes flavor is surprisingly refreshing!"],
  },

  {
    catogeries: "Sports",
    id: "21",
    name: "Sprite no Sugar 320ml",
    rating: "4.0",
    discription:
      "Enjoy the crisp taste of Sprite without the sugar in a 320ml can.",
    price: "₱38",

    image: [
      "https://www.cokebeverages.ph/5197-medium_default/sprite-no-sugar-325ml.jpg ",
    ],

    review: ["Sprite no Sugar is my guilt-free go-to drink!"],
  },

  {
    catogeries: "Sports",
    id: "22",
    name: "Schweppes Tonic Water 330ml",
    rating: "4.1",
    discription:
      "Premium Schweppes Tonic Water in a 330ml bottle, perfect for mixing cocktails.",
    price: "₱52",

    image: [
      "https://d2t3trus7wwxyy.cloudfront.net/catalog/product/s/c/schweppes-tonic-water-330325ml_2.jpg",
    ],

    review: [
      "Premium Schweppes Tonic Water in a 330ml bottle, perfect for mixing cocktails.",
    ],
  },

  {
    catogeries: "Sports",
    id: "23",
    name: "Pepsi Regular 600ml",
    rating: "4.5",
    discription:
      "Classic Pepsi in a large 600ml bottle, perfect for quenching your thirst.",
    price: "₱38",

    image: [
      "https://d2t3trus7wwxyy.cloudfront.net/catalog/product/p/e/pepsi-regular-pet-600ml_2.jpg",
    ],

    review: ["Pepsi Regular is always a crowd-pleaser at parties!"],
  },

  {
    catogeries: "Sports",
    id: "24",
    name: "Coca-Cola Regular 500ml",
    rating: "3.7",
    discription:
      "Classic Coca-Cola in a 500ml bottle, perfect for enjoying with your meal.",
    price: "₱339",

    image: [
      "https://www.shoppersmart.com.ph/cdn/shop/products/Coke_Regular_500mL_ca6a19c3-600a-4a03-aaa8-5cfe6ae215c3_1000x.jpg?v=1603362389",
    ],

    review: ["Coca-Cola Regular is my all-time favorite soda!"],
  },
  {
    catogeries: "Sports",
    id: "25",
    name: "Mountain Dew Regular 500ml",
    rating: "4.4",
    discription:
      "Energizing Mountain Dew in a 500ml bottle, perfect for staying refreshed.",
    price: "₱32",

    image: [
      "https://www.magicstarsupermarket.com/cdn/shop/products/UT8jYclXs0aXXagOFbX5.jpg_350x350_ea42486c-b117-4177-9509-1d964c902f63_300x300.jpg?v=1590289343",
    ],

    review: ["Mountain Dew is my go-to when I need a boost of energy!"],
  },
  {
    catogeries: "Sports",
    id: "26",
    name: "Royal Tru-Orange 500ml",
    rating: "4.7",
    discription:
      "Classic Royal Tru-Orange in a 500ml bottle, perfect for a burst of orange flavor.",
    price: "₱32",

    image: ["https://cdn.store-assets.com/s/377840/i/17244378.jpeg "],

    review: ["Royal Tru-Orange is a staple in my fridge!"],
  },
  {
    catogeries: "Sports",
    id: "27",
    name: "Coca-Cola Zero 500ml",
    rating: "3.9",
    discription:
      "Coca-Cola Zero in a 500ml bottle, perfect for those who want the taste without the sugar.",
    price: "₱32",

    image: [
      "https://zbga.shopsuki.ph/cdn/shop/files/4801981120642_99878285-e977-4e1f-8854-2bce2dd4992d_800x.jpg?v=1705637443 ",
    ],

    review: ["Coca-Cola Zero is my guilt-free indulgence!"],
  },
  {
    catogeries: "fashion",
    id: "28",
    name: "FANTA Orange in Can 355ml",
    rating: "4.4",
    discription:
      "Refreshing FANTA Orange soda in a 355ml can, perfect for a fruity refreshment.",
    price: "₱65",
    image: [
      "https://down-ph.img.susercontent.com/file/ph-11134207-7r98x-lnilvuvog1wac3",
    ],
    review: [
      "Simply super and value for money deal. Fits well as well and the cut in the sides look very nice. Loved it. Ordering more in other colors. 5 star rating. ",
      "Excellent in fitting color little dull ",
      "Awesome...... This product fired to me as I expected........",
      " Good ",
    ],
  },
  {
    catogeries: "fashion",
    id: "29",
    name: "Lemondou Signature Lemon 330ml",
    rating: "4.2",
    discription:
      "Lemon-Dou is made from crushed whole lemons, infused in alcohol, mixed with bubbles a refreshing , full-bodied chu-hi alcoholic lemon drink. Devil Lemon variant got the wickedly, good taste of 9% ABV.",
    price: "₱69",
    image: [
      "https://images.deliveryhero.io/image/darsktores-ph/food/04801981192700.png?height=480",
    ],
    review: ["I love it. Very nice drink. ", "Best quality ever"],
  },
  {
    catogeries: "fashion",
    id: "30",
    name: "Wilkins Sparkling Water Plain 320mL",
    rating: "4.1",
    discription:
      "Crisp and refreshing sparkling water from Wilkins in a 320ml bottle. Perfect for hydration.",
    price: "₱35",
    image: [
      "https://www.cokebeverages.ph/2144-medium_default/wilkins-sparkling-water-plain-330ml.jpg ",
    ],
    review: ["Great for staying hydrated without any calories!"],
  },
  {
    catogeries: "fashion",
    id: "31",
    name: "Cali Can Apple Ice 330ML",
    rating: "3.4",
    discription:
      "Enjoy the crisp and refreshing taste of apple ice in this 330ml Cali Can.",
    price: "₱38",
    image: [
      "https://www.allday.com.ph/media/catalog/product/1/0/10042162_cali_can_ice_330ml.png",
    ],
    review: ["Perfectly refreshing and sweet!"],
  },
  {
    catogeries: "fashion",
    id: "32",
    name: "Red Bull Energy Drink 250mL",
    rating: "4.1",
    discription: "Boost your energy with Red Bull Energy Drink in a 250ml can.",
    price: "₱100",
    image: [
      "https://api.watsons.com.ph/medias/prd-front-50038569.jpg?context=bWFzdGVyfGltYWdlc3wzNDkwOTd8aW1hZ2UvanBlZ3xhREkwTDJnM1pTOHhNRGswTkRrMk1EYzVNRFUxT0M5WFZFTlFTQzAxTURBek9EVTJPUzFtY205dWRDNXFjR2N8MTFmNzc3ZjM3MmQ3OWIyZTg4NDNhMmViYjhlZjQzNWIxZDVlMjdlYmM2ZjgwMjA5ZGRjNThhYmEzMGQ2NmM4Yg ",
    ],
    review: ["Gives me the perfect boost of energy!"],
  },
  {
    catogeries: "fashion",
    id: "33",
    name: "Lotte Milkis Apple 250ml",
    rating: "4.2",
    discription: "Refreshing and creamy apple-flavored Milkis in a 250ml can.",
    price: "₱43",
    image: [
      "https://sijangmart.com/cdn/shop/products/milkisapple.jpg?v=1629721937 ",
    ],
    review: ["I love the unique blend of apple and milk!"],
  },
  {
    catogeries: "fashion",
    id: "34",
    name: "Lotte Milkis Strawberry 250ml",
    rating: "4.4",
    discription:
      "Enjoy the creamy and delicious taste of strawberry-flavored Milkis in a 250ml can.",
    price: "₱43",
    image: [
      "https://media.pickaroo.com/media/thumb/variant_photos/2021/10/9/E2HMH2FM9L39DLv3HgFD9g_watermark_400.jpg ",
    ],
    review: ["Strawberry Milkis is my favorite!"],
  },
  {
    catogeries: "Beauty and Cosmetics",
    id: "35",
    name: "Mountain Dew in Can 330ml",
    rating: "4.5",
    discription:
      "Vibrant, citrus-flavored soda perfect for an energizing refreshment in a 330 ml can. ",
    price: "₱50",

    image: [
      "https://d2t3trus7wwxyy.cloudfront.net/catalog/product/m/o/mountain-dew-can-330ml_2.jpg ",
    ],
    review: [
      "My top pick when I need a burst of energy, thanks to its tangy citrus flavor and perfect caffeine kick.",
    ],
  },
  {
    catogeries: "Beauty and Cosmetics",
    id: "36",
    name: "Mug Rootbeer Can 330ml",
    rating: "4.4",
    discription:
      "Classic, creamy soda with a rich, smooth vanilla flavor that delivers a nostalgic and satisfying refreshment.",
    price: "₱37",

    image: [
      "https://ph-test-11.slatic.net/p/e4e8efefc0d437b9b911738f62c58ce5.png ",
    ],
    review: [
      "My favorite for its flavor that brings a deliciously nostalgic refreshment every time.",
    ],
  },
  {
    catogeries: "Beauty and Cosmetics",
    id: "37",
    name: "RC Cola 237ml",
    rating: "4.5",
    discription:
      "Crisp and refreshing cola beverage with a timeless taste that satisfies with every sip.",
    price: "₱15",

    image: ["https://cdn.store-assets.com/s/377840/i/28003635.jpg "],
    review: [
      "My go-to drink for its refreshing taste that hits the spot every time.",
    ],
  },
  {
    catogeries: "Beauty and Cosmetics",
    id: "38",
    name: "RC Cola 500ml",
    rating: "4.3",
    discription:
      "Classic, thirst-quenching cola with a satisfyingly crisp flavor that never goes out of style",
    price: "₱33",

    image: [
      "https://medsgo.ph/images/detailed/31/rc-cola-pet-500ml_2-removebg-preview[1].png",
    ],
    review: [
      "Perfect for quenching my thirst with its timeless flavor that's always satisfying",
    ],
  },
  {
    catogeries: "Beauty and Cosmetics",
    id: "39",
    name: "RC Cola 1.5l",
    rating: "4.2",
    discription:
      "Family-sized refreshment, boasting the taste that's perfect for sharing or enjoying all to yourself.",
    price: "₱68",

    image: [
      "https://images.freshop.com/1564405684702544874/10927fefc62362523619794fc3fe2015_large.png",
    ],
    review: [
      "Staple in my household, offering a satisfyingly refreshing taste that's great for gatherings or just relaxing at home.",
    ],
  },
  {
    catogeries: "Beauty and Cosmetics",
    id: "40",
    name: "Cobra Energy Drink 350ml",
    rating: "4.4",
    discription: "The classic Cobra Energy Drink in a 350ml bottle. ",
    price: "₱23",

    image: [
      "https://asiabrewery.com/cdn/shop/products/CobraOriginal350mlPETBottlecopy_0f4b1961-8c35-44a8-8a3b-d855285f7315.png?v=1653373730",
    ],
    review: ["Gives me the energy boost I need!"],
  },
  {
    catogeries: "Beauty and Cosmetics",
    id: "41",
    name: "Cobra Energy Drink Plus Smart 350ml",
    rating: "4.3",
    discription: "Cobra Energy Drink Plus Smart in a 350ml bottle.",
    price: "₱23",

    image: [
      "https://images.freshop.com/1564405684702542027/22aaef0220f4673320d0e2ef1544313e_large.png",
    ],
    review: ["Love the added benefits of the Plus Smart version!"],
  },
  {
    catogeries: "Beauty and Cosmetics",
    id: "42",
    name: "Cobra Energy Drink Berry Blast with IMMUNIPLUS+ 350ml",
    rating: "4.5",
    discription:
      "Cobra Energy Drink Berry Blast with IMMUNIPLUS+ in a 350ml bottle.",
    price: "₱23",

    image: [
      "https://asiabrewery.com/cdn/shop/products/CobraBerrycopy_eaaa676f-6dae-4c06-afd1-57e15dd357a5.png?v=1653373437",
    ],
    review: ["Great taste and I feel energized thanks to the caffeine!"],
  },
  {
    catogeries: "phone",
    id: "43",
    name: "Royal Kasalo 750ml",
    rating: "4.8",
    discription:
      "Share the joy with this 750ml Royal Tru-Orange bottle, perfect for family gatherings.",
    price: "₱27",
    image: ["https://i.ibb.co/jHxM8hC/royal-kasalo.png"],
    review: [
      "Royal Tru-Orange is a staple at our family gatherings, everyone loves it!",
    ],
  },
  {
    catogeries: "phone",
    id: "44",
    name: "Royal 1.5l",
    rating: "4.1",
    discription:
      "A large 1.5l bottle of Royal Tru-Orange, perfect for quenching your thirst all day long.",
    price: "₱72",
    image: [
      "https://gringo.ph/cdn/shop/products/Royal1.5Lcopy_1024x1024.jpg?v=1627978246",
    ],
    review: [
      "Royal Tru-Orange is my favorite soda, I always keep a bottle in my fridge!",
    ],
  },
  {
    catogeries: "Beauty and Cosmetics",
    id: "45",
    name: "Cobra Energy Drink  Plus Vitamin C with IMMUNIPLUS+ 350ml",
    rating: "4.8",
    discription:
      "Cobra Energy Drink Plus Vitamin C with IMMUNIPLUS+ in a 350ml bottle.",
    price: "₱23",

    image: [
      "https://asiabrewery.com/cdn/shop/products/CobraVItC_ee89ea93-cca0-407d-9c2d-c6228c9d9617.png?v=1653372306 ",
    ],
    review: [
      "Allows me to keep going with my daily routine thanks to the energy it gives!",
    ],
  },
  {
    catogeries: "Beauty and Cosmetics",
    id: "46",
    name: "Cobra Energy Drink +Fit 350ml",
    rating: "4.2",
    discription: "Cobra Energy Drink +Fit in a 350ml bottle.",
    price: "₱23",

    image: [
      "https://marilenminimart.com/cdn/shop/products/Screenshot_356.png?v=1630481149 ",
    ],
    review: ["Makes me feel more motivated with my workouts!"],
  },
  {
    catogeries: "fashion",
    id: "47",
    name: "Lotte Milkis Original 250ml",
    rating: "4.4",
    discription:
      "The original Milkis flavor in a 250ml can, combining milk and soda for a unique taste.",
    price: "₱43",
    image: [
      "https://sijangmart.com/cdn/shop/products/1050_lotte_milkis_250ml.jpg?v=1599545772 ",
    ],
    review: ["A classic taste that never gets old."],
  },
  {
    catogeries: "fashion",
    id: "48",
    name: "Lotte Milkis Melon 250ml",
    rating: "4.5",
    discription: "Creamy and refreshing melon-flavored Milkis in a 250ml can.",
    price: "₱43",
    image: ["https://kmallph.com/data/item/2000000402/2000000402.jpg"],
    review: ["Melon Milkis is so refreshing and unique!"],
  },
  {
    catogeries: "fashion",
    id: "49",
    name: "Lotte Milkis Preach 250ml",
    rating: "4.3",
    discription:
      "Enjoy the sweet and creamy taste of peach-flavored Milkis in a 250ml can.",
    price: "₱43",
    image: [
      "https://sijangmart.com/cdn/shop/products/milkis_peach.jpg?v=1625980034 ",
    ],
    review: ["Peach Milkis is a delightful treat!"],
  },
  {
    catogeries: "fashion",
    id: "50",
    name: "Sting Energy Drink",
    rating: "4.8",
    discription:
      "A powerful energy drink to keep you going throughout the day.",
    price: "₱24",
    image: [
      "https://shopmetro.ph/pasig-supermarket/wp-content/uploads/2021/03/SM9773656-2.png ",
    ],
    review: ["Gives me the energy boost I need!"],
  },
];

export default data;
