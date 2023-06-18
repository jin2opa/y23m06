{
  let obj00: {
    0: string;
    1: number;
    2: string;
    [key:string]: any;
  } = {
    0: "jin",
    1: 54,
    2: "M"
  }

  for(let key in obj00){
    console.log(key, obj00[key]);
  }
}
