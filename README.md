# Breaking browser storage


## Assigment Goals & Description:

*This assignment is part of the NoSql-course.*

The goals of this exercise is to make you think about browser storage.
What kind of storage exist? What are their properties and limitations? And how do I decide what is the best option for any given usecase.  

## Assignment:

- Test what happens when you exceed local-storage storage limits.
- Test if the behavior is the same in multiple browsers.
- Research online: Specific properties of LocalStorage, SessionStorage, Cookies

### How to:

Getting started:
- Clone the repository to your local machine using VScode (or some other gitClient)
- Use VScode to navigate to the repository on your machine
- Open a terminal in VScode and 
- run: npm install
- run: npm start

Use the given codebase and add the following behavior:
- Convert the selected image into a base64 string.
- Write a loop that will add the base64 image string to local storage as many times as needed to exceed the storage limits.

### Deliver:

- **Working code**: Make sure that your code works then push the results to the main branch.
- **Research result**: Add the results of your online research in the file: [browser-storage-info.md](/browser-storage-info) (don't forget to commit and push !!)


## Hints and Tips:
To create this assignment I used the sources below:

- [Blowing up LocalStorage](https://www.raymondcamden.com/2015/04/14/blowing-up-localstorage-or-what-happens-when-you-exceed-quota)
- [Converting image to base64](https://stackoverflow.com/questions/51533584/converting-an-image-to-binary-in-javascript-using-base64)
- [Upload image in React JS](https://stackoverflow.com/questions/43692479/how-to-upload-an-image-in-react-js)

Usefull articals about browser storage:

- [Different types of Browser storage](https://betterprogramming.pub/the-different-types-of-browser-storage-82b918cb3cf8)
- [Different types of Browser storage](https://medium.com/geekculture/localstorage-is-cool-but-be-mindful-how-you-use-it-2fedf02d37e4)



