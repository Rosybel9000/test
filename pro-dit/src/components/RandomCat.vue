<template>
  <section class="container">
    <div v-if="newCat" class="presentcat">
      <h1>Random cat of present time</h1>
      <HomeItem :id="newCat.id" :name="newCat.name" />
    </div>

    <div class="anothercat">
      <h1>Or get another adorable kitty by pressing below</h1>
      <h3>if you can</h3>
      <div class="anothercat-content">
        <div class="catcard">
          <button class="catcard-button" v-on:click="getRandomCat">
            <img
              src="../assets/phonecat.jpg"
              alt="do it again"
              title="click me nya"
              class="cat-img"
            />
            <div class="catcard-title">
              <h2>Get another adorable cat</h2>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
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
  methods: {
    getRandomCat: function() {
      getRandomCat().then((cat) => {
        this.newCat = cat;
      });
    },
  },
  mounted() {
    getRandomCat().then((c) => (this.newCat = c));
  },
};
</script>

<style scoped>
.container {
  padding: 50px;
  display: flex;
  justify-content: space-around;
}
.presentcat {
  align-items: center;
}
.anothercat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.anothercat > h3 {
  color: lightgray;
  font-size: 10px;
}

@media screen and (max-width: 720px) {
  .container {
    flex-direction: column;
  }
}
</style>
