

// Retrieve data from localStorage or URL parameters
window.addEventListener('DOMContentLoaded', () => {
    const summaryDetails = document.getElementById('summaryDetails');
    const orderTotal = document.getElementById('orderTotal');

    // Example: Retrieve data from localStorage (you can also use URL parameters)
    const orderData = JSON.parse(localStorage.getItem('orderData')) || {
        files: [],
        copies: 0,
        printType: 'Single-sided',
        colorType: 'Black & White',
    };
    // Generate dynamic order summary
    let totalCost = 0;
    orderData.files.forEach(file => {
        const fileItem = document.createElement('p');
        fileItem.textContent = `${file.name} - ${Math.round(file.size / 1024)} KB`;
        summaryDetails.appendChild(fileItem);
    });

    const details = document.createElement('p');
    details.textContent = `Print Type: ${orderData.printType}, Color: ${orderData.colorType}, Copies: ${orderData.copies}`;
    summaryDetails.appendChild(details);

    // Calculate total cost (e.g., ₹10 per page)
    totalCost = orderData.copies * 10 * orderData.files.length;
    orderTotal.textContent = `₹${totalCost.toFixed(2)}`;
});

// Payment success message display
function displaySuccessMessage() {
    document.getElementById('successMessage').classList.remove('hidden');
}

// Razorpay Payment Integration
document.getElementById('payWithRazorpay').addEventListener('click', () => {
    const options = {
        key: 'your_razorpay_key', // Replace with Razorpay API key
        amount: parseInt(orderTotal.textContent.replace('₹', '')) * 100, // Amount in paise
        currency: 'INR',
        name: 'PrintNest',
        description: 'Print Order Payment',
        handler: function (response) {
            alert('Payment successful: ' + response.razorpay_payment_id);
            displaySuccessMessage();
        },
        prefill: {
            name: 'Arun',
            email: 'arun@example.com',
            contact: '9999999999',
        },
        theme: {
            color: '#3498db',
        },
    };

    const razorpay = new Razorpay(options);
    razorpay.open();
});

// Stripe Payment Integration
document.getElementById('payWithStripe').addEventListener('click', () => {
    fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            amount: parseInt(orderTotal.textContent.replace('₹', '')) * 100,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            window.location = data.url;
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Payment failed!');
        });
});



// JavaScript for Payment Options
document.addEventListener("DOMContentLoaded", () => {
    const paymentCards = document.querySelectorAll(".payment-card");
  
    paymentCards.forEach((card) => {
      card.addEventListener("click", () => {
        // Remove highlight from all cards
        paymentCards.forEach((card) => card.classList.remove("selected"));
  
        // Add highlight to the clicked card
        card.classList.add("selected");
  
        // Display a message or perform an action
        alert(`You selected: ${card.querySelector("h3").innerText}`);
      });
    });
  });
  



// Function to show the QR code popup
function showQRCode(paymentMethod) {
    const qrPopup = document.getElementById('qrPopup');
    const paymentMethodElement = document.getElementById('paymentMethod');
    paymentMethodElement.textContent = `Payment Method: ${paymentMethod}`;
    qrPopup.classList.remove('hidden');
}

// Function to generate a unique order ID
function generateOrderID() {
    // Hide the QR popup
    document.getElementById('qrPopup').classList.add('hidden');

    // Generate a unique alphanumeric order ID
    const orderId = 'PN-' + Math.random().toString(36).substr(2, 9).toUpperCase();

    // Display the order confirmation with the order ID
    const orderConfirmation = document.getElementById('orderConfirmation');
    document.getElementById('orderId').textContent = orderId;
    orderConfirmation.classList.remove('hidden');
}



document.getElementById("trackOrderForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Explicitly use the event object
    alert("poped up")
});
