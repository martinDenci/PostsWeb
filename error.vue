<template>
    <div class="vh-100 d-flex align-items-center">
        <div class="bg-light p-5 rounded container mt-10">
            <div class="d-flex flex-column align-items-center col-sm-8 py-5 mx-auto">
                <h1 class="display-5 fw-normal">{{ error.statusCode }}</h1>
                <p class="fs-5">Ooops.</p>
                <p>{{ error.statusMessage }}</p>
                <p>
                    <button class="btn btn-primary" @click="handleClearError">Zpět na homepage</button>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped></style>