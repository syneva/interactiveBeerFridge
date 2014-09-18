//Elevated Dumpster
//This is a program to read the voltage of connected circuits
//and based on the voltages, interpret the twitter message.
//There will be separate scripts to light LEDs, run a stepper motor, and tweet messages.

//will be a number between 0 and 1023

int x=0;

void setup(){
  Serial.begin(9600);
  pinMode(2,INPUT);
}

void loop(){
  Serial.println('hi');
  int sensorValue = digitalRead(2);
  Serial.println(sensorValue);
}
