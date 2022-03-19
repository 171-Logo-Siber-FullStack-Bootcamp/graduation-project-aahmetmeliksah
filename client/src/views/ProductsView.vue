<template>
  <div>
    <ul>
      <li v-for="data of msg" :key="data.id">
        <p>
          <strong>{{ data }}</strong>
        </p>
        <p>{{ data }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
const api = require('../../services/server')
let datas = []
api.then((res) => {
  datas = res
})

export default {
  mounted() {
    this.msg = datas
  },
  data() {
    return {
      msg: datas,
    }
  },
}
</script>
