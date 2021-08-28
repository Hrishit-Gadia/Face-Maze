function setup(){
    Canvas = createCanvas(400,300);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.size(400,300);
    Video.hide();
    Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/GJpAYfirT/model.json",Status);
}

function Status() {
    console.log("working");
}

function draw(){
    image(Video,0,0,400,300);
    Classifier.classify(Video, Reward);
}

function Reward(error, Result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(Result);
        document.getElementById("Name").innerHTML = Result[0].label;
        document.getElementById("Accuracy").innerHTML = Result[0].confidence.toFixed(3);
    }
}