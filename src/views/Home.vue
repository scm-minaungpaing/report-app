<template>
  <div class="container">
    <div
      v-if="morningFetchData"
      class="
        alert alert-warning alert-dismissible
        fade
        mt-3
        d-flex
        justify-content-between
      "
      :class="{ show: morningFetchData }"
      role="alert"
    >
      <div class="pt-2"><b>Morning Report </b> was created!</div>
      <div>
        <button @click="show" class="btn btn-md btn-danger mr-2">Show</button>
        <button @click="clearMornData" class="btn btn-md btn-info">Clear</button>
      </div>
    </div>
    <div
      v-if="eveningFetchData"
      class="
        alert alert-warning alert-dismissible
        fade
        mt-3
        d-flex
        justify-content-between
      "
      :class="{ show: eveningFetchData }"
      role="alert"
    >
      <div class="pt-2"><b>Evening Report </b> was created!</div>
      <div>
        <button @click="show" class="btn btn-md btn-danger mr-2">Show</button>
        <button @click="clearEvenData" class="btn btn-md btn-info">Clear</button>
      </div>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-sm-6"><Morning /></div>
        <div class="col-sm-6"><Evening /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Morning from "@/components/Morning.vue";
import Evening from "../components/Evening.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Morning,
    Evening,
  },
  computed: {
    ...mapState({
      morningData: (state) => state.morningData,
      eveningData: (state) => state.eveningData,
    }),
    morningFetchData() {
      return this.morningData ? this.morningData : JSON.parse(localStorage.getItem('morningData'))
    },
    eveningFetchData() {
      return this.eveningData ? this.eveningData : JSON.parse(localStorage.getItem('eveningData'))
    }
  },
  methods: {
    clearMornData() {
      this.$store.commit("clearMorningData")
      this.$router.go()
    },
    clearEvenData() {
      this.$store.commit("clearEveningData")
      this.$router.go()
    },
    show() {
      this.$router.push({ name: "About" });
    },
  },
};
</script>
