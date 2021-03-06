// ==UserScript==
// @name         Learn C Shortcuts
// @namespace    https://riophae.com/
// @version      0.1.3
// @description  给 Learn C 网站的按钮添加快捷键
// @author       Riophae Lee
// @match        http://www.learn-c.org/*
// @grant        none
// ==/UserScript==

/* eslint-disable unicorn/prefer-event-key */

(function () {
  const __DEBUG__ = false

  const $ = document.querySelector.bind(document)

  function log(...args) {
    if (!__DEBUG__) return
    console.log(...args)
  }

  const $run = $('#run-button')
  const $reset = $('#reset-button')

  const KEYCODES = {
    ENTER: 13,
    R: 82,
  }

  if (![ $run, $reset ].every(Boolean)) return

  window.addEventListener('keydown', event => {
    if (
      event.metaKey &&
      event.keyCode === KEYCODES.ENTER
    ) {
      event.preventDefault()
      if (window.minimized) {
        window.toggleMinimize(true)
        log('Show the code editor...')
      } else {
        $run.click()
        log('Run...')
      }
    } else if (
      event.metaKey &&
      event.ctrlKey &&
      event.keyCode === KEYCODES.R
    ) {
      event.preventDefault()
      $reset.click()
      log('Reset...')
    }
  })

  log('Learn C Shortcuts have been setup.')
})()
