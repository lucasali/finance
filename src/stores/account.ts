import { acceptHMRUpdate, defineStore } from 'pinia';
import { computed, ref } from 'vue';

interface IAccount {
    name: string;
    id: number;
    isFinished: boolean;
}

export const useAccountsStore = defineStore('accounts', () => {
    const accounts = ref<IAccount[]>([]);
    const nextId = ref(0);

    const unfinishedAccounts = computed(() => accounts.value.filter(account => !account.isFinished));

    function addAccount(name: string) {
        accounts.value.push({ name, id: nextId.value++, isFinished: false });
    }

    return { accounts, unfinishedAccounts, addAccount };
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useAccountsStore, import.meta.hot));
}
