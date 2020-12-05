const validate = () => {

    const form = document.sops;

    const sname = form.sname;
    const gname = form.gname;
    const dob = form.date;
    const job = form.job;
    const place = form.place;
    const category = form.category;
    const Regex = /^[a-zA-Z]+$/;

    if (!sname.value.match(Regex)) {
        sname.style.border = "2px solid red";
        return false;
    }
    if (!gname.value.match(Regex)) {
        gname.style.border = "2px solid red";
        return false;
    }
    if (dob.value == "") {
        dob.style.border = "2px solid red";
        return false;
    }
    if (!job.value.match(Regex)) {
        job.style.border = "2px solid red";
        return false;
    }
    if (!place.value.match(Regex)) {
        place.style.border = "2px solid red";
        return false;
    }
    if (!category.value.match(Regex)) {
        category.style.border = "2px solid red";
        return false;
    }
    form.requestSubmit();
}

let submitButton = document.querySelector("#registr");
submitButton.addEventListener("click", validate);