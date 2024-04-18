// store/users.js
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
  }),
  actions: {
    addUser(user) {
      this.users.push(user);
    },
    getUsers() {
      let items = localStorage.getItem("users");
      if (items) {
        this.users = JSON.parse(items);
      }
    },
  },
});
