/**
 * Mongoose Schema Methods for User model.
 */

const { userSchema } = require("../schema/index");

/**
 * Instance methods: These are the methods which are used to manipulate the individual document.
 */
userSchema.methods.getIfAdult = function() {
  return this.age > 18;
};



//this method is instance to check if the user has birthday today


userSchema.methods.findBirthday = function() {
  var userdob=this.dob;
  var userDD=userdob.getDate();
  var userMM=userdob.getMonth();
  var today=new Date();
  var todayDD=today.getDate();
  var todayMM=today.getMonth();
  if(userDD==todayDD && userMM==todayMM){
    return true;
  }
  return false;
};




/**
 * Static methods: These are the methods which are used to query the whole collection.
 * - Add a function property to schema.statics
 */
userSchema.statics.findByAge = function(age, callback) {
  this.find({ age: age }, callback);
};



userSchema.statics.findByBirthday = function(today, callback) {
  //console.log(`return dob.getDate() == ${today}.getDate() && ${dob}.getMonth() == ${today}.getMonth()`);
  this.find({dob:new RegExp(today.getMonth()+1+"-0"+today.getDate())}, callback);
};



/**
 * Static methods
 * - Call the Schema#static() function
 */
userSchema.static("findByLastName", function(lastname, callback) {
  this.find({ lastname: lastname }, callback);
});

/**
 * Virtual Methods:The virtual methods are not persisted to MongoDB.
 *  The method contains getters and setters which are used to combine the mongoose fields.
 */
userSchema.virtual("fullName").get(function() {
  return this.firstname + " " + this.lastname;
});
