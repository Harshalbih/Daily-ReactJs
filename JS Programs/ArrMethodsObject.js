let car = [{
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
  },
  {
    "color": "blue",
    "type": "baleno",
    "registration": new Date('2016-06-02'),
    "capacity": 5
  },
  {
    "color": "black",
    "type": "scorpio",
    "registration": new Date('2016-07-02'),
    "capacity": 7
  }]
  
  //.find
  const redis = car.find(cars => cars.color === "red");
  console.log(redis);
  
  //map
  const size = car.map((cars) => {
    if (cars.capacity === 2) {
        return "small";
    }
    else if (cars.capacity === 5) {
        return "medium";
    }
    else {
        return "large";
    }
  });
  console.log(size);
  
  //sort 
  const sorted = car.sort((c1,c2)=>(c1.capacity < c2.capacity) ? 1 : (c1.capacity > c2.capacity) ? -1 : 0);
  console.log(sorted);
  
  //some & every
  console.log(car.some(cars => cars.color ==='red' && cars.type ==='cabrio'));
  console.log(car.every(cars => cars.capacity>4));
  
  //filter
  const filtered = car.filter((cars)=> cars.capacity>3);
  console.log(filtered.map((cars)=>cars.type));

  //reduce
  const reduced= car.reduce((crr, acc)=> {
    return crr + acc.capacity;
  },0)
  console.log(reduced);
