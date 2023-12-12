function OrderFood() {
    let selectedItems = document.querySelectorAll('input[name="foodItem"]:checked');

    if (selectedItems.length === 0) {
        alert("Please select at least one food item.");
        return;
    }

    document.getElementById('orderFoodBtn').disabled = true;

    let orderStatusDiv = document.getElementById('orderStatus');

    if (!orderStatusDiv) {
        orderStatusDiv = document.createElement('div');
        orderStatusDiv.id = 'orderStatus';
        document.getElementById('section-2').appendChild(orderStatusDiv);
    }
    orderStatusDiv.style.fontWeight = "800";
    orderStatusDiv.innerText = 'Order is pending...';

    let allFoodItems = document.querySelectorAll('.foodImage');
    allFoodItems.forEach(item => {
        item.style.display = 'none';
    });

    let orderPromise = new Promise((resolve) => {
        let processingTime = Math.floor(Math.random() * 5000) + 1000;
        setTimeout(() => {
            resolve();
        }, processingTime);
    });

    orderPromise.then(() => {
        document.getElementById('orderFoodBtn').disabled = false;

        selectedItems.forEach(item => {
            let itemName = item.value;
            let itemImage = document.getElementById(`${itemName}Image`);
            itemImage.style.display = 'block';
        });

        let orderNumber = Math.floor(Math.random() * 1000) + 1;

        document.getElementById('orderNumber').innerText = `Order ID: ${orderNumber}`;
        orderStatusDiv.innerText = 'Order was delivered!';
    });
}



function slider(imgsrc) {
    document.querySelector(".burger").src = imgsrc
}

function toggle() {
    const hamburger = document.querySelector(".toggle")
    hamburger.classList.toggle("show")
    nav = document.querySelector(".nav")
    nav.classList.toggle("show")
    if (hamburger.innerHTML == '<i class="fa fa-times" aria-hidden="true"></i>') {
        hamburger.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>'
    }
    else if (hamburger.innerHTML == '<i class="fa fa-bars" aria-hidden="true"></i>') {
        hamburger.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
    }
}
