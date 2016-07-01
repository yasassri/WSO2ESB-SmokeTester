/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
//var showControllersOnly = ${showControllersOnly?c!"false"};
//var seriesFilter = ${seriesFilter!"undefined"};
//var filtersOnlySampleSeries = ${filtersOnlySampleSeries?c!"false"};

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
//function createTable(table, info, formatter, defaultSorts, seriesIndex) {
//    var tableRef = table[0];
//
//    // Create header and populate it with data.titles array
//    var header = tableRef.createTHead();
//    var newRow = header.insertRow(-1);
//    for (var index = 0; index < info.titles.length; index++) {
//        var cell = document.createElement('th');
//        cell.innerHTML = info.titles[index];
//        newRow.appendChild(cell);
//    }
//
//    var tBody;
//
//    // Create overall body if defined
//    if(info.overall){
//        tBody = document.createElement('tbody');
//        tBody.className = "tablesorter-no-sort";
//        tableRef.appendChild(tBody);
//        var newRow = tBody.insertRow(-1);
//        var data = info.overall.data;
//        for(var index=0;index < data.length; index++){
//            var cell = newRow.insertCell(-1);
//            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
//        }
//    }
//
//    // Create regular body
//    tBody = document.createElement('tbody');
//    tableRef.appendChild(tBody);
//
//    var regexp;
//    if(seriesFilter)
//        regexp = new RegExp(seriesFilter, 'i');
//
//    // Populate body with data.items array
//    for(var index=0; index < info.items.length; index++){
//        var item = info.items[index];
//        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
//                &&
//                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
//            var newRow = tBody.insertRow(-1);
//            for(var col=0; col < item.data.length; col++){
//                var cell = newRow.insertCell(-1);
//                cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
//            }
//        }
//    }
//
//    // Add support of columns sort
//    table.tablesorter({sortList : defaultSorts});
//}
//
//$(document).ready(function() {
//
//    // Customize table sorter default options
//    $.extend( $.tablesorter.defaults, {
//        theme: 'blue',
//        cssInfoBlock: "tablesorter-no-sort",
//        widthFixed: true,
//        widgets: ['zebra']
//    });
	//var data = {"OkPercent": 50.0, "KoPercent": 50.0};
    var data = {${requestsummary}};
    var dataset = [
        {
            "label" : "KO",
            "data" : data.KoPercent,
               "color" : "red"
        },
        {
            "label" : "OK",
            "data" : data.OkPercent,
            "color" : "blue"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round(series.percent)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    //createTable($("#apdexTable"), ${apdexSummary!"{}"}, function(index, item){
    //    switch(index){
    //        case 0:
    //            item = item.toFixed(3);
    //            break;
    //        case 1:
    //        case 2:
    //            item = formatDuration(item);
    //            break;
    //    }
    //    return item;
    //}, [[0, 0]], 3);

    // Create statistics table
    //createTable($("#statisticsTable"), ${statisticsSummary!"{}"}, function(index, item){
    //    switch(index){
    //        case 3:
    //            item = item.toFixed(2) + '%';
    //            break;
    //        case 4:
    //        case 5:
    //        case 6:
    //        case 7:
    //        case 8:
    //            item = item.toFixed(2);
    //            break;
    //    }
    //    return item;
    //}, [[0, 0]], 0);

    // Create error table
//    createTable($("#errorsTable"), ${errorsSummary!"{}"}, function(index, item){
//        switch(index){
//            case 2:
//            case 3:
//                item = item.toFixed(2) + '%';
//                break;
//        }
//        return item;
//    }, [[1, 1]]);
//});
