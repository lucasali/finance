<template>
    <header class="border-2 p-3 shadow-md">
        <nav class="flex space-x-4">
            <RouterLink
                class="flex-1"
                :to="{ name: 'home' }">
                <img
                    class="h-8"
                    src="/logo.png" />
            </RouterLink>
            <ul class="flex space-x-4">
                <!-- <li>
                    <RouterLink :to="{ name: 'home' }">About</RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'home' }">Bla</RouterLink>
                </li> -->
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>

<style scoped></style>
