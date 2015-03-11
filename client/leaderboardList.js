Template.leaderboard.player = function(){
    var currentUserId = Meteor.userId();
    return PlayersList.find(
        {createdBy: currentUserId},
        {sort: {score: -1, name: 1}}
        );

}

Template.leaderboard.selectedClass = function(){
    var selectedPlayer = Session.get('selectedPlayer');
    var playerId = this._id;
    if(selectedPlayer === playerId){
        return 'selected';
    }
}

Template.leaderboard.showSelectedPlayer = function(){
    var selectedPlayer = Session.get('selectedPlayer');
    return PlayersList.findOne(selectedPlayer);
}

Template.leaderboard.events({
    'click li.player': function(){
        var playerId = this._id;
        Session.set('selectedPlayer', playerId);
        var selectedPlayer = Session.get('selectedPlayer');
        console.log(selectedPlayer);
    },
    'click #increment': function(){
        var selectedPlayer = Session.get('selectedPlayer');
        Meteor.call('modifyPlayerScore', selectedPlayer, 5);
    },
    'click #decrement': function(){
        var selectedPlayer = Session.get('selectedPlayer');
        Meteor.call('modifyPlayerScore', selectedPlayer, -5)
    }, 
    'click #remove': function(){
        var selectedPlayer = Session.get('selectedPlayer');
        Meteor.call('removePlayer', selectedPlayer);  
    }
        	
});
