<template>
  <h1>Page</h1>
</template>
<script>
export default {
  destroyed() {
    console.log("destroyed");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
};
</script>