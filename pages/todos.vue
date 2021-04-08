<template>
  <div>
    <code class="debug">{{ $data }}</code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      done: false,
    }
  },
  created: function () {
    this.$store.dispatch('todos/init')
  },
  methods:  {
    add() {
      this.$store.dispatch('todos/add', this.name)
      this.name = ''
    }
  }
}
</script>
