<template>
    <label class="block">
        <span
            v-text="label"
            class="block text-sm font-medium text-slate-700"></span>
        <input
            :id="label"
            class="w-full border-2 rounded-md py-2 px-3 focus:border-violet-500 focus:outline-violet-300 focus:outline-offset-2 text-violet-700 font-semibold"
            type="text"
            v-model="value"
            aria-invalid="false" />
        <p class="mt-2 invisible text-pink-600 text-sm">Please provide a valid email address.</p>
    </label>
</template>

<script setup lang="ts">
    import { useVModel } from '@vueuse/core';

    export interface Props {
        modelValue: string;
        label: string;
    }

    interface Emits {
        (e: 'update:modelValue', value: string): void;
    }

    const props = defineProps<Props>();
    const emit = defineEmits<Emits>();

    const value = useVModel(props, 'modelValue', emit);
</script>

<style scoped></style>
