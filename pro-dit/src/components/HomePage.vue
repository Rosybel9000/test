<template>
  <section class="wrap">
    <div :class="`sidebar ${isHidden ? 'sidebar-hidden' : ''}`" id="sidebar">
      <div class="sidebar-button">
        <p>sorted on {{ selected }}</p>
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
            type="radio"
            :id="option"
            name="sort"
            :value="option"
            v-model="selected"
            v-on:click="isHidden = true"
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
    <!-- <div
      style="border: 1px solid green"
      v-for="breed of breeds"
      :key="'prefix' + breed.id"
    >
      {{ breed.name }}{{ breed.health_issues }}{{ breed.grooming
      }}{{ breed.child_friendly }}
    </div> -->
  </section>
</template>

<script>
import HomeItem from "./HomeItem";
import catSort from "../utils/catSort";

import { getCats } from "../utils/catService";

export default {
  components: { HomeItem },
  name: "HomePage",
  data() {
    return {
      breeds: null,
      selected: "grooming",
      isHidden: false,
    };
  },
  methods: {
    catSort,
    //     openFilter() {
    //       console.log("it works");
    // =    },
  },
  watch: {
    selected: function() {
      this.breeds = [...this.breeds.sort(this.catSort(this.selected))];
    },
  },
  mounted() {
    getCats(this.selected, 10).then((res) => (this.breeds = res));
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
  position: relative;
}

.filter {
  position: fixed;
  top: 20%;
  right: 0;
  width: 150px;
  height: 50px;
  border: 1px solid blue;
  border-radius: 25px 0 0 25px;
  transition: width 1s ease;
}

.filter:focus {
  outline: none;
  box-shadow: 0px 0px 0px 1px rgb(0, 0, 0) inset;
}

.filter:hover {
  width: 200px;
  cursor: pointer;
}

@media screen and (max-width: 720px) {
  .wrap {
    flex-direction: column;
  }
  .filter {
    bottom: 10px;
    top: auto;
  }
  .filter:hover {
    width: 150px;
  }
}

#sidebar {
}

.sidebar {
  background-color: rgba(76, 0, 130, 0.712);
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
  /* background-color: maroon; */
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
}
</style>
