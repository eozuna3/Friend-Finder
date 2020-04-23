# Friend-Finder (Express and Node Application)

### Overview
This application uses Node and Express to create a website that works similar to current dating websites.  The website has a survey form that the that user must fill out with their name, a link to an image of themselves, and then survey questions for them to answer.  Once the user completes the form and submits their , the website takes that information and sends to a server we created with express.  The server then compares the users survey answers to other previous users answers, and calculates which previous user had the most similar survey answers to the current user.  The server is basically calcuting the *Best Match* for the current user to previous users.  The server then responds back to the webpage with all the information about the previous user it calculated was the *Best Match*.  The website then displays the name and picture of the *Best Match* previous user to the current users screen.

### How the application is organized
* The folder structure for the website is detailed below:
  `FriendFinder`
  `- .gitignore`
  `- app`
    `- data`
      `- friends.js`
    `- public`
      `- home.html`
      `- survey.html`
    `- routing`
      `- apiRoutes.js`
      `- htmlRoutes.js`
  `- node_modules`
  `- package.json`
  `- server.js`

This application uses a server.js javascript files that creates a server using express.  The friends.js file holds an array of friends objects which is acting as storage for user information.  The public folder holds the html documents for the website.  Finally the routing folder holds 2 more javascript files.  The htmlRoutes file that handles the movement around the website between html pages.  The apiRoutes handles all the logic for the website to function along with the API call made from the website. 


### Technologies used in the application
1.  Javascript
2.  Node.js
3.  Express NPM
4.  HTML

### Running the application
To start the application you will need to type in one of the following lines of code into the command line terminal based on whether you would like to be a customer or manager.

`$ node bamazonCustomer.js` or `$ node bamazonManager.js`

#### Customer applicaton
The application outputs to the CLI a list of available product items to purchase and then prompts the user which item to select to purchase and asks how many items they want to purchase. Below is a screen shot of this 


  ![Image of 1st screenshot](images/ANA-1.png)
  ![Image of 2nd screenshot](images/ANA-2.png)

Once the customer enters in the appropriate information the application will notify them that the order was successful placed and display to the CLI the total cost of their order.  It will then ask the customer if they want to place another order or not.

  ![Image of 3rd screen shot](images/ANA-3.png)

If the customer places an order for more products that the current stock quantity in the store the purchase will not proceed and the customer is alerted via CLI about the failed order.

![Image of 4th screen shot](images/ANA-4.png)

If the user enters "yes" or "y", then the application will restart and the list of products available is re-displayed.  Otherwise, if the user types in "no", "n", or justs hit enter the application will end and the application will stop.

#### Manager applicaton
The application outputs to the CLI a list of operations the manager user can perform on all available product items in the database.  Here is a screenshot of the selection menu.

![Image of screenshot](images/ANA-5.png)


Based on the manager's selection choice, the outputs that are possible are illustarted below.

  1.  **View Products for Sale**
  This selection outputs to the CLI a table of all the available product items in the store database.

  ![Image of screenshot](images/ANA-6.png)

  2.  **View Low Inventory**
  This selection outputs to the CLI a table of all the product items that have a stock inventory less than 5.

  ![Image of screenshot](images/ANA-7.png)

3.  **Add to Inventory**
  This selection uses inquirer prompting to first ask the manager which item they would like to add stock to and then requests the amount of stock they wish to add to the item.  If the manager chooses an item not available in the store the manager is alerted that no product item was found.

  ![Image of screenshot](images/ANA-8.png)

3.  **Add to Inventory**
  This selection uses inquirer prompting to first ask the manager which item they would like to add stock to and then requests the amount of stock they wish to add to the item.  If the manager chooses an item not available in the store the manager is alerted that no product item was found.

  ![Image of screenshot](images/ANA-8.png)

4.   **Add New Product**
 This final selection allows the manager to add a completely new product item to the product database.

![Image of screenshot](images/ANA-9.png)
![Image of screenshot](images/ANA-10.png)

After the manager completes one of the operations it prompts the manager is they wish to return back to the main menu and choose another operation to perform.  If the manager enters "yes" or "y", then the application will restart and the main menu is re-displayed.  Otherwise, if the user types in "no", "n", or justs hit enter the application will end and the application will stop.

## Links associated with the application
1.  Link to git hub repository for this app:  [Github Link](https://github.com/eozuna3/Friend-Finder)