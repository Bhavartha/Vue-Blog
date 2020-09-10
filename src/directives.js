import Vue from 'vue'

Vue.directive('theme', {
    bind(el, binding) {
        switch (binding.value) {
            case 'wide':
                el.style.maxWidth = "1200px"
                break;
            case 'narrow':
                el.style.maxWidth = "500px"
                break;
        }
        if (binding.arg == 'column') {
            el.style.background = '#ddd'
            el.style.padding = '20px'
        }
    }
})