const dessertContainer = document.getElementById("desserts-container");
const showCartBtn = document.getElementById("show-cart-btn");
const cartContainer = document.getElementById("cart-container");
const showCartBtnText = document.getElementById("show-cart-btn-text");
const productsContainer = document.getElementById("products-container");
const cartTotalItems = document.getElementById("cart-total-items");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartTaxes = document.getElementById("cart-taxes");
const cartTotal = document.getElementById("cart-total");
const clearBtn = document.getElementById("clear-btn");
let isCartShowing = false;

const products = [
  {
    id: 1,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
  {
    id: 2,
    name: "French Macaron",
    price: 3.99,
    category: "Macaron",
  },
  {
    id: 3,
    name: "Pumpkin Cupcake",
    price: 3.99,
    category: "Cupcake",
  },
  {
    id: 4,
    name: "Chocolate Cupcake",
    price: 5.99,
    category: "Cupcake",
  },
  {
    id: 5,
    name: "Chocolate Pretzels (4 Pack)",
    price: 10.99,
    category: "Pretzel",
  },
  {
    id: 6,
    name: "Strawberry Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 7,
    name: "Chocolate Macarons (4 Pack)",
    price: 9.99,
    category: "Macaron",
  },
  {
    id: 8,
    name: "Strawberry Pretzel",
    price: 4.99,
    category: "Pretzel",
  },
  {
    id: 9,
    name: "Butter Pecan Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 10,
    name: "Rocky Road Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 11,
    name: "Vanilla Macarons (5 Pack)",
    price: 11.99,
    category: "Macaron",
  },
  {
    id: 12,
    name: "Lemon Cupcakes (4 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
];

products.forEach(({ id, name, price, category }) => {
  dessertContainer.innerHTML += `
    <div class="dessert-card">
      <h2>${name}</h2>
      <p>$${price}</p>
      <p>Category: ${category}</p>
      <button type="button" class="btn add-cart-btn" id=${id}>Add to cart</button>
    </div>
  `;
});

showCartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  if (isCartShowing) {
    cartContainer.classList.remove("hide");
    showCartBtnText.textContent = "Hide";
  } else {
    cartContainer.classList.add("hide");
    showCartBtnText.textContent = "Show";
  }
});

class ShoppingCart {
  constructor() {
    this.items = [];
    this.tax = 8.25;
  }

  addItem(id, items) {
    const item = items.find((item) => item.id === id);
    const { name, price } = item;
    this.items.push(item);

    const totalCountsPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountsPerProduct[dessert.id] =
        (totalCountsPerProduct[dessert.id] || 0) + 1;
    });

    const currentProductCount = totalCountsPerProduct[id];
    const currentProductCountSpan = document.getElementById(
      `product-count-for-id-${id}`
    );
    console.log(currentProductCount);
    console.log(currentProductCountSpan);
    currentProductCount > 1
      ? (currentProductCountSpan.textContent = `${currentProductCount}x `)
      : (productsContainer.innerHTML += `
        <div id="product${id}" class="cart-product">
          <p><span id="product-count-for-id-${id}"></span>${name}</p>
          <p>${price}</p>
        </div>
      `);
    this.calculateTotal();
  }

  calculateTax(amount) {
    return ((this.tax / 100) * amount).toFixed(2);
  }

  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTax(subTotal);
    const total = subTotal + tax;
    cartSubtotal.textContent = `$${subTotal.toFixed(2)}`;
    cartTaxes.textContent = `$${parseFloat(tax).toFixed(2)}`;
    cartTotal.textContent = `$${parseFloat(total).toFixed(2)}`;
    cartTotalItems.textContent = this.items.length;
  }

  clearCart() {
    if (!this.items.length) {
      alert("already empty");
      return;
    }
    const sure = confirm("Are you sure to delete your cart?");
    if (sure) {
      productsContainer.innerHTML = "";
      cartTotalItems.textContent = 0;
      cartSubtotal.textContent = "$0";
      cartTaxes.textContent = "$0";
      cartTotal.textContent = "$0";
      this.items = [];
    }
  }
}

const cart = new ShoppingCart();

const addCartBtns = document.getElementsByClassName("add-cart-btn");
[...addCartBtns].forEach((btn) => {
  btn.addEventListener("click", (event) => {
    cart.addItem(Number(event.target.id), products);
  });
});

clearBtn.addEventListener("click", cart.clearCart.bind(cart));
