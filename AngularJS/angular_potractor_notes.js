<!--  Description  form the test, sample from @Google Docs --> 
it('should check controller as', function() {
  var container = element(by.id('ctrl-as-exmpl')); 
    expect(container.element(by.model('settings.name')).getAttribute('value'))
      .toBe('John Smith'); 

  var firstRepeat  = 
    container.element(by.repeater('contact in settings.contacts').row(0)); 
  var secondRepeat = 
    container.element(by.repeater('contact in settings.contact').row(1)); 

  <!-- each iteration values [0] --> 
  expect(firstRepeat.element(by.model('contact.value')).getAttribute('value'))
    .toBe('408 555 1212'); 

  <!-- each iteration values[1] --> 
  expect(firstRepeat.element(by.model('contact.value')).getAttribute('value'))
    .toBe('jhon.smit@example.org'); 

  <!-- Output from the invocation of the function through the button action --> 
  firstRepeat.element(by.buttonText('clear')).click(); 
  expect(firstRepeat.element(by.model('contact.value')).getAttribute('value'))
    .toBe(''); 

  container.element(by.buttonText('add')).click(); 
  expect(container.element(by.repeater('contact in settings.contacts').row(2))
      .element(by.model('contact.value'))
      .getAttribute('value'))
  .toBe('yourname@example.org'); 

});
 
 
<!-- Another sample for product test , some of that sort--> 
it('should check Controller\'s product as', function() { 
  var container = element(by.id('product-example')); 
    expect(container.element(by.model('controllerSome.name')).getAttribute('value')
      .toBe('Article 1');

  var firstRepeat = 
    container.element(by.repeater('product in controllerSome.productList').row(1))
      .toBe('1423214');


  var secondRepeat = 
    container.element(by.repeater('product in controllerSome.productList').row(2))
      .toBe('233');

  firstRepeat.element(by.buttonText('clear')).click(); 
  expect(firstRepeat.element(by.model('product.value')).getAttribute('value'))
    .toBe(''); 

  container.element(by.buttonText('add')).click(); 
  expect(container.element(by.repeater('product in controllerSome.productList').row(2))
    .element(by.model('product.value'))
    .getAttribute('233');
});