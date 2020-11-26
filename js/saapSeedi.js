(function (w, d) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    window.gameType = url.searchParams.get("type") || 1;
	function board(width, height) {
		this.boardBg = null;
		this.boardFg = null;
		this.width = width;
		this.height = height;
		this.config = {
			maxPlayers: 5,
			moveSpeed: 150,
			runSpeed: 15,
			colors: ["red", "orange", "green", "blue", "purple"],
			snakeLadderLayer: `images/game${window.gameType}/arrow.png`,
			snakes: [{
				s: 10,
				e: 3
			}, {
				s: 15,
				e: 12
			}, {
				s: 20,
				e: 8
			}, {
				s: 29,
				e: 16
			}, {
				s: 40,
				e: 33
			}, {
				s: 46,
				e: 36
			}],
			ladders: [{
				s: 5,
				e: 9
			}, {
				s: 11,
				e: 19
			}, {
				s: 17,
				e: 30
			}, {
				s: 21,
				e: 25
			}, {
				s: 35,
				e: 38
			}, {
				s: 42,
				e: 45
			}]
			//            ladders: []
		};
		this.state = {
			playerCount: 0,
			turn: 0
		};
		this.blocks = [];
		this.players = [];
	}

	var player = function (board, id, name, color) {
		this.board = board;
		this.id = id;
		this.name = name;
		this.color = color;
		this.position = 1;
	}

	var b = board.prototype;
	var p = player.prototype;

	p.placeGoti = function (position) {
		var playerId = this.id;
		var board = this.board;
		var blockX = board.blocks[position].x;
		var blockY = board.blocks[position].y;
		var blockW = board.width / 10;
		var blockH = board.height / 10;
		var gotiR = board.height / 60;
		var gotiX = blockX + (blockW / 10) + gotiR + (playerId * gotiR);
		var gotiY = blockY + (0.9 * blockH) - gotiR;
		var boardFg = board.boardFg;


		var playerImg = new Image();
		playerImg.src = `images/players/player${playerId+1}.png`;
		playerImg.onload = function () {
			boardFg.drawImage(playerImg, gotiX, gotiY, 40, 40);
		}
	}

	p.removeGoti = function () {
		var board = this.board;
		var players = board.players;
		var playerId = this.id;
		var position = this.position;

		var blockX = board.blocks[position].x;
		var blockY = board.blocks[position].y;
		var blockW = board.width / 7;
		var blockH = board.height / 7;
		var boardFg = board.boardFg;
		boardFg.clearRect(blockX, blockY, blockW, blockH);

		var player_id;
		for (player_id in players) {
			if (players[player_id]['position'] == position && player_id != playerId) {
				players[player_id].placeGoti(position);
			}
		}
	}

	p.move = function (position, speed, isSpecial, callback) {
		var player = this;
		var board = player.board;
		var players = board.players;

		if (typeof isSpecial == "undefined" && player.id !== board.state.turn) {
			board.log("It's " + players[board.state.turn].name + "'s turn.");
			return false;
		}

		if (position < 1) {
			board.log("Invalid move.");
			return false;
		}

		if (position > 49) {
			if (!isSpecial) {
				board.nextPlayer();
			}

			if (typeof callback == 'function') {
				callback.call(w);
			}

			return true;
		}

		if (player.position < position) {
			player.removeGoti();
			player.position++;
			player.placeGoti(player.position);
		} else if (player.position > position) {
			player.removeGoti();
			player.position--;
			player.placeGoti(player.position);
		} else {
			player.removeGoti();
			player.placeGoti(player.position);
		}

		speed = typeof speed !== 'undefined' ? speed : board.config.moveSpeed;

		if (player.position != position) {
			window.setTimeout(function () {
				player.move(position, speed, isSpecial, callback);
			}, speed);
		} else {
			//Check snake or ladder
			var check = board.isClear(player.position);
			if (check) {
				console.log(player);
				let pos = player.position;
				document.getElementById(player.name).innerHTML = pos;
				openPopup(pos);
				setTimeout(function () {				
					player.move(check, board.config.runSpeed, isSpecial, callback);
				}, 1000);
			} else {
				//(popup)
				if (player.position) {
					let pos = player.position;
					console.log(player);
					document.getElementById(player.name).innerHTML = pos;
				openPopup(pos);
				}

				if (!isSpecial) {
					board.nextPlayer();
				}
				//Check win
				if (player.position == 49) {
					log("Շնորհավո՛ր, " + player.name + "ը խաղի հաղթողն է");
					players.splice(player.id, 1);
					board.state.playerCount--;
					isSpecial = false;
				}

				if (typeof callback == 'function') {
					callback.call(w);
				}

				return true;
			}
		}
	}

	b.init = function () {
		if (window.innerHeight > window.innerWidth) {
			this.width = this.height = window.innerWidth - 10;
		}
		this.createBoard();

		var img = new Image('images/source.gif');
		img = new Image('images/face1.png');
		img = new Image('images/face2.png');
		img = new Image('images/face3.png');
		img = new Image('images/face4.png');
		img = new Image('images/face5.png');
		img = new Image('images/face6.png');
	}

	b.createBoard = function () {
		const gameBoard = document.getElementById("gameBoard");
		var canvas = document.createElement('canvas');
		canvas.height = this.height;
		canvas.width = this.width*1.49;
		canvas.style.zIndex = 1;
		gameBoard.appendChild(canvas);
		var boardBg = this.boardBg = canvas.getContext('2d');

		canvas = document.createElement('canvas');
		canvas.height = this.height;
		canvas.width = this.width*1.49;
		canvas.style.zIndex = 2;
		gameBoard.appendChild(canvas);
		var boardFg = this.boardFg = canvas.getContext('2d');

		canvas = document.createElement('canvas');
		canvas.height = this.height;
		canvas.width = this.width*1.49;
		canvas.style.zIndex = 3;
		var snakeLadderLayer = new Image();
		snakeLadderLayer.src = this.config.snakeLadderLayer;
		snakeLadderLayer.onload = function () {
			canvas.getContext('2d').drawImage(snakeLadderLayer, 0, 0, canvas.width, canvas.height);
			gameBoard.appendChild(canvas);
		}

		var a = 49,
			b = 43,
			w = this.width / 4.7,
			h = this.height / 7,
			y = -h,
			x, color, i;
		while (a > 0) {
			x = 0;
			y += h;
			for (i = b; i <= a; i++) {
				//                color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
				
				
				color = '#0061cc';
				boardBg.fillStyle = color;
				boardBg.fillRect(x, y, w, h);
				boardBg.strokeRect(x, y, w, h);
				boardBg.fillStyle = '#ffffff';
				boardBg.strokeStyle = '#ffffff';
				boardBg.font = w / 7 + 'px Comic Sans MS';
				boardBg.fillText(`${i}`, x + (w / 10), y + (h / 4));
//				boardBg.font = w / 10 + 'px Comic Sans MS';
				
				((x, y, i) => {
					var sectionimg = new Image();
				sectionimg.src = `images/game${gameType}/n${i}.jpg`;
//				console.log(b);
				sectionimg.onload = function () {
//				console.log(x);
					boardBg.drawImage(sectionimg, x, y, w, h);
				}})(x, y, i)
				
				
//												boardBg.fillStyle = 'red';
//												boardBg.font = w / 10 + 'px Comic Sans MS';
//												console.log(fieldTexts[i]);
//				                boardBg.fillText(fieldTexts[i], x + (w / 4), y + (h / 1.8));

				this.blocks[i] = {
					x: x,
					y: y,
					color: color
				};
				x += w;
			}
			x = 0;
			y += h;
			for (i = a - 7; i >= b - 7; i--) {
				//                color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
				color = '#43cbea';
				boardBg.fillStyle = color;
				boardBg.fillRect(x, y, w, h);
				boardBg.strokeRect(x, y, w, h);
				boardBg.fillStyle = '#ffffff';
				boardBg.strokeStyle = '#ffffff';
				boardBg.font = w / 7 + 'px Comic Sans MS';
				boardBg.fillText(`${i}`, x + (w / 10), y + (h / 4));
				//                boardBg.fillStyle = 'red';
				//								boardBg.font = w / 10 + 'px Comic Sans MS';
				//								console.log(fieldTexts[i]);	
				//                boardBg.fillText(fieldTexts[i], x + (w / 4), y + (h/1.8));
				((x, y, i) => {
					var sectionimg = new Image();
				sectionimg.src = `images/game${gameType}/n${i}.jpg`;
				sectionimg.onload = function () {
					boardBg.drawImage(sectionimg, x , y, w, h);
				}})(x, y, i)
				
				
				this.blocks[i] = {
					x: x,
					y: y,
					color: color
				};
				x += w;
			}
			a = a - 14;
			b = b - 14;
		}
	}

	b.addPlayer = function (name) {
		if (!name) {
			log('Խաղացողին ավելացնելու համար անհրաժեշտ է նշել անունը։', "red");
			return false;
		}

		var players = this.players,
			player_id;
		for (player_id in players) {
			if (players[player_id]['name'] == name) {
				log("«" + name + "» անունով խաղացող արդեն գրանցված է, ընտրեք այլ անուն։", "red");
				return false;
			}
		}

		var id = players.length;
		if (id >= this.config.maxPlayers) {
			log("Maximum players limit reached, Can't add more players");
			return false;
		}

		var player = new this.player(this, id, name, this.config.colors[id]);
		player.placeGoti(1);
		players.push(player);
		this.state.playerCount++;
		return player;
	}

	b.nextPlayer = function () {
		if (this.state.turn + 1 == this.state.playerCount) {
			this.state.turn = 0;
		} else {
			this.state.turn++;
		}
	}

	b.isClear = function (position) {
		var snakes = this.config.snakes;
		for (var key in snakes) {
			if (snakes[key].s == position) {
				return snakes[key].e;
			}
		}

		var ladders = this.config.ladders;
		for (var key in ladders) {
			if (ladders[key].s == position) {
				return ladders[key].e;
			}

		}
		return false;
	}

	b.rollDice = function () {
		var dice = document.getElementById('dice');
		dice.src = 'images/source.gif';
	}

	b.showDice = function (value) {
		value = parseInt(value);
		if (isNaN(value) || value < 1 || value > 6) {
			log("Invalid value.", "red");
			return false;
		}
		var dice = document.getElementById('dice');
		dice.src = 'images/face' + value + '.png';
	}

	b.player = player;
	w.saapSeedi = new board(w.innerHeight - 10, w.innerHeight - 10);
})(window, document);




