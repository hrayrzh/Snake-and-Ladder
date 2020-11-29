const fieldTexts = {
//	1: {
//		content: "Սկսեցի՞նք",
//		textcolor: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	2: {
//		content: "Ջերմոցային գազերը, որոնցից է նաև ածխաթթու գազը, կլանում են արեգակի էներգիայի մի մասը՝ ջերմոցի պես տաք ու կայուն պահելով Երկիր մոլորակի ջերմաստիճանը։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	3: {
//		content: "Կլիմայի փոփոխություն",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	4: {
//		content: "Նախարդյունաբերական շրջանում (մինչև 1850թ) ածխաթթու գազի քանակը մթնոլորտում կազմել է 280 մաս միլիոնի մեջ։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	5: {
//		content: "Դու գերադասում ես հեծանիվ վարել, քան ավտոմեքենա։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "green",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	6: {
//		content: "Կլիման տվյալ տարածքին բնորոշ միջինացված օդերևութաբանական պայմաններն են։ Դա միջին եղանակն է տևական ժամանակի՝ սովորաբար 30 տարվա ընթացքում։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	7: {
//		content: "1825թ-ին բացվեց առաջին հասարակական երկաթուղին և սկիզբ դրվեց երկաթուղիների դարաշրջանին։ Քարածուխի, փայտի և տորֆի այրումից մեծ քանակությամբ ածխաթթու գազ էր արտանետվում մթնոլորտ։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	8: {
//		content: "Մարդու գործունեության հետևանքով մթնոլորտ են արտանետվում մեծ քանակությամբ ջերմոցային գազեր, ինչի պատճառով ավելի շատ ջերմություն է թակարդվում ու տաքացնում մեր մոլորակը։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	9: {
//		content: "Սենյակից դուրս գալիս դու մոռացել ես անջատել լույսը։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "red",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	10: {
//		content: "Նախաարդյունաբերական շրջանի համեմատությամբ արդյունաբերական շրջանում մթնոլորտում մոտ 40%-ով աճեց ածխաթթու գազի քանակությունը։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	11: {
//		content: "Յուրաքանչյուր տարի դու մեկ ծառ ես տնկում։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "green",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	12: {
//		content: "Ածխաթթու գազի նույն չափաբաժիններով մթնոլորտ շարունակական արտանետումների հետևանքով, մինչև 2100թ մթնոլորտի միջին ջերմաստիճանը կաճի մոտ 2-6  ̊C-ով։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	13: {
//		content: "Կլիմայի գլոբալ փոփոխության արդյունքում փոխվում է տեղումների ոչ միայն միջին քանակը, այլ նաև դրանց սեզոնային բաշխումը։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	14: {
//		content: "Դու երկար ես ցնցուղ ընդունում։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "red",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	15: {
//		content: "Երթևեկությունը հեծանիվով փոխարինելով կրճատվում է ավտոմեքենայի կողմից 1 լիտր բենզինի այրումից  մոտ 2կգ ածխաթթու գազի արտանետումը մթնոլորտ։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	16: {
//		content: "Հյուսիսային բևեռը 2 ̊C-ով ավելի տաք է, քան 50 տարի առաջ։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	17: {
//		content: "Դու գերդասում ես օգտագործել վերամշակված թուղթ։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "green",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	18: {
//		content: "Դու դեն ես նետում պլաստիկ շիշը, որի արտադրության համար մթնոլորտ է արտանետվում 1.5կգ ածխաթթու գազ։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "red",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	19: {
//		content: "Անտառհատումների հետևանքով մթնոլորտ է արտանետվում ոչ միայն ծառերի բնափայտի մեջ կուտակված ածխածինը, այլև կրճատվում է ծառերի կողմից ածխաթթու գազը կլանելու հնարավորությունը։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	20: {
//		content: "Եթե 10 տարվա ընթացքում յուրաքանչյուրս 2-ական ծառ տնկենք, դա կփոխհատուցվի վերջին 10 տարիների ընթացքում հատված ծառերի ընդհանուր քանակը։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	21: {
//		content: "Շվեդիայում կա գնացք, որն աշխատում է թափոնների քայքայումից առաջացող մեթանով՝ դրանով կրճատելով ջերմոցային գազերի արտանետումները։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	22: {
//		content: "Մեկ տոննա վերամշակված թուղթը խնայում է 17 ծառ, 320 լիտր նավթ, 4100 կիլովատ էներգիա, 3.2 խորանարդ մետր տարածք և 30 կգ օդի աղտոտում:",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	23: {
//		content: "Դու սիրում ես անտառներում խարույկ վառել։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "red",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	24: {
//		content: "Ավտոմեքենայով յուրաքանչյուր 10կմ ճանապարհորդելիս մթնոլորտ է արտանետվում 3.7-18.3կգ ածխաթթու գազ։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	25: {
//		content: "5000 տարի առաջ Հայաստանի 35%-ը անտառապատ էր, իսկ ներկայում անտառները զբաղեցնում են 10%-ից պակաս տարածք։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	26: {
//		content: "1990-ական թվականները վերջին հազարամյակի ամենատաք տասնամյակն էր։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	27: {
//		content: "Դուք տեղադրել եք արևային վահանակներ Ձեր տան կտուրին։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "green",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	28: {
//		content: "Դու սիրում ես ավտոմեքենայով շատ շրջագայել։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "red",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	29: {
//		content: "«Ածխածնի հետքը» ջերմոցային գազերի այն քանակն է, որը կուտակում է յուրաքանչյուր ոք ամենօրյա գործունեության ընթացքում։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	30: {
//		content: "Երկրաջերմային էներգիայի արտադրությունը զարգացման դեպքում 1000 անգամ ավելի շատ էլեկտրաէներգիա կարող է մատակարարել, քան ողջ աշխարհում դրա սպառումն է։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	31: {
//		content: "Հիմալայան սառցադաշտերի անհետացման դեպքում 2.6 միլիարդ մարդ խմելու ջրի պակաս կունենա։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	32: {
//		content: "Արևային վահանակները կլանում են արևի լույսը՝ այն փոխարկելով էլեկտրաէներգիայի։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	33: {
//		content: "Էլեկտրոմոբիլները աշխատում են էլեկտրականությամբ, այլ ոչ բենզինով և չեն աղտոտում օդը։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	34: {
//		content: "Հողագործության արդյունքում հողում կուտակված ածխաթթու գազը դուրս է գալիս մթնոլորտ։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	35: {
//		content: "Բրինձի պլանտացիաներից մթնոլորտ է արտանետվում մեթան (ևս մեկ ջերմոցային գազ)։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	36: {
//		content: "Գոմաղբից ու ընտանի կենդանիների օրգանիզմում բուսական սննդի մարսումից մթնոլորտ է արտանետվում մեթան։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	37: {
//		content: "Մեթանը միևնույն քանակի ածխաթթու գազի համեմատությամբ 25 անգամ ավելի է նպաստում ջերմոցային էֆեկտին։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	38: {
//		content: "Դու կոմպոստացնում ես սննդի մնացորդները։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "green",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	39: {
//		content: "Պարարտանյութերի օգտագործումը բերում է ազոտի ենթօքսիդի (ևս մեկ ջերմոցային գազի) արտանետման։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "red",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	40: {
//		content: "Դու հաճախակի ես միս ուտում։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	41: {
//		content: "Ազոտի ենթօքսիդի կյանքի տևողությունը մթնոլորտում 114 տարի է։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	42: {
//		content: "Կենսազանգվածի (մահացած բույսերից, խոտից, տերևներից, սննդի մնացորդների քայքայումից ստացվող օրգանակն նյութեր) էներգիան կարելի է օգտագործել կենսագազ արտադրելու և ծառերը պարարտացնելու համար։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	43: {
//		content: "Օրգանական ֆերմաներն ավելի քիչ հանածո վառելիք են սպառում և չեն օգտագործում արհեստական պարարտանյութեր։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	44: {
//		content: "Դուք տանը լուսադիոդային (LED) լամպեր եք օգտագործում։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "green",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	45: {
//		content: "Լավ ջերմամեկուսացված շենքերը էլեկտրաարդյունավետ են, քանի որ ավելի շատ տաքություն են պահպանում։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	46: {
//		content: "Դու քո այգին պարարտացնում ես քիմիական նյութերով։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "red",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	47: {
//		content: "26Վտ-ոց LED լամպը փոխարինում է 100Վտ-ոց շիկացման լամպին՝ ծառայելով 6 -12 անգամ ավելի երկար։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	48: {
//		content: "Իրազեկվածությունը կօգնի զարգացնել գաղափարներ և գտնել լուծումներ կլիմայի փոփոխության գլոբալ հիմնահարցի շուրջ։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
//	49: {
//		content: "Դու հասար Կլիմայի պահպանության։",
//		color: "black",
//		borderColor: "1px solid black",
//		bgColor: "antiquewhite",
//		popupImg: "",
//		fieldImg: "",
//		fieldColor: "",
//	},
	101: {
		head: "Կանոններ",
		content: "<i>ԷկոՇուտՀասիկ խաղերն օգնում են երիտասարդներին իմանալ բնապահպանական խնդիների մասին ևձեռնարկել քայլեր՝ պահպանելու Երկիր մոլորակը։ Խաղերը մշակված են տարբեր թեմաների շուրջ, ոչ-ֆորմալ կրթական մեխանիզմների հիման վրա, որոնք մատչելի և ինտերակտիվ ձևով ներկայացնում ենգիտական տեղեկատվությունը բոլորի համար։</i><br><br><strong>Խաղի համար անհրաժեշտ են՝</strong><ul><li>Զառ</li><li>Խաղաքարեր (որպես խաղաքար կարող եք վերցնելտարբեր գույնի կամ չափսերի փոքր քարեր)</li><li>Խաղին մասնակցում են 2-6 խաղացող, 3 տարեկանից բարձր</li></ul><br><strong>Խաղի կանոնները՝</strong><ul><li>Մասնակիցներն ընտրում են իրենց խաղաքարերը և տեղադրում վանդակ 1-ում</li><li>Խաղը սկսում է ամենափոքր խաղացողը. նետում է զառը և խաղաքարը վանդակներով առաջ տանում</li><li>Յուրաքանչյուր վանդակում կանգ առնելիս խաղացողը բարձրաձայն կարդում է թափոններին վերաբերյալփաստը և ուղերձը</li><li>Թղթե օդանավերով վանդակին հասնելիս, կախված նշված ուղությունից, խաղացողը բարձրանում կամ իջնում էդեպի նշված վանդակը</li><li>Վերջին վանդակին հասնելու համար հաղթողի նետած զառի թիվը պետք է ճիշտ այն թիվը լինի, որնանհրաժեշտ է այդ վանդակին հասնելու համար։ Եթե զառի վրայի թիվն ավելին է, քան անհրաժեշտ է վերջինվանդակին հասնելու համար, պետք է խաղաքարով առաջ շարժվել մինչև վերջին վանդակը և հետո մնացած թվիչափով հետ շարժվել վանդակով</li></ul>",
		color: "black",
		borderColor: "3px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
	}
};


