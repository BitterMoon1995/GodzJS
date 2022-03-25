function myModule() {
    let msg1="DirtyBitch"
    let msg2='BlackSlave'
    function slaughterMuGou() {
        console.log('屠杀死妈母狗'+'  '+msg1.toUpperCase())
    }
    function slaughterNigger() {
        console.log('屠杀黑狗'+'  '+msg2.toLowerCase())
    }
    // 通过return向外暴露方法
    // return slaughterMuGou//只能暴露一个
    return {
        slaughterMuGou:slaughterMuGou,
        slaughterNigger:slaughterNigger
    }
}
