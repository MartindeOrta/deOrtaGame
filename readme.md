https://martindeorta.github.io/deOrtaGame/
EL contrato esta desplegado en la testNet Sepolia.
Ahora lo unico que hace es desplejar un token NFT.

Idea de Proyecto: deOrtaGame
Descripción del Juego:
deOrtaGame es un juego de estrategia donde los jugadores coleccionan y entrenan guerreros digitales. Los jugadores pueden combatir contra otros jugadores, participar en torneos y completar misiones para ganar criptomonedas y tokens exclusivos.

Características Principales:
Colección de Guerreros:

Los jugadores pueden acuñar nuevos guerreros utilizando tokens ERC-721 (NFTs).
Cada guerrero tiene atributos únicos (fuerza, agilidad, inteligencia) y rarezas.
Combate PVP:

Los jugadores pueden desafiar a otros jugadores en combates 1v1.
Las batallas se resuelven mediante contratos inteligentes, utilizando un sistema de combate basado en atributos.
Misiones y Torneos:

Misiones diarias y semanales que ofrecen recompensas.
Torneos periódicos donde los jugadores pueden ganar grandes premios en criptomonedas.
Mercado de Guerreros:

Los jugadores pueden comprar y vender guerreros en un mercado descentralizado.
Recompensas:

Los jugadores ganan criptomonedas y tokens especiales al ganar combates, completar misiones y participar en torneos.
Tecnologías Utilizadas:
Solidity para contratos inteligentes (ERC-721 para guerreros y ERC-20 para tokens).
Web3.js para interactuar con la blockchain desde la frontend.
React para la interfaz de usuario.
IPFS para almacenar los datos de los guerreros de manera descentralizada.
Chainlink VRF para generar números aleatorios verificables (para atributos de guerreros y resultados de combate).
Estructura del Proyecto:
1. Contratos Inteligentes
deOrtaGame (ERC-721): Define los guerreros, sus atributos y métodos para acuñar nuevos guerreros.
BattleContract: Define las reglas del combate y resuelve los enfrentamientos entre guerreros.
RewardToken (ERC-20): Token que se utiliza para las recompensas del juego.
2. Frontend
Registro y Inicio de Sesión: Los jugadores se registran y conectan sus wallets.()
Interfaz de Guerreros: Muestra los guerreros del jugador y sus atributos.
Pantalla de Combate: Permite desafiar a otros jugadores y ver los resultados de las batallas.
Mercado: Interfaz para comprar y vender guerreros.
Misiones y Torneos: Interfaz para ver y participar en misiones y torneos.
3. Backend
a definir 
Base de Datos: Almacena información relevante del juego (opcional, para datos no críticos).




Ejemplo de json 

{
  "name": "MartyrNFT 00000000000",
  "description": "A unique MartyrNFT with specific attributes.",
  "image": "https://scarlet-labour-leopon-223.mypinata.cloud/ipfs/QmdfBb1NLd67kp8hJhJnAh2BHcKBP88NRQLn4z1qghutAc",
  "attributes": [
    {
      "trait_type": "strength",
      "value": 100000
    },
    {
      "trait_type": "agility",
      "value": 100000
    },
    {
      "trait_type": "intelligence",
      "value": 100000
    },
    {
      "trait_type": "rarity",
      "value": "Legendary"
    }
  ]
}

