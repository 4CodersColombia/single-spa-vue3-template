<template>
  <div>
    <HelloWorld />

    {{ testTranslate("message") }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { postTranslate } from "@/i18N/ApiTransLate";
import { LOCALES } from "@/i18N/home/TranslationsFooter";
import i18next from "i18next";
export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  async created() {
    await postTranslate("de", LOCALES);
  },
  methods: {
    testTranslate(key: string) {
      return i18next.t(key);
    },
  },
});
</script>
