// const observable = new rxjs.Observable(myStream => {
//     myStream.next(1);
//     myStream.next(2);
//     myStream.next("hhh");
// })

// observable.subscribe(x => console.log(x));

// observable.subscribe({
//     next: (value) => console.log("Next value:", value),
//     error: (err) => console.log("No, Ew Binod", err),
//     complete: () => console.log("Infinity is Done - Yay ☺ "),
// });



// const observable = new rxjs.Observable(myStream => {
//     myStream.next(1);
//     myStream.next(2);
//     myStream.error('err occured');
//     myStream.next(3);
//     setTimeout(() => {
//         myStream.next(4);
//         myStream.complete();
//     }, 1000);
// });

// console.log('just before subscribe --');
// observable.subscribe({
//     next(x) { console.log('got value ' + x); },
//     error(err) { console.error('something wrong: ' + err); },
//     complete() { console.log('done'); }
// });
// console.log('just after subscribe --');


// const observable = rxjs.from([10, 20, 30]);
// const observable = rxjs.of(1, 2, 3, 4, 5, 6);

// rxjs.range(1, 1000) // [1,2...,1000]
//     .pipe(rxjs.map(x => x * 10))
//     .subscribe(
//         next => console.log('next:', next),
//         err => console.log('error:', err),
//         () => console.log('the end'),
//     );

// const observable = rxjs.of('water', 'milk')
//     .pipe(rxjs.map(item => item === 'water' ? 'wine' : item))
//     .subscribe(result => console.log(result));

// observable.subscribe(x => console.log(x));



// const age$ = rxjs.of(27, 25, 29);
// const name$ = rxjs.of('Yan', 'Yawn', 'Yoyo');
// rxjs.zip(age$, name$)
//     .pipe(
//         rxjs.map(([age, name]) => ({ age, name }))
//     )
//     .subscribe(x => console.log(x));


// document.addEventListener('click', () => console.log('Clicked!'));

// rxjs.fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

// const button = document.querySelector('#button');
// rxjs.fromEvent(button, "click")
//     .pipe(rxjs.bufferCount(3)) // wait till you get 3 "pieces" of data from source
//     .subscribe(() => {
//         console.log(Math.random());
//     });

// const clicks = rxjs.fromEvent(button, "click");
// const result = clicks.pipe(rxjs.debounceTime(1000));
// result.subscribe(x => console.log(x))


// const div = document.createElement('div');
// div.style.cssText = 'width: 200px; height: 200px; background: #09c;';
// document.body.appendChild(div);

// const clicks = rxjs.fromEvent(document, 'click');
// const clicksOnDivs = clicks.pipe(rxjs.filter(ev => (ev.target).tagName === 'DIV'));
// clicksOnDivs.subscribe(x => console.log(x));


// function doStuff() {
//     return new Promise((resolve, reject) => {
//         resolve('success');
//         reject('error occured');
//     });
// }

// async function tryIt() {
//     try {
//         const msg = await doStuff();
//         console.log(msg);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }


// function doStuff2() {
//     return new rxjs.Observable(myStream => {
//         myStream.next('success');
//         myStream.complete();
//     });
// }

// function tryIt2() {
//     doStuff2().subscribe({
//         next(msg) { console.log(msg) },
//         error(err) { console.error(err) },
//         complete() { console.log('done') },
//     });
// }


// const myDatabase = new MyDatabase();
// rxjs.Observable
//     .defer(() => myDatabase.connect()) // returns a promise, promise do something one time...
//     .retry(3)
//     .subscribe();



// rxjs.ajax
//     .ajax('https://api.github.com/users?per_page=5')
//     .subscribe(
//         res => console.log(res),
//         err => console.error(err)
//     );



const obs$ = ajax.getJSON('https://api.github.com/users?per_page=5')
    .pipe(
        rxjs.map(userResponse => console.log('users: ', userResponse)),
        rxjs.catchError(error => {
            console.log('error: ', error);
            return rxjs.of(error);
        })
    );

obs$.subscribe({
    next: value => console.log(value),
    error: err => console.log(err)
});