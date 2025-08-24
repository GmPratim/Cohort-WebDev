// Get input fields
const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");

// Get display spans
const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");

// Function to update preview
function updatePreview() {
  nameDisplay.textContent = nameInput.value.trim() || "Not provided";
  jobDisplay.textContent = jobInput.value.trim() || "Not provided";
  ageDisplay.textContent = ageInput.value.trim() || "Not provided";
  bioDisplay.textContent = bioInput.value.trim() || "Not provided";
}

// Add real-time event listeners
nameInput.addEventListener("input", updatePreview);
jobInput.addEventListener("input", updatePreview);
ageInput.addEventListener("input", updatePreview);
bioInput.addEventListener("input", updatePreview);
