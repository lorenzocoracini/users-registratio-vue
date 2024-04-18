<template>
    <v-container>
      <v-form @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="formData.name" label="Nome" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="formData.email" label="E-mail" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="formData.cep" label="CEP" @blur="fetchAddress" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-select v-model="formData.origin" label="Origem" :items="originOptions" required></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field v-model="formData.street" label="Rua"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="formData.city" label="Cidade"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="formData.state" label="Estado"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn type="submit" color="primary">Cadastrar</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import {useUsersStore} from '@/stores/users'
  
  export default defineComponent({
    data() {
      return {
        formData: {
          name: '',
          email: '',
          cep: '',
          origin: '',
          street: '',
          city: '',
          state: ''
        },
        originOptions: ['Digital', 'Físico']
      };
    },
    methods: {
      async fetchAddress() {
        if (this.formData.cep.length === 8) {
          try {
            const response = await fetch(`https://viacep.com.br/ws/${this.formData.cep}/json/`);
            const data = await response.json();
            this.formData.street = data.logradouro;
            this.formData.city = data.localidade;
            this.formData.state = data.uf;
          } catch (error) {
            console.error('Erro ao buscar endereço:', error);
          }
        }
      },
      submitForm() {
        const usersStore = useUsersStore();
        usersStore.addUser(this.formData);
        console.log('Dados do formulário:', this.formData);
      }
    }
  });
  </script>
  