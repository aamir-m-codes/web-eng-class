function myfunc(){
    console.log("a")
}

async function myfunc2(){
    console.log("b")
}

function myfunc3(){
    console.log("c")
}

myfunc()
// myfunc2()
setTimeout(await myfunc2, 3000)
myfunc3()
