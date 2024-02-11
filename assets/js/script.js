function getData() {
    let name = document.getElementById("name").value
    console.log(name)
    let email = document.getElementById("email").value
    console.log(email)
    let phone = document.getElementById("phone").value
    console.log(phone)
    let subject = document.getElementById("subject").value
    console.log(subject)
    let message = document.getElementById("message").value
    console.log(message)

    if (name == "" || email == "" || phone == "" || subject == "" || message == "") {
        return alert("FORM CANNOT BE EMPTY!")
    } else {
        const emailDest = "hi.dandi9@gmail.com"
        let a = document.createElement("a")
        a.href = `mailto:${emailDest}?subject=${subject}&body = Halo bang nama saya, ${name}, saya ingin ${message}. Bisakah anda menghubungi saya ${phone}`
        a.click()
    }

}

