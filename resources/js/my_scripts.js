/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];


/*
	Registration Page:
		viewStudentStats(id, toggle) method
			parameters:
				id - The css id of the html tag being updated.
				toggle - 
					0 - hide the html tag
					1 - make the html tag visible
			
			purpose: This method will accept the id of an html tag and a toggle value.
					 The method will then set the html tag's css visibility and height.  
					 To hide the html tag (toggle - 0), the visibility will be set to hidden and
					 the height will be set to 0.  
					 To reveal the html tag (toggle - 1), the visibility will be set to visible and
					 the height will be set to auto.
*/
				
function viewStudentStats(id,toggle) {
	var setHeight = document.getElementById(id).style.height;
	setHeight = parseInt(setHeight.replace('%',''))
	var vis; var height;
	if (toggle == 1) {
		vis = "visible";
		height = "auto";
	} else {
		vis = "hidden";
		height = 0;
	}
	document.getElementById(id).style.visibility = vis;
	document.getElementById(id).style.height = height;
}

/*
	Home Page: 
		changeColor(color) method
			parameter: 
				color- A css color
				
			purpose: This method will set the html body's background color to the 
					 provided parameter.
*/

function changeColor(color) {
	document.body.style.backgroundColor = color;
}

/*
	Football Season Stats Page:
		loadStatsPage method:
			parameters: none
			
			purpose: This method will iterate through the stats table and 
					 do the following:
						1. Read through each row of the table & determine which team won
						   the game.
						
						2. Update the winner column to the name of the winning team.
						
						3. Keep track of the number of wins/losses for the Buffs.
						
						4. Update the second table to show the total number of wins/losses for the Buffs.
*/

function loadStatsPage() {
	var table = document.getElementById("stats_table");
	var wins = document.getElementById("wins");
	var losses = document.getElementById("losses");
	var homeScore; var awayScore;
	var buffsWins = 0; var buffsLosses = 0;

	for(i=2; i < table.rows.length; i++){
		homeScore = table.rows[i].cells[2].innerHTML; //read home score
		awayScore = table.rows[i].cells[3].innerHTML; //read away score
		if(homeScore>awayScore){
			buffsWins ++;
			table.rows[i].cells[4].innerHTML = "CU Boulder"; //set winner to CU
		}
		else if(awayScore>homeScore) {
			buffsLosses++;
			table.rows[i].cells[4].innerHTML = table.rows[i].cells[1].innerHTML; //set winner to away team
		}
		else {
			table.rows[i].cells[4].innerHTML = "Tie";
		}
	}

	wins.innerHTML = buffsWins;
	losses.innerHTML = buffsLosses;
}

/*
	Football Player Information Page
		loadPlayersPage method:
			parameters: none
			
			purpose: This method will populate the dropdown menu to allow the 
					 user to select which player's information to view.
					 
					 To handle this, you will need to iterate through the players array
					 and do the following for each player:
						1. Create an anchor tag
						2. Set the href to "#", this will make sure the 
							anchor tag doesn't change pages
						3. Set the onclick to call switchPlayers method 
							(this will need to pass in the index inside the players array)
						4. Set the anchor tag's text to the player's name.
						
					After setting all of the anchor tags, update the innerHTML of the dropdown menu.
					As a note, the id for the dropdown menu is player_selector.
		
		switchPlayers(playerNum) method:
			parameters: 
				playerNum - The index of the football player in the players array.
			
			purpose:
				This method will update the the spans on the player's information pageX
				and calculate the average passing, rushing, and receiving yards.
				
				Span ids:
					p_year     - the player's year in college
					p_major    - the player's major in college
					g_played   - the number of games played for Buffs
					player_img - the player's photo (must set src and alt)
					p_yards    - the number of passing yards
					r_yards    - the number of rushing yards
					rec_yards  - the number of receiving yards
					
					Calculated values:
					  avg_p_yards   - the average number of passing yards for the player's Buff career
					  avg_r_yards   - the average number of rushing yards for the player's Buff career
					  avg_rec_yards - the average number of receiving yards for the player's Buff career
*/
				
