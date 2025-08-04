// Clinical trial data
const studiesData = [
    {
        "Study": "STEP 1 - Semaglutide 2.4mg",
        "Agent": "Semaglutide",
        "Population": "Adults with obesity",
        "Duration_weeks": 68,
        "Mean_Weight_Loss_Percent": 15.3,
        "Sample_Size": 1961,
        "Placebo_Weight_Loss_Percent": 2.6,
        "Weight_Loss_5_Percent": 86.4,
        "Weight_Loss_10_Percent": 69.1,
        "Weight_Loss_15_Percent": 50.5,
        "Weight_Loss_20_Percent": 35.0
    },
    {
        "Study": "STEP 5 - Semaglutide 2.4mg (2 years)",
        "Agent": "Semaglutide",
        "Population": "Adults with obesity",
        "Duration_weeks": 104,
        "Mean_Weight_Loss_Percent": 15.2,
        "Sample_Size": 304,
        "Placebo_Weight_Loss_Percent": 2.6,
        "Weight_Loss_5_Percent": 77.1,
        "Weight_Loss_10_Percent": 61.8,
        "Weight_Loss_15_Percent": 52.1,
        "Weight_Loss_20_Percent": 36.1
    },
    {
        "Study": "SELECT - Semaglutide 2.4mg (4 years)",
        "Agent": "Semaglutide",
        "Population": "Adults with overweight/obesity + CVD",
        "Duration_weeks": 208,
        "Mean_Weight_Loss_Percent": 10.2,
        "Sample_Size": 17604,
        "Placebo_Weight_Loss_Percent": 1.5,
        "Weight_Loss_5_Percent": 67.8,
        "Weight_Loss_10_Percent": 44.2,
        "Weight_Loss_15_Percent": 22.9,
        "Weight_Loss_20_Percent": 11.0
    },
    {
        "Study": "STEP vs Liraglutide - Semaglutide 2.4mg",
        "Agent": "Semaglutide",
        "Population": "Adults with obesity",
        "Duration_weeks": 68,
        "Mean_Weight_Loss_Percent": 15.8,
        "Sample_Size": 338,
        "Placebo_Weight_Loss_Percent": 1.9,
        "Weight_Loss_5_Percent": null,
        "Weight_Loss_10_Percent": 70.9,
        "Weight_Loss_15_Percent": 55.6,
        "Weight_Loss_20_Percent": 38.5
    },
    {
        "Study": "STEP TEENS - Semaglutide 2.4mg (Adolescents)",
        "Agent": "Semaglutide",
        "Population": "Adolescents 12-18 years",
        "Duration_weeks": 68,
        "Mean_Weight_Loss_Percent": 16.1,
        "Sample_Size": 201,
        "Placebo_Weight_Loss_Percent": 0.6,
        "Weight_Loss_5_Percent": 73.0,
        "Weight_Loss_10_Percent": 62.0,
        "Weight_Loss_15_Percent": null,
        "Weight_Loss_20_Percent": 37.0
    },
    {
        "Study": "SCALE Obesity and Prediabetes - Liraglutide 3.0mg",
        "Agent": "Liraglutide",
        "Population": "Adults with obesity",
        "Duration_weeks": 56,
        "Mean_Weight_Loss_Percent": 8.0,
        "Sample_Size": 3731,
        "Placebo_Weight_Loss_Percent": 2.6,
        "Weight_Loss_5_Percent": 63.2,
        "Weight_Loss_10_Percent": 33.1,
        "Weight_Loss_15_Percent": 16.0,
        "Weight_Loss_20_Percent": 7.0
    },
    {
        "Study": "SCALE Diabetes - Liraglutide 3.0mg",
        "Agent": "Liraglutide",
        "Population": "Adults with obesity + T2D",
        "Duration_weeks": 56,
        "Mean_Weight_Loss_Percent": 6.0,
        "Sample_Size": 846,
        "Placebo_Weight_Loss_Percent": 2.0,
        "Weight_Loss_5_Percent": 54.3,
        "Weight_Loss_10_Percent": 25.2,
        "Weight_Loss_15_Percent": 10.8,
        "Weight_Loss_20_Percent": 4.8
    },
    {
        "Study": "SCALE Maintenance - Liraglutide 3.0mg",
        "Agent": "Liraglutide",
        "Population": "Adults with obesity (maintenance)",
        "Duration_weeks": 56,
        "Mean_Weight_Loss_Percent": 6.2,
        "Sample_Size": 422,
        "Placebo_Weight_Loss_Percent": 0.2,
        "Weight_Loss_5_Percent": 50.9,
        "Weight_Loss_10_Percent": 26.0,
        "Weight_Loss_15_Percent": 14.4,
        "Weight_Loss_20_Percent": 7.5
    },
    {
        "Study": "SCALE Teens - Liraglutide 3.0mg (Adolescents)",
        "Agent": "Liraglutide",
        "Population": "Adolescents 12-18 years",
        "Duration_weeks": 56,
        "Mean_Weight_Loss_Percent": 5.0,
        "Sample_Size": 251,
        "Placebo_Weight_Loss_Percent": 1.0,
        "Weight_Loss_5_Percent": 43.3,
        "Weight_Loss_10_Percent": 26.1,
        "Weight_Loss_15_Percent": null,
        "Weight_Loss_20_Percent": null
    },
    {
        "Study": "SCALE Kids - Liraglutide 3.0mg (Children 6-12)",
        "Agent": "Liraglutide",
        "Population": "Children 6-12 years",
        "Duration_weeks": 56,
        "Mean_Weight_Loss_Percent": 5.8,
        "Sample_Size": 82,
        "Placebo_Weight_Loss_Percent": -1.6,
        "Weight_Loss_5_Percent": 46.2,
        "Weight_Loss_10_Percent": null,
        "Weight_Loss_15_Percent": null,
        "Weight_Loss_20_Percent": null
    },
    {
        "Study": "BARI-OPTIMISE - Liraglutide 3.0mg (Post-surgery)",
        "Agent": "Liraglutide",
        "Population": "Adults post-bariatric surgery",
        "Duration_weeks": 24,
        "Mean_Weight_Loss_Percent": 8.82,
        "Sample_Size": 70,
        "Placebo_Weight_Loss_Percent": 0.54,
        "Weight_Loss_5_Percent": 71.9,
        "Weight_Loss_10_Percent": null,
        "Weight_Loss_15_Percent": null,
        "Weight_Loss_20_Percent": null
    },
    {
        "Study": "STEP vs Liraglutide - Liraglutide 3.0mg",
        "Agent": "Liraglutide",
        "Population": "Adults with obesity",
        "Duration_weeks": 68,
        "Mean_Weight_Loss_Percent": 6.4,
        "Sample_Size": 338,
        "Placebo_Weight_Loss_Percent": 1.9,
        "Weight_Loss_5_Percent": 25.6,
        "Weight_Loss_10_Percent": 12.0,
        "Weight_Loss_15_Percent": 6.0,
        "Weight_Loss_20_Percent": null
    },
    {
        "Study": "SURMOUNT-1 - Tirzepatide 15mg",
        "Agent": "Tirzepatide",
        "Population": "Adults with obesity",
        "Duration_weeks": 72,
        "Mean_Weight_Loss_Percent": 22.5,
        "Sample_Size": 2539,
        "Placebo_Weight_Loss_Percent": 2.4,
        "Weight_Loss_5_Percent": 96.0,
        "Weight_Loss_10_Percent": 89.0,
        "Weight_Loss_15_Percent": 79.0,
        "Weight_Loss_20_Percent": 63.0
    },
    {
        "Study": "SURMOUNT-1 - Tirzepatide 10mg",
        "Agent": "Tirzepatide",
        "Population": "Adults with obesity",
        "Duration_weeks": 72,
        "Mean_Weight_Loss_Percent": 21.4,
        "Sample_Size": 2539,
        "Placebo_Weight_Loss_Percent": 2.4,
        "Weight_Loss_5_Percent": 95.0,
        "Weight_Loss_10_Percent": 84.0,
        "Weight_Loss_15_Percent": 72.0,
        "Weight_Loss_20_Percent": 57.0
    },
    {
        "Study": "SURMOUNT-1 - Tirzepatide 5mg",
        "Agent": "Tirzepatide",
        "Population": "Adults with obesity",
        "Duration_weeks": 72,
        "Mean_Weight_Loss_Percent": 16.0,
        "Sample_Size": 2539,
        "Placebo_Weight_Loss_Percent": 2.4,
        "Weight_Loss_5_Percent": 89.0,
        "Weight_Loss_10_Percent": 73.0,
        "Weight_Loss_15_Percent": 55.0,
        "Weight_Loss_20_Percent": 37.0
    },
    {
        "Study": "SURMOUNT-2 - Tirzepatide 15mg (T2D)",
        "Agent": "Tirzepatide",
        "Population": "Adults with obesity + T2D",
        "Duration_weeks": 72,
        "Mean_Weight_Loss_Percent": 15.7,
        "Sample_Size": 938,
        "Placebo_Weight_Loss_Percent": 3.2,
        "Weight_Loss_5_Percent": 93.0,
        "Weight_Loss_10_Percent": 82.0,
        "Weight_Loss_15_Percent": null,
        "Weight_Loss_20_Percent": 57.0
    },
    {
        "Study": "SURMOUNT-2 - Tirzepatide 10mg (T2D)",
        "Agent": "Tirzepatide",
        "Population": "Adults with obesity + T2D",
        "Duration_weeks": 72,
        "Mean_Weight_Loss_Percent": 13.4,
        "Sample_Size": 938,
        "Placebo_Weight_Loss_Percent": 3.2,
        "Weight_Loss_5_Percent": 89.0,
        "Weight_Loss_10_Percent": 75.0,
        "Weight_Loss_15_Percent": null,
        "Weight_Loss_20_Percent": 48.0
    },
    {
        "Study": "SURMOUNT-2 - Tirzepatide 5mg (T2D)",
        "Agent": "Tirzepatide",
        "Population": "Adults with obesity + T2D",
        "Duration_weeks": 72,
        "Mean_Weight_Loss_Percent": 9.6,
        "Sample_Size": 938,
        "Placebo_Weight_Loss_Percent": 3.2,
        "Weight_Loss_5_Percent": 76.0,
        "Weight_Loss_10_Percent": 55.0,
        "Weight_Loss_15_Percent": null,
        "Weight_Loss_20_Percent": 26.0
    },
    {
        "Study": "SURMOUNT-3 - Tirzepatide MTD (post-lifestyle)",
        "Agent": "Tirzepatide",
        "Population": "Adults with obesity (post-lifestyle)",
        "Duration_weeks": 72,
        "Mean_Weight_Loss_Percent": 18.4,
        "Sample_Size": 579,
        "Placebo_Weight_Loss_Percent": 2.5,
        "Weight_Loss_5_Percent": 87.5,
        "Weight_Loss_10_Percent": null,
        "Weight_Loss_15_Percent": null,
        "Weight_Loss_20_Percent": null
    },
    {
        "Study": "SURMOUNT-4 - Tirzepatide MTD (maintenance)",
        "Agent": "Tirzepatide",
        "Population": "Adults with obesity (maintenance)",
        "Duration_weeks": 88,
        "Mean_Weight_Loss_Percent": 25.3,
        "Sample_Size": 670,
        "Placebo_Weight_Loss_Percent": 9.9,
        "Weight_Loss_5_Percent": 97.3,
        "Weight_Loss_10_Percent": 92.1,
        "Weight_Loss_15_Percent": 84.1,
        "Weight_Loss_20_Percent": 69.5
    },
    {
        "Study": "SURMOUNT-5 - Tirzepatide vs Semaglutide",
        "Agent": "Tirzepatide",
        "Population": "Adults with obesity vs Semaglutide",
        "Duration_weeks": 72,
        "Mean_Weight_Loss_Percent": 20.2,
        "Sample_Size": 751,
        "Placebo_Weight_Loss_Percent": null,
        "Weight_Loss_5_Percent": 94.0,
        "Weight_Loss_10_Percent": 85.0,
        "Weight_Loss_15_Percent": 72.0,
        "Weight_Loss_20_Percent": 55.0
    },
    {
        "Study": "GZGI Phase 2 - Orforglipron 45mg",
        "Agent": "Orforglipron",
        "Population": "Adults with obesity",
        "Duration_weeks": 36,
        "Mean_Weight_Loss_Percent": 14.7,
        "Sample_Size": 272,
        "Placebo_Weight_Loss_Percent": 2.3,
        "Weight_Loss_5_Percent": 75,
        "Weight_Loss_10_Percent": 58,
        "Weight_Loss_15_Percent": 42,
        "Weight_Loss_20_Percent": 25
    },
    {
        "Study": "GZGI Phase 2 - Orforglipron 36mg",
        "Agent": "Orforglipron",
        "Population": "Adults with obesity",
        "Duration_weeks": 36,
        "Mean_Weight_Loss_Percent": 12.6,
        "Sample_Size": 272,
        "Placebo_Weight_Loss_Percent": 2.3,
        "Weight_Loss_5_Percent": 70,
        "Weight_Loss_10_Percent": 52,
        "Weight_Loss_15_Percent": 35,
        "Weight_Loss_20_Percent": 18
    },
    {
        "Study": "GZGI Phase 2 - Orforglipron 24mg",
        "Agent": "Orforglipron",
        "Population": "Adults with obesity",
        "Duration_weeks": 36,
        "Mean_Weight_Loss_Percent": 11.9,
        "Sample_Size": 272,
        "Placebo_Weight_Loss_Percent": 2.3,
        "Weight_Loss_5_Percent": 68,
        "Weight_Loss_10_Percent": 47,
        "Weight_Loss_15_Percent": 28,
        "Weight_Loss_20_Percent": 12
    },
    {
        "Study": "GZGI Phase 2 - Orforglipron 12mg",
        "Agent": "Orforglipron",
        "Population": "Adults with obesity",
        "Duration_weeks": 36,
        "Mean_Weight_Loss_Percent": 8.6,
        "Sample_Size": 272,
        "Placebo_Weight_Loss_Percent": 2.3,
        "Weight_Loss_5_Percent": 46,
        "Weight_Loss_10_Percent": 26,
        "Weight_Loss_15_Percent": 12,
        "Weight_Loss_20_Percent": 6
    },
    {
        "Study": "ACHIEVE-1 - Orforglipron 36mg (T2D)",
        "Agent": "Orforglipron",
        "Population": "Adults with T2D",
        "Duration_weeks": 40,
        "Mean_Weight_Loss_Percent": 7.9,
        "Sample_Size": 559,
        "Placebo_Weight_Loss_Percent": null,
        "Weight_Loss_5_Percent": 65,
        "Weight_Loss_10_Percent": null,
        "Weight_Loss_15_Percent": null,
        "Weight_Loss_20_Percent": null
    }
];

