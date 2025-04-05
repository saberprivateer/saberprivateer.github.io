// Global variables
let chart = null;
const formatter = (typeof Intl !== 'undefined' && Intl.NumberFormat) ? 
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }) : {
        format: (value) => `$${Math.round(value).toLocaleString('en-US')}`
    };

// Initialize the calculator
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for the monthly/yearly inputs
    setupInputListeners();

    // Initial calculations
    calculateTotals();
    calculateRetirement();
});

// Set up input event listeners
function setupInputListeners() {
    document.querySelectorAll('.monthly-input').forEach(input => {
        input.addEventListener('input', function() {
            updateYearlyValue(this);
            calculateTotals();
        });
    });

    document.querySelectorAll('.yearly-input').forEach(input => {
        input.addEventListener('input', function() {
            updateMonthlyValue(this);
            calculateTotals();
        });
    });

    // Add listeners for the assumption inputs
    document.querySelectorAll('#assumptions-table input').forEach(input => {
        input.addEventListener('change', calculateRetirement);
    });
}

// Update monthly value when yearly value changes
function updateMonthlyValue(yearlyInput) {
    const rowIndex = yearlyInput.dataset.row;
    const yearlyValue = parseFloat(yearlyInput.value) || 0;
    const monthlyInput = document.querySelector(`.monthly-input[data-row="${rowIndex}"]`);
    if (monthlyInput) {
        monthlyInput.value = (yearlyValue / 12).toFixed(2);
    }
}

// Update yearly value when monthly value changes
function updateYearlyValue(monthlyInput) {
    const rowIndex = monthlyInput.dataset.row;
    const monthlyValue = parseFloat(monthlyInput.value) || 0;
    const yearlyInput = document.querySelector(`.yearly-input[data-row="${rowIndex}"]`);
    if (yearlyInput) {
        yearlyInput.value = (monthlyValue * 12).toFixed(2);
    }
}

// Calculate total annuity values
function calculateTotals() {
    let totalMonthly = 0;
    let totalYearly = 0;

    document.querySelectorAll('.monthly-input').forEach(input => {
        totalMonthly += parseFloat(input.value) || 0;
    });

    document.querySelectorAll('.yearly-input').forEach(input => {
        totalYearly += parseFloat(input.value) || 0;
    });

    document.getElementById('total-monthly').textContent = formatter.format(totalMonthly);
    document.getElementById('total-yearly').textContent = formatter.format(totalYearly);
}

// Add a new annuity row
function addAnnuity() {
    const table = document.getElementById('annuity-table').getElementsByTagName('tbody')[0];
    const rowCount = table.rows.length;
    const row = table.insertRow();

    row.innerHTML = `
        <td><input type="text" placeholder="Income Source Name"></td>
        <td><input type="number" class="monthly-input" value="0" data-row="${rowCount}"></td>
        <td><input type="number" class="yearly-input" value="0" data-row="${rowCount}"></td>
        <td><button class="delete" onclick="deleteAnnuity(this)">Delete</button></td>
    `;

    // Add event listeners to new inputs
    row.querySelector('.monthly-input').addEventListener('input', function() {
        updateYearlyValue(this);
        calculateTotals();
    });

    row.querySelector('.yearly-input').addEventListener('input', function() {
        updateMonthlyValue(this);
        calculateTotals();
    });

    // Focus on the new input
    row.querySelector('input').focus();
}

// Delete an annuity row
function deleteAnnuity(button) {
    const row = button.closest('tr');
    row.remove();

    // Renumber the data-row attributes
    const monthlyInputs = document.querySelectorAll('.monthly-input');
    const yearlyInputs = document.querySelectorAll('.yearly-input');

    monthlyInputs.forEach((input, index) => {
        input.dataset.row = index;
    });

    yearlyInputs.forEach((input, index) => {
        input.dataset.row = index;
    });

    calculateTotals();
    calculateRetirement();
}

// Switch between tabs
function switchTab(tabId, tabElement) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Add active class to the clicked tab
    tabElement.classList.add('active');
}

