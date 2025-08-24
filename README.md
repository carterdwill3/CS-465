**Architecture**


*- Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).*


*- Why did the backend use a NoSQL MongoDB database?*

The Express HTML approach was traditional server-side rendering with full page refreshes, while the JavaScript we used was mostly for basic manipulation. The Angular SPA was completely different - everything
happened client-side with dynamic updates and smooth transitions without page reloads. We used MongoDB because our trip and user data didn't need complex relationships that SQL requires, and the flexible document
structure worked perfectly with our JavaScript-heavy stack.

------

**Functionality**
*- How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?*
*- Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.*

JSON is just the data format without any functions; JavaScript is the full programming language - JSON became our universal translator between the frontend and backend since it flows seamlessly from MongoDB
to Express APIs to Angular components. The biggest refactoring win was creating the JWT interceptor to automatically handle authentication instead of manually adding tokens to every API call. Reusable components
like the trip-card made development much faster since we could display trips consistently across different pages without rewriting code.

------

**Testing**
*- Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints,
and security in a full stack application.*

Testing involved verifying GET requests properly displayed data, POST/PUT requests correctly updated the database, and authentication worked by trying to access protected endpoints both logged in and logged out.
The trickiest part was testing with JWT security since we had to ensure tokens were properly attached to requests and expired tokens were handled gracefully.

------

**Reflection**
*How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?*

This course gave me hands-on experience with modern full stack development using real industry tools like (e.g. Angular, Express, MongoDB, etc.). The authentication addition and API security concepts
especially helped me understand how professional web applications actually work - this I was not too familiar with regarding hands-on experience. I feel this knowledge would make me much more confident
when it comes to discussing these topics in interviews or just technical conversations in general.
