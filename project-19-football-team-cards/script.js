const cards = document.querySelector(".cards");
const dropdown = document.getElementById("filter-dropdown");

const players = [
  {
    name: "Sergio Almirón",
    position: "forward",
    number: 1,
    nickname: "N/A",
  },
  {
    name: "Sergio Batista",
    position: "midfielder",
    number: 2,
    nickname: "N/A",
  },
  {
    name: "Ricardo Bochini",
    position: "midfielder",
    number: 3,
    nickname: "El Bocha",
  },
  {
    name: "Claudio Borghi",
    position: "midfielder",
    number: 4,
    nickname: "Bichi",
  },
  {
    name: "José Luis Brown",
    position: "defender",
    number: 5,
    nickname: "Tata",
  },
  {
    name: "Daniel Passarella",
    position: "defender",
    number: 6,
    nickname: "El Gran Capitán",
  },
  {
    name: "Jorge Burruchaga",
    position: "forward",
    number: 7,
    nickname: "Burru",
  },
  {
    name: "Néstor Clausen",
    position: "defender",
    number: 8,
    nickname: "N/A",
  },
  {
    name: "José Luis Cuciuffo",
    position: "defender",
    number: 9,
    nickname: "El Cuchu",
  },
  {
    name: "Diego Maradona",
    position: "midfielder",
    number: 10,
    nickname: "El Pibe de Oro",
  },
  {
    name: "Jorge Valdano",
    position: "forward",
    number: 11,
    nickname: "The Philosopher of Football",
  },
  {
    name: "Héctor Enrique",
    position: "midfielder",
    number: 12,
    nickname: "N/A",
  },
  {
    name: "Oscar Garré",
    position: "defender",
    number: 13,
    nickname: "N/A",
  },
  {
    name: "Ricardo Giusti",
    position: "midfielder",
    number: 14,
    nickname: "N/A",
  },
  {
    name: "Luis Islas",
    position: "goalkeeper",
    number: 15,
    nickname: "El loco",
  },
  {
    name: "Julio Olarticoechea",
    position: "defender",
    number: 16,
    nickname: "N/A",
  },
  {
    name: "Pedro Pasculli",
    position: "forward",
    number: 17,
    nickname: "N/A",
  },
  {
    name: "Nery Pumpido",
    position: "goalkeeper",
    number: 18,
    nickname: "N/A",
  },
  {
    name: "Oscar Ruggeri",
    position: "defender",
    number: 19,
    nickname: "El Cabezón",
  },
  {
    name: "Carlos Tapia",
    position: "midfielder",
    number: 20,
    nickname: "N/A",
  },
  {
    name: "Marcelo Trobbiani",
    position: "midfielder",
    number: 21,
    nickname: "Calesita",
  },
  {
    name: "Héctor Zelada",
    position: "goalkeeper",
    number: 22,
    nickname: "N/A",
  },
];

const renderUI = (players) => {
  let stringHTML = ``;
  for (const player of players) {
    stringHTML += `
      <div class="card">
        <h2>${player.name}</h2>
        <p>Position: ${player.position}</p>
        <p>Number: ${player.number}</p>
        <p>Nickname: ${player.nickname}</p>
      </div>
    `;
  }
  cards.innerHTML = stringHTML;
};



const dropdownHandler = (e) => {
  const selection = e.target.value;
  if (selection === "all-players") {
    renderUI(players);
  } else if (selection === "nicknames") {
    renderUI(players.filter(player => player.nickname !== "N/A"));
  } else if (selection === "position-forward") {
    renderUI(players.filter(player => player.position === "forward"));
  } else if (selection === "position-midfielder") {
    renderUI(players.filter(player => player.position === "midfielder"));
  } else if (selection === "position-defender") {
    renderUI(players.filter(player => player.position === "defender"));
  } else if (selection === "position-goalkeeper") {
    renderUI(players.filter(player => player.position === "goalkeeper"));
  } 
}

dropdown.addEventListener("change", dropdownHandler);

renderUI(players);