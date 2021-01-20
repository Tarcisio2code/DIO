function start() { // Inicio da função start()

	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo' class='anima3'></div>");

	//Principais variáveis do jogo
	var jogo = {}
	var TECLA = {
		W: 87,
		S: 83,
		D: 68
	}
	
	jogo.pressionou = [];
	
	//Verifica se o usuário pressionou alguma tecla	
	
	$(document).keydown(function(e){
		jogo.pressionou[e.which] = true;
	});
	
	$(document).keyup(function(e){
		jogo.pressionou[e.which] = false;
	});

	//Game Loop

	jogo.timer = setInterval(loop,30); // executa a função loop a cada 30ms.

	function loop(){
		movefundo(); 	// movimenta o fundo da div fundoGame
		movejogador();	// movimenta a div jogador
	}

	function movefundo(){
		//armazena a posição atual do fundo da div fundoGame
		esquerda = parseInt($("#fundoGame").css("background-position"));
		//move a div fundoGame 1 pixel para a esquerda
		$("#fundoGame").css("background-position", esquerda-1);
	}

	function movejogador() {
		if (jogo.pressionou[TECLA.W]){
			//armazena a posição topo da div jogador
			var topo = parseInt($("#jogador").css("top"));
			//move a div jogador 10 pixels para cima
			$("#jogador").css("top",topo-10);
		}
		if (jogo.pressionou[TECLA.S]){
			//armazena a posição topo da div jogador
			var topo = parseInt($("#jogador").css("top"));
			//move a div jogador 10 pixels para baixo
			$("#jogador").css("top",topo+10);
		}
		if (jogo.pressionou[TECLA.D]) {
		
			//Chama função Disparo	
		}
	} // fim da função movejogador()
	

} // Fim da função start