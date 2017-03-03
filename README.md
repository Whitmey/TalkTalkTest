#TalkTalkTest

###How to use
* This app can be run by simply cloning the files and opening the index.html file in a browser

###Overview
* I broke this test down into three parts
* 1. List all contacts on the view
* 2. Create a form that can add a new contact
* 3. Allow the user to click on a contact for more details

###Difficulties
* Ran into a cross browser origin error that was fixed by adding a Chrome extension
that allowed me to bypass that security measure. The extension is called Allow-Control-Allow-Origin
I believe that the cause of this error was the fact that the data was being received from a different domain
to the one that I was currently hosted on.
* The data would be displayed onto the view before the response of the API, resulting in an empty object.

###Technologies Used
* AngularJS, HTML, CSS, Bootstrap, APIs.

###Steps for improvement
* Delaying the data being put onto the view until the response from the API has been received.
* Allow user to input avatar image and give it restrictions so that it does not interfere with the styling of the page
For now the avatar is predetermined to avoid conflicts.
