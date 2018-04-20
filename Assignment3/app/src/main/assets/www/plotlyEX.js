
function plotgraph(msg){

//       var x = msg[0][0];
//       var y = msg[0][1];
//       var z= msg[0][2];
//    var j=0;
//    console.log(msg[0][0][0]);

    for (var dataItems = 0; dataItems<msg.length; dataItems++){

        var x = msg[dataItems][0];
        var y = msg[dataItems][1];
        var z = msg[dataItems][2];


        Plotly.plot('graph', [{
              type: 'scatter3d',
              mode: 'lines',
              x: x,
              y: y,
              z: z,
              opacity: 1,
              line: {
                width: 6,
                color: 0,
                reversescale: false
              }
            }], {
              height: 400,
              width: 368
            });


    }


}