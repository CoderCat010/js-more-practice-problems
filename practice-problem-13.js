/*
তোমার কাজ হলো validEmail() নামে একটি ফাংশন তৈরি করা, যা একটি ইমেইল ইনপুট নেবে এবং সেটি সঠিক নাকি ভুল তা যাচাই করে একটি বুলিয়ান ভ্যালু (true/false) কে রিটার্ন করবে.

-----> ইমেইল ভ্যালিড হওয়ার শর্তগুলো হলো: 
- ইমেইল এর শুরুতে "./-/_/+/@" এই স্পেশাল ক্যারেক্টার গুলো থাকা যাবে না. 
- ইমেইলের মাঝখানে @ থাকতে হবে, ইমেইলে কোন স্পেস থাকা যাবে না. 
- ইমেইলের শেষে .com থাকতে হবে. 
উপরের এই শর্তগুলো পূরণ হলেই সে আউটপুট হিসেবে true রিটার্ন করবে, না হলে false আউটপুট হিসেবে রিটার্ন করবে.
    * input: তোমার ফাংশন একটি ইমেইল ইনপুট নেবে যা একটি স্ট্রিং.
    * output: তোমার ফাংশনটি একটি বুলিয়ান ভ্যালু (true/false) কে রিটার্ন করবে. অবশ্যই তোমাকে কিন্তু বুলিয়ান ভালই রিটার্ন করতে হবে 
    
    * Note: তোমাকে অবশ্যই আউটপুট টা রিটার্ন করতে হবে console.log() করলে হবে না.
    * CHALLANGE: যদি ইনপুটটি স্ট্রিং না হয় তাহলে "invalid" স্ট্রিং রিটার্ন করবে.
*/
// function validEmail(input){
//     //user input validation
//     if(typeof input !== 'string'){
//         return 'invalid'
//     }

//     // conditions
//     let condition1 = ['.', '-', '_', '+', '@'];
//     let condition2 = '@';
//     let condition3 = ' ';
//     let condition4 = '.com';

//     if(condition1.includes(input[0])){
//         return false
//     }
//     if(!input.includes(condition2)){
//         return false
//     }
//     if(input.includes(condition3)){
//         return false
//     }
//     if(!input.endsWith(condition4)){
//         return false
//     }
//     return true;
// }
// console.log(validEmail("jdjd@.com"));
