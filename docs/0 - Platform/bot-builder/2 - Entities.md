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

5. Click the Edit icon next to your newly created entity. You are directed to a page where you can add entity examples and roles.

![add entity examples](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/entity-examples-and-roles.png)

6. To add an entity example, ensure the Entity examples tab is selected and click the `New entity example` button.
7. A pop-up window appears, prompting you to enter an example for your entity.

![entity example](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/entity-example.png)

8. Fill in the required information and click `Create entity example`.

9. You entity example is created. You can add synonyms by clicking the Edit icon next to the newly created entity. 

![entity synonyms](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/entity-synonyms.png)
10. Add as many synonyms as you need. When you are done, click the `Save` button to retain your changes. 

:::tip
Toggle between languages using the arrows on the language tab to add entity examples for each relevant language.
:::

:::info
Entity roles are classifications added to an entity to help your bot with disambiguation. Consider the entity "place" in an ecommerce chatbot. Here the chatbot may need to differentiate between the "place" for delivery, billing, or collection. Adding these roles (delivery, billing, collection) to the entity allows the bot to appropriately classify the information it receives in the forms it sends out.  
:::

11. To add an entity role, ensure the Entity roles tab is selected and click the `New entity role` button.
12. A pop-up window appears, prompting you to enter a role for your entity.

![create entity role](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/create-entity-role.png)
13. Fill in the required informtion and click `Create entity role`. Repeat the process again to add as many roles as needed.

14. Your entity roles are created and they appear in a list on the Entity roles tab. 

![entity roles](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/entity-role-list.png)

:::tip
You have the option of using a pre-trained entity instead of a custom one. Pre-trained variables do not require examples and the available ones can be selected from a dropdown list. The list of pre-trained variables is as follows:

- Time
- Duration
- Email
- Distance
- Phone number
- Volume
- Url
- Temperature
- Quantity
- Number
:::

## Tag Entities
The Intent Manager allows you to tag entities to your example intent messages.

To tag an entity, use the following steps.

1. From the Intents Manager page, find the intent which you want to tag.
2. Highlight that intent using your cursor.
3. A pop-up window appears, prompting you to assign an entity to the intent as seen in the following image.

![tag entity](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/tag-entity.png)

4. Select the appropriate entity for your intent, and assign it a role, if necessary.
5. Click `Save` to retain your changes.

:::info
For more detailed information on Intents, see the [Intents] section of the Botlhale AI NLP Toolkit Documentation.
:::

## Delete Entities

Use the following steps to delete an entity.

1. On the Entities Manager page, locate the entity you wish to delete.
2. Click the Delete icon that corresponds to the entity you wish to delete.
3. A pop-up window appears prompting you to confirm this action. Click the `Delete Entity` button to finalise the deletion. 

:::warning
Deleting an entity also deletes any example values associated with that entity. Deleted content cannot be restored.
:::

