<!-- Please remove this file from your project -->
<template>
  <div>
    <header>
      <nav class="leftnav">
        <NuxtLink class="nav-item" to="/"><font-awesome-icon icon="fa-solid fa-bars-staggered" /></NuxtLink>
        <NuxtLink class="nav-item" to="/">Home</NuxtLink>
        <NuxtLink class="nav-item" to="/latestnews">Latest News</NuxtLink>
        <NuxtLink class="nav-item" to="/reviews">Reviews</NuxtLink>
      </nav>
      <nav class="rightnav">
      <NuxtLink class="nav-item " to="/contact">Contact us</NuxtLink>
        <ColorModePicker />
      </nav>
    </header>
  </div>
</template>

<script>

import ColorModePicker from './ColorModePicker.vue';
export default {
  name: "Header",
  components: { ColorModePicker }
}
</script>
