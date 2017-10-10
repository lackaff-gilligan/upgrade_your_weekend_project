$(document).ready(onReady);

function onReady() {
  $('#submitBtn').on('click', submitClicked);
  $('#remove').on('click', removeEmployee);
}

//monthly costs tracker
var total = 0;

function submitClicked() {
  console.log('in submitClicked');
  addTableRow();
  calculateTotal();
  resetFields();

}

function addTableRow() {
  $('table').append('<tr class="empRow"><td>' + $('#fName').val() + '</td><td>' +
  $('#lName').val() + '</td><td>'  + $('#iDNum').val() + '</td><td>' +
  $('#jobTitle').val() + '</td><td class="salaryData">$ ' + $('#salary').val() +
  '<td><input type="checkbox" id="myBox">'+ '</td></tr>');
//call a separate function to store salary data
//attachData();
}

// function attachData() {
//   var mySalData = $('.salaryData').data('salaryVal', {value: $('#salary').val()});
//   console.log(mySalData.value);
// }

function calculateTotal() {
  var empSalary = parseInt($('#salary').val());
  var empMonthCost = Math.round(empSalary / 12);
  total += empMonthCost;
  $('#monthAvg').text(' $' + total);
}

function resetFields() {
  $('.inputs').val('');
}

function removeEmployee() {
  $('input:checkbox:checked').parent().parent().remove();
//$('.empRow:last').remove();

}
