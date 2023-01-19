function sendmail() {
    var items = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneno: document.getElementById("phoneno").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_5qftt1m";
    const templateID = "template_ae2s5bz";

    emailjs.send(serviceID, templateID, items)

        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("phoneno").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Your Message has been sent successfully");
            })
}