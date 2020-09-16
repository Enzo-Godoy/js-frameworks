<!-- first sample from google --> 
angular.module('controllerAsExample', [])
  .controller('SettingsController1', SettingsController1); 

function SettingsController1() { 
  this.name = 'Jhon Smith'; 
  this.contacts = [ 
    {type: 'phone', value: '408 555 1212'}, 
    {type: 'email', value: 'jhon.smith@example.org'}
  ];
}

SettingsController1.prototype.greet = function() {
  alert(this.name); 
};

SettingsController1.prototype.addContact = function()  { 
  this.contacts.push({type : 'email', value: 'yourname@example.org'}); 
}; 

SettingsController1.prototype.removeContact = function(contactRemove) {
  var index = this.contacts.indexOf(contactToRemove); 
  this.contacts.splice(index, 1); 
}; 

SettingsController1.prototype.clearContact = function(contact) { 
  contact.type  = 'phone'; 
  contact.value = '';
}


<div id="ctrl-as-exmpl" ng-controller="SettingsController1 as settings">
  <label>Name: <input type="text" ng-model="settings.name"/></label>

  <button ng-click="settings.greet()">greet</button><br/>
  Contact:
  <ul>
    <li ng-repeat="contact in settings.contacts">
      <select ng-model="contact.type" aria-label="Contact method" id="select_{{$index}}">
         <option>phone</option>
         <option>email</option>
      </select>
      <input type="text" ng-model="contact.value" aria-labelledby="select_{{$index}}" />

      <button ng-click="settings.clearContact(contact)">clear</button>
      <button ng-click="settings.removeContact(contact)" aria-label="Remove">X</button>
    </li>
    <li><button ng-click="settings.addContact()">add</button></li>
 </ul>
</div>

/* 
Notes : $index is defined for ng-repeat. 
Angular supports binding on the entire object. 
 
Importante directives for Angular 8 : 
ng, auto, ngAnimate, ngAria, ngComponentRouter, ngCookies, ngMessageFormat, 
ngMessages, ngMock, ngMockE2E, ngParseExt, ngRoute, ngSanitize, ngTouch. 

functions called through button as in js. 

-- Angular Js
ng-click="nameLocalController.functionName()"

*/

// Sample with controller for Products 
angular.module('controllerAsExample', [])
  .controller('SettingsController1', SettingsController1); 

function SettingsController1() { 
  this.name = 'Jhon Smith'; 
  this.contacts = [ 
    {type: 'phone', value: '408 555 1212'}, 
    {type: 'email', value: 'jhon.smith@example.org'}
  ];
}
angular.module('controllerForProduct', []) 
  .controller('myProductsController', myProductsController); 

function myProductsController(){ 
  this.productName = 'Article 1', 
  this.price = 4.84 ,
  this.productList = [
    {type : 'Fruit', value : '1423214'},
    {type : 'Product Code', value : '233'}
    ];
}

<!-- All the functions are load into the prototype of the module Object?, right ? --> 
controllerProduct.prototype.welcome() {
  let welcoming= 'Welcome to the fruits section, we suggested you' + this.productName;
  return alert (welcoming);
}; 

controllerProduct.prototype.removeInfo() { 
  this.productsList.push({type : 'Product Code', value : '2352342'}); 
};

controllerProduct.prototype.removeProduct(productToRemove) { 
  var productIndex = this.productList.indexOf(productToRemove); 
  this.productList.splice(productIndex, 1);
};

controllerProduct.prototype.addProduct() { 
  productList.type = 'Product Code'; 
  productList.value = ''; 
}; 

<!-- This should work as a product render div at first --> 
<div id="product-example" ng-controller="ControllerSome as controllerSome"> 
  <label>Product : <input type="text" ng-model="controllerSome.productName"/></label> 
  <button ng-click="controllerSome.welcome()">Welcome</button><br /> 
  Product Details : 
  <ul> 
    <li ng-repeat="product in controllerSome.productList"> 
      <select ng-model="controllerSome.type" aria-label="Product info" id="select_{{$index}}">
        <option>code</option> 
        <option>email</option> 
      </select>
      <input type="text" ng-model="product.price" aria-labelledby="select_{{$index}}" /> 
      <button ng-click="controllerSome.removeInfo(product)">clear</button>
      <button ng-clicl="controllerSome.removeProduct(product)" aria-label="Remove">X</button> 
    </li> 
    <li><button ng-click="controllerSome.addProduct()">Add</button></li> 
  </ul>
</div>  