<template>
  <nav class="nav">
    <div class="dropdown">
      <button class="dropbtn">CATegories</button>
      <div class="dropdown-content">
        <router-link v-for="link of navLinks" :key="link.name" :to="link.to">{{
          link.name
        }}</router-link>
      </div>
    </div>

    <div class="home-oval">
      <router-link class="home-link" to="/">home</router-link>
    </div>

    <div class="dropdown">
      <router-link to="/randomcat">
        <button class="dropbtn">Random</button>
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Navbar",
  data: () => {
    return {
      navLinks: [
        { name: "home", to: "/" },
        { name: "my fav cat", to: "/details?id=ocic" },
        { name: "random", to: "/randomcat" },
      ],
    };
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  z-index: 999;
  top: 0;
  background-color: #d3b5e5;
}

.dropbtn {
  background-color: #bbe7fe;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #bbe7fe;
}

.home-oval {
  width: 100px;
  height: 50px;
  background: #bbe7fe;
  border-radius: 100px / 50px;
  line-height: 50px;
  font-size: 16px;
  text-align: center;
  clip-path: polygon(
    35% 30%,
    65% 30%,
    70% 0,
    100% 50%,
    80% 100%,
    20% 100%,
    0 50%,
    30% 0
  );
}

.home-link {
  display: block;
  height: 100%;
  width: 100%;
  color: aliceblue;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
