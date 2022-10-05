import React from "react";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Shrek and Lord Farquaard would have been a better couple",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://cdn.vox-cdn.com/thumbor/G-1NflyTguj-celipDJWBkGmJ3E=/0x0:3000x2000/1200x675/filters:focal(1230x515:1710x995)/cdn.vox-cdn.com/uploads/chorus_image/image/69303818/Shrek2.0.jpg",
    },
    {
      id: 2,
      title: "Felt cute, might delete later",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://preview.redd.it/f4hxtei3qyv11.jpg?auto=webp&s=65490146a3a0a06e11525a35e091642cdf8e1c7f",
    },
    {
      id: 3,
      title: "Isn't ketchup not just a smoothie? Welcome to my Ted Talk",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://m.media-amazon.com/images/I/812qaP39CfL._SL1500_.jpg",
    },
    {
      id: 4,
      title:
        "How do yall feel about the new Tesla? I think it's straight buzzin!",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://www.moneyshake.com/shaking-news/wp-content/uploads/2021/02/030f386b099ceddc89cede381620f58eee2cf568.jpeg",
    },
  ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
