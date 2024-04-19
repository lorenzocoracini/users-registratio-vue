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
      <apexchart type="bar" :options="chartOptions" :series="chartSeries" height="350" />
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
    const userDataByState = computed(() => {
      const users = usersStore.users;
      const dataByState = {};

      users.forEach(user => {
        if (user.state in dataByState) {
          dataByState[user.state]++;
        } else {
          dataByState[user.state] = 1;
        }
      });

      return dataByState;
    });

    const chartOptions = computed(() => {
      return {
        xaxis: {
          categories: Object.keys(userDataByState.value)
        }
      };
    });

    const chartSeries = computed(() => {
      return [{
        name: 'Usuários por Estado',
        data: Object.values(userDataByState.value)
      }];
    });

    return {
      chartOptions,
      chartSeries
    };
  }
});
</script>
