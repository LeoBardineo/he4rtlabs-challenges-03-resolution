welcomeContent = `
<div class="anime-top-to-center">
  <p>Bem-vindo à</p>
  <h1>He4rt Developers</h1>
</div>
<div class="anime-bottom-to-center">
  <img loading="lazy" src="assets/he4rt-logo.svg" alt="Logo da Heart Developers">
</div>
`

loginContent = `
<div class="center-content anime-right-to-center">
  <h1>Acesse a plataforma</h1>
  <form class="login-margin">
    <div class="icon-input">
      <i data-feather="mail"></i>
      <input type="email" name="loginEmail" id="loginEmail" placeholder="E-mail" autocomplete="on" required>
    </div>
    <div class="icon-input">
      <i data-feather="lock"></i>
      <input type="password" name="loginPassword" id="loginPassword" placeholder="Senha" required>
    </div>
    <a class="left" href="/">Esqueci a senha</a>
    <button type="submit">
      <i data-feather="log-in"></i>
      Entrar
    </button>
    <button class="submit-github">
      <i data-feather="github"></i>
      Entrar pelo GitHub
    </button>
    <a class="login__form__link" id="switch-form" href="">Não tenho uma conta</a>
  </form>
</div>
`

registerContent = `
<div class="center-content">
  <h1>Crie sua conta</h1>
  <form class="register-margin">
    <div class="icon-input">
      <i data-feather="user"></i>
      <input type="text" name="registerUsername" id="registerUsername" placeholder="Nome de usuário" autocomplete="on" required>
    </div>
    <div class="icon-input">
      <i data-feather="mail"></i>
      <input type="email" name="email" id="email" placeholder="E-mail" required>
    </div>
    <div class="icon-input">
      <i data-feather="lock"></i>
      <input type="password" name="registerPassword" id="registerPassword" placeholder="Senha" required>
    </div>
    <div class="icon-input">
      <i data-feather="lock"></i>
      <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirmar senha" required>
    </div>
    <button class="login__form__button login__form__button--submit" type="submit">
      <i data-feather="user-plus"></i>
      Cadastrar
    </button>
    <a class="login__form__link" id="switch-form" href="">Já tenho uma conta</a>
  </form>
</div>
`