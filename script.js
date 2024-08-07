const stats = {
    "Bulbasaur": 318,
    "Ivysaur": 405,
    "Venusaur": 525,
    "Charmander": 309,
    "Charmeleon": 405,
    "Charizard": 534,
    "Squirtle": 314,
    "Wartortle": 405,
    "Blastoise": 530,
    "Caterpie": 195,
    "Metapod": 205,
    "Butterfree": 395,
    "Weedle": 195,
    "Kakuna": 205,
    "Beedrill": 395,
    "Pidgey": 251,
    "Pidgeotto": 349,
    "Pidgeot": 479,
    "Rattata": 253,
    "Raticate": 413,
    "Spearow": 262,
    "Fearow": 442,
    "Ekans": 288,
    "Arbok": 448,
    "Pikachu": 320,
    "Raichu": 485,
    "Sandshrew": 300,
    "Sandslash": 450,
    "Nidoran♀": 275,
    "Nidorina": 365,
    "Nidoqueen": 505,
    "Nidoran♂": 273,
    "Nidorino": 365,
    "Nidoking": 505,
    "Clefairy": 323,
    "Clefable": 483,
    "Vulpix": 299,
    "Ninetales": 505,
    "Jigglypuff": 270,
    "Wigglytuff": 435,
    "Zubat": 245,
    "Golbat": 455,
    "Oddish": 320,
    "Gloom": 395,
    "Vileplume": 490,
    "Paras": 285,
    "Parasect": 405,
    "Venonat": 305,
    "Venomoth": 450,
    "Diglett": 265,
    "Dugtrio": 425,
    "Meowth": 290,
    "Persian": 440,
    "Psyduck": 320,
    "Golduck": 500,
    "Mankey": 305,
    "Primeape": 455,
    "Growlithe": 350,
    "Arcanine": 555,
    "Poliwag": 300,
    "Poliwhirl": 385,
    "Poliwrath": 510,
    "Abra": 310,
    "Kadabra": 400,
    "Alakazam": 500,
    "Machop": 305,
    "Machoke": 405,
    "Machamp": 505,
    "Bellsprout": 300,
    "Weepinbell": 390,
    "Victreebel": 490,
    "Tentacool": 335,
    "Tentacruel": 515,
    "Geodude": 300,
    "Graveler": 390,
    "Golem": 495,
    "Ponyta": 410,
    "Rapidash": 500,
    "Slowpoke": 315,
    "Slowbro": 490,
    "Magnemite": 325,
    "Magneton": 465,
    "Farfetch'd": 352,
    "Doduo": 310,
    "Dodrio": 470,
    "Seel": 325,
    "Dewgong": 475,
    "Grimer": 325,
    "Muk": 500,
    "Shellder": 305,
    "Cloyster": 525,
    "Gastly": 310,
    "Haunter": 405,
    "Gengar": 500,
    "Onix": 385,
    "Drowzee": 328,
    "Hypno": 483,
    "Krabby": 325,
    "Kingler": 475,
    "Voltorb": 330,
    "Electrode": 480,
    "Exeggcute": 325,
    "Exeggutor": 520,
    "Cubone": 320,
    "Marowak": 425,
    "Hitmonlee": 455,
    "Hitmonchan": 455,
    "Lickitung": 385,
    "Koffing": 340,
    "Weezing": 490,
    "Rhyhorn": 345,
    "Rhydon": 485,
    "Chansey": 450,
    "Tangela": 435,
    "Kangaskhan": 490,
    "Horsea": 295,
    "Seadra": 440,
    "Goldeen": 320,
    "Seaking": 450,
    "Staryu": 340,
    "Starmie": 520,
    "Mr. Mime": 460,
    "Scyther": 500,
    "Jynx": 455,
    "Electabuzz": 490,
    "Magmar": 495,
    "Pinsir": 500,
    "Tauros": 490,
    "Magikarp": 200,
    "Gyarados": 540,
    "Lapras": 535,
    "Ditto": 288,
    "Eevee": 325,
    "Vaporeon": 525,
    "Jolteon": 525,
    "Flareon": 525,
    "Porygon": 395,
    "Omanyte": 355,
    "Omastar": 495,
    "Kabuto": 355,
    "Kabutops": 495,
    "Aerodactyl": 515,
    "Snorlax": 540,
    "Articuno": 580,
    "Zapdos": 580,
    "Moltres": 580,
    "Dratini": 300,
    "Dragonair": 420,
    "Dragonite": 600,
    "Mewtwo": 680,
    "Mew": 600,
    "Chikorita": 318,
    "Bayleef": 405,
    "Meganium": 525,
    "Cyndaquil": 309,
    "Quilava": 405,
    "Typhlosion": 534,
    "Totodile": 314,
    "Croconaw": 405,
    "Feraligatr": 530,
    "Sentret": 215,
    "Furret": 415,
    "Hoothoot": 262,
    "Noctowl": 452,
    "Ledyba": 265,
    "Ledian": 390,
    "Spinarak": 250,
    "Ariados": 390,
    "Crobat": 535,
    "Chinchou": 330,
    "Lanturn": 460,
    "Pichu": 205,
    "Cleffa": 218,
    "Igglybuff": 210,
    "Togepi": 245,
    "Togetic": 405,
    "Natu": 320,
    "Xatu": 470,
    "Mareep": 280,
    "Flaaffy": 365,
    "Ampharos": 510,
    "Bellossom": 490,
    "Marill": 250,
    "Azumarill": 420,
    "Sudowoodo": 410,
    "Politoed": 500,
    "Hoppip": 250,
    "Skiploom": 340,
    "Jumpluff": 460,
    "Aipom": 360,
    "Sunkern": 180,
    "Sunflora": 425,
    "Yanma": 390,
    "Wooper": 210,
    "Quagsire": 430,
    "Espeon": 525,
    "Umbreon": 525,
    "Murkrow": 405,
    "Slowking": 490,
    "Misdreavus": 435,
    "Unown": 336,
    "Wobbuffet": 405,
    "Girafarig": 455,
    "Pineco": 290,
    "Forretress": 465,
    "Dunsparce": 415,
    "Gligar": 430,
    "Steelix": 510,
    "Snubbull": 300,
    "Granbull": 450,
    "Qwilfish": 430,
    "Scizor": 500,
    "Shuckle": 505,
    "Heracross": 500,
    "Sneasel": 430,
    "Teddiursa": 330,
    "Ursaring": 500,
    "Slugma": 250,
    "Magcargo": 410,
    "Swinub": 250,
    "Piloswine": 450,
    "Corsola": 410,
    "Remoraid": 300,
    "Octillery": 480,
    "Delibird": 330,
    "Mantine": 465,
    "Skarmory": 465,
    "Houndour": 330,
    "Houndoom": 500,
    "Kingdra": 540,
    "Phanpy": 330,
    "Donphan": 500,
    "Porygon2": 515,
    "Stantler": 465,
    "Smeargle": 250,
    "Tyrogue": 210,
    "Hitmontop": 455,
    "Smoochum": 305,
    "Elekid": 360,
    "Magby": 365,
    "Miltank": 490,
    "Blissey": 540,
    "Raikou": 580,
    "Entei": 580,
    "Suicune": 580,
    "Larvitar": 300,
    "Pupitar": 410,
    "Tyranitar": 600,
    "Lugia": 680,
    "Ho-oh": 680,
    "Celebi": 600,
    "Treecko": 310,
    "Grovyle": 405,
    "Sceptile": 530,
    "Torchic": 310,
    "Combusken": 405,
    "Blaziken": 530,
    "Mudkip": 310,
    "Marshtomp": 405,
    "Swampert": 535,
    "Poochyena": 220,
    "Mightyena": 420,
    "Zigzagoon": 240,
    "Linoone": 420,
    "Wurmple": 195,
    "Silcoon": 205,
    "Beautifly": 395,
    "Cascoon": 205,
    "Dustox": 385,
    "Lotad": 220,
    "Lombre": 340,
    "Ludicolo": 480,
    "Seedot": 220,
    "Nuzleaf": 340,
    "Shiftry": 480,
    "Taillow": 270,
    "Swellow": 430,
    "Wingull": 270,
    "Pelipper": 440,
    "Ralts": 198,
    "Kirlia": 278,
    "Gardevoir": 518,
    "Surskit": 269,
    "Masquerain": 414,
    "Shroomish": 295,
    "Breloom": 460,
    "Slakoth": 280,
    "Vigoroth": 440,
    "Slaking": 670,
    "Nincada": 266,
    "Ninjask": 456,
    "Shedinja": 236,
    "Whismur": 240,
    "Loudred": 360,
    "Exploud": 490,
    "Makuhita": 237,
    "Hariyama": 474,
    "Azurill": 190,
    "Nosepass": 375,
    "Skitty": 260,
    "Delcatty": 380,
    "Sableye": 380,
    "Mawile": 380,
    "Aron": 330,
    "Lairon": 430,
    "Aggron": 530,
    "Meditite": 280,
    "Medicham": 410,
    "Electrike": 295,
    "Manectric": 475,
    "Plusle": 405,
    "Minun": 405,
    "Volbeat": 430,
    "Illumise": 430,
    "Roselia": 400,
    "Gulpin": 302,
    "Swalot": 467,
    "Carvanha": 305,
    "Sharpedo": 460,
    "Wailmer": 400,
    "Wailord": 500,
    "Numel": 305,
    "Camerupt": 460,
    "Torkoal": 470,
    "Spoink": 330,
    "Grumpig": 470,
    "Spinda": 360,
    "Trapinch": 290,
    "Vibrava": 340,
    "Flygon": 520,
    "Cacnea": 335,
    "Cacturne": 475,
    "Swablu": 310,
    "Altaria": 490,
    "Zangoose": 458,
    "Seviper": 458,
    "Lunatone": 460,
    "Solrock": 460,
    "Barboach": 288,
    "Whiscash": 468,
    "Corphish": 308,
    "Crawdaunt": 468,
    "Baltoy": 300,
    "Claydol": 500,
    "Lileep": 355,
    "Cradily": 495,
    "Anorith": 355,
    "Armaldo": 495,
    "Feebas": 200,
    "Milotic": 540,
    "Castform": 420,
    "Kecleon": 440,
    "Shuppet": 295,
    "Banette": 455,
    "Duskull": 295,
    "Dusclops": 455,
    "Tropius": 460,
    "Chimecho": 455,
    "Absol": 465,
    "Wynaut": 260,
    "Snorunt": 300,
    "Glalie": 480,
    "Spheal": 290,
    "Sealeo": 410,
    "Walrein": 530,
    "Clamperl": 345,
    "Huntail": 485,
    "Gorebyss": 485,
    "Relicanth": 485,
    "Luvdisc": 330,
    "Bagon": 300,
    "Shelgon": 420,
    "Salamence": 600,
    "Beldum": 300,
    "Metang": 420,
    "Metagross": 600,
    "Regirock": 580,
    "Regice": 580,
    "Registeel": 580,
    "Latias": 600,
    "Latios": 600,
    "Kyogre": 670,
    "Groudon": 670,
    "Rayquaza": 680,
    "Jirachi": 600,
    "Deoxys": 600,
    "Turtwig": 318,
    "Grotle": 405,
    "Torterra": 525,
    "Chimchar": 309,
    "Monferno": 405,
    "Infernape": 534,
    "Piplup": 314,
    "Prinplup": 405,
    "Empoleon": 530,
    "Starly": 245,
    "Staravia": 340,
    "Staraptor": 485,
    "Bidoof": 250,
    "Bibarel": 410,
    "Kricketot": 194,
    "Kricketune": 384,
    "Shinx": 263,
    "Luxio": 363,
    "Luxray": 523,
    "Budew": 280,
    "Roserade": 515,
    "Cranidos": 350,
    "Rampardos": 495,
    "Shieldon": 350,
    "Bastiodon": 495,
    "Burmy": 224,
    "Wormadam": 424,
    "Mothim": 424,
    "Combee": 244,
    "Vespiquen": 474,
    "Pachirisu": 405,
    "Buizel": 330,
    "Floatzel": 495,
    "Cherubi": 275,
    "Cherrim": 450,
    "Shellos": 325,
    "Gastrodon": 475,
    "Ambipom": 482,
    "Drifloon": 348,
    "Drifblim": 498,
    "Buneary": 350,
    "Lopunny": 480,
    "Mismagius": 495,
    "Honchkrow": 505,
    "Glameow": 310,
    "Purugly": 452,
    "Chingling": 285,
    "Stunky": 329,
    "Skuntank": 479,
    "Bronzor": 300,
    "Bronzong": 500,
    "Bonsly": 290,
    "Mime Jr.": 310,
    "Happiny": 220,
    "Chatot": 411,
    "Spiritomb": 485,
    "Gible": 300,
    "Gabite": 410,
    "Garchomp": 600,
    "Munchlax": 390,
    "Riolu": 285,
    "Lucario": 525,
    "Hippopotas": 330,
    "Hippowdon": 525,
    "Skorupi": 330,
    "Drapion": 500,
    "Croagunk": 300,
    "Toxicroak": 490,
    "Carnivine": 454,
    "Finneon": 330,
    "Lumineon": 460,
    "Mantyke": 345,
    "Snover": 334,
    "Abomasnow": 494,
    "Weavile": 510,
    "Magnezone": 535,
    "Lickilicky": 515,
    "Rhyperior": 535,
    "Tangrowth": 535,
    "Electivire": 540,
    "Magmortar": 540,
    "Togekiss": 545,
    "Yanmega": 515,
    "Leafeon": 525,
    "Glaceon": 525,
    "Gliscor": 510,
    "Mamoswine": 530,
    "Porygon-Z": 535,
    "Gallade": 518,
    "Probopass": 525,
    "Dusknoir": 525,
    "Froslass": 480,
    "Rotom": 440,
    "Uxie": 580,
    "Mesprit": 580,
    "Azelf": 580,
    "Dialga": 680,
    "Palkia": 680,
    "Heatran": 600,
    "Regigigas": 670,
    "Giratina": 680,
    "Cresselia": 600,
    "Phione": 480,
    "Manaphy": 600,
    "Darkrai": 600,
    "Shaymin": 600,
    "Arceus": 720,
    "Victini": 600,
    "Snivy": 308,
    "Servine": 413,
    "Serperior": 528,
    "Tepig": 308,
    "Pignite": 418,
    "Emboar": 528,
    "Oshawott": 308,
    "Dewott": 413,
    "Samurott": 528,
    "Patrat": 255,
    "Watchog": 420,
    "Lillipup": 275,
    "Herdier": 370,
    "Stoutland": 500,
    "Purrloin": 281,
    "Liepard": 446,
    "Pansage": 316,
    "Simisage": 498,
    "Pansear": 316,
    "Simisear": 498,
    "Panpour": 316,
    "Simipour": 498,
    "Munna": 292,
    "Musharna": 487,
    "Pidove": 264,
    "Tranquill": 358,
    "Unfezant": 488,
    "Blitzle": 295,
    "Zebstrika": 497,
    "Roggenrola": 280,
    "Boldore": 390,
    "Gigalith": 515,
    "Woobat": 313,
    "Swoobat": 425,
    "Drilbur": 328,
    "Excadrill": 508,
    "Audino": 445,
    "Timburr": 305,
    "Gurdurr": 405,
    "Conkeldurr": 505,
    "Tympole": 294,
    "Palpitoad": 384,
    "Seismitoad": 509,
    "Throh": 465,
    "Sawk": 465,
    "Sewaddle": 310,
    "Swadloon": 380,
    "Leavanny": 500,
    "Venipede": 260,
    "Whirlipede": 360,
    "Scolipede": 485,
    "Cottonee": 280,
    "Whimsicott": 480,
    "Petilil": 280,
    "Lilligant": 480,
    "Basculin": 460,
    "Sandile": 292,
    "Krokorok": 351,
    "Krookodile": 519,
    "Darumaka": 315,
    "Darmanitan": 480,
    "Maractus": 461,
    "Dwebble": 325,
    "Crustle": 475,
    "Scraggy": 348,
    "Scrafty": 488,
    "Sigilyph": 490,
    "Yamask": 303,
    "Cofagrigus": 483,
    "Tirtouga": 355,
    "Carracosta": 495,
    "Archen": 401,
    "Archeops": 567,
    "Trubbish": 329,
    "Garbodor": 474,
    "Zorua": 330,
    "Zoroark": 510,
    "Minccino": 300,
    "Cinccino": 470,
    "Gothita": 290,
    "Gothorita": 390,
    "Gothitelle": 490,
    "Solosis": 290,
    "Duosion": 370,
    "Reuniclus": 490,
    "Ducklett": 305,
    "Swanna": 473,
    "Vanillite": 305,
    "Vanillish": 395,
    "Vanilluxe": 535,
    "Deerling": 335,
    "Sawsbuck": 475,
    "Emolga": 428,
    "Karrablast": 315,
    "Escavalier": 495,
    "Foongus": 294,
    "Amoonguss": 464,
    "Frillish": 335,
    "Jellicent": 480,
    "Alomomola": 470,
    "Joltik": 319,
    "Galvantula": 472,
    "Ferroseed": 305,
    "Ferrothorn": 489,
    "Klink": 300,
    "Klang": 440,
    "Klinklang": 520,
    "Tynamo": 275,
    "Eelektrik": 405,
    "Eelektross": 515,
    "Elgyem": 335,
    "Beheeyem": 485,
    "Litwick": 275,
    "Lampent": 370,
    "Chandelure": 520,
    "Axew": 320,
    "Fraxure": 410,
    "Haxorus": 540,
    "Cubchoo": 305,
    "Beartic": 485,
    "Cryogonal": 485,
    "Shelmet": 305,
    "Accelgor": 495,
    "Stunfisk": 471,
    "Mienfoo": 350,
    "Mienshao": 510,
    "Druddigon": 485,
    "Golett": 303,
    "Golurk": 483,
    "Pawniard": 340,
    "Bisharp": 490,
    "Bouffalant": 490,
    "Rufflet": 350,
    "Braviary": 510,
    "Vullaby": 370,
    "Mandibuzz": 510,
    "Heatmor": 484,
    "Durant": 484,
    "Deino": 300,
    "Zweilous": 420,
    "Hydreigon": 600,
    "Larvesta": 360,
    "Volcarona": 550,
    "Cobalion": 580,
    "Terrakion": 580,
    "Virizion": 580,
    "Tornadus": 580,
    "Thundurus": 580,
    "Reshiram": 680,
    "Zekrom": 680,
    "Landorus": 600,
    "Kyurem": 660,
    "Keldeo": 580,
    "Meloetta": 600,
    "Genesect": 600,
    "Chespin": 313,
    "Quilladin": 405,
    "Chesnaught": 530,
    "Fennekin": 307,
    "Braixen": 409,
    "Delphox": 534,
    "Froakie": 314,
    "Frogadier": 405,
    "Greninja": 530,
    "Bunnelby": 237,
    "Diggersby": 423,
    "Fletchling": 278,
    "Fletchinder": 382,
    "Talonflame": 499,
    "Scatterbug": 200,
    "Spewpa": 213,
    "Vivillon": 411,
    "Litleo": 369,
    "Pyroar": 507,
    "Flabébé": 303,
    "Floette": 371,
    "Florges": 552,
    "Skiddo": 350,
    "Gogoat": 531,
    "Pancham": 348,
    "Pangoro": 495,
    "Furfrou": 472,
    "Espurr": 355,
    "Meowstic": 466,
    "Honedge": 325,
    "Doublade": 448,
    "Aegislash (Shield)": 520,
    "Aegislash (Blade)": 520,
    "Spritzee": 341,
    "Aromatisse": 462,
    "Swirlix": 341,
    "Slurpuff": 480,
    "Inkay": 288,
    "Malamar": 482,
    "Binacle": 306,
    "Barbaracle": 500,
    "Skrelp": 320,
    "Dragalge": 494,
    "Clauncher": 330,
    "Clawitzer": 500,
    "Helioptile": 289,
    "Heliolisk": 481,
    "Tyrunt": 362,
    "Tyrantrum": 521,
    "Amaura": 362,
    "Aurorus": 521,
    "Sylveon": 525,
    "Hawlucha": 500,
    "Dedenne": 431,
    "Carbink": 500,
    "Goomy": 300,
    "Sliggoo": 452,
    "Goodra": 600,
    "Klefki": 470,
    "Phantump": 309,
    "Trevenant": 474,
    "Pumpkaboo": 335,
    "Gourgeist": 494,
    "Bergmite": 304,
    "Avalugg": 514,
    "Noibat": 245,
    "Noivern": 535,
    "Xerneas": 680,
    "Yveltal": 680,
    "Zygarde": 600,
    "Diancie": 600,
    "Hoopa Confined": 600,
    "Hoopa Unbound": 680,
    "Volcanion": 600
  };
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let player1Score = 0;
  let player2Score = 0;
  let roundNumber = 1;
  let player1Wins = 0;
  let player2Wins = 0;
  let player1TotalWins = 0;
  let player2TotalWins = 0;
  
  function getRandomLetter() {
      return letters[Math.floor(Math.random() * letters.length)];
  }
  
  function updateRandomLetter() {
      document.getElementById('randomLetter').textContent = getRandomLetter();
  }
  
  function comparePokemons(pokemon1, pokemon2) {
      const baseStat1 = stats[pokemon1] || 0;
      const baseStat2 = stats[pokemon2] || 0;
  
      if (baseStat1 > baseStat2) {
          player1Score++;
          player1Wins++;
          return 'Player 1 wins this round!';
      } else if (baseStat1 < baseStat2) {
          player2Score++;
          player2Wins++;
          return 'Player 2 wins this round!';
      } else {
          player1Score++;
          player2Score++;
          return 'It\'s a tie!';
      }
  }
  
  function updateScores() {
      document.getElementById('player1Score').textContent = player1Score;
      document.getElementById('player2Score').textContent = player2Score;
      document.getElementById('player1Wins').textContent = player1Wins;
      document.getElementById('player2Wins').textContent = player2Wins;
  }
  
  function updateTruthTable() {
      document.getElementById('player1TotalWins').textContent = player1TotalWins;
      document.getElementById('player2TotalWins').textContent = player2TotalWins;
  }
  
  function checkGameOver() {
      if (player1Wins >= 7) {
          alert('Player 1 wins the game!');
          player1TotalWins++;
          resetGame();
      } else if (player2Wins >= 7) {
          alert('Player 2 wins the game!');
          player2TotalWins++;
          resetGame();
      }
  }
  
  function resetGame() {
      player1Score = 0;
      player2Score = 0;
      roundNumber = 1;
      player1Wins = 0;
      player2Wins = 0;
      updateScores();
      updateTruthTable();
      updateRandomLetter();
  }
  
  function spellCheck(pokemon) {
      if (stats.hasOwnProperty(pokemon)) {
          return pokemon;
      }
  
      const pokemonNames = Object.keys(stats);
      let closestMatch = '';
      let closestDistance = Infinity;
  
      pokemonNames.forEach(name => {
          const distance = levenshteinDistance(pokemon, name);
          if (distance < closestDistance) {
              closestDistance = distance;
              closestMatch = name;
          }
      });
  
      return closestMatch;
  }
  
  function levenshteinDistance(a, b) {
      const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  
      for (let i = 0; i <= a.length; i++) {
          matrix[i][0] = i;
      }
      for (let j = 0; j <= b.length; j++) {
          matrix[0][j] = j;
      }
  
      for (let i = 1; i <= a.length; i++) {
          for (let j = 1; j <= b.length; j++) {
              if (a[i - 1] === b[j - 1]) {
                  matrix[i][j] = matrix[i - 1][j - 1];
              } else {
                  matrix[i][j] = Math.min(
                      matrix[i - 1][j] + 1,
                      matrix[i][j - 1] + 1,
                      matrix[i - 1][j - 1] + 1
                  );
              }
          }
      }
  
      return matrix[a.length][b.length];
  }
  
  document.getElementById('submitButton').addEventListener('click', () => {
      let player1Input = document.getElementById('player1Input').value.trim().toLowerCase();
      let player2Input = document.getElementById('player2Input').value.trim().toLowerCase();
  
      player1Input = spellCheck(player1Input);
      player2Input = spellCheck(player2Input);
  
      const result = comparePokemons(player1Input, player2Input);
      alert(result);
  
      updateScores();
      checkGameOver();
      roundNumber++;
      document.getElementById('roundNumber').textContent = roundNumber;
      updateRandomLetter();
  });
  
  updateRandomLetter();
  updateTruthTable();
  
