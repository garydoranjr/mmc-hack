MyMiniCity Hack
===============
A fun little hack of the <http://myminicity.com/> "game." Go to the project page
at <http://garydoranjr.github.com/mmc-hack/> to see it in action.

About
-----
MyMiniCity is a site that lets you build a city based on the number of unique
(based on IP address) visitors to your specific `mypage.myminicity.com` page
each day. A Flash object displays the city differently depending on the
population, industry, traffic, and other attributes. These attributes are all
passed as parameters to the Flash object. However, there is also a `k` attribute
that is passed (apparently computed by the server), which is a hash of the other
attributes. If it is not correct, then the city is not displayed correctly.

The Hack
--------
After decompiling the Flash object, I discovered that `k` is just a hash of the
other attributes of the city such as population. Therefore, given a set of
attributes, we can easily just compute the approriate hash and pass this as the
`k` parameter to the Flash object so that the city will display correctly with
arbitrarily-chosen attributes. The code to do this is in `mmcgen.js`.
