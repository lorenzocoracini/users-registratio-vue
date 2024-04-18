<template>
    <v-card>
      <v-card-title>Tabela de Usuários</v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="users"
          item-key="id"
          class="elevation-1"
          no-data-text="Nenhum dado disponível"
          items-per-page-text="Itens por página"
          
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Todos os Usuários</v-toolbar-title>
            </v-toolbar>
          </template>
          <template v-for="header in headers" :key="header.value" v-slot:[`item.${header.value}`]="{ item }">
            <td>{{ item[header.value] }}</td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  import { useUsersStore } from '@/stores/users';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    setup() {
      const usersStore = useUsersStore();
      const users = usersStore.users; 
  
      const headers = [
        { text: 'Nome', value: 'name' },
        { text: 'E-mail', value: 'email' },
        { text: 'CEP', value: 'cep' },
        { text: 'Origem', value: 'origin' },
        { text: 'Rua', value: 'street' },
        { text: 'Cidade', value: 'city' },
        { text: 'Estado', value: 'state' }
      ];
  
      return {
        users,
        headers
      };
    }
  });
  </script>
  