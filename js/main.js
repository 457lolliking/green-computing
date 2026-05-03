// Dark mode + nav active state
document.addEventListener('DOMContentLoaded', () => {
    // Dark mode
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) document.body.classList.add('dark');

    // Active nav
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(a => {
        if (a.getAttribute('href') === page) a.classList.add('active');
    });
});

function toggleDarkMode() {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}

// CO2 Calculator for solutions.html
function calculateCO2() {
    const hours = parseFloat(document.getElementById('hours').value) || 0;
    const watts = parseFloat(document.getElementById('watts').value) || 65;
    const kwh = (hours * watts * 365) / 1000; // yearly
    const co2 = (kwh * 0.4).toFixed(1); // 0.4kg CO2/kWh avg
    const trees = (co2 / 21).toFixed(1); // 1 tree absorbs ~21kg CO2/year

    document.getElementById('calc-result').innerHTML = `
        <strong>${kwh.toFixed(0)} kWh/year</strong> ≈ <strong>${co2} kg CO₂</strong><br>
        That's the same as what <strong>${trees} trees</strong> absorb yearly.
    `;
}

// Fake form handler for contact.html
function submitForm(e) {
    e.preventDefault();
    alert('Thanks! This is a demo. Use Formspree.io to make this form real.');
}