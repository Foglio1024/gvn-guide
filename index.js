class RealGvnGuide
{
    constructor(mod)
    {
        mod.hook("S_QUEST_BALLOON",1, ev => {
            if(ev.message.indexOf('@monsterBehavior:3201109') !== -1 ||
               ev.message.indexOf('@monsterBehavior:3201110') !== -1 ||
               ev.message.indexOf('@monsterBehavior:3201112') !== -1 
               ) return false;
        });
    }
}

module.exports = RealGvnGuide;