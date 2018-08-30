import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number = 0;
  total_seconds: number = 10 * 1;
  c_minutes: number = this.total_seconds / 60;
  c_seconds: number = this.total_seconds % 60;
  counter: number = 15;
  intervalId: number;
  toggleStart: boolean = true;
  toggleBody: boolean = false;
  toggleResult: boolean = false;
  len: number;
  filterData: any[] = [];
  sel:boolean=false;

  constructor() {
    this.sel=false
   }

  subjects = [
    { title: "Math" },
    { title: "English" },
    { title: "Logic" }
  ];
  questions = [
    {
      title: "2+2 ?",
      sub: "Math",
      options: [
        { title: "3", isCorrect: "false" },
        { title: "4", isCorrect: "true" },
        { title: "5", isCorrect: "false" },
        { title: "2", isCorrect: "false" }
      ]
    },
    {
      title: "2*3 ?",
      sub: "Math",
      options: [
        { title: "7", isCorrect: "false" },
        { title: "1", isCorrect: "false" },
        { title: "9", isCorrect: "false" },
        { title: "6", isCorrect: "true" }
      ]
    },
    {
      title: "8/1 ?",
      sub: "Math",
      options: [
        { title: "0", isCorrect: "false" },
        { title: "8", isCorrect: "true" },
        { title: "12", isCorrect: "false" },
        { title: "16", isCorrect: "false" }
      ]
    },
    {
      title: "A for ?",
      sub: "English",
      options: [
        { title: "angle", isCorrect: "false" },
        { title: "apple", isCorrect: "true" },
        { title: "anaconda", isCorrect: "false" },
        { title: "ashish", isCorrect: "false" }
      ]

    },

    {
      title: "B for ?",
      sub: "English",
      options: [
        { title: "banana", isCorrect: "true" },
        { title: "bislari", isCorrect: "false" },
        { title: "bingo", isCorrect: "false" },
        { title: "bombay", isCorrect: "false" }
      ]

    },
    {
      title: "U for ?",
      sub: "English",
      options: [
        { title: "uncle", isCorrect: "false" },
        { title: "umbrella", isCorrect: "true" },
        { title: "unique", isCorrect: "false" },
        { title: "unite", isCorrect: "false" }
      ]

    },
    {
      title: "2 means ?",
      sub: "Logic",
      options: [
        { title: "||", isCorrect: "false" },
        { title: "two", isCorrect: "true" },
        { title: "2", isCorrect: "false" },
        { title: "too", isCorrect: "false" }
      ]

    },

    {
      title: "aaj - __ ?",
      sub: "Logic",
      options: [
        { title: "avi", isCorrect: "false" },
        { title: "tak", isCorrect: "false" },
        { title: "se", isCorrect: "false" },
        { title: "kal", isCorrect: "true" }
      ]

    },
    {
      title: "bareli stands for ?",
      sub: "Logic",
      options: [
        { title: "jhumka", isCorrect: "false" },
        { title: "place", isCorrect: "true" },
        { title: "up", isCorrect: "false" },
        { title: "person", isCorrect: "false" }
      ]

    }
  ];

  ngOnInit() {
    this.len = this.questions.length;
  }

  suffleQuestion() {
    let currentIndex = this.filterData.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.filterData[currentIndex];
      this.filterData[currentIndex] = this.filterData[randomIndex];
      this.filterData[randomIndex] = temporaryValue;
    }
    return this.filterData;
  }
  suffleOption() {
    for (let i = 0; i < this.filterData.length; i++) {
      let optionLength = this.filterData[i].options.length, temporaryValue, randomIndex;

      while (0 !== optionLength) {
        randomIndex = Math.floor(Math.random() * optionLength);
        optionLength -= 1;

        temporaryValue = this.filterData[i].options[optionLength];
        this.filterData[i].options[optionLength] = this.filterData[i].options[randomIndex];
        this.filterData[i].options[randomIndex] = temporaryValue;
      }

    }
    return this.filterData;
  }


  checkTime() {
    // let x= "Time left "+ this.c_minutes + ": " +  this.c_seconds ;
    // this.total_seconds = this.total_seconds - 1;
    // this.c_minutes=this.total_seconds/60;
    // this.c_seconds=this.total_seconds%60;
    //console.log(this.total_seconds);
    this.counter--;
    if (this.counter == 0) {
      this.Submit();
      clearInterval(this.intervalId);
      this.toggleBody = false;
    }
  }

  Start() {
    if(this.sel){
    this.intervalId = setInterval(this.checkTime.bind(this), 1000);
    this.toggleStart = false;
    this.toggleBody = true;
    this.toggleResult = false;}
  }

  Submit() {
    this.toggleBody = false;
    this.toggleResult = true;

  }

  check(event, item) {
    if (item.isCorrect == "true") {
      this.count += 1;
    }
  }

  // dropdown selction and filter
  filterForSubject(item) {
    if(item==0)
    this.sel=false
    else{
    this.filterData=[]
    this.sel=true;
    for (let i = 0; i < this.len; i++) {
      if (item == this.questions[i].sub) {
        this.filterData.push(this.questions[i])
      }
    }
    this.suffleQuestion();
    this.suffleOption();
  }
  }
playAgain(){
  window.location.reload();

}

}

