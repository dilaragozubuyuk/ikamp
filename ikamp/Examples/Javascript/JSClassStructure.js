var Polygon = function(height, width){
    this.height = height;
    this.width = width;
};

Polygon.prototype.sayHi = function(){
    console.log("hi mike" + this.height + ' ' + this.width);
}

var polygon = new Polygon(10, 20);
polygon.sayHi();


 var teacher = function(name, age, gender, interests, subject){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.subject = subject;
    this.lessons = [];
  }

teacher.prototype.setName = function(firstname, lastname){
    this.name[0] = firstname;
    this.name[1] = lastname;
}

teacher.prototype.bio = function(){
    return this.name[0] + " is " + this.age + " years old.They like " + this.interests ;    
}

teacher.prototype.greeting = function(){	
     
     return "Hello my name is  " + this.getGender() + " " + this.name[1] + " and I teach " + this.subject;    
}
teacher.prototype.getGender = function(){
    var prefix;	
    if (this.gender == "female")
	prefix = "Ms.";
    else 
	prefix = "Mr.";
    return prefix;
   //return gender == 'female' ? 'Ms' : 'Mr'
}
teacher.prototype.getLesson = function(){	
     
      this.lessons.forEach(function(element){
          console.log("id :" + element.id + "  name  " +element.name);     	
      });
}
teacher.prototype.setLesson = function(id2, semester2, name2){	
     
   var lesson = {
			id: id2,
			semester: semester2,
			name: name2
                    }
   this.lessons.push(lesson);
}


var teacher = new teacher(["Gizem", "Sevinç"], 16, "female", "reading", "JS" );
//teacher.setName("Gizem", "Sevinç");
teacher.setLesson(101,"fall","php");
teacher.setLesson(102,"fall","JS");
console.log(teacher.bio());
console.log(teacher.greeting());
teacher.getLesson();