// Global variables for charts and table
let agentComparisonChart;
let durationScatterChart;
let pediatricComparisonChart;
let thresholdsChart;
let studiesTable = {
    currentSort: { column: null, direction: 'asc' },
    filteredData: [...studiesData]
};

// Agent colors for consistency
const agentColors = {
    'Liraglutide': '#1FB8CD',
    'Semaglutide': '#FFC185',
    'Tirzepatide': '#B4413C',
    'Orforglipron': '#5D878F'
};

// Utility functions
function formatNumber(num) {
    if (num === null || num === undefined) return 'N/A';
    if (typeof num === 'number') {
        return num.toLocaleString();
    }
    return num;
}

function formatPercentage(num) {
    if (num === null || num === undefined) return 'N/A';
    return `${num}%`;
}

function isPediatric(population) {
    return population.includes('Adolescent') || population.includes('Children') || population.includes('12-18') || population.includes('6-12');
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    updateOverviewStats();
    createAgentComparisonChart();
    createDurationScatterChart();
    initializeStudiesTable();
    createPediatricComparisonChart();
    createThresholdsChart();
    
    // Add event listeners
    setupEventListeners();
});

function updateOverviewStats() {
    const totalStudies = studiesData.length;
    const totalParticipants = studiesData.reduce((sum, study) => sum + study.Sample_Size, 0);
    const pediatricStudies = studiesData.filter(study => isPediatric(study.Population)).length;
    const bestWeightLoss = Math.max(...studiesData.map(study => study.Mean_Weight_Loss_Percent));
    
    document.getElementById('total-studies').textContent = totalStudies;
    document.getElementById('total-participants').textContent = formatNumber(totalParticipants);
    document.getElementById('pediatric-studies').textContent = pediatricStudies;
    document.getElementById('best-weight-loss').textContent = `${bestWeightLoss}%`;
}

