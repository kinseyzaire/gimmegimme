var inputs = $("#user_name, #user_password");

var validateInputs = function(inputs) {
  var validForm = true;
  inputs.each(function(index) {
    var input = $(this);
    if (!input.val() || (input.type === "radio" && !input.is(':checked'))) {
        $("#clickmeclickme1").attr("disabled", "disabled");
        validForm = false;
    }
  });
  return validForm;
}

inputs.change(function() {
  if (validateInputs(inputs)) {
    $("#clickmeclickme1").removeAttr("disabled");
  }
});
