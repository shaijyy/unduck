![Unduck Logo](/public/unduck.png#gh-light-mode-only)
![Unduck Logo](/public/unduck-white.png#gh-dark-mode-only)
---
DuckDuckGo's bang redirects are too slow. We fix them.  
Add the following URL as a custom search engine to your browser.  
Enables all of DuckDuckGo's bangs to work, but much faster.  
```
https://unduck-phi.vercel.app?q=%s
```

## How is it that much faster?

DuckDuckGo does their redirects server side. Their DNS is...not always great. Result is that it often takes ages.
We do it client side. Once you have went to the website, the Bang list is cached and the redirects happends almost immediately.
