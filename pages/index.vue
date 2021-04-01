<template>
  <v-row>
    <v-col class="text-center">
      <h1>
        {{ msg }}
      </h1>

      <div class="userLists">
        <ul>
          <li v-for="user in users" :key="user.id">
            {{ user.id }}: {{ user.name }} / {{ user.username }}<br>
            {{ user.company.name }}
          </li>
        </ul>
      </div>
    </v-col>
  </v-row>
</template>

<script>
/* API:
** https://jsonplaceholder.typicode.com/users/
** https://jsonplaceholder.typicode.com/guide/
*/
//import axios from 'axios'
const axios = require("axios");
let url = "https://jsonplaceholder.typicode.com/users/";

export default {
  asyncData({ params }) {
    return axios.get(url).then(res => {
      return { users: res.data };
    })
    .catch ((e) => {
      console.log(e.response.status)
    })
  },

  data() {
    return {
      msg: "Hello"
    };
  }
};
</script>

<style lang="scss" scoped>
li {
  text-align: left;
  margin-bottom: 4px;
}
</style>