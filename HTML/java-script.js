function start()
{
    racialtraits()
    classtraits()
}

function racialtraits()
{
    var race = document.getElementById('race-select');
    var racetraits = document.getElementById('race-traits');
    var classpic = document.getElementById('classpic');
    if ( race.value == "Dragonborn" ) {
        racetraits.innerHTML = "+2 Strength, +1 Charisma, Draconic Ancestry, Breath Weapon, Damage Resistance";
        classpic.src = "Images/dragonborn.png";
        type.innerHTML = ""
        class_picked.innerHTML
    }
    else if ( race.value == "Dwarf" ) {
        racetraits.innerHTML = "+2 Constitution, Darkvision, Dwarven Resilience, Dwarven Combat Training, Stonecunning";
        classpic.src = "Images/dwarf.png";
    }
    else if ( race.value == "Elf" ) {
        racetraits.innerHTML = "+2 Dextirity, Darkvision, Keen Senses, Fey Ancestry, Trance";
        classpic.src = "Images/elf.jpg";
    }
    else if ( race.value == "Gnome" ) {
        racetraits.innerHTML = "+2 Intelligence, Darkvision, Gnome Cunning";
        classpic.src = "Images/gnome.png";
    }
    else if ( race.value == "Half-Elf" ) {
        racetraits.innerHTML = "+2 Charisma, +1 to Two Other Ability Scores, Darkvision, Fey Ancestry, Skill Versatility";
        classpic.src = "Images/half-elf.jfif";
    }
    else if ( race.value == "Halfling" ) {
        racetraits.innerHTML = "+2 Dexterity, Lucky, Brave, Halfling Nimbleness";
        classpic.src = "Images/halfling.jfif";
    }
    else if ( race.value == "Half-Orc" ) {
        racetraits.innerHTML = "+2 Strength, +1 Constitution, Darkvision, Menacing, Relentless, Endurance, Savage Attacks";
        classpic.src = "Images/half-orc.jfif";
    }
    else if ( race.value == "Human" ) {
        racetraits.innerHTML = "+1 to All Ability Scores, Extra Language";
        classpic.src = "Images/human.jfif";
    }
    else if ( race.value == "Tiefling" ) {
        racetraits.innerHTML = "+2 Charisma, +1 Intelligence, Darkvision, Hellish Resistance, Infernal Legacy";
        classpic.src = "Images/tiefling.png";
    }
} 

function classtraits() 
{
    var selected = document.getElementById('selected');
    var description = document.getElementById('description');
    var picked = document.getElementById('picked');
    if ( selected.value == "Barbarian" ) {
        picked.innerHTML = "Barbarian:"
        description.innerHTML = "A fierce warrior of primitive background who can enter a battle rage.<br><br><b>Hit Die:</b> d12<br><b>Primary Ability:</b> Strength<br><b>Saves:</b> Strength & Constitution"
    }
    else if ( selected.value == "Bard" ) {
        picked.innerHTML = "Bard:"
        description.innerHTML = "An inspiring magiciian whose power echoes the music of creation.<br><br><b>Hit Die:</b> d8<br><b>Primary Ability:</b> Charisma<br><b>Saves:</b> Dexterity & Charisma"
    }
    else if ( selected.value == "Cleric" ) {
        picked.innerHTML = "Cleric:"
        description.innerHTML = "A priestly champion who wields divine magic in service of higher power.<br><br><b>Hit Die:</b> d8<br><b>Primary Ability:</b> Wisdom<br><b>Saves:</b> Wisdom & Charisma"
    }
    else if ( selected.value == "Druid" ) {
        picked.innerHTML = "Druid:"
        description.innerHTML = "A priest of the Old Faith, wielding the powers of nature and adoption animal forms.<br><br><b>Hit Die:</b> d8<br><b>Primary Ability:</b> Wisdom<br><b>Saves:</b> Intelligence & Wisdom"
    }
    else if ( selected.value == "Fighter" ) {
        picked.innerHTML = "Fighter:"
        description.innerHTML = "A master of martial combat, skilled with a variety of weapons and armor.<br><br><b>Hit Die:</b> d10<br><b>Primary Ability:</b> Strength or Dexterity<br><b>Saves:</b> Strength & Constitution"
    }
    else if ( selected.value == "Monk" ) {
        picked.innerHTML = "Monk:"
        description.innerHTML = "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.<br><br><b>Hit Die:</b> d8<br><b>Primary Ability:</b> Dexterity & Wisdom<br><b>Saves:</b> Strength & Dexterity"
    }
    else if ( selected.value == "Paladin" ) {
        picked.innerHTML = "Paladin:"
        description.innerHTML = "A holy warrior bound to a sacred oath.<br><br><b>Hit Die:</b> d10<br><b>Primary Ability:</b> Strength & Charisma<br><b>Saves:</b> Wisdom & Charisma"
    }
    else if ( selected.value == "Ranger" ) {
        picked.innerHTML = "Ranger:"
        description.innerHTML = "A warrior who combats threats on the edges of civiliization.<br><br><b>Hit Die:</b> d10<br><b>Primary Ability:</b> Dexterity & Wisdom<br><b>Saves:</b> Strength & Dexterity"
    }
    else if ( selected.value == "Rogue" ) {
        picked.innerHTML = "Rogue:"
        description.innerHTML = "A scoundrel who uses stealth and trickery to overcome obstacles and enemies.<br><br><b>Hit Die:</b> d8<br><b>Primary Ability:</b> Dexterity<br><b>Saves:</b> Dexterity & Intelligence"
    }
    else if ( selected.value == "Sorcerer" ) {
        picked.innerHTML = "Sorcerer:"
        description.innerHTML = "A spellcaster who draws on inherent magic from a gift or bloodline.<br><br><b>Hit Die:</b> d6<br><b>Primary Ability:</b> Charisma<br><b>Saves:</b> Constitution & Charisma"
    }
    else if ( selected.value == "Warlock" ) {
        picked.innerHTML = "Warlock:"
        description.innerHTML = "A wielder of magic that is derived from a bargain with an extraplanar entity.<br><br><b>Hit Die:</b> d8<br><b>Primary Ability:</b> Charisma<br><b>Saves:</b> Wisdom & Charisma"
    }
    else if ( selected.value == "Wizard" ) {
        picked.innerHTML = "Wizard:"
        description.innerHTML = "A scholarly magic-user capable of manipulating the structures of reality.<br><br><b>Hit Die:</b> d6<br><b>Primary Ability:</b> Intelligence<br><b>Saves:</b> Intelligence & Wisdom"
    }
    
}


function popup() {
    document.getElementById('myForm').style.display = "block";
}

function popdown() {
    document.getElementById('myForm').style.display = "none";
}

function new_character_form() {
    var selected = document.getElementById('selected');
    var race = document.getElementById('race-select');
    var char_name = document.getElementById('selected_char_name');
    var player_name = document.getElementById('selected_player_name');
    var level = document.getElementById('selected_level');
    
    window.open("character_sheet.html","_self")
}
