**General Assembly**

**Collaborator:**
Nicholas Botorog.

This was a 48hour hackathon challenge in which we worked in pairs to build a React app which used a public API. Aromi and I chose to create a Final Space index, consisting of the characters and a list which would open a new window to watch the selected episode.


**Brief**
**1.** Consume a public API
**2.** Have several components.
**3.** The app can have a router - with several "pages", this is up to your discretion and if it makes sense for your project.
**4.** Be deployed online and accessible to the public.

**Please see the wireframe below:**

<img width="788" alt="Screenshot 2022-06-23 at 11 14 59" src="https://user-images.githubusercontent.com/73545574/175276237-b6ea2d98-552c-4e8e-a8e8-1f8e296ce61d.png">

**Built With:
**

1. React.Js
2. JSX
3. CSS
4. AXIOS
5. GitHub
6. React-Router-Dom
7. ReactBootStrap

**
Deployment**

The app is deployed on Netlify and can be found here - https://isnt-justingrant94-awesome.netlify.app/

**Process
**

Knowing we only had 48 hours in order to complete this project we chose an API which we thought would be fun to work with and we were able to clearly set out our “must haves”. Nicholas and I decided we would work closely together and code along for the small and quick project which worked very well. The must haves we included in the project were the following; 

1. App to have multiple components
2. Navbar
3. Search Functionality

<!-- Our stretch goals consisted of: -->
1. Filter Function for the Gender of characters

After we had a rough idea of how the page will look aesthetically we then created basic components and a BrowserRouter. Here is an example of the final product.

 <img width="453" alt="Screenshot 2022-06-21 at 12 32 09" src="https://user-images.githubusercontent.com/73545574/175277849-6f4a4288-1da0-4a49-a646-021f2d9d1655.png">
 
 HomePage

The Homepage is a hero image of Bob’s burger with a button in the center of the page which takes the user to the characters List which is the Nav.

<img width="1512" alt="Screenshot 2022-06-21 at 12 34 17" src="https://user-images.githubusercontent.com/73545574/175277897-c584ae24-c4e2-474c-afef-9cd07f924a07.png">

Character Index
Once landing at the Character Index page an async function will run. This code block has been sectioned with a try/catch statement and will await the promise from axios, then set the data in state. This then allows us to cherry pick or manipulate the data which we draw from the API, and in this instance we are requesting for the characters to be returned.

<img width="485" alt="Screenshot 2022-06-21 at 12 38 57" src="https://user-images.githubusercontent.com/73545574/175278046-bac132c2-c4fa-4333-adb6-185fb02eae4d.png">

We were then able to use the data drawn from this API to create Character Cards which are displayed on this index page.

<img width="983" alt="Screenshot 2022-06-21 at 12 41 12" src="https://user-images.githubusercontent.com/73545574/175278126-f2eeecfa-1962-4889-95d7-a6f18b189a9a.png">

**Search Function
**

One of the must have features for us on this project was to have a search function, so the user is able to type and find the exact character they want. We did so by filtering through each character name and ensuring it matches the search value which the user types, which also our filter drop down is also incorporated within the code.

<img width="611" alt="Screenshot 2022-06-21 at 12 44 40" src="https://user-images.githubusercontent.com/73545574/175278229-4a9a9448-053d-4e43-b616-06a4ccdfc241.png">

**Character Show
**

The Character Show page is accessed by clicking one of the Character Cards on the Character Index page. This page is made by increasing the size of the character card and adding more information about the selected character. We realised quite soon after pulling the data the API was rather simple so we pulled the first episode when the character's first feature, the actor that is the voice of the character and also the hair colour of the character and also their occupation. 
<img width="966" alt="Screenshot 2022-06-21 at 12 46 47" src="https://user-images.githubusercontent.com/73545574/175278336-517a7ef8-44ae-4c1d-a5f3-9f67f0bc0289.png">

Below we pulled the id’s of the character and as I previously touched on the site stored characters, occupations, episodes and hair color which we wanted to display for the user if they were interested in looking up a user and also the wiki button at the bottom directs you to their own person wikipedia.
![Uploading Screenshot 2022-06-21 at 12.51.17.png…]()
<img width="618" alt="Screenshot 2022-06-21 at 12 51 27" src="https://user-images.githubusercontent.com/73545574/175278572-c84c0766-2cba-4fa8-90a3-157b61705e8e.png">

**Challenges**

**1.** We faced difficulties in the beginning trying to find a good API to work on as a lot of them were giving us permission issues, which is one of the main reasons why we settled with this specific API. 

**Future Improvements
**

**1.** Work a little more on the CSS, jazz things up some more.
**2.** Creating another page for a game, to add engagement, something like a pair game where you have to match the tiles could have been a nice addition.

**Wins & Key Learnings**

1. As the first project that I have worked on, it was extremely enjoyable as there were some gaps in my knowledge that I was able to ask and as my pair knew the answers made things a lot easier to digest.
2. The improvement in understanding setting data ‘in state’ and navigating APIs.
3. Recognising that console.log() is your best friend.







