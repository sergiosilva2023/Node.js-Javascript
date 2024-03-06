/**
 * Fundamentos da POO
 * Encapsulamento
 */

class User {
  // atributos
  constructor(login, senha) {
    this.login = login; // publico
    // encapsular o atributo senha
    let _senha = senha;
    this.getSenha = () => _senha;
    this.setSenha = (novaSenha) => _senha = novaSenha
  }
  // ação

  logar() {
    console.log("___________________________________________");
    console.log(`Usúario: ${this.login}`);
    console.log(`Senha: ${this.getSenha()}`);
    if (this.login === "admin" && this.getSenha() === "123456") {
      console.log("Usúario autenticado");
    } else {
      console.log("Usúario e/ou senha inválido");
    }
  }
}


/** SISTEMA **/
console.clear()
const user1 = new User("admin", "1234")
user1.logar()
user1.setSenha("123456")
user1.logar()