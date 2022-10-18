<template>
    <div class="flex flex-col min-h-screen">
        <FHeader></FHeader>

        <div class="flex flex-1">
            <FSidebar></FSidebar>

            <main class="flex flex-1 p-4">
                <RouterView></RouterView>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import FHeader from '../components/FHeader.vue';
    import FSidebar from '../components/FSidebar.vue';
</script>

<style scoped></style>
