import Vue from 'vue'

const anchor = {
  inserted: function(el, binding) {
    el.onclick = function() {
      let total = document.getElementById(`${binding.value}`).offsetTop - 80
      let distance = document.getElementsByClassName('content-wrapper')[0]
        .scrollTop
      let step = total / 100
      if (total > distance) {
        ;(function smoothDown() {
          if (distance < total) {
            distance += step
            document.getElementsByClassName(
              'content-wrapper'
            )[0].scrollTop = distance
            setTimeout(smoothDown, 5)
          } else {
            document.getElementsByClassName(
              'content-wrapper'
            )[0].scrollTop = total
          }
        })()
      } else {
        let newTotal = distance - total
        step = newTotal / 50
        ;(function smoothUp() {
          if (distance > total) {
            distance -= step
            document.getElementsByClassName(
              'content-wrapper'
            )[0].scrollTop = distance
            setTimeout(smoothUp, 5)
          } else {
            document.getElementsByClassName(
              'content-wrapper'
            )[0].scrollTop = total
          }
        })()
      }
    }
  }
}

export default () => {
  Vue.directive('anchor', anchor)
}