const garbage = {
	1: {
		content: "Գնացի՞նք",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	2: {
		content: "Հայաստանում գործում է 242 գրանցված աղբավայր, որոնք զբաղեցնում են 1344 հա տարածք, իսկ չգրանցված աղբավայրերը 196 են՝ 171 հա տարածքով: ",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	3: {
		content: "Ամեն օր ԱՄՆ աղբավայրերում են հայտնվում 130 000 համակարգիչ և մոտ 350 000 բջջային հեռախոս։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	4: {
		content: "Ապակին երբեք չի կորցնում իր հատկութունները և կարող է վերամշակվել կամ վերաօգտագործվել բազմաթիվ անգամներ։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	5: {
		content: "Դու ապակե շշերը չես նետում աղբաման, այլ հանձնում ես վերամշակման:",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	6: {
		content: "Աշխարհի ամենամեծ աղբավայրը գտնվում է ԱՄՆ Fresh Kills կոչվող վայրում։ Այն զբաղեցնում է 1200 հա տարածք, որը համարժեք է 1700 ֆուտբոլի դաշտերի։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	7: {
		content: "Հայաստանում տարեկան համայնքային աղբավայրեր է տեղափոխվում մինչ 500 հազ․ տոննա կոշտ կենցաղային աղբ, որից 60%-ից ավելին բաժին է ընկնում Երևանին:",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	8: {
		content: "Ամեն տարի աղբավայրերում է հայտնվում մոտ 7 մլն տոննա հագուստ, այնինչ աղքատ երկրներում շատ մարդիկ դրանց կարիքն ունեն։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	9: {
		content: "Մեկ ապակե շշի վերամշակումից խնայված էներգիան բավարար է 4ժ 100Վտ-ոց լամպի կամ 1.5ժ հեռուստացույցի աշխատանքի համար։ Այնինչ աղբավայրում մեկ ապակե շշի քայքայման համար պահանջվում է 1000 տարուց ավելի։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	10: {
		content: "Դու ամեն տարի քո բջջային հեռախոսը փոխարինում ես նոր մոդելով, քանզի այն այլևս նորաոճ չէ։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	11: {
		content: "Դու  դեմ ես ծխելու վատ սովորությանը։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	12: {
		content: "Ամբողջ աշխարհում ամեն տարի 100 000-ից ավելի կաթնասուն, թռչուն և ձուկ պոլիէթիլենային տոպրակների զոհ է դառնում։ ",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	13: {
		content: "14 հատ 0.5լ-ոց պլաստիկ շշի վերամշակումից ստացվող հումքից կարելի է ստանալ մեկ սպորտային շապիկ, իսկ  85շշից՝ մեկ քնապարկ։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	14: {
		content: "Շվեդիան թափոնների վերամշակման գործում  աշխարհում  այնքան առաջատար է, որ 2019թ-ին  երկրում աղբն ամբողջովին սպառվել էր և իշխանությունները սկսեցին աղբ ներմուծել այլ երկրներից՝ վերամշակելու և էներգիա ստանալու համար: ",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	15: {
		content: "Դու գնումների գնալիս  բազմակի օգտագործման տոպրակների փոխարեն օգտագործում ես պոլիէթիլենային տոպրակներ։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	16: {
		content: "Վիճակագրական տվյալներով, պլաստիկի սպառման ամենատարածված արտադրանքը մեկանգամյա օգտագործման բաժակներն ու ափսեներն են, իսկ դրանց ակտիվ սպառողներից են արշավների գնացողները՝ 26%-ը, և բացօթյա սրճարանների այցելուները՝ 21%-ը։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	17: {
		content: "Դու հյութերն ու ջուրը գնում ես միայն ապակե շշերով՝ գերադասելով չօգտագործել պլաստիկ շշեր։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	18: {
		content: "Ապակե ջարդոնների վերամշակումից ապակու արտադրությունը թույլ է տալիս կրճատել մթնոլորտի աղտոտումը 20%-ով, իսկ ջրի աղտոտումը՝ 50%-ով։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	19: {
		content: "Աշխարհում ամենատարածված թափոնը ծխախոտի մնացորդներն են. ամեն տարի նետվում է 4․5մլն ծխածի։ Ի դեպ, մեկ ծխածիի քայքայման համար պահանջվում է մոտ 3 տարի։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	20: {
		content: "Դու սիրում ես նոր հագուստ գնել և դեն ես նետում հինը, չնայած որ այն բոլորովին մաշված չէ։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	21: {
		content: "Դու առանձնացնում ես մետաղական թափոնները և հանձնում ես վերամշակման։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	22: {
		content: "Անվադողերի քայքայման համար պահանջվում է 120-140 տարի, այնինչ դրանց վերամշակումից ստացվում է տեխնիկական ածխածին, դիզելային վառելիք և մետաղի ջարդոն:",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	23: {
		content: "Կենցաղային թափոնների տեսակավորման առաջին փորձերն արվել են 1898թ-ին ԱՄՆ-ի Նյու-Յորք քաղաքում։ Այն իրականացվում էր ձեռքով, սպասարկվում էր շուրջ 116 000 բնակիչ, իսկ հավաքված թափոնների մինչև 37%-ը վերամշակվում էր երկրորդային հումքի։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	24: {
		content: "Մեկ մանկական տակդիրի քայքայման համար անհրաժեշտ է մոտ 500 տարի, իսկ ափսե լվանալու մեկ սպունգի համար՝ 200 տարի։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	25: {
		content: "Մեկ տարվա ընթացքում մետաղների երկրորդային մշակումը թույլ է տալիս խնայել այնքան ռեսուրս, որը թույլ կտա ջեռուցել  և լուսավորել 150մլն տուն։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	26: {
		content: "Դու ապակե շշերը նետում ես աղբամանը։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	27: {
		content: "Սինգապուրում թափոնների այրումից օրական արտադրվում է 2500 Մվտ/ժ էլեկտրաէներգիա։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	28: {
		content: "Մեծ Բրիտանիայում օրգանական թափոնների քայքայումից ստանում են կենսագազ և օրգանական պարարտանյութեր. 1տոննա թափոնից ստացվող կենսագազից կարող է արտադրվել մինչև 200կՎտ/ժ էներգիա։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	29: {
		content: "Դու արշավի գնալիս քեզ հետ վերցնում ես մեկանգամյա օգտագործման պլաստիկ ամաններ և բաժակներ։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	30: {
		content: "1 տոննա պլաստիկի վերամշակումից խնայվում է այնքան էներգիա, որքան կառաջանար 3800-7600լ բենզինի այրումից։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	31: {
		content: "Հնդկաստանում պետությունը բնակիչներից գնում է պլաստիկ՝ ճանապարհներ կառուցելու համար։ Պլաստիկ թափոններն կիրառվում են ճանապարհաշինության մեջ՝ ճանապարհային ծածկույթներում փոխարինելով բիտումին։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	32: {
		content: "Ավստրիայում թափոնների այրման գործարանները վեր են ածվել ջերմաէլեկտրակայանների, իսկ պլաստիկի վերամշակումից ստացվող հումքը կրկին օգտագործվում է պլաստիկ իրերի պատրաստման համար։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	33: {
		content: "Աղբի տեսակավորումը թույլ է տալիս առանձնացնել վերամշակման կամ կրկնակի օգտագործման ենթակա թափոնները՝ դրանով իսկ նպաստելով թափոնների քանակի և աղբավայրերի կրճատման։ ",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	34: {
		content: "Այն հողատարածքների վրա, որտեղ անվադող է այրվել, մոտ 10 տարի խոտ չի աճում։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	35: {
		content: "Դու հավաքում ես օգտագործված թղթերը և ինքնուրույն վերամշակում՝ հումքից պատրաստելով բացիկներ ու նկարներ։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	36: {
		content: "Միջին հաշվով, մարտկոցները կազմում են մեգապոլիսներում հավաքվող թափոնների մոտ 0.25%-ը։ Հայտնվելով աղբավայրերում, դրանք քայքայվում են՝ աղտոտելով հողն ու գրունտային ջրերը թունավոր թթուներով ու ծանր մետաղներով։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	37: {
		content: "Աշխարհում տարեկան կիրառվում է մոտ 300 մլն․ տոննա թուղթ, որի միայն 43%-ն է վերամշակված թուղթը։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	38: {
		content: "Մեկ տոննա վերամշակված թուղթը և ստվարաթուղթը խնայում է 17 ծառ, 26500լ ջուր և 1750լ նավթ։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	39: {
		content: "Մարդկությունն ամեն տարի ստեղծում է 2․12 մլրդ տոննա թափոն, ինչը մոտ չորս անգամ ավելին է, քան երկրի բնակչության ընդհանուր քաշը։ ",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	40: {
		content: "Դու տանը չես տեսակավորում աղբը։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	41: {
		content: "Պողպատի ստացումը վերամշակված հումքից ծախսում է 4 անգամ ավելի քիչ էներգիա, քան հանքանյութից ստացումը։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	42: {
		content: "Դու կոմպոստացնում ես սննդի մնացորդները։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	43: {
		content: "Յուրաքանչյուր վայրկյան աշխարհում գոյանում է 3.8կգ «էկոլոգիապես անվտանգ» թափոններ, որի 29%-ը կազմում են սննդի մնացորդները և 25%-ը՝ թուղթն ու ստվարաթուղթը։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	44: {
		content: "Պլաստիկը լույսի ազդեցությամբ քայքայվում է մանր մասնիկների, որոնք հիշեցնում են զոոպլանկտոն, և ձկները ու ջրային այլ կենդանիները շփոթաբար ուտում են դրանք՝ կուտակելով օրգանիզմում։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	45: {
		content: "Կոմպոստն բնական օրգանական պարարտանյութ է, որը խթանում է բույսերի աճը և վերականգնում է սպառված հողի կենսունակությունը: Կոմպոստացման համար կարող է օգտագործվել աղբարկղի կենցաղային թափոնների 30%-ը: ",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	46: {
		content: "Դու սպառված մարդկոցները նետում ես աղբաման։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	47: {
		content: "Ծով նետած թղթե անձեռոցիկն ամբողջությամբ կքայքայվի 3 ամսում, լուցկին՝ 6 ամսում, ծխախոտի մնացորդը ջրում կլողա 1-5 տարի, իսկ պոլիէթիլենային տոպրակը՝ 10-20 տարի։",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	48: {
		content: "Խաղաղ օվկիանոսի հյուսիսային մասում կա մի տարածք, որը կոչվում է «Մեծ խաղաղ օվկիանոսյան աղբի բիծ» կամ «Արևելյան աղբի մայրցամաք»։ Այստեղ, ջրի վերին շերտում, հավաքված է մոտ 10մլն տոննայից ավելի պլաստիկ թափոն։ ",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},
	49: {
		content: " Այժմ դու գիտես ինչպես վարվել թափոնների հետ",
		color: "red",
		borderColor: "1px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
		fieldImg: "",
		fieldColor: "",
	},

	101: {
		head: "կանոններ",
		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo odit labore corrupti distinctio quod officiis, animi fuga asperiores minus nesciunt voluptatem fugit nihil quo repellendus sed deleniti, illum delectus nisi. Quisquam vitae nisi saepe nihil autem, sit mollitia accusantium dicta numquam fugiat error. Non recusandae accusantium, excepturi exercitationem esse sunt.",
		color: "black",
		borderColor: "3px solid black",
		bgColor: "antiquewhite",
		popupImg: "",
	}
};
