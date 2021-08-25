import Indecision from '@/components/Indecision.vue'
import { shallowMount } from '@vue/test-utils'

describe('Indecision Component', () => {
  let wrapper
  let clgSpy

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: 'yes',
          forced: false,
          image: 'https://yesno.wtf/assets/yes/2.gif',
        }),
    })
  )

  beforeEach(() => {
    wrapper = shallowMount(Indecision)
    clgSpy = jest.spyOn(console, 'log')
    jest.clearAllMocks()
  })

  // test('Renders correctly', () => {
  //   expect(wrapper.html()).toMatchSnapshot()
  // })

  test('escribir en el input no debe disparar nada(?)', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
    const input = wrapper.find('input')
    await input.setValue('Hello World')

    expect(clgSpy).toHaveBeenCalledTimes(1)
    expect(getAnswerSpy).not.toHaveBeenCalled()
  })

  test('al escribir el signo de (?) debe disparar el fetch ', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')
    const input = wrapper.find('input')
    await input.setValue('Hello World?')
    expect(clgSpy).toHaveBeenCalledTimes(1)
    expect(getAnswerSpy).toHaveBeenCalled()
  })

  test('pruebas en getAnswer', async () => {
    await wrapper.vm.getAnswer()
    const image = wrapper.find('img')

    expect(image.exists()).toBeTruthy()
    expect(wrapper.vm.image).toBe('https://yesno.wtf/assets/yes/2.gif')
    expect(wrapper.vm.answer).toBe('Si')
  })

  test('pruebas en getAnswer - Fallo en el API', async () => {
    fetch.mockImplementationOnce(() => Promise.reject('Api is down'))
    await wrapper.vm.getAnswer()
    const image = wrapper.find('img')

    expect(image.exists()).toBeFalsy()
    expect(wrapper.vm.answer).toBe('No se pudo cargar la API')
  })
})
