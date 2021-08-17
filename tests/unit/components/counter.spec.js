import Counter from "@/components/Counter.vue";
import { shallowMount } from "@vue/test-utils";

describe("Counter Component", () => {
  // test('Match con el snapshot', () => {
  //   const wrapper = shallowMount( Counter)
  //   expect(wrapper.html()).toMatchSnapshot()
  // }),

  test("h2 debe tener el valor por defecto", () => {
    const wrapper = shallowMount(Counter);

    const ticket = "h2";
    expect(wrapper.find(ticket).exists()).toBeTruthy();
    const h2 = wrapper.find(ticket).text();

    expect(h2).toBe("Counter");
  });

  test("El valor por defecto debe ser 100 en el p", () => {
    // wrapper
    const wrapper = shallowMount(Counter);
    // tags
    const tag = wrapper.find('[data-test-id="counter"]').text();

    expect(tag).toBe("100");
  });
});
