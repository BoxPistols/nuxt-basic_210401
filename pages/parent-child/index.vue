<template>
  <div class="index">
    <ul>
      <li>
        <nuxt-link to="./parent-child">index</nuxt-link>
      </li>
      <li>
        <nuxt-link to="./parent-child/parent">parent</nuxt-link>
      </li>
      <li>
        <nuxt-link to="./parent-child/child">child</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.index {
  font-size: 20px;
}
</style>
