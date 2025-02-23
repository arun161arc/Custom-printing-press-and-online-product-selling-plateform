// Drag-and-Drop and File Input Handling
const dragDropArea = document.getElementById('dragDropArea');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');

// Highlight drop area when dragging files over it
dragDropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    dragDropArea.style.backgroundColor = '#ecf6ff';
});

// Reset drop area background after dragging ends
dragDropArea.addEventListener('dragleave', () => {
    dragDropArea.style.backgroundColor = '#f9f9f9';
});

// Handle file drop
dragDropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    dragDropArea.style.backgroundColor = '#f9f9f9';
    const files = event.dataTransfer.files;
    handleFiles(files);
});

// Open file input on clicking the browse text
document.querySelector('.browse').addEventListener('click', () => fileInput.click());

// Handle file input change
fileInput.addEventListener('change', () => handleFiles(fileInput.files));

// Validate and display selected files
function handleFiles(files) {
    fileList.innerHTML = '';
    Array.from(files).forEach((file) => {
        if (validateFile(file)) {
            const listItem = document.createElement('p');
            listItem.textContent = `${file.name} - ${Math.round(file.size / 1024)} KB`;
            fileList.appendChild(listItem);
        } else {
            alert(`Invalid file: ${file.name}. Only PDF, JPEG, and PNG files are allowed.`);
        }
    });
}

// Validate file format
function validateFile(file) {
    const validFormats = ['application/pdf', 'image/jpeg', 'image/png'];
    return validFormats.includes(file.type);
}

// Handle form submission
// document.getElementById('printForm').addEventListener('submit', (event) => {
//     event.preventDefault();
//     alert('Order placed successfully!');
// });

document.getElementById('printForm').addEventListener('submit', (event) => {
    event.preventDefault();

    // Show the success overlay
    const successOverlay = document.getElementById('successOverlay');
    successOverlay.classList.add('show');

    setTimeout(() => {
        successOverlay.classList.remove('show');
    }, 2500);

    // Wait for 3 seconds to show animation, then redirect
    setTimeout(() => {
        // Redirect to payment page
        window.location.href = 'payment.html';
    }, 3000); // 3000ms = 3 seconds
});



// for dynamic summery 

// Example: Collect data from upload form and store in localStorage
document.getElementById('printForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const files = Array.from(document.getElementById('fileInput').files);
    const printType = document.getElementById('printType').value;
    const colorType = document.getElementById('colorType').value;
    const copies = parseInt(document.getElementById('copies').value);

    const orderData = { files, printType, colorType, copies };
    localStorage.setItem('orderData', JSON.stringify(orderData));

    // Redirect to checkout page
    
});

