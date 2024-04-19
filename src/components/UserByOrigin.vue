<template>
  <v-card>
    <v-card-title>Resumo da Distribuição por Origem</v-card-title>
    <v-card-text>
      <v-container>
        <v-row v-for="(count, origin) in userCountByOrigin" :key="origin">
          <v-col cols="6">{{ origin }}</v-col>
          <v-col cols="6">{{ count }}</v-col>
        </v-row>
        <apexchart class="pie" type="pie" :options="chartOptions" :series="chartSeries" width="380" />
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts';
import { useUsersStore } from '@/stores/users';
import { defineComponent, computed } from 'vue';

export default defineComponent({
  components: {
    apexchart: VueApexCharts
  },
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

      return countByOrigin;
    });

    const chartOptions = computed(() => {
      return {
        labels: Object.keys(userCountByOrigin.value),
      };
    });

    const chartSeries = computed(() => {
      return Object.values(userCountByOrigin.value);
    });

    return {
      userCountByOrigin,
      chartOptions,
      chartSeries
    };
  }
});
</script>

<style scoped>

  .pie{
    margin-top: 120px;
  }

</style>