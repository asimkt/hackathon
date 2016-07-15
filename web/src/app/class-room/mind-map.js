angular
  .module('app')
  .component('mindMap', {
    templateUrl: 'app/class-room/mind-map.html',
    bindings: {
      map_data: '<'
    },
    controller: MindMapController
  });

/** @ngInject */
function MindMapController($timeout) {
  var vm = this;
  vm.apiWait = true;
  $timeout(function(){
    vm.apiWait = false;
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

          var config = {
      dataSource: viz,
      forceLocked: false,
      graphHeight: function(){ return 400; },
      graphWidth: function(){ return 900; },
      nodeCaption: function(node){
        return node.caption;
      }
    };

    alchemy = new Alchemy(config);
  },2000)

  }