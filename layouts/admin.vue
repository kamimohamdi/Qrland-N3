<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary">
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer location="right" permanent v-model="drawer">
        <!-- <v-list :items="items"></v-list> -->
        <v-list :lines="false" density="compact" nav>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
            color="primary"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon" />
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh">
        <slot />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import axios from "axios";
import { ref, watch } from "vue";
const items = [
  { text: "My Files", icon: "mdi-folder", link: "/admin" },
  {
    text: "مدیریت کاربران",
    icon: "mdi-account-multiple",
    link: "/admin/users",
  },
];

onMounted(() => {
  // getProduct();
});

const getProduct = () => {
  axios
    .get("https://blog-api.codeyad-project.ir/api/category")
    .then((data) => console.log(data));
};

const drawer = ref(true);
</script>
