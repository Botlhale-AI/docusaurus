# Variables
 
Variables are words or small groups of words that are relevant for that particular conversation. They can be names of people, organizations, cities, products, brands etc. These variables are usually extracted from the sentence to use later on for an API-call, product recommendation or to redirect to the right flow.

## Creating Variables.

To create variables, click on the `New variable` button. You will be have the option of using a pre-trained variable or creating a custom one. Pre-trained variables do not require examples and the available ones can be selected from a dropdown list. When creating a custom variable, you will have to provide a variable name. When you are done completing the form, click the `create variable` button as shown in Figure 7.

![create entity]

Once a variable has been created, click on the edit variable button to add variable examples. To add a new variable example, click on `New variable example`. You will be prompted to enter a variable example for the newly created variable, then click create variable example, as shown in Figure 8.

![add entity examples]

Once you have added a new variable example, you can add synonyms of the example by clicking on the edit variable example button. Click on the `Save` button to save the added synonyms.

![entity synonyms]


You should provide variable examples to the appropriate language. To change between defined languages, select the language from the drop-down list of the language(s) that you defined when creating the bot.

![entity change lang]

## Variable Tagging
The intent manager allows you to tag variables in the example user messages that you provide for an intent. Simply highlight the variable example in your example text and a modal will pop up prompting you to select the variable that the example belongs to. Intents are discussed in more detail in the [Intents] section of the Bot Builder documentation.

![entity tagging]

## Deleting a Variable
To delete a variable, click on the Delete button. If you delete an intent, you also delete all of its related content and you can not restore it. You will be asked to confirm the action by clicking the `Delete variable` button as shown on Figure 11.

![entity delete]