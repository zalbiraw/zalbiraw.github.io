#SOFL2A

##Files Structure
- All pictures that are involved in the design of the site go inside the artwork folder.
- All CSS files go inside the css folder.
- All JavaScript files go inside the js folder.
- All HTML files stay in the root of the folder.

##HTML Structure
- The head tag "head" contains all CSS and JS links
- The "div" tag with id="sidebar-mask" is the black box the covers the content when the sidebar is active.
- The "div" tag with id="menubar-box-outer contains the menubar items.
	- The "li" tag with id="sidebar-icon" is the button for the sidebar.
	- The "li" tag with class="title" contains the site title, "SOFL2A".
	- The "li" tag with id="search-bar" contains the search bar.
	- The "li" tag with class="profile" contains the profile button.
- The "div" tag with id="filter-box-outer" contains the filter box. Add any new filters under that box.
- The "nav" tag with id="sidebar-box" contains the sidebar items.
- The "div" tag with id="menubar-box-holder" is a space holder for the menubar box.
- The "div" tag with id="content-container" is the body of the dashboard. Here you insert all the content. 
- Inside the "content-container" the structure is:
	- Use the "Section" tag for differnent pages, every section tag must have an id with its pages name. The name must reflect on the page's contents.
	- The "Section" tag must be followed with a "div" tag with class="container" to center the contenet of the page.
	- The "Section" tag can be divided into smaller sections, every small section will have a "div" tag with class="section-header" and a "ul" tag with class="section-content". Those sections are created as a list of contents. You can have multiple "mini-sections" inside the "Section" tag. Checkout http://zalbiraw.github.io/SOFL2A/dashboard-evaluator.html for an example.
	- To create multiple pages using the "Section" tag, you must add the following CSS to your page.
		```css
		#sliding-container.slide {
		-webkit-transform: translateX(-100%); 
	   	   -moz-transform: translateX(-100%);
	    	-ms-transform: translateX(-100%); 
	       	 -o-transform: translateX(-100%); 
	        	transform: translateX(-100%); 
		}

		#content-container {
			width: 200%;
		}

		#section-id1, #section-id2 {
			width: 50%;
		}

		#section-id1 {
			float: left;
		}

		#section-id2 {
			float: right;
		}
		```

	This will work for only two sections at a time. More than 2 sections will cause some problems are will require more work. The "section-id1" and "section-id2" are the id's that you chose for your section. They should be in the "Section" tag.

##CSS Structure
- I advise that you do not miss around with the dashboard.css, if you want to change anything, just overide it using by adding a new CSS style to the page's css file.
- The classes and ids of the css tags are self-explanatory. Cross refrence the HTML and CSS files if you don't understand anything.


##JavaScript Structure
- I advise that you do not miss around with the dashboard.js.
- Every page will have its own js file as they are used to add the icons to the HTML classes.
- For example, the following JS code 

	```javescript
	$(document).ready ( function() {
		$('.item-edit i').addClass("fa fa-pencil-square-o fa-lg");
		$('.item-remove i').addClass("fa fa-trash-o fa-lg");
		$('.item-preview i').addClass("fa fa-file-text-o fa-lg");
	});
	```

	Works with following HTML code 

	```html
	<li class="item-edit" title="Edit"><i></i></li>
	<li class="item-preview" title="Preview"><i></i></li>
	<li class="item-remove" title="Remove"><i></i></li>
	```

	and creates:

	```html
	<li class="item-edit" title="Edit"><i class="fa fa-pencil-square-o fa-lg"></i></li>
	<li class="item-preview" title="Preview"><i class="fa fa-trash-o fa-lg"></i></li>
	<li class="item-remove" title="Remove"><i class="fa fa-file-text-o fa-lg"></i></li>
	```

	This is a very a really easy way to add icons to multiple lines at once.