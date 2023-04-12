document.querySelector(".form-grades").addEventListener("submit", (e)=>{
    e.preventDefault()

    const grade = document.querySelector("#input-grade").value

    if (grade < 0 || grade > 100) {
        alert("Grade must be between 0-100")
    }else if (grade > 79) {
        document.querySelector("#marks").innerHTML = "You scored an A"
    }else if (grade < 79 && grade >= 60) {
        document.querySelector("#marks").innerHTML = "You scored a B"
    }else if (grade >= 49 && grade <=59) {
        document.querySelector("#marks").innerHTML = "You scored a C"
    }else if (grade >= 40 && grade <= 49) {
        document.querySelector("#marks").innerHTML = "You scored a D"
    }else if (grade < 40) {
        document.querySelector("#marks").innerHTML = "You scored an E"
    }

 
})
// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
document.querySelector(".form-speed").addEventListener("submit", (e)=>{
    e.preventDefault()
       // toy problem 2 (speed-limit)
 
       const speed = document.querySelector("#input-speed").value

       if (speed <= 70) {
           document.querySelector("#demerit").innerHTML = "Ok"
       }else if (speed > 70) {
        let x = (speed-70)/5
        let l = Math.ceil(x)
        document.querySelector("#demerit").innerHTML = `You have ${l} demerit points`
       }
})