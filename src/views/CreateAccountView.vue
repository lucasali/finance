<template>
    <div class="w-full">
        <FInput
            v-model="accountName"
            label="Nome da conta"></FInput>

        <FButton text="Criar conta"></FButton>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import FInput from '../components/FInput.vue';
    import FButton from '../components/FButton.vue';

    const accountName = ref('');
</script>

<style scoped></style>
