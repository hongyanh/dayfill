Parse.initialize('XeKppCnSD8mOwr3UKykdWcY0obnVYxokCUdl4gEz', 'Mj5KuZHncLwEpysKNXJNwsQqofaYcFclXGHEDD3t');
var currentAmount = 0;
function getData() {
  var totalAmount = 0;
  var recordQuery = new Parse.Query('record');
  recordQuery.each(
    function(result){
      totalAmount += result.get('amount');
      if (totalAmount != currentAmount) {
        $('#amount').text(totalAmount.toFixed(2));
        currentAmount = totalAmount;
      }
    }, {
      success: function() {
        // looped through everything
      },
      error: function(error) {
        // error is an instance of Parse.Error.
      }
    });
};
getData();
setInterval(function () {getData()}, 1000);