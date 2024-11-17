const express = require('express');
const api = require("../Model/Apimodel")
const route = express.Router();
let arr = [
  {
    "id": 1,
    "category":"NEW Arriwal",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5o76YeQb5elvxturs0PczbLrVSnllKQJdA&s   ",
    "description": "This classic black hoodie is a versatile and comfortable choice, ideal for everyday wear. Made from a soft and durable cotton-blend fabric, it offers both warmth and style for any season. With a relaxed fit, adjustable drawstring hood, and a spacious kangaroo pocket, it’s designed for maximum comfort and convenience. Perfect for layering and can be paired with jeans, joggers, or shorts, making it an essential staple for any casual wardrobe.",
    "price": 49.99,
    "currency": "USD",
    "reviews": [
      {
        "customerName": "John Doe",
        "title": "Comfortable Fit",
        "content": "I appreciate the relaxed fit and softness of the fabric, making it an excellent choice for long wear."
      },
      {
        "customerName": "Jane Smith",
        "title": "Stylish Look",
        "content": "I love the sleek, simple design, which is both classic and easy to match with other clothing."
      },
      {
        "customerName": "Michael Johnson",
        "title": "Durability",
        "content": "The hoodie’s durability is great; it keeps its shape and color intact even after multiple washes."
      },
      {
        "customerName": "Emily Brown",
        "title": "Value for Money",
        "content": "I feel this hoodie provides great quality for the price. Definitely worth it!"
      },
    ],
    "overallRating": "4/5" ,
    "price": [
      {
        "range": "Standard Range",
        "amount": "$20 - $50"
      },
      {
        "range": "Premium Range",
        "amount": "$60 - $100+",
        "description": "For branded or high-quality material hoodies."
      },
    ],

  },
  {
    "id": 2,
    "category":"NEW Arriwal",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBZUpLJnuWNvCOx3pIuuQtlYJtBZE8K1ZXg&s",  
    "description": "These sleek black trousers are a must-have for a sharp, polished look. Made from high-quality cotton blend fabric, they offer a comfortable fit while maintaining a professional appearance. The trousers feature a classic straight-leg design, perfect for formal occasions or business settings. The waistband is equipped with belt loops, and the trousers come with multiple pockets for added convenience.",
    "price": 39.99,
    "currency": "USD",
    "reviews": [
      {
        "customerName": "Alice Walker",
        "title": "Perfect Fit",
        "content": "These black trousers fit perfectly and are very comfortable to wear all day. Great for office wear."
      },
      {
        "customerName": "Tom Harris",
        "title": "Great Quality",
        "content": "The fabric feels very premium and the trousers maintain their shape throughout the day. Highly recommend!"
      },
      {
        "customerName": "Lily Evans",
        "title": "Comfortable for Long Hours",
        "content": "I wore these for an entire workday, and they were comfortable throughout. A great addition to my wardrobe."
      },
      {
        "customerName": "Sam Green",
        "title": "Value for Money",
        "content": "For the price, these trousers are great. They look professional and feel good."
      }
    ],
    "overallRating": "4.5/5",
    "priceRange": [
      {
        "range": "Standard Range",
        "amount": "$30 - $50"
      },
      {
        "range": "Premium Range",
        "amount": "$60 - $100+",
        "description": "For premium fabric and designer brands."
      }
    ]
  }
  ,
  {
    "id": 3,
    "category":"NEW Arriwal",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdpL1BjXw_5Acg1hIOpCD166gGEcJmatJgGQ&s",  
    "description": "These skin-colored pants offer a sleek and versatile look, suitable for both casual and semi-formal occasions. Made with a soft, stretchable fabric, they provide comfort while maintaining a sharp silhouette. The slim fit design enhances the natural shape, and the neutral color makes them easy to pair with a variety of tops. Whether for a day out or a more polished look, these pants are a great addition to any wardrobe.",
    "price": 29.99,
    "currency": "USD",
    "reviews": [
      {
        "customerName": "Sarah Lee",
        "title": "Stylish and Comfortable",
        "content": "These pants are both stylish and comfortable, perfect for long days out. The skin color is subtle but fashionable."
      },
      {
        "customerName": "James Carter",
        "title": "Perfect Fit",
        "content": "The fit is just right, and the material feels great. These pants are perfect for casual outings or even office wear."
      },
      {
        "customerName": "Ella Davis",
        "title": "Versatile Color",
        "content": "I love how versatile the color is. It matches almost everything in my wardrobe, making it easy to create different outfits."
      },
      {
        "customerName": "Chris Allen",
        "title": "Great Quality",
        "content": "The fabric feels premium and durable. I’m really happy with these pants for the price."
      }
    ],
    "overallRating": "4.2/5",
    "priceRange": [
      {
        "range": "Standard Range",
        "amount": "$25 - $40"
      },
      {
        "range": "Premium Range",
        "amount": "$50 - $80+",
        "description": "For premium quality or designer brands."
      }
    ]
  }
,  
{
  "id": 4,
  "category":"NEW Arriwal",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xPNVlATnYjzBi3H5Afm6CCX4flDaKu1UjA&s",
  "description": "This classic black T-shirt is a wardrobe essential, offering both comfort and style. Made from soft, breathable cotton, it ensures a relaxed fit, perfect for everyday wear. The simple, sleek design makes it easy to pair with jeans, shorts, or joggers for a casual look. Whether you're lounging at home or out with friends, this T-shirt is versatile and always in fashion.",
  "price": 19.99,
  "currency": "USD",
  "reviews": [
    {
      "customerName": "Mike Johnson",
      "title": "Great for Casual Wear",
      "content": "This black T-shirt is perfect for casual outings. The fabric is soft, and it fits well without being too tight."
    },
    {
      "customerName": "Sophie Green",
      "title": "Comfortable and Stylish",
      "content": "I love how comfortable this T-shirt is! It's stylish, easy to pair with anything, and great for daily wear."
    },
    {
      "customerName": "David Lee",
      "title": "Good Quality",
      "content": "The material is good quality and breathable, perfect for warmer days. It retains its shape after washing."
    },
    {
      "customerName": "Emma Wilson",
      "title": "Affordable and Practical",
      "content": "An affordable option for anyone looking for a good-quality, basic black T-shirt. I wear it all the time."
    }
  ],
  "overallRating": "4.5/5",
  "priceRange": [
    {
      "range": "Standard Range",
      "amount": "$15 - $25"
    },
    {
      "range": "Premium Range",
      "amount": "$30 - $50+",
      "description": "For higher-end or branded cotton T-shirts."
    }
  ]
}
,
{
  "id": 5,
  "category":"TOP SELL",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbHZjOnj7kLVGVkIo3WXG2ZCAhzq9RI0d6bA&s",
  "description": "This black T-shirt features a unique anime-inspired design, making it a perfect choice for anime fans. Made from soft, comfortable cotton, this T-shirt offers a relaxed fit that’s perfect for casual wear. The bold, vibrant graphic print adds a pop of style to your wardrobe, and it’s ideal for pairing with jeans, shorts, or skirts. Show off your love for anime while enjoying a comfortable and stylish fit.",
  "price": 24.99,
  "currency": "USD",
  "reviews": [
    {
      "customerName": "Chris Carter",
      "title": "Perfect for Anime Fans",
      "content": "I love this T-shirt! The anime design is super cool, and the fabric is really soft and comfortable. A great addition to my collection."
    },
    {
      "customerName": "Olivia Brown",
      "title": "Great Fit",
      "content": "The fit is just right, and the design looks amazing in person. I get compliments every time I wear it!"
    },
    {
      "customerName": "Alex Kim",
      "title": "Good Quality",
      "content": "The print is high quality and doesn’t fade after washing. It’s a great shirt for casual wear and anime conventions."
    },
    {
      "customerName": "Liam Davis",
      "title": "Awesome Shirt",
      "content": "This T-shirt is stylish and comfy. I love the anime graphic; it's exactly what I was looking for!"
    }
  ],
  "overallRating": "4.7/5",
  "priceRange": [
    {
      "range": "Standard Range",
      "amount": "$20 - $30"
    },
    {
      "range": "Premium Range",
      "amount": "$35 - $60+",
      "description": "For limited edition or high-quality anime graphic T-shirts."
    }
  ]
}
,
{
  "id": 6,
  "category":"TOP SELL",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3XtGH6BQvOHsrrT321KShaY7EUjFHW7q3A&s",
  "description": "This stylish black track suit is designed for both comfort and fashion. Made from high-quality, breathable fabric, it provides a comfortable fit for both athletic and casual wear. The track suit features sleek black material with a bold design on the sides, offering a modern look. Whether you're going for a jog, heading to the gym, or just running errands, this track suit is the perfect combination of performance and style.",
  "price": 49.99,
  "currency": "USD",
  "reviews": [
    {
      "customerName": "Ryan Collins",
      "title": "Comfortable and Stylish",
      "content": "The fabric is really breathable, and the design is simple yet eye-catching. I love wearing it for workouts and casual outings."
    },
    {
      "customerName": "Sophia Wilson",
      "title": "Great Fit",
      "content": "Fits perfectly and feels comfortable for long wear. The design on the sides adds a nice touch."
    },
    {
      "customerName": "Ethan Smith",
      "title": "Perfect for Sports",
      "content": "This track suit is ideal for sports activities. The material is lightweight and stretches well, making it perfect for workouts."
    },
    {
      "customerName": "Zoe Miller",
      "title": "Good Quality",
      "content": "The quality of the fabric is excellent. It's durable and keeps its shape even after several washes."
    }
  ],
  "overallRating": "4.6/5",
  "priceRange": [
    {
      "range": "Standard Range",
      "amount": "$40 - $60"
    },
    {
      "range": "Premium Range",
      "amount": "$70 - $100+",
      "description": "For high-end, designer track suits with premium materials."
    }
  ]
}
,
{
  "id": 7,
  "category":"TOP SELL",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF213YH4aZY_hrq1PtZn_59ctGg11A9h1fEQ&s",
  "description": "This elegant skin-colored full-sleeve shirt is designed for both comfort and sophistication. Made from a soft, breathable fabric, it provides a comfortable fit for all-day wear. The simple yet refined design makes it perfect for both formal and semi-formal occasions. With a tailored fit and classic button-down style, it can be paired with trousers, chinos, or jeans for a polished look.",
  "price": 34.99,
  "currency": "USD",
  "reviews": [
    {
      "customerName": "Emma Thompson",
      "title": "Great for Formal Wear",
      "content": "This shirt is perfect for a formal setting. It feels soft, looks professional, and fits well."
    },
    {
      "customerName": "Liam Johnson",
      "title": "Comfortable and Stylish",
      "content": "I love the feel of this shirt! It’s comfortable for a long day at work and looks great under a blazer."
    },
    {
      "customerName": "Rachel Carter",
      "title": "Versatile Color",
      "content": "The skin color makes it very versatile, easy to pair with almost anything in my wardrobe. Perfect for both office and casual wear."
    },
    {
      "customerName": "George Mitchell",
      "title": "Good Quality",
      "content": "The fabric is lightweight and breathable. I’ve worn it a few times now, and it holds up well after washing."
    }
  ],
  "overallRating": "4.4/5",
  "priceRange": [
    {
      "range": "Standard Range",
      "amount": "$30 - $50"
    },
    {
      "range": "Premium Range",
      "amount": "$60 - $90+",
      "description": "For premium fabrics or designer brands."
    }
  ]
}
,
{
  "id": 8,
  "category":"TOP SELL",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxkt4twABe6frVm5UYKGcBpd2cbzhoCCl0w&s",
  "description": "These stylish black shorts for girls are perfect for casual wear and warm weather. Made from soft, breathable fabric, they offer a comfortable and relaxed fit. The simple yet trendy design makes them easy to pair with any top, whether it's a T-shirt, blouse, or tank top. Ideal for a day at the beach, a casual outing, or lounging at home, these shorts are a versatile addition to any wardrobe.",
  "price": 19.99,
  "currency": "USD",
  "reviews": [
    {
      "customerName": "Chloe Martin",
      "title": "Perfect for Summer",
      "content": "These shorts are perfect for hot weather. They’re comfortable, and the fit is just right. Definitely my go-to for summer days!"
    },
    {
      "customerName": "Lily Adams",
      "title": "Great Fit and Style",
      "content": "I love how these shorts fit and how easy it is to pair them with different tops. They’re both stylish and comfy."
    },
    {
      "customerName": "Emily Clark",
      "title": "Lightweight and Comfortable",
      "content": "These are super lightweight and breathable, perfect for outdoor activities. I wear them all the time!"
    },
    {
      "customerName": "Sophia Lewis",
      "title": "Value for Money",
      "content": "Great shorts for the price! The fabric feels good, and they fit well. Worth the money."
    }
  ],
  "overallRating": "4.3/5",
  "priceRange": [
    {
      "range": "Standard Range",
      "amount": "$15 - $25"
    },
    {
      "range": "Premium Range",
      "amount": "$30 - $50+",
      "description": "For premium or designer brands with higher-quality materials."
    }
  ]
}


]

route.get("/",async(req,res)=>{
  const result = await api.find();
res.status(201).send({
  "message":"ecom api",
  "data":result,
  "isSucessful":true
})  
})
route.post("/",async(req,res)=>{
  const body = req.body;
  const obj = {
    id : body.id,
    category : body.category,
    image : body.image,
    description : body.description,
    price:body.price,
    currency :body.currency,
    reviews:body.reviews,
    overallRating : body.overallRating
  }
  const Apimodel = new api(obj);
await Apimodel.save().then((result)=>{
  res.status(201).send({
    "message":"API Successfully Created",
    data : result 
  })
}).catch((err)=>{
  res.status(201).send({
    "message":"API UNSuccessfully ",
    data : err 
  })

})
})
module.exports = route