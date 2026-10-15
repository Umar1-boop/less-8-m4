// // 3. Macrotask
// setTimeout(() => {
//     console.log(2);  
// }, 0)


// console.log(1);

// // 1. стнхроный код
// const someFn = (a, b) => {
//     return  a + b
// }

// someFn(1, 2)

// // 2. Microtask
// const p = new Promise((resolve, reject) => {
//     if(Math.random < 0.5){
//         resolve('up 50%')
//     }else{
//         reject('down 50%')
//     }
// })

// .then((res) => console.log(res))
// .catch((err) => console.log(err))

// console.log(4);







//  asyns await

// const renderCharts = (charts, container) => {

//     return charts.forEach(cart => {
//         const card = document.getElementById('div')
//         card.className = 'card'
//         const products = cart.products.map((products) => {
//             return`
//                 <li>
//                     <h3>${product.title}</h3>
//                     <span><strong>Кол-во: </strong>${product.quantity}<span>
//                     <img src="${product.thumbnail}" alt="${product.title}"/>
//                     <b>$${product.price}</b>
//                 </li>    
//             `
//         }).join(' ')
//         card.innerHTML = `
//             <span><strong></strong></span>
//             <span><strong></strong></span>
//             <span><strong></strong></span>
//             <span><strong></strong></span>
//         `
//     })    
// }





const renderCharts = (charts, container) => {
    return charts.forEach(cart => {
        const card = document.createElement('div');
        card.className = 'card';
        const products = cart.products.map((product) => {
            return `
                <li>
                    <h3>${product.title}</h3>
                    <span><strong>Кол-во: </strong>${product.quantity}</span>
                    <img src="${product.thumbnail}" alt="${product.title}"/>
                    <b>$${product.price}</b>
                </li>
            `
        }).join(' ');
        card.innerHTML = `
            <span><strong>Товары в корзине:</strong> пользователя ${cart.userId}</span>
            <span><strong>Цена без скидки:</strong>${cart.total}</span>
            <span><strong>Цена cо скидкой:</strong>${cart.discountedTotal}</span>
            <span><strong>Кол-во продуктов:</strong>${cart.totalQuantity}</span>
            <h4>Товары:</h4>
                <ul>
                    ${products}
                </ul>
        `;
        container.append(card);
    });


}

const getCharst = async () => {
    const container = document.getElementById('container')
    try {
        const res = await fetch('https://dummyjson.com/carts')
        const response = await res.json()
        renderCharts(response.carts, container);
        
    } catch (err) {
        console.error(err);
    }
}

getCharst()

// const renderCharts = (users = []) => {
//     const app = document.getElementById('app')

//     return users.forEach((user) => {
//         const box = document.createElement('div')
//         box.className = 'box'

//         box.innerHTML = (`
//             <h2>${user.title}</h2>
//             <span><b>email</b>${chart.price}</span>
//             <span><b>name-</b>${user.name}</span>
//             <span><b>number-</b>${user.phone} </span>   
//         `)
//         app.appendChild(box)
//     })
// }