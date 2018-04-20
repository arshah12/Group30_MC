
TESTER = document.getElementById('tester');


/* Current Plotly.js version */
console.log( Plotly.BUILD );

function plotgraph(msg){

       var x = msg[0][0];
       var y = msg[0][1];
       var z= msg[0][2];
    document.getElementById('para').innerHTML = msg;
    var j=0;
    console.log(msg[0][0][0]);



    Plotly.plot(TESTER, [{
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
      height: 640
    });

}