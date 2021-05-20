class Form{
    constructor(){}
    display(){
        var title = createElement("h2");
        title.html("Enter Your Pet's Name");
        title.position(400,200);

        var title2 = createElement("h2");
        title2.html("Enter Your Name");
        title2.position(400,70);

        var input = createInput("Name");
        input.position(400,130);

        var input2 = createInput("Pet's Name");
        input2.position(400,260);

        var button = createButton("Next");
        button.position(400,350);

        

        button.mousePressed(function(){
            name1 = input2.value();
            name2 = input.value();
            if(name2!="Name" && name1!="Pet's Name"){
            button.hide();
            title.hide();
            input.hide();
            title2.hide();
            input2.hide();
            game.update(1);
            
            } else{
                textSize(30);
                fill("red");
                text("Please change the names",100,30);
            }
        });
    }
}