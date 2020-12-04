<template>
  <section class="wrap">
    <div class="sidebar">
      <form>
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
            />
            <label :for="option">{{ option.replace("_", " ") }}</label>
          </span>
          <!-- <span>
            <input
              type="radio"
              id="childFriendly"
              name="sort"
              value="child_friendly"
              v-model="selected"
            />
            <label for="childFriendly">child friendly</label>
          </span>
          <span>
            <input
              type="radio"
              id="grooming"
              name="sort"
              value="grooming"
              v-model="selected"
            />
            <label for="grooming">grooming</label>
          </span>
          <span>
            <input
              type="radio"
              id="healthIssues"
              name="sort"
              value="health_issues"
              v-model="selected"
            />
            <label for="healthIssues">health issues</label>
          </span> -->
        </div>
      </form>
    </div>

    <div class="content">
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
import axios from "axios";
import HomeItem from "./HomeItem.vue";
export default {
  components: { HomeItem },
  name: "HomePage",
  data() {
    return {
      breeds: null,
      selected: "grooming",
    };
  },
  methods: {
    // catSort: (key) => {
    //   return (a, b) => {
    //     if (a[key] < b[key]) return 1;
    //     else if (a[key] > b[key]) return -1;
    //     return 0;
    //   };
    //},
    catSort: function(key) {
      return function(a, b) {
        if (a[key] < b[key]) return 1;
        if (a[key] > b[key]) return -1;
        return 0;
      };
    },
  },
  watch: {
    selected: function() {
      this.breeds = [...this.breeds.sort(this.catSort(this.selected))];
      console.log(this.breeds);
    },
  },
  mounted() {
    axios.get("https://api.thecatapi.com/v1/breeds?limit=10").then((res) => {
      this.breeds = res.data.sort(this.catSort(this.selected));
      console.log(this.breeds);
    });
    // axios.get(`https://api.thecatapi.com/v1/breeds`).then((res) => {
    //   // console.log(res.data);
    // });
  },
};
</script>

<style scoped>
.wrap {
  display: flex;
}

.sidebar {
  background-color: rgba(76, 0, 130, 0.712);
  min-width: max-content;
  color: white;
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
  background-color: maroon;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
</style>
