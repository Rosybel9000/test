<template>
  <section class="homepage-wrapper">
    <div :class="`sidebar ${isHidden ? 'sidebar-hidden' : ''}`" id="sidebar">
      <div class="sidebar-button">
        <p>sorted on {{ selected.replace("_", " ") }}</p>
        <span
          v-for="option of [
            'child_friendly',
            'grooming',
            'health_issues',
            'dog_friendly',
          ]"
          :key="option"
        >
          <input
            class="radio-button"
            type="radio"
            :id="option"
            name="sort"
            :value="option"
            v-model="selected"
          />
          <label :for="option">{{ option.replace("_", " ") }}</label>
        </span>
      </div>
    </div>
    <div class="content">
      <button v-on:click="isHidden = !isHidden" type="button" class="filter">
        filter toggle
      </button>
      <HomeItem
        v-for="breed of breeds"
        :key="breed.id"
        :name="breed.name"
        :id="breed.id"
        :sortKey="selected"
        :sortValue="breed[selected]"
      />
    </div>
  </section>
</template>

<script lang="ts">
import HomeItem from "./HomeItem.vue";
import catSort from "../utils/catSort";
import { getCats } from "../utils/catService";

export default {
  components: { HomeItem },
  name: "HomePage",
  data() {
    return {
      breeds: null as any,
      selected: "grooming",
      isHidden: false,
      footerHeight: 24,
    };
  },
  methods: {
    catSort,
  },
  mounted() {
    getCats(this.selected, 10).then((res) => (this.breeds = res));
  },
  watch: {
    selected: function() {
      this.breeds = [...this.breeds.sort(this.catSort(this.selected))];
    },
  },
};
</script>

<style scoped>
.homepage-wrapper {
  display: flex;
  position: relative;
  padding-bottom: 48px;
}
.filter {
  position: fixed;
  top: 20%;
  right: 0;
  width: 150px;
  height: 50px;
  background-color: #bbe7fe;
  border: 1px solid #d3b5e5;
  border-radius: 25px 0 0 25px;
  transition: width 1s ease;
  color: white;
  font-size: large;
  font-weight: bold;
}
.filter:focus {
  outline: none;
  box-shadow: 0px 0px 0px 1px rgb(0, 0, 0) inset;
}
.filter:hover {
  width: 200px;
  cursor: pointer;
}

.sidebar {
  background-color: #ffd4db;
  min-width: max-content;
  color: white;
  transition: transform 0.5s ease;
  transform: translateX(0);
}

.sidebar-hidden {
  transform: translateX(-100%);
}
.sidebar-button {
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  border-top: 1px solid maroon;
  border-bottom: 1px solid maroon;
}

.content {
  background-color: #eff1db;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
}

/* radio button styling */
/* hiding the default button */
[type="radio"] {
  opacity: 0;
}

/* the new button */
[type="radio"] + label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  display: inline-block;
  line-height: 25px;
  /* color: red; */
}

/* new default button */
[type="radio"] + label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  border: 2px solid #d3b5e5;
  background-color: #fff;
}
[type="radio"]:checked + label::before {
  content: "";
  width: 18px;
  height: 18px;
}

/* the selected dot inside */
[type="radio"]:checked + label::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background-color: #d3b5e5;
  opacity: 1;
  transform: scale(1);
  transition: all 2s ease;
}

input:not(:checked) ~ label {
  color: white;
}
input:checked ~ label {
  /* change this to the color of the catacrds later */
  color: black;
  transition: all 2s ease;
}

/* animation between cheched and unchecked */
[type="radio"]:not(:checked) + label::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background-color: #fff;
  opacity: 0;
  transform: scale(0);
}

@media screen and (max-width: 720px) {
  .homepage-wrapper {
    flex-direction: column;
  }
  .filter {
    bottom: 85px;
    top: auto;
  }
  .filter:hover {
    width: 150px;
  }
}
</style>
