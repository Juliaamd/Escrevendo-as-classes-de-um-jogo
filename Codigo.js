
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'um ataque desconhecido';
        break;
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso:
const heroi1 = new Heroi('Kale', 30, 'mago');
const heroi2 = new Heroi('Ryu', 28, 'monge');
const heroi3 = new Heroi('Ashe', 22, 'ninja');
const heroi4 = new Heroi('Darius', 35, 'guerreiro');

heroi1.atacar(); // O mago atacou usando magia
heroi2.atacar(); // O monge atacou usando artes marciais
heroi3.atacar(); // O ninja atacou usando shuriken
heroi4.atacar(); // O guerreiro atacou usando espada
