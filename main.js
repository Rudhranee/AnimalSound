function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pdApeII0n/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Dog Barking") {
      img.src = 'bark.gif';
    } else if (results[0].label == "Cat Meowing") {
      img.src = 'meow.gif';
    } else if (results[0].label == "Snake Hissing") {
        img.src = 'snake.gif';  
    } else if (results[0].label == "Tiger Roar") {
        img.src = 'Z8Dq.gif';    
    } else if (results[0].label == "ElePhANt TrUMpet") {
        img.src = 'elephant.gif';    
    } else{
      img.src = 'listen.gif';
    }
  }
}
