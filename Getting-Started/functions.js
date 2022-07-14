function a(){
    let a_a = 10
    var a_b = 20
    return b()
}

function b(){
    check = true
    while (check)
    {
        let b_a = 10
        var b_b = 20
        check = false
    }
    //console.log(b_a)
    console.log(b_b)
    if(true){
        if(true){
            if(true){
                var x = 15
            }
        }
    }
    console.log(x)
    return "something..."
}

let x = a()
//console.log(a_a, a_b)
//console.log(b_a, b_b)

alert()
window.alert()

console.log("global")