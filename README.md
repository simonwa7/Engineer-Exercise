This is the README for the Truss Javascript App Exercise, written by William Simon on 5/10/2017

Design: This app is designed to be a user interface for the creation and "execution" of workflows. Workflows 
are a series of actions that the client chooses that work together sequentially. These actions should be related
to one another, based on things such as collecting and then manipulating data, and therefore the order of their 
execution will affect the final output of the workflow. These actions are previously defined by the app and are 
non-manipulative, however, the client's freedom comes in the ordering of the actions chosen. The layout of this
app begins with a catalog of possible actions that the client can use to create their workflow. The client
chooses with actions they would like to be executed, in order, in their workflow. They choose these actions by
clicking on their respective buttons. As actions are chosen, they show up in a list named "Current Workflow". 
If the client changes their mind about the order of their workflow, they can press the "Delete Current Workflow"
button and begin again. After creating their desired workflow, the client presses the "Save Workflow" button. The
app will then save their workflow as an object of strings and creates a button. On the click of that button, the 
app, if the Truss library were properly defined, will then begin execution of each action sequentially until the 
workflow is complete.

Future Changes: 

    1. The only current method to alter a workflow is to delete its entire contents and begin from scratch. A
    more user-friendly implementation could include a drag and drop list that would alter the order, or an even
    more simple method, delete only the most recently added action. These implementations would allow for a more 
    instinctual interface for the client. 

    2. If the Truss library were defined and properly implemented, data would have to be collected from a server
    or database. In addition, it is likely there are issues in the current implementations, since parts of the app 
    using those function can not be properly tested. 

    3. More actions could be defined in the app. This would allow more variability of workflows and give more use
    to the client. 

    4. Workflows could be given names that are more specific to their execution. An easy way to implement this 
    change would be to get user input from the client as to what the name of their workflow would be. This could
    lead to some issues as cross-site-scripting would have to be accounted for, as well as, a method for 
    distinguishing between workflows that have been given the same name by clients.

    5. Workflows could be attached to a client's id. This would allow the site to only render workflows in the 
    database that were created by the client currently using the app. This would be easier for the client as 
    their personal app would be cleaner and more personalized. 

    6. Workflows previously defined by the client, or others desired by the client, could be shown in the app. 
    This would allow the client to save their workflows more permanently, as the app would display those they 
    previously defined. This could also be used in cooperation with a search algorithm in which the client 
    could specify which workflows, created by either themselves or other users, that they would like displayed.

    7. Currently, there is no way for a client to see the sequetial actions that a workflow will execute after
    it has been defined. A possible addition to the app would be a way to select a workflow and see the list of
    actions before choosing to execute that workflow. This could possibly be done by hovering over the button, 
    however, there are probably other implementations better suited to the user interface. 