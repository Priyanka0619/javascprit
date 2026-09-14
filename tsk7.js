/*Task1.
let api="https://fakestoreapi.com/products";

fetch(api)
    .then((data) => data.json())
    .then((products) => {
            products.forEach((product) => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
        });

        let productDetails = products.map((product) => {
            return {
                title: product.title,
                price: product.price
            };
        });

        console.log("Title and Price:", productDetails);

        let expensiveProducts = products.filter((product) => {
            return product.price > 100;
        });

        console.log("Above $100:", expensiveProducts);

        let electronicsProduct = products.find((product) => {
            return product.category === "electronics";
        });

        console.log("First Electronics:", electronicsProduct);

        let totalPrice = products.reduce((total, product) => {
            return total + product.price;
        }, 0);

        console.log("Total Price:", totalPrice);

        let sortedProducts = products.sort((a, b) => {
            return b.price - a.price;
        });

        console.log("High to Low:", sortedProducts);
    })

    .catch((error) => {
        console.log("Error:", error);
    })

    .finally(() => {
        console.log("Completed");
    });  */



/*Task2.
    let api = "https://fakestoreapi.com/products";

fetch(api)
    .then((data) => data.json())
    .then((products) => {

        function countCategory(category) {
            let result = products.filter((product) => {
                return product.category === category;
            });

            return result.length;
        }

        
        let totalProducts = products.length;

        let electronics = countCategory("electronics");
        let jewelery = countCategory("jewelery");
        let mensClothing = countCategory("men's clothing");
        let womensClothing = countCategory("women's clothing");

        let prices = products.map((product) => {
            return product.price;
        });

        let totalPrice = prices.reduce((total, price) => {
            return total + price;
        }, 0);

        let averagePrice = totalPrice / totalProducts;

        let sortedPrices = [...prices].sort((a, b) => {
            return a - b;
        });

        let lowestPrice = sortedPrices[0];
        let highestPrice = sortedPrices[sortedPrices.length - 1];

        console.log(`===== PRODUCT DASHBOARD =====`);

        console.log(`Total Products: ${totalProducts}`);

        console.log(`Electronics: ${electronics}`);
        console.log(`Jewelery: ${jewelery}`);
        console.log(`Men's Clothing: ${mensClothing}`);
        console.log(`Women's Clothing: ${womensClothing}`);

        console.log(`Highest Price: $${highestPrice}`);
        console.log(`Lowest Price: $${lowestPrice}`);
        console.log(`Average Price: $${averagePrice.toFixed(2)}`);
    })

    .catch((error) => {
        console.log(`Error: ${error}`);
    })

    .finally(() => {
        console.log(`Dashboard Completed`);
    });    */

/*Task3.
let userApi = "https://jsonplaceholder.typicode.com/users";
let postApi = "https://jsonplaceholder.typicode.com/posts";

fetch(userApi)
    .then((data) => data.json())
    .then((users) => {

        console.log("===== ALL USER NAMES =====");

        users.forEach((user) => {
            console.log(user.name);
        });


        console.log("===== USER NAME + EMAIL =====");

        users.forEach((user) => {
            console.log(`${user.name} - ${user.email}`);
        });


        let user5 = users.find((user) => {
            return user.id === 5;
        });

        console.log("===== USER ID 5 =====");
        console.log(user5);

        let cityUsers = users.filter((user) => {
            return user.address.city === "TVL";
        });

        console.log("===== USERS FROM TVL =====");
        console.log(cityUsers);
        return fetch(postApi);
    })

    .then((data) => data.json())
    .then((posts) => {

        let user1Posts = posts.filter((post) => {
            return post.userId === 1;
        });

        console.log("===== POSTS BY USER ID 1 =====");

        user1Posts.forEach((post) => {
            console.log(post.title);
        });

        let postCount = user1Posts.length;

        console.log(`User ID 1 created ${postCount} posts`);

        let longTitlePost = posts.find((post) => {
            return post.title.length > 50;
        });

        console.log("===== FIRST LONG TITLE POST =====");
        console.log(longTitlePost);
    })


    .catch((error) => {
        console.log(`Error: ${error}`);
    }); */


