<template>
  <div class="container">
    <div v-if="morningFetchData" class="py-3">
      <h1>Morning Report</h1>
      ・今日やること <br />{{ morningFetchData.first ? "=>" : "" }}
      {{ morningFetchData.first }} <br /><br />
      ・困っていること <br />{{ morningFetchData.second ? "=>" : "" }}
      {{ morningFetchData.second }} <br /><br />
      ・その他共有など <br />{{ morningFetchData.third ? "=>" : "" }}
      {{ morningFetchData.third }} <br />
      <div>==============================================================</div>
    </div>

    <div v-if="eveningFetchData" class="py-3">
      <div>==============================================================</div>
      <h1>Evening Report</h1>
      ・完了チケット一覧 <br />{{ eveningFetchData.first ? "=>" : "" }}
      {{ eveningFetchData.first }} <br /><br />
      ・対応中チケット一覧 ％ <br />{{ eveningFetchData.second ? "=>" : "" }}
      {{ eveningFetchData.second }} <br /><br />
      ・困っていること/レビューしてほしいもの <br />{{
        eveningFetchData.third ? "=>" : ""
      }}
      {{ eveningFetchData.third }} <br />
    </div>

    <div v-if="!(morningFetchData || eveningFetchData)">
      <h2>There is no Report in Here</h2>
      <router-link to="/" class="btn btn-md btn-secondary">Back</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      morningData: (state) => state.morningData,
      eveningData: (state) => state.eveningData,
    }),
    morningFetchData() {
      return this.morningData
        ? this.morningData
        : JSON.parse(localStorage.getItem("morningData"));
    },
    eveningFetchData() {
      return this.eveningData
        ? this.eveningData
        : JSON.parse(localStorage.getItem("eveningData"));
    },
  },
};
</script>