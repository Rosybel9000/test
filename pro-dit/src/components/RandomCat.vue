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
import HomeItem from "./HomeItem.vue";
import { getRandomCat } from "../utils/catService";

export default {
  name: "RandomCat",
  components: { HomeItem },
  data() {
    return {
      newCat: null,

      breeds: null,
    };
  },
  mounted() {
    getRandomCat().then((cat) => {
      this.newCat = cat;
    });
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
