<template>
    <div>
        <Header />
        <div class="container">
            <slot />
            <div class="scroll-to-top d-none" @click="onScrollButtonClickHandler">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                    class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                </svg>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .scroll-to-top {
        cursor:pointer;
        position:fixed;
        bottom:30px;
        right:10%;
        transition: opacity 0.3s;
        &:hover svg {
            opacity:0.9;
        }
    }
</style>