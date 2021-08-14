const clickButton = {
  floor: undefined,
  direction: "",
  isInside: false
};

class elevator {
  positionElev = 0;
  arrayRequests = [];

  btnPressLisener = (clickButton) => {
    arrayRequests.push(clickButton);
  };

  goElevetor = (floorDist) => {
      positionElev = floorDist;
  };

  checkRequests = (arrayRequests) => {
    if (!arrayRequests) {
      return null;
    }

    insidePersonRequests = arrayRequests.filter((request) => {
      request.isInside;
    });

    
    return insidePersonRequests[0].floor
  };
}
