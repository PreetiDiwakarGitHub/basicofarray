// function naturalnumber(n){
//     let i=0;
//     while(i<n){
//         i=i+1;
//         console.log(i);
//     }
    
// }
// console.log(naturalnumber(5));


// question 2  \\\\\\\\\\\\\\\\

// function sumevennumber(){
//     let i=0;
//     let c=0;
//     while(c<15){
//         if(i%2==0){
//             c=c+1;
//             console.log(i);
//         }
//         i=i+1
//     }
// }
// sumevennumber();

// question  3

// function sum(){
//     let i=2;
//     let sum=0;
//     while(i<1000){
//         if(i%2==0){
//             sum=sum+i;
//             console.log(i);
//         }
//         i=i+1;
//     }
//    console.log("sum of all number  = " + sum);
// }
// sum();


// question  4

// function divisible(){
//     let i=0;
//     while(i<=100){
//         if(i%7==0){
//             console.log(i);
//         }
//         i=i+7;
//     }
// }
//  divisible();

// question   5

// function product(n){
//     let i=1;
//     let p=1;
//     while(i<=n){
//         p=p*i;
//         console.log(i);
//         i=i+1;
//     }
//     console.log("peoduct all number", p);
// }
// console.log(product(5));


// question  6

// function evennumber(num1,num2){
//     while(num1<=num2){
//         if(num1%7==0){
//             console.log(num1);
//         }
//         num1=num1+1;
//     }
// }
// console.log(evennumber(7,70));

// question  7\\\\\\\\\\

// function sumofnumber(num){
//     let sum=0;
//     let number=[ ];
//     for(let i=1; i<=num; i++){
//         if((i**2)%3==0){
//             sum=sum+i;
//         }
        
//     }
//     return(sum);
// }
// console.log(sumofnumber(5));


// question   8 \\\\\\\\\\

// function seriessum(n){
//     let sum=0;
//     let i=1;
//     while(i<=n){
//         sum=sum + 1/i;
//         i=i+1;
//     }
//     return (sum);
// }
// console.log(seriessum(5))

// question  9\\\\\\\\\\\\

// function number(n){
//     let num=[ ];
//     let i=0;
//     while(i<=n){
//         num=num+i;
//         i=i+1;
//     }
//     return(num);
// }
// console.log(number(5));

// question  10\\\\\\\\\\\\

// function divisible(b,p,q){
//     let number = [ ];
//     for( let a=1; a<=b; a++){
//         if(a%p==0 && a%q!=0){
//             number += a;
//         }
//     } 
//     return number;
// }
// let digit = divisible(10,2,3);
// console.log(digit);

// question 11; \\\\\\\\\\\\\

// function sumdigit(n){
//     let sum=0;
//     while(n>0){
//         let a= n%10
//         sum=sum+a;
//         n=parseInt(n/10);
//     }
//     return (sum);
// }
// console.log(sumdigit(123));


// question 12 \\\\\\\\\\\\\

// function revers(n){
//     let rev=0;
//     while(n>0){
//         let a=n%10;
//         rev=rev*10+a;
//         n=parseInt(n/10);
//     }
//     return (rev);

// }
// console.log(revers(123));

// question   13   \\\\\\\\\\

// function factor(n){
//     let a=[ ];
//     let i=0;
//     while(i<=n){
//         if(n%i==0){
//             a=a+i;
//         }
//         i=i+1;
//     }
//     return(a);
// }
// console.log(factor(6));

// question  14 \\\\\\\\\\\


// function primeornot(number){
//     let i=1;
//     let c=0;
//     while(i<=number){
//         if(number%i==0){
//             c=c+1;
//         }
//         i=i+1;
//     }
//     if(c==2){
//         return("Yes");
//     }
//     else{
//         return("No");
//     }
    
// }
// console.log(primeornot(5));

// question  15 \\\\\\\\\\\\\


// function perfectornot(number){
//     let i=1;
//     let sum=0;
//     while(i<number){
//         if(number%i==0){
//             sum=sum+i;
//         }
//         i=i+1;
//     }
//     if(sum==number){
//         return ("Yes");
//     }
//     else{
//         return ("No");
//     }
// }
// console.log(perfectornot(6))


// question   16    \\\\\\\\\\\\\\\

// function primenumber(n){
//     let i=1;
//     let m=[ ];
//     while(i<=n){
//         let j=1;
//         let c=0;
//         while(j<=i){
//             if(i%j==0){
//                 c=c+1;
//             }
//             j=j+1;
//         }
//         if(c==2){
//             m=m+i;
//         }
//         i=i+1;
//     }
//     return(m);
// }
// console.log(primenumber(5));

// question  17 \\\\\\\\\\\\\\\

// function perfectnumber(n){
//     let i=1;
//     let num=[ ];
//     while(i<=n){
//         let sum=0;
//         let j=1;
//         while(j<i){
//             if(j%i==0){
//                 sum=sum+j;
//             }
//             j=j+1;                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//         }
//         if(sum==i){
//             num=num+i;
//         }
//         i=i+1;
//     }
//     return (num);
// }
// console.log(perfectnumber(10));

// question  18  \\\\\\\\\\\\\\\\\\\


// function Armstrong(n){
//     let a=n;
//     let c=0;
//     while(a>0){
//         let b=a%10;
//         c=c+1;
//         a=a/10;
//     }
//     let sum=0;
//     let b=n;
//     while(n>0){
//         let d=n%10;
//         sum=sum+d**c;
//         n=n/10;           xxxxxxxxxxxxxxxxxxxxxx
//     }
//     if(sum==n){
//         return("Yes");
//     }
//     else{
//         return("No");
//     }
    

// }
// console.log(Armstrong(153));


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/PreetiDiwakarGitHub/loopquestion.git
// git push -u origin main


console.log(10+20+"23");