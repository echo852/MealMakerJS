const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers () {
     return this._courses.appetizers;
    },
    set appetizers (appetizers) {
      this._courses.appetizers = appetizers;
    },
    get mains () {
      return this._courses.mains;
    },
    set mains (mains) {
      this._courses.mains = mains;
    },
    get desserts () {
      return this._courses.desserts;
    },
    set desserts (desserts) {
      this._courses.desserts = desserts;
    },
    get courses () {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const index = Math.floor(Math.random() * dishes.length);
      return dishes[index];
    },
    generateRandomMeal () {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const finalCost = appetizer.price + main.price + dessert.price;
  
      return `Your appetizer is ${appetizer.name}, your main is ${main.name}, and your dessert is ${dessert.name}. Your meal will cost ${finalCost}`;
    }
  };
  
  menu.addDishToCourse('mains','spagetti',15);
  menu.addDishToCourse('mains','steak',20);
  menu.addDishToCourse('mains','pizza',12);
  
  menu.addDishToCourse('appetizers','chicken wings',10);
  menu.addDishToCourse('appetizers','crab cakes',15);
  menu.addDishToCourse('appetizers','scallops',10);
  
  menu.addDishToCourse('desserts','cake',8);
  menu.addDishToCourse('desserts','ice cream',5);
  menu.addDishToCourse('desserts','brownies',8);
  
  //console.log(menu.getRandomDishFromCourse('desserts'));
  
  let meal = menu.generateRandomMeal();
  console.log(meal);