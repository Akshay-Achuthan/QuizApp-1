// do you know me ?

var rs=require('readline-sync');

var username=rs.question("What is your name ? : ");

var score=0;

console.log("------------------------------");

console.log("Welcome to the game " + username);


console.log("------------------------------");

console.log("***************  Lets see how much you know me ? **************");

console.log("------------------------------");

var questions=[

{question:"What is my Name ? ",A : 'Abdul',B : 'Rahul',C : "Akshay",D : "Kiran",answer:"c"
},

{question:"What is my Hobby ? ",A : "Football",B : "cycling",C : "Music",D : "Body-Building",answer:"b"
},

{question:"What is my age ? ",A : "21",B : "23",C : "25",D : "24",answer:"d"
},

{question:"Which language do i love ? ",A : "Javascript",B : "Java",C : "Python",D : "C#",answer:"a"
},

{question:"Where do i live ? ",A : "Kerala",B : "Mumbai",C : "Banglore",D : "Chennai",answer:"b"
},

];

for(var i=0;i<questions.length;i++)
{

var n=i+1;

console.log(n+". "+questions[i].question);

console.log('\n'+"Select From : [a,b,c,d]");

console.log("------------------------------");

console.log('A :'+questions[i].A);
console.log('B :'+questions[i].B);
console.log('C :'+questions[i].C);
console.log('D :'+questions[i].D);

var answer=rs.question('\n'+"Answer : ");

console.log("------------------------------");

if(answer===questions[i].answer)
{
  console.log("you are right");
  score=score+1;
  console.log("your score is : " +score);
  console.log("------------------------------");
}
else
{
  console.log("oops ! you are wrong");
  console.log("your score is : " +score);
   console.log("------------------------------");
  console.log("Right answer was : " +questions[i].answer);
  console.log("------------------------------");
}

}


console.log("Final score : "+ score);