function loadPlayersPage(){
	//define dropdown menu items
	var menuItem1 = document.getElementById("menuItem1");
	var menuItem2 = document.getElementById("menuItem2");
	var menuItem3 = document.getElementById("menuItem3");
	var menuItem4 = document.getElementById("menuItem4");

	//create anchor tags
	var aTag1 = document.createElement('a');
	var aTag2 = document.createElement('a');
	var aTag3 = document.createElement('a');
	var aTag4 = document.createElement('a');

	//fill anchor tags
	aTag1.setAttribute("href","#"); aTag1.innerHTML = "Red Boi";
	aTag2.setAttribute("href","#"); aTag2.innerHTML = "Green Boi";
	aTag3.setAttribute("href","#"); aTag3.innerHTML = "Mystery Boi";
	aTag4.setAttribute("href","#"); aTag4.innerHTML = "Other Red Boi";

	//apply anchor tags
	menuItem2.append(aTag1);
	menuItem1.append(aTag2);
	menuItem3.append(aTag3);
	menuItem4.append(aTag4);

	//create onClick event handler
	// menuItem1.addEventListener("click", switchPlayers(1)); console.log("SP1 called");
	// menuItem2.addEventListener("click", switchPlayers(2)); console.log("SP2 called");
	// menuItem3.addEventListener("click", switchPlayers(3)); console.log("SP3 called");
	// menuItem4.addEventListener("click", switchPlayers(4)); console.log("SP4 called");

}

function switchPlayers(playerNum){
	var year = document.getElementById("p_year");
	var major = document.getElementById("p_major");
	var games = document.getElementById("g_played");
	var img = document.getElementById("player_img");
	var passYds = document.getElementById("p_yards");
	var rushYds = document.getElementById("r_yards");
	var recYds = document.getElementById("rec_yards");
	var avgPassYds = document.getElementById("avg_p_yards");
	var avgRushYds = document.getElementById("avg_r_yards"); 
	var avgRecYards = document.getElementById("avg_rec_yards");

	switch(playerNum) {
		case 1:
			year.innerHTML = "Senior";
			major.innerHTML = "Business";
			games.innerHTML = 43;
			img.src = "https://pixels.com/featured/american-football-running-back-ball-cartoon-aloysius-patrimonio.html";
			img.alt = "Green Boi image";
			passYds.innerHTML = 72;
			rushYds.innerHTML = 1293;
			recYds.innerHTML = 762;
			avgPassYds.innerHTML = passYds.innerHTML / games.innerHTML;
			avgRushYds.innerHTML = rushYds.innerHTML / games.innerHTML;
			avgRecYards.innerHTML = recYds.innerHTML / games.innerHTML;
			break;

		case 2:
			year.innerHTML = "Junior";
			major.innerHTML = "Political Science";
			games.innerHTML = 36;
			img.src = "https://www.vectorstock.com/royalty-free-vector/american-football-wide-receiver-running-ball-vector-1878129";
			img.alt = "Red Boi image";
			passYds.innerHTML = 0;
			rushYds.innerHTML = 301;
			recYds.innerHTML = 964;
			avgPassYds.innerHTML = passYds.innerHTML / games.innerHTML;
			avgRushYds.innerHTML = rushYds.innerHTML / games.innerHTML;
			avgRecYards.innerHTML = recYds.innerHTML / games.innerHTML;
			break;

		case 3:
			year.innerHTML = "Freshman";
			major.innerHTML = "Underwater Basket Weaving"
			games.innerHTML = 8;
			img.src = "https://www.lequzhai.com/group/how-to-draw-a-cartoon-football-player/";
			img.alt = "Mystery Boi image";
			passYds.innerHTML = 573;
			rushYds.innerHTML = 38;
			recYds.innerHTML = 0;
			avgPassYds.innerHTML = passYds.innerHTML / games.innerHTML;
			avgRushYds.innerHTML = rushYds.innerHTML / games.innerHTML;
			avgRecYards.innerHTML = recYds.innerHTML / games.innerHTML;
			break;

		case 4:
			year.innerHTML = "Junior";
			major.innerHTML = "Art History";
			games.innerHTML = 28;
			img.src = "https://www.istockphoto.com/vector/tailback-football-player-running-gm156612456-9373424";
			img.alt = "Other Red Boi image"
			passYds.innerHTML = 708;
			rushYds.innerHTML = 241;
			recYds.innerHTML = 6;
			avgPassYds.innerHTML = passYds.innerHTML / games.innerHTML;
			avgRushYds.innerHTML = rushYds.innerHTML / games.innerHTML;
			avgRecYards.innerHTML = recYds.innerHTML / games.innerHTML;
			break;
	}
}