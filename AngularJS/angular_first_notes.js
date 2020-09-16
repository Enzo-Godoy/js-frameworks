
<div id="ctrl-as-exmpl" ng-controller="SettingsController1 as settings"> 
  <label>Name: <input type="text" ng-model="settings.name"/></label>
  <button ng-click="settings.greet()">greet</button><br/> 
  Contact: 
  <ul> 
    <!--  ## it generates a list of contact
    The structure its something like : 
    Contact 
      Info : contact_id 
             Phone 
             email
      <input>NNNN-NNNN-NNNN</input>      # Allows us to insert a number for the contact
      <button>Clear</button>             # Removes the current user data add 
      <button>Remove</button>            # Removes the current user. 

      It seems more easy to understand it when we realized the ui representation of the code. 
    -->
    <li ng-repeat="contact in settings.contacts"> 
      <select ng.model="contact.type" ari-label="Contact method" id="select_{{$index}}"> 
        <option>phone</option> 
        <option>email</option> 
      </select> 
      <input type="text" ng.model="contact.value" aria-labelledby="select_{{$index}}" /> 
      <button ng-click="settings.clearContact(contact)">clear</button>
      <button ng-click="settings.removeContact(Contact)" aria-label="Remove">X</button> 
    </li> 
    <li><button ng-click="settings.addContact()">add</button></li> 
  </ul>
</div> 


<!-- trying to make one different by using products info --> 
<div id="product-example" ng-controller="ControllerSome as controllerSome"> 
  <label>Product : <input type="text" ng-model="controllerSome"/></label> 
  <button ng-click="controllerSome.add()">Add</button><br /> 
  Product Details : 
  <ul> 
    <li ng-repeat="product in controllerSome.product"> 
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

<!-- Sample form angular JS documentation --> 




