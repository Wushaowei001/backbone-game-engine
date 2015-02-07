/**
 *
 * Backbone Game Engine - An elementary HTML5 canvas game engine using Backbone.
 *
 * Copyright (c) 2014 Martin Drapeau
 * https://github.com/martindrapeau/backbone-game-engine
 *
 */
window._world = {"viewportBottom":156,"id":5,"x":0,"y":0,"tileWidth":32,"tileHeight":32,"width":212,"height":17,"backgroundColor":"rgba(66, 66, 255, 1)","hero":"frog","sprites":[{"name":"land7","state":"idle","sequenceIndex":0,"x":0,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":0,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":0,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":32,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":32,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":32,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":64,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":64,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":64,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":96,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":96,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":96,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":128,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":128,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":128,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":160,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":160,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":160,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":192,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":192,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":192,"y":512},{"name":"land5","state":"idle","sequenceIndex":0,"x":0,"y":416},{"name":"land5","state":"idle","sequenceIndex":0,"x":32,"y":416},{"name":"land5","state":"idle","sequenceIndex":0,"x":64,"y":416},{"name":"land5","state":"idle","sequenceIndex":0,"x":96,"y":416},{"name":"land5","state":"idle","sequenceIndex":0,"x":128,"y":416},{"name":"land5","state":"idle","sequenceIndex":0,"x":160,"y":416},{"name":"land5","state":"idle","sequenceIndex":0,"x":192,"y":416},{"name":"land6","state":"idle","sequenceIndex":0,"x":224,"y":416},{"name":"land7","state":"idle","sequenceIndex":0,"x":224,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":224,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":224,"y":448},{"name":"cloud-platform1","state":"idle","sequenceIndex":0,"x":320,"y":416},{"name":"cloud-platform2","state":"idle","sequenceIndex":0,"x":352,"y":416},{"name":"cloud-platform3","state":"idle","sequenceIndex":0,"x":384,"y":416},{"name":"cloud-platform1","state":"idle","sequenceIndex":0,"x":480,"y":416},{"name":"cloud-platform2","state":"idle","sequenceIndex":0,"x":512,"y":416},{"name":"cloud-platform3","state":"idle","sequenceIndex":0,"x":544,"y":416},{"name":"cloud-platform1","state":"idle","sequenceIndex":0,"x":640,"y":416},{"name":"cloud-platform2","state":"idle","sequenceIndex":0,"x":672,"y":416},{"name":"cloud-platform3","state":"idle","sequenceIndex":0,"x":704,"y":416},{"name":"land4","state":"idle","sequenceIndex":0,"x":800,"y":416},{"name":"land7","state":"idle","sequenceIndex":0,"x":800,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":832,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":864,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":864,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":832,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":800,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":800,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":832,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":864,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":896,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":928,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":960,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":960,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":928,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":896,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":896,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":928,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":960,"y":512},{"name":"land5","state":"idle","sequenceIndex":0,"x":832,"y":416},{"name":"land5","state":"idle","sequenceIndex":0,"x":896,"y":416},{"name":"land5","state":"idle","sequenceIndex":0,"x":928,"y":416},{"name":"land5","state":"idle","sequenceIndex":0,"x":864,"y":416},{"name":"land6","state":"idle","sequenceIndex":0,"x":960,"y":416},{"name":"cloud-small","state":"idle","sequenceIndex":0,"x":1088,"y":416},{"name":"cloud-small","state":"idle","sequenceIndex":0,"x":1120,"y":416},{"name":"cloud-small","state":"idle","sequenceIndex":0,"x":1184,"y":416},{"name":"cloud-small","state":"idle","sequenceIndex":0,"x":1152,"y":416},{"name":"cloud-small","state":"idle","sequenceIndex":0,"x":1344,"y":384},{"name":"cloud-small","state":"idle","sequenceIndex":0,"x":1376,"y":384},{"name":"cloud-small","state":"idle","sequenceIndex":0,"x":1408,"y":384},{"name":"cloud-small","state":"idle","sequenceIndex":0,"x":1536,"y":352},{"name":"cloud-small","state":"idle","sequenceIndex":0,"x":1568,"y":352},{"name":"cloud-small","state":"idle","sequenceIndex":0,"x":1600,"y":352},{"name":"land4","state":"idle","sequenceIndex":0,"x":1728,"y":352},{"name":"land5","state":"idle","sequenceIndex":0,"x":1760,"y":352},{"name":"land7","state":"idle","sequenceIndex":0,"x":1760,"y":384},{"name":"land7","state":"idle","sequenceIndex":0,"x":1728,"y":384},{"name":"land7","state":"idle","sequenceIndex":0,"x":1728,"y":416},{"name":"land7","state":"idle","sequenceIndex":0,"x":1760,"y":416},{"name":"land7","state":"idle","sequenceIndex":0,"x":1760,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":1728,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":1728,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":1760,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":1760,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":1728,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":1792,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":1792,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":1792,"y":384},{"name":"land7","state":"idle","sequenceIndex":0,"x":1792,"y":416},{"name":"land7","state":"idle","sequenceIndex":0,"x":1792,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":1824,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":1824,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":1824,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":1824,"y":384},{"name":"land7","state":"idle","sequenceIndex":0,"x":1824,"y":416},{"name":"land7","state":"idle","sequenceIndex":0,"x":1856,"y":416},{"name":"land7","state":"idle","sequenceIndex":0,"x":1856,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":1856,"y":512},{"name":"land7","state":"idle","sequenceIndex":0,"x":1856,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":1856,"y":384},{"name":"land7","state":"idle","sequenceIndex":0,"x":1888,"y":384},{"name":"land7","state":"idle","sequenceIndex":0,"x":1888,"y":416},{"name":"land7","state":"idle","sequenceIndex":0,"x":1888,"y":448},{"name":"land7","state":"idle","sequenceIndex":0,"x":1888,"y":480},{"name":"land7","state":"idle","sequenceIndex":0,"x":1888,"y":512},{"name":"land5","state":"idle","sequenceIndex":0,"x":1792,"y":352},{"name":"land5","state":"idle","sequenceIndex":0,"x":1824,"y":352},{"name":"land5","state":"idle","sequenceIndex":0,"x":1856,"y":352},{"name":"land6","state":"idle","sequenceIndex":0,"x":1888,"y":352},{"name":"water1","state":"idle","sequenceIndex":0,"x":256,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":288,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":320,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":384,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":352,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":416,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":448,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":480,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":544,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":512,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":576,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":608,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":640,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":672,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":704,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":736,"y":480},{"name":"water1","state":"idle","sequenceIndex":0,"x":768,"y":480},{"name":"water2","state":"idle","sequenceIndex":0,"x":768,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":736,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":704,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":672,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":640,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":608,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":576,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":544,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":512,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":480,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":416,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":448,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":384,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":352,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":288,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":256,"y":512},{"name":"water2","state":"idle","sequenceIndex":0,"x":320,"y":512},{"name":"frog","state":"idle-right","sequenceIndex":0,"x":96,"y":356,"nextState":"idle-right","velocity":0,"acceleration":0,"yVelocity":0,"yAcceleration":0}],"viewportTop":0,"viewportRight":0,"viewportLeft":0,"state":"edit"};