import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

test('displays message', () => {
  const wrapper = mount(Header)

  expect(wrapper.text()).toContain('Site')
})