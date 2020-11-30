<template>
  <nav>
    <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        <a v-for="link of navLinks" :key="link" v-bind:href="link.href">{{
          link.name
        }}</a>

        <a href="https://nhentai.net/g/337674/">Link 1</a>
        <a href="https://nhentai.net/g/337836/">Link 2</a>
        <a href="https://nhentai.net/g/337680/">Link 3</a>
      </div>

      <div>
        <!-- pic of home goes here links to home -->
        <a href="#">home</a>
      </div>

      <!-- bring up random product page -->
      <div>
        <button>Random</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => {
    return {
      navLinks: [
        { name: "One link", href: "https://nhentai.net/g/337674/" },
        { name: "To rule", href: "https://nhentai.net/g/337836/" },
        { name: "them all nya!", href: "https://nhentai.net/g/337680/" },
      ],
    };
  },
};
</script>

<style scoped>
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
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
