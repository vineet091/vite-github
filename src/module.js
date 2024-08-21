// this file is to emit and listen to server events

function addStylesheet () {
    var styles = document.createElement('style');
    styles.innerHTML = 'body { background: white; color: black; }';
    document.head.appendChild(styles)
}

addStylesheet()

// event broadcaster
import.meta.hot.on('vite:beforeUpdate', (data) => {
    console.log('before update', data)
})

import.meta.hot.on('vite:afterUpdate', (data) => {
    console.log('after update', data)
})

import.meta.hot.on('vite:error', (data) => {
    console.log('error', data)
})

// Event listener
if (import.meta.hot) {
    import.meta.hot.accept((newModule) => {
      if (newModule) {
        // newModule is undefined when SyntaxError happened
        console.log('updated: count is now ', newModule)
      }
    })
  }