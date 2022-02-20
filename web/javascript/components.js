export const welcomeLogin = `
<div class="anime-top-to-center">
  <p>Bem-vindo à</p>
  <h1>He4rt Developers</h1>
</div>
<div class="anime-bottom-to-center">
  <img src="assets/he4rtdevs.webp" alt="Logo da Heart Developers">
</div>
`

export const loginForm = `
<div class="center-content anime-right-to-center">
  <h1>Acesse a plataforma</h1>
  <form action="/" method="POST" class="login-margin">
    <div class="icon-input">
      <i data-feather="mail"></i>
      <input type="email" name="loginEmail" id="loginEmail" placeholder="E-mail" required>
    </div>
    <div class="icon-input">
      <i data-feather="lock"></i>
      <input type="password" name="loginPassword" id="loginPassword" placeholder="Senha" required>
    </div>
    <a class="left" href="/">Esqueci a senha</a>
    <button id="loginSubmit" type="submit">
      <i data-feather="log-in"></i>
      Entrar
    </button>
    <button class="submit-github">
      <i data-feather="github"></i>
      Entrar pelo GitHub
    </button>
    <a id="switch-login" href="">Não tenho uma conta</a>
  </form>
</div>
`

export const welcomeRegister = `
<div class="anime-top-to-center">
  <p>A He4rt Developers é uma comunidade criada com o intuito de guiar
  quem deseja iniciar na área da programação.
  </p>
  <strong>Junte-se a nós!</strong>
</div>
<div class="anime-bottom-to-center">
  <img src="assets/Saly-10.webp" alt="Logo da Heart Developers">
</div>
`

export const registerForm = `
<div class="center-content">
  <h1>Crie sua conta</h1>
  <form action="/" method="POST" class="register-margin">
    <div class="icon-input">
      <i data-feather="user"></i>
      <input type="text" name="registerUsername" id="registerUsername" placeholder="Nome de usuário" required>
    </div>
    <div class="icon-input">
      <i data-feather="mail"></i>
      <input type="email" name="registerEmail" id="registerEmail" placeholder="E-mail" required>
    </div>
    <div class="icon-input">
      <i data-feather="lock"></i>
      <input type="password" name="registerPassword" id="registerPassword" placeholder="Senha" required>
    </div>
    <div class="icon-input">
      <i data-feather="lock"></i>
      <input type="password" name="registerConfirmPassword" id="registerConfirmPassword"
        placeholder="Confirmar senha" required>
    </div>
    <button id="registerSubmit" type="submit">
      <i data-feather="user-plus"></i>
      Cadastrar
    </button>
    <a id="switch-register" href="">Já tenho uma conta</a>
  </form>
</div>
`

export const wrapperLogin = `
<div class="wrapper wrapper-login on-top">
  <section class="welcome">
    ${welcomeLogin}
  </section>
  <section class="form-section">
    ${loginForm}
  </section>
</div>
`

export const wrapperRegister = `
<div class="wrapper wrapper-register">
  <section class="welcome-register">
    ${welcomeRegister}
  </section>
  <section class="form-section register-form">
    ${registerForm}
  </section>
</div>
`

export const toast = `
<div class="toast">
  <i data-feather="x-circle"></i>
  <b>Mensagem</b>
</div>
`