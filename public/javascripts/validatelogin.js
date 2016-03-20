var inputs = $("#user_name");

var validateInputs = function(inputs) {
  var validForm = true;
  inputs.each(function(index) {
    var input = $(this);
    if (!input.val() || (input.type === "radio" && !input.is(':checked'))) {
        $("#clickmeclickme2").attr("disabled", "disabled");
        validForm = false;
    }
  });
  return validForm;
}

inputs.change(function() {
  if (validateInputs(inputs)) {
    $("#clickmeclickme2").removeAttr("disabled");
  }
});
