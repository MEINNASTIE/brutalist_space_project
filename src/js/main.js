document.addEventListener("DOMContentLoaded", function () {
    const apiKey = 'fMdmZpcEkytfbkoX5V9xsHXjLCFHe9GzB5EExUTc';

    // Function to fetch and display the current ISS location
    const map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Create markers for the ISS and a circle to represent its position
    const issIcon = L.icon({
        iconUrl: '../src/img/target.png',
        iconSize: [52, 52],
        iconAnchor: [25, 10],
    });
    const iss = L.marker([0, 0], { icon: issIcon }).addTo(map);
    const isscirc = L.circle([0, 0], 2200e3, {
        color: '#fff',
        opacity: 0.5,
        weight: 1,
        fillColor: '#fff',
        fillOpacity: 0.1,
    }).addTo(map);

    function moveISS() {
        $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function (data) {
            var lat = data['iss_position']['latitude'];
            var lon = data['iss_position']['longitude'];

            iss.setLatLng([lat, lon]);
            isscirc.setLatLng([lat, lon]);

            map.panTo([lat, lon], animate = true);
        });
    }

    moveISS();
    setInterval(moveISS, 5000);

    async function fetchAPOD() {
        try {
            const apiKey = 'fMdmZpcEkytfbkoX5V9xsHXjLCFHe9GzB5EExUTc'; 
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
            const data = await response.json();
    
            const apodContainer = document.getElementById("apod-container");
            apodContainer.innerHTML = `
                <img src="${data.url}" alt="Astronomy Picture of the Day">
                <h3>${data.title}</h3>
                <p>${data.explanation}</p>
            `;
        } catch (error) {
            console.error("Error fetching APOD data:", error);
        }
    }

    async function fetchAsteroids() {
        try {
            const apiKey = 'fMdmZpcEkytfbkoX5V9xsHXjLCFHe9GzB5EExUTc'; 
            const response = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`);
            const data = await response.json();
    
            const asteroidsContainer = document.getElementById("asteroids-container");
    
            // Process and display the first 6 asteroids
            const maxAsteroids = 6;
            for (let i = 0; i < maxAsteroids; i++) {
                const neo = data.near_earth_objects[i];
                if (neo) {
                    const neoElement = document.createElement("div");
                    neoElement.classList.add("neo");
                    neoElement.innerHTML = `
                        <h3>${neo.name}</h3>
                        <p>Diameter: ${neo.estimated_diameter.kilometers.estimated_diameter_max} km</p>
                        <!-- Add more NEO details as needed -->
                    `;
                    asteroidsContainer.appendChild(neoElement);
                }
            }
        } catch (error) {
            console.error("Error fetching Asteroids data:", error);
        }
    }

    fetchAPOD();
    fetchAsteroids();

    async function fetchAstronauts() {
        try {
            const response = await fetch("http://api.open-notify.org/astros.json");
            const data = await response.json();
    
            const astronautsList = document.getElementById("astronauts-list");
            astronautsList.innerHTML = "<h3>Astronauts in Space</h3><ul>";
    
            data.people.forEach(person => {
                astronautsList.innerHTML += `<li>${person.name} (${person.craft})</li>`;
            });
    
            astronautsList.innerHTML += "</ul>";
        } catch (error) {
            console.error("Error fetching astronauts:", error);
        }
    }

    document.getElementById("astronauts-button").addEventListener("click", fetchAstronauts);

    async function fetchSpaceXMissions() {
        try {
            const response = await fetch("https://api.spacexdata.com/v3/missions");
            const data = await response.json();
    
            const missionsContainer = document.getElementById("missions-container");
    
            // Display up to 4 SpaceX missions
            data.slice(0, 4).forEach(mission => {
                const missionElement = document.createElement("div");
                missionElement.classList.add("mission");
                missionElement.innerHTML = `
                    <h3>${mission.mission_name}</h3>
                    <p>${mission.description}</p>
                `;
                missionsContainer.appendChild(missionElement);
            });
        } catch (error) {
            console.error("Error fetching SpaceX missions:", error);
        }
    }

    fetchSpaceXMissions();

    async function fetchSpaceXHistory() {
        try {
            const response = await fetch("https://api.spacexdata.com/v3/history");
            const data = await response.json();
    
            const historyContainer = document.getElementById("history-container");
    
            // Display up to 4 SpaceX history
            data.slice(0, 4).forEach(history => {
                const historyElement = document.createElement("div");
                historyElement.classList.add("history");
                historyElement.innerHTML = `
                    <h3>${history.title}</h3>
                    <p>${history.details}</p>
                `;
                historyContainer.appendChild(historyElement);
            });
        } catch (error) {
            console.error("Error fetching SpaceX history:", error);
        }
    }

    fetchSpaceXHistory();

    const button1 = document.getElementById('button_one');
    const button2 = document.getElementById('button_two');
    const button3 = document.getElementById('button_three');
    const button4 = document.getElementById('button_four');
    const button5 = document.getElementById('button_five');
    const button6 = document.getElementById('button_six');

    const button7 = document.getElementById('about');
    const button8 = document.getElementById('brutalism');
    const button9 = document.getElementById('contact');

    const button10 = document.getElementById('tiangong');

    const section1 = document.getElementById('iss-location');
    const section2 = document.getElementById('apod');
    const section3 = document.getElementById('astronauts');
    const section4 = document.getElementById('asteroids');
    const section5 = document.getElementById('missions-container');
    const section6 = document.getElementById('history-container');

    const section7 = document.getElementById('About_section');
    const section8 = document.getElementById('Brutalism_section');
    const section9 = document.getElementById('Contact_section');

    const section10 = document.getElementById('av-orbit-48274')

    // Set all sections to be hidden initially
    section1.style.display = 'none';
    section2.style.display = 'none';
    section3.style.display = 'none';
    section4.style.display = 'none';
    section5.style.display = 'none';
    section6.style.display = 'none';

    section7.style.display = 'none';    
    section8.style.display = 'none';
    section9.style.display = 'none';

    section10.style.display = 'none';

    // Add click event listeners to the buttons
    button1.addEventListener('click', () => {
    toggleSection(section1);
    });

    button2.addEventListener('click', () => {
    toggleSection(section2);
    });

    button3.addEventListener('click', () => {
    toggleSection(section3);
    });

    button4.addEventListener('click', () => {
    toggleSection(section4);
    });

    button5.addEventListener('click', () => {
    toggleSection(section5);
    });

    button6.addEventListener('click', () => {
    toggleSection(section6);
    });

    button7.addEventListener('click', () => {
    toggleSection(section7);
    })

    button8.addEventListener('click', () => {
    toggleSection(section8);
    })

    button9.addEventListener('click', () => {
    toggleSection(section9);
    })

    button10.addEventListener('click', () => {
        toggleSection(section10);
        })
    
    function toggleSection(section) {
        if (section.style.display === 'none') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    }

    const spaceInfoContainer = document.getElementById("space-info");

    async function fetchPeopleInSpace() {
        try {
            const response = await fetch("http://api.open-notify.org/astros.json");
            const data = await response.json();

            const numberOfPeople = data.number;
            spaceInfoContainer.textContent = `Currently, there are ${numberOfPeople} humans in space.`;
        } catch (error) {
            spaceInfoContainer.textContent = "Error fetching data.";
            console.error("Error fetching data:", error);
        }
    }

    fetchPeopleInSpace();

    // Toggle gibberish text
    const toggleButton = document.getElementById('star');
    const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div, li, a, button, pre'); 
    let isGibberish = false;

    // Store the original text content for each text element
    const originalTextContents = Array.from(textElements).map(element => element.textContent);

    toggleButton.addEventListener('click', () => {
    isGibberish = !isGibberish;

    textElements.forEach((element, index) => {
        if (isGibberish) {
            element.textContent = generateGibberish(originalTextContents[index]);
        } else {
            element.textContent = originalTextContents[index];
        }
     });
    });

    function generateGibberish(text) {
        const gibberishCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
        let result = '';

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (char === ' ') {
                result += ' ';
            } else {
                result += gibberishCharacters.charAt(Math.floor(Math.random() * gibberishCharacters.length));
            }
        }   

        return result;
    }

});



   
      