<template>
  <div>
    <section class="section pb-0 bg-gradient-info main-section">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-lg-2 ml-lg-auto">
            <div class="position-relative pl-md-5">
              <img src="dist/assets/img/ill-2.svg" class="img-center img-fluid" />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1 mt-0">
            <div class="card bg-gradient-secondary shadow shadow-lg--hover mt-5">
              <form class="card-body p-lg-5" @submit="login($event)">
                <h4 class="mb-1">{{title}}</h4>
                <p class="mt-0">Para acceder a algunos de los mejores e impresionantes proyectos.</p>
                <div class="form-group mt-5">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="ni ni-user-run"></i>
                      </span>
                    </div>
                    <input
                      class="form-control"
                      placeholder="Correo Electronico"
                      name="email"
                      type="email"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="ni ni-email-83"></i>
                      </span>
                    </div>
                    <input
                      class="form-control"
                      placeholder="Contraseña"
                      name="password"
                      type="password"
                    />
                  </div>
                </div>
                <div>
                  <button type="submit" class="btn btn-success btn-round btn-block btn-lg">Iniciar Sesión</button>
                  <div class="row d-flex align-items-center">
                    <div class="col-md-6 mt-3">
                      <router-link to="/register" class="register-link">
                        <span class="nav-link-inner--text">Nuevo Registro?</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <notifications group="foo" position="top right" class="my-style" width="400" />
  </div>
</template>



<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
  name: "Login",
  data: function() {
    return {
      title: "Inicio de Sesión",
      userDetails: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    ...mapActions(["saveUserData"]),
    login(e) {
      e.preventDefault();
      let email = e.target.elements.email.value;
      let password = e.target.elements.password.value;
      let data = {
        email: email,
        password: password
      };
      axios.post("http://localhost:3015/api/v1/users/login", data)
        .then(response => {
          localStorage.setItem("token", response.data.token);
          this.$router.replace("to-do-list");
        })
    },
    showNotification(msg, alertType) {
      this.$notify({
        group: "foo",
        text: `<div class="alert ${alertType}" role="alert">${msg}</div> `,
        position: "top left",
        duration: 10000
      });
    },
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
.section {
  padding-top: 0;
}
.google-img-wrapper {
  cursor: pointer;
}
.google-signin-img {
  width: 175px;
}
</style>


