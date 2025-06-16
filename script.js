const planets = [
  {
    name: "Echoon",
    description: "A planet where sound controls gravity.",
    image: "https://example.com/echoon.jpg",
    voice: "https://assets.spacelex.ai/audio/echoon.mp3"
  },
  {
    name: "Lumora",
    description: "Where light becomes solid.",
    image: "https://example.com/lumora.jpg",
    voice: "https://assets.spacelex.ai/audio/lumora.mp3"
  },
  {
    name: "Cryonox",
    description: "A frozen core with burning skies.",
    image: "https://example.com/cryonox.jpg",
    voice: "https://assets.spacelex.ai/audio/cryonox.mp3"
  },
  {
    name: "Zentara",
    description: "Where thoughts shape reality.",
    image: "https://example.com/zentara.jpg",
    voice: "https://assets.spacelex.ai/audio/zentara.mp3"
  },
  {
    name: "Threxia",
    description: "A planet of living storms and emotion-based climate.",
    image: "https://example.com/threxia.jpg",
    voice: "https://assets.spacelex.ai/audio/threxia.mp3"
  }
];

let current = 0;
function nextScene() {
  if (current < planets.length) {
    const p = planets[current];
    document.getElementById("planetInfo").innerText = `🌍 Planet: ${p.name} - ${p.description}`;
    document.getElementById("planetView").style.backgroundImage = `url('${p.image}')`;
    const audio = document.getElementById("voice");
    audio.src = p.voice;
    audio.play();
    current++;
  } else {
    document.getElementById("planetInfo").innerText = "🌌 End of the series. New missions coming soon...";
    document.getElementById("planetView").style.backgroundImage = 'none';
    document.getElementById("voice").pause();
  }
}
