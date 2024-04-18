<template>
  <v-card>
    <v-card-title>Resumo da Distribuição por Estado</v-card-title>
    <v-card-text>
      <v-container>
        <v-row v-for="(count, state) in userCountByState" :key="state">
          <v-col cols="6">{{ state }}</v-col>
          <v-col cols="6">{{ count }}</v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { useUsersStore } from '@/stores/users';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  setup() {
    const usersStore = useUsersStore();

    const userCountByState = computed(() => {
      const users = usersStore.users;
      const countByState = {};

      users.forEach(user => {
        if (user.state in countByState) {
          countByState[user.state]++;
        } else {
          countByState[user.state] = 1;
        }
      });

      return countByState;
    });

    return {
      userCountByState
    };
  }
});
</script>
