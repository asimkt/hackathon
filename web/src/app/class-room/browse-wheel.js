angular
  .module('app')
  .component('browseWheel', {
    templateUrl: 'app/class-room/browse-wheel.html',
    bindings: {
      browseWheelData: '<'
    },
    controller: BrowseWheelController
  });

function BrowseWheelController() {
  var vm = this;
  vm.options = {
            chart: {
                type: 'sunburstChart',
                height: 450,
                color: d3.scale.category10(),
                duration: 250
            }
        };

  vm.data = [{
    "color": {},
    "name": "python",
    "children": [{
        "count": 5,
        "size": 5,
        "name": "datatype",
        "children": [{
            "count": 0,
            "name": "boolean",
            "children": []
        }, {
            "count": 0,
            "name": "list",
            "children": []
        }, {
            "count": 0,
            "name": "string",
            "children": []
        }, {
            "count": 0,
            "name": "dictionary",
            "children": []
        }, {
            "count": 0,
            "name": "tuple",
            "children": []
        }]
    }, {
        "count": 3,
        "size": 3,
        "name": "Operators",
        "children": [{
            "count": 0,
            "name": "arithmetic",
            "children": []
        }, {
            "count": 0,
            "name": "relative",
            "children": []
        }, {
            "count": 0,
            "name": "logic",
            "children": []
        }]
    }, {
        "count": 3,
        "size": 3,
        "name": "Conditionals",
        "children": [{
            "count": 0,
            "name": "if",
            "children": []
        }, {
            "count": 0,
            "name": "if else",
            "children": []
        }, {
            "count": 0,
            "name": "if elif else",
            "children": []
        }]
    }, {
        "count": 2,
        "size": 2,
        "name": "Iterations",
        "children": [{
            "count": 0,
            "name": "for",
            "children": []
        }, {
            "count": 0,
            "name": "while",
            "children": []
        }]
    }]
  }];


}