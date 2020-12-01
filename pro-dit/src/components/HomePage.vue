<template>
  <section class="wrap">
    <div class="sidebar">
      <form action="">
        <div class="sidebar-button">
          <p>sort on child friendliness</p>
          <span>
            <input type="radio" id="age1" name="age" value="30" />
            <label for="age1">0 - 30</label>
          </span>
          <span>
            <input type="radio" id="age2" name="age" value="60" />
            <label for="age2">31 - 60</label>
          </span>
          <span>
            <input type="radio" id="age3" name="age" value="100" />
            <label for="age3">61 - 100</label>
          </span>
        </div>
      </form>

      <div class="sidebar-button"><p>my fav cat</p></div>

      <!-- <p>{{ $route.query }} this.$route.query</p> -->

      <div class="sidebar-button">
        <form action="">
          <p>sort on the best cat</p>
          <input type="radio" id="age1" name="age" value="30" />
          <label for="age1">0 - 30</label><br />
          <input type="radio" id="age2" name="age" value="60" />
          <label for="age2">31 - 60</label><br />
          <input type="radio" id="age3" name="age" value="100" />
          <label for="age3">61 - 100</label><br /><br />
        </form>
      </div>

      <div class="sidebar-button">
        <p>random order</p>
      </div>
    </div>

    <div class="content">
      <HomeItem
        v-for="breed of breeds"
        :key="breed.id"
        :name="breed.name"
        :id="breed.id"
      />
    </div>
  </section>
</template>

<script>
import axios from "axios";
import HomeItem from "./HomeItem.vue";

export default {
  components: { HomeItem },
  name: "HomePage",
  data() {
    return {
      breeds: null,
    };
  },
  mounted() {
    axios.get("https://api.thecatapi.com/v1/breeds?limit=10").then((res) => {
      this.breeds = res.data;
      // console.log(this.breeds);
    });
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
}

.sidebar {
  background-color: magenta;
  min-width: max-content;
  max-width: 25%;

  /* height: 100vh; */
}

.sidebar-button {
  /* padding: 0 10px 0 10px; */
  /*       top  R    bot   L */
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  border-top: 1px solid maroon;
}
.content {
  background-color: maroon;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
</style>
