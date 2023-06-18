export class PrimeNumber{
  constructor(private num:number){}
  getPrimeNumber(){
    for(let i=2; i<=this.num; i++){
      let count = 0;
      for(let j=1; j<=i; j++){
        if(i%j==0){
          count++;
        }
      }
      if(count==2){
        process.stdout.write(i+" ");
      }
    }
    
  }

}
