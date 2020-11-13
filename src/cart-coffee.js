//variables


const coffeebtn = document.querySelector(".coffee-btn");
const closeCartBtn = document.querySelector(".close-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");


//cart
let cart = [];


	

class coffeeUI {
	//-------------------------------Coffee Cart logic starts--------------------------------------//
	clickEvents() {
			button.addEventListener("click", (event) => {
			
				this.setCartValues(cart);
				
				this.addCartItem(cartItem);
			
				this.showCart();
			});
		
	}
		

  addCartItem(item) {
		// const div = document.createElement("div");
		// div.classList.add("cart-item");
		cartContent.innerHTML = `<img width="100px" height="100px" src="./images/coffee.svg" alt="product" />
						<div>
							<h4>Caramel Macchiato Grande</h4				
							<h5>$4.45</h5>
							<span class="remove-item">reset</span>
						</div>
						<div>
							<i class="fa fa-chevron-up"></i>
							<p class="item-amount">1</p>
							<i class="fas fa-chevron-down"></i>
						</div>				
						`;
		// cartContent.appendChild(div);

		const itemAmount = document.querySelector(".item-amount")
		const clearCartBtn = document.querySelector(".remove-item");	
	}
	showCart() {
		cartOverlay.classList.add("transparentBcg");
		cartDOM.classList.add("showCart");
	}
	setupApp() {
		this.setCartValues(cart);
		this.populateCart(cart);
		coffeebtn.addEventListener("click", this.showCart);
		coffeebtn.addEventListener("click", this.addCartItem);
		closeCartBtn.addEventListener("click", this.hideCart);
		// clearCartBtn.addEventListener("click", this.clearCart);

	}
	populateCart(cart) {
		cart.forEach((item) => this.addCartItem(item));
	}


	setCartValues(cart) {		
		let tempTotal = 4.45;
		let itemsTotal = 0;
		cart.map((item) => {
			tempTotal += 4.45 * itemAmount;
			itemsTotal += itemAmount;
		});
		cartTotal.innerText = parseFloat(tempTotal.toFixed(3));
		cartItems.innerText = itemsTotal;

		console.log("do you see this");
		
	}

	cartLogic() {	
		//"this" in callback function points to the UI class
		//clear cart button
		clearCartBtn.addEventListener("click", () => {
			this.clearCart();
		});
		//cart functionality
		//event bubbling
		itemAmount.addEventListener("click", (event) => {
			if (event.target.classList.contains("remove-item")) {
				itemsTotal = 0;
			} else if (event.target.classList.contains("fa-chevron-up")) {
				itemsTotal.amount++;
			} else if (event.target.classList.contains("fa-chevron-down")) {
				itemsTotal.amount--;
			}
			itemsTotal.textContent = itemAmount;
            

		});
	}
	
	hideCart() {
		cartOverlay.classList.remove("transparentBcg");
		cartDOM.classList.remove("showCart");
	}

	clearCart() {
		// let cartItems = cart.map((item) => item.id);
		// cartItems.forEach((id) => this.removeItem(id));
		// while (cartContent.children.length > 0) {
		// 	cartContent.removeChild(cartContent.children[0]);
		// }
		this.hideCart();
	}

	removeItem(id) {
		cart = cart.filter((item) => item.id !== id);
		this.setCartValues(cart);
		let button = this.getSingleButton(id);
		button.disabled = false;
		button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to DA cart;`;
	}

}


//-------------------------------Coffee Cart logic ends---------------------------------------------------------------------//
