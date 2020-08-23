# SBA_HTML

![](img/ScreenShot.png)

## Description
> SPARS is a simple website for the introduction of mahine learning-based predition technologies that are applied in stock markets. This website contains four pages: Home page, login page, register page, and a subpage.

### Home page

> In the home page, we have a search bar, a navigation bar with dropdown menu (just one for demo), a section for rolling picutres (the pictures are obtained from [Pexels](https://www.pexels.com/search/template/)), and login/register buttons.


### Login page

> In the login page, there are two buttons. We add an animation here. If you click the "Return Home" button, it will jump back to the home page. When the "Login" button is clicked, a pop-up will show up, which consists of a simple form (username, password, login button, remeber me, cancel, and register buuton), is embed with a CSS zoom animation. The text input box is requried to fill in the required condistions. In particular, I use regex validation to check the format of password. The password must be at least 8 characters, and must contains numbers, letters, and punctuation. We can use the DOM validation functions: checkValidaity() or setCustomValidity() for the excepetion handling.

> In this page, I use jQuery and Ajax to submit the username and password to the server. The server will check wheter the user exists. If so, the page will jump to home page. However, it will return "We cannot find the username or password!"

### Register page

> The register page has pretty similar design as login page. The register form consists of username, password, repeat password, remeber me, cancel, and sign up buuton). The text input box is requried to fill in the required condistions. In particular, I use regex validation to check the format of password. The password must be at least 8 characters, and must contains numbers, letters, and punctuation. 

### Subpage (ml.html)

> The subpage "Machine Learning" is created to demo the multi-page and navigation bar function. In the subpage, I keep the overall layout, header, navigation bar, and footer as the home page. I use a table and Flexbox layout to list sveral categories of mechine learning technologies and specific algorithms. Each algorithm has its own hyperlink to wikipeadia.


## Techinical Specifications & Checklist

The box is checked if this technical specification has been implemented.

### HTML
- [x] Have 4 pages (index.html, ml.html, login.html, and register.html)
- [x] Use at least 10 different HTML tags
- [x] Use HTML tables (@ml.html)
- [x] Implement at least two uses for forms
- [x] Dropped Down Menu (@index.html)
- [x] Use web fonts
- [x] Use different types of content in the form of text and images
- [x] Use regex validation (@login.html and @register.html to check the format of password)
### CSS
- [x] Inline, internal, and external styling
- [x] Use more than five different CSS selectors
- [x] Don’t use too many fonts
- [x] Use colors that complement each other
- [x] Use Flexbox (Optional) (@ml.html)
- [x] Use animations (Optinal) (@login.html, @register.html and @index.html)
- [ ] Usa SASS/SCSS (Optional)
### Javascript
- [x] External scripts
- [x] Use variables, if statements, loops, at least one form of collections, functions/call back, and events
- [x] Use AJAX (Optional) 
- [x] Use JSON or XML (Optional)
- [x] Use JQuery (Optional)

## Author and GitHub Link

* **Rui Zhu** - *Initial work* - [Github](https://github.com/ruikobe/SBA_HTML#sba_html)


