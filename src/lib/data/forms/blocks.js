export const blocks = {
    create_productType_selection_selection: {
        type: "single",
        list: true,
        dropdown: false,
        textfield: false,
        options: [
            "create_productType_selection_selection_customCommand",
            "create_productType_selection_selection_messageTemplate",
            "create_productType_selection_selection_dynamicImage",
            "create_productType_selection_selection_serverTemplate",
            "create_productType_selection_selection_guideSuggestion"
        ]
    },
    create_details_customCommand_type_type: {
        type: "single",
        list: true,
        dropdown: false,
        textfield: false,
        options: [
            "create_details_customCommand_type_type_category",
            "create_details_customCommand_type_singleFlow"
        ]
    },
    create_details_customCommand_category_information_name: {
        type: "single",
        list: false,
        dropdown: false,
        textfield: true,
        options: [
            "create_details_customCommand_category_information_name_name"
        ]
    }
}