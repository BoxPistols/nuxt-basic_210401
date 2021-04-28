<template>
  <div>
    <code class="debug">{{ $data }}</code>

    <ul v-for="todo in getTodos" :key="todo.id">
      <li>{{ todo.done }} {{ todo.name }} {{ todo.created }}</li>
    </ul>

    <v-row justify="space-between">
      <v-col cols="12" md="4">
        <form @click.prevent="add">
          <v-text-field v-model="name"></v-text-field>
          <v-btn type="submit">add</v-btn>
        </form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
/* todos.js

state todos: [],

add: firestoreAction((context, name) => {
    if (name.trim()) {
      todosRef.add({
        name: name,
        done: false,
        created: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  }),
*/

export default {
  data() {
    return {
      name: '',
      done: false,
    }
  },
  created: function() {
    this.$store.dispatch('todos/init')
  },
  methods: {
    add() {
      // todo.js
      this.$store.dispatch('todos/add', this.name)
      this.name = ''
    },
  },
  computed: {
    getTodos() {
      return this.$store.state.todos.setTodos
    },
  },
}
</script>