/*Task4.

let api = "https://fakestoreapi.com/products";

let category = prompt("Enter product category:");

let maxPrice = Number(prompt("Enter maximum price:"));

function searchProducts(products) {

    let result = products.filter((product) => {
        return product.category === category &&
               product.price <= maxPrice;
    });

    return result;
}

fetch(api)
    .then((data) => data.json())
    .then((products) => {

        let result = searchProducts(products);

        console.log("===== SEARCH RESULTS =====");

        result.forEach((product) => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Category: ${product.category}`);
            console.log("-------------------------");
        });
    })

    .catch((error) => {
        console.log(`Error: ${error}`);
    });    */


/*Task5.
let api = "https://fakestoreapi.com/products";

fetch(api)
    .then((data) => data.json())
    .then((products) => {

        console.log("===== AVAILABLE PRODUCTS =====");

        products.forEach((product) => {
            console.log(`ID: ${product.id} | ${product.title} | $${product.price}`);
        });


        let input = prompt("Enter product IDs separated by comma:");
        let ids = input.split(",").map((id) => Number(id));
        let cart = products.filter((product) => {
            return ids.includes(product.id);
        });

        let total = cart.reduce((sum, product) => {
            return sum + product.price;
        }, 0);

        let discount = 0;

        if (total > 200) {
            discount = 20;
        }
        else if (total > 100) {
            discount = 10;
        }

        let discountAmount = total * discount / 100;

        let finalAmount = total - discountAmount;

        console.log("===== CART =====");

        cart.forEach((product, index) => {
            console.log(`Product ${index + 1}: ${product.title}`);
            console.log(`Price: $${product.price}`);
        });

        console.log(`Total: $${total.toFixed(2)}`);
        console.log(`Discount: ${discount}%`);
        console.log(`Final Amount: $${finalAmount.toFixed(2)}`);
    })

    .catch((error) => {
        console.log(`Error: ${error}`);
    });
*/



/*Task6.
let apiLink = "https://fakestoreapi.com/products";

fetch(apiLink)
    .then((data) => data.json())
    .then((products) => {

        console.log("========== ALL PRODUCTS ==========");

        products.forEach((product) => {
            console.log(`${product.id}. ${product.title} - $${product.price}`);
        });

        console.log(`\nTotal Products: ${products.length}`);

        let productNames = products.map((product) => {
            return product.title;
        });

        console.log("\nProduct Names:");

        productNames.forEach((name) => {
            console.log(`- ${name}`);
        });

        let expensiveProducts = products.filter((product) => {
            return product.price > 100;
        });

        console.log("\nProducts Above $100:");

        expensiveProducts.forEach((product) => {
            console.log(`${product.title} - $${product.price}`);
        });

        let electronicsProduct = products.find((product) => {
            return product.category === "electronics";
        });

        console.log("\nElectronics Product:");
        console.log(`${electronicsProduct.title} - $${electronicsProduct.price}`);

        let totalPrice = products.reduce((total, product) => {
            return total + product.price;
        }, 0);

        console.log(`\nTotal Product Value: $${totalPrice.toFixed(2)}`);

        let anyAbove500 = products.some((product) => {
            return product.price > 500;
        });

        console.log(`\nAny Product Above $500: ${anyAbove500}`);

        let allAbove1 = products.every((product) => {
            return product.price > 1;
        });

        console.log(`All Products Above $1: ${allAbove1}`);

        let sortedProducts = [...products].sort((a, b) => {
            return b.price - a.price;
        });

        console.log("\nHighest → Lowest:");

        sortedProducts.forEach((product) => {
            console.log(`${product.title} - $${product.price}`);
        });
    })
    .catch((error) => {
        console.log(`Error: ${error}`);
    })
    .finally(() => {
        console.log("\n========== REPORT COMPLETED ==========");
    });   */