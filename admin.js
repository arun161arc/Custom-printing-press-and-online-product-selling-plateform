// Pie Chart for Sales Distribution
const salesCtx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(salesCtx, {
  type: 'pie',
  data: {
    labels: ['Tshirt', 'Mug ', 'Digital','Brochure','Flex'],
    datasets: [{
      data: [40, 20, 10 ,15 ,15],
      backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF' ],
    }]
  },
  options: {
    responsive: true
  }
});

// Bar Chart for Weekly Visits
const visitCtx = document.getElementById('visitChart').getContext('2d');
const visitChart = new Chart(visitCtx, {
  type: 'bar',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: 'Visitors',
      data: [200, 400, 300, 500, 700, 600, 800],
      backgroundColor: '#3498db',
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});
