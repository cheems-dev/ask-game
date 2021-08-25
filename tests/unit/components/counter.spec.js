import Counter from '@/components/Counter.vue'
import { shallowMount } from '@vue/test-utils'

describe('Counter Component', () => {
  let wrapper
  beforeEach(() => (wrapper = shallowMount(Counter)))

  test('h2 debe tener el valor por defecto', () => {
    const ticket = 'h2'
    expect(wrapper.find(ticket).exists()).toBeTruthy()
    const h2 = wrapper.find(ticket).text()

    expect(h2).toBe('Counter')
  })

  test('El valor por defecto debe ser 100 en el p', () => {
    // tags
    const tag = wrapper.find('[data-test-id="counter"]').text()

    expect(tag).toBe('100')
  })

  test('Debe incrementar en 1 el valor del contador ', async () => {
    const increaseBtn = wrapper.find('button')
    await increaseBtn.trigger('click')

    const value = wrapper.find('[data-test-id="counter"]').text()
    expect(value).toBe('101')
  })

  test('Debe decrementar en 2 el valor del contador ', async () => {
    const decreaseBtn = wrapper.findAll('button')[1]
    await decreaseBtn.trigger('click')
    await decreaseBtn.trigger('click')

    const value = wrapper.find('[data-test-id="counter"]').text()
    expect(value).toBe('98')
  })

  test('Debe incrementar 3 y decrementar en 5 el valor del contador ', async () => {
    const [decreaseBtn, increaseBtn] = wrapper.findAll('button')
    await decreaseBtn.trigger('click')
    await decreaseBtn.trigger('click')
    await decreaseBtn.trigger('click')
    await decreaseBtn.trigger('click')
    await decreaseBtn.trigger('click')

    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')
    await increaseBtn.trigger('click')

    const value = wrapper.find('[data-test-id="counter"]').text()
    expect(value).toBe('102')
  })

  test('Test components props', () => {
    const { start } = wrapper.props()
    const value = wrapper.find('[data-test-id="counter"]').text()
    expect(Number(value)).toBe(start)
  })

  test('Testing Props ', () => {
    const title = 'Hello world'
    const wrapper = shallowMount(Counter, {
      props: {
        title,
      },
    })

    const h2 = wrapper.find('h2').text()
    expect(h2).toBe(title)
  })
})
