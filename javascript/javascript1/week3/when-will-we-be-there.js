const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function arriveTime(travelInformarion){
      const time = travelInformarion.destinationDistance/travelInformation.speed;
       return `${Math.floor(time)} hours and ${Math.floor((time-Math.floor(time)) * 60)} minutes`;
  }
  const travelTime = arriveTime(travelInformation);
  console.log(travelTime);

