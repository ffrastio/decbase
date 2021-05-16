<template>
  <div id="home">
    <div class="container mx-auto">
      <Navbar class="mb-12"/>
      <Header class="mb-12"/>
      <Services />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/layouts/Navbar.vue";
import Header from "@/components/Header.vue";
import Services from "@/components/Services.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Header,
    Services,
    },
};
</script>
