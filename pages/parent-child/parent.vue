<template>
  <div>
    <v-container>
      <h2>Parent</h2>
      <ul>
        <li>
          <nuxt-link to="../parent-child">index</nuxt-link>
        </li>
        <li>
          <nuxt-link to="./child">child</nuxt-link>
        </li>
      </ul>
    </v-container>
    <v-container>
      <v-col>
        <p>ユーザー名：{{ user_name}}</p>
      </v-col>
      <child :user-name="user_name" @update:user-name="user_name = $event" />
    </v-container>
  </div>
</template>

<script>
import Child from './child.vue'
export default {
  data() {
    return {
      user_name: '田中角栄',
    }
  },
  components: {
    Child,
  },
}
</script>
