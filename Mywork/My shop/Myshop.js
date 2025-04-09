const products = [
    { id: 1, name: "Bag", price: 12999, image: "bag.png" },
    { id: 2, name: "Watch", price: 61299, image: "clock.png" },
    { id: 3, name: "Food", price: 499, image: "food.png" },
    { id: 4, name: "Gun", price: 33999, image: "gun.png" },
    { id: 5, name: "Nintendo Switch", price: 9999, image: "ntd.png" },
    { id: 6, name: "Pant", price: 299, image: "pant.png" },
    { id: 7, name: "PC", price: 11111, image: "pc.png" },
    { id: 8, name: "Shirt", price: 359, image: "shirt.png" }
];

    let sum = 0;

function addProduct(productName) {
    const productsList = document.getElementById('taskList');

    // ค้นหาสินค้าในอาร์เรย์
    const product = products.find(item => item.name.toLowerCase() === productName.toLowerCase());

    if (product) {
        const newList = document.createElement('div');
        newList.classList.add('bg-gray-100', 'p-4', 'rounded-lg', 'shadow-md', 'flex', 'items-center', 'gap-4');

        // เพิ่มข้อมูลสินค้า
        newList.innerHTML = `
            <img src="${product.image}" class="w-12 h-12 object-cover rounded">
            <p class="text-lg font-medium">${product.name} - ฿${product.price}</p>
            <img src="trash1.svg" alt="Delete Task" class="w-6 h-6 ml-2 cursor-pointer" onclick="removeTask(this, ${product.price})">
        `;

        productsList.appendChild(newList);

        sum += product.price; // เพิ่มราคาสินค้าเข้า sum
        updateTotalPrice();
    } else {
        console.error("Product not found");
    }
}

    function removeTask(img, price) {
        img.parentElement.remove(); // ลบ element ของสินค้านั้นออกจาก list
        sum -= price; // ลดราคาสินค้านั้นออกจาก sum
        updateTotalPrice();
    }
    

    function updateTotalPrice() {
        document.getElementById('totalPrice').textContent = `Total: ฿${sum.toLocaleString()}`;
    }

    function checkout() {
        if (sum === 0) {
            alert("Your cart is empty!");
            return;
        }

        const totalPriceElem = document.getElementById('totalPrice');
        totalPriceElem.style.color = "red"; 
        totalPriceElem.textContent = `Paid: ฿${sum.toLocaleString()}`;

        setTimeout(() => {
            sum = 0;
            document.getElementById('taskList').innerHTML = "";
            updateTotalPrice();
            totalPriceElem.style.color = "black"; 
            alert("Purchase successful!");
        }, 1500);
    }
    

