// async function func(){
//     let response = await fetch('C:\Users\LAB PC\Desktop\web-eng-morn\21-may\js\api.js')
//     console.log(response)
// }

fetch('https://themealdb.com/api/json/v1/1/categories.php').then((res)=>{
    let data = res.json();
    return data;
}).then((data)=>{
    console.log(data.categories[0].strCategory)
})
.catch((err)=>{
    console.log(err)
})

// func()