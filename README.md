![Unduck Logo](/public/unduck.png#gh-light-mode-only)
![Unduck Logo](/public/unduck-white.png#gh-dark-mode-only)
---
DuckDuckGo's bang redirects are too slow. We fix them.  
Add the following URL as a custom search engine to your browser.  
Enables all of DuckDuckGo's bangs to work, but much faster.  
```
https://unduck.link?q=%s
```

## How is it that much faster?

DuckDuckGo does their redirects server side. Their DNS is...not always great. Result is that it often takes ages.

I solved this by doing all of the work client side. Once you've went to https://unduck.link once, the JS is all cache'd and will never need to be downloaded again. Your device does the redirects, not me.
