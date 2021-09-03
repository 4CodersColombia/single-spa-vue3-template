<template>
  <div>
    <HelloWorld />
    {{ translate("message") }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import i18next from "i18next";
import { postTranslate } from "@/i18N/ApiTranslator";
import { LOCALES } from "@/i18N/home/TranslationsFooter";
export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  created() {
    postTranslate(LOCALES);
  },
  methods: {
    translate(key: string) {
      return i18next.t(key);
    },
  },
});
</script>