function getAgentAverages(selectedAgents = null) {
    const agentData = {};
    let dataToProcess = studiesData;
    
    if (selectedAgents && selectedAgents.length > 0) {
        dataToProcess = studiesData.filter(study => selectedAgents.includes(study.Agent));
    }
    
    dataToProcess.forEach(study => {
        if (!agentData[study.Agent]) {
            agentData[study.Agent] = {
                weightLoss: [],
                sampleSizes: []
            };
        }
        agentData[study.Agent].weightLoss.push(study.Mean_Weight_Loss_Percent);
        agentData[study.Agent].sampleSizes.push(study.Sample_Size);
    });
    
    const averages = {};
    Object.keys(agentData).forEach(agent => {
        // Calculate weighted average
        const totalWeight = agentData[agent].sampleSizes.reduce((sum, size) => sum + size, 0);
        const weightedSum = agentData[agent].weightLoss.reduce((sum, loss, i) => 
            sum + (loss * agentData[agent].sampleSizes[i]), 0);
        averages[agent] = weightedSum / totalWeight;
    });
    
    return averages;
}

function createAgentComparisonChart() {
    const ctx = document.getElementById('agent-comparison-chart').getContext('2d');
    const averages = getAgentAverages();
    
    const agents = Object.keys(averages);
    const values = agents.map(agent => averages[agent]);
    const colors = agents.map(agent => agentColors[agent]);
    
    agentComparisonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: agents,
            datasets: [{
                label: 'Mean Weight Loss (%)',
                data: values,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Mean Weight Loss by GLP-1 Agent (Weighted Average)'
                },
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        afterLabel: function(context) {
                            const agent = context.label;
                            const studies = studiesData.filter(s => s.Agent === agent).length;
                            const totalParticipants = studiesData
                                .filter(s => s.Agent === agent)
                                .reduce((sum, s) => sum + s.Sample_Size, 0);
                            return [`Studies: ${studies}`, `Total Participants: ${formatNumber(totalParticipants)}`];
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Weight Loss (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'GLP-1 Receptor Agonist'
                    }
                }
            }
        }
    });
}

