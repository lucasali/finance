<template>
    <aside class="border-2 w-64 p-4 rounded-r-md shadow-md">
        <nav>
            <ul>
                <li
                    v-for="link in links"
                    :key="link.name">
                    <RouterLink
                        :to="link.route"
                        class="text-md uppercase font-semibold tracking-tighter"
                        active-class="text-violet-500">
                        {{ link.name }}
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import type { RouteLocationRaw } from 'vue-router';

    export interface ISidebarLink {
        name: string;
        route: RouteLocationRaw;
        isFolder: boolean;
    }

    const links = ref<ISidebarLink[]>([{ name: 'Contas', route: { name: 'accounts' }, isFolder: false }]);
</script>

<style scoped></style>
