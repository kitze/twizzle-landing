### 🙋‍♂️ Made by [@thekitze](https://twitter.com/thekitze)  

### Other projects:
- 💻 [Sizzy](https://sizzy.co) - A browser for designers and developers, focused on responsive design
- 🏫 [React Academy](https://reactacademy.io) - Interactive React and GraphQL workshops
- 🤖 [JSUI](https://github.com/kitze/JSUI) - A powerful UI toolkit for managing JavaScript apps
- 📹 [YouTube Vlog](https://youtube.com/kitze) - Follow my journey

---

# Twizzle

✉️️ Landing page for [Twizzle](https://twizzle.app), a desktop app for Twitter DM & composing tweets  

## 🛠️ Setup

It's `CRA 2` with `customize-cra` and `react-app-rewired`.  
The [config file](https://github.com/kitze/twizzle-landing/blob/master/config-overrides.js) is adding/changing the following:

- Add `babel-plugin-styled-components`
- Add `inline-react-svg` to inline svg files (I know CRA has this functionality but you import every file in a specific way)
- Disable ESlint 🤷‍♂️️

## ✅️ Main file
The magic happens in [components/App/index.js](https://github.com/kitze/twizzle-landing/blob/master/src/components/App/index.js)

## 🐟️ Custom hooks
All of the hooks are in [utils/hooks.js](https://github.com/kitze/twizzle-landing/blob/master/src/utils/hooks.js)

- `useCanHover` - detect if the device supports hover, if it doesn't, use `onClick` for the "tweeting" button
- `useToggleBodyClass` - toggle a body class based on a boolean. Used to trigger `dark/light` and `scroll/no-scroll` classes on the `body` tag.
- `useGoogleAnalytics` - inserts a google analytics script, but only when the app is ready
- `useMousePosition` - track the mouse position. It's used to detect if the user is over the menu bar, otherwise the tweet composer gets glitchy.
- `useLoadScript` - appends a script tag to the head of the page (used to load the Paddle script after the page is loaded)

I'll move these hooks to [react-hanger](https://github.com/kitze/react-hanger) soon.

## 🏝️ Desert background

- I extracted all the logic for the background in a [Background](https://github.com/kitze/twizzle-landing/blob/master/src/components/Background/index.js) component
- For the background I'm using 2 different svg images of a desert, a light one and a dark one.
- I tried using them as background images, but they get all weird for some reason
- They are switched using the [DayNightToggle](https://github.com/kitze/twizzle-landing/blob/master/src/components/DayNightSwitch/index.js).
- I'm using a `desertLoaded` boolean to detect when the dark image is completely loaded, and fade it in (otherwise it would look ugly on slow connections)
- I'm waiting until the [app is ready](https://github.com/kitze/twizzle-landing/blob/master/src/components/Background/index.js#L17) to start loading the light image, otherwise it's just slowing down the other requests for no reason 

## 🍬️ Intro animation

- All the animation logic is extracted in [this custom hook](https://github.com/kitze/twizzle-landing/blob/master/src/components/App/use-intro-animation.js)
- It's using [react-pose](https://github.com/Popmotion/popmotion/tree/master/packages/react-pose) for the animations
- It's using [sequence](https://github.com/kitze/twizzle-landing/blob/master/src/utils/sequence.js) which is a function that I wrote for scheduling state changes. I also used it for the intro animation of [ok-google.io](http://ok-google.io). It goes through the arguments and if it finds a function it calls it, and if it finds a number it's gonna wait with `setTimeout` for the amount of ms. There is more info in [this article](https://medium.com/@kitze/js-coding-challenge-1-test-your-skills-63c2af5446d0).
- It's always enabled in production, but it can be turned off in development using a boolean

## 🌓️ Day/night switch

It's really [nothing fancy](https://github.com/kitze/twizzle-landing/blob/master/src/components/DayNightSwitch/index.js), just couple of styled divs. I feel a bit guilty because it's completely inaccessible by keyboard users.

## z-index

So, z-index has been driving me crazy for a long time, so I decided to [simplify the logic](https://github.com/kitze/twizzle-landing/blob/master/src/styles/zindex.js) by ordering all elements in an `order` array and then using `...zIndexFor(ELEMENTS.COMPOSE)` in the styles for the component that needs z-index. Smooth.

## 🖌️ Theming

- The app has a dark and a light mode, and all the logic for them is in [styles/themes.js](https://github.com/kitze/twizzle-landing/blob/master/src/styles/themes.js).
- Other components can use the themes either by destructuring the `theme` prop, or with the following mixins:

- `whenTheme` - It applies style only when the certain theme name is active. Example: `whenTheme('dark', {backgroundColor: 'black})`
- `applyTheme` - It applies certain theme styles to the element. Example: `applyTheme('windowBar')` will get the `theme.windowBar` styles from the current theme
- `getThemeColor` - It reads a certain color from the current theme. Example: `getThemeColor('icon')` will return the icon color for the current theme.


## ⁉️ AMA

Just open an issue if you're interested about anything else in the app, and I'll add it in the readme.
