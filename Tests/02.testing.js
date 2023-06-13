let i = 1;
function addNewVehicle() {
    // const target = document.querySelectorAll(".addVehicle");
    i++;
    const content = `
    <h3 class="mb-3">Vehicle ${i}:</h3>
    <div class="mb-3">
        <label for="type" class="form-label">Type</label> <input type="text"
        class="form-control" id="type" aria-describedby="name" name="type"
        required />
</div>
<div class="mb-3">
    <label for="company" class="form-label">Company</label> <input
        type="text" class="form-control" id="company"
        aria-describedby="name" name="company" required />
</div>`;
    // const place = target[target.length-1];
    // place.innerHTML = content;
    // place.insertAdjacentHTML("afterend","<div class='addVehicle'></div>");
    console.log(content);
}

addNewVehicle()
addNewVehicle()
