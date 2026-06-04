let send = () => {
    let input1 = document.getElementById('input1')
    let btn1 = document.getElementById('btn1')
     
    if(input1.value === ""){
        alert("Please enter something")
    }
    else{

        
        
        let con_list = document.getElementById('container-list')
        
        let li = document.createElement("li")
        
        li.innerHTML = input1.value;
        con_list.append(li)
    }
}

let func1 = () => {

}


let btn2 = document.getElementById('btn2').addEventListener('click', function (e){console.log(e)})
