<template>
  <div class="col-sm-10">
    <div class="card p-3">
      <h4 class="card-header bg-info text-white">Morning Report</h4>
      <form @submit.prevent="submit">
        <label for="input1">今日やること(today job)</label>
        <input
          type="text"
          v-model="input1"
          id="input1"
          class="form-control mb-3"
        />
        <label for="input2">困っていること(any trouble)</label>
        <input
          type="text"
          v-model="input2"
          id="input2"
          class="form-control mb-3"
        />
        <label for="input3">その他共有など(any sharing)</label>
        <input
          type="text"
          v-model="input3"
          id="input3"
          class="form-control mb-3"
        />
        <button class="btn btn-md btn-info w-100">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      input1: null,
      input2: null,
      input3: null,
    };
  },
  methods: {
    submit() {
      let myData = {
        first: this.input1,
        second: this.input2,
        third: this.input3,
      };
      if (this.input1 != null || this.input2 != null || this.input3 != null) {
        this.$store.commit("getMorningData", myData);
        this.input1 = null;
        this.input2 = null;
        this.input3 = null;
      }
    },
  },
};
</script>

<style>
</style>