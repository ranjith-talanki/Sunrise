import { client, categoriesService } from './services'



const addCategories = () => {
    const csv = require('csvtojson');
csv()
.fromFile(process.cwd() + '/data/categories.csv')
.then((categories)=>{
    categories.forEach(element => {
        console.log(element);
      const updateRequest = {
          uri: categoriesService.build(),
          method: 'POST',
          body: element
      }
  
      client.execute(updateRequest)
        //   .then(result => console.log(result))
        //   .catch(error => console.log(error.body.errors));
    });
})
  
}

addCategories();
