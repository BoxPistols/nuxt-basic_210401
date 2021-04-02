<template>
    <v-row>
        <v-col class="text-center">
            <h1>
                {{ msg }}
            </h1>
            <h2>{{ $store.state.message }}</h2>
            <h2>{{ $store.state.num }}</h2>
            <div class="images">
                <img src="~/assets/image/SpringSweets.jpg" alt="" />
            </div>

            <v-simple-table class="userLists">
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">Name</th>
                            <th class="text-left">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.username }}</td>
                            <td>{{ user.company.name }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>

            <!-- <div class="userLists">
        <ul>
          <li v-for="user in users" :key="user.id">
            {{ user.id }}: {{ user.name }} / {{ user.username }}<br />
            {{ user.company.name }}
          </li>
        </ul>
      </div> -->
        </v-col>
    </v-row>
</template>

<script>
/* API:
 ** https://jsonplaceholder.typicode.com/users/
 ** https://jsonplaceholder.typicode.com/guide/
 */
import axios from 'axios'
// const axios = require("axios");
let url = "https://jsonplaceholder.typicode.com/users/";

export default {
    data  () {
      return  {
        msg: "Hello"
      }
    },
    asyncData({ params, error }) {
        return axios
            .get(url)
            .then((res) => {
                return { users: res.data };
            })
            .catch((e) => {
                // error({ users: e.response.status, message: e.message });
                error({
                    statusCode: e.response.status,
                    message: e.response.message,
                });
                console.log(e.response.status);
            });
    },

    data() {
        return {
            msg: "Hello",
        };
    },
};
</script>

<style lang="scss" scoped>
    .userLists {
        display: flex;
        justify-content: center;
        margin: 24px auto;
    }
    li {
        text-align: left;
        margin-bottom: 4px;
    }
    img {
        max-width: 400px;
    }
</style>
