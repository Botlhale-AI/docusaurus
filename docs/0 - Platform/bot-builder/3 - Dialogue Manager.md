# Dialogue Manager

The Dialogue Manager is a conversation management interface which allows you to create more complex dialogues with your bot.

These complex dialogues are capable of the following:

- Sending multiple responses following an intent.
- Hitting APIs which return plain-text responses to the end user.
- Using buttons as quick responses.
- Collecting information from the user.
- Generating rich responses in the form of images, PDFs, Word documents, and so on.

:::info
> The rich response generation capabilities of the Dialogue Manager interface need to be configured to work. This configuration happens on the Custom Functions page. See the Custom Functions section of this documentation for additional information.
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
> Creating a preset dialogue triggers a code update to the Custom Functions page. All the code required to action that conversation sequence when it's triggered by an intent is then available in the script found on the Custom Functions page. See the [Custom Functions] section for additional information. 
:::

## Create Custom Dialogues


Use the following steps to create a new custom dialogue.

1. From the Dialogue Manager page, click the `New dialogue` button.
2. A pop-up window appears, prompting you to select the dialogue type and assign it a name. 

![new dialogue](https://botlhale-ai-assets.s3.amazonaws.com/doc-imgs/new-dialogue.png)

3. Ensure "Custom" is selected as the dialogue type, and enter an appropriate name for your new dialogue.
5. Click the `Create dialogue` button. Your new custom dialogue is created and listed on the Dialogue Manager page. 
6. Now, you can begin building the conversation sequence for your dialogue by creating and adding dialogue elements. This is discussed in detail in the section that follows.



