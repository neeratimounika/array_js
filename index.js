function first(fun){
    fun()
}

function second(){
    console.log('This is second function')
}

first(second)