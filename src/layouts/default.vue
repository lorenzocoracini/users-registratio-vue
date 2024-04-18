<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <router-link v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item>{{ item.name }}</v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Opções</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
const items = [
  {
    name: "Cadastro de usuários",
    id: 1,
    to: "/userForm",
  },
  {
    name: "Usuários por estado",
    id: 2,
    to: "/usersByState",
  },
  {
    name: "Usuários por origem",
    id: 3,
    to: "/usersByOrigin",
  },
  {
    name: "Tabela de Usuários",
    id: 4,
    to: "/usersTable",
  },
];
</script>

<style scoped>
  a{
    text-decoration: none;
    color: #505050;
    font-size: 20px;
  }
</style>