# Train
 
This section is for training a chatbot with the intents and user examples provided in the previous sections. A training dataset is composed of many sentences organised into intents that represent what users say to your chatbot. The training dataset is used to train the bot to understand the user’s needs and to trigger the right piece of conversation, to reply correctly, and to have a smooth conversation.

To train you need to select the Language (you can only train one language at a time), specify the number of Epochs (the number times that the learning algorithm will work through the entire training dataset), Batch size (the number of samples to work through before updating the internal model parameters), Training samples (single rows of data that contain inputs that are fed into the algorithm and an output that is used to compare to the prediction and calculate an error), and Fallback. We recommend that you leave the default values for all these parameters.

![Training parameters](https://botlhale-docs1.s3.amazonaws.com/train.png)

After setting the parameters, click the `Train` button and your chatbot will start training. When your chatbot is training, the saved model section will show the model being trained with a status value of ‘In progress’ while the ones that have completed training will have the status of ‘Done’ as shown in Figure 18.

![Training progress status](https://botlhale-docs1.s3.amazonaws.com/train-status.png)
