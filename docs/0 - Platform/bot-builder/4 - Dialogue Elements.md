# Dialogue Elements

As mentioned in the previous section, dialogues outline a script for your chatbot to follow during a conversation. The flow of the conversation sequence is determined by the intent put forward by the end user. Dialogue elements constitute the building blocks for the continuation of this conversation flow. Dialogue elements allow for multiple response types following an intent. These element types include bot text responses, actions, and buttons. 

## Bot Response
A bot response is the free-form text response that the bot returns during the dialogue. With this element type, you have the option of creating a new response or using an existing one. In addition to this, you have the option of using the response examples from an existing intent to create this type of dialogue element.  

To add a bot response element:

1. From the Dialogue Manager page, create a new custom dialogue. See the [Dialogue Manager](https://docs.botlhale.xyz/docs/Platform/bot-builder/Dialogue%20Manager#create-custom-dialogues) section of this documentation for information on how to go about this.
2. Click the Edit icon that corresponds to your newly created custom dialogue.
3. You are taken to a new page, illustrated in the image that follows.

   ![new dialogue element](https://botlhale-ai-assets.s3.amazonaws.com/new-dialogue-element.png)
4. Click the `New Dialogue Element` button.
5. A pop-up window, illustrated in the image that follows, appears, prompting you to choose a name and type for your new element.

   ![create dialogue element](https://botlhale-ai-assets.s3.amazonaws.com/create-dialogue-element.png)
6. All dialogues must begin with an intent. So, first set the type to **User Intent** and either create a new intent element or select an existing intent from the drop-down menu.
7. Click either the `Create element` or the `Select existing` button based on the field you filled.
8. Your intent element is created and appears on the page. Click `Save` to retain your changes.
9. Repeat steps 4 and 5.
10. Set the element type to **Bot Response**. Once again, either create a new element or select an existing one from the dropdown.
11. Click either the `Create element` or the `Select existing` button based on the field you filled.
12. Your Bot Response element is created and appears on the page. Click `Save` to retain your changes.
13. You can now begin adding examples to your dialogue elements. Click the `Add examples` button that corresponds to the element you wish to add examples to.
14. A new page, illustrated in the image that follows, is shown, prompting you to add examples for your intent.

    ![element examples](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/element-examples.png)

15. Add as many examples as needed and click `Save`.

    :::tip
    > Element examples must be added in all the languages supported by your bot. Use the language tab to toggle between your supported languages when adding examples.
    :::

## Bot Action
Bot actions allow your chatbot to perform certain operations during the dialogue. The bot actions available on our platform are form actions, custom actions, and preset actions.

### Form Actions
Form actions collect information (variables) from the user. 

To add a form action to your dialogue:

1. From the Dialogue Manager page, click the Edit icon corresponding to the dialogue to which you wish to add a form action.
2. Click `New Dialogue Element`.
3. In the pop-up window that appears, ensure the element type is set to **Bot Action** and the action type is set to **Form**.
4. Either enter a name for your new form action or select an existing form action from the drop-down menu.
5. Click either the `Create element` or the `Select existing` button based on the field you filled.
6. Your Form action element is created and listed on the page. Click `Save` to retain your changes.
7. You can now begin adding entities to your new form action element. Click the `Add entity` button to do this.
8. A pop-up window, illustrated in the image that follows, appears, prompting you to name and configure the new entity.

   ![new element entity](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/new-element-entity.png)

9. Fill in the requested information and click `Save`.

The following description list defines the fields found in the Add entity pop-up window.

**Form item name**

This is the name you wish to give your form item.

**Entity type**

This is a dropdown field which allows you to select the type of entity you give your form item. The two entity types available for selection are as follows:

*from_text:* If this option is selected, the chatbot extracts the user's response to the form action via free-form text. In the event your chatbot has ASR capabilities, the user input is extracted from a transcript of the voicenote. 

*from_entity:* If this option is selected, you can select the entity you wish to associate with the response to this form action sent by the end user.

**Entity**

This field is only visible when the selected entity type is "from_entity". This is a dropdown field from which you can select the entity you wish to associate with the user response. 

**Form item request question**

This is the message sent by the chatbot to obtain the information needed from your bot form action. The text in this field must be entered in all the languages supported by your chatbot. 

**Present as button**

This field is only visible when the selected entity type is "from_entity". Selecting this checkbox allows you to add buttons to the form request question. The buttons visible to the end user are obtained from the entity examples you set for the selected entities. See the [Entities](https://docs.botlhale.xyz/docs/Platform/bot-builder/Entities) section of this documentation for more information about entity examples.
 

**Attach role to entity**

This field is only visible when the selected entity type is "from_entity". Selecting this checkbox allows you to attach a role to your selected entity for disambiguation purposes. See the [Entities](https://docs.botlhale.xyz/docs/Platform/bot-builder/Entities) section of this documentation for more information about entity roles.


### Custom Actions 
Custom actions can hit external APIs. Once a custom action has been created, clicking on a language allows you to send a POST or GET request to a webhook endpoint for that language. You also have the option of sending the information collected from forms as part of your payload. At the moment, API responses are limited to plain text only.

Use the following steps to create a custom action.

1. From the Dialogue Manager page, click the Edit icon that corresponds to the dialogue to which you wish to add this custom bot action element.
2. Click `New Dialogue Element`.
3. Ensure the element type is set to **Bot Action** and the action is set to **Custom**.
4. You have the option of naming and creating a new custom action element, or selecting an existing one from the dropdown.
5. Click either the `Create element` or the `Select existing` button based on the field you filled.
6. The element is created and is listed in the Dialogue Manager window.

### Preset Actions

Preset actions are preconfigured bot actions which allow your bot to perform certain operations. At present, there are four preset actions available to you on the platform. These are described in the following list.

*Human handoff*

This preset action triggers a human handoff sequence of the end user to a live agent. To add this element to a dialogue, simply create a preset human handoff dialogue. See the [Dialogue Manager](https://docs.botlhale.xyz/docs/Platform/bot-builder/Dialogue%20Manager#create-preset-dialogues) section of this documentation for more information on preset dialogues. 

*Check contact list*

This preset action checks if an end user's information is available in the Contact List prior to handoff. If the user's contact information is not found, your chatbot obtains this information prior to executing a handoff. To add this element to a dialogue, simply create a preset human handoff dialogue. See the [Dialogue Manager](https://docs.botlhale.xyz/docs/Platform/bot-builder/Dialogue%20Manager#create-preset-dialogues) section of this documentation for more information on preset dialogues. 

*Change language*

This preset action allows your end user to switch between languages during a conversation with the chatbot. To add this element to a dialogue, simply create a preset change language dialogue. See the [Dialogue Manager](https://docs.botlhale.xyz/docs/Platform/bot-builder/Dialogue%20Manager#create-preset-dialogues) section of this documentation for more information on preset dialogues. 

*Reset all form items*

This preset action clears all the information collected by your chatbot from forms. It is recommended that you add this action to the end of all dialogues that include forms. If this is not done, the forms will retain all previously collected information if the dialogue is triggered again.
To add this preset bot action dialogue element:

1. From the Dialogue Manager page, click the Edit icon that corresponds to the dialogue to which you wish to add this reset element.
2. Click `New Dialogue Element`.
3. Ensure the element type is set to **Bot Action** and the action is set to **Preset**.
4. In the preset dropdown field, select the *reset_all_form_items* option.
5. Click the `Select existing` button.
6. The element is created and is listed in the Dialogue Manager window.

:::tip 
> This reset element will only clear the information from form elements that precede it in placement in the dialogue. As such, it's recommended that you place the *reset_all_form_items* dialogue element after all the form elements in your dialogue. Simply drag and drop the element to change its position in the dialogue.
:::

### Reset Action
This bot action element clears the information collected from specific forms. This is useful if you have several form elements in a dialogue but only need the information cleared from certain forms.
To add this bot action element to your dialogue:

1. From the Dialogue Manager page, click the Edit icon that corresponds to the dialogue to which you wish to add this reset element.
2. Click `New Dialogue Element`.
3. Ensure the element type is set to **Bot Action** and the action is set to **Reset**.
4. You have the option of naming and creating a new reset element, or selecting an existing one from the dropdown.
5. Click either the `Create element` or the `Select existing` button based on the field you filled.
6. The element is created and is listed in the Dialogue Manager window.
7. You can now begin adding entities to your new element by clicking on the `Add element` button.
   
   :::tip
   > The entities added here need to match the entities associated with the form action you would like to clear.
   :::


## Bot Buttons (Menu)
The bot buttons or menu element allows you to add a menu functionality to your chat that gives your users the option of using buttons rather than free-form text.  
Use the following steps to add this element to your dialogue.

1. From the Dialogue Manager page, click the Edit icon that corresponds to the dialogue to which you wish to add this menu element.
2. Click `New Dialogue Element`.
3. A pop-window, illustrated in the following image, appears, prompting you to fill in the required fields.

   ![bot buttons](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/add-button-element.png)
   
4. Ensure the element type is set to **Bot Button**.
5. Enter the button group name. This is the collective name you wish to assign to the buttons in this new element.
6. Enter the text you want displayed before the buttons. This text must be entered in all the languages your chatbot supports.
7. Click `Create element`.
8. Your new button element is created and listed in your dialogue.
9. You can now begin adding the individual buttons (options) for your new menu element. Click `Add button` to do this.
10. A pop-window, illustrated in the following image, appears, prompting you to fill in the required fields.

      ![new button](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/bot-button.png)
11. Select the payload type from the drop-down menu.
    a. Selecting *from_intent* as the payload type prompts you to select the intent your button should be linked to.
    b. Selecting *from_faq* as the payload type prompts you to select the frequently asked question your button should be linked to.

12. You have the option of attaching an entity to your button. To do so, select the `Attach entity to payload` checkbox and choose the entity you would like to attach from the dropdown.
13. Enter the title for your new button in the field provided. This is the text that should be displayed on the button. This text needs to be entered in all the languages your chatbot supports.
14. Click `Save`. Your new button is now added.  

# Example
The following example shows how these dialogue elements can be used together.

1. A user sends text to the bot. This text is classified as a flight_search intent.
2. The bot then requests two information items from the user: `departure_city` and `arrival_city`.
3. The user responds with the requested information.
4. The bot then uses an action to hit an API and send the collected information in the API request. The response from the API is in plain text and displayed to the user.
5. A feedback question is also displayed to the user, along with two buttons that the user can click.

:::info
> We are here to help! Please email support@botlhale.ai with any questions.
:::
