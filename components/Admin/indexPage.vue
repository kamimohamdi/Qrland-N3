<template>
  <div class="flex flex-col">
    <h1>لیست کاربران</h1>
    <span class="border w-full bg-gray-100 rounded-md my-4"></span>
    <v-btn color="success">افزودن کاربر</v-btn>
    <span class="border w-full bg-gray-100 rounded-md my-4"></span>
    <v-table height="300px" fixed-header>
      <thead>
        <tr>
          <th class="text-right">نام کاربری</th>
          <th class="text-right">نام و نام خانوادگی</th>
          <th class="text-right">نقش کاربر</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script lang="ts" setup>
const desserts = [
  {
    name: "Frozen Yogurt",
    calories: 159,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
  },
  {
    name: "Eclair",
    calories: 262,
  },
  {
    name: "Cupcake",
    calories: 305,
  },
  {
    name: "Gingerbread",
    calories: 356,
  },
  {
    name: "Jelly bean",
    calories: 375,
  },
  {
    name: "Lollipop",
    calories: 392,
  },
  {
    name: "Honeycomb",
    calories: 408,
  },
  {
    name: "Donut",
    calories: 452,
  },
  {
    name: "KitKat",
    calories: 518,
  },
];
</script>

<style></style>
