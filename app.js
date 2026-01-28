// Inizializza la mappa
const map = L.map('map').setView([20, 0], 2); // Centra globalmente

// Aggiungi le piastrelle di OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Dati mappa &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributori'
}).addTo(map);

// Dati migliorati per i progetti di artivismo
const artivismData = [
{
        location: [39.3210, -111.0937],
        title: "Seven Magic Mountains",
        artist: "Ugo Rondinone",
        description: "Una cosa è giusta se mira a preservare l'integrità, la stabilità e la bellezza della comunità biotica. È sbagliata se va nella direzione opposta. (Aldo Leopold)",
        image: "rondinone.jpg",
    },
    {
        title: "Eleven Minute Line",
        artist: "Maya Lin",
        description: "La terra come comunità è il principio base dell'ecologia, ma che essa sia qualcosa da amare e rispettare è un'estensione di natura etica. (Aldo Leopold)",
        location: [56.1670, 14.0320], // Knislinge, Svezia (approssimato)
        image: "prato.jpg"
    },
    {
        title: "Shuttlecocks",
        artist: "Claes Oldenburg & Coosje van Bruggen",
        description: "Noi abusiamo della terra perché la consideriamo come una merce che ci appartiene. È solo quando vediamo la terra come una comunità a cui appartenere, che iniziamo a trattarla con amore e rispetto. (Aldo Leopold)",
        location: [39.0449, -94.5800], // Kansas City, USA (approssimato)
        image: "volano.jpg"
    },
    {
        title: "Dive In",
        artist: "Superflex",
        description: "La conservazione è uno stato di armonia tra gli uomini e la terra. (Aldo Leopold)",
        location: [33.6643, -116.1739], // Coachella Valley, California (approssimato)
        image: "rosa.jpg"
    },
    {
        location: [56.1629, 10.2039],
        title: "The Infinite Bridge",
        artist: "Gjøde & Povlsgaard Arkitekter",
        description: "Che il territorio sia una comunità è un concetto fondamentale dell'ecologia. (Aldo Leopold)",
        image: "ponte.jpg",
    },
    {
    location: [37.6789, 13.0624], // Gibellina, Sicilia, Italia
    title: "Grande Cretto",
    artist: "Alberto Burri",
    description: "La natura selvaggia è il materiale grezzo nel quale l'uomo ha faticosamente scolpito quest'artificio che chiamiamo civiltà. (Aldo Leopold)",
    image: "burri.jpg"
},
{
    location: [45.6997, 10.1225], // Lago d'Iseo, Italia
    title: "The Floating Piers",
    artist: "Christo e Jeanne Claude",
    description: "La fauna selvatica un tempo ci nutriva, e ha modellato la nostra cultura. Tutt'oggi ci offre ore piacevoli nel tempo libero. (Aldo Leopold)",
    image: "lago.jpg"
},
{
    location: [41.4362, -112.6687], // Grande Lago Salato, Utah, USA
    title: "Spiral Jetty",
    artist: "Robert Smithson",
    description: "Esistono due pericoli spirituali nel non possedere una fattoria: il primo sta nel credere che la colazione venga dal negozio, l'altro che il calore venga dalla caldaia. (Aldo Leopold)",
    image: "spirale.jpg"
},
{
    location: [38.0333, 14.0333], // Tusa, Sicilia, Italia
    title: "Fiumara d'arte",
    artist: "Mauro Staccioli",
    description: "La prima regola di una riparazione intelligente è di conservare tutti i pezzi. (Aldo Leopold)",
    image: "zampirone.png"
},
{
    location: [43.1590, 12.0990], // Punta Navaccia, Tuoro sul Trasimeno, Umbria, Italia
    title: "Campo del Sole",
    artist: "Pietro Cascella, Cordelia Von den Steinen, Mauro Berrettini",
    description: "Il problema è come inculcare una tensione all'armonia con la terra in persone che hanno dimenticato che esiste qualcosa che si chiama terra. (Aldo Leopold)",
    image: "sole.jpg"
},
{
    location: [43.0707, 12.6176], // Assisi, Umbria, Italia
    title: "Terzo Paradiso",
    artist: "Michelangelo Pistoletto",
    description: "Noi abusiamo della terra perché la consideriamo come un bene appartenente a noi. (Aldo Leopold)",
    image: "radiso.jpg"
},
{
    location: [43.4000, 10.8667], // Volterra, Toscana, Italia
    title: "Il Tondo Pieno",
    artist: "Mauro Staccioli",
    description: "Le piante creano il mondo in cui viviamo – letteralmente: lo rendono respirabile e permettono alla luce solare di penetrare la carne minerale di questo pianeta. Chi crea il mondo e lo rende abitabile merita venerazione e culto. (Emanuele Coccia)",
    image: "tondo.jpg"
},
{
    location: [43.4667, 11.3667], // Pievasciata, Chianti, Toscana, Italia
    title: "Parco di Sculture del Chianti",
    artist: "Artisti vari",
    description: "Tutte le specie condividono un'unica e sola vita e una medesima carne: quella della Terra. Non esistono specie o regni più virtuosi o più viziosi. (Emanuele Coccia)",
    image: "chianti.jpg"
},
{
    location: [44.7167, 7.8833], // Guarene, Roero, Piemonte, Italia
    title: "Parco d'Arte Sandretto Re Rebaudengo",
    artist: "Artisti vari",
    description: "Ogni città è una foresta che ha dimenticato di esserlo: possiamo associarci con altri esseri umani se e solo se includiamo in questa associazione mille altre specie da cui dipendiamo. (Emanuele Coccia)",
    image: "re.jpg"
},
{
    location: [46.3050, 11.4167], // Pampeago, Val di Fiemme, Trentino-Alto Adige, Italia
    title: "Respirart",
    artist: "Artisti vari",
    description: "Come il vento e i tramonti, la natura selvaggia è stata sempre data per scontata, finché il progresso non ha iniziato la sua opera di devastazione. (Aldo Leopold)",
    image: "respi.jpg"
},
{
    location: [54.5833, 36.5667], // Nikola-Lenivets, regione di Kaluga, Russia
    title: "Parco Nikola Lenivets",
    artist: "Nikolay Polissky e altri",
    description: "Pensare in modo ecologico significa credere che vi sia un ordine da difendere, che in natura esistano limiti da non superare e che tali limiti siano definiti dal rapporto patrimoniale e patriarcale con altre specie. (Emanuele Coccia)",
    image: "piri.jpg"
},
{
    location: [28.9580, 34.3770], // Deserto del Sinai, Egitto
    title: "Desert Breath",
    artist: "Danae Stratou, Alexandra Stratou, Stella Constantinides",
    description: "L'ecologia condivide con l'economia capitalistica la stessa origine, lo stesso vocabolario e la stessa struttura concettuale. L'ecologia non ci salverà mai dal neoliberalismo. (Emanuele Coccia)",
    image: "deserto.jpg"
},
{
    location: [25.7617, -80.1918], // Miami, Florida, Stati Uniti
    title: "Surrounded Islands",
    artist: "Christo e Jeanne Claude",
    description: "Nasciamo sempre in un corpo altro dal nostro: è esattamente questo che chiamiamo natura. (Emanuele Coccia)",
    image: "isole.jpg"
},
{
    location: [-44.7071, 169.1347], // Lago Wanaka, Nuova Zelanda
    title: "Synergy",
    artist: "Martin Hill",
    description: "Il Pianeta stesso è diventato casa. (Emanuele Coccia)",
    image: "hill.jpg"
},
{
    location: [52.7810, 6.8955], // Emmen, Paesi Bassi
    title: "Broken Circle / Spiral Hill",
    artist: "Robert Smithson",
    description: "L'ecologia è una scienza assieme imprescindibile e molto ambigua: è l'unica forma di universalismo che ci resta e la sola politica possibile oggi. (Emanuele Coccia)",
    image: "circle.jpg"
},
{
    location: [44.1260, -79.4510], // King City, Ontario, Canada
    title: "Shift",
    artist: "Richard Serra",
    description: "È solo nella sua mescolanza con il resto degli elementi che ogni cosa trova la sua verità. (Emanuele Coccia)",
    image: "shift.jpg"
},
{
    location: [40.6965, -113.0140], // Great Basin Desert, Utah, USA
    title: "Sun Tunnels",
    artist: "Nancy Holt",
    description: "Nel respiro la pianta è mondo attraversato dal mondo, è essere che lascia trascorrere l'essere. (Emanuele Coccia)",
    image: "tunnels.jpg"
},
{
    location: [35.2456, -111.2592], // Contea di Coconino, Arizona, USA
    title: "Roden Crater Project",
    artist: "James Turrell",
    description: "Il vero soggetto di ogni metamorfosi è il nostro stesso pianeta, dove tutti gli esseri viventi non sono altro che un riciclaggio continuo di corpi in mutamento inarrestabile. (Emanuele Coccia)",
    image: "roden.jpg"
},
{
    location: [34.3900, -105.4717], // Anton Chico, New Mexico, USA
    title: "Star Axis",
    artist: "Charles Ross",
    description: "Parigi e Milano sono due città che stanno provando a ripensare la presenza vegetale nel loro tessuto, ma moltissimo ancora resta da fare. Bisognerebbe assieme rovesciare i termini e radicalizzarli. (Emanuele Coccia)",
    image: "star.jpg"
},
{
    location: [51.5500, -9.2667], // Skibbereen, Irlanda
    title: "Sky Garden Crater",
    artist: "Artisti vari",
    description: "Dire che la vita sul pianeta è una grande casa significa che questa rispetta tale ordine e che ciascun elemento che la compone produce una forma di utilità in virtù di tale ordine. (Emanuele Coccia)",
    image: "crater.jpg"
},
{
    location: [42.2780, -83.7382], // Ann Arbor, Michigan, USA
    title: "Wave Field",
    artist: "Maya Lin",
    description: "La biodiversità non è fuori di noi, ma dentro: è il nostro Dna, la nostra carne stessa, fatta di metamorfosi incessanti tra forme viventi. (Emanuele Coccia)",
    image: "wave.jpg"
}                                                 
    ];

