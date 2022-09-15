# cookie-bar
- Information banner about used cookies - [DEMO](http://studio42.wz.cz/cookies-bar/)
- LocalStorage is checked every time the page is loaded, and if the `cookieBannerDisplayed` key is not found, a banner with to confirm cookies is displayed.
- Pressing the `accept` button will create the `cookieBannerDisplayed` key in localStorage.
- DEMO allows you to delete cookies and, after refreshes, display a banner even for already confirmed cookies.