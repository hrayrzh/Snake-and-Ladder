saapSeedi.init();
var processing = false;

function updateDiceName() {
	var playerName = "",
		playerColor = "#000000";
	if (saapSeedi.players.length) {
		playerName = saapSeedi.players[saapSeedi.state.turn].name;
		playerColor = saapSeedi.players[saapSeedi.state.turn].color;
	}
	$("#diceName").attr({
		"style": "color: " + playerColor
	}).hide().html(playerName).fadeIn(2000);
}

function movePlayer() {
	processing = true;

	if (!saapSeedi.players.length) {
		processing = false;
		return false;
	}

	var player = saapSeedi.players[saapSeedi.state.turn];

	var random = Math.floor((Math.random() * 6) + 1);

	//Roll dice
	saapSeedi.rollDice();

	//Show dice after 1 to 3 seconds
	setTimeout(function () {
		saapSeedi.showDice(random);

		//Fire move request after 1 second so that player can shift eyes from dice to board
		setTimeout(function () {
			player.position == 1 ? player.move(player.position + random - 1, undefined, random == 7, updateDiceName) : player.move(player.position + random, undefined, random == 7, updateDiceName);
			//            if (random == 6) {
			//                //Show message after the piece reaches destination
			//                setTimeout(function() {
			//                    alert("Դուք ստանում եք բոնուսային քայլի հնարավորություն");
			//                }, saapSeedi.config.moveSpeed * 6 + 100);
			//            }

			processing = false;
		}, 1000);
	}, Math.floor((Math.random() * 3000) + 1000));
	console.log(player);
	console.log(player.position);
}

$("#addPlayer").on("click", function (e) {
	var playersTable = document.getElementById('playersTable');
	var playerName = $("#playerName").val();
	var player = saapSeedi.addPlayer(playerName);

	if (player) {
		document.getElementById("popupText").innerHTML =
			`<p>«${playerName}» խողացողը ավելացված է։</p>`;
		document.getElementById("popup").style.backgroundColor = "green";
		document.getElementById("popup").style.border = "3px solid black";
		document.getElementById("popup").style.color = "#fff";

		document.getElementById("popup").style.display = "block";
		document.getElementById("popupScreen").style.display = "block";

		$("#playerName").val("");
		playersTable.innerHTML +=
			`<tr>
						<td class="playerColor" style="background-color:${player.color};">${player.id+1}</td>
						<td style="">${playerName}</td>
						<td id="${playerName}">0</td>
					</tr> `
	}

	if (saapSeedi.config.maxPlayers == saapSeedi.state.playerCount) {
		$("#playerName").hide();
		$("#addPlayer").hide();
	}

	updateDiceName();
});

$("#diceControl").on("click", function (e) {
	if (processing) {
		return false;
	}
	movePlayer();
});
