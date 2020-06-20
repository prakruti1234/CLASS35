class Form {
    constructor() {
      
    }
  
    display(){
      var title = createElement('h2')
      title.html("Has the problem of water shortage ever bothered you?");
      title.position(30, 0);
      
      var input = createInput("Yes or No");
      var button = createButton('Submit');
      
      input.position(40, 60);
      button.position(40, 100);

      var title2 = createElement('h2')
      title2.html("Would you want to help raise awareness about saving water?");
      title2.position(30, 150);
      
      var input2 = createInput("Yes or No");
      var button2 = createButton('Submit');
      
      input2.position(40, 200);
      button2.position(40, 240);

      var title3 = createElement('h2')
      title3.html("Have you done any thing to save water?");
      title3.position(30,300);
      
      var input3 = createInput("Yes or No");
      var button3 = createButton('Submit');
      
      input3.position(40, 360);
      button3.position(40, 400);

      button.mousePressed(function(){
        input.hide();
        button.hide();
  
        var name = input.value();
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);
        var greeting = createElement('h3');
        greeting.html("Thank you!" )
        greeting.position(60, 60)
      });

      button2.mousePressed(function(){
        input2.hide();
        button2.hide();
  
        var name2 = input.value();
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);
        var greeting2 = createElement('h3');
        greeting2.html("Thank you!" )
        greeting2.position(60, 200)
      });

      button3.mousePressed(function(){
        input3.hide();
        button3.hide();
  
        var name3 = input.value();
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);
        var greeting3 = createElement('h3');
        greeting3.html("Thank you for time! Let's conserve water and save the world!" )
        greeting3.position(60, 360)
      });

    }

  }