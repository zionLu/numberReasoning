var index
onmessage = function(e){
    index = e.data;
    console.log("从主线程接收到消息")
    console.log(e.data)
    test()
}
var mark = ['+','-','*','/','^']
function main(num){
    var output = 'can not find';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            for (let k = 0; k < 5; k++) {
                for (let l = 0; l < 5; l++) {
                    for (let m = 0; m < 5; m++) {
                        let formula = `1 ${mark[i]} 1 ${mark[j]} 4 ${mark[k]} 5 ${mark[l]} 1 ${mark[m]} 4`
                        let result=eval(formula)
                        if (result == num){
                            output=num+'='+formula
                            postMessage(output)
                            return
                        }
                    }
                }
            }
        }
    }
    postMessage(output)
}

function test(){
    for (let i = 0; i < index+1; i++) {
        main(i)
        
    }
}


