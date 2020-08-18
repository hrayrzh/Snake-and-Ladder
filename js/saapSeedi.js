const fieldTexts = {
	1: "Սկսեցի՞նք",
	2: "Ջերմոցային գազերը, որոնցից է նաև ածխաթթու գազը, կլանում են արեգակի էներգիայի մի մասը՝ ջերմոցի պես տաք ու կայուն պահելով Երկիր մոլորակի ջերմաստիճանը։",
	3: "Կլիմայի փոփոխություն",
	4: "Նախարդյունաբերական շրջանում (մինչև 1850թ) ածխաթթու գազի քանակը մթնոլորտում կազմել է 280 մաս միլիոնի մեջ։",
	5: "Դու գերադասում ես հեծանիվ վարել, քան ավտոմեքենա։",
	6: "Կլիման տվյալ տարածքին բնորոշ միջինացված օդերևութաբանական պայմաններն են։ Դա միջին եղանակն է տևական ժամանակի՝ սովորաբար 30 տարվա ընթացքում։",
	7: "1825թ-ին բացվեց առաջին հասարակական երկաթուղին և սկիզբ դրվեց երկաթուղիների դարաշրջանին։ Քարածուխի, փայտի և տորֆի այրումից մեծ քանակությամբ ածխաթթու գազ էր արտանետվում մթնոլորտ։",
	8: "Մարդու գործունեության հետևանքով մթնոլորտ են արտանետվում մեծ քանակությամբ ջերմոցային գազեր, ինչի պատճառով ավելի շատ ջերմություն է թակարդվում ու տաքացնում մեր մոլորակը։ ",
	9: "Սենյակից դուրս գալիս դու մոռացել ես անջատել լույսը։",
	10: "Նախաարդյունաբերական շրջանի համեմատությամբ արդյունաբերական շրջանում մթնոլորտում մոտ 40%-ով աճեց ածխաթթու գազի քանակությունը։",
	11: "Յուրաքանչյուր տարի դու մեկ ծառ ես տնկում։",
	12: "Ածխաթթու գազի նույն չափաբաժիններով մթնոլորտ շարունակական արտանետումների հետևանքով, մինչև 2100թ մթնոլորտի միջին ջերմաստիճանը կաճի մոտ 2-6  ̊C-ով։",
	13: "Կլիմայի գլոբալ փոփոխության արդյունքում փոխվում է տեղումների ոչ միայն միջին քանակը, այլ նաև դրանց սեզոնային բաշխումը։",
	14: "Դու երկար ես ցնցուղ ընդունում։",
	15: "Երթևեկությունը հեծանիվով փոխարինելով կրճատվում է ավտոմեքենայի կողմից 1 լիտր բենզինի այրումից  մոտ 2կգ ածխաթթու գազի արտանետումը մթնոլորտ։",
	16: "Հյուսիսային բևեռը 2 ̊C-ով ավելի տաք է, քան 50 տարի առաջ։",
	17: "Դու գերդասում ես օգտագործել վերամշակված թուղթ։",
	18: "Դու դեն ես նետում պլաստիկ շիշը, որի արտադրության համար մթնոլորտ է արտանետվում 1.5կգ ածխաթթու գազ։",
	19: "Անտառհատումների հետևանքով մթնոլորտ է արտանետվում ոչ միայն ծառերի բնափայտի մեջ կուտակված ածխածինը, այլև կրճատվում է ծառերի կողմից ածխաթթու գազը կլանելու հնարավորությունը։",
	20: "Եթե 10 տարվա ընթացքում յուրաքանչյուրս 2-ական ծառ տնկենք, դա կփոխհատուցվի վերջին 10 տարիների ընթացքում հատված ծառերի ընդհանուր քանակը։",
	21: "Շվեդիայում կա գնացք, որն աշխատում է թափոնների քայքայումից առաջացող մեթանով՝ դրանով կրճատելով ջերմոցային գազերի արտանետումները։",
	22: "Մեկ տոննա վերամշակված թուղթը խնայում է 17 ծառ, 320 լիտր նավթ, 4100 կիլովատ էներգիա, 3.2 խորանարդ մետր տարածք և 30 կգ օդի աղտոտում:",
	23: "Դու սիրում ես անտառներում խարույկ վառել։",
	24: "Ավտոմեքենայով յուրաքանչյուր 10կմ ճանապարհորդելիս մթնոլորտ է արտանետվում 3.7-18.3կգ ածխաթթու գազ։",
	25: "5000 տարի առաջ Հայաստանի 35%-ը անտառապատ էր, իսկ ներկայում անտառները զբաղեցնում են 10%-ից պակաս տարածք։",
	26: "1990-ական թվականները վերջին հազարամյակի ամենատաք տասնամյակն էր։",
	27: "Դուք տեղադրել եք արևային վահանակներ Ձեր տան կտուրին։",
	28: "Դու սիրում ես ավտոմեքենայով շատ շրջագայել։",
	29: "«Ածխածնի հետքը» ջերմոցային գազերի այն քանակն է, որը կուտակում է յուրաքանչյուր ոք ամենօրյա գործունեության ընթացքում։",
	30: "Երկրաջերմային էներգիայի արտադրությունը զարգացման դեպքում 1000 անգամ ավելի շատ էլեկտրաէներգիա կարող է մատակարարել, քան ողջ աշխարհում դրա սպառումն է։",
	31: "Հիմալայան սառցադաշտերի անհետացման դեպքում 2.6 միլիարդ մարդ խմելու ջրի պակաս կունենա։",
	32: "Արևային վահանակները կլանում են արևի լույսը՝ այն փոխարկելով էլեկտրաէներգիայի։",
	33: "Էլեկտրոմոբիլները աշխատում են էլեկտրականությամբ, այլ ոչ բենզինով և չեն աղտոտում օդը։",
	34: "Հողագործության արդյունքում հողում կուտակված ածխաթթու գազը դուրս է գալիս մթնոլորտ։",
	35: "Բրինձի պլանտացիաներից մթնոլորտ է արտանետվում մեթան (ևս մեկ ջերմոցային գազ)։",
	36: "Գոմաղբից ու ընտանի կենդանիների օրգանիզմում բուսական սննդի մարսումից մթնոլորտ է արտանետվում մեթան։",
	37: "Մեթանը միևնույն քանակի ածխաթթու գազի համեմատությամբ 25 անգամ ավելի է նպաստում ջերմոցային էֆեկտին։",
	38: "Դու կոմպոստացնում ես սննդի մնացորդները։",
	39: "Պարարտանյութերի օգտագործումը բերում է ազոտի ենթօքսիդի (ևս մեկ ջերմոցային գազի) արտանետման։",
	40: "Դու հաճախակի ես միս ուտում։",
	41: "Ազոտի ենթօքսիդի կյանքի տևողությունը մթնոլորտում 114 տարի է։",
	42: "Կենսազանգվածի (մահացած բույսերից, խոտից, տերևներից, սննդի մնացորդների քայքայումից ստացվող օրգանակն նյութեր) էներգիան կարելի է օգտագործել կենսագազ արտադրելու և ծառերը պարարտացնելու համար։",
	43: "Օրգանական ֆերմաներն ավելի քիչ հանածո վառելիք են սպառում և չեն օգտագործում արհեստական պարարտանյութեր։",
	44: "Դուք տանը լուսադիոդային (LED) լամպեր եք օգտագործում։",
	45: "Դուք տանը լուսադիոդային (LED) լամպեր եք օգտագործում։",
	46: "Դու քո այգին պարարտացնում ես քիմիական նյութերով։",
	47: "26Վտ-ոց LED լամպը փոխարինում է 100Վտ-ոց շիկացման լամպին՝ ծառայելով 6 -12 անգամ ավելի երկար։",
	48: "Իրազեկվածությունը կօգնի զարգացնել գաղափարներ և գտնել լուծումներ կլիմայի փոփոխության գլոբալ հիմնահարցի շուրջ։",
	49: "Դու հասար Կլիմայի պահպանության։",
};

