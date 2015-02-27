example shopping car version 1.0 26/02/2015
# addbooks

addbooks angular modules

### Version 1 - Description:
In this version you can do a book list. <br />
is an example to experiment with dynamics forms that will be created based on a javascript object, the field names,the field types, the validation messages, the validation patterns, if is required, and the select options are in the object that will be save in a localStorage to continue to the second version.


- In the add book link you can add one or more books at the same time, you can reset or delete each fields book.
- You can edit the book information and save it.
- In the book list link show all the books that you added, you can add a book to the shopping list or remove it to the sopping list.
- In the shopping list you saw all the books that you want buy and can delete the book of this list

### Version 2 - Description:
In this version you can create a form based in another form. <br />
generate the form fields object and the model object based in a form.

- you can add many rows, write the name, choose the field type, check if is required, write the message validators, choose the patterns validators, and put the diferent selector options.
- then this objects will be save in localStorage.

### Version 3 - Description:
In this version you can choose which columns of the lists you want the client see

- you can choose in a checklist which column show in the lists

### Setup enviroment
You need to install node and npm
[node.js]

> You may have to run the commands below with sudo

Install bower globaly
```sh
$ npm install -g bower
```

Install gulp globaly
```sh
$ npm install -g gulp
```

Clone the repo and then
```sh
$ cd addbooks
```

Install the packages
```sh
$ bower install
$ npm install
```

run the server
```sh
$ gulp serve-dev
```

and open a new browser tab
[http://localhost:8000/app/#/]


contact info
Email: jose4125@gmail.com

[node.js]:http://nodejs.org
[Gulp]:http://gulpjs.com
[http://localhost:8000/app/#/]:http://localhost:8000/app/#/