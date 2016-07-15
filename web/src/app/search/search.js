angular
  .module('app')
  .component('learnSearch', {
    templateUrl: 'app/search/search.html',
    controller: SearchController
  });

/** @ngInject */
function SearchController($http, $state) {
  var vm = this;

  vm.countries = [
    { "name": "Afghanistan", "code": "AF" },
    { "name": "Aland Islands", "code": "AX" },
    { "name": "Albania", "code": "AL" },
    { "name": "Algeria", "code": "DZ" },
    { "name": "American Samoa", "code": "AS" },
    { "name": "AndorrA", "code": "AD" },
    { "name": "Angola", "code": "AO" },
    { "name": "Anguilla", "code": "AI" },
    { "name": "Antarctica", "code": "AQ" },
    { "name": "Antigua and Barbuda", "code": "AG" },
    { "name": "Argentina", "code": "AR" },
    { "name": "Armenia", "code": "AM" },
    { "name": "Aruba", "code": "AW" },
    { "name": "Australia", "code": "AU" },
    { "name": "Austria", "code": "AT" },
    { "name": "Azerbaijan", "code": "AZ" },
    { "name": "Bahamas", "code": "BS" },
    { "name": "Bahrain", "code": "BH" }
  ];

  vm.inputChanged = function(){
  	$state.go('courses');
  }

  $http
    .get('app/search/search.json')
    .then(function (response) {
      vm.countries = response.data;
    });
}