// Rileva se è un dispositivo mobile
const isMobile = () => window.innerWidth <= 768;

// ============================================
// CREA OVERLAY DINAMICO PER LE IMMAGINI
// ============================================
const overlay = document.createElement('div');
overlay.id = 'image-overlay';
overlay.style = `
    display: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.75);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    justify-content: center;
    align-items: center;
    z-index: 1000;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
`;

// HTML interno overlay con pulsante chiudi migliorato
overlay.innerHTML = `
    <div id="overlay-header" style="
        width: 100%;
        max-width: 600px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        position: relative;
    ">
        <div id="overlay-artist" style="
            color: white; 
            text-align: left; 
            flex: 1;
            font-size: clamp(16px, 5vw, 20px);
            font-weight: 500;
        "></div>
        <button id="close-overlay" style="
            background: #2D9CDB;
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            min-width: 50px;
            font-size: 28px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 10px rgba(45, 156, 219, 0.4);
            transition: background-color 0.3s ease, transform 0.3s ease;
            flex-shrink: 0;
            margin-left: 15px;
        " onmouseover="this.style.backgroundColor='#1A74B9'; this.style.transform='scale(1.1)';" 
           onmouseout="this.style.backgroundColor='#2D9CDB'; this.style.transform='scale(1)';">×</button>
    </div>
    
    <div id="overlay-content" style="
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        width: 100%;
        max-width: 90vw;
        max-height: 70vh;
        position: relative;
    ">
        <img
            id="overlay-image"
            src=""
            style="
                max-width: 100%;
                max-height: 100%;
                object-fit: contain;
                background: black;
                display: block;
                border-radius: 10px;
            "
        >
    </div>
    
    <div id="overlay-info" style="
        color: white; 
        text-align: center; 
        margin-top: 20px; 
        font-size: clamp(14px, 4vw, 16px);
        max-width: 90%;
        line-height: 1.6;
    "></div>
`;

