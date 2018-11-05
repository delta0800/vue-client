import Vue from 'vue'
import SvgIcon from '@/components/common/SvgIcon'

const renderIcon = () => {
  // register globally
  Vue.component('svg-icon', SvgIcon)

  const requireAll = requireContext => {
    return requireContext.keys().map(requireContext)
  }

  const req = require.context('../assets/icons', false, /\.svg$/)
  return requireAll(req)
}

export default renderIcon
