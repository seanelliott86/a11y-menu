# a11y-menu
Vanilla JavaScript keyboard accessible drop down menu plugin

## How to use
A few specific classes need to be used for this plugin to work, those classes are:
- `js-a11y-menu` on the parent ul of the menu
- `js-menu-items` for each top level menu item
- `js-sub-menu` for each submenu

These classes can be changed via the plugin options.

### Suggested HTML
```html 
<nav>
	<ul role="menubar" class="js-a11y-menu">
		<li class="js-menu-items">
			<a href="#" aria-haspopup="true" aria-expanded="false" role="menuitem">About us</a>
			<ul aria-label="About us Sub Menu" role="menu" class="js-sub-menu">
				<li>
					<a href="/about-us-sub" role="menuitem">Link 1</a>
				</li>
			</ul>
		</li>
	</ul>
</nav>

```
Initilising the plugin

### Javascript
```javascript
var elem = document.querySelector('.js-a11y-menu');
var menubar = new A11yMenu(elem); 
menubar.init();
```

### Options and Settings
```javascript
var options = {
	tapStop: false,
        itemClass: ".js-menu-items",
        subMenuClass: ".js-sub-menu",
        activeClass: "is-active",
        openClass: "is-shown",
        animateClass: "is-revealed",
        horizontalMenu: true
}
```
