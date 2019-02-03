### Live App deployed at https://task-it-now.herokuapp.com/

### Test Login 1

Username: test
Password: pwd123

### Test Login 2

Username: admin
Password: pwd123

### Design Choices Analysis Questions

#### Why certain approaches were used, why others were not selected?

1. File organization -
   Over the past few months of iterating with different file structures, I find the current structure to be the most easily navigatable in terms of convenience. The pages and static folders are a requirement dictated by the Next.js framework. It is also convention to create a components folder to house all React components. The design folder contains sketch files and other assets unused directly in the project. All server related code such as api routes, mongoose models etc. are inside the server folder and the server.js file brings it all together.
   Since this application is a server side rendered application, there are some parts of my code that need to be accessible to both the server as well as the client. For example, api requests to endpoints and redux functionality might be used both client and server side. For this purpose, we store these files in a lib folder and use isomorphic fetch for requests.

2. Styling -
   For this project, I use css in js styles. It is my personal preference to use these as opposed to css files and is also the recommended approach when using the Next framework. However, hover state css is defined in css classes inside \_document.js
   This can be done by maintaining local state and applying or removing css in js styles with events such as mouse over etc. but its a lot easier to just use css classes here. The color palette is stored inside color.js and frequently used styles are stored inside style.js. All component styles are stored inside component.js which is organized in alphabetical order for easily accessing the styles as per requirement. This would be especially useful as the project grows larger. Alternatively, we could create individual style files for different components, but it feels like overkill for the scope of this project.

3. Update redux then db -
   One unconventional but conscious approach is with regards to the logic flow of the CRUD functionality of the application. For example, when we add a new task, we want this change to be reflected in both the redux state (client frontend) and in the database. The convention for most applications is to show a loading state, update it in db and on successfully updating in db, and then reflect the change in the frontend. While this is the most logical approach, I think showing a loading state hampers the user experience when using the application. Given that most requests do successfully update and errors are an anomaly, I chose to implement CRUD functionality by first showing the change in the frontend and then making a request to update it in the db. If I had more time, I would handle the failure to update by showing an error modal and then updating the state to revert back to the old state before the change/

#### Design patterns used

1. SVG component - the logo svg asset was converted into an SVG component so that the properties of the asset can be mutated on the fly. This is especially useful when coupled with react props that let you reuse an asset in different colors, sizes and other configurable options.

2. API call modularity and reusability - The api calls have been modularized into user and task portions to handle appropriate functionality. Furthermore all db manipulations are created as static methods of User or Task class and these classes are loaded into their respective mongoose models. This makes it a lot easier to reuse this functionality across routes if need be.

3. Redux HOC - The redux layer is integrated into components and pages with a higher order component called withRedux. Since several components may need to access the redux layer, it makes sense to do it this way rather than connecting each component individually with mapState and mapDispatch functions. We also create a common dispatch function called updateState that takes in the type and payload to alter the appropriate reducer and update state.

4. Prop Type validation - We use the prop types library to validate props for different components. This would be especially useful as the size of the application grows and when components are reused. It makes it easier to spot errors/bugs when incompatible data types are supplied as props. Furthermore, we can also provide default props thus making it possible to easily reuse components in specific use cases where only certain props need to be customized or supplied.

#### Things I would do if I spent more time on this project

1. Log error messages in index page on error while creating a new user, or trying to login with the credentials of an existing user.

2. Handle case for when db fails to update, show error message and then revert state change in redux layer

3. Set up redux thunk or saga as middleware to handle side effects when working with async functionality.

4. Redesign the task list component. Overflow div to hide content overflow but I would create an accordion component to show more content.

5. Animate the addition and removal of tasks from the task list component.

6. Integrate express session and logout functionality.

#### Other comments

The application has been designed for screens wider than 1000px. Mobile responsiveness was not an anticipated goal.

I am happy with the color choice and the UI of the index page and the add task section of the dashboard page. I am not entirely happy with the UI of the task list component and would like to come back to designing it sometime in the future.

It has also been a conscious design decision to implement the task component as a toggle-able component. On clicking it, it seamlessly transforms into a input component for a user to update the description. In order to confirm changes, the user can click anywhere else in the application, and it changes back to a text div and updates in the redux state and db automatically.
