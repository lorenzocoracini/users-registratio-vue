// store/users.js
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
    errorMessage: '', 
  }),
  actions: {
    addUser(user) {
      this.users.push(user);
      this.errorMessage = '';
      localStorage.setItem("users", JSON.stringify(this.users));
    },
    getUsers() {
      let items = localStorage.getItem("users");
      if (items) {
        this.users = JSON.parse(items);
      }
    },
  },
});
