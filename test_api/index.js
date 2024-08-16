const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let flowers = [
  {
    "id": 1,
    "name": "Lola",
    "price": "12",
    "image": "https://fotouz.uz/uploads/files/2019-09/1569689037_gullar-atirgul-guli-lola-lola-gul-binafsha-gul-gullarning-turlari-qanday-gullar-nomi-gullar-olami-gullar-rasmlari-flowers-the-flower-tsvetok-svetok-tsvety-164.jpg"
  },
  {
    "id": 2,
    "name": "Atirgul",
    "price": "12",
    "image": "https://www.starrosesandplants.com/wp-content/uploads/2021/01/Elle_006.jpg"
  },
  {
    "id": 3,
    "name": "Orhideya",
    "price": "17",
    "image": "https://emova-monceaufleurs-fr-storage.omn.proximis.com/Imagestorage/images/740/740/6246d7aaa9059_FPorchidee2.jpg"
  },
  {
    "id": 4,
    "name": "Sariq Atirgul",
    "price": "22",
    "image": "https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1611911507/vendor/3418/catalog/product/2/0/20140818013953_file_53f159695d81b_11.jpg"
  },
  {
    "id": 5,
    "name": "Sariq Atirgul",
    "price": "22",
    "image": "https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1611911507/vendor/3418/catalog/product/2/0/20140818013953_file_53f159695d81b_11.jpg"
  },
  {
    "id": 6,
    "name": "Sariq Lola",
    "price": "16",
    "image": "https://i2.wp.com/knittochka.ru/wp-content/uploads/5-1278.jpg"
  },
  {
    "id": 7,
    "name": "Wisteria",
    "price": "29",
    "image": "https://hips.hearstapps.com/hmg-prod/images/wisteria-in-bloom-royalty-free-image-1653423554.jpg?crop=0.685xw:1.00xh;0.112xw,0&resize=980:*"
  },
  {
    "id": 8,
    "name": "Cosmos",
    "price": "42",
    "image": "https://hips.hearstapps.com/hmg-prod/images/vibrant-pink-and-white-summer-flowering-cosmos-royalty-free-image-1653499726.jpg?crop=0.66541xw:1xh;center,top&resize=980:*"
  },
  {
    "id": 9,
    "name": "Gardenia",
    "price": "37",
    "image": "https://hips.hearstapps.com/hmg-prod/images/gardenia-royalty-free-image-1580854928.jpg?crop=1.00xw:0.796xh;0,0.0851xh&resize=980:*"
  },
  {
    "id": 10,
    "name": "Petunia",
    "price": "34",
    "image": "https://hips.hearstapps.com/hmg-prod/images/petunias-royalty-free-image-1580855855.jpg?crop=1xw:1xh;center,top&resize=980:*"
  }
];

