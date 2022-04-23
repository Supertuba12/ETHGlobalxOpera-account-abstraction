import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import WelcomeTitle from "../WelcomeTitle.vue";

describe("WelcomeTitle", () => {
  it("renders properly", () => {
    const wrapper = mount(WelcomeTitle, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
