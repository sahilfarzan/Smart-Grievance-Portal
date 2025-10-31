const stateDistrictMap = {
  Bihar: ["Patna", "Gaya", "Bhagalpur"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"]
};

const stateSelect = document.getElementById("state");
const districtSelect = document.getElementById("district");
const form = document.getElementById("complaintForm");
const output = document.getElementById("output");

stateSelect.addEventListener("change", () => {
  const selectedState = stateSelect.value;
  districtSelect.innerHTML = '<option value="">--Select District--</option>';

  if (stateDistrictMap[selectedState]) {
    stateDistrictMap[selectedState].forEach(district => {
      const option = document.createElement("option");
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const state = stateSelect.value;
  const district = districtSelect.value;
  const message = document.getElementById("message").value;

  output.innerHTML = `
    ✅ Complaint Submitted Successfully!<br>
    <strong>Name:</strong> ${name}<br>
    <strong>State:</strong> ${state}<br>
    <strong>District:</strong> ${district}<br>
    <strong>Issue:</strong> ${message}
  `;

  form.reset();
  districtSelect.innerHTML = '<option value="">--Select District--</option>';
});
