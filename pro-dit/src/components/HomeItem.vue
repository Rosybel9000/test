<template>
  <div class="catcard">
    <button v-on:click="onClick || null" class="noButton">
      <router-link v-if="!href" class="catcard-link" :to="`/details?id=${id}`">
        <img
          v-if="src"
          :key="id"
          :src="src"
          :title="`${name} nya`"
          :alt="name"
          class="cat-img"
        />
        <div class="catcard-title">
          <h2>{{ name }}</h2>
          <span v-if="sortKey"
            >{{ sortKey.replace("_", " ") }} : {{ sortValue }}</span
          >
        </div>
      </router-link>

      <a v-if="href" :href="`/details?id=${id}`">
        <img
          v-if="src"
          :key="id"
          :src="src"
          :title="`${name} nya`"
          :alt="name"
          class="cat-img"
        />
        <div class="catcard-title">
          <h2>{{ name }}</h2>
          <span v-if="sortKey"
            >{{ sortKey.replace("_", " ") }} : {{ sortValue }}</span
          >
        </div>
      </a>
    </button>
  </div>
</template>

<script lang="ts">
import { getCatPicture } from "../utils/catService";

/**
 * @property {name} string
 * @property {id} string
 * @property {sortKey} string
 * @property {sortValue} number
 */

export default {
  name: "HomeItem",
  props: ["name", "id", "sortKey", "sortValue", "href"],
  data() {
    return {
      src: null as any,
    };
  },
  watch: {
    id: function() {
      this.src = null;
      getCatPicture(this.id).then((url) => (this.src = url));
    },
  },
  mounted() {
    getCatPicture(this.id).then((url) => (this.src = url));
  },
};
</script>

<style>
.catcard {
  padding: 20px;
  max-width: 350px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 25px;
  height: min-content;
}

.catcard-button {
  background-color: #00000000;
  border: none;
  cursor: pointer;
  transform: rotate3d(0);
  transition: all 2s ease-in-out;
}

.catcard-button:hover {
  transform: rotate3d(1, 1, 1, 1080deg);
}
.noButton {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
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
a {
  text-decoration: none;
  color: #d3b5e5;
  /* #bbe7fe */
}
</style>
