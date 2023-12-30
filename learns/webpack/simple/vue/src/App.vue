<template>
  <div class="hello">
    <h3>{{ message }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return { message: "hello" };
  },
};
</script>

<style>
h3 {
  margin: 1em;
  color: aqua;
}
</style>
