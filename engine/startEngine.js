function startEngine(keyIn, batteryCharge) {
    if (keyIn === true && batteryCharge >= 50) {
      console.log("Starting engine...");
    } else if (keyIn === true && batteryCharge < 50) {
      console.log("Engine cannot start. Battery charge is too low.");
    } else {
      console.log("Please insert the key to start the engine.");
    }
}
startEngine(true, 40, 90)
