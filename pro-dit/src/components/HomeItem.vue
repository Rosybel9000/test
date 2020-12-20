<template>
  <div class="catcard">
    <a class="catcard-link" :href="'/details?id=' + id">
      <img
        :key="id"
        :src="src"
        :title="`${name} nya`"
        :alt="name"
        class="cat-img"
      />
      <div class="catcard-title">
        <h2>{{ name }}</h2>
        <span v-if="sortKey">{{ sortKey }} : {{ sortValue }}</span>
      </div>
    </a>
  </div>
</template>

<script>
import { getCatPicture } from "../utils/catService";

/**
 * @property {name} string
 * @property {id} string
 * @property {sortKey} string
 * @property {sortValue} number
 */

export default {
  name: "HomeItem",
  props: ["name", "id", "sortKey", "sortValue"],
  data() {
    return {
      src: null,
    };
  },
  mounted() {
    getCatPicture(this.id).then((url) => (this.src = url));
  },
};
</script>

<style scoped>
.catcard {
  padding: 20px;
  max-width: 350px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 25px;
  height: min-content;
}

.cardcard-link {
  display: block;
}

.catcard-title {
  text-align: center;
  padding: 10px 20px;
}

.cat-img {
  width: 100%;
}
</style>
