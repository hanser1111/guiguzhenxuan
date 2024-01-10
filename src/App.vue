<script setup lang="ts">
import axios from 'axios'
import { onMounted } from 'vue'

onMounted(async () => {
  const {
    data: { data }
  } = await axios({
    url: '/api/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111'
    }
  })

  console.log(data)
})
</script>

<template>
  <h1>我是App</h1>
  <SvgIcon name="phone" fill="red" height="30px" width="30px"></SvgIcon>
</template>

<style scoped></style>
