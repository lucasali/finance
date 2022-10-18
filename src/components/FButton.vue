<template>
    <button
        class="rounded-md p-3 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        @click="onClick">
        <slot name="text">
            <span
                v-text="text"
                class="text-white uppercase font-semibold text-sm">
            </span>
        </slot>
    </button>
</template>

<script setup lang="ts">
    export interface Props {
        text?: string;
        disabled?: boolean;
    }

    interface Emits {
        (e: 'click'): void;
    }

    const props = defineProps<Props>();
    const emit = defineEmits<Emits>();

    function onClick() {
        emit('click');
    }
</script>

<style scoped></style>
