function fib(n){
    if(n>0){
        let fib = [0,1]
        for(i=2;i<n;i++){
            fib[i]=fib[i-1]+fib[i-2]
        }
        return fib
    }else{
        return 0
    }
}
let n =(prompt('введите кол-во чисел'))
let Fib = fib(n)

console.log(Fib)