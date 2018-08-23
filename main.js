var computer = new Worker('compute.js')
computer.postMessage(100)
computer.onmessage=function(e){
    console.log("worker:"+e.data)
}