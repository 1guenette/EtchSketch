

    var ctx = document.getElementById("canvas").getContext("2d");  //canvas object

     var x = 0;
     var y = 100;
     var dir = "east";
     var stop = false;

    
    function move()
    {
     
      ctx.moveTo(x,y);

       setInterval(function()
        {
          if(dir == "north")
          {
            y += 2;
            ctx.lineTo(x,y);
            ctx.stroke();
          }
          else if(dir == "south")
          {
            y -= 2;
            ctx.lineTo(x,y);
            ctx.stroke();

          }
          else if(dir == "east")
          {
            x += 2;
            ctx.lineTo(x,y);
            ctx.stroke();

          }
          else //dir == west
          {
            x -= 2;
            ctx.lineTo(x,y);
            ctx.stroke();
          }
          if(x>500)
          {
            x=500;
          }
          if(x<0)
          {
            x=0;
          }
          if(y>500)
          {
            y=500;
          }
          if(y<0)
          {
            y=0;
          }
          

        },50);
    }



   

     function turnRight()
     {
          if(dir == "north")
          {
            dir = "west";
          }
          else if(dir == "south")
          {
            dir = "east";
          }
          else if(dir == "east")
          {
            dir = "north";
          }
          else //dir == west
          {
            dir = "south";
          }
     }

     function turnLeft()
     {
          if(dir == "north")
          {
            dir = "east";
          }
          else if(dir == "south")
          {
            dir = "west";
          }
          else if(dir == "east")
          {
            dir = "south";
          }
          else //dir == west
          {
            dir = "north";
          }
     }

     
     


    
    function myFunction(right, left) 
    {
      //alert('Hello');
      right +=80 

      ctx.lineTo(right,left);
      ctx.stroke();
    }



