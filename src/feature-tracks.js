//-------------------------------Feature Tracks logic starts------------------------------------//
export const productsDOM = document.querySelector(".products-center");

//getting the products
export class Products {
	async getProducts() {
		try {
			let result = await fetch("products.json");
			let data = await result.json();

			let products = data.items;
			products = products.map((item) => {
				const { title, price } = item.fields;
				const { id } = item.sys;
				const image = item.fields.image.fields.file.url;
                const link = item.fields.link;
				return { title, price, id, image, link };
			});
			return products;
		} catch (error) {
			console.log(error);
		}
	}
}

//ui class - display products
export class UI {
	displayProducts(products) {
		let result = "";
		products.forEach((product) => {
			result += `
                <article class="product">
                    <div class="img-container">
                      
						<iframe class="feature-videos" src="${product.link}" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
                        <button class="bag-btn" data-id=${product.id}>
                            <i class="fas fa-shopping-cart"></i>
							add to cart
						</button>
                    </div>
                    <h3>${product.title}</h3>
                    <h4>$${product.price}</h4>
				</article>
                `;
		});
		productsDOM.innerHTML = result;
	}
}
	//-------------------------------Feature Tracks logic ends------------------------------------//