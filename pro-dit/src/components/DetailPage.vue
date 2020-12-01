<template>
  <section class="d-wrap">
    <div class="details">
      <img
        :src="src"
        :alt="currentCat.name"
        :title="currentCat.name + ' ' + 'the mowae'"
        width="200px"
        height="200px"
      />
      <h2>{{ currentCat.name }}</h2>
      <p>{{ currentCat.temperament }}</p>
      <p>{{ currentCat.description }}</p>
    </div>

    <div v-if="relatedCats.length > 0" class="related">
      <h1>
        {{
          relatedCats.length > 1
            ? `These ${relatedCats.length} cats are`
            : "This cat is"
        }}
        also {{ temperament.toLowerCase() }}
      </h1>
      <HomeItem
        v-for="relatedCat of relatedCats"
        :id="relatedCat.id"
        :name="relatedCat.name"
        :key="relatedCat.id"
      />
    </div>
  </section>
</template>

<script>
import Axios from "axios";
import HomeItem from "./HomeItem.vue";

export default {
  name: "DetailPage.vue",
  components: { HomeItem },
  data() {
    return {
      src: null,
      currentCat: null,
      temperament: null,
      relatedCats: [],
    };
  },
  mounted() {
    Axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${this.$route.query.id}`
    ).then((res) => {
      this.src = res.data[0].url;
    });
    /* eslint-disable */
    Axios.get(`https://api.thecatapi.com/v1/breeds`).then((res) => {
      //   console.log(res);

      const breeds = res.data;
      const currentCat = breeds.find(
        (breed) => breed.id === this.$route.query.id
      );

      const temperaments = currentCat.temperament.split(", ");
      const randomTemperament =
        temperaments[Math.floor(Math.random() * temperaments.length)];

      //   const relateKey = "country_code";

      const relatedCats = breeds.filter(
        (breed) =>
          breed.temperament.includes(randomTemperament) &&
          breed.id !== currentCat.id
      );

      const relatedCatsLimited = relatedCats.filter((cat, index) => index < 3);

      this.currentCat = currentCat;
      this.temperament = randomTemperament;
      this.relatedCats = relatedCatsLimited;
      console.log(`cats filterd on ${randomTemperament}`, relatedCatsLimited);
      //   console.log(res.data);
    });
  },
};
</script>

<style scoped>
.d-wrap {
  display: flex;
}
.related {
  background-color: lime;
}
</style>
