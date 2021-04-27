import { shallowMount } from '@vue/test-utils'
import CardList from '@/components/CardList.vue'

describe('CardList.vue', () => {
  it('shows a menu based on json', () => {
    
    const wrapper = shallowMount(CardList);
    expect(wrapper).toBeDefined;

    const firstLi = wrapper.find("li");
    expect(firstLi.text()).toBe("New intake");

  })
})
