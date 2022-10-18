<template>
    <header>
        <FButton
            text="Adicionar Conta"
            @click="goToCreateAccount"></FButton>
    </header>
    <ul>
        <li
            v-for="account in accountsStore.unfinishedAccounts"
            :key="account.id">
            {{ account }}
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { useAccountsStore } from '@/stores/account';
    import { useRouter } from 'vue-router';
    import FButton from '../components/FButton.vue';

    const router = useRouter();
    const accountsStore = useAccountsStore();

    function goToCreateAccount() {
        router.push({ name: 'create-account' });
    }
</script>

<style scoped></style>
