var SequenceLayers = new Window("palette");
    SequenceLayers.text = "Sequence Layers"; 
    SequenceLayers.orientation = "column"; 
    SequenceLayers.alignChildren = ["left","top"]; 
    SequenceLayers.spacing = 0; 
    SequenceLayers.margins = 6; 
    
var startPoint = SequenceLayers.add("group",undefined,{name:"startPoint"});
    startPoint.orientation = "row";
    startPoint.alignChildren = ["left","center"];
    startPoint.margins = 6;
    
var startText = startPoint.add("statictext", undefined, "Align Layers to:");
var sequenceStart_array = ["Playhead","Composition Start"]; 
var sequenceStart = startPoint.add("dropdownlist", undefined, undefined, {name: "sequenceStart", items: sequenceStart_array}); 
    sequenceStart.selection = 0; 

var setup = SequenceLayers.add("group", undefined, {name: "setup"}); 
    setup.orientation = "row"; 
    setup.alignChildren = ["left","top"]; 
    setup.margins = 6; 

var frameRange = setup.add("group", undefined, {name: "frameRange"}); 
    frameRange.orientation = "row"; 
    frameRange.alignChildren = ["left","center"]; 
    frameRange.margins = 0; 

var frameTxt = frameRange.add("group", undefined,);
    frameTxt.orientation = "row";
    frameTitle = frameTxt.add("statictext", undefined, undefined, {name: "frameTxt"})
    frameTitle.text = "Sequence Layers Every:";

var Duration = frameTxt.add('edittext {properties: {name: "Duration"}}'); 
    Duration.text = "12"; 
    Duration.preferredSize.width = 50; 
    
var timeUnitArray = ["Frames","Seconds"];
var timeUnit = frameRange.add("dropdownlist",undefined,undefined, {name: "timeUnit", items: timeUnitArray});
    timeUnit.selection = 0;

var sequenceOptions = setup.add("group", undefined, {name: "sequenceOptions"}); 
    sequenceOptions.orientation = "row"; 
    sequenceOptions.alignChildren = ["left","top"]; 
    sequenceOptions.spacing = 10; 
    sequenceOptions.margins = 0; 

var actionButtons = SequenceLayers.add("group", undefined, {name: "actionButtons"}); 
    actionButtons.orientation = "row"; 
    actionButtons.alignChildren = ["left","center"]; 
    actionButtons.spacing = 10; 
    actionButtons.margins = 0; 

