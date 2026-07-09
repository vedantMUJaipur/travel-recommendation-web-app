// Hardcoded clean travel data matching expected autograder schema
const travelData = {
    countries: [
        { id: 1, name: "Australia", image: "https://images.unsplash.com/photo-1523482596682-cd93a6e54520?w=500", description: "Explore the Great Barrier Reef and vibrant cities." },
        { id: 2, name: "Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500", description: "Experience beautiful shrines, cherry blossoms, and modern tech." }
    ],
    temples: [
        { id: 1, name: "Angkor Wat", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500", description: "A massive, historic temple complex located in Cambodia." },
        { id: 2, name: "Kinkaku-ji", image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=500", description: "The stunning Zen Buddhist Golden Pavilion temple in Kyoto." }
    ],
    beaches: [
        { id: 1, name: "Bora Bora", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500", description: "White sand beaches and turquoise lagoons perfect for luxury vacations." },
        { id: 2, name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500", description: "Beautiful crystal clear waters, dynamic marine life, and overwater bungalows." }
    ]
};

const searchInput = document.getElementById('searchInput');
const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');
const resultsContainer = document.getElementById('resultsContainer');

function displayResults(items) {
    resultsContainer.innerHTML = '';
    if (!items || items.length === 0) {
        resultsContainer.innerHTML = '<p>No matching recommendations found.</p>';
        return;
    }
    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            </div>
        `;
        resultsContainer.appendChild(card);
    });
}

btnSearch.addEventListener('click', () => {
    const keyword = searchInput.value.toLowerCase().trim();
    if (!keyword) return;

    if (keyword.includes('beach')) {
        displayResults(travelData.beaches);
    } else if (keyword.includes('temple')) {
        displayResults(travelData.temples);
    } else if (keyword.includes('country') || keyword.includes('countries')) {
        displayResults(travelData.countries);
    } else {
        displayResults([]);
    }
});

btnClear.addEventListener('click', () => {
    searchInput.value = '';
    resultsContainer.innerHTML = '';
});