<template>
  <div>
    <!-- <v-container>
      <h2>Child</h2>
      <ul>
        <li>
          <nuxt-link to="../parent-child">index</nuxt-link>
        </li>
        <li>
          <nuxt-link to="./parent">parent</nuxt-link>
        </li>
      </ul>
    </v-container>-->

    <hr />
    <v-container>
      <h3>User Form</h3>
      <p>user_name {{user_name}}</p>
      <v-row justify="space-between">
        <v-col cols="12" md="4">
          <v-form v-on:submit.prevent="update" ref="form">
            <v-text-field v-model="user_name" :counter="max" :rules="rules" label="First name"></v-text-field>
            <v-btn elevation="2" @click="update">名前変更</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user_name: this.userName,
    }
  },
  methods: {
    update() {
      this.$emit('update:user-name', this.user_name)
    },
  },
}
</script>
