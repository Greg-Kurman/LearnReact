'use strict';


const req = new Promise((resolve, reject) => {

    console.log('запрос данных...');

    setTimeout(() => {

        console.log('получение данных...');

        const product = {
            name: 'TV',
            price: 500
        };

        resolve(product);

    }, 2000);

});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 3000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(() => {
    console.log("oshibochka");
}).finally(() => {
    console.log('konec coda');
});



    const test2 = time => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, time);
        }).finally(() => {
            console.log("conec");
        });
    };


    Promise.all([test2(1000), test2(12323)]).then(() => {
        console.log("all");
    });

    Promise.race([test2(1000), test2(3000)]).then(() => {
        console.log("race");
    });