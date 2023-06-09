# Queue Management

Queue management is a crucial aspect of running a successful business, especially in the service industry. A queue management system allows you to effectively manage customer flow, minimize wait times, and provide an efficient service experience. This eliminates the need for manual queue management, providing a more enjoyable experience for your customers and improving the overall efficiency of your business.

Understanding the nature of traffic and queries, this section of the platform allows you to set how the queue of your incoming customers and manage how the workload is distributed among your organisation's agents. 

:::info NOTE
> Users need admin permissions to view and configure queue management settings.
:::

![queue management](https://botlhale-ai-assets.s3.amazonaws.com/queue-management.png)

The following description list takes you through the various setting options available on the Queue Management page.

Auto-assign to all online agents
: Enabling this setting automatically assigns users in the queue to an agent after a human handoff is triggered by the chatbot. If this setting is disabled, agents must manually assign a user to themselves via the Live Chat interface. See the [Queues](3%20-%20Queue.md) section of this documentation for more information on manual assignments.

Routing by Department
: Enabling this setting routes the users in the queue by the department selected during the chatbot's execution of the human handoff.  

Maximum simultaneous chats per agent
: This setting allows you to configure the maximum number of users an agent can interact with via Live Chat at the same time. 

SLA Time (minutes)
: SLA is an acronym which stands for Service Level Agreement. In this context, SLA Time represents an agreed upon number of minutes an agent can let lapse before they must respond to a newly initiated Live Chat assigned to them. Configuring this setting sends periodic reminders to the agent which prompts them for a response.

Agent Away Time (minutes)
: This setting configures the maximum amount of time an agent can remain in an Away status on the platform. Configuring this setting sends periodic reminders to the agent which prompt them to return to an Online status.

Queue Auto-Replies
: This setting allows you to configure automatic replies which an agent can send to a user in their Live Chat.