function log(message, bg, h1 = "Ուշադրությո՛ւն", color = "#fff", brd = "3px solid black", pos) {
	const word = "հաղթողն";
	if(50>pos && pos>0){
        document.getElementById("popup").innerHTML =
			`<img src="images/game${gameType}/n${pos}.jpg" alt="">`;
		document.getElementById("popup").innerHTML +=
			`<button id="popupButton" onclick="closePopup()" style="position: absolute; right: 20%;">X</button>`;
	} else if (message.includes(word)) {
		document.getElementById("popup").innerHTML =
			`<h1>Շնորհավո՛ր</h1>
			<p>${message}</p>`;
		document.getElementById("popup").innerHTML +=
			`<button id="popupButton" onclick="closePopup(123)">Սկսել նոր խաղ</button>`;
    } else {
		document.getElementById("popup").innerHTML =
			`<h1>${h1}</h1>
			<p>${message}</p>`;
		document.getElementById("popup").innerHTML +=
			`<button id="popupButton" onclick="closePopup()">Փակել</button>`;
	}
	document.getElementById("popup").style.backgroundColor = bg;
	document.getElementById("popup").style.border = brd;
	document.getElementById("popup").style.color = color;

	popup('block');
}

function popup(state) {
	document.getElementById("popup").style.display = state;
	document.getElementById("popupScreen").style.display = state;
}

function openPopup(pos) {
	if (pos === "rules") {
		log(fieldTexts[101].content, fieldTexts[101].bgColor, fieldTexts[101].head, fieldTexts[101].color, fieldTexts[101].borderColor);
	}
	log(null, null, null, null, null, pos);
}

function closePopup(z = "") {
	if (z == 123) {
		location.reload();
	}
	popup('none');
}
