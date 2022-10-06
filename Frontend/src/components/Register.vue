<template>
  <div>
    <section class="section pb-0 bg-gradient-info main-section">
      <div class="container">
        <div class="row row-grid align-items-center justify-content-md-center">
          <div class="col-lg-8 order-lg-1 mt-0">
            <div class="card bg-gradient-secondary shadow shadow-lg--hover mt-5">
              <form class="card-body p-lg-5" @submit="registerForm">
                <h4 class="mb-1">Registro</h4>
                <p class="mt-0">Para acceder a algunos de los mejores e impresionantes proyectos.</p>
                <div class="form-group mt-3">
                  <div class="input-group input-group-alternative">
                    <input
                      class="form-control"
                      placeholder="Nombres"
                      type="text"
                      v-model="userInfo.first_name"
                    >
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-alternative">
                    <input
                      class="form-control"
                      placeholder="Apellidos"
                      type="text"
                      v-model="userInfo.last_name"
                    >
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-alternative">
                    <input
                      class="form-control"
                      placeholder="Numero de Contacto"
                      type="text"
                      v-model="userInfo.phone"
                    >
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-alternative">
                    <input
                      class="form-control"
                      placeholder="Correo Electronico"
                      type="email"
                      v-model="userInfo.email"
                    >
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-alternative">
                    <input
                      class="form-control"
                      placeholder="Contraseña"
                      type="password"
                      v-model="userInfo.password"
                    >
                  </div>
                </div>
                <div>
                  <button type="submit" class="btn btn-success btn-round btn-block btn-lg">Registrarte</button>
                </div>
                <router-link to="/login" class="register-link">
                <span class="nav-link-inner--text">Ya esta registrado? </span>
              </router-link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
import axios from 'axios'
export default {
  name: "Register",
  data() {
    return {
      userInfo: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    registerForm(e) {
      e.preventDefault();
      axios.post("http://localhost:3015/api/v1/users/register", this.userInfo)
        .then(response => {
          localStorage.setItem("token", response.data.token);
          this.$router.replace("to-do-list");
        })
    }
  }
};
</script>

<style scoped>
section.main-section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register-link{
  float: right;
  margin-top: 15px;
}
</style>


