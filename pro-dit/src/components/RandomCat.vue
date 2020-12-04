<template>
  <section class="container">
    <div v-if="newCat" class="wrap-star">
      <img src="../assets/star.png" alt="star" class="star" />
      <div class="star-over">
        <HomeItem :id="newCat.id" :name="newCat.name" />
      </div>
    </div>

    <div class="wrap-love">
      <h1>Not satisfied? try again by pressing on the cat below</h1>
      <a href="/randomcat">
        <img
          src="../assets/trycat.png"
          alt="do it again"
          title="click me nya"
          class="meme-cat"
        />
      </a>
    </div>
  </section>
</template>

<script>
import Axios from "axios";
import HomeItem from "./HomeItem.vue";

export default {
  name: "RandomCat",
  components: { HomeItem },
  data() {
    return {
      newCat: null,
    };
  },
  mounted() {
    Axios.get(`https://api.thecatapi.com/v1/breeds`).then((res) => {
      //   console.log(res.data);
      // find a random id
      // save random id in let
      // give the var (the id ) to the homeitem component
      const breeds = res.data;
      this.newCat = breeds[Math.floor(Math.random() * breeds.length)];

      //  this.$route.query
      // console.log(newCat.id);
    });

    // Axios.get(
    //   `https://api.thecatapi.com/v1/images/search?breed_ids=${this.id}`
    // ).then((res) => {});
  },
};
</script>

<style scoped>
.container {
  padding: 50px;
  position: relative;
  display: flex;
}
.wrap-star {
  position: relative;
  color: indigo;
  font-size: large;
  width: 500px;
  height: 500px;
}
.star {
  position: absolute;
  left: 0;
  top: 0;
  animation: rotation 11s infinite linear;
  width: 100%;
  height: 100%;
}
.star-over {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
}
.meme-cat {
  width: auto;
  padding: 25px;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