function createDurationScatterChart() {
    const ctx = document.getElementById('duration-scatter-chart').getContext('2d');
    
    const datasets = Object.keys(agentColors).map(agent => {
        const agentData = studiesData.filter(study => study.Agent === agent);
        return {
            label: agent,
            data: agentData.map(study => ({
                x: study.Duration_weeks,
                y: study.Mean_Weight_Loss_Percent,
                study: study.Study,
                population: study.Population,
                sampleSize: study.Sample_Size
            })),
            backgroundColor: agentColors[agent],
            borderColor: agentColors[agent],
            pointRadius: 6,
            pointHoverRadius: 8
        };
    });
    
    durationScatterChart = new Chart(ctx, {
        type: 'scatter',
        data: { datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Study Duration vs Weight Loss by Agent'
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            return context[0].raw.study;
                        },
                        afterLabel: function(context) {
                            const point = context.raw;
                            return [
                                `Population: ${point.population}`,
                                `Sample Size: ${formatNumber(point.sampleSize)}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Duration (weeks)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Mean Weight Loss (%)'
                    }
                }
            }
        }
    });
}

function initializeStudiesTable() {
    const tableBody = document.getElementById('studies-table-body');
    
    function renderTable(data) {
        tableBody.innerHTML = '';
        data.forEach(study => {
            const row = document.createElement('tr');
            if (isPediatric(study.Population)) {
                row.classList.add('pediatric-highlight');
            }
            
            row.innerHTML = `
                <td>${study.Study}</td>
                <td><span class="agent-label ${study.Agent.toLowerCase()}">${study.Agent}</span></td>
                <td>${study.Population}</td>
                <td>${study.Duration_weeks}</td>
                <td>${formatPercentage(study.Mean_Weight_Loss_Percent)}</td>
                <td>${formatNumber(study.Sample_Size)}</td>
                <td>${formatPercentage(study.Placebo_Weight_Loss_Percent)}</td>
            `;
            tableBody.appendChild(row);
        });
    }
    
    function sortTable(column) {
        if (studiesTable.currentSort.column === column) {
            studiesTable.currentSort.direction = studiesTable.currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            studiesTable.currentSort.column = column;
            studiesTable.currentSort.direction = 'asc';
        }
        
        studiesTable.filteredData.sort((a, b) => {
            let aVal, bVal;
            
            switch(column) {
                case 'study':
                    aVal = a.Study;
                    bVal = b.Study;
                    break;
                case 'agent':
                    aVal = a.Agent;
                    bVal = b.Agent;
                    break;
                case 'population':
                    aVal = a.Population;
                    bVal = b.Population;
                    break;
                case 'duration':
                    aVal = a.Duration_weeks;
                    bVal = b.Duration_weeks;
                    break;
                case 'weight-loss':
                    aVal = a.Mean_Weight_Loss_Percent;
                    bVal = b.Mean_Weight_Loss_Percent;
                    break;
                case 'sample-size':
                    aVal = a.Sample_Size;
                    bVal = b.Sample_Size;
                    break;
                case 'placebo':
                    aVal = a.Placebo_Weight_Loss_Percent || 0;
                    bVal = b.Placebo_Weight_Loss_Percent || 0;
                    break;
                default:
                    return 0;
            }
            
            if (typeof aVal === 'string') {
                aVal = aVal.toLowerCase();
                bVal = bVal.toLowerCase();
            }
            
            if (aVal < bVal) return studiesTable.currentSort.direction === 'asc' ? -1 : 1;
            if (aVal > bVal) return studiesTable.currentSort.direction === 'asc' ? 1 : -1;
            return 0;
        });
        
        // Update sort indicators
        document.querySelectorAll('.sortable').forEach(th => {
            th.classList.remove('sort-asc', 'sort-desc');
            const arrow = th.querySelector('.sort-arrow');
            if (arrow) {
                arrow.textContent = '↕';
            }
        });
        
        const currentHeader = document.querySelector(`[data-sort="${column}"]`);
        if (currentHeader) {
            currentHeader.classList.add(`sort-${studiesTable.currentSort.direction}`);
            const arrow = currentHeader.querySelector('.sort-arrow');
            if (arrow) {
                arrow.textContent = studiesTable.currentSort.direction === 'asc' ? '↑' : '↓';
            }
        }
        
        renderTable(studiesTable.filteredData);
    }
    
    // Add click listeners to sortable headers
    document.querySelectorAll('.sortable').forEach(th => {
        th.addEventListener('click', () => {
            const column = th.getAttribute('data-sort');
            sortTable(column);
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('study-search');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        studiesTable.filteredData = studiesData.filter(study => 
            study.Study.toLowerCase().includes(searchTerm) ||
            study.Agent.toLowerCase().includes(searchTerm) ||
            study.Population.toLowerCase().includes(searchTerm)
        );
        renderTable(studiesTable.filteredData);
    });
    
    // Initial render
    renderTable(studiesTable.filteredData);
}

function createPediatricComparisonChart() {
    const ctx = document.getElementById('pediatric-comparison-chart').getContext('2d');
    
    const pediatricStudies = studiesData.filter(study => isPediatric(study.Population));
    const adultStudies = studiesData.filter(study => !isPediatric(study.Population));
    
    // Calculate averages
    const pediatricAvg = pediatricStudies.reduce((sum, study) => sum + study.Mean_Weight_Loss_Percent, 0) / pediatricStudies.length;
    const adultAvg = adultStudies.reduce((sum, study) => sum + study.Mean_Weight_Loss_Percent, 0) / adultStudies.length;
    
    // Update pediatric stats
    document.getElementById('pediatric-mean-weight-loss').textContent = `${pediatricAvg.toFixed(1)}%`;
    document.getElementById('adult-mean-weight-loss').textContent = `${adultAvg.toFixed(1)}%`;
    
    // Create comparison chart by agent
    const agentComparison = {};
    
    Object.keys(agentColors).forEach(agent => {
        const pediatricData = pediatricStudies.filter(s => s.Agent === agent);
        const adultData = adultStudies.filter(s => s.Agent === agent);
        
        if (pediatricData.length > 0 || adultData.length > 0) {
            agentComparison[agent] = {
                pediatric: pediatricData.length > 0 ? 
                    pediatricData.reduce((sum, s) => sum + s.Mean_Weight_Loss_Percent, 0) / pediatricData.length : null,
                adult: adultData.length > 0 ? 
                    adultData.reduce((sum, s) => sum + s.Mean_Weight_Loss_Percent, 0) / adultData.length : null
            };
        }
    });
    
    const agents = Object.keys(agentComparison);
    const pediatricValues = agents.map(agent => agentComparison[agent].pediatric);
    const adultValues = agents.map(agent => agentComparison[agent].adult);
    
    pediatricComparisonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: agents,
            datasets: [
                {
                    label: 'Pediatric Populations',
                    data: pediatricValues,
                    backgroundColor: '#B4413C',
                    borderColor: '#B4413C',
                    borderWidth: 1
                },
                {
                    label: 'Adult Populations',
                    data: adultValues,
                    backgroundColor: '#1FB8CD',
                    borderColor: '#1FB8CD',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Pediatric vs Adult Weight Loss by Agent'
                },
                tooltip: {
                    callbacks: {
                        afterLabel: function(context) {
                            const agent = context.label;
                            const isPediatricDataset = context.datasetIndex === 0;
                            const studies = studiesData.filter(s => 
                                s.Agent === agent && isPediatric(s.Population) === isPediatricDataset
                            ).length;
                            return `Studies: ${studies}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Mean Weight Loss (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'GLP-1 Receptor Agonist'
                    }
                }
            }
        }
    });
}

