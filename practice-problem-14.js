/*
সুবা সারাদিন tiktok দেখে সময় নষ্ট করে, কোন পড়াশোনা করে না. সুবার বাবা সুবার এই সময় অপচয় নিয়ে অনেক দুশ্চিন্তায় আছেন. সুবার বাবা এমন একটি ফাংশন বানাতে চাচ্ছেন, যাতে সুবা দৈনিক কত সময় ভিডিও দেখে সময় অপচয় করে, সেটা তিনি সুন্দরভাবে দেখতে পারবেন.

তোমার কাজ হচ্ছে সুবার বাবা কে calculateWtachTime() নামে একটা ফাংশন বানিয়ে দেওয়া যেটা একটা array ইনপুট নিবে. array তে সুবার ভিডিও দেখার সময়, সেকেন্ড (Number) আকারে স্টোর থাকবে. ফাংশনটি array থেকে টোটাল সময় বের করে সেটাকে ঘন্টা, মিনিট ও সেকেন্ডে কনভার্ট করে একটা অবজেক্ট হিসেবে রিটার্ন করবে.

-----> 
    * input: ফাংশনটি ইনপুট নেবে একটি array কে এবং array এর এলিমেন্ট গুলো হবে Number type (watch times in seconed)
    * output: ফাংশনটি অ্যারেতে থাকা সবগুলো সময়কে ক্যালকুলেট করে সেটাকে ঘন্টা, মিনিট এবং সেকেন্ডে কনভার্ট করবে. এবং ফাংশনটি একটি অবজেক্ট রিটার্ন করবে, অবজেক্ট দেখতে হবে এরকম {hours: 14, minutes: 46, seconed: 3} 
    
    * Note: তোমাকে অবশ্যই আউটপুট আর রিটার্ন করতে হবে, console.log() করলে হবে না.
    * CHALLANGE: array এলিমেন্ট গুলো যদি Number না হয় তাহলে "invalid" রিটার্ন করবে.
*/
// function calculateWtachTime(totalTimes){
//     // user input validation
//     if(!Array.isArray(totalTimes)){
//         return 'invalid';
//     }
//     for(elements of totalTimes){
//         if(typeof elements !== 'number'){
//             return 'invalid';
//         }
//     }

//     //calculating total seconeds
//     let totalSeconeds = 0;
//     for(let values of totalTimes){
//         totalSeconeds += values;
//     }
//     // primary task
//     let hours = Math.floor(totalSeconeds / 3600);
//     let remainingSeconeds = totalSeconeds % 3600;
//     let minute = Math.floor(remainingSeconeds / 60);
//     let seconed = remainingSeconeds % 60;

//     return {hours: hours, minutes: minute, seconed: seconed};
// }

// let arrayElm = [120, 233, 4555, 777]
// console.log(calculateWtachTime(arrayElm));
