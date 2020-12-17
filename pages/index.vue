<template lang="pug">
  #home
    hero
      h1.text-6xl.font-bold.animate__animated.animate__fadeInDown Hi 👋! My name is Luke.
      p.text-xl.font-light.animate__animated.animate__fadeInUp Scroll down if you'd like to find out more 👀!
    section
      .container.py-8
        h2.text-6xl.font-black Luke Carr
        .shields
          a.ml-4(v-for="shield in shields", :key="shield.title", :href="shield.href", :title="shield.title", target="_blank")
            shield(:left="shield.left", :right="shield.right", :color="shield.color")
        p#bio.text-xl.font-semibold.my-8.py-1.pl-6.border-l-4
          |I'm a {{age}} y/o developer working on various open source projects relating to e-learning 📚 and privacy 🔒.
          |<br><br>
          |I spend most of my time inside Node.js and I love writing code 💻 that's not just functional but beautiful ✨ as well.
          |<br><br>
          |I believe society would collapse 💀 without TypeScript or Conventional Commits.
    section
      .container.pt-12.pb-24
        quote(text="Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return.", author="Lionardo di ser Piero da Vinci")
        h2#careers.text-5xl.font-black Careers
        .careers
          career(v-for="career in careers", :key="`${career.name}${career.period}${career.role}`", :name="career.name", :period="career.period", :role="career.role")
            span(v-html="career.description")
    section
      .container.pt-12.pb-24
        quote(text="Simplicity is not the absence of clutter, that's a consequence of simplicity. Simplicity is somehow essentially describing the purpose and place of an object and product. The absence of clutter is just a clutter-free product. That's not simple.", author="Sir Jonathan Paul Ive")
        h2#education.text-5xl.font-black Education
        .education
          career(v-for="item in education", :key="item.name", :name="item.name", :period="item.period")
            span(v-html="item.description")
    section
      .pt-12.pb-24
        .container
          quote(text="Any sufficiently advanced technology is indistinguishable from magic.", author="Arthur C. Clarke")
          h2#repos.text-5xl.font-black My repos
          p.text-xl.mb-4 Click on a clone command to copy it to your clipboard!
        .repos.grid.gap-4.grid-cols-1.px-4(class="md:grid-cols-2 xl:grid-cols-3")
          repo(v-for="repo in repos", :key="repo.id", :name="repo.name", :push="repo.pushed_at", :language="repo.language", :license="repo.license && repo.license.spdx_id", :about="repo.description", :ssh="repo.ssh_url")
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Octokit } from '@octokit/rest'

@Component({
  head() {
    return {
      title: 'Home',
    }
  },
})
export default class IndexPage extends Vue {
  shields = [
    {
      left: 'github',
      right: 'lukecarr',
      href: 'https://github.com/lukecarr',
    },
    {
      left: 'twitter',
      right: '@imlukecarr',
      color: '00aced',
      href: 'https://twitter.com/imlukecarr',
    },
    {
      left: 'find me on',
      right: 'linkedin',
      color: '0072b1',
      href: 'https://linkedin.com/in/luke-jcarr',
    },
  ]

  age = Math.abs(
    new Date(Date.now() - new Date('2001-07-30').getTime()).getUTCFullYear() -
      1970
  )

  education = [
    {
      name: 'Exeter College',
      period: 'September 2017 - July 2019',
      description: `I obtained A-Levels in Computer Science, Mathematics, and Further Mathematics during my 2 years at Exeter
College.<br><br>Here, a friend introduced me to the joys of modern JavaScript (specifically Node.js and ES6), and swayed me
away from the dark sides of Java and PHP! &nbsp; <em>P.S. I still ❤️ them both.</em>`,
    },
  ]

  careers = [
    {
      name: 'Ted Wragg Trust',
      period: 'July 2020 - Present',
      role: 'Digital Learning Engineer',
      description: `As a Digital Learning Engineer at the Ted Wragg Trust, I operate closely with teaching staff across
the trust to design and develop empowering solutions for the classroom that embraces technology.<br><br>With a substantial
focus on automation, my role strives to reduce the time spent by teachers manually uploading and creating content on
learning management systems.`,
    },
    {
      name: 'Ted Wragg Trust',
      period: 'May 2020 - July 2020',
      role: 'Contractor',
      description: `Starting in May 2020, I worked closely with the Ted Wragg Trust as a contractor to improve and enrich their
e-learning solutions.<br><br>This contract work primarily consisted of designing and developing custom Moodle plugins to
fulfil their digital learning needs.`,
    },
    {
      name: 'Omnio Interactive',
      period: 'November 2019 - August 2020',
      role: 'Chief Executive Officer',
      description: `In late 2019, I formed a tech startup named Omnio Interactive with a close friend, where we worked on
a cloud-based learning platform called Omnio Cloud.<br><br>In August 2020, I left Omnio Interactive to pursue a role at
the Ted Wragg Trust.`,
    },
  ]

  repos = []

  async asyncData() {
    const github = new Octokit()
    const { data } = await github.repos.listForUser({
      username: 'lukecarr',
      type: 'owner',
      sort: 'pushed',
    })

    return { repos: data.filter((repo) => !repo.archived) }
  }
}
</script>

<style lang="scss" scoped>
.hero:first-of-type {
  background-image: url('~assets/img/hero.jpg');
}

section:nth-child(2n + 1) {
  background: #5c677d;
}

.shields {
  a:first-child {
    margin-left: 0;
  }

  img {
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

.career:last-child {
  border-bottom: none;
}
</style>
