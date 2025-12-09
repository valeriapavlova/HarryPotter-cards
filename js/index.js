const charactersContainer = document.getElementById('gridContainer')

fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(data => {

        // get current year
        const currentYear = new Date().getFullYear()

        data.forEach(character => {
            // 1. Crear el elemento dentro de un variable
            const potterCard = document.createElement('div')
    
            // 2. Estilizar elemento recien creado
            potterCard.classList.add('potter-card');
            if(character.house) {
                potterCard.classList.add(character.house)
            }

            // Image logic
            const placeholderImage = 'https://i0.wp.com/eammashup.wordpress.com/wp-content/uploads/2018/08/screen-shot-2018-08-24-at-12-05-03-pm.png?fit=1200%2C1064&ssl=1'
            const imageUrl = character.image || placeholderImage

            // Age logic
            const age = character.yearOfBirth ? `${currentYear - character.yearOfBirth} years old` : 'Unknown age'
    
            // HTML structure
            potterCard.innerHTML = `
            <div class="potter-card__image-box">
                <img src="${imageUrl}" alt="${character.name}" class="potter-card__img">
            
                <div class="potter-card__overlay">
                    <p>🏠 ${character.house || 'No House'}</p>
                    <p>✨ ${character.species}</p>
                </div>
            </div>

            <div class="potter-card__info">
                <h4>${character.name}</h4>
                <span>${age}</span>
            </div>
            `
    
            // 4. Asignar el elmento hijo a un contenador que lo muestre en el web
            charactersContainer.appendChild(potterCard)
        })

    })
    .catch(error => console.error(error))
