<template>
    <div>
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mt-4">
            <div class="col-auto d-flex align-items-center p-2">
                <img :src="comment.avatar" style="max-width:70px" alt="avatar" class="rounded">
            </div>
            <div class="col p-2 d-flex flex-column position-static">
                <h3 class="mb-0">{{ comment.name }}</h3>
                <div class="mb-1 text-muted">{{ new Date(comment.createdAt).toLocaleDateString("cs-cz") }}</div>
                <p class="card-text mb-auto">{{ comment.comment }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const { comment } = defineProps(['comment'])
</script>

<style lang="scss" scoped></style>