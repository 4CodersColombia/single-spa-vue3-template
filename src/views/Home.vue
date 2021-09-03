<template>
  <div>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import i18next from "i18next";
import { postTranslate } from "@/i18N/ApiTransLate";
import { LOCALES } from "@/i18N/home/TranslationsFooter";
export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  async created() {
    await postTranslate("ee", LOCALES);
  },
  methods: {
    translate(key: string) {
      return i18next.t(key);
    },
  },
});
</script>
