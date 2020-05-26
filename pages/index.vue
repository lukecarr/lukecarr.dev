<template lang="pug">
  #home
    .hero.min-h-screen.flex.items-center.justify-center
      div.text-center
        h1.text-6xl.font-bold(data-aos="fade", data-aos-duration="1500") Hi. My name is Luke.
        p.text-xl.font-light(data-aos="fade-up", data-aos-delay="1500") Scroll down if you'd like to find out more!
    .container.py-8(data-aos="fade-up", data-aos-delay="100")
      h2.text-6xl.font-black Luke Carr
      .socials
        a.ml-4(v-for="social in socials", v-key="social.title", :href="social.href", :title="social.title", target="_blank")
          img.inline-block(:src="social.shield", :alt="social.title")
      p#bio.text-xl.font-semibold.my-8.py-1.pl-6.border-l-4 I'm an 18 y/o developer working on various open source projects relating to e-learning and privacy.<br><br>I spend most of my time inside Node.js and I love writing code that's not just functional but beautiful as well.<br><br>I believe society would collapse without TypeScript or Conventional Commits.
    div(style="background: #5c677d")
      .container.pt-12.pb-24
        .quote.border-l-4.mb-16.p-4(data-aos="fade")
          p.text-lg(data-aos="fade-left") Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return.
          p.text-xl.font-bold(data-aos="fade-up") Lionardo di ser Piero da Vinci
        h2#careers.text-5xl.font-black(data-aos="fade") Careers
        .careers
          .flex.py-6.border-b-2(v-for="(career, index) in careers", v-key="career.name", data-aos="fade-right", :data-aos-delay="200 + (index + 1) * 150")
            div
              h3.text-3xl.font-bold {{ career.name }}
              p.text-lg.font-medium {{ career.period }}
              p.text-xl.font-bold {{ career.role }}
            .flex-1.pl-8
              p.text-lg(v-html="career.description")
    .container.pt-12.pb-24
      .quote.border-l-4.mb-16.p-4(data-aos="fade")
        p.text-lg(data-aos="fade-left") Simplicity is not the absence of clutter, that's a consequence of simplicity. Simplicity is somehow essentially describing the purpose and place of an object and product. The absence of clutter is just a clutter-free product. That's not simple.
        p.text-xl.font-bold(data-aos="fade-up") Sir Jony Ives
      h2#education.text-5xl.font-black(data-aos="fade") Education
      .education
        .flex.py-6.border-b-2(v-for="item in education", v-key="item.name", data-aos="fade-right", :data-aos-delay="200 + (index + 1) * 150")
          div
            h3.text-3xl.font-bold {{ item.name }}
            p.text-lg.font-medium {{ item.period }}
          .flex-1.pl-8
            p.text-lg(v-html="item.description")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'IndexPage',
  head() {
    return {
      title: 'Home'
    }
  }
})
export default class IndexPage extends Vue {
  socials = [
    {
      title: 'GitHub',
      href: 'https://github.com/lukecarr',
      shield: 'https://img.shields.io/badge/github-lukecarr-brightgreen'
    },
    {
      title: 'Twitter',
      href: 'https://twitter.com/imlukecarr',
      shield: 'https://img.shields.io/badge/twitter-%40imlukecarr-00aced'
    },
    {
      title: 'Ko-fi',
      href: 'https://ko-fi.com/lukecarr',
      shield: 'https://img.shields.io/badge/buy%20me%20a-coffee-ff5e5b'
    }
  ]

  education = [
    {
      name: 'Exeter College',
      period: 'September 2017 - July 2019',
      description:
        'I obtained A-Levels in Computer Science, Mathematics, and Further Mathematics during my 2 years at Exeter College.<br><br>Here, a friend introduced me to the joys of modern JavaScript (specifically Node.js and ES6), and swayed me away from the dark sides of Java and PHP!<br>P.S. I still ❤️ them both.'
    }
  ]

  careers = [
    {
      name: 'Ted Wragg Trust',
      period: 'May 2020 - Present',
      role: 'Contractor',
      description:
        'Starting in May 2020, I worked closely with the Ted Wragg Trust as a contractor to improve and enrich their e-learning solutions.<br><br>This contact work primarily consisted of designing and developing custom Moodle plugins to fulfil their digital learning needs.'
    },
    {
      name: 'Omnio Interactive',
      period: 'November 2019 - Present',
      role: 'Chief Executive Officer',
      description:
        'In late 2019, I formed a tech startup named Omnio Interactive with a close friend.<br><br>We are currently working on several open source software packages, including a Nuxt.js based learning platform and a password manager that uses a password generation method that removes the need to store passwords all together!'
    }
  ]
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('~assets/img/hero.jpg');
  background-size: cover;
  background-attachment: fixed;
}

.socials {
  a:first-child {
    margin-left: 0;
  }

  img {
    height: 24px;
    transition: transform ease-in-out 0.2s;
    transform: scale(1);
  }

  img:hover {
    transform: scale(1.05);
  }
}

p#bio {
  border-left-color: #0466c8;
}

.quote {
  filter: opacity(0.8);

  p:first-child {
    font-style: italic;
  }
}

.careers .flex:last-child,
.education .flex:last-child {
  border-bottom: none;
}

.careers .flex > div:first-child {
  width: 300px;
}
</style>
