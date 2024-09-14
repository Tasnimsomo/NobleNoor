import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductLayout from './ProductLayout';
import './Collection.css';

function Collection({ titles, isFullView = false }) {
    const { collectionName } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [collectionName]);

    const collections = [
        {
            "title": "Everyday Abayas",
            "products": [
              {
                "id": 1,
                "name": "Peach Abaya",
                "price": "$65.00 USD",
                "image": "/abayas/peach abaya.jpeg",
                "reviews": 4,
                "rating": 5,
                "description": "The Peach Abaya is a graceful and timeless garment, perfect for everyday wear or special occasions. Its soft peach hue exudes elegance and calm, making it suitable for all skin tones. Crafted from lightweight, breathable fabric, it drapes effortlessly to create a flattering silhouette. The abaya falls to ankle length, with a loose yet structured fit, offering modesty and comfort throughout the day. Simple, yet refined, this abaya pairs perfectly with neutral accessories for a chic, understated look."
              },
              {
                "id": 2,
                "name": "Macha Green Abaya",
                "price": "$70.00 USD",
                "image": "/abayas/macha green abaya.jpeg",
                "reviews": 3,
                "rating": 4,
                "description": "The Macha Green Abaya brings a refreshing twist to your wardrobe with its unique shade of deep green, reminiscent of the rich tones of matcha tea. This abaya is tailored for those who appreciate bold yet sophisticated styles. The full-length design offers both modesty and elegance, with long, flowing sleeves that add a touch of grace. The subtle sheen of the fabric enhances the rich green color, making it an ideal choice for both casual outings and formal events. Pair it with gold accessories for a regal finish."
              },
              {
                "id": 3,
                "name": "Brown & Black Abaya",
                "price": "$75.00 USD",
                "image": "/abayas/brown black abaya.jpeg",
                "reviews": 2,
                "rating": 5,
                "description": "The Brown & Black Abaya combines earthy and classic tones to create a truly versatile piece. The dark brown base color is complemented by black accents along the cuffs and hem, giving this abaya a subtle contrast that elevates its aesthetic. Made from a high-quality, wrinkle-resistant fabric, this abaya offers both comfort and durability. Its structured yet flowy design allows for easy movement while maintaining a modest and elegant appearance. This abaya is perfect for a professional setting or a casual day out."
              },
              {
                "id": 4,
                "name": "Floral Black Abaya",
                "price": "$80.00 USD",
                "image": "/abayas/floral black abaya.jpeg",
                "reviews": 5,
                "rating": 4,
                "description": "The Floral Black Abaya is a captivating blend of classic black and delicate floral designs. The intricate floral patterns are embroidered or printed in vibrant colors, providing a striking contrast against the dark black fabric. This abaya is perfect for making a statement while still maintaining a sense of modesty and sophistication. With its long, flowing cut, the Floral Black Abaya offers a flattering silhouette, making it ideal for evening occasions or formal events. Its soft, lightweight fabric ensures comfort throughout the day, while the floral detailing adds a touch of femininity."
              },
              {
                "id": 5,
                "name": "Black Stars Abaya",
                "price": "$85.00 USD",
                "image": "/abayas/stars black and white abaya.jpeg",
                "reviews": 3,
                "rating": 5,
                "description": "The Black Stars Abaya is an elegant and eye-catching piece, perfect for those who love a bold yet sophisticated look. The abaya features a celestial-inspired design, with delicate white stars scattered across the rich black fabric. The contrast between the black background and the white stars creates a striking visual effect, making this abaya ideal for evening wear or special occasions. The full-length design ensures modesty, while the lightweight fabric allows for ease of movement. Whether you're attending a formal event or simply want to add a bit of sparkle to your day, the Black Stars Abaya is a show-stopping choice."
              }
            ]          
        },
        {
            "title": "Summer Collection",
            "products": [
              {
                "id": 6,
                "name": "Beige Abaya",
                "price": "$50.00 USD",
                "image": "/abayas/beige abaya.jpeg",
                "reviews": 1,
                "rating": 5,
                "description": "The Beige Abaya is the epitome of effortless summer elegance. Its soft, neutral beige tone is perfect for staying cool under the sun while maintaining a chic and modest look. Crafted from breathable, lightweight fabric, this abaya offers comfort without compromising on style. The minimalist design is versatile enough to be dressed up with statement accessories or kept simple for a relaxed, everyday look. Ideal for casual outings or warm-weather events, the Beige Abaya is a must-have for any summer wardrobe."
              },
              {
                "id": 7,
                "name": "Cornflower Abaya",
                "price": "$75.00 USD",
                "image": "/abayas/cornFlower blue.jpeg",
                "reviews": 0,
                "rating": 0,
                "description": "Inspired by the delicate petals of the cornflower, this Cornflower Abaya features a soothing, soft blue shade that embodies tranquility and grace. The vibrant yet calming blue fabric flows beautifully, offering a refreshing pop of color for summer days. Its full-length silhouette provides both coverage and breathability, making it ideal for sunny outdoor events or casual outings. Pair it with light accessories to enhance its breezy charm and create a look that feels both stylish and serene."
              },
              {
                "id": 8,
                "name": "Green Abaya",
                "price": "$80.00 USD",
                "image": "/abayas/green abaya.jpeg",
                "reviews": 0,
                "rating": 0,
                "description": "The Green Abaya is a bold and refreshing addition to your summer wardrobe. Its deep green shade draws inspiration from nature, exuding a vibrant and earthy elegance. Made from airy, soft fabric, this abaya keeps you cool and comfortable while adding a splash of color to your outfit. The timeless design, featuring loose, flowing lines, ensures maximum comfort on warm days, making it ideal for casual outings or summer events. Style it with neutral or metallic accessories to complete the look."
              },
              {
                "id": 9,
                "name": "Floral Black Abaya",
                "price": "$90.00 USD",
                "image": "/abayas/floral black abaya.jpeg",
                "reviews": 0,
                "rating": 0,
                "description": "The Floral Black Abaya from the Summer Collection offers a striking contrast of classic black with delicate floral accents. The intricate floral patterns, either embroidered or printed, bring a touch of vibrancy and femininity to the otherwise solid black fabric. Ideal for both day and evening wear, this abaya offers a refined look with a breezy summer feel. The lightweight fabric ensures that it remains comfortable in warmer climates, while the floral detailing adds a dash of summer flair."
              },
              {
                "id": 10,
                "name": "Gray and Black Abaya",
                "price": "$66.00 USD",
                "image": "/abayas/gray and black.jpeg",
                "reviews": 0,
                "rating": 0,
                "description": "The Gray and Black Abaya is a sophisticated and versatile piece, perfect for those who prefer understated elegance. The combination of muted gray and bold black creates a modern, minimalist look that works well for both casual and formal settings. The breathable, lightweight fabric makes this abaya perfect for summer wear, offering style and comfort in one sleek design. The subtle contrast between the two tones adds depth, making it easy to pair with a variety of accessories for a polished, refined look."
              }
            ]
        },          
        {
            "title": "Professional Abayas",
            "products": [
              {
                "id": 11,
                "name": "White and Emerald Abaya",
                "price": "$120.00 USD",
                "image": "/abayas/3 pieces white and emerald .jpeg",
                "reviews": 2,
                "rating": 4,
                "description": "The White and Emerald Abaya offers a sophisticated blend of elegance and bold color. This three-piece set features a crisp white base complemented by striking emerald accents, perfect for creating a professional yet stylish look. The full-length outer layer flows beautifully, while the emerald detailing adds a pop of vibrant color without being overwhelming. The abaya is crafted from high-quality fabric, ensuring comfort throughout long workdays, while the structured design provides a polished, executive finish. This set is ideal for important meetings or professional events where both style and presence are essential."
              },
              {
                "id": 12,
                "name": "Brown Set Abaya",
                "price": "$135.00 USD",
                "image": "/abayas/3 pieces brown abaya.jpeg",
                "reviews": 5,
                "rating": 5,
                "description": "The Brown Set Abaya is a luxurious three-piece ensemble designed for the modern professional woman. Its deep, rich brown color evokes a sense of authority and sophistication, making it an ideal choice for professional settings. The high-quality fabric drapes elegantly, while the tailored fit ensures both comfort and poise. With a matching inner layer and complementary details, this abaya offers a seamless, coordinated look. Whether you're in a business meeting or attending a formal event, the Brown Set Abaya provides a commanding presence with a touch of refined style."
              },
              {
                "id": 13,
                "name": "White and Green Abaya",
                "price": "$150.00 USD",
                "image": "/abayas/3 pieces white and green abaya.jpeg",
                "reviews": 5,
                "rating": 5,
                "description": "The White and Green Abaya is a standout piece for professionals who appreciate a balanced mix of subtlety and boldness. This three-piece set features a pristine white abaya with striking green accents, designed to make a lasting impression. The flowing outer layer is complemented by a matching inner garment, creating a cohesive and professional look. The green details provide just the right amount of contrast, making this abaya suitable for high-profile meetings or formal work events. The high-quality, breathable fabric ensures comfort throughout the day, making it as practical as it is stylish."
              },
              {
                "id": 14,
                "name": "Black and White Abaya",
                "price": "$145.00 USD",
                "image": "/abayas/black and white.jpeg",
                "reviews": 4,
                "rating": 4,
                "description": "The Black and White Abaya is a timeless classic for professionals who prefer a minimalist yet elegant style. The stark contrast between the black and white tones creates a visually striking ensemble that is both bold and refined. Made from premium fabric, this abaya offers a clean, structured silhouette that exudes professionalism. The full-length design provides modesty while maintaining a tailored look, perfect for corporate settings or important work events. This abaya is a versatile addition to any professional wardrobe, offering a polished look for any occasion."
              },
              {
                "id": 15,
                "name": "White and Latte Abaya",
                "price": "$160.00 USD",
                "image": "/abayas/stars 3 pieces white and green abaya.jpeg",
                "reviews": 5,
                "rating": 5,
                "description": "The White and Latte Abaya combines soft, neutral tones with an elegant design, perfect for professionals seeking a refined yet understated look. This three-piece set features a creamy white base paired with subtle latte accents, creating a warm, inviting aesthetic. The flowing outer layer, along with the structured inner piece, ensures a flawless fit that radiates confidence and grace. The premium fabric is lightweight and breathable, making it ideal for long workdays or professional gatherings. The White and Latte Abaya is the perfect choice for those who appreciate simplicity with a touch of sophistication."
              }
            ]
        },          
        {
            "title": "Occasion Abayas",
            "products": [
              {
                "id": 16,
                "name": "Baby Blue & White Abaya",
                "price": "$50.00 USD",
                "image": "/abayas/occasion abaya  (1).jpeg",
                "reviews": 5,
                "rating": 5,
                "description": "The Baby Blue & White Abaya is an exquisite piece, perfect for special occasions where elegance is a must. This abaya features a flowing, graceful design that blends the soft, calming tones of baby blue with crisp white accents. The intricate detailing along the hem and sleeves adds a touch of luxury, while the lightweight fabric ensures comfort throughout any event. Ideal for weddings, celebrations, or formal gatherings, this abaya embodies grace and sophistication."
              },
              {
                "id": 17,
                "name": "Beige Abaya",
                "price": "$70.00 USD",
                "image": "/abayas/occasion abaya  (3).jpeg",
                "reviews": 4,
                "rating": 4,
                "description": "The Beige Abaya is a timeless piece that combines simplicity with understated elegance. Its warm beige tone is perfect for various occasions, offering a refined and sophisticated look without being overly ornate. The flowing silhouette flatters all body types, while the high-quality fabric ensures a comfortable fit. Whether it's a formal dinner or a family gathering, this abaya provides the perfect balance of style and modesty."
              },
              {
                "id": 18,
                "name": "White and Blue Abaya",
                "price": "$90.00 USD",
                "image": "/abayas/occasion abaya  (5).jpeg",
                "reviews": 4,
                "rating": 4,
                "description": "The White and Blue Abaya is a striking piece that features a vibrant combination of colors. The fresh white base is beautifully contrasted by bold blue accents, creating a look that's both modern and timeless. The intricate detailing on the cuffs and neckline adds a touch of sophistication, making this abaya ideal for formal occasions such as parties or evening events. Its lightweight, breathable fabric ensures comfort, while the structured design provides a flattering, elegant fit."
              },
              {
                "id": 19,
                "name": "Purple Abaya",
                "price": "$80.00 USD",
                "image": "/abayas/occasion abaya  (2).jpeg",
                "reviews": 2,
                "rating": 2,
                "description": "The Purple Abaya is designed for those who love to make a statement with bold color. Its rich purple hue is both vibrant and regal, perfect for occasions where you want to stand out. The abaya is crafted from a soft, flowy fabric that drapes beautifully, while the minimalist design keeps the focus on the striking color. This abaya is perfect for evening events or celebrations where you want to showcase your unique style."
              },
              {
                "id": 20,
                "name": "Sand Beige Abaya",
                "price": "$100.00 USD",
                "image": "/abayas/occasion abaya  (4).jpeg",
                "reviews": 3,
                "rating": 3,
                "description": "The Sand Beige Abaya offers a refined, neutral palette that is perfect for both formal and casual occasions. Its soft sand-beige color exudes a sense of calm and grace, while the abaya’s loose, flowing design ensures comfort and ease of movement. With subtle detailing along the edges, this abaya is versatile enough to be dressed up for formal events or worn casually for daytime gatherings. Its timeless design and elegant fabric make it a wardrobe staple for any occasion."
              }
            ]
        },          
        {
            "title": "Jewelry",
            "products": [
              {
                "id": 21,
                "name": "Naimah Jewels 1",
                "price": "$320.00 USD",
                "image": "/jewel/jewel (1).jpeg",
                "reviews": 4,
                "rating": 4,
                "description": "The Naimah Jewels 1 set features an exquisite design that blends timeless elegance with modern craftsmanship. The intricate detailing on this piece makes it perfect for formal events or as a statement piece for special occasions. Its subtle shine and sophisticated design are bound to draw admiration, whether worn with traditional or contemporary attire."
              },
              {
                "id": 22,
                "name": "Naimah Jewels 2",
                "price": "$350.00 USD",
                "image": "/jewel/jewel (2).jpeg",
                "reviews": 5,
                "rating": 5,
                "description": "Naimah Jewels 2 is a luxurious piece that exudes opulence and grace. Crafted with precision, this jewelry set features shimmering stones and a stunning design that catches the light beautifully. Ideal for weddings or grand events, this piece elevates any outfit with its dazzling beauty and timeless appeal."
              },
              {
                "id": 23,
                "name": "Naimah Jewels 3",
                "price": "$300.00 USD",
                "image": "/jewel/jewel (3).jpeg",
                "reviews": 3,
                "rating": 3,
                "description": "Naimah Jewels 3 is a simple yet elegant piece, perfect for adding a touch of charm to everyday wear. Its delicate design makes it versatile enough to complement both casual and formal outfits. The understated beauty of this piece makes it a great choice for those who appreciate subtle elegance in their jewelry."
              },
              {
                "id": 24,
                "name": "Naimah Jewels 4",
                "price": "$400.00 USD",
                "image": "/jewel/jewel (4).jpeg",
                "reviews": 5,
                "rating": 5,
                "description": "Naimah Jewels 4 is a masterpiece of intricate design and craftsmanship. This stunning piece is designed to be the focal point of any ensemble, featuring elaborate detailing and sparkling stones that make it perfect for formal events or special occasions. Its bold, elegant look is ideal for those who want to make a statement with their jewelry."
              },
              {
                "id": 25,
                "name": "Naimah Jewels 5",
                "price": "$500.00 USD",
                "image": "/jewel/jewel (5).jpeg",
                "reviews": 4,
                "rating": 4,
                "description": "The Naimah Jewels 5 set is a breathtaking piece that combines luxury with exquisite craftsmanship. With its radiant shine and intricate detailing, this piece is ideal for brides or anyone looking to add a touch of royalty to their outfit. The luxurious design ensures that this jewelry set will be cherished for years to come."
              },
              {
                "id": 26,
                "name": "Naimah Jewels 6",
                "price": "$300.00 USD",
                "image": "/jewel/jewel (6).jpeg",
                "reviews": 4,
                "rating": 4,
                "description": "Naimah Jewels 6 offers a delicate and refined look, perfect for those who prefer a more understated elegance. Its intricate design is subtle yet captivating, making it a versatile piece that can be worn on various occasions. The piece blends traditional craftsmanship with modern aesthetics, resulting in a timeless accessory."
              },
              {
                "id": 27,
                "name": "Naimah Jewels 7",
                "price": "$50.00 USD",
                "image": "/jewel/jewel (7).jpeg",
                "reviews": 4,
                "rating": 4,
                "description": "Naimah Jewels 7 is a charming and affordable piece, ideal for everyday wear or as a thoughtful gift. Its simple yet elegant design makes it suitable for a variety of outfits and occasions. Despite its modest price, the craftsmanship and attention to detail make it a standout accessory that adds a touch of elegance to any look."
              },
              {
                "id": 28,
                "name": "Naimah Jewels 8",
                "price": "$430.00 USD",
                "image": "/jewel/jewel (4).jpeg",
                "reviews": 4,
                "rating": 4,
                "description": "Naimah Jewels 8 is an exquisite jewelry set that combines opulence with intricate detailing. The design is bold yet graceful, making it perfect for formal occasions or as a statement piece. With its radiant finish and luxurious design, this piece is sure to become a treasured part of your collection."
              }
            ]
        }          
    ];
    
    const currentCollections = isFullView
        ? collections.filter(c => c.title.toLowerCase().replace(/\s+/g, '-') === collectionName)
        : (titles ? collections.filter(c => titles.includes(c.title)) : collections);

        const addToCart = (product) => {
          const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
          const existingItemIndex = existingCartItems.findIndex(item => item.id === product.id);
      
          if (existingItemIndex !== -1) {
              existingCartItems[existingItemIndex].quantity += 1;
          } else {
              // Convert price string to number
              const price = parseFloat(product.price.replace('$', '').replace(' USD', ''));
              existingCartItems.push({...product, price: price, quantity: 1});
          }
      
          localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
      
          window.dispatchEvent(new Event('cartUpdated'));
          window.dispatchEvent(new Event('itemAddedToCart'));
      };
      
    return (
        <div className="collections-container">
          {currentCollections.map(collection => (
            <div key={collection.title} id={collection.title.toLowerCase().replace(/\s+/g, '-')} className="collection-section">
              <h2 className="collection-title">{collection.title}</h2>
              <ProductLayout
                products={isFullView ? collection.products : collection.products.slice(0, 8)}
                expanded={isFullView}
                addToCart={addToCart}
              />
              {!isFullView && (
                <Link
                    to={`/collection/${collection.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="view-all-btn-link"
                >
                    <button className="view-all-btn">View All</button>
                </Link>
              )}
            </div>
          ))}
        </div>
    );
}

export default Collection;
