<!-- .vitepress/theme/Layout.vue -->
<script setup>
import DefaultTheme from 'vitepress/theme';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #aside-outline-after>
      <a class="custom-aside-container" href="https://ref.wisprflow.ai/Rxj3n8H">
        <img src="/images/Flow-symbol.svg" alt="Flow logo">
        <div class="sponsor-header">Dictation that understands code</div>
        <div class="sponsor-subheader">Ship 4x faster with developer-first dictation that works in every app.</div>
        <div class="sponsor-link">wisprflow.ai/developers</div>
      </a>
    </template>
  </Layout>
</template>