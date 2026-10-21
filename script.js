// Handle Form Submission
document.getElementById("appointmentForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh

  // Fetch input values
  var patientId = document.getElementById("patientId").value;
  var patientName = document.getElementById("patientName").value;
  var department = document.getElementById("department").value;
  var appointmentDate = document.getElementById("appointmentDate").value;

  // Simple validation
  if (!patientId || !patientName || !department || !appointmentDate) {
    alert("Please fill in all fields.");
    return;
  }

  // Display details in the table
  document.getElementById("displayId").innerText = patientId;
  document.getElementById("displayName").innerText = patientName;
  document.getElementById("displayDept").innerText = department;
  document.getElementById("displayDate").innerText = appointmentDate;

  // Show success message and table
  var resultMessage = document.getElementById("resultMessage");
  resultMessage.className = "result success";
  resultMessage.innerText = "Appointment booked successfully for " + patientName + "!";
  resultMessage.style.display = "block";

  document.getElementById("appointmentDetails").style.display = "block";

  // Optional: Pop-up alert
  alert("Appointment submitted successfully!");
});

// Handle Form Reset
document.getElementById("appointmentForm").addEventListener("reset", function() {
  // Hide result message and details table when reset is clicked
  document.getElementById("resultMessage").style.display = "none";
  document.getElementById("appointmentDetails").style.display = "none";

  alert("Form has been reset.");
});
