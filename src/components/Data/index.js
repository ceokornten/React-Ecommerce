const products = [
  {
    id: 1,
    name: "Brown Shirt",
    description: "Brown T-Shirt for Women",
    price: 16.99,
    gender: "women",
    type: "shirt",
    img: "http://www194.lunapic.com/do-not-link-here-use-hosting-instead/15028111535986?3139854348",
  },
  {
    id: 2,
    name: "Light Brown Shirt",
    description: "Light Brown Shirt for Women",
    price: 4.99,
    gender: "women",
    type: "shirt",
    img: "http://www194.lunapic.com/do-not-link-here-use-hosting-instead/15028111535986?2480366933",
  },
  {
    id: 3,
    name: "Women Grey Shirt",
    description: "Grey Shirt for Women",
    price: 14.99,
    gender: "women",
    type: "shirt",
    img: "http://www194.lunapic.com/do-not-link-here-use-hosting-instead/15028111535986?964812911",
  },
  {
    id: 4,
    name: "Warm Shirt Women",
    description: "Woolen Hoodie Women",
    price: 20.00,
    gender: "women",
    type: "shirt",
    img: "http://www194.lunapic.com/do-not-link-here-use-hosting-instead/15028111535986?2436126559",
  },
  {
    id: 5,
    name: "Women Grey Shirt",
    description: "Light Grey Shirt for Women",
    price: 4.99,
    gender: "women",
    type: "shirt",
    img: "http://www194.lunapic.com/do-not-link-here-use-hosting-instead/15028111535986?8769278597",
  },
  {
    id: 6,
    name: "Women Red/Brown Shirt",
    description: "Red/Brown Blouse for Women",
    price: 19.99,
    gender: "women",
    type: "blouse",
    img: "http://www194.lunapic.com/do-not-link-here-use-hosting-instead/15028111535986?4620512067",
  },
  {
    id: 7,
    name: "Dark Grey Shirt Women",
    description: "Dark Grey Shirt for Women",
    price: 6.00,
    gender: "women",
    type: "shirt",
    img: "http://www194.lunapic.com/do-not-link-here-use-hosting-instead/15028111535986?9633736876",
  },
  {
    id: 8,
    name: "White Shirt Women",
    description: "White Shirt for Women",
    price: 14.99,
    gender: "women",
    type: "shirt",
    img: "http://www194.lunapic.com/do-not-link-here-use-hosting-instead/15028111535986?1042724615",
  },
  {
    id: 9,
    name: "Long Grey Shirt Women",
    description: "Grey Shirt for Women",
    price: 20.99,
    gender: "women",
    type: "shirt",
    img: "http://www194.lunapic.com/do-not-link-here-use-hosting-instead/15028111535986?4788105246",
  },
  {
    id: 10,
    name: "No Shoulder Hoodie",
    description: "Hoodie for Women",
    price: 4.99,
    gender: "women",
    type: "shirt",
    img: "http://www194.lunapic.com/do-not-link-here-use-hosting-instead/15028111535986?7978956723",
  },
  {
    id: 11,
    name: "Women Watch Gold",
    description: "Golden Watch for Women",
    price: 45.99,
    gender: "women",
    type: "watch",
    img: "https://images.pexels.com/photos/69046/watch-wrist-watch-packshot-time-69046.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  },
  {
    id: 12,
    name: "Black Pearl Necklace",
    description: "Black Pearl Necklace for Women",
    price: 14.99,
    gender: "women",
    type: "necklace",
    img: "https://images.pexels.com/photos/221550/pexels-photo-221550.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
  },
  {
    id: 13,
    name: "Man Black Shirt",
    description: "Black T-Shirt for Men",
    price: 10.99,
    gender: "men",
    type: "shirt",
    img: "http://media.istockphoto.com/photos/smiling-young-man-in-blank-black-tshirt-picture-id464946525?k=6&m=464946525&s=612x612&w=0&h=KAjCFoJGDcFcx8R33Tq1vzqbfixh1XwGpFeiRNoTkRQ=",
  },
  {
    id: 14,
    name: "Man Grey Tanktop",
    description: "Grey Tanktop for Men",
    price: 14.99,
    gender: "men",
    type: "shirt",
    img: "http://media.istockphoto.com/photos/portrait-of-young-man-wearing-tshirt-picture-id465207699?k=6&m=465207699&s=612x612&w=0&h=wSacC0bmcrekig1DW8lOwH7y3X0e4R9266-TuivVQJA=",
  },
  {
    id: 15,
    name: "Man White Shirt",
    description: "White Shirt for Men",
    price: 20.99,
    gender: "men",
    type: "shirt",
    img: "http://media.istockphoto.com/photos/young-man-wearing-a-white-shirt-picture-id465331977?k=6&m=465331977&s=612x612&w=0&h=-K3c5eE2dZGmg6d5BrBfxOvcHRP7PwHrylyjuEVjbZo=",
  },
  {
    id: 16,
    name: "Man Brown Shirt",
    description: "Brown Shirt for Men",
    price: 13.99,
    gender: "men",
    type: "shirt",
    img: "http://media.istockphoto.com/photos/young-man-looks-to-the-side-picture-id184616842?k=6&m=184616842&s=612x612&w=0&h=SmtsffRByKDH4_HtzGY8bWvHgH8o_4epWVPogvfJXnk=",
  },
  {
    id: 17,
    name: "Man Black Tie",
    description: "Black Tie for Men",
    price: 13.99,
    gender: "men",
    type: "tie",
    img: "http://image.11st.my/g3/2/7/4/6/7/1/1274671_B_V5.jpg",
  },
  {
    id: 18,
    name: "Black Shirt Men",
    description: "Black Shirt for Men",
    price: 9.99,
    gender: "men",
    type: "shirt",
    img: "http://media.istockphoto.com/photos/smiling-man-in-a-black-t-shirt-picture-id520883622?k=6&m=520883622&s=612x612&w=0&h=XuxfQE0EOo_uWqA8SzNJvZ9Vn-sKR_cT4J9GRIudE4U=",
  },
  {
    id: 19,
    name: "4-Pack Man Ties",
    description: "Ties for Men",
    price: 35.99,
    gender: "men",
    type: "tie",
    img: "http://www.theethicalman.com/uploads/4/8/0/0/4800645/3035404_orig.png",
  },
  {
    id: 20,
    name: "Man Black Tie",
    description: "Black Tie for Men",
    price: 15.99,
    gender: "men",
    type: "tie",
    img: "http://static.becomegorgeous.com/img/articles/what_does_your_mans_tie_tell_about_his_personality_.jpg",
  },
];

export default products;
