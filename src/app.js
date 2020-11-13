
// const itemAmount = document.querySelector(".item-amount");


//----------------------------------------Event Listeners for Feature Tracks and Cart portion starts------------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
	const ui = new UI();
	const coffeeui = new coffeeUI();
	const products = new Products();
	//setup app
	ui.setupApp();

	//get all products
	products
		.getProducts()
		.then((products) => {
			ui.displayProducts(products);
			coffeeui.setCartValues(cart);
			// Storage.saveProducts(products);
		})
		.then(() => {
			ui.clickEvents();
			ui.cartLogic();
		});

		
});

//----------------------------------------Event Listeners for Feature Tracks and Cart portion ends------------------------------------------//



