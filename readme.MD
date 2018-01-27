Publically hosted static website on S3 for the non-server controlled pages of MorTraqr.com

# Build Assets

Run

```
npm run dev
```

This generates an index.html file in the /dist folder.

## Changing the HTML

The HTML is mananged through the pug files. Make adjustments and webpack should change them automatically if you have already run `npm run dev`

## Changing CSS

All the CSS is managed through the main repo [here](https://github.com/DarthOstrich/mortraqr).

## Upload changes

Upload the changes to [this](http://mortraqr.com.s3-website-us-west-2.amazonaws.com) bucket.

## Troubleshooting

The website is routed through Cloudfront, so it may take a while for the changes to take place.

To verify the changes took effect, you can visit the direct URL [here](http://mortraqr.com.s3-website-us-west-2.amazonaws.com/)

If you don't want to wait, go to the distribution on AWS and create an invalidation. This will reset the cache.
