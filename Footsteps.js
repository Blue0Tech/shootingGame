AFRAME.registerComponent('footsteps',{
    init: function() {
        this.walk();
    },
    walk: function() {
        window.addEventListener('keydown',e=>{
            var keys = ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d'];
            if(keys.includes(e.key)) {
                var entity = document.querySelector('#footStepEntity');
                entity.components.sound.playSound();
            };
        });
    }
});