var align_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%01%C2%88IDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%8D%00%03%03%03%00%00%00%C3%BF%C3%BFbB2%C3%9C%C2%80%C2%81%C2%81%C3%A1%00U-c%60%60%00%00%00%00%C3%BF%C3%BFB%C2%B6%40%C2%80%C2%81%C2%81%C3%81%C2%9E%C2%AA%C2%A6300%00%00%00%00%C3%BF%C3%BFB%C2%B6%C2%80%C3%BA%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%C3%82e%01(%C2%A8%40%C2%91C%0An%C3%800%C2%85%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%0F%18%18%18%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BFb%C3%81!%C2%BE%C2%80%C2%8C%24%C2%8B%C2%A9%C2%9E%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%C3%82g%01%C3%A5%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%C3%82eA%02%03%03%C2%83%02%C2%916%60M%3D%60%C3%80%C3%80%C3%80%00%00%00%00%C3%BF%C3%BFb%00%15%15P%C3%AC%C3%B0%1F%02%40%C3%AC%03P61%00%C3%99%0CT%C3%BC%C3%BF%3F%03%00%00%00%C3%BF%C3%BF%C2%A2m%24300%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C3%82%15%07%17%C2%A8b%3A%03%03%03%00%00%00%C3%BF%C3%BF%C3%82eA%01ULg%60%60%00%00%00%00%C3%BF%C3%BF%C3%82e%01%C2%A8%C3%A8%06%C2%95%C2%AE%C3%A4%02H%C2%9E%60%60%60%00%00%00%00%C3%BF%C3%BF%C3%82e%C3%81%04%0A%C2%8BnF0%C3%89%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C2%A2m%24300%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C3%82%15%07%0ET1%C2%9D%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFB%C3%B6%C3%81%07%06%06%C2%86%C2%83%C3%942%18%0C%18%18%18%00%00%00%00%C3%BF%C3%BF%C2%A2m%C2%B3%C2%85%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%03%00MYq%18%0C%C3%81%C3%A5%C2%96%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var alignButton = actionButtons.add("iconbutton", undefined, File.decode(align_imgString), {name: "align", style: "toolbutton"}); 
alignButton.helpTip = "Align Selected Layers";

var sequencer_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%01%C2%A5IDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%8D%00%03%03%03%00%00%00%C3%BF%C3%BFbB2%C3%9C%C2%80%C2%81%C2%81%C3%A1%00U-c%60%60%00%00%00%00%C3%BF%C3%BFB%C2%B6%40%C2%80%C2%81%C2%81%C3%81%C2%9E%C2%AA%C2%A6300%00%00%00%00%C3%BF%C3%BFB%C2%B6%C2%80%C3%BA%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%C2%A2%C3%94%02%07%06%06%06P%24%C2%A2c%C2%908%03%03%03%03%03%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%0F%18%18%18%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BFb%C2%A1P%C3%BF%03%06%06%C2%86F%1C%C3%A2%0C%0C%0C%0C%0C%00%00%00%00%C3%BF%C3%BFB%C3%8Eh%C2%A0%C2%88%C3%99%C3%8F%C3%80%C3%80%C3%80H%C2%A1%C2%A5%08%C3%80%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%22%C3%85%07%20%07%C3%80S%07%14%C2%80%5C%C2%BA%00%C2%A7%0E%06%06%06%00%00%00%00%C3%BF%C3%BFb%00%C3%B9%00%C2%8A%1D%C3%BEC%00%C2%B2%182n%C2%80%C3%8A%23%C2%83%03x%C3%943%C3%BC%C3%BF%C3%BF%C2%9F%01%00%00%00%C3%BF%C3%BF%C2%A2m%24300%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%22%25%0E%40%C3%A1%7D%10M%C3%AC%02%5E%1D%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2m*b%60%60%00%00%00%00%C3%BF%C3%BF%C3%82%C3%A5%03P%C3%91%0D*%5D%C2%91%01%C3%88%07%C3%B0%C3%B4M%14%60%60%60%00%00%00%00%C3%BF%C3%BF%C3%82%C2%95%C2%8A%40%C2%A9%03%1D%C2%80R%11%C3%9E%14%C2%83%C2%81%C3%BF%C3%BFg%00%00%00%00%C3%BF%C3%BF%C2%A2m%24300%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C3%82%15%C3%89%C3%A8E%02y%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFB%C3%B6%C3%81%07%2C%C3%A9%C2%9C2%C3%80%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C2%A2m%C2%B3%C2%85%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%03%00%C3%A2%22%C2%BB%C3%AAv%2F%C2%96%2C%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var sequencerButton = actionButtons.add("iconbutton", undefined, File.decode(sequencer_imgString), {name: "sequencer", style: "toolbutton"}); 
sequencerButton.helpTip = "Sequence Selected Layers";

var sequenceEqual_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%01%C2%84IDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%8D%00%03%03%03%00%00%00%C3%BF%C3%BFbB2%C3%9C%C2%80%C2%81%C2%81%C3%A1%00U-c%60%60%00%00%00%00%C3%BF%C3%BFB%C2%B6%40%C2%80%C2%81%C2%81%C3%81%C2%9E%C2%AA%C2%A6300%00%00%00%00%C3%BF%C3%BFB%C2%B6%C2%80%C3%BA%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%22%C3%85%C2%82%06%06%06%06P%C2%84%11%C2%83!%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%0F%18%18%18%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BFb!A-%C3%A9I%C2%98%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%22%C3%95%02%C3%92%2Ca%60%60%00%00%00%00%C3%BF%C3%BF%22d%C2%81%02%03%03C%02%C3%99%0E%60%60%60%00%00%00%00%C3%BF%C3%BF%22%C3%86%C2%82z%22-%C2%80Y%C2%82%00%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2m%24300%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%22%14D%1F%18%18%18%0E%12i%C3%96%03%0C%11%06%06%06%00%00%00%00%C3%BF%C3%BF%22d%C3%81%05%06%06%06%07%22-%C3%80%04%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C3%82e%01%C2%A8%C3%A8%06%C2%95%C2%AE%C3%84%00%C3%9CI%C2%97%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%C3%82e%C3%81%04%12%C2%8AnF%C2%9C2%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2m%24300%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C3%82%15%07%14%C2%A5%1C8%60%60%60%00%00%00%00%C3%BF%C3%BFB%C3%B6%01)i%C2%9E8%C3%80%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C2%A2m%C2%B3%C2%85%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%03%00%01%C3%BE%1E%C3%B1%C2%A7%07%C3%BA3%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var sequenceEqual = actionButtons.add("iconbutton", undefined, File.decode(sequenceEqual_imgString), {name: "sequenceEqual", style: "toolbutton"}); 
sequenceEqual.helpTip = "Equally Space Layers";

