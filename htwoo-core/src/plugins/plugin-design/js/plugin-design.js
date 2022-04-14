'use strict';
/* global PluginUIExtension, pluginDesign */

var PluginUIExtension = {

  /**
   * The function defined as the onready callback within the plugin configuration.
   */
  init: function () {

    let logoImg = document.querySelector(".pl-c-logo__img");
    if (logoImg) {
      logoImg.style.height = "auto";
      logoImg.style.width = "100%";
      logoImg.style.maxHeight = "100%";
      logoImg.removeAttribute('height');
      logoImg.removeAttribute('width');
    }

    let logo = document.querySelector(".pl-c-logo");

    if (logo) {
      logo.style.padding = "0";
    }

    let logoLink = document.querySelector("a.pl-c-logo");

    if (logoLink) {
      logoLink.href = "https://lab.n8d.studio/htwoo/";
    }

    this.appendColorSwitcher();

  },
  switchTheme: function (event) {

    const allThemeButtons = document.querySelectorAll('.n8d-themeswitch-btn');
    // rest all buttons
    allThemeButtons.forEach((item) => {
      item.classList.remove('selected')
    });
    // apply selected to current button
    event.target.classList.add('selected');


    let themeLabel = document.querySelector('.n8d-theme-cur');


    const currentlySelected = event.target.dataset.theme;
    themeLabel.innerText = event.target.dataset.theme;
    sessionStorage.setItem('currentTheme', currentlySelected);



  },
  appendColorSwitcher: function () {

    const layoutToggle = document.querySelector('.pl-c-tools__item>pl-toggle-theme').parentElement;
    const availableThemesStorage = localStorage.getItem('availableThemes');

    if (availableThemesStorage) {

      const availableThemes = JSON.parse(availableThemesStorage);


      let keys = Object.keys(availableThemes);
      keys.sort();
      layoutToggle.innerHTML = '';

      layoutToggle.insertAdjacentHTML('afterbegin',
        `
        <div class='n8d-themes'>
        <div class='n8d-themeswitch'>Current Theme: <span class='n8d-theme-cur'>TEAL</span></div>
        <div class='n8d-themeswitch'>SharePoint</div>
        <div class='n8d-themeswitch-selector switch-sp'></div>
        <div class='n8d-themeswitch'>Microsoft Teams</div>
        <div class='n8d-themeswitch-selector switch-teams'></div>
        </div>
      `);
      const themeSwitchSp = document.querySelector('.n8d-themeswitch-selector.switch-sp');
      const themeSwitchTeams = document.querySelector('.n8d-themeswitch-selector.switch-teams');

      if (themeSwitchSp && themeSwitchTeams) {

        for (let key in keys) {

          let switcherTemplate = `<button type="button" class="n8d-themeswitch-btn" style="${availableThemes[keys[key]]}" title="${keys[key].toUpperCase()} - Click to enable" data-theme='${keys[key]}'>
          </button>
          `

          if (keys[key].indexOf('teams') === -1) {

            themeSwitchSp.insertAdjacentHTML('afterbegin', switcherTemplate);

          } else {

            themeSwitchTeams.insertAdjacentHTML('afterbegin', switcherTemplate);

          }

        }

        var allThemeButtons = document.querySelectorAll('.n8d-themeswitch-btn');
        allThemeButtons.forEach((btn) => {
          btn.addEventListener('click', this.switchTheme);
        })

      } else {

        console.error('Pattern-labs: Cannof find theme switch for SharePoint or Teams');

      }

    }

  }


};