let obj00: {
    name: string;
    age: number;
    gender: string;
    [key: string]: any;
} = {
  name: "jin",
  age: 30,
  gender: "male",
}

for(let key in obj00){
    console.log(key, obj00[key])
} 
