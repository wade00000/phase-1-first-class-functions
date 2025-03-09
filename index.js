function receivesAFunction(callback){
    callback()
}

function howYouDoing () {
    console.log ("how are you doing ?")

}

receivesAFunction( howYouDoing)

function returnsANamedFunction(name){
   return function wade(){
        console.log("Hi" + name)
    }
}

returnsANamedFunction ("wade")()

function returnsAnAnonymousFunction(){
    return function (){

    }
}