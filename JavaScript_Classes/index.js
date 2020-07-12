class Person{
    constructor(_name, _gender, _greeting){
        console.log(`We just created a Person`)
        this.name = _name
        this.gender = _gender
        this.greeting = _greeting
    }

    get Info(){
        console.log(`This is a person with name ${this.name} and ${this.gender} greets ${this.greeting}`)
    }

    set Info([_name, _gender, _greeting]){
        this.name = _name
        this.gender = _gender
        this.greeting = _greeting

        if(this.gender === "male"){
            this.gender = "he"
        }else if(this.gender === "female"){
            this.gender = "sheeee"
        }else{
            this.gender = "Gender not specified"
        }

        if(this.greeting === ""){
            this.greeting = "Evening"
        }
    }
}

let info = new Person("Michael", "he", "Good Morning")
info.Info
info.Info = ["John", "female", "Good Afternoon" ]
info.Info
info.Info = [ "James", "", ""]
info.Info
