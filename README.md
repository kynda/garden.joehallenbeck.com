This is the Repository for [Joe's Digital Garden][]. It builds on top of Aengus
McMillin's excellent [Gatsby Theme Brain][] to create a resource for storing
knowlege in a "Digital Garden." 

The original theme comes with no styling out of the box, this build adds a
simple stylesheet and layout that non-REACT developers should be able to use to
create their own gardens.

Installation
-------------------------------------------------------------------------------

1. Git clone this repository
2. Run `npm install`
3. Create a `container` directory (`mkdir container`)
4. Begin filling that container with wonderful notes
5. Run `gatsby develop` to see those notes in your browser

You can change the stylesheet for your notes by modifying
`src/components/stylesheet.css`.

You can create your own layout by changing `src/components/Layout.js`. Your
notes will appear inside the &lt;article&gt; tag.

The landing page for the site is found under `src/pages/index.js`.

If your notes are going to include photos or other assets, you can create an
`assets` directory under `public` and then link to them in that directory, e.g.
`/assets/yolo.jpg`

[Joe's Digital Garden]: https://garden.joehallenbeck.com
[Gatsby Theme Brain]: https://github.com/aengusmcmillin/gatsby-theme-brain
