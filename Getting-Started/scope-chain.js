let x = 10
function a() {
    let y = 20
    function b() {
        let z
        z = 30
        console.log(x)
    }
    b()
}
a()
// console.log(z)
console.log("-------")

a1()

function a1(){
    let v1 = 10
    a2()
    function a2(){
        let v2 = 20
        a3()
        function a3() {
            console.log(v1)
        }
    }
}