function createThresholdsChart() {
    const ctx = document.getElementById('thresholds-chart').getContext('2d');
    
    function updateThresholdsChart(selectedAgent = 'all') {
        let filteredData = studiesData;
        if (selectedAgent !== 'all') {
            filteredData = studiesData.filter(study => study.Agent === selectedAgent);
        }
        
        // Only include studies with threshold data
        const studiesWithThresholds = filteredData.filter(study => 
            study.Weight_Loss_5_Percent !== null || 
            study.Weight_Loss_10_Percent !== null || 
            study.Weight_Loss_15_Percent !== null || 
            study.Weight_Loss_20_Percent !== null
        );
        
        const labels = studiesWithThresholds.map(study => 
            study.Study.length > 30 ? study.Study.substring(0, 30) + '...' : study.Study
        );
        
        const datasets = [
            {
                label: '≥5% Weight Loss',
                data: studiesWithThresholds.map(s => s.Weight_Loss_5_Percent),
                backgroundColor: '#1FB8CD'
            },
            {
                label: '≥10% Weight Loss',
                data: studiesWithThresholds.map(s => s.Weight_Loss_10_Percent),
                backgroundColor: '#FFC185'
            },
            {
                label: '≥15% Weight Loss',
                data: studiesWithThresholds.map(s => s.Weight_Loss_15_Percent),
                backgroundColor: '#B4413C'
            },
            {
                label: '≥20% Weight Loss',
                data: studiesWithThresholds.map(s => s.Weight_Loss_20_Percent),
                backgroundColor: '#5D878F'
            }
        ];
        
        if (thresholdsChart) {
            thresholdsChart.destroy();
        }
        
        thresholdsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: `Weight Loss Achievement Thresholds${selectedAgent !== 'all' ? ` - ${selectedAgent}` : ''}`
                    },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                const index = context[0].dataIndex;
                                return studiesWithThresholds[index].Study;
                            },
                            afterBody: function(context) {
                                const index = context[0].dataIndex;
                                const study = studiesWithThresholds[index];
                                return [
                                    `Agent: ${study.Agent}`,
                                    `Population: ${study.Population}`,
                                    `Duration: ${study.Duration_weeks} weeks`,
                                    `Sample Size: ${formatNumber(study.Sample_Size)}`
                                ];
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Studies'
                        },
                        ticks: {
                            maxRotation: 45
                        }
                    },
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Percentage of Participants (%)'
                        }
                    }
                }
            }
        });
    }
    
    // Initial chart
    updateThresholdsChart();
    
    // Update chart when agent selection changes
    document.getElementById('threshold-agent-select').addEventListener('change', (e) => {
        updateThresholdsChart(e.target.value);
    });
}

