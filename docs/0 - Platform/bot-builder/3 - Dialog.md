# Dialogue Manager

The Dialogue Manager is a conversation management interface which allows you to create more complex dialogues with your bot.

These complex dialogues are capable of the following:

- Sending multiple responses following an intent.
- Hitting APIs which return plain-text responses to the end user.
- Using buttons as quick responses.
- Collecting information from the user.
- Generating rich responses in the form of images, PDFs, Word documents, and so on.

:::info
The rich response generation capabilities of the Dialogue Manager interface need to be configured to work. This configuration happens on the Custom Functions page. See the Custom Functions section of this documentation for additional information.
:::

The Dialogue Manager interface gives you the option of creating both custom and preset dialogues. These dialogues outline a sequence for your bot to follow during a conversation. The flow of the conversation sequence is determined by the intent put forward by the end user. Consider the example of an ecommerce bot presented with a greeting intent where the end user sends a message saying "Hello". This greeting intent could be configured to trigger a Bot button response where the ecommerce bot responds with a greeting and a series of buttons prompting the end user to select a product for purchase. 

The following preset dialogues are available on the Dialogue Manager interface.

**Human handoff:** This preset dialogue option launches a conversation sequence where the end user is provided with handoff options and connected to a human agent.

**Change language:** This preset dialogue option launches a conversation sequence where the end user is provided with the option the conversation language, and allows your chatbot to continue the conversation in the selected language. 

## Create Preset Dialogues

Use the following steps to create a preset dialogue for your chatbot.

1. From the Dialogue Manager page, click the `New dialogue` button.
2. A pop-up window appears, prompting you to select the dialogue type. Use the arrows to toggle between the available options.

![new dialogue](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/create-dialogue-preset.png)

3. Ensure "Preset" is selected as the dialogue type, and select the preset dialogue you wish to assign to your bot.
4. Click the `Create dialogue` button. Your preset dialogue is created and listed on the Dialogue Manager page. 

:::info
Creating a preset dialogue triggers a code update to the Custom Functions page. All the code required to action that conversation sequence when it's triggered by an intent is then available in the script found on the Custom Functions page. See the [Custom Functions] section for additional information. 
:::

## Create Custom Dialogues


Use the following steps to create a new custom dialogue.

1. From the Dialogue Manager page, click the `New dialogue` button.
2. A pop-up window appears, prompting you to select the dialogue type and assign it a name. 

![new dialogue](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/new-dialogue.png)

3. Ensure "Custom" is selected as the dialogue type, and enter an appropriate name for your new dialogue.
5. Click the `Create dialogue` button. Your new custom dialogue is created and listed on the Dialogue Manager page. 


## Dialogue Elements
Dialogue elements allow multiple responses following an intent. These element types include text responses, actions and buttons. When adding a dialogue element, you have the option to create a new one or select an already existing one. All new dialogue elements require a name so that they can be reused in a different dialogue if required.
To add a new element to a dialogue, click on the `New Dialogue Element` button and select the element type in the dropdown menu. To create a new element, enter the name of your element and click on the `create element` button. To use an existing element, select the element name in the dropdown menu and then click on `select existing`.

### User Intent
Note that every dialogue must start with an intent. This is the intent that will trigger that dialogue. If you are creating a new intent, provide the intent name then click on the `create element` button. To use an existing intent, select it from existing intent drop down menu and then click the `select existing` button as shown in Figure 14. 

 ![create entity](https://botlhale-docs1-new.s3.amazonaws.com/dlm-element.png)

After creating an intent you can have different types of dialogue elements to allow multiple responses following an intent. These element types include text responses, actions and buttons. 

### Bot Response
A bot response is the text response that the bot will return during the dialogue. In addition to having the option to create a new response or use an existing one, the bot response element also allows you to use response examples from an existing intent. This is done in the same way as using an existing response (the dropdown menu with existing responses will include existing intents). Once the bot response element has been added, you can add new response examples by clicking on the `Add examples` button.

![bot response](https://botlhale-docs1-new.s3.amazonaws.com/dlm-response.png)

### Bot Action
Bot actions allow your bot perform certain 'actions' during the dialogue. The actions that are available on our platform are form actions, custom actions and preset actions.

#### Form Actions
Form actions collect information (variables) from the user. Once a form action element has been added, click on the `Add form field` button to add a new form field. Give the form field a name and then click on the variable dropdown menu to select the variable that you want to collect. Enter the message that the bot should send to ask for this variable. This text has to be entered in all of the languages that the bot speaks. Complete the process by clicking the `Save` button. More form fields can be added to the form by repeating the process. You can edit or delete a form field by clicking on it.

![form](https://botlhale-docs1-new.s3.amazonaws.com/dlm-form-field.png)

#### Custom Actions 
Custom actions can hit external APIs. Once a custom action has been created, clicking on a language allows you send a POST or GET request to a webhook endpoint for that language. You also have the option of sending the information collected from forms as part of your payload. At the moment, the APIs' responses are limited to plain text only.

![custom](https://botlhale-docs1-new.s3.amazonaws.com/dlm-custom-webhook.png)

#### Preset Actions
At present the platform only has one preset action called the "reset all slots" action. This action clears all the information collected from forms. We advise that you add this action at the end of all dialogues that include forms. If this is not done, the forms will retain the collected information if the dialogue is triggered again.

![preset](https://botlhale-docs1-new.s3.amazonaws.com/dlm-preset.png)

### Menu
The menu element allows you to add a menu funtionality to your chat in order to provide options or quick responses to your users. When adding a menu element, you have to specify the text to display along with that menu in all the languages that the bot speaks. 

![create entity](https://botlhale-docs1-new.s3.amazonaws.com/dlm-menu-create.png)

To add a button to the menu, click on the `Add button` button and select the intent that the button should be linked to. This is the intent that will be triggered when that button is clicked. Also specify the title of the button (the text that should be displayed on the button) in all the languages that the bot speaks. Other buttons can be added by repeating the process. Click on a button to edit or delete it. 

![create entity](https://botlhale-docs1-new.s3.amazonaws.com/dlm-menu-button.png)

## Example
The example below shows how these dialogue elements can be used together.

1. A user sends text to the bot and the text is classified as a flight_search intent.
2. The bot then asks for two information items from the user: `departure_city` & `arrival_city`.
3. The bot then uses an action to hit an API and send the collected information on the API request. The response from the API is plain text and is displayed to the user.
4. A feedback question is also displayed to the user, along with two buttons that the user can click on.

![create entity](https://botlhale-docs1-new.s3.amazonaws.com/dlm-components.png)

Note that if you make any changes to the dialogue, you must make sure to save your progress before leaving the page otherwise your changes will be lost.
