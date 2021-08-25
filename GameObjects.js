AFRAME.registerComponent('wirefence',{
    init: function() {
        var posX = -20;
        for(var i = 0; i < 5; i++) {
            var fence1 = document.createElement('a-entity');
            var fence2 = document.createElement('a-entity');
            var fence3 = document.createElement('a-entity');
            var fence4 = document.createElement('a-entity');
            posX += 5;
            posY = 2.5;
            var scale = {
                x: 1.5,
                y: 1.5,
                z: 1.5
            };
            fence1.setAttribute('id',`fence1-${i}`);
            fence2.setAttribute('id',`fence2-${i}`);
            fence3.setAttribute('id',`fence3-${i}`);
            fence4.setAttribute('id',`fence4-${i}`);
            fence1.setAttribute('position',{
                x: posX,
                y: posY,
                z: -25
            });
            fence2.setAttribute('position',{
                x: posX,
                y: posY,
                z: 25
            });
            fence3.setAttribute('position',{
                x: -25,
                y: posY,
                z: posX
            });
            fence4.setAttribute('position',{
                x: 25,
                y: posY,
                z: posX
            });
            fence1.setAttribute('scale',scale);
            fence1.setAttribute('gltf-model','./models/barbed_wire_fence/scene.gltf');
            fence1.setAttribute('static-body');
            fence2.setAttribute('scale',scale);
            fence2.setAttribute('gltf-model','./models/barbed_wire_fence/scene.gltf');
            fence2.setAttribute('static-body');
            fence3.setAttribute('scale',scale);
            fence3.setAttribute('gltf-model','./models/barbed_wire_fence/scene.gltf');
            fence3.setAttribute('static-body');
            fence4.setAttribute('scale',scale);
            fence4.setAttribute('gltf-model','./models/barbed_wire_fence/scene.gltf');
            fence4.setAttribute('static-body');
            fence3.setAttribute('rotation',{x:0,y:90,z:0});
            fence4.setAttribute('rotation',{x:0,y:90,z:0});
            var scene = document.querySelector('#scene');
            scene.appendChild(fence1);
            scene.appendChild(fence2);
            scene.appendChild(fence3);
            scene.appendChild(fence4);
        }
    }
});
AFRAME.registerComponent('boxes',{
    schema: {
        height:{type:'number',default:3},
        width:{type:'number',default:3},
        depth:{type:'number',default:3}
    },
    init: function() {
        var px = [22.86, -17.35, -12.81, 0.44, -30.18, -25.89, 15.61, 29.68, 11.95, -15.40, -14.09, 34.76, 2.29, 21.77, 1.57, 34.72, 12.04, -10.90, 6.48, 15.66];
        var pz = [54.56, -4.71, 14.91, 56.74, 41.13, 50.76, 57.84, 7.02, -5.24, -26.82, 27.59, -35.78, 34.52, 31.32, -9.22, 26.72, 48.90, 27.24, 9.94, 54.29];
        for(var i=0;i<20;i++) {
            var box = document.createElement('a-entity');
            box.setAttribute('id','box'+i+1);
            // var posX = Math.random()*100-50;
            // var posZ = Math.random()*100-50;
            var posX = px[i];
            var posZ = pz[i];
            var posY = 1.5;
            box.setAttribute('position',{
                x: posX,
                y: posY,
                z: posZ
            });
            box.setAttribute('geometry',{
                primitive: 'box',
                height: this.data.height,
                width: this.data.width,
                depth: this.data.depth
            });
            box.setAttribute('material',{
                src: './models/box.jpg',
                repeat: '1 1 1'
            });
            box.setAttribute('static-body',{});
            var scene = document.querySelector('#scene');
            scene.appendChild(box);
        };
    }
});