# Intents

Intent is all about the motive of a given chatbot user. It’s the goal behind each message the chatbot receives from the user. Intents categorize text based on the goal or purpose expressed in the user’s message. For example, the intent "greetings" enables your bot to understand when the user says "Hi". This creates a simple question-answer dialogue that provides a response to messages categorised to a specific intent.

## Create Intents

Use the following steps to add intents to your selected chatbot.

1. From the My Chatbots page, click on the Edit icon of the chatbot you wish to add intents to. You are directed to the Intents Manager page.
2. Click the `New Intent` button.
3. A pop-up window appears, prompting you to enter an intent name. Fill in the required field, and click `Create Intent`.

![create intent](../../../static/img/create-intent.PNG)

## Edit Intents

Once an intent has been created, you can begin editing it to add various categories for text based on the purpose of the user's message. Use the following steps to edit intents.

1. From the Intents Manager page, click on the Edit icon corresponding to the intent you wish to modify. 
2. You are directed to a new page where you can provide example messages and reponses for each intent. This is illustrated in the following image.


![add intent examples and responses](../../../static/img/intent-examples.PNG)

:::tip
You need to provide example messages and responses for each language you selected when creating your chatbot. This is because on the backend, an intent classifier is trained for each language. A pre-trained language model for each intent classifier is used to create embeddings for the classifier to train accurately with fewer example messages. To toggle between predefined languages, select the desired language from the drop-down list of the language tab.
:::

3. Once you have provided a list of example messages and possible responses in your various predefined languages, click the `Save` button to save the created intents of your bot.

![change language](../../../static/img/intent-examples-change-language.PNG)


## Delete Intents

Before you delete an intent, ensure it is not in use in the Dialogue Manager. If the intent you wish to delete is in use, you must first delete the dialogue using the intent before you can delete the intent.

Use the following steps to delete an intent.

1. From the Intents Manager page, click on the Delete icon corresponding to the intent you wish to remove. 
2. A pop-up window appears, prompting you to confirm this action by clickling the `Delete Intent` button. 


:::danger

Deleting an intent deletes all of its related content. This cannot be restored.

Deleting an intent also permanently deletes all the examples and responses also get permanently deleted. This also cannot be restored.

:::
