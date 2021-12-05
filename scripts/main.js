(() => {

    const ui = require("ui-lib/library");
    
    ui.addButton("function", Items.thorium, () => {
        log("HELLO?!?!?!?")
        
        for(planet in Vars.content.planets) {
            for(sec in planet) {
                log(sec) // doesn't do anything idk why
                log(sec.id.toString()) // doesn't do anything idk why

                sec.clearInfo()
                if(sec.save != null){
                    sec.save.delete();
                    sec.save = null;
                }
            }
        }
        
        
        for(slot in Vars.control.saves.getSaveSlots().copy()){
            if(slot.isSector()){
                slot.delete();
            }
        }

        log("HELLO?!?!?!?")
    });
    
})();