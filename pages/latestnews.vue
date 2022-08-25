<template>
    <div class="page-content">
        <h1 class="page-title">Latest News</h1>
        <AllArticles />
    </div>
</template>

<script >
import AllArticles from '~/components/AllArticles.vue';

export default ({
    name: "latestnews",
    components: { AllArticles },
})
</script>