function setupEventListeners() {
    // Agent filter checkboxes
    const filterCheckboxes = ['filter-liraglutide', 'filter-semaglutide', 'filter-tirzepatide', 'filter-orforglipron'];
    
    filterCheckboxes.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            checkbox.addEventListener('change', updateAgentComparisonChart);
        }
    });
}

function updateAgentComparisonChart() {
    const selectedAgents = [];
    
    if (document.getElementById('filter-liraglutide').checked) selectedAgents.push('Liraglutide');
    if (document.getElementById('filter-semaglutide').checked) selectedAgents.push('Semaglutide');
    if (document.getElementById('filter-tirzepatide').checked) selectedAgents.push('Tirzepatide');
    if (document.getElementById('filter-orforglipron').checked) selectedAgents.push('Orforglipron');
    
    // If no agents selected, show all
    if (selectedAgents.length === 0) {
        selectedAgents.push('Liraglutide', 'Semaglutide', 'Tirzepatide', 'Orforglipron');
    }
    
    const averages = getAgentAverages(selectedAgents);
    
    const agents = Object.keys(averages);
    const values = agents.map(agent => averages[agent]);
    const colors = agents.map(agent => agentColors[agent]);
    
    agentComparisonChart.data.labels = agents;
    agentComparisonChart.data.datasets[0].data = values;
    agentComparisonChart.data.datasets[0].backgroundColor = colors;
    agentComparisonChart.data.datasets[0].borderColor = colors;
    
    agentComparisonChart.update();
}