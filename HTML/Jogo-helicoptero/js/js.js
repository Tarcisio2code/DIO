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
	var velocidade=5;
	var podeAtirar=true;

	//retorna um valor entre 0 e 334
	var posicaoY = parseInt(Math.random() * 334);

	jogo.pressionou = [];
	
	//Verifica se o usuário pressionou alguma tecla	
	$(document).keydown(function(e){
		jogo.pressionou[e.which] = true;
	});
	
	$(document).keyup(function(e){
		jogo.pressionou[e.which] = false;
	});

	//Game Loop
 	//Executa a função loop a cada 30ms
	jogo.timer = setInterval(loop,30);

	function loop(){
		//movimenta o fundo da div fundoGame
		movefundo();
		
		//movimenta a div jogador
		movejogador();

		//movimenta a div inimigo1
		moveinimigo1();

		//movimenta a div inimigo2
		moveinimigo2();

		//movimenta a div amigo
		moveamigo();

		//trata as colisões do jogo utilizando o framework jquery-collision
		colisao();
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
			//move a div jogador 10 pixels para cima até atingir o topo
			if (topo > 0){
				$("#jogador").css("top",topo-10);
			}
			/* logica proposta aula
			if (topo<=0) {
				$("#jogador").css("top",topo+10);
			}
			*/
		}
		if (jogo.pressionou[TECLA.S]){
			//armazena a posição topo da div jogador
			var topo = parseInt($("#jogador").css("top"));
			//move a div jogador 10 pixels para baixo, até atingir o nivel do personagem
			if (topo < 434){
				$("#jogador").css("top",topo+10);
			}
			/* logica proposta na aula
			if (topo>=434) {
				$("#jogador").css("top",topo-10);
			}
			*/
		}
		if (jogo.pressionou[TECLA.D]) {
			disparo();
		}
	}
	
	function moveinimigo1(){
		//armazena a posição left da div inimigo1
		posicaoX = parseInt($("#inimigo1").css("left"));
		//move a div inimigo1 para a esquerda conforme valor definido pela variavel velocidade
		$("#inimigo1").css("left",posicaoX-velocidade);
		//move a div inimigo1 para cima conforme valor randomico retornado pela variavel posicaoY
		$("#inimigo1").css("top",posicaoY);

		//reposiciona a div inimigo1 quando atingir o limite da div fundoGame
		if (posicaoX<=0) {
			posicaoY = parseInt(Math.random() * 334);
			$("#inimigo1").css("left",694);
			$("#inimigo1").css("top",posicaoY);
				
		}
	}

	function moveinimigo2(){
		//armazena a posição left da div inimigo2
		posicaoX = parseInt($("#inimigo2").css("left"));
		//move a div inimigo2 para a esquerda
		$("#inimigo2").css("left",posicaoX-3);

		//reposiciona a div inimigo2 quando atingir o limite da div fundoGame
		if (posicaoX<=0) {
			$("#inimigo2").css("left",775);
		}
	}

	function moveamigo(){
		//armazena a posição left da div amigo
		posicaoX = parseInt($("#amigo").css("left"));
		//move a div amigo para a direita
		$("#amigo").css("left",posicaoX+1);

		//reposiciona a div amigo quando atingir o limite da div fundoGame
		if (posicaoX>906) {
			$("#amigo").css("left",0);
		}
	}

	function disparo() {
	
		if (podeAtirar==true) {
			
			podeAtirar=false;
		
			//armazena a posição topo da div jogador1
			topo = parseInt($("#jogador").css("top"))
			//armazena a posição left da div jogador1
			posicaoX= parseInt($("#jogador").css("left"))
			//calculo para posicionar o inicio da div disparo
			tiroX = posicaoX + 190;
			topoTiro=topo+37;
			//cria a div disparo dentro da div fundo game
			$("#fundoGame").append("<div id='disparo'></div");
			//posiciona a div disparo
			$("#disparo").css("top",topoTiro);
			$("#disparo").css("left",tiroX);
			
			var tempoDisparo=window.setInterval(executaDisparo, 30);
		
		}
	 
		function executaDisparo() {
			//armazena a posição left da div disparo
			posicaoX = parseInt($("#disparo").css("left"));
			//move a div disparo
			$("#disparo").css("left",posicaoX+15); 
	
			//remove a div disparo ao atingir o limite da div fundoGame
			if (posicaoX>900) {
				//limpa a variavel tempoDisparo
				window.clearInterval(tempoDisparo);
				//em alguns browsers é necessário indicar que a variável é null
				tempoDisparo=null;
				//remove a div disparo
				$("#disparo").remove();
				podeAtirar=true;
			}
		}
	}
	
	function colisao() {
		//armazena as informações quando a div jogador colide com a div inimigo1
		var colisao1 = ($("#jogador").collision($("#inimigo1")));
			
		if (colisao1.length>0) {
			//armazena a posição left e top da div inimigo1
			inimigo1X = parseInt($("#inimigo1").css("left"));
			inimigo1Y = parseInt($("#inimigo1").css("top"));
			//executa a função explosao1 com a posição da div inimigo1
			explosao1(inimigo1X,inimigo1Y);
			
			//armazena um valor randomico entre 0 e 334
			posicaoY = parseInt(Math.random() * 334);
			//reposiciona a div inimigo1
			$("#inimigo1").css("left",694);
			$("#inimigo1").css("top",posicaoY);
		}
		
	}
	//Explosão 1
	function explosao1(inimigo1X,inimigo1Y) {
		//cria a div explosao1
		$("#fundoGame").append("<div id='explosao1'></div");
		//define a imagem de fundo da div. Atribuido aqui para funcionar em todos os browsers
		$("#explosao1").css("background-image", "url(imgs/explosao.png)");
		//cria uma variável para a div explosao1
		var div=$("#explosao1");
		//posiciona a div explosao1
		div.css("top", inimigo1Y);
		div.css("left", inimigo1X);
		//fução jquery para criar animação da explosao - Almenta o tamanho da div até 200, e reduz a opacidade até 0
		div.animate({width:200, opacity:0}, "slow");
		
		//remove a div explosao1 após 1s
		var tempoExplosao=window.setInterval(removeExplosao, 1000);
		
		function removeExplosao() {
			
			div.remove();
			window.clearInterval(tempoExplosao);
			tempoExplosao=null;
			
		}
			
	} // Fim da função explosao1()
		
}