/*let products = [];

const createCard = (product) => {
    const productCard =document.createElement('div');
    productCard.className = 'productCard';

    const productThumbnail = document.createElement('img');
    productThumbnail.className = 'productThumbnail';
    productThumbnail.src = product.image;

    const productBottomSheet = document.createElement('div');
    productBottomSheet.className = 'productBottomSheet';

    const productInfoContainer = document.createElement('div');
    productInfoContainer.className = 'productInfoContainer';

    const productName = document.createElement('strong');
    productName.className = 'productName';
    productName.innerText = 'iPhone 20';

    const productPrice = document.createElement('div');
    productPrice.className = 'productPrice';
    productPrice.innerText = '$100';

    const addToCart = document.createElement('button');
    addToCart.className = 'addToCart';
    addToCart.innerText = `+`;

    productInfoContainer.append(productName, productPrice);
    productBottomSheet.append(productInfoContainer, addToCart);
    productCard.append(productBottomSheet,productThumbnail);

    document.querySelector('#productList').appendChild(productCard);
};

const fetchProduct = () => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((productResponse) =>{
        products = productResponse.products;
        console.log(products);

        products.forEach = (product => {
            createCard(product);
        })

        console.log(products);
    }); 

}


for(let i = 0; i < 10; i++){
    createCard();
}*/
/*
let products = [];
const cart = {};

const updateCart = () => {
    let totalPrice = 0;
    document.querySelector('#cartSummary_items').innerHTML = '';

    for (const key of Object.keys(cart)) {
        const item = products.find((product) => {
            return `${product.id}` === key;
        });

        const quantity = cart[key];
        const price = item.price;

        const itemRow = document.createElement('tr');

        const itemName = document.createElement('th');
        itemName.innerText = item.title;

        const itemQuantity = document.createElement('td');
        itemQuantity.innerText = quantity;

        const itemPrice = document.createElement('td');
        itemPrice.innerText = `$${(quantity * price).toFixed(2)}`;

        itemRow.append(itemName, itemQuantity, itemPrice);
        document.querySelector('#cartSummary_items').append(itemRow);

        totalPrice += price * quantity;
    }

    document.querySelector('#cartSummary_total').innerText = `$${totalPrice.toFixed(2)}`;
};

const createCard = (product) => {
    const productCard = document.createElement('div');
    productCard.className = 'productCard';

    const productThumbnail = document.createElement('img');
    productThumbnail.className = 'productThumbnail';
    productThumbnail.src = product.thumbnail;

    const productBottomSheet = document.createElement('div');
    productBottomSheet.className = 'productBottomSheet';

    const productInfoContainer = document.createElement('div');
    productInfoContainer.className = 'productInfoContainer';

    const productName = document.createElement('strong');
    productName.className = 'productName';
    productName.innerText = product.title;

    const productPrice = document.createElement('div');
    productPrice.className = 'productPrice';
    productPrice.innerText = '$' + product.price;

    const addToCart = document.createElement('button');
    addToCart.className = 'addToCart';
    addToCart.innerText = `+`;

    addToCart.addEventListener('click', () => {
        if (cart[product.id] === undefined) cart[product.id] = 0;
        cart[product.id] = cart[product.id] + 1;
        updateCart();
    });

    productInfoContainer.append(productName, productPrice);
    productBottomSheet.append(productInfoContainer, addToCart);
    productCard.append(productThumbnail, productBottomSheet);

    document.querySelector('#productList').appendChild(productCard);
};

const fetchProduct = () => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((productResponse) => {
        products = productResponse.products;
        products.forEach(product => {
            createCard(product);
        });
    });
};

fetchProduct();*/
/*let products = [];
const cart = {};

const updateCart = () => {
    let totalPrice = 0;
    const cartItemsContainer = document.querySelector('#cartSummary_items');
    cartItemsContainer.innerHTML = '';

    for (const key of Object.keys(cart)) {
        const item = products.find((product) => {
            return `${product.id}` === key;
        });
        const quantity = cart[key];
        const price = item.price;

        const itemRow = document.createElement('tr');
        const itemName = document.createElement('th');
        itemName.innerText = item.title;
        const itemQuantity = document.createElement('td');
        itemQuantity.innerText = quantity;
        const itemPrice = document.createElement('td');
        itemPrice.innerText = `$${(quantity * price).toFixed(2)}`;

        itemRow.append(itemName, itemQuantity, itemPrice);
        cartItemsContainer.append(itemRow);

        totalPrice += price * quantity;
    }

    const cartSummaryTotal = document.querySelector('#cartSummary_total td');
    cartSummaryTotal.innerText = `$${totalPrice.toFixed(2)}`;
};

const createCard = (product) => {
    const productCard = document.createElement('div');
    productCard.className = 'productCard';

    const productThumbnail = document.createElement('img');
    productThumbnail.className = 'productThumbnail';
    productThumbnail.src = product.thumbnail;

    const productBottomSheet = document.createElement('div');
    productBottomSheet.className = 'productBottomSheet';

    const productInfoContainer = document.createElement('div');
    productInfoContainer.className = 'productInfoContainer';

    const productName = document.createElement('strong');
    productName.className = 'productName';
    productName.innerText = product.title;

    const productPrice = document.createElement('div');
    productPrice.className = 'productPrice';
    productPrice.innerText = '$' + product.price;

    const addToCart = document.createElement('button');
    addToCart.className = 'addToCart';
    addToCart.innerText = `+`;

    addToCart.addEventListener('click', () => {
        if (cart[product.id] === undefined) cart[product.id] = 0;
        cart[product.id] = cart[product.id] + 1;
        updateCart();
    });

    productInfoContainer.append(productName, productPrice);
    productBottomSheet.append(productInfoContainer, addToCart);
    productCard.append(productThumbnail, productBottomSheet);

    document.querySelector('#productList').appendChild(productCard);
};

const hookViewCart = () => {
    const viewCartButton = document.querySelector('#viewCart');
    viewCartButton.addEventListener('click', () => {
        const cartSummary = document.querySelector('#cartSummary')
        const display = cartSummary.style.display;

        if(display === 'none'){
            cartSummary.style.display = 'block';
        }   else {
            cartSummary.style.display = 'none';
        }
    });
}

const fetchProduct = () => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((productResponse) => {
        products = productResponse.products;
        console.log(products);

        products.forEach(product => {
            createCard(product);
        });
    });
};

fetchProduct();
hookViewCart();*/

