<template>
  <div class="col-sm-11">
    <div class="card p-3">
      <h4 class="card-header bg-primary text-white">Evening Report</h4>
      <form @submit.prevent="submit">
        <label for="input4">完了チケット一覧 <br> (done job list)</label>
        <input type="text" v-model="input1" id="input4" class="form-control mb-3"/>
        <label for="input5">対応中チケット一覧 <b>％</b>  <br> (doing job show percentage%)</label>
        <input type="text" v-model="input2" id="input5" class="form-control mb-3"/>
        <label for="input6">困っていること/レビューしてほしいもの <br> (any trouble/ any review)</label>
        <input type="text" v-model="input3" id="input6" class="form-control mb-3"/>
        <button class="btn btn-md btn-primary w-100">Submit</button>
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
        this.$store.commit("getEveningData", myData);
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