countries_data = [
  {
      "id": 1,
      "name": "France",
      "capital": "Paris",
      "image": "https://media.istockphoto.com/id/1185953092/photo/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-the-rays-of-the-setting.jpg?s=612x612&w=0&k=20&c=ZneUFVlR5TPCooxRV1rldUAadqLxZEvOoyVCOrtpcRQ=",
      "star": 4.5,
      "ticket_price": 20.00,
      "hotels": [
          {
              "name": "Rose Barbon",
              "location": "Versal street",
              "price": 1000.00,
              "image": "https://i.insider.com/5f64d4b2323fc4001e0d71b6?width=750&format=jpeg&auto=webp",
              "star": 5
          }
      ]
  },
  {
      "id": 2,
      "name": "United States",
      "capital": "Washington, D.C.",
      "image": "https://cdn.britannica.com/42/93842-050-295D32A0/US-Capitol-place-meeting-Congress-Washington-DC.jpg",
      "star": 4.8,
      "ticket_price": 30.00,
      "hotels": [
          {
              "name": "Luxury Plaza",
              "location": "Downtown Avenue",
              "price": 1500.00,
              "image": "https://media.cnn.com/api/v1/images/stellar/prod/150514133918-9-taj-mahal-palace-mumbai-iconic-hotels.jpg?q=w_2000,h_1271,x_0,y_0,c_fill",
              "star": 5
          }
      ]
  },
  {
      "id": 3,
      "name": "Italy",
      "capital": "Rome",
      "image": "https://romesite.com/images/rome-italy.jpg",
      "star": 4.6,
      "ticket_price": 18.00,
      "hotels": [
          {
              "name": "Grand Roman",
              "location": "Colosseum Square",
              "price": 1200.00,
              "image": "https://www.rd.com/wp-content/uploads/2017/08/01-World%E2%80%99s-Most-Outrageous-Luxury-Hotels-and-Resorts-via-kempinski.com-FT.jpg",
              "star": 4
          }
      ]
  },
  {
      "id": 4,  
      "name": "Japan",
      "capital": "Tokyo",
      "image": "https://media.istockphoto.com/id/904453184/photo/mt-fuji-and-tokyo-skyline.jpg?s=612x612&w=0&k=20&c=dCovWtrGOge0jVOAQ6UHfjKndURi5jfGvgM0jejXtbY=",
      "star": 4.4,
      "ticket_price": 25.00,
      "hotels": [
          {
              "name": "Sakura Inn",
              "location": "Shibuya District",
              "price": 800.00,
              "image": "https://images.viewretreats.com/wp-content/uploads/2022/10/13213239/BEST-DUBAI-HERO-oneonly-royal-mirage.jpeg",
              "star": 4
          }
      ]
  },
  {
      "id": 5,
      "name": "Australia",
      "capital": "Canberra",
      "image": "https://media.istockphoto.com/id/1083098468/photo/aerial-view-of-canberra-from-belconnen-in-the-morning.jpg?s=612x612&w=0&k=20&c=ouen1oDH3DVXWVLjD-Znp9iydHFI-9nDoO5JGywXhI8=",
      "star": 4.7,
      "ticket_price": 22.00,
      "hotels": [
          {
              "name": "Kangaroo Lodge",
              "location": "Outback Avenue",
              "price": 1100.00,
              "image": "https://cdn.cheapism.com/images/082118_famous_hotels_slide_13_fs.max-825x550.jpg",
              "star": 4
          }
      ]
  },
  {
      "id": 6,
      "name": "China",
      "capital": "Beijing",
      "image": "https://media.istockphoto.com/id/576900878/photo/beijing-skyline-at-sunset.jpg?s=612x612&w=0&k=20&c=rSeUdr9UNie_bPvkB8Z09QcBl9siJk9MD8Cwf1pT2ho=",
      "star": 4.3,
      "ticket_price": 15.00,
      "hotels": [
          {
              "name": "Great Wall Retreat",
              "location": "Forbidden City Road",
              "price": 900.00,
              "image": "https://ssl.tzoo-img.com/images/tzoo.hd.17914.146.99976.ThePierre.jpg?width=412&spr=3",
              "star": 4
          }
      ]
  },
  {
      "id": 7,     
      "name": "Brazil",
      "capital": "Brasília",
      "image": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/12/rio-overview.jpg",
      "star": 4.2,
      "ticket_price": 17.00,
      "hotels": [
          {
              "name": "Copacabana Resort",
              "location": "Rio Beachfront",
              "price": 950.00,
              "image": "https://www.bostonmagazine.com/wp-content/uploads/sites/2/2020/12/Omni-Parker-House-hotel.jpg",
              "star": 4
          }
      ]
  },
  {
      "id": 8,
      "name": "Spain",
      "capital": "Madrid",
      "image": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFkcmlkfGVufDB8fDB8fHww&w=1000&q=80",
      "star": 4.9,
      "ticket_price": 21.00,
      "hotels": [
          {
              "name": "Royal Alcazar Lodge",
              "location": "Plaza Mayor",
              "price": 1300.00,
              "image": "https://viatravelers.com/wp-content/uploads/2020/06/shangrila_res-3.jpg",
              "star": 5
          }
      ]
  },
  {
      "id": 9,
      "name": "Canada",
      "capital": "Ottawa",
      "image": "https://previews.123rf.com/images/rabbit75123/rabbit751231306/rabbit75123130600338/20369406-ottawa-city-skyline-view-with-historical-buildings.jpg",
      "star": 4.6,
      "ticket_price": 28.00,
      "hotels": [
          {
              "name": "Maple Leaf Hotel",
              "location": "City Center",
              "price": 1400.00,
              "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d5/77/rambagh-palace-exterior.jpg?w=1000&h=600&s=1",
              "star": 5
          }
      ]
  },
  {
      "id": 10,
      "name": "India",
      "capital": "New Delhi",
      "image": "https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692_1280.jpg",
      "star": 4.1,
      "ticket_price": 12.00,
      "hotels": [
          {
              "name": "Taj Mahal Palace",
              "location": "Agra Road",
              "price": 750.00,
              "image": "https://wanderingcarol.com/wp-content/uploads/2022/10/best-hotels-monaco-hermitage-hotel.jpg",
              "star": 4
          }
      ]
  }
]

nike_boots_data = {
  "species":[
    {
      "id": 1,
      "name":"Lifestyle",
      "image":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f9e087d-1f0f-4b72-8576-b7b7b64e73ae/air-force-1-07-shoes-SqKG2H.png"
    },
    {
      "id": 2,
      "name":"Basketball",
      "image":"https://cdn.bleacherreport.net/images_root/slides/photos/000/463/730/JordanIX_original.png?1287991044"
    },
    {
      "id": 3,
      "name":"Running",
      "image":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/585e2cd2-4f2a-408c-a8ba-f89952cdf332/revolution-6-road-running-shoes-NC0P7k.png"
    },
    {
      "id": 4,
      "name":"Football",
      "image":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c8cac444-f1f4-40ec-b441-92244ff332e2/phantom-luna-football-boot-bVCk6Z.png"
    },
  ],
  "boots": [
    {
        "id": 1,
        "name": "Nike Air Max 270",
        "image": "https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?s=612x612&w=0&k=20&c=L725fuzFTnm6qEaqE7Urc5q6IR80EgYQEjBn_qtBIQg=",
        "price": 150,
        "star": "4.5",
        "reviews": 8743,
        "description": "The Nike Air Max 270 features a large Air Max unit in the heel for comfort and style.",
        "sizes": [40, 42, 43, 44, 45]
    },
    {
        "id": 2,
        "name": "Nike React Element 87",
        "image": "https://cdn.pixabay.com/photo/2023/05/03/22/43/tennis-7968714_640.png",
        "price": 180,
        "star": "4.7",
        "reviews": 6321,
        "description": "The Nike React Element 87 showcases innovative design and cushioning technology.",
        "sizes": [41, 42, 43, 44, 46]
    },
    {
        "id": 3,
        "name": "Nike Air Force 1",
        "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        "price": 100,
        "star": "4.3",
        "reviews": 10589,
        "description": "The Nike Air Force 1 is a classic sneaker known for its versatility and timeless style.",
        "sizes": [39, 40, 41, 42, 43]
    },
    {
        "id": 4,
        "name": "Nike Zoom Pegasus 38",
        "image": "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&w=1000&q=80",
        "price": 120,
        "star": "4.8",
        "reviews": 4156,
        "description": "The Nike Zoom Pegasus 38 offers responsive cushioning for a smooth running experience.",
        "sizes": [38, 39, 40, 41, 42]
    },
    {
        "id": 5,
        "name": "Nike SB Dunk Low",
        "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9355f630-53c7-4567-89b4-a788c93171ea/gt-jump-basketball-shoes-22QS5F.png",
        "price": 130,
        "star": "4.6",
        "reviews": 7432,
        "description": "The Nike SB Dunk Low is a popular skateboarding shoe with unique colorways.",
        "sizes": [40, 41, 42, 43, 44]
    },
  ]
}

let users = [];
let nextUserId = 1;
let nextFlowerId = 11;

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token || token !== 'Bearer 323jjhi23uibi12blb12k31k2312bjhgv312hncakkasdarfesmp124323mlmjn2nin1n') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next(); // Move to the next middleware or route handler
}

// Apply the middleware to the necessary routes
app.get('/flowers', (req, res) => {
  res.json(flowers);
});
app.get('/travel', authenticateToken, (req, res) => {
  res.json(countries_data);
});
app.get('/boots', authenticateToken, (req, res) => {
  res.json(nike_boots_data);
});
app.get('/account', authenticateToken, (req, res) => {
  res.json(users);
});

app.post('/account', (req, res) => {
    const { user, password } = req.body;
  
    if (!user || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    const newPupil = { id: nextUserId++, user, password };
    const token = {"token" :"323jjhi23uibi12blb12k31k2312bjhgv312hncakkasdarfesmp124323mlmjn2nin1n"};
    users.push(newPupil);
    res.status(201).json(token);
  }); 

app.post('/flowers', (req, res) => {
    const { name, price,image } = req.body;
  
    if (!name || !price || !image) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    const newFlower = { id: nextFlowerId++, name, price,image };
    flowers.push(newFlower);
    res.status(201).json();
  });

app.delete('/flowers/:id', authenticateToken,(req, res) => {
 
  const pupilId = req.params.id;
  flowers = flowers.filter((pupil) => pupil.id !== parseInt(pupilId));
  res.sendStatus(204);
});

app.put('/flowers/:id', (req, res) => {
  const flowerId = req.params.id;
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const flowerIndex = flowers.findIndex((flower) => flower.id === parseInt(flowerId));

  if (flowerIndex === -1) {
    return res.status(404).json({ error: 'Flower not found' });
  }

  const updatedFlower = { id: parseInt(flowerId), name, price, image };
  flowers[flowerIndex] = updatedFlower;

  res.json(updatedFlower);
});


app.listen(3000, '192.168.42.92', () => {
  console.log('Server is running on http://192.168.42.92:3000');
});