setTimeout(function(){
      var config = {
      dataSource: viz,
      forceLocked: false,
      graphHeight: function(){ return 400; },
      graphWidth: function(){ return 1400; },      
      linkDistance: function(){ return 40; },
      nodeTypes: {"node_type":[ "Maintainer",
                                "Contributor"]},
      nodeCaption: function(node){ 
        return node.caption + " " + node.fun_fact;}
    };

    alchemy = new Alchemy(config);

    setTimeout(function(){ alchemy.forceLocked = true }, 2000);

},2000)
    var res = {
      "comment": "Charlize Theron's 'ego' network as GraphJSON",
      "nodes": [
        {
          "caption": "Screen Actors Guild Award for Outstanding Performance by a Female Actor in a Miniseries or Television Movie",
          "type": "award",
          "id": 595472
        },
        {
          "caption": "Children of the Corn III: Urban Harvest",
          "type": "movie",
          "id": 626470
        },
        {
          "caption": "Sleepwalking",
          "type": "movie",
          "id": 795744
        },
        {
          "caption": "That Thing You Do!",
          "type": "movie",
          "id": 692946
        },
        {
          "caption": "Trapped",
          "type": "movie",
          "id": 689794
        },
        {
          "caption": "Head in the Clouds",
          "type": "movie",
          "id": 709577
        },
        {
          "caption": "Waking Up in Reno",
          "type": "movie",
          "id": 635905
        },
        {
          "caption": "Battle in Seattle",
          "type": "movie",
          "id": 734583
        },
        {
          "caption": "Mighty Joe Young",
          "type": "movie",
          "id": 662595
        },
        {
          "caption": "Academy Award for Actress in a Leading Role",
          "type": "award",
          "id": 593781
        },
        {
          "caption": "The Devil's Advocate",
          "type": "movie",
          "id": 740763
        },
        {
          "caption": "Screen Actors Guild Award for Outstanding Performance by a Cast in a Motion Picture",
          "type": "award",
          "id": 595440
        },
        {
          "caption": "Silver Bear for Best Actress",
          "type": "award",
          "id": 601507
        },
        {
          "caption": "The Curse of the Jade Scorpion",
          "type": "movie",
          "id": 649461
        },
        {
          "caption": "MTV Movie Award for Best Female Performance",
          "type": "award",
          "id": 595074
        },
        {
          "caption": "15 Minutes",
          "type": "movie",
          "id": 634248
        },
        {
          "caption": "The Burning Plain",
          "type": "movie",
          "id": 670704
        },
        {
          "caption": "The Life and Death of Peter Sellers",
          "type": "movie",
          "id": 794982
        },
        {
          "caption": "Prometheus",
          "type": "movie",
          "id": 608746
        },
        {
          "caption": "Teen Choice Award for Choice Summer Movie Star: Female",
          "type": "award",
          "id": 599909
        },
        {
          "caption": "Chicago Film Critics Association Award for Best Actress",
          "type": "award",
          "id": 623686
        },
        {
          "caption": "Golden Globe Award for Best Supporting Actress - Series, Miniseries or Television Film",
          "type": "award",
          "id": 598027
        },
        {
          "caption": "Golden Globe Award for Best Actress - Musical or Comedy Film",
          "type": "award",
          "id": 595206
        },
        {
          "caption": "Mad Max: Fury Road",
          "type": "movie",
          "id": 804341
        },
        {
          "caption": "In the Valley of Elah",
          "type": "movie",
          "id": 621675
        },
        {
          "caption": "Screen Actors Guild Award for Outstanding Performance by a Female Actor in a Leading Role",
          "type": "award",
          "id": 593954
        },
        {
          "caption": "Golden Raspberry Award for Worst Actress",
          "type": "award",
          "id": 594134
        },
        {
          "caption": "East of Havana",
          "type": "movie",
          "id": 609415
        },
        {
          "caption": "The Road",
          "type": "movie",
          "id": 627715
        },
        {
          "caption": "Golden Globe Award for Best Actress - Drama Film",
          "type": "award",
          "id": 593776
        },
        {
          "caption": "Charles Jacobus Theron",
          "type": "person",
          "id": 314008
        },
        {
          "caption": "Jackson Theron",
          "type": "person",
          "id": 314009
        },
        {
          "caption": "Primetime Emmy Award for Outstanding Supporting Actress in a Miniseries or a Movie",
          "type": "award",
          "id": 595684
        },
        {
          "caption": "The Cider House Rules",
          "type": "movie",
          "id": 801237
        },
        {
          "caption": "The Astronaut's Wife",
          "type": "movie",
          "id": 657006
        },
        {
          "caption": "Broadcast Film Critics Association Award for Best Actress",
          "type": "award",
          "id": 601849
        },
        {
          "caption": "Hancock",
          "type": "movie",
          "id": 652245
        },
        {
          "caption": "Charlize Theron",
          "root": true,
          "id": 314003
        },
        {
          "caption": "Stuart Townsend",
          "type": "person",
          "id": 314004
        },
        {
          "caption": "Stephan Jenkins",
          "type": "person",
          "id": 314005
        },
        {
          "caption": "Benoni, Gauteng",
          "type": "person",
          "id": 314006
        },
        {
          "caption": "Gerda Jacoba Aletta Maritz",
          "type": "person",
          "id": 314007
        },
        {
          "caption": "Æon Flux",
          "type": "movie",
          "id": 663286
        },
        {
          "caption": "Snow White and the Huntsman",
          "type": "movie",
          "id": 599907
        },
        {
          "caption": "Young Adult",
          "type": "movie",
          "id": 661733
        },
        {
          "caption": "Reindeer Games",
          "type": "movie",
          "id": 761000
        },
        {
          "caption": "Monster",
          "type": "movie",
          "id": 729778
        },
        {
          "caption": "The Legend of Bagger Vance",
          "type": "movie",
          "id": 804616
        },
        {
          "caption": "Teen Choice Award for Choice Hissy Fit: Film",
          "type": "award",
          "id": 599908
        },
        {
          "caption": "The Yards",
          "type": "movie",
          "id": 781638
        },
        {
          "caption": "MTV Movie Award for Best Kiss",
          "type": "award",
          "id": 595095
        },
        {
          "caption": "Celebrity",
          "type": "movie",
          "id": 611629
        },
        {
          "caption": "Astro Boy",
          "type": "movie",
          "id": 818608
        },
        {
          "caption": "North Country",
          "type": "movie",
          "id": 784437
        },
        {
          "caption": "2 Days in the Valley",
          "type": "movie",
          "id": 615556
        },
        {
          "caption": "Satellite Award for Best Actress – Motion Picture",
          "type": "award",
          "id": 595704
        },
        {
          "caption": "Trial and Error",
          "type": "movie",
          "id": 799574
        },
        {
          "caption": "National Society of Film Critics Award for Best Actress",
          "type": "award",
          "id": 595702
        },
        {
          "caption": "Independent Spirit Award for Best Female Lead",
          "type": "award",
          "id": 595703
        },
        {
          "caption": "Two Eyes Staring",
          "type": "movie",
          "id": 788889
        },
        {
          "caption": "Sweet November",
          "type": "movie",
          "id": 811358
        },
        {
          "caption": "Teen Choice Movie Award: Villain",
          "type": "award",
          "id": 595082
        },
        {
          "caption": "Satellite Award for Best Supporting Actress – Drama",
          "type": "award",
          "id": 602151
        },
        {
          "caption": "San Francisco Film Critics Circle Award for Best Actress",
          "type": "award",
          "id": 669827
        },
        {
          "caption": "Independent Spirit Award for Best First Feature",
          "type": "award",
          "id": 599387
        },
        {
          "caption": "The Italian Job",
          "type": "movie",
          "id": 817380
        },
        {
          "caption": "Hollywood Confidential",
          "type": "movie",
          "id": 711550
        },
        {
          "caption": "Men of Honor",
          "type": "movie",
          "id": 682763
        },
        {
          "caption": "BAFTA Award for Best Actress in a Leading Role",
          "type": "award",
          "id": 594478
        }
      ],
      "edges": [
        {
          "source": 314003,
          "target": 621675,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 818608,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 601849,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 649461,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 669827,
          "caption": "RECEIVED"
        },
        {
          "source": 314003,
          "target": 608746,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 593954,
          "caption": "RECEIVED"
        },
        {
          "source": 314003,
          "target": 595702,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 601849,
          "caption": "RECEIVED"
        },
        {
          "source": 314003,
          "target": 595095,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 729778,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 595703,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 811358,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 595472,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 661733,
          "caption": "PRODUCED"
        },
        {
          "source": 314003,
          "target": 784437,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 634248,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 662595,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 804616,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 595703,
          "caption": "RECEIVED"
        },
        {
          "source": 314003,
          "target": 626470,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 599387,
          "caption": "RECEIVED"
        },
        {
          "source": 314003,
          "target": 599908,
          "caption": "RECEIVED"
        },
        {
          "source": 314003,
          "target": 682763,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 595702,
          "caption": "RECEIVED"
        },
        {
          "source": 314003,
          "target": 788889,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 657006,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 795744,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 593781,
          "caption": "RECEIVED"
        },
        {
          "source": 314003,
          "target": 594478,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 594134,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 595074,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 692946,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 740763,
          "caption": "ACTED_IN"
        },
        {
          "source": 314005,
          "target": 314003,
          "caption": "PARTNER_OF"
        },
        {
          "source": 314003,
          "target": 711550,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 595440,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 801237,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 599907,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 761000,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 781638,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 670704,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 609415,
          "caption": "PRODUCED"
        },
        {
          "source": 314003,
          "target": 314009,
          "caption": "PARENT_OF"
        },
        {
          "source": 314003,
          "target": 652245,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 661733,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 602151,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 635905,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 799574,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 593781,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 817380,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 611629,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 729778,
          "caption": "PRODUCED"
        },
        {
          "source": 314003,
          "target": 709577,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 804341,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 627715,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 794982,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 623686,
          "caption": "RECEIVED"
        },
        {
          "source": 314003,
          "target": 595082,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 689794,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 788889,
          "caption": "PRODUCED"
        },
        {
          "source": 314007,
          "target": 314003,
          "caption": "PARENT_OF"
        },
        {
          "source": 314003,
          "target": 593776,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 734583,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 598027,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 601507,
          "caption": "RECEIVED"
        },
        {
          "source": 314003,
          "target": 599909,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 314004,
          "caption": "PARTNER_OF"
        },
        {
          "source": 314003,
          "target": 663286,
          "caption": "ACTED_IN"
        },
        {
          "source": 314003,
          "target": 314006,
          "caption": "BORN_AT"
        },
        {
          "source": 314003,
          "target": 615556,
          "caption": "ACTED_IN"
        },
        {
          "source": 314004,
          "target": 314003,
          "caption": "PARTNER_OF"
        },
        {
          "source": 314008,
          "target": 314003,
          "caption": "PARENT_OF"
        },
        {
          "source": 314003,
          "target": 314005,
          "caption": "PARTNER_OF"
        },
        {
          "source": 314003,
          "target": 795744,
          "caption": "PRODUCED"
        },
        {
          "source": 314003,
          "target": 595704,
          "caption": "RECEIVED"
        },
        {
          "source": 314003,
          "target": 670704,
          "caption": "EXEC_PRODUCED"
        },
        {
          "source": 314003,
          "target": 593954,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 595206,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 593776,
          "caption": "RECEIVED"
        },
        {
          "source": 314003,
          "target": 595704,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 595684,
          "caption": "NOMINATED"
        },
        {
          "source": 314003,
          "target": 599387,
          "caption": "NOMINATED"
        }
      ]
    };
    var res = {
      "errors": [],
      "results": [{
        "data": [{
          "graph": {
            "relationships": [{
              "endNode": "6",
              "startNode": "0",
              "type": "progress_to",
              "id": "5",
              "properties": {
                "priority": 3
              }
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "0",
              "properties": {
                "sname": "Datatypes Concept",
                "name": "Datatypes Concept",
                "media": "",
                "cat1": "datatype",
                "cat2": "datatype",
                "root": "datatype",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Concept"],
              "id": "6",
              "properties": {
                "sname": "Boolean",
                "name": "Boolean",
                "media": "",
                "cat1": "datatype",
                "cat2": "boolean",
                "root": "boolean",
                "type": "concept"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "5",
              "startNode": "0",
              "type": "progress_to",
              "id": "4",
              "properties": {
                "priority": 5
              }
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "0",
              "properties": {
                "sname": "Datatypes Concept",
                "name": "Datatypes Concept",
                "media": "",
                "cat1": "datatype",
                "cat2": "datatype",
                "root": "datatype",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Concept"],
              "id": "5",
              "properties": {
                "sname": "Lists",
                "name": "Lists",
                "media": "",
                "cat1": "datatype",
                "cat2": "list",
                "root": "list",
                "type": "concept"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "4",
              "startNode": "0",
              "type": "progress_to",
              "id": "3",
              "properties": {
                "priority": 4
              }
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "0",
              "properties": {
                "sname": "Datatypes Concept",
                "name": "Datatypes Concept",
                "media": "",
                "cat1": "datatype",
                "cat2": "datatype",
                "root": "datatype",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Concept"],
              "id": "4",
              "properties": {
                "sname": "Tuples",
                "name": "Tuples",
                "media": "",
                "cat1": "datatype",
                "cat2": "tuple",
                "root": "tuple",
                "type": "concept"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "3",
              "startNode": "0",
              "type": "progress_to",
              "id": "2",
              "properties": {
                "priority": 2
              }
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "0",
              "properties": {
                "sname": "Datatypes Concept",
                "name": "Datatypes Concept",
                "media": "",
                "cat1": "datatype",
                "cat2": "datatype",
                "root": "datatype",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Concept"],
              "id": "3",
              "properties": {
                "sname": "Dictionary",
                "name": "Dictionary",
                "media": "",
                "cat1": "datatype",
                "cat2": "dictionary",
                "root": "dictionary",
                "type": "concept"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "2",
              "startNode": "0",
              "type": "progress_to",
              "id": "1",
              "properties": {
                "priority": 1
              }
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "0",
              "properties": {
                "sname": "Datatypes Concept",
                "name": "Datatypes Concept",
                "media": "",
                "cat1": "datatype",
                "cat2": "datatype",
                "root": "datatype",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Concept"],
              "id": "2",
              "properties": {
                "sname": "Strings",
                "name": "Strings",
                "media": "",
                "cat1": "datatype",
                "cat2": "string",
                "root": "string",
                "type": "concept"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "1",
              "startNode": "0",
              "type": "analyses_to",
              "id": "0",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "0",
              "properties": {
                "sname": "Datatypes Concept",
                "name": "Datatypes Concept",
                "media": "",
                "cat1": "datatype",
                "cat2": "datatype",
                "root": "datatype",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Analysis"],
              "id": "1",
              "properties": {
                "sname": "Explanation for datatypes concept",
                "name": "Explanation for datatypes concept",
                "media": "",
                "cat1": "datatype",
                "cat2": "datatype",
                "type": "analysis"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "24",
              "startNode": "2",
              "type": "analyses_to",
              "id": "23",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "2",
              "properties": {
                "sname": "Strings",
                "name": "Strings",
                "media": "",
                "cat1": "datatype",
                "cat2": "string",
                "root": "string",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Analysis"],
              "id": "24",
              "properties": {
                "sname": "String Explanation",
                "name": "String Explanation",
                "media": "",
                "cat1": "datatype",
                "cat2": "string",
                "type": "analysis"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "12",
              "startNode": "2",
              "type": "example_to",
              "id": "11",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "2",
              "properties": {
                "sname": "Strings",
                "name": "Strings",
                "media": "",
                "cat1": "datatype",
                "cat2": "string",
                "root": "string",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Example"],
              "id": "12",
              "properties": {
                "sname": "String example 3",
                "name": "String example 3",
                "media": "",
                "cat1": "datatype",
                "cat2": "string",
                "type": "example"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "11",
              "startNode": "2",
              "type": "example_to",
              "id": "10",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "2",
              "properties": {
                "sname": "Strings",
                "name": "Strings",
                "media": "",
                "cat1": "datatype",
                "cat2": "string",
                "root": "string",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Example"],
              "id": "11",
              "properties": {
                "sname": "String example 2",
                "name": "String example 2",
                "media": "",
                "cat1": "datatype",
                "cat2": "string",
                "type": "example"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "10",
              "startNode": "2",
              "type": "example_to",
              "id": "9",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "2",
              "properties": {
                "sname": "Strings",
                "name": "Strings",
                "media": "",
                "cat1": "datatype",
                "cat2": "string",
                "root": "string",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Example"],
              "id": "10",
              "properties": {
                "sname": "String example 1",
                "name": "String example 1",
                "media": "",
                "cat1": "datatype",
                "cat2": "string",
                "type": "example"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "23",
              "startNode": "3",
              "type": "analyses_to",
              "id": "25",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "3",
              "properties": {
                "sname": "Dictionary",
                "name": "Dictionary",
                "media": "",
                "cat1": "datatype",
                "cat2": "dictionary",
                "root": "dictionary",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Analysis"],
              "id": "23",
              "properties": {
                "sname": "Dictionary unfolds",
                "name": "Dictionary unfolds",
                "media": "",
                "cat1": "datatype",
                "cat2": "dictionary",
                "type": "analysis"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "15",
              "startNode": "3",
              "type": "example_to",
              "id": "14",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "3",
              "properties": {
                "sname": "Dictionary",
                "name": "Dictionary",
                "media": "",
                "cat1": "datatype",
                "cat2": "dictionary",
                "root": "dictionary",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Example"],
              "id": "15",
              "properties": {
                "sname": "Dictionary example 3",
                "name": "Dictionary example 3",
                "media": "",
                "cat1": "datatype",
                "cat2": "dictionary",
                "type": "example"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "14",
              "startNode": "3",
              "type": "example_to",
              "id": "13",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "3",
              "properties": {
                "sname": "Dictionary",
                "name": "Dictionary",
                "media": "",
                "cat1": "datatype",
                "cat2": "dictionary",
                "root": "dictionary",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Example"],
              "id": "14",
              "properties": {
                "sname": "Dictionary example 2",
                "name": "Dictionary example 2",
                "media": "",
                "cat1": "datatype",
                "cat2": "dictionary",
                "type": "example"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "13",
              "startNode": "3",
              "type": "example_to",
              "id": "12",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "3",
              "properties": {
                "sname": "Dictionary",
                "name": "Dictionary",
                "media": "",
                "cat1": "datatype",
                "cat2": "dictionary",
                "root": "dictionary",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Example"],
              "id": "13",
              "properties": {
                "sname": "Dictionary example 1",
                "name": "Dictionary example 1",
                "media": "",
                "cat1": "datatype",
                "cat2": "dictionary",
                "type": "example"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "26",
              "startNode": "4",
              "type": "analyses_to",
              "id": "24",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "4",
              "properties": {
                "sname": "Tuples",
                "name": "Tuples",
                "media": "",
                "cat1": "datatype",
                "cat2": "tuple",
                "root": "tuple",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Analysis"],
              "id": "26",
              "properties": {
                "sname": "Tuple Explanation",
                "name": "Tuple Explanation",
                "media": "",
                "cat1": "datatype",
                "cat2": "tuple",
                "type": "analysis"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "16",
              "startNode": "4",
              "type": "example_to",
              "id": "15",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Example"],
              "id": "16",
              "properties": {
                "sname": "Tuple example 1",
                "name": "Tuple example 1",
                "media": "",
                "cat1": "datatype",
                "cat2": "tuple",
                "type": "example"
              }
            }, {
              "labels": ["videos", "Concept"],
              "id": "4",
              "properties": {
                "sname": "Tuples",
                "name": "Tuples",
                "media": "",
                "cat1": "datatype",
                "cat2": "tuple",
                "root": "tuple",
                "type": "concept"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "17",
              "startNode": "4",
              "type": "example_to",
              "id": "16",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Example"],
              "id": "17",
              "properties": {
                "sname": "Tuple example 2",
                "name": "Tuple example 2",
                "media": "",
                "cat1": "datatype",
                "cat2": "tuple",
                "type": "example"
              }
            }, {
              "labels": ["videos", "Concept"],
              "id": "4",
              "properties": {
                "sname": "Tuples",
                "name": "Tuples",
                "media": "",
                "cat1": "datatype",
                "cat2": "tuple",
                "root": "tuple",
                "type": "concept"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "18",
              "startNode": "4",
              "type": "example_to",
              "id": "17",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Example"],
              "id": "18",
              "properties": {
                "sname": "Tuple example 3",
                "name": "Tuple example 3",
                "media": "",
                "cat1": "datatype",
                "cat2": "tuple",
                "type": "example"
              }
            }, {
              "labels": ["videos", "Concept"],
              "id": "4",
              "properties": {
                "sname": "Tuples",
                "name": "Tuples",
                "media": "",
                "cat1": "datatype",
                "cat2": "tuple",
                "root": "tuple",
                "type": "concept"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "22",
              "startNode": "5",
              "type": "analyses_to",
              "id": "21",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "5",
              "properties": {
                "sname": "Lists",
                "name": "Lists",
                "media": "",
                "cat1": "datatype",
                "cat2": "list",
                "root": "list",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Analysis"],
              "id": "22",
              "properties": {
                "sname": "List Explanation",
                "name": "List Explanation",
                "media": "",
                "cat1": "datatype",
                "cat2": "list",
                "type": "analysis"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "21",
              "startNode": "5",
              "type": "example_to",
              "id": "20",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "5",
              "properties": {
                "sname": "Lists",
                "name": "Lists",
                "media": "",
                "cat1": "datatype",
                "cat2": "list",
                "root": "list",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Example"],
              "id": "21",
              "properties": {
                "sname": "List example 3",
                "name": "List example 3",
                "media": "",
                "cat1": "datatype",
                "cat2": "list",
                "type": "example"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "19",
              "startNode": "5",
              "type": "example_to",
              "id": "18",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Example"],
              "id": "19",
              "properties": {
                "sname": "List example 1",
                "name": "List example 1",
                "media": "",
                "cat1": "datatype",
                "cat2": "list",
                "type": "example"
              }
            }, {
              "labels": ["videos", "Concept"],
              "id": "5",
              "properties": {
                "sname": "Lists",
                "name": "Lists",
                "media": "",
                "cat1": "datatype",
                "cat2": "list",
                "root": "list",
                "type": "concept"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "20",
              "startNode": "5",
              "type": "example_to",
              "id": "19",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Example"],
              "id": "20",
              "properties": {
                "sname": "List example 2",
                "name": "List example 2",
                "media": "",
                "cat1": "datatype",
                "cat2": "list",
                "type": "example"
              }
            }, {
              "labels": ["videos", "Concept"],
              "id": "5",
              "properties": {
                "sname": "Lists",
                "name": "Lists",
                "media": "",
                "cat1": "datatype",
                "cat2": "list",
                "root": "list",
                "type": "concept"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "25",
              "startNode": "6",
              "type": "analyses_to",
              "id": "22",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "6",
              "properties": {
                "sname": "Boolean",
                "name": "Boolean",
                "media": "",
                "cat1": "datatype",
                "cat2": "boolean",
                "root": "boolean",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Analysis"],
              "id": "25",
              "properties": {
                "sname": "Boolean Explanation",
                "name": "Boolean Explanation",
                "media": "",
                "cat1": "datatype",
                "cat2": "boolean",
                "type": "analysis"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "9",
              "startNode": "6",
              "type": "example_to",
              "id": "8",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "6",
              "properties": {
                "sname": "Boolean",
                "name": "Boolean",
                "media": "",
                "cat1": "datatype",
                "cat2": "boolean",
                "root": "boolean",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Example"],
              "id": "9",
              "properties": {
                "sname": "Boolean example 3",
                "name": "Boolean example 3",
                "media": "",
                "cat1": "datatype",
                "cat2": "boolean",
                "type": "example"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "8",
              "startNode": "6",
              "type": "example_to",
              "id": "7",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "6",
              "properties": {
                "sname": "Boolean",
                "name": "Boolean",
                "media": "",
                "cat1": "datatype",
                "cat2": "boolean",
                "root": "boolean",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Example"],
              "id": "8",
              "properties": {
                "sname": "Boolean example 2",
                "name": "Boolean example 2",
                "media": "",
                "cat1": "datatype",
                "cat2": "boolean",
                "type": "example"
              }
            }]
          }
        }, {
          "graph": {
            "relationships": [{
              "endNode": "7",
              "startNode": "6",
              "type": "example_to",
              "id": "6",
              "properties": {}
            }],
            "nodes": [{
              "labels": ["videos", "Concept"],
              "id": "6",
              "properties": {
                "sname": "Boolean",
                "name": "Boolean",
                "media": "",
                "cat1": "datatype",
                "cat2": "boolean",
                "root": "boolean",
                "type": "concept"
              }
            }, {
              "labels": ["videos", "Example"],
              "id": "7",
              "properties": {
                "sname": "Boolean example 1",
                "name": "Boolean example 1",
                "media": "",
                "cat1": "datatype",
                "cat2": "boolean",
                "type": "example"
              }
            }]
          }
        }],
        "columns": ["path"]
      }]
    }

    function idIndex(a,id) {
      for (var i=0;i<a.length;i++) {
        if (a[i].id == id) return i;}
      return null;
    }
    var nodes=[], edges=[];
    res.results[0].data.forEach(function (row) {
       row.graph.nodes.forEach(function (n) {
         if (idIndex(nodes,n.id) == null)
           nodes.push({id:n.id,type:n.labels[0],caption:n.properties.name});
       });
       edges = edges.concat( row.graph.relationships.map(function(r) {
         return {source:idIndex(nodes,r.startNode),target:idIndex(nodes,r.endNode),caption:r.type};
       }));
    });
    viz = {nodes:nodes, edges:edges};