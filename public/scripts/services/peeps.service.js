myApp.service('PeepsService', function ($http) {
    var sv = this;

    sv.peepShow = {list: []};
    sv.peeps = {
        add: function (newPeep) {
            console.log('in addRecord:', newPeep);
            $http({
                method: 'POST',
                url: '/peeps',
                data: newPeep
            });
        },
        get: function () {
            console.log('in getRecords');
            return $http({
                method: 'GET',
                url: '/peeps',
            }).then(function (response) {
                console.log('in service, back from server with:', response);
                sv.peepShow.list = response.data;
                console.log('peep show', sv.peepShow);
            });
        },
        delete: function(peepToDelete){
            console.log('logging inside peeps service delete function -> ', peepToDelete);
            return $http({
                method: 'DELETE',
                url: '/peeps',
                data: peepToDelete._id
            });
        }
    };
});