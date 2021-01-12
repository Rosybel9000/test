<template>
  <footer class="footer">
    <div v-if="sitemap" class="sitemap">
      <div v-for="item of sitemap" :key="item.path">
        <a :href="item.path">{{ item.name }}</a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { routes } from "../main";

export default {
  name: "Footer",
  data() {
    return {
      sitemap: null as any,
    };
  },
  mounted() {
    this.sitemap = routes.map((r) => {
      return {
        path: r.path,
        name: r.name,
      };
    });
  },
};
</script>

<style scoped>
.sitemap {
  display: flex;
  justify-content: space-evenly;
  background-color: #d3b5e5;
  padding: 15px;
}
a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}
a:hover {
  text-decoration: underline;
  color: white;
  cursor: pointer;
}
a:visited {
  color: aqua;
}
.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
