var information = [];
$(document).ready(function () {
    
    table = "<thead><tr><th>Description</th><th>Severity</th><th>Person</th><th></th></tr></thead><tbody></tbody>";
    var displayTable = $("#infoTable").append(table);
    var datatable = $("#infoTable").DataTable();
    
    function getInfo() {
       //var data = {};
        var textArea = $("#txtArea").val();
        var level = $("#level").val();
        var assignName = $("#name").val();

        information.push ({
            Description: textArea,
            Severity: level,
            Person: assignName   
        });
        
        constructInfo();
        
    }
    $("#getInfo").click(getInfo);
   
    function constructInfo(){
        datatable.destroy()
        $("#infoTable tbody").empty();

        $.each(information, function(g,info) {
            var index = information.indexOf(g);
            var remove = "<button onclick='closeButton(" + index + ")'>CLOSE</button>"
            var bodyTable = "<tr><td>" + info.Description + "</td>" +
            "<td>" + info.Severity + "</td>" + 
            "<td>" + info.Person + "</td>" +
            "<td>" + remove + "</td></tr>"; 

            displayTable = $("#infoTable tbody").append(bodyTable);
            
        })
        datatable = $("#infoTable").DataTable();
    }
    
    closeButton = function closeButton(index) {
        information.splice(index, 1);
        constructInfo()
    }

    function clearInfo() {
        textArea = $("#txtArea").val();
        level = $("#level").val();
        assignName = $("#name").val();
    }

   
})