const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbygFytYDoaNy4RvkH_cn38uZLT8Lw8BiTxNaSkb_UywtAqEtx74VbOP40iqgXGl0WhJMg/exec";

const form = document.getElementById("rsvpForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    submitForm();
});

async function submitForm() {

    const fullname = document.getElementById("fullname").value.trim();

    const status = document.querySelector(
        'input[name="status"]:checked'
    ).value;

    const data = {
        fullname: fullname,
        status: status
    };

    try {

        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify(data)
        });

        if (response.ok) {

            successMessage.style.display = "block";

            form.reset();

            document.querySelector(
                'input[value="Иә, міндетті түрде келемін"]'
            ).checked = true;

            successMessage.scrollIntoView({
                behavior: "smooth"
            });

        } else {

            alert("Қате пайда болды.");

        }

    } catch (err) {

        console.log(err);

        alert("Интернет байланысын тексеріңіз.");

    }

}
