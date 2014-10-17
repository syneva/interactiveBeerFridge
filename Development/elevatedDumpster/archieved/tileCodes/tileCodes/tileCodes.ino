/*
  Blink
  Turns on an LED on for one second, then off for one second, repeatedly.
 
  This example code is in the public domain.
 */
 
// Pin 13 has an LED connected on most Arduino boards.
// give it a name:
int cp4 = 4;
int cp5 = 5;
int cp6 = 6;
int cp7 = 7;
int cp8 = 8;
int cp9 = 9;
int ground = 10;
int cp[7] = {cp4, cp5, cp6, cp7, cp8, cp9, ground};


// the setup routine runs once when you press reset:
void setup() {                
  // initialize the digital pin as an output.
  Serial.begin(9600);
  
  for(int i = 0; i < sizeof(cp); i++){
    pinMode(cp[i], INPUT); 
    digitalWrite(cp[i], HIGH);
  }
  
  pinMode(ground, OUTPUT);
  digitalWrite(ground, LOW); 
//  pinMode(cp4, INPUT); 
//  pinMode(cp5, INPUT); 
//  pinMode(cp6, INPUT); 
//  pinMode(cp7, INPUT);  
//  pinMode(cp8, INPUT); 
//  pinMode(cp9, INPUT);  
//  pinMode(ground, OUTPUT)
  
//  digitalWrite(cp4, HIGH);
//  digitalWrite(cp5, HIGH);   
//  digitalWrite(cp6, HIGH);  
//  digitalWrite(cp7, HIGH);  
//  digitalWrite(cp8, HIGH);  
//  digitalWrite(cp9, HIGH);  
//  digitalWrite(ground, LOW); 
  
}

// the loop routine runs over and over again forever:
void loop() {
  Serial.println("test");
   for(int i = 0; i < sizeof(cp); i++){
     bool read = digitalRead(cp[i]);
    Serial.print(digitalRead(cp[i]));
   }
   Serial.println("");
   delay(1000);
 // digitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)
  //delay(1000);               // wait for a second
//  digitalWrite(led, LOW);    // turn the LED off by making the voltage LOW
//  delay(1000);               // wait for a second
}
