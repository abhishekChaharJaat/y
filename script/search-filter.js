function search() {
  let filter = document.getElementById("myInput").value.toUpperCase();

  let myTable = document.getElementById("myTable");

  let tr = myTable.getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td")[1];

    if (td) {
      var textVal = td.textContent || td.innnerHTML;

      if (textVal.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
