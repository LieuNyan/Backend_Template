<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import type { ExampleId } from '@backend-template/type';

const a: ExampleId = {
  id: '123',
};

console.log(123123, a);
</script>
