Template.addPlayerForm.events({
    'submit form': function(theEvent, theTemplate){
        theEvent.preventDefault();
        var playerNameVar = theTemplate.find('#playerName').value;
        Meteor.call('insertPlayerData', playerNameVar);
    }
});
    
Meteor.subscribe('thePlayers');
	

