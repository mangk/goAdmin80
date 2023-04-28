<template>
  <div v-if="path !== ''">
    <UserComponent/>
  </div>
  <div v-else>no SSR support</div>
</template>
<script setup>
import {myConvert} from "@/components/convert";
import {useRouter} from "vue-router"

const path = useRouter().currentRoute.value.meta.SSRPath
const UserComponent = myConvert(path);
</script>