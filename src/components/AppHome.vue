<template>
    <div class="home">
      <v-container>
        <h1 class="headline">Bem-vindo ao SistemaRegistra</h1>
        <p class="subtitle">Este sistema permite que você cadastre novos usuários e visualize informações sobre eles.</p>
        <v-row justify="center">
          <v-btn color="primary" class="button" @click="navigateTo('/userForm')">Cadastrar Usuário</v-btn>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      }
    }
  }
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  
  .headline {
    font-size: 4.5rem;
    margin-bottom: 20px;
    margin-top: 45px;
  }
  
  .subtitle {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }

  .button {
    border-radius:5px;
    font-size: 18px;
  }
  </style>
  