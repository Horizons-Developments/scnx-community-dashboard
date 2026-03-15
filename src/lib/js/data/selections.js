import { writable } from "svelte/store";

export const selections = writable({
    block_details_customCommand_type_selection: {
        type: "single",
        value: null
    },
    block_details_customCommand_category_information_module: {
        type: "single",
        value: null
    }
});