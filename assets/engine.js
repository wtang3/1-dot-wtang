(function(globals){
  'use strict';
  var engine = globals.PIXI;
  
  function On_Document_Ready(Callback) {
    if (document.readyState === "complete"){
      window.setTimeout(Callback, 0);
    } else {
      window.addEventListener("load", Callback, false);
    }
  }
  
  function init(){
    var STAGE_COLOR           = 0xFFFFFF;
    var VIEW_WIDTH            = 1000;
    var VIEW_HEIGHT           = 800;
    var GEAR_BOX_POSITION_X   = 800;
    var GEAR_BOX_POSITION_Y   = 400;
    var SHIFT_KNOB_POSITION_X = 870;
    var SHIFT_KNOB_POSITION_Y = 500;
    var SHIFT_KNOB            = "/images/black_shiftknob.png";
    var GEAR_BOX              = "/images/gearbox2.png";
    var VIEW_ID               = "canvas";
    var INTERACTIVE           = true;
   
    //Set the stage, and enable interactive mode.
    var stage = new engine.Stage(STAGE_COLOR,INTERACTIVE);
    var renderer = engine.autoDetectRenderer(VIEW_WIDTH,VIEW_HEIGHT);
    document.getElementById(VIEW_ID).appendChild(renderer.view);
    requestAnimFrame(animate);
   
    var shiftKnobTexture = engine.Texture.fromImage(SHIFT_KNOB);
    var gearBoxTexture = engine.Texture.fromImage(GEAR_BOX);
   
    var shiftKnob = new engine.Sprite(shiftKnobTexture);
    //var gearBox = new engine.Sprite(gearBoxTexture);
    var gearBox = new engine.TilingSprite(gearBoxTexture,140,200);
    var map = [
      [1,1,1],
      [1,1,1],
      [1,1,1]
    ];

    //positions
    shiftKnob.position.x = SHIFT_KNOB_POSITION_X;
    shiftKnob.position.y = SHIFT_KNOB_POSITION_Y;
    gearBox.position.x   = GEAR_BOX_POSITION_X;
    gearBox.position.y   = GEAR_BOX_POSITION_Y;
    
    
    //add
    stage.addChild(gearBox);
    
    stage.addChild(shiftKnob);
  
		// center the shiftKnobs anchor point
		shiftKnob.anchor.x = 0.5;
		shiftKnob.anchor.y = 0.5;
        
		shiftKnob.interactive = true;
    
    gearBox.buttonMode  = true;
    gearBox.interactive = true;
    
    // function for detecting clicks on gearbox.
    
    var a = document.getElementById("a");
      var b = document.getElementById("b");
      a.value = gearBox.width+800;
      b.value = gearBox.height+400;
    
    gearBox.click = function(mouseData){
      //alert('test');
      var position = mouseData.getLocalPosition(gearBox);
      var x = document.getElementById("x");
      var y = document.getElementById("y");
      
      x.value = position.x + GEAR_BOX_POSITION_X;
      y.value = position.y + GEAR_BOX_POSITION_Y;
      
      shiftKnob.position.x = position.x + GEAR_BOX_POSITION_X;
      shiftKnob.position.y = position.y + GEAR_BOX_POSITION_Y;
    }

    
    function animate(){
      requestAnimFrame(animate);
      
      // render the stage
      renderer.render(stage); 
    }
    
    
  }
  // keep waiting till the document is ready then run init.
  On_Document_Ready(init);
}(this));

 

