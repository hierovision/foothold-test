import { shallowMount } from '@vue/test-utils'
import CardList from '@/components/CardList.vue'

describe('CardList.vue', () => {
  it('renders the items based on data', () => {
    const wrapper = shallowMount(CardList)
    expect(wrapper).toBeDefined;
  })
})
