# Entities
 
Entities are words or phrases that are relevant for a particular conversation. They can be names of people, organizations, cities, products, brands, and so on. These entities are usually extracted from the sentence to use later on for an API-call, product recommendation, or to redirect a message to the right flow.

## Create Entities

Use the following steps to create a custom entity.

:::tip
First select the bot for which you will be creating custom entities before you can begin adding each entity. Use the drop-down menu on the top-right corner of the page to toggle between bots. 
:::

1. From the Botlhale AI Documentation homepage, navigate to the Entities tab using the menu tree on the left-hand side of your screen (Platform > Bot Builder > Entities).

![create-entity](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/entities-manager-page.png)

2. Click on the `New Entity` button.
3. A pop-up window appears promting you to select the entity type and name your new entity. 

![new entity](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/new-entity.png)

4. Fill in the required fields and click the `Create Entity` button. Your new entity appears on the Entities Manager page upon creation.

5. Click the Edit icon next to your newly created entity. You are directed to a page where you can add entity examples.

![add entity examples](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/entity-examples.png)

Once a variable has been created, click on the edit variable button to add variable examples. To add a new variable example, click on `New variable example`. You will be prompted to enter a variable example for the newly created variable, then click create variable example, as shown in Figure 8.

![add entity examples](https://botlhale-docs1-new.s3.amazonaws.com/add-entity-examples.PNG)

Once you have added a new variable example, you can add synonyms of the example by clicking on the edit variable example button. Click on the `Save` button to save the added synonyms.

![entity synonyms](https://botlhale-docs1-new.s3.amazonaws.com/entity-syn.PNG)


You should provide variable examples to the appropriate language. To change between defined languages, select the language from the drop-down list of the language(s) that you defined when creating the bot.

![entity change lang](https://botlhale-docs1-new.s3.amazonaws.com/entity-lang.PNG)

You will be have the option of using a pre-trained variable or creating a custom one. Pre-trained variables do not require examples and the available ones can be selected from a dropdown list.

## Variable Tagging
The intent manager allows you to tag variables in the example user messages that you provide for an intent. Simply highlight the variable example in your example text and a modal will pop up prompting you to select the variable that the example belongs to. Intents are discussed in more detail in the [Intents] section of the Bot Builder documentation.

![entity tagging](https://botlhale-docs1-new.s3.amazonaws.com/entity-tagging.png)

## Deleting a Variable
To delete a variable, click on the Delete button. If you delete an intent, you also delete all of its related content and you can not restore it. You will be asked to confirm the action by clicking the `Delete variable` button as shown on Figure 11.

![entity delete](https://botlhale-docs1-new.s3.amazonaws.com/entity-delete.PNG)
