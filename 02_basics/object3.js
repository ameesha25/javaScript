const course={
    coursename:"Js in hindi",
    price:'999',
    courseInstructor:"Hitesh"
}

// course.courseInstructor;
// const{courseInstructor}=course;
// console.log(courseInstructor);

            // o r

const{courseInstructor:instructor}=course;

console.log(instructor);

                    //JSON API Intro//
// {
//     "name":"hitesh",
//     "course name":JS in hindi,
//     "price ":"free"
// }
