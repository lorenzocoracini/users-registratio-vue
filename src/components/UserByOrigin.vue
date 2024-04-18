<template>
  <v-card>
    <v-card-title>Resumo da Distribuição por Origem</v-card-title>
    <v-card-text>
      <v-container>
        <v-row v-for="(count, origin) in userCountByOrigin" :key="origin">
          <v-col cols="6">{{ origin }}</v-col>
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

    const userCountByOrigin = computed(() => {
      const users = usersStore.users;
      const countByOrigin = {};

      users.forEach(user => {
        if (user.origin in countByOrigin) {
          countByOrigin[user.origin]++;
        } else {
          countByOrigin[user.origin] = 1;
        }
      });

      return countByOrigin
      ;
    });

    return {
      userCountByOrigin
    };
  }
});
</script>