// Calculate retirement projections
function calculateRetirement() {
    // Get input values
    const currentNestEgg = parseFloat(document.getElementById('current-nest-egg').value) || 0;
    const growthRate = parseFloat(document.getElementById('growth-rate').value) || 0;
    const taxRate = parseFloat(document.getElementById('tax-rate').value) || 0;
    const homeValue = parseFloat(document.getElementById('home-value').value) || 0;
    const currentAge = parseInt(document.getElementById('current-age').value) || 70;
    const projectionYears = parseInt(document.getElementById('projection-years').value) || 30;
    const targetIncome = parseFloat(document.getElementById('target-income').value) || 0;
    const inflationRate = parseFloat(document.getElementById('inflation-rate').value) || 0;
    const yearlyIncome = parseFloat(document.getElementById('total-yearly').textContent.replace(/[$,]/g, '')) || 0;

    // Calculate projection
    const projectionData = [];
    let nestEgg = currentNestEgg;
    let nestEggDepleted = false;

    for (let year = 0; year < projectionYears; year++) {
        const yearNumber = new Date().getFullYear() + year;
        const age = currentAge + year;
        const inflationFactor = Math.pow(1 + inflationRate / 100, year);

        // Calculate required draw down to meet target income
        const requiredDrawDown = Math.max(0, targetIncome - yearlyIncome);

        // Calculate growth before withdrawal
        const growth = (nestEgg-requiredDrawDown) * (growthRate / 100);

        // Calculate taxes on growth
        const taxes = growth * (taxRate / 100);

        // Calculate ending principal after withdrawals and taxes
        const endingPrincipal = nestEgg + growth - requiredDrawDown - taxes;

        projectionData.push({
            year: yearNumber,
            age: age,
            startingNestEgg: nestEgg,
            income: yearlyIncome,
            drawDown: requiredDrawDown,
            growth: growth,
            taxes: taxes,
            endingPrincipal: endingPrincipal >= 0 ? endingPrincipal : 0
        });

        // Check if nest egg is depleted
        if (endingPrincipal <= 0 && !nestEggDepleted) {
            nestEggDepleted = true;
            document.getElementById('nest-egg-warning').style.display = 'block';
        }

        // Update nest egg for next year
        nestEgg = endingPrincipal > 0 ? endingPrincipal : 0;

        // Break if nest egg is completely depleted
        if (nestEgg <= 0) {
            break;
        }
    }

    // If nest egg wasn't depleted during the projection
    if (!nestEggDepleted) {
        document.getElementById('nest-egg-warning').style.display = 'none';
    }

    // Update the projection table
    updateProjectionTable(projectionData);

    // Update the chart
    updateProjectionChart(projectionData);
}

// Update the projection table
function updateProjectionTable(projectionData) {
    const tbody = document.getElementById('projection-body');
    tbody.innerHTML = '';

    projectionData.forEach(data => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${data.year}</td>
            <td>${data.age}</td>
            <td>${formatter.format(data.startingNestEgg)}</td>
            <td>${formatter.format(data.income)}</td>
            <td>${formatter.format(data.drawDown)}</td>
            <td>${formatter.format(data.growth)}</td>
            <td>${formatter.format(data.taxes)}</td>
            <td>${formatter.format(data.endingPrincipal)}</td>
        `;
    });
}

// Update the projection chart
function updateProjectionChart(projectionData) {
    const ctx = document.getElementById('projectionChart').getContext('2d');

    // Destroy existing chart if it exists
    if (chart) {
        chart.destroy();
    }

    // Create new chart
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: projectionData.map(data => data.year),
            datasets: [
                {
                    label: 'Nest Egg',
                    data: projectionData.map(data => data.endingPrincipal),
                    borderColor: '#2e7d32',
                    backgroundColor: 'rgba(46, 125, 50, 0.1)',
                    fill: true
                },
                {
                    label: 'Income',
                    data: projectionData.map(data => data.income),
                    borderColor: '#6a1b9a',
                    backgroundColor: 'rgba(106, 27, 154, 0.1)',
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatter.format(value);
                        }
                    }
                }
            }
        }
    });
}