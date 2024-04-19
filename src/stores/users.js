// store/users.js
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
    errorMessage: '', 
  }),
  actions: {
    addUser(user) {
      const existingUser = this.users.find(u => u.email === user.email);
      if (existingUser) {
        this.errorMessage = 'E-mail já cadastrado.';
        return
      }

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
