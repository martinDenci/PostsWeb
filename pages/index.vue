<template>
    <div class="text-center mt-5">
        <h1 class="display-1 mt-5">Homepage</h1>
        <Carousel :items="items"/>
    </div>
</template>

<script setup>
    const { data: items } = await useFetch('https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts')
</script>

<style lang="scss" scoped></style>