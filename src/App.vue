<template>
  <div>
    <app-header />
    <div class="container">
      <div>
        <button @click="compToRender = 'compHome'">Home</button>
        <button @click="compToRender = 'compContact'">Contact</button>
        <button @click="compToRender = 'compPage'">Page</button>
      </div>

      <keep-alive>
        <component :is="compToRender"></component>
      </keep-alive>
    </div>
    <app-footer />
  </div>
</template>

<script>
import compContact from "./components/contact";
import compHome from "./components/home";
import compPage from "./components/page";

export default {
  data() {
    return {
      compToRender: "compContact",
    };
  },
  components: {
    compContact,
    compHome,
    compPage,
  },
};
</script>

<style>
.container {
  margin-top: 50px;
}
</style>
