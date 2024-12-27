"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
const ScrollingText = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollingText = gsap.utils.toArray(".rail h4");

    const tl = horizontalLoop(scrollingText, {
      repeat: -1,
    });

    let speedTween;

    ScrollTrigger.create({
      trigger: ".scrolling-text",
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        speedTween && speedTween.kill();
        speedTween = gsap
          .timeline()
          .to(tl, {
            timeScale: 2 * self.direction,
            duration: 0.1,
          })
          .to(
            tl,
            {
              timeScale: 1 * self.direction,
              duration: 1.5,
            },
            "+=0.5"
          );
      },
    });

    function horizontalLoop(items, config) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
          repeat: config.repeat,
          paused: config.paused,
          defaults: { ease: "none" },
          onReverseComplete: () =>
            tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap =
          config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;
      gsap.set(items, {
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
              gsap.getProperty(el, "xPercent")
          );
          return xPercents[i];
        },
      });
      gsap.set(items, { x: 0 });
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
          gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
          distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        )
          .fromTo(
            item,
            {
              xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
              ),
            },
            {
              xPercent: xPercents[i],
              duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
          (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }
      tl.next = (vars) => toIndex(curIndex + 1, vars);
      tl.previous = (vars) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true);
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      return tl;
    }
  });
  return (
    <div className="scrolling-text absolute bottom-[140px] lg:bottom-[160px] left-0">
      <div className="rail select-none">
        <h4>&nbsp;Mamun Hossain — </h4>
        <h4>&nbsp;Mamun Hossain — </h4>
        <h4>&nbsp;Mamun Hossain — </h4>
      </div>
    </div>
  );
};

export default ScrollingText;
// Hello Buddy!

// I am Abdullah al mamun and a full Stack web developer. Are you looking for a professional web developer to bring your online vision to life? Whether you need a responsive website, a complex web application, or an eCommerce platform, I am here to help! with 3 years of experience in web development, I specialize in delivering high-quality, user-friendly, and scalable websites tailored to your needs.

// Services Offered :

// - Figma to Website Conversion

// - Frontend development with React JS

// - Backend development, with  Node JS for API creation

// - Integrate API with secure fast and scalable systems

// - Full stack solutions with next JS

// - Website customization

// - Fully responsive, mobile friendly and SEO optimized website

// - Clean code and reusable component with Type Script

// - Customer support to grow your Business

// - 24/7 ongoing support

// Let's turn your ideas into reality! hit on "Contact me" to discuss your project and bring your vision to life with a top-notch, custom-built web solution

// What do I need to provide for the Figma to website conversion?
// Simply share your Figma design files or URL and any specific requirements. I'll take care of the rest!

// How can I request for revisions?
// You can request for revisions through the platform's messaging system.

// How do you ensure the security of my website?
// I implement best practices for website security, including SSL certificates, secure coding practices and regular updates.

// What if I need changes after the website is completed?
// I offer unlimited revision services to make necessary changes even after the website is completed. so don't hesitate for revision.

// Can you help me with branding and Logo design?
// While my primary focus is on website development. I can collaborate with designers to help with branding and logo design.

