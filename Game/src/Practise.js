/*
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// Promise 
const mypromise = new Promise((resolve, reject) => {
    if(false){
        resolve('success');
    } else {
        reject('failure');
}
});

mypromise.then(
    (value)  => {
        console.log(value);
    },
    (error) => {
        console.log(error);
    }
);
*/
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        //   console.log(data);
        data.forEach(element => {
            console.log(element.name)
        });
    } catch (error) {
        console.error(error);
    }
}
console.log('Before Fetching')
fetchData();
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')
console.log('After Fetching')