let products = [];
const cart = {};

const updateCart = () => {
    let totalPrice = 0;
    const cartItemsContainer = document.querySelector('#cartSummary_items');
    cartItemsContainer.innerHTML = '';

    for (const key of Object.keys(cart)) {
        const item = products.find((product) => {
            return `${product.id}` === key;
        });
        const quantity = cart[key];
        const price = item.price;

        const itemRow = document.createElement('tr');
        const itemName = document.createElement('th');
        itemName.innerText = item.title;
        const itemQuantity = document.createElement('td');
        itemQuantity.innerText = quantity;
        const itemPrice = document.createElement('td');
        itemPrice.innerText = `$${(quantity * price).toFixed(2)}`;

        itemRow.append(itemName, itemQuantity, itemPrice);
        cartItemsContainer.append(itemRow);

        totalPrice += price * quantity;
    }

    const cartSummaryTotal = document.querySelector('#cartSummary_total');
    cartSummaryTotal.innerText = `$${totalPrice.toFixed(2)}`;
};

const createCard = (product) => {
    const productCard = document.createElement('div');
    productCard.className = 'productCard';

    const productThumbnail = document.createElement('img');
    productThumbnail.className = 'productThumbnail';
    productThumbnail.src = product.thumbnail;

    const productBottomSheet = document.createElement('div');
    productBottomSheet.className = 'productBottomSheet';

    const productInfoContainer = document.createElement('div');
    productInfoContainer.className = 'productInfoContainer';

    const productName = document.createElement('strong');
    productName.className = 'productName';
    productName.innerText = product.title;

    const productPrice = document.createElement('div');
    productPrice.className = 'productPrice';
    productPrice.innerText = '$' + product.price;

    const addToCart = document.createElement('button');
    addToCart.className = 'addToCart';
    addToCart.innerText = `+`;

    addToCart.addEventListener('click', () => {
        if (cart[product.id] === undefined) cart[product.id] = 0;
        cart[product.id] = cart[product.id] + 1;
        updateCart();
    });

    productInfoContainer.append(productName, productPrice);
    productBottomSheet.append(productInfoContainer, addToCart);
    productCard.append(productThumbnail, productBottomSheet);

    document.querySelector('#productList').appendChild(productCard);
};

const hookViewCart = () => {
    const viewCartButton = document.querySelector('#viewCart');
    viewCartButton.addEventListener('click', () => {
        const cartSummary = document.querySelector('#cartSummary');
        const display = cartSummary.style.display;

        if (display === 'none') {
            cartSummary.style.display = 'block';
        } else {
            cartSummary.style.display = 'none';
        }
    });
};

const fetchProduct = () => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((productResponse) => {
            products = productResponse.products;
            console.log(products);

            products.forEach(product => {
                createCard(product);
            });
        });
};

fetchProduct();
hookViewCart();
