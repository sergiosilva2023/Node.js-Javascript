/**
 * Fundamentos da POO
 * Programação Orientada a Objetos
 */

// criar classe Modelo
class Bloco {
  // criar atributos
  constructor(textura, resistencia) {
    this.textura = textura;
    this.resistencia = resistencia;
  }

  // ações
  criarBloco() {
    console.log("--------------------------------------");
    console.log("▧");
    console.log(`Bloco de ${this.textura}`);
    console.log(`Resistência: ${this.resistencia}`);
  }
  construir() {
    console.log(`Bloco de ${this.textura} colocado.`);
  }
  minerar() {
    console.log("□ □ □ □ Recursos obtidos!");
  }
}

class Enxada extends Bloco {
  // atributos
  constructor(textura, resistencia, conquista) {
    super(textura, resistencia);
    this.conquista = conquista;
  }
  // ações
  criarEnxada() {
    console.log("--------------------------------------------");
    console.log("-_");
    console.log(" /");
    console.log(`Enxada de ${this.textura}`);
    console.log(`Resistência: ${this.resistencia}`);
  }

  arar() {
    console.log("._._._. Terra arada!");
    if (this.conquista === true) {
      console.log("☀ Conquista obtida!");
    }
  }
  // polimorfismo
  minerar(){
    console.log("☨ Dano atribuído!")
  }
}
/******** MUNDO *********/
console.clear();

console.log(" ______ ___ _  _ ___ ___ ___    _   ___ _____");
console.log("|  /  |_ _| | | __/ __| _   /_ | __|_   _|");
console.log("| |/| || || .` | _| (__|   / / _ | _|  | |  ");
console.log("|_|  |_|___|_|_|______|_|_/_/ __|   |_| ");

console.log("");

// instanciar um objeto

const bloco1 = new Bloco("terra", 1);
bloco1.criarBloco();
const bloco2 = new Bloco("madeira", 2);
bloco2.criarBloco();
bloco2.construir();
const bloco3 = new Bloco("pedra", 5);
bloco3.criarBloco();
bloco3.minerar();

const enxada1 = new Enxada("madeira", 2, false)
enxada1.criarEnxada()
enxada1.arar()

const enxada2 = new Enxada("ferro", 5, true)
enxada2.criarEnxada()
enxada2.arar()

const enxada3 = new Enxada("diamante", 10, false)
enxada3.criarEnxada()
enxada3.minerar()
