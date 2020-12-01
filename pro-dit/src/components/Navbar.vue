<template>
  <!-- still have to make the nav stickey -->

  <nav class="nav">
    <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        <router-link v-for="link of navLinks" :key="link.name" :to="link.to">{{
          link.name
        }}</router-link>
      </div>
    </div>

    <!-- pic of home goes here links to home -->
    <div class="home-oval">
      <!-- <img src="./../assets/logo.png" alt="home" width="50px" height="50px" /> -->
      <router-link class="home-link" to="/">home</router-link>
    </div>

    <!-- bring up random product page -->
    <div class="dropbown">
      <button class="dropbtn">Random</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => {
    return {
      navLinks: [
        { name: "One link", to: "/" },
        { name: "To rule", to: "/poo" },
      ],
    };
  },
};
</script>

<style scoped>
/* still have to make the nav sticky */
.nav {
  display: flex;
  justify-content: space-between;
  /* position: fixed; */
  /* width: 100%; */
  /* top: 0; */
  background-color: rgb(192, 29, 192);
}

.dropbtn {
  background-color: #4caf50;
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
  background-color: #3e8e41;
}

.home-oval {
  width: 100px;
  height: 50px;
  background: red;
  border-radius: 100px / 50px;
  line-height: 50px;
  font-size: 16px;
  text-align: center;
}

.home-link {
  display: block;
  height: 100%;
  width: 100%;
  /* color: aliceblue; */
}
</style>
