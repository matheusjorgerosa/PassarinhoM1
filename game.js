var config = { // define informações sobre o jogo
    type: Phaser.AUTO,
    width: 800, // largura do jogo
    height: 600, // altura do jogo

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config); // cria um novo jogo com base nas configurações anteriores

var passarinho; // variável do passarinho 1
var passarinho2; // variável do passarinho 2
var velocidadeX = 5; // velocidade do eixo X do passarinho 1
var velocidadeX2 = 5; // velocidade do eixo X do passarinho 2
var velocidadeY = 5; // velocidade do eixo Y do passarinho 1
var velocidadeY2 = 5; // velocidade do eixo X do passarinho 2

function preload() { // função que carrega as imagens e spritesheets do jogo
    this.load.image('bg', 'assets/bg_space.png'); // carrega o plano de fundo
    this.load.spritesheet('bird', 'assets/bird-purple.png', { frameWidth: 75, frameHeight: 75 }); // carrega a spritesheet do passarinho 1
    this.load.spritesheet('bird2', 'assets/bird-green.png', { frameWidth: 75, frameHeight: 75 }); // carrega a spritesheet do passarinho 2
}

function create() { // função para adicionar as imagens carregadas ao jogo
    this.add.image(400, 300, 'bg').setScale(1.2); // adiciona o plano de fundo com origem 400, 300 e escala 1.2
    passarinho = this.add.sprite(100, 300, 'bird').setScale(1.3); // adiciona o passarinho 1 com origem em 100, 300 e escala 1.3
    passarinho2 = this.add.sprite(600, 300, 'bird2').setScale(1.3); // adiciona o passarinho 2 com origem em 600, 300 e escala 1.3

    // configuração de animação das spritesheets do passarinho 1
    this.anims.create({
        key: 'fly', // define um nome para a animação do passarinho 1
        frames: this.anims.generateFrameNumbers('bird', { start: 0, end: 7 }), // define os frames a serem animados
        frameRate: 10, // taxa de frames do passarinho 1
        repeat: -1 // quantas repetições a animação terá (-1 = infinitas, 0 = nenhuma, >0 = quantidade em si)
    });

    // configuração de animação das spritesheets do passarinho 2
    this.anims.create({
        key: 'fly2', // define um nome para a animação do passarinho 2
        frames: this.anims.generateFrameNumbers('bird2', { start: 0, end: 7 }), // define os frames a serem animados
        frameRate: 10, // taxa de frames do passarinho 2
        repeat: -1 // quantas repetições a animação terá (-1 = infinitas, 0 = nenhuma, >0 = quantidade em si)
    });

    passarinho.anims.play('fly', true); // atribui a animação ao passarinho 1
    passarinho2.anims.play('fly2', true); // atribui a animação ao passarinho 2
}

function update() { // função para atualização da lógica dos passarinhos
    while(passarinho.x >= 100 || passarinho.x <= 700){  // definição do ambiente de vôo do passarinho 1 no eixo X
        passarinho.x += velocidadeX; // lógica para movimentar o passarinho 1 no eixo X
        if(passarinho.x < 100 || passarinho.x > 700){ // verificação se o passarinho saiu do ambiente de vôo no eixo X
            velocidadeX *= -1; // lógica para inverter o sentido de vôo
        }
    break; // fim do loop while
    }   
    while(passarinho.y >= 100 || passarinho.y <= 500){ // definição do ambiente de vôo do passarinho 1 no eixo Y
        passarinho.y += velocidadeY; // lógica para movimentar o passarinho 1 no eixo Y
        if(passarinho.y < 100 || passarinho.y > 500){ // verificação se o passarinho saiu do ambiente de vôo do eixo Y
            velocidadeY *= -1; // lógica para inverter o sentido de vôo
        }
    break; // fim do loop while
    }
    if(velocidadeX > 0){ // condição para verificar qual o sentido de vôo do passarinho 1
        passarinho.setFlip(false, false); // configurar sentido de vôo do passarinho 1
    } else {
        passarinho.setFlip(true, false); // inverter sentido de vôo do passarinho 1
    }

    while(passarinho2.x >= 100 || passarinho2.x <= 700){  // definição do ambiente de vôo do passarinho 2 no eixo X
        passarinho2.x += velocidadeX2; // lógica para movimentar o passarinho 2 no eixo X
        if(passarinho2.x < 100 || passarinho2.x > 700){ // verificação se o passarinho saiu do ambiente de vôo no eixo X
            velocidadeX2 *= -1; // lógica para inverter o sentido de vôo
        }
    break; // fim do loop while
    }   
    while(passarinho2.y >= 100 || passarinho.y <= 500){ // definição do ambiente de vôo do passarinho 2 no eixo Y
        passarinho2.y += velocidadeY2; // lógica para movimentar o passarinho 2 no eixo Y
        if(passarinho2.y < 100 || passarinho2.y > 500){ // verificação se o passarinho saiu do ambiente de vôo do eixo Y
            velocidadeY2 *= -1; // lógica para inverter o sentido de vôo
        }
    break; // fim do loop while
    }
    if(velocidadeX2 > 0){ // condição para verificar qual o sentido de vôo do passarinho 2
        passarinho2.setFlip(false, false); // configurar sentido de vôo do passarinho 2
    } else {
        passarinho2.setFlip(true, false); // inverter sentido de vôo do passarinho 2
    }
}