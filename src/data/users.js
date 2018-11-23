import kitze from 'images/kitze.jpg';
import twizzy from 'images/twizzy.png';
import jsui from 'images/jsui.jpg';
import sizzy from 'images/sizzy.jpg';
import avatar3 from 'images/avatar-3.png';
import avatar5 from 'images/avatar-5.png';
import avatar6 from 'images/avatar-6.png';
import avatar7 from 'images/avatar-7.png';

export default [
  {
    name: 'Kitze',
    username: 'thekitze',
    message: `I made the app so I'm a bit biased.`,
    img: kitze,
    messages: [
      {
        message: 'Hey there',
        sender: false
      },
      {
        message: 'Can you stop integrating crap?',
        sender: false
      }
    ]
  },
  {
    name: 'Twizzy',
    username: 'twizzyapp',
    message: `I *am* the app so I'm even more biased!`,
    img: twizzy,
    messages: [
      {
        message: 'Hey Kitze 👋️',
        sender: false
      },
      {
        message: `Can you stop wasting time on the landing page? It's enough...`,
        sender: false
      }
    ]
  },
  {
    name: 'Matthew',
    username: 'ijustwanttotweet',
    message: `I need Twitter DM as an app!`,
    img: avatar3,
    messages: [
      {
        message: 'Hello twizzy',
        sender: true,
        url: 'https://github.com/kitze/jsui'
      },
      {
        message: 'I hate you too',
        sender: false
      }
    ]
  },
  {
    name: 'Peggy White',
    username: 'damnmessage',
    message: `Hate wasting time, I just want to send a DM.`,
    img: avatar6
  },
  {
    name: 'Sizzy',
    username: 'sizzyapp',
    message: `I'm an app tweeting about app stuff.`,
    img: sizzy
  },
  {
    name: 'Donna',
    username: 'ughnotifs',
    message: `I just want to tweet and that's it.`,
    img: avatar7
  },
  {
    name: 'Jason Vincent',
    username: 'nooneexplores',
    message: `Who cares about explore and moments?!?!`,
    img: avatar5
  },
  {
    name: 'JSUI',
    username: 'jsui_app',
    message: `I'm just an app, what do I know.`,
    img: jsui
  }
];