document.body.appendChild(overlay);

// ============================================
// GESTURE HANDLING E INTERAZIONI
// ============================================
let touchStartY = 0;
let touchEndY = 0;

// Gestione touch per swipe
overlay.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
}, false);

overlay.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeDistance = touchStartY - touchEndY;
    if (swipeDistance > 100) { // Swipe verso l'alto di almeno 100px
        closeOverlay();
    }
}

// Funzione per chiudere l'overlay
function closeOverlay() {
    overlay.style.display = 'none';
    
    // Ripristina i bottoni
    const homeButton = document.querySelector('.home-button');
    const ecologyButton = document.querySelector('.ecology-button');
    if (homeButton) homeButton.style.display = '';
    if (ecologyButton) ecologyButton.style.display = '';
}

// Chiudi overlay con il bottone X
document.getElementById('close-overlay').addEventListener('click', closeOverlay);

// Chiudi overlay cliccando fuori dal contenuto (solo desktop)
overlay.addEventListener('click', (e) => {
    if (e.target.id === 'image-overlay' && !isMobile()) {
        closeOverlay();
    }
});

// Chiudi con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.style.display === 'flex') {
        closeOverlay();
    }
});

// ============================================
// CREA I MARKER E COLLEGA L'OVERLAY
// ============================================
artivismData.forEach((project) => {
    const marker = L.marker(project.location).addTo(map);

    marker.on('click', () => {
        document.getElementById('overlay-image').src = project.image;
        document.getElementById('overlay-artist').innerHTML = `<strong>${project.title}</strong><br><i>${project.artist}</i>`;
        
        // Separa la citazione dall'autore
        const descParts = project.description.match(/^(.*?)\s*\(([^)]+)\)$/);
        let descHTML;
        if (descParts) {
            descHTML = `"${descParts[1]}"<br><i>– ${descParts[2]}</i>`;
        } else {
            descHTML = project.description;
        }
        document.getElementById('overlay-info').innerHTML = descHTML;
        overlay.style.display = 'flex';
        
        // Nascondi i bottoni
        const homeButton = document.querySelector('.home-button');
        const ecologyButton = document.querySelector('.ecology-button');
        if (homeButton) homeButton.style.display = 'none';
        if (ecologyButton) ecologyButton.style.display = 'none';
    });
});

// Debug: conferma il caricamento della mappa
console.log("Mappa inizializzata con successo.");
