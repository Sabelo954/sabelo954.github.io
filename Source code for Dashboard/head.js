import React from "react";
import ReactDOMServer from 'react-dom/server';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import * as myConfig from './header.json';

import icon16 from "./images/icon16.ico"
import icon24 from "./images/icon24.ico"
import icon32 from "./images/icon32.ico"
import icon64 from "./images/icon64.ico"
import icon192 from "./images/icon192.png" 
import icon512 from "./images/icon512.png" 
import image from "./images/image.png"

(async () => {  

let hr = myConfig.default;
hr.longName = hr.title
hr.shortName = hr.description

// let local = window.location.href;
// let imageLocation = local+"images/"+hr.shortName.trim().toLowerCase()+"/"
// imageLocation = imageLocation.replace(/\s/g, "_").replace("index.html", "");
// Hashtags get commented out. careful for "background_color" "theme_color"

let header = <HelmetProvider>
      <Helmet>    
        <meta http-equiv="x-ua-compatible" content="ie=edge"/>
        <meta http-equiv="Content-Security-Policy"
          content="
            img-src
              'self'
              https://unpkg.com/leaflet@1.3.0/dist/images/marker-shadow.png
              https://unpkg.com/leaflet@1.3.0/dist/images/marker-icon.png
              https://bniajfi.org/wp-content/uploads/2014/04/bnia_logo_new.png
              data:
        "/>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1"/>
        <meta http-equiv="x-dns-prefetch-control" content="off"/>
        <link rel="shortcut icon" type="image/x-icon" href={ icon16 } />
        <title>{hr.longName}</title>
        <meta name="author"             content={hr.author}/>
        <meta name="description"        content={hr.description}/>
        <meta name="keywords"           content="HTML,CSS,XML,JavaScript"/>

        <meta name="HandheldFriendly"   content="True"/>
        <meta name="MobileOptimized"    content="420"/>
        <meta name="subject"            content={hr.type}/>
        <meta name="application-name"   content={hr.applicationname}/>

        <link rel="author"              href={hr.author}/>
        <link rel="license"             href="https://opensource.org/licenses/MIT"/>
        <link rel="me"                  href={hr.owneremail} type="text/html"/>
        <link rel="me"                  href={hr.ownername}/>
        <link rel="me"                  href={hr.ownerphone}/>

        <meta name="geo.region"         content="US-MD" />
        <meta name="geo.placename"      content="Baltimore" />
        <meta name="geo.region"         content={hr.title} />
        <meta name="geo.placename"      content={hr.title} />
        <meta name="geo.position"       content={hr.geoposition} />
        <meta name="ICBM"               content={hr.geoposition} />

        <meta name="theme-color"        content={hr.themecolor}/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="google"             content="notranslate"/>

        <meta name="robots"             content="index,follow"/>
        <meta name="googlebot"          content="index,follow"/>
        <meta name="google"             content="nositelinkssearchbox"/>
        <meta name="google"             content="notranslate"/>
        <meta name="rating"             content="General"/>
        <meta name="referrer"           content="no-referrer"/>
        <meta name="format-detection"   content="telephone=no"/>
        <meta name="renderer"           content="webkit|ie-comp|ie-stand"/>
        <noscript>Your browser does not support JavaScript!</noscript>

        <link rel="icon" type="image/ico" sizes="16x16"     href={icon16}/>
        <link rel="icon" type="image/ico" sizes="24x24"     href={icon24}/>
        <link rel="icon" type="image/ico" sizes="32x32"     href={icon32}/>
        <link rel="icon" type="image/ico" sizes="64x64"     href={icon64}/>
        <meta property="og:image"       content={image}/>
        <meta name="twitter:image"      content={image}/>
        <meta itemprop="image"          content={image}/>

        <meta property="article:author" content={hr.author}/>
        <meta property="og:title"       content={hr.title}/>
        <meta property="og:description" content={hr.description}/>
        <meta property="og:type"        content={hr.type} />
        <meta property="og:site_name"   content={hr.applicationname}/>
        <meta property="og:locale"      content="en_US"/>
        <meta property="op:markup_version" content="v1.0"/>
        <meta property="fb:article_style"content="default"/>
        <meta name="twitter:site"       content={hr.twittersite}/>
        <meta name="twitter:creator"    content={hr.twitterauthor}/>
        <meta name="twitter:title"      content={hr.title}/>
        <meta name="twitter:description"content={hr.description}/>
        <meta itemprop="name"           content={hr.title}/>
        <meta itemprop="description"    content={hr.description}/>
        <meta name="pinterest"          content="nopin" description={"Sorry, you can't save from this website!"}/>
      </Helmet>
  </HelmetProvider>
  
let rootElement = document.querySelector("#head")
if(rootElement){ ReactDOMServer.renderToString(header) }

} )()
