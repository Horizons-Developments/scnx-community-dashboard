export const steps = {
    create_productType: {
        parts: [
            "create_productType_selection"
        ],
        active: () => ( 
            true
        )
    },
    create_details_customCommand: {
        parts: [
            "create_details_customCommand_type", 
            "create_details_customCommand_category_information", 
            "create_details_customCommand_flow_information"
        ],
        active: (answers) => ([
                "create_productType_selection_selection_customCommand"
            ].includes(answers.create_productType_selection_selection)                
        )
    },
    create_details_messageTemplate: {
        parts: [
            "create_details_messageTemplate_type",
            "create_details_messageTemplate_moduleTemplate_information",
            "create_details_messageTemplate_singleTemplate_information"
        ],
        active: (answers) => ([
                "create_productType_selection_selection_messageTemplate"
            ].includes(answers.create_productType_selection_selection)                
        ),
    }
}