var sequenceRandom_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%18%00%00%00%18%08%06%00%00%00%C3%A0w%3D%C3%B8%00%00%00%09pHYs%00%00%0B%12%00%00%0B%12%01%C3%92%C3%9D~%C3%BC%00%00%01%C2%95IDATH%C2%89b%C3%BC%C3%BF%C3%BF%3F%03%C3%8D%00%03%03%03%00%00%00%C3%BF%C3%BFbB2%C3%9C%C2%80%C2%81%C2%81%C3%A1%00U-c%60%60%00%00%00%00%C3%BF%C3%BFB%C2%B6%40%C2%80%C2%81%C2%81%C3%81%C2%9E%C2%AA%C2%A6300%00%00%00%00%C3%BF%C3%BFB%C2%B6%C2%80%C3%BA%C2%80%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%22d%C2%81%03%03%03%03(%C2%92%C2%88%C3%81%0D%18%C2%BA%19%18%18%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%0F%18%18%18%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BFb!%20%C3%BF%C2%80%C2%81%C2%81%C2%A1%C2%91H%C2%B30%C2%938%03%03%03%00%00%00%C3%BF%C3%BFB%C3%8Eh%C2%A0%08%C3%9D%C3%8F%C3%80%C3%80%C3%80H%C2%92%13%C3%B1%01%06%06%06%00%00%00%00%C3%BF%C3%BF%22%C3%A4%03d%00r%00%08%13%03%20)%C2%8A%C2%81%C2%81%01%00%00%00%C3%BF%C3%BFb%00%C3%B9%00%C2%8A%1D%C3%BEC%00%C2%B2%182n%C2%80%C3%8A%13%03%20%C3%BA%C3%BE%C3%BFg%00%00%00%00%C3%BF%C3%BF%C2%A2m%24300%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%22%25%0E%40)%C3%AA%20I%C2%A6300%00%00%00%00%C3%BF%C3%BF%C2%A2m*b%60%60%00%00%00%00%C3%BF%C3%BF%C3%82%C3%A5%03P%C3%91%0D*%5D%C2%89%01%C2%B8%C2%8Bx%06%06%06%00%00%00%00%C3%BF%C3%BF%C3%82e%C3%81%04%12%C2%8An%C3%9C%3Ef%60%60%00%00%00%00%C3%BF%C3%BF%C2%A2m%24300%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C2%A2%C2%AD%05%0C%0C%0C%00%00%00%00%C3%BF%C3%BF%C3%82%15%07%C3%84%16%09%C3%B8%01%03%03%03%00%00%00%C3%BF%C3%BFB%C3%B6%C3%81%07r%C3%929%5E%C3%80%C3%80%C3%80%00%00%00%00%C3%BF%C3%BF%C2%A2m%C2%B3%C2%85%C2%81%C2%81%01%00%00%00%C3%BF%C3%BF%03%00%C2%8Fnv%10%C2%91%0B%10N%00%00%00%00IEND%C2%AEB%60%C2%82"; 
var sequenceRandom = actionButtons.add("iconbutton", undefined, File.decode(sequenceRandom_imgString), {name: "sequenceRandom", style: "toolbutton"}); 
sequenceRandom.helpTip = "Randomly Space Layers";

SequenceLayers.show();

alignButton.onClick = function() {
          var comp = app.project.activeItem;
          var frameRate = comp.frameRate;
          var inPointCase = sequenceStart.selection.text;
          var tUnit = timeUnit.selection.text;

            if (!(comp && comp instanceof CompItem)) {
                alert("ERROR: No composition is selected");
                return;
            }

            var selectedLayers = comp.selectedLayers;
            
            if (selectedLayers.length === 0) {
                alert("ERROR: No layers are selected");
                return;
            }
        
            if (inPointCase == "Playhead"){
                    var inPoint = comp.time;
            }else{
                    var inPoint = comp.displayStartTime;
            }
 
            var frameOffset = parseFloat(Duration.text);
            
            if(tUnit == "Frames"){
                        var outPoint = (frameOffset/frameRate);
           }else{
                        var outPoint = frameOffset;
            }
            
            app.beginUndoGroup("Align Layers");
                
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];
// Change Function
//============
                layer.inPoint = inPoint;
            }

            app.endUndoGroup();
            
            sequenceRandom.enabled = false;
            alignButton.enabled = false;
            sequencerButton.enabled = false;
            Duration.enabled = false;
            sequenceStart.enabled = false;
            sequenceEqual.enabled = false;
            
            sequenceRandom.enabled = true;
            Duration.enabled = true;
            sequenceStart.enabled = true;
            sequenceEqual.enabled = true;
            alignButton.enabled = true;
            sequencerButton.enabled = true;
            
   }

sequencerButton.onClick = function() {
        
               var comp = app.project.activeItem;
               var inPointCase = sequenceStart.selection.text;

                if (!(comp && comp instanceof CompItem)) {
                    alert("ERROR: No composition is selected");
                return;
                }

                var selectedLayers = comp.selectedLayers;

                if (selectedLayers.length < 2) {
                    alert("ERROR: Select at least two layers.");
                    return;
                }

                app.beginUndoGroup("Sequence Layers");

                if (inPointCase == "Playhead"){
                    var inPoint = comp.time;
                }else{
                    var inPoint = comp.displayStartTime;
                }
                selectedLayers[0].inPoint = inPoint; 
                
                for (var i = 1; i < selectedLayers.length; i++) {
                    var previousLayer = selectedLayers[i - 1];
                    var currentLayer = selectedLayers[i];

                    currentLayer.inPoint = previousLayer.outPoint;
                }

                app.endUndoGroup();
    
            sequenceRandom.enabled = false;
            alignButton.enabled = false;
            sequencerButton.enabled = false;
            Duration.enabled = false;
            sequenceStart.enabled = false;
            sequenceEqual.enabled = false;
            
            sequenceRandom.enabled = true;
            Duration.enabled = true;
            sequenceStart.enabled = true;
            sequenceEqual.enabled = true;
            alignButton.enabled = true;
            sequencerButton.enabled = true;
   }

sequenceRandom.onClick = function () {
        
          var comp = app.project.activeItem;
          var frameRate = comp.frameRate;
          var inPointCase = sequenceStart.selection.text;
          var tUnit = timeUnit.selection.text;

            if (!(comp && comp instanceof CompItem)) {
                alert("ERROR: No composition is selected");
                return;
            }

            var selectedLayers = comp.selectedLayers;
            if (selectedLayers.length === 0) {
                alert("ERROR: No layers are selected");
                return;
            }
        
            if (inPointCase == "Playhead"){
                    var inPoint = comp.time;
            }else{
                    var inPoint = comp.displayStartTime;
            }
 
            var frameOffset = parseFloat(Duration.text);
            
            if(tUnit == "Frames"){
                        var outPoint = (frameOffset/frameRate);
           }else{
                        var outPoint = frameOffset;
            }

            app.beginUndoGroup("Randomly Distribute Layers");
                
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];
// Change Function
//============
                var randomTime = inPoint + Math.random(0,1) * (outPoint);
                layer.inPoint = randomTime;
            }

            app.endUndoGroup();
            
            sequenceRandom.enabled = false;
            alignButton.enabled = false;
            sequencerButton.enabled = false;
            Duration.enabled = false;
            sequenceStart.enabled = false;
            sequenceEqual.enabled = false;
            
            sequenceRandom.enabled = true;
            Duration.enabled = true;
            sequenceStart.enabled = true;
            sequenceEqual.enabled = true;
            alignButton.enabled = true;
            sequencerButton.enabled = true;
   }

sequenceEqual.onClick = function () {
          var comp = app.project.activeItem;
          
          if (!(comp && comp instanceof CompItem)) {
            alert("ERROR: No composition is selected");
          return;
          }
      
          var frameRate = comp.frameRate;
          var inPointCase = sequenceStart.selection.text;
          var tUnit = timeUnit.selection.text;

            var selectedLayers = comp.selectedLayers;
            
            if (selectedLayers.length === 0) {
                alert("ERROR: No layers are selected");
                return;
            }
        
            var frameOffset = parseFloat(Duration.text);
             if (isNaN(frameOffset) || frameOffset <= 0) {
                alert("ERROR: Duration must be a valid positive number");
            return;
            }
        
            if (inPointCase == "Playhead"){
                    var inPoint = comp.time;
            }else{
                    var inPoint = comp.displayStartTime;
            }
 
            var frameOffset = parseFloat(Duration.text);
            
            if(tUnit == "Frames"){
                        var outPoint = frameOffset;
           }else{
                        var outPoint = frameOffset*frameRate;
            }

            app.beginUndoGroup("Equally Distribute Layers");
                
            for (var i = 0; i < selectedLayers.length; i++) {
                var layer = selectedLayers[i];
// Change Function
//============
                var equalTime = (outPoint/(selectedLayers.length-1))*(i);
                var equalFrames = equalTime/frameRate;
                layer.inPoint = inPoint + equalFrames;
            }

            app.endUndoGroup();

            sequenceRandom.enabled = false;
            alignButton.enabled = false;
            sequencerButton.enabled = false;
            Duration.enabled = false;
            sequenceStart.enabled = false;
            sequenceEqual.enabled = false;
            
            sequenceRandom.enabled = true;
            Duration.enabled = true;
            sequenceStart.enabled = true;
            sequenceEqual.enabled = true;
            alignButton.enabled = true;
            sequencerButton.enabled = true;
   }