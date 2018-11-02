import Vue from 'vue'
import SvgIcon from '@/components/common/SvgIcon'

const renderIcon = () => {
  // register globally
  console.log('icon start')
  Vue.component('svg-icon', SvgIcon)

  const requireAll = requireContext => {
    return requireContext.keys().map(requireContext)
  }

  const req = require.context('../assets/icons', false, /\.svg$/)
  console.log(req.keys())
  return requireAll(req)
}

export default renderIcon
