export function searchExistingProduct(productName) {
   cy.get('#filter_keyword')
      .type(productName)
      .closest('form')
      .submit();

   cy.get('h1.productname').should('contain', productName)
};

export function searchProduct(productName) {
   cy.get('#filter_keyword')
      .type('i')
      .closest('form')
      .submit();
   //беремо елемент (`ul.pagination a`) який відповідає за сторінки з товарами, за допомогою .then тобто проміс 
   //(проміс в данному випадку потрібен щоб зручніше було перетворити ці елементи на потрібні значення), всередині цього промісу
   //повертаємо цей елемент називаючи його pages та за допомогою .length визначаємо кількість цих елементів, в іншому .then pages.length
   //вже постає в наступному .then у вигляді pageCount в цей .then вкладаємо цикл фор для того щоб можно було визначити до якого моменту 
   //виконувалась функція тобто доки і яка збільшується на один після кожного прогону буде менше ніж pageCount (кількість сторінок)
   //так як товар може знаходитись і не на останній сторінці а цикл буде виконуватись до останньої то треба ще вкласти умову яка буде 
   //зупиняти цей цикл
   cy.get(`ul.pagination a`).then(pages => {
      return pages.length
   }).then(pageCount => {
      for (let i = 0; i < pageCount; i++) {
         //для формування умови беремо урл за допомогою cy.location(), покладаэмо його в проміс щоб можно було в цьому промісі зробити умову
         //в якій урл буде мати значення location та можн бути працювати з ним як з ним як з булевим значенням           
         cy.location().then(location => {
            //умова що якщо урл не містить (.includes) в своїй конструкції 'product/product' то виконуються наступні дії
            if (!location.search.includes('product/product')) {
               //беремо боді загртаємо в проміс щоб можна було зробити наступну умову з боді
               cy.get('body').then(body => {
                  //якщо в боді знаходимо елемент який відповідає за потрібний товар, реалізується це за допомогою вкладенох+ї умови .length > 0 бо якщо 
                  //довжина цього елементу не нуль тобто таким чином можна зробити цей локатор булевим значенням якщо не 0 то це тру
                  if (body.find(`a.productname[title="${productName}"]`).length > 0) {
                     //тоді клікаємо по цьому товару
                     cy.get(`a.productname[title="${productName}"]`).click();
                  } else {
                     //в іншому випадку клікаємо на кнопку яка відповідає за перехід на наступну сторінку
                     cy.get(`ul.pagination a`).contains('>').click();
                  }
               })
            }
         })
      }
   })
}

export function searchProductWithRecursion(productName) {
   cy.get('#filter_keyword')
      .type('i')
      .closest('form')
      .submit();

   cy.get('body').then(body => {
      //якщо в боді знаходимо елемент який відповідає за потрібний товар, реалізується це за допомогою вкладенох+ї умови .length > 0 бо якщо 
      //довжина цього елементу не нуль тобто таким чином можна зробити цей локатор булевим значенням якщо не 0 то це тру
      if (body.find(`a.productname[title="${productName}"]`).length > 0) {
         //тоді клікаємо по цьому товару
         cy.get(`a.productname[title="${productName}"]`).click();
      } else {
         //в іншому випадку клікаємо на кнопку яка відповідає за перехід на наступну сторінку
         cy.get(`ul.pagination a`).contains('>').click();
         //викликаємо цю ж функцію всередині її самої для того щоб якщо продукт не буде знайдений ця функція знов запустилася після переходу на 
         //наступну сторінку і шукала продукт знов, це дозволяє позбутися додаткових умов у попередньому варіанті функції без рекурсії
         searchProductWithRecursion(productName)
      }


   })
}