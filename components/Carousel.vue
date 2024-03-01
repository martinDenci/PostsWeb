<template>
    <div class="mw-50 mt-4 mt-md-5">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <template v-for="(item, index) in items" :item="item" :index="index">
                    <button type="button" data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="index" class="active"
                        aria-current="true" :aria-label="`Slide ${index + 1}`"></button>
                </template>
            </div>
            <div class="carousel-inner">
                <div :class="`carousel-item ${index == 0 ? 'active' : ''}`" v-for="(item, index) in items" :item="item"
                    :index="index">
                    <img :src="item.image" class="d-block w-100 rounded" :alt="item.title">
                    <div class="carousel-caption d-none d-sm-block bg-dark bg-opacity-75 p-4 rounded">
                        <h5 class="text-uppercase">{{ item.title }}</h5>
                        <p class="">{{ truncateString(item.content, 100) }}</p>
                        <NuxtLink class="btn btn-secondary" :to="`/posts/${item.id}`">Více</NuxtLink>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    </div>
</template>

<script setup>

const { items } = defineProps(['items'])

function truncateString(str, num, more = '...') {

    if (str.length <= num) {
        return str
    }

    return str.slice(0, num) + more
}


</script>

<style lang="scss" scoped></style>