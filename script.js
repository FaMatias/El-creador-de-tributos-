document.addEventListener('DOMContentLoaded', () => {

    const langSelect = document.getElementById('lang-select');
    const mainContent = {
        es: {
            mainTitle: 'Sitios Temáticos de Series',
            jdh: {
                title: 'Los Juegos del Hambre: El Creador de Tributos',
                subtitle: '¡Crea tu propio tributo para la arena de Panem!',
                creatorTitle: 'Crea tu Tributo',
                label: 'Elige tu Distrito:',
                button: 'Generar Tributo',
                fichaTitle: 'Ficha de Tributo',
                labels: {
                    name: 'Nombre',
                    district: 'Distrito',
                    skill: 'Habilidad Principal',
                    weapon: 'Arma Favorita',
                    strategy: 'Estrategia de Supervivencia'
                },
                districts: {
                    '1': '1. Lujo', '2': '2. Albañilería', '3': '3. Tecnología',
                    '4': '4. Pesca', '5': '5. Energía', '6': '6. Transporte',
                    '7': '7. Madera', '8': '8. Textiles', '9': '9. Grano',
                    '10': '10. Ganadería', '11': '11. Agricultura', '12': '12. Minería'
                },
                skills: {
                    '1': ['Estrategia', 'Combate cuerpo a cuerpo', 'Lanzamiento de cuchillos'],
                    '2': ['Fuerza bruta', 'Construcción de trampas', 'Lanzamiento de lanza'],
                    '3': ['Hacking', 'Ingeniería', 'Uso de dispositivos'],
                    '4': ['Supervivencia en el agua', 'Navegación', 'Uso de tridente'],
                    '5': ['Velocidad', 'Control de drones', 'Resistencia'],
                    '6': ['Piloto experto', 'Mecánica', 'Conocimiento de motores'],
                    '7': ['Uso de hacha', 'Construcción de refugios', 'Trepar árboles'],
                    '8': ['Tejido', 'Sastrería', 'Camuflaje'],
                    '9': ['Cazador experto', 'Conocimiento de plantas', 'Disparo con arco'],
                    '10': ['Uso de látigo', 'Manejo de animales', 'Rastreo'],
                    '11': ['Botánica', 'Conocimiento de venenos', 'Agricultura'],
                    '12': ['Minería', 'Resistencia', 'Trabajo en equipo']
                },
                weapons: ['Arco y flecha', 'Espada', 'Cuchillo', 'Lanza', 'Hacha', 'Látigo', 'Tridente'],
                strategies: ['Buscar aliados', 'Ir solo', 'Esconderse', 'Hacer trampas', 'Atacar primero']
            },
            marginal: {
                title: 'El Marginal: Expedientes Penitenciarios',
                subtitle: 'Accede a los archivos clasificados de San Onofre.',
                galleryTitle: 'Galería de Prisioneros',
                labels: {
                    alias: 'Apodo',
                    crime: 'Delito',
                    status: 'Estatus',
                },
                characters: [
                    { name: 'Mario Borges', alias: 'Mario', crime: 'Organización criminal, tráfico', status: 'Líder del pabellón', bio: 'Carismático y despiadado, controla el negocio de la droga con mano de hierro.' },
                    { name: 'Diosito Borges', alias: 'Diosito', crime: 'Robo a mano armada, homicidio', status: 'Mano derecha de Mario', bio: 'Hermano menor de Mario, impulsivo y leal. Su apariencia contrasta con su violencia.' },
                    { name: 'Pastor Peña', alias: 'Pastor', crime: 'Infiltración, ex-policía', status: 'Infiltrado', bio: 'Un ex-policía que se infiltra en San Onofre para desmantelar una banda criminal.' },
                    { name: 'Antín', alias: 'El director', crime: 'Corrupción, extorsión', status: 'Director de la prisión', bio: 'El director de San Onofre, una figura corrupta y calculadora que mueve los hilos desde las sombras.' },
                ]
            }
        },
        en: {
            mainTitle: 'Thematic Series Websites',
            jdh: {
                title: 'The Hunger Games: The Tribute Creator',
                subtitle: 'Create your own tribute for the arena of Panem!',
                creatorTitle: 'Create Your Tribute',
                label: 'Choose Your District:',
                button: 'Generate Tribute',
                fichaTitle: 'Tribute File',
                labels: {
                    name: 'Name',
                    district: 'District',
                    skill: 'Main Skill',
                    weapon: 'Favorite Weapon',
                    strategy: 'Survival Strategy'
                },
                districts: {
                    '1': '1. Luxury', '2': '2. Masonry', '3': '3. Technology',
                    '4': '4. Fishing', '5': '5. Energy', '6': '6. Transportation',
                    '7': '7. Lumber', '8': '8. Textiles', '9': '9. Grain',
                    '10': '10. Livestock', '11': '11. Agriculture', '12': '12. Mining'
                },
                skills: {
                    '1': ['Strategy', 'Hand-to-hand combat', 'Knife throwing'],
                    '2': ['Brute force', 'Trap building', 'Spear throwing'],
                    '3': ['Hacking', 'Engineering', 'Device usage'],
                    '4': ['Water survival', 'Navigation', 'Trident usage'],
                    '5': ['Speed', 'Drone control', 'Stamina'],
                    '6': ['Expert pilot', 'Mechanic', 'Engine knowledge'],
                    '7': ['Axe usage', 'Shelter building', 'Tree climbing'],
                    '8': ['Weaving', 'Tailoring', 'Camouflage'],
                    '9': ['Expert hunter', 'Plant knowledge', 'Archery'],
                    '10': ['Whip usage', 'Animal handling', 'Tracking'],
                    '11': ['Botany', 'Poison knowledge', 'Agriculture'],
                    '12': ['Mining', 'Endurance', 'Teamwork']
                },
                weapons: ['Bow and arrow', 'Sword', 'Knife', 'Spear', 'Axe', 'Whip', 'Trident'],
                strategies: ['Find allies', 'Go solo', 'Hide', 'Set traps', 'Attack first']
            },
            marginal: {
                title: 'El Marginal: Penitentiary Files',
                subtitle: 'Access the classified files of San Onofre.',
                galleryTitle: 'Prisoner Gallery',
                labels: {
                    alias: 'Nickname',
                    crime: 'Crime',
                    status: 'Status',
                },
                characters: [
                    { name: 'Mario Borges', alias: 'Mario', crime: 'Criminal organization, trafficking', status: 'Pavilion leader', bio: 'Charismatic and ruthless, he controls the drug business in San Onofre with an iron fist.' },
                    { name: 'Diosito Borges', alias: 'Diosito', crime: 'Armed robbery, homicide', status: 'Mario\'s right hand', bio: 'Mario\'s younger brother, impulsive and loyal. His appearance contrasts with his violence.' },
                    { name: 'Pastor Peña', alias: 'Pastor', crime: 'Infiltration, ex-cop', status: 'Infiltrator', bio: 'A former police officer who infiltrates San Onofre to dismantle a criminal gang.' },
                    { name: 'Antín', alias: 'The director', crime: 'Corruption, extortion', status: 'Prison director', bio: 'The director of San Onofre, a corrupt and calculating figure who pulls the strings from the shadows.' },
                ]
            }
        }
    };

    const elementsToTranslate = {
        '#main-title': 'mainTitle',
        '#jdh-title': 'jdh.title',
        '#jdh-subtitle': 'jdh.subtitle',
        '#jdh-creator-title': 'jdh.creatorTitle',
        '#jdh-label': 'jdh.label',
        '#jdh-generate-btn': 'jdh.button',
        '#jdh-ficha-title': 'jdh.fichaTitle',
        '#jdh-ficha-name-label': 'jdh.labels.name',
        '#jdh-ficha-district-label': 'jdh.labels.district',
        '#jdh-ficha-skill-label': 'jdh.labels.skill',
        '#jdh-ficha-weapon-label': 'jdh.labels.weapon',
        '#jdh-ficha-strategy-label': 'jdh.labels.strategy',
        '#marginal-title': 'marginal.title',
        '#marginal-subtitle': 'marginal.subtitle',
        '#marginal-gallery-title': 'marginal.galleryTitle',
        '#marginal-ficha-alias-label': 'marginal.labels.alias',
        '#marginal-ficha-crime-label': 'marginal.labels.crime',
        '#marginal-ficha-status-label': 'marginal.labels.status'
    };

    function translatePage(lang) {
        // Traducir los textos principales y de los títulos
        for (const [id, key] of Object.entries(elementsToTranslate)) {
            const element = document.querySelector(id);
            if (element) {
                const text = key.split('.').reduce((obj, k) => obj[k], mainContent[lang]);
                if (id.includes('btn')) {
                    element.textContent = text;
                } else {
                    element.textContent = text;
                }
            }
        }

        // Actualizar el selector de distritos de JDH
        const jdhSelect = document.getElementById('jdh-select');
        jdhSelect.innerHTML = '';
        for (const [value, text] of Object.entries(mainContent[lang].jdh.districts)) {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = text;
            jdhSelect.appendChild(option);
        }

        // Reconstruir la galería de personajes de El Marginal
        const marginalGrid = document.getElementById('marginal-characters');
        marginalGrid.innerHTML = '';
        const charactersData = mainContent[lang].marginal.characters;
        charactersData.forEach((char, index) => {
            const charDiv = document.createElement('div');
            charDiv.classList.add('personaje');
            charDiv.dataset.id = index;
            charDiv.innerHTML = `<img src="marginal_image_${index + 1}.jpg" alt="${char.name}"><p>${char.name}</p>`;
            marginalGrid.appendChild(charDiv);
        });

        addMarginalListeners(); // Volver a añadir los listeners
    }

    // Funcionalidad de Los Juegos del Hambre
    function setupJdh() {
        const generateBtn = document.getElementById('jdh-generate-btn');
        const select = document.getElementById('jdh-select');
        const ficha = document.getElementById('jdh-ficha');

        generateBtn.addEventListener('click', () => {
            const lang = langSelect.value;
            const data = mainContent[lang].jdh;
            const district = select.value;

            const randomName = data.characters ? data.characters[Math.floor(Math.random() * data.characters.length)] : 'Tributo';
            const randomSkill = data.skills[district][Math.floor(Math.random() * data.skills[district].length)];
            const randomWeapon = data.weapons[Math.floor(Math.random() * data.weapons.length)];
            const randomStrategy = data.strategies[Math.floor(Math.random() * data.strategies.length)];
            const randomImageNumber = Math.floor(Math.random() * 5) + 1; // Asumiendo 5 imágenes

            document.getElementById('jdh-ficha-name').textContent = randomName;
            document.getElementById('jdh-ficha-district').textContent = data.districts[district];
            document.getElementById('jdh-ficha-skill').textContent = randomSkill;
            document.getElementById('jdh-ficha-weapon').textContent = randomWeapon;
            document.getElementById('jdh-ficha-strategy').textContent = randomStrategy;
            document.getElementById('jdh-image').src = `jdh_image_${randomImageNumber}.jpg`;

            ficha.classList.remove('hidden');
            ficha.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Funcionalidad de El Marginal
    function addMarginalListeners() {
        const characters = document.querySelectorAll('.personaje');
        const ficha = document.getElementById('marginal-ficha');

        characters.forEach(character => {
            character.addEventListener('click', () => {
                const lang = langSelect.value;
                const index = character.dataset.id;
                const data = mainContent[lang].marginal.characters[index];

                document.getElementById('marginal-ficha-name').textContent = data.name;
                document.getElementById('marginal-image').src = `marginal_image_${parseInt(index) + 1}.jpg`;
                document.getElementById('marginal-ficha-alias').textContent = data.alias;
                document.getElementById('marginal-ficha-crime').textContent = data.crime;
                document.getElementById('marginal-ficha-status').textContent = data.status;
                document.getElementById('marginal-ficha-bio').textContent = data.bio;

                ficha.classList.remove('hidden');
                ficha.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    // Inicialización
    langSelect.addEventListener('change', () => {
        translatePage(langSelect.value);
    });

    translatePage('es'); // Iniciar en español
    setupJdh();
});
