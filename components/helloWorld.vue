<script setup>
// props
const props = defineProps(["title"]);
const { title } = props;
// inject
let username = inject("username");
watchEffect(() => console.log(username));
let { lastname, changeLastname } = inject("informations");

// emits
const emits = defineEmits(["click"]);

// vuex ~ pania
import { useConterStore } from "~/store/counter";
const counter = useConterStore();
</script>

<template>
  <div>
    <p>{{ lastname }}</p>
    <v-btn
      @click="
        changeLastname;
        emits('click');
      "
      >click</v-btn
    >

    <NuxtLink to="/about/1">GO</NuxtLink>
    <br />

    <ul>
      <li>count : {{ counter.count }}</li>
      <li>doubleCount : {{ counter.doubleCount }}</li>
      <li>
        <v-btn @click="counter.increment">+</v-btn>
      </li>
    </ul>
  </div>
</template>

<style></style>
