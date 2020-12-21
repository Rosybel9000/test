<template>
  <section
    :style="{
      paddingBottom: `${48}px`,
    }"
  >
    <div v-if="isLoading">Loading kitties uwu!!!!!</div>

    <div v-if="!isLoading" class="details">
      <div class="details-img">
        <img
          v-if="currentCat"
          :src="src"
          :alt="currentCat.name"
          :title="`${currentCat.name} meow`"
          class="img-cat"
        />
      </div>

      <div v-if="currentCat" class="details-info">
        <h2>{{ currentCat.name }}</h2>
        <p>{{ currentCat.temperament }}</p>
        <p>{{ currentCat.description }}</p>
        <p>This cats origin is {{ currentCat.origin }}</p>
        <p v-if="currentCat.vcahospitals_url">
          To see more info on this cat follow this
          <a :href="currentCat.vcahospitals_url">link</a>
        </p>
        <p>
          Or check out it's wikipedia page
          <a :href="currentCat.wikipedia_url">here</a>
        </p>
      </div>
    </div>

    <div v-if="relatedCats.length > 0" class="related">
      <h1 class="related-cat">
        {{
          relatedCats.length > 1
            ? `These ${relatedCats.length} cats are`
            : "This cat is"
        }}
        also {{ temperament.toLowerCase() }}
      </h1>
      <div v-if="relatedCats" class="related-catcards">
        <HomeItem
          v-for="relatedCat of relatedCats"
          :id="relatedCat.id"
          :name="relatedCat.name"
          :key="relatedCat.id"
        />
      </div>
    </div>
  </section>
</template>

<script>
import HomeItem from "./HomeItem.vue";
import { getCatPicture, getRelatedCats } from "../utils/catService";

export default {
  name: "DetailPage.vue",
  components: { HomeItem },
  data() {
    return {
      src: null,
      currentCat: null,
      temperament: null,
      relatedCats: [],
      isLoading: true,
    };
  },
  mounted() {
    getCatPicture(this.$route.query.id || "bamb").then(
      (url) => (this.src = url)
    );

    getRelatedCats(this.$route.query.id || "bamb").then(
      ({ currentCat, temperament, relatedCats }) => {
        this.currentCat = currentCat;
        this.temperament = temperament;
        this.relatedCats = relatedCats;

        this.isLoading = false;
      }
    );
  },
};
</script>

<style scoped>
.details {
  display: flex;
  flex-direction: row-reverse;
  padding: 20px;
  align-items: center;
}
.details-img {
  flex: 1;
  object-fit: cover;
}
.details-info {
  padding: 20px;
  margin-right: 15px;
  flex: 1;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.05);
}

.img-cat {
  width: 101%;
  border-radius: 1%;
}
.related-cat {
  align-items: center;
}

.related-catcards {
  display: flex;
  overflow-x: scroll;
  justify-content: space-between;
}

@media screen and (max-width: 720px) {
  .details {
    flex-direction: column;
  }

  .details-info {
    margin-top: -2.5rem;
    margin-left: 20px;
    margin-right: 20px;
    border: 3px solid #eaeaea;
  }

  .img-cat {
    border-radius: 0;
  }
}
</style>
