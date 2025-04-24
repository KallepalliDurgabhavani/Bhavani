// script.js

document.addEventListener("DOMContentLoaded", function () {
    const products = [
    { id: 1, name: "HP Laptop", category: "Laptop", price: 52000, discount: 10, img: "https://m.media-amazon.com/images/I/71So2NW90FL.jpg" },
    { id: 2, name: "Dell Laptop", category: "Laptop", price: 60000, discount: 15, img: "https://5.imimg.com/data5/KU/QR/MY-10167030/dell-laptops.jpg" },
    { id: 3, name: "iPhone 14", category: "Mobile", price: 75000, discount: 5, img: "https://inspireonline.in/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605206" },
    { id: 4, name: "Samsung Galaxy", category: "Mobile", price: 40000, discount: 12, img: "https://media.croma.com/image/upload/v1740666239/Croma%20Assets/Communication/Mobiles/Images/311654_0_tfbew7.png" },
    { id: 5, name: "Fire-Boltt Ninja", category: "Smartwatch", price: 1999, discount: 25, img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/g/x/q/42-5-fire-boat-12-android-ios-mrexporter-yes-original-imah2e4bggm2aa7y.jpeg?q=20&crop=false" },
    { id: 6, name: "Boat Watch", category: "Smartwatch", price: 2499, discount: 20, img: "https://www.boat-lifestyle.com/cdn/shop/files/LunarVista-FI_Black01.png?v=1694435378" },
    { id: 7, name: "Lenovo Laptop", category: "Laptop", price: 58000, discount: 18, img: "https://p1-ofp.static.pub//fes/cms/2024/07/17/072qc6ainvtod7syg4tyfato3zpjlb892347.png" },
    { id: 8, name: "OnePlus 11R", category: "Mobile", price: 45000, discount: 10, img: "https://m.media-amazon.com/images/I/61nxQ62qglL._AC_UF1000,1000_QL80_.jpg" },
    { id: 9, name: "Noise ColorFit", category: "Smartwatch", price: 2998, discount: 22, img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/20795182/2022/11/21/410c66ee-a0e9-47c6-955a-36416c4a696f1669020148036-Noise-ColorFit-Icon-2-Smartwatch---Deep-Wine-138166902014755-1.jpg" },
    { id: 10, name: "ASUS VivoBook", category: "Laptop", price: 47000, discount: 14, img: "https://m.media-amazon.com/images/I/71Hy5SYr3tL.jpg" },
    { id: 11, name: "Realme Narzo", category: "Mobile", price: 16000, discount: 8, img: "https://sathya.in/media/95455/catalog/01%20(128).jpg" },
    { id: 12, name: "Amazfit Bip U", category: "Smartwatch", price: 3999, discount: 30, img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/g/x/q/-original-imaghhzqnxjnxhqf.jpeg?q=90&crop=false" },
    { id: 13, name: "Lakme Lipstick", category: "Lipstick", price: 499, discount: 20, img: "https://shop.lakmesalon.in/cdn/shop/files/29663_H-8901030974021.jpg?v=1699355842&width=1946" },
    { id: 14, name: "Maybelline Mascara", category: "Beauty", price: 399, discount: 15, img: "https://m.media-amazon.com/images/I/71DTwHnZ6HL.jpg" },
    { id: 15, name: "Fashion T-Shirt", category: "Dress", price: 799, discount: 25, img: "https://www.muscletech.in/wp-content/uploads/2024/05/mt-round-neck-white-tshirt-men-600x600.webp" },
    { id: 16, name: "Denim Jeans", category: "Jeans", price: 1299, discount: 30, img: "https://levi.in/cdn/shop/files/A70900040_Front.jpg?v=1718361599" },
    { id: 17, name: "Nivea Cream", category: "Beauty", price: 299, discount: 10, img: "https://m.media-amazon.com/images/I/61UP6RvA9wL.jpg" },
    { id: 18, name: "Pond's Face Wash", category: "Beauty", price: 199, discount: 18, img: "https://m.media-amazon.com/images/I/512dChFNuXL.jpg" },
    { id: 19, name: "Men's Casual Shirt", category: "Dress", price: 999, discount: 35, img: "https://assets.ajio.com/medias/sys_master/root/20240712/FHvR/66905aec6f60443f31eba963/-1117Wx1400H-700183905-pink-MODEL.jpg" },
    { id: 20, name: "Women's Kurti", category: "Dress", price: 1499, discount: 28, img: "https://www.ethnicrajasthan.com/cdn/shop/files/ETHNICRAJASTHANAPKUSCCSPLCFL28001NC_3_d2aeb720-145a-41ed-b2a2-25183d9f1fb8.jpg?v=1694585302" },
    { id: 21, name: "L'Oreal Lipstick", category: "Lipstick", price: 550, discount: 18, img: "https://assets.ajio.com/medias/sys_master/root/20240903/7rDz/66d6d9066f60443f314c96b9/-473Wx593H-4944472110-601worthit-MODEL.jpg" },
    { id: 22, name: "Elle 18 Lipstick", category: "Lipstick", price: 250, discount: 20, img: "https://m.media-amazon.com/images/I/51wfesn2ZUL._AC_UF1000,1000_QL80_.jpg" },
    { id: 23, name: "Colorbar Matte Lipstick", category: "Lipstick", price: 599, discount: 22, img: "https://www.colorbarcosmetics.com/media/catalog/product/l/i/lips-lipstick-take-me-as-i-am-flirtatious-pink-1_1.jpg?optimize=low&bg-color=255,255,255&fit=bounds&height=&width=" },
    { id: 24, name: "Sugar Smudge Me Not Lipstick", category: "Lipstick", price: 699, discount: 25, img: "https://m.media-amazon.com/images/I/51Jm637YhiL._AC_UF1000,1000_QL80_.jpg" },
    { id: 25, name: "Pepe Jeans", category: "Jeans", price: 1699, discount: 15, img: "https://rukminim3.flixcart.com/image/850/1000/xif0q/jean/x/n/z/32-pm207429q05-pepe-jeans-original-imagt2uknvawbp4d.jpeg?q=90&crop=false" },
    { id: 26, name: "Levi's Jeans", category: "Jeans", price: 2199, discount: 20, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybDwFqDG3QwBB3vXli5uXzfT7j0juktkfIQ&s" },
    { id: 27, name: "H&M Trousers", category: "Jeans", price: 1899, discount: 22, img: "https://image.hm.com/assets/hm/16/7a/167a50386c7cd1e4623c4192fd6b726ffefe172b.jpg?imwidth=768" },
    { id: 28, name: "MAC Lipstick", category: "Lipstick", price: 999, discount: 18, img: "https://sdcdn.io/mc/mac_sku_NY9N37_3000x3000_0S.png?height=700px&width=700px" },
    { id: 29, name: "Lakme Eyeconic Kajal", category: "Beauty", price: 249, discount: 15, img: "https://rukminim2.flixcart.com/image/850/1000/l51d30w0/kajal/p/a/d/5-eyeconic-kajal-and-liquid-eyeliner-lakme-original-imagft23ys9derz9.jpeg?q=90&crop=false" },
    { id: 30, name: "Titan Watch", category: "Accessories", price: 3499, discount: 12, img: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4cf4967e/images/Titan/Catalog/9441YM01_1.jpg?sw=600&sh=600" },
    { id: 31, name: "Ray-Ban Sunglasses", category: "Accessories", price: 4999, discount: 18, img: "https://india.ray-ban.com/media/catalog/product/cache/9198bde1d0eff71feec5e39d680e88c5/8/0/805289304449_4.jpg" }
  ];

  let cart = [];

  function displayProducts(items) {
    const container = document.getElementById("product-list");
    container.innerHTML = "";
    items.forEach((item) => {
      container.innerHTML += `
        <div class="product">
          <img src="${item.img}" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p class="price">₹${item.price - (item.price * item.discount) / 100}</p>
          <p class="discount">${item.discount}% off</p>
          <button onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
      `;
    });
  }

  displayProducts(products);

  window.filterCategory = function (category) {
    if (category === "All") {
      displayProducts(products);
    } else {
      const filtered = products.filter(p => p.category === category);
      displayProducts(filtered);
    }
  }

  window.addToCart = function (id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    document.getElementById("cart-count").innerText = cart.length;
    updateCart();
  }

  function updateCart() {
    const cartSection = document.getElementById("cart-items");
    const total = document.getElementById("total-amount");
    cartSection.innerHTML = "";
    let sum = 0;

    cart.forEach((item, index) => {
      const discountedPrice = item.price - (item.price * item.discount) / 100;
      sum += discountedPrice;
      cartSection.innerHTML += `
        <div>
          ${item.name} - ₹${discountedPrice.toFixed(2)}
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      `;
    });

    total.innerText = sum.toFixed(2);
  }

  window.removeItem = function (index) {
    cart.splice(index, 1);
    document.getElementById("cart-count").innerText = cart.length;
    updateCart();
  }

  document.getElementById("cart-btn").addEventListener("click", () => {
    const cartSection = document.getElementById("cart-section");
    cartSection.style.display = cartSection.style.display === "none" ? "block" : "none";
  });

  window.placeOrder = function () {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Order placed successfully!");
    cart = [];
    document.getElementById("cart-count").innerText = 0;
    updateCart();
    document.getElementById("cart-section").style.display = "none";
  }

  window.searchProducts = function () {
    const query = document.getElementById("search").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filtered);
  }


 const loginLink = document.querySelector("nav a[href='#']");

  loginLink.addEventListener("click", function (e) {
    e.preventDefault();
    if (!loggedIn) {
      const username = prompt("Enter username:");
      const password = prompt("Enter password:");
      if (username === "user" && password === "pass") {
        loggedIn = true;
        loginLink.textContent = "Logout";
        alert("Logged in successfully");
      } else {
        alert("Invalid login details");
      }
    } else {
      loggedIn = false;
      loginLink.textContent = "Login";
      alert("Logged out successfully");
    }
  });
});