function closePopup(){
	document.getElementById("popup").style.display = "none";
}

function openPopup(){
	document.getElementById("popup").style.display = "block";
}
/*********************************************************************************

Looks like you have good hands in Javascript, We are hiring Javascript Hackers at 
AdPushup (New Delhi, India Office). Check out http://careers.adpushup.com

*********************************************************************************/

(function(w, d) {
    function board(width, height) {
        this.boardBg = null;
        this.boardFg = null;
        this.width = width;
        this.height = height;
        this.config = {
            maxPlayers: 4,
            moveSpeed: 150,
            runSpeed: 15,
            colors: ["red", "orange", "green", "black"],
            snakeLadderLayer: "",
//            zzzz: "images/face06.png",
            snakes: [],
            ladders: []
//            ladders: [{s: 2,e: 49}, {s: 3,e: 49}, {s: 4,e: 49}, {s: 5,e: 49}]
        };
        this.state = {
            playerCount: 0,
            turn: 0
        };
        this.blocks = [];
        this.players = [];
    }
    
    var player = function(board, id, name, color) {
        this.board = board;
        this.id = id;
        this.name = name;
        this.color = color;
        this.position = 1;
    }
    
    var b = board.prototype;
    var p = player.prototype;
    
    p.placeGoti = function(position) {
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
//        var drawing = new Image('images/face2.png');
//				boardFg.drawImage(drawing,gotiX, gotiY);
				console.log(boardFg);
				console.log(playerId);
			
				
				var zzzz = new Image();
        zzzz.src = `images/student${playerId+1}.png`;
        zzzz.onload = function() {
            boardFg.drawImage(zzzz,gotiX, gotiY, 40, 40);
        }
			
			
			
			
//				console.log(gotiX, gotiY, gotiR);
//        boardFg.beginPath();
//        boardFg.arc(gotiX, gotiY, gotiR, 0, 2 * Math.PI, false);
//        boardFg.fillStyle = this.color;
//        boardFg.fill();
//        boardFg.lineWidth = gotiR / 3;
//        boardFg.strokeStyle = '#ffffff';
//        boardFg.stroke();
    }
    
    p.removeGoti = function() {
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
    
    p.move = function(position, speed, isSpecial, callback) {
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
        
        if (position > 100) {
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
            window.setTimeout(function() {
                player.move(position, speed, isSpecial, callback);
            }, speed);
        } else {
            //Check snake or ladder
            var check = board.isClear(player.position);
            if (check) {
                setTimeout(function() {
                    player.move(check, board.config.runSpeed, isSpecial, callback);
                }, 1000);
            } else {
                //Check kill(popup)///////////////////////////////////////////////////////////////////////////
                if (player.position) {
									let pos = player.position;
									document.getElementById(player.name).innerHTML = pos;
									document.getElementById("popupText").innerHTML = fieldTexts[pos];
									openPopup();
									
//                    var players_id;
//                    for (players_id in players) {
//                        if (players[players_id]['position'] == player.position && players_id != player.id) {
//                            board.log(player.name + " killed " + players[players_id]['name'] + ".");
//                            setTimeout(function() {
//                                players[players_id].move(1, board.config.runSpeed, true, callback);
//                            }, 1000);
//                            break;
//                        }
//                    }
//									փոփափ ըստ դաշտի
									
									console.log(`${player.name} - ${player.position}`);
									console.log();
//									if(player.position > 3){
//										alert("asd");
//									}
                }
                
                if (!isSpecial) {
                    board.nextPlayer();
                }
                //Check win
                if (player.position == 49) {
                    board.log("Շնորհավոր " + player.name + "ը խաղի հաղթողն է");
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
    
    b.init = function() {
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
    
    b.createBoard = function() {
				const gameBoard = document.getElementById("gameBoard");
        var canvas = document.createElement('canvas');
        canvas.height = this.height;
        canvas.width = this.width;
        canvas.style.zIndex = 1;
        gameBoard.appendChild(canvas);
        var boardBg = this.boardBg = canvas.getContext('2d');
        
        canvas = document.createElement('canvas');
        canvas.height = this.height;
        canvas.width = this.width;
        canvas.style.zIndex = 2;
        gameBoard.appendChild(canvas);
        var boardFg = this.boardFg = canvas.getContext('2d');
        
        canvas = document.createElement('canvas');
        canvas.height = this.height;
        canvas.width = this.width;
        canvas.style.zIndex = 3;
        var snakeLadderLayer = new Image();
        snakeLadderLayer.src = this.config.snakeLadderLayer;
        snakeLadderLayer.onload = function() {
            canvas.getContext('2d').drawImage(snakeLadderLayer, 0, 0, canvas.width, canvas.height);
            gameBoard.appendChild(canvas);
        }
        
        var a = 49, b = 43, w = this.width / 7, h = this.height / 7, y = -h, x, color, i;
        while (a > 0) {
            x = 0;
            y += h;
            for (i = a; i >= b; i--) {
//                color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
                color = '#0061cc';
                boardBg.fillStyle = color;
                boardBg.fillRect(x, y, w, h);
                boardBg.strokeRect(x, y, w, h);
                boardBg.fillStyle = '#ffffff';
                boardBg.strokeStyle = '#ffffff';
								boardBg.font = w / 5 + 'px Comic Sans MS';
                boardBg.fillText(`${i}`, x + (w / 10), y + (h / 4));
								boardBg.font = w / 10 + 'px Comic Sans MS';
							
//								boardBg.fillStyle = 'red';
//								boardBg.font = w / 10 + 'px Comic Sans MS';
//								console.log(fieldTexts[i]);
//                boardBg.fillText(fieldTexts[i], x + (w / 4), y + (h / 1.8));
								
                this.blocks[i] = {
                    x: x,
                    y: y,
                    color: color
                };
                x += w;
            }
            x = 0;
            y += h;
            for (i = b - 7; i <= a - 7; i++) {
//                color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
                color = '#43cbea';
                boardBg.fillStyle = color;
                boardBg.fillRect(x, y, w, h);
                boardBg.strokeRect(x, y, w, h);
                boardBg.fillStyle = '#ffffff';
                boardBg.strokeStyle = '#ffffff';
								boardBg.font = w / 5 + 'px Comic Sans MS';
                boardBg.fillText(`${i}`, x + (w / 10), y + (h / 4));
							
//                boardBg.fillStyle = 'red';
//								boardBg.font = w / 10 + 'px Comic Sans MS';
//								console.log(fieldTexts[i]);	
//                boardBg.fillText(fieldTexts[i], x + (w / 4), y + (h/1.8));
								
//                boardBg.fillText(`aaaaa`, x + (w / 10), y + (h / 1.5));
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
    
    b.addPlayer = function(name) {
        if (!name) {
            this.log('Please specify name of the player.');
            return false;
        }
        
        var players = this.players, player_id;
        for (player_id in players) {
            if (players[player_id]['name'] == name) {
                this.log("«" + name + "» անունով խաղացող արդեն գրանցված է, ընտրեք այլ անուն։");
                return false;
            }
        }
        
        var id = players.length;
        if (id >= this.config.maxPlayers) {
            this.log("Maximum players limit reached, Can't add more players");
            return false;
        }
        
        var player = new this.player(this, id, name, this.config.colors[id]);
        player.placeGoti(1);
        players.push(player);
        this.state.playerCount++;
        return player;
    }
    
    b.nextPlayer = function() {
        if (this.state.turn + 1 == this.state.playerCount) {
            this.state.turn = 0;
        } else {
            this.state.turn++;
        }
    }
    
    b.isClear = function(position) {
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
    
    b.rollDice = function() {
        var dice = document.getElementById('dice');
        dice.src = 'images/source.gif';
    }
    
    b.showDice = function(value) {
        value = parseInt(value);
        if (isNaN(value) || value < 1 || value > 6) {
            this.log("Invalid value.");
            return false;
        }
        var dice = document.getElementById('dice');
        dice.src = 'images/face' + value + '.png';
    }
    
    b.log = function(message) {
        alert(message);
    //console.log(message);
    }
    
    b.player = player;
    w.saapSeedi = new board(w.innerHeight - 10, w.innerHeight - 10);
})(window, document);