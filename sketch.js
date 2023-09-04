let personagem
let grama

let tamanho = 64

let andarX = 0

let andarY = 0

// executa apens uma vez ao iniciar o programa
function setup() {
  createCanvas(576, 576);
  personagem = loadImage('BMO.gif')
  grama = loadImage('grass.png')
}

// loop até o programa ser encerrado
function draw() {
  background(220);
  
  for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
      image(grama, tamanho*j, tamanho*i, tamanho, tamanho)
    }
  }
  image(personagem, andarX, andarY, tamanho, tamanho)

  if(andarX === 512 && andarY === 512){
  
  
  rect(160, 160, 256, 256)
  textSize(35)
  text('GANHOU', 200, 300)
  botao = createButton('ReStart')
  botao.mousePressed(reset)
  noLoop()
  }
}

function reset() {
  andarX = 0
  andarY = 0
  botao.remove()
  loop()
}



// chamada uma vez que uma tecla é pressionada
function keyPressed () {
  if(keyIsDown(DOWN_ARROW) && andarY < 512){
    andarY += 64
  }
  if(keyIsDown(UP_ARROW) && andarY > 0){
    andarY -= 64
  }
  
  if(keyIsDown(LEFT_ARROW) && andarX > 0){
    andarX -= 64
  }
  
  if(keyIsDown(RIGHT_ARROW) && andarX < 512){
    andarX += 64
  }
}
