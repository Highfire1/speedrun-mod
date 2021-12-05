(() => {

    const ui = require("ui-lib/library");
    
    ui.addButton("thorium-grabber", Items.thorium, () => {
        const core = Vars.state.teams.cores(Vars.player.team).first().tile;
        Call.requestItem(Vars.player, core, Items.thorium, 15);
    });
    
    })();