document.querySelector('#entrar').addEventListener('click', (a)=>{
  a.preventDefault();
  entrar();
});

function entrar() {
  let usuario = document.querySelector('#login');
  let senha = document.querySelector('#senha');

  let listaUser = [];

  let usuarioValido = {
    login: '',
    senha: ''
  }

  listaUser = JSON.parse(localStorage.getItem('usuarios'));

  listaUser.forEach(elemento => {
    if (usuario.value === elemento.login && senha.value === elemento.senha) {
      usuarioValido = {
        id: elemento.id,
        login: elemento.login,
        senha: elemento.senha
      }
    }
  });

  if (usuario.value === usuarioValido.login && senha.value === usuarioValido.senha) {
    alert('Vá para sua lista de produtos');
    saveSession(usuarioValido.id);
    window.location.href = '../DesafioJulius/index.html';
  } else {
    alert('O Email ou a Senha estão errados');
  }

  function saveSession(data) {
    if (saveSession) {
      localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logado", JSON.stringify(data));
  }

}
