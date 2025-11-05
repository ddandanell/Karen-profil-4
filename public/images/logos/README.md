# Magazine Logos

Place magazine logos here in PNG or SVG format:

- `harmonies-magazine.png` or `harmonies-magazine.svg` - Harmonies Magazine logo
- `the-national-news.png` or `the-national-news.svg` - The National News (UAE) logo  
- `hot-media-group.png` or `hot-media-group.svg` - Hot Media Group / Top 50 Homes Dubai logo

## How to add logos:

1. Download logos from the official websites:
   - Harmonies Magazine: https://www.harmoniesmagazine.com
   - The National News: https://www.thenationalnews.com
   - Hot Media Group: https://www.hotmediagroup.com or Top 50 Homes Dubai website

2. Save logos to this directory with the names above

3. Update `app/page.tsx` to use the logos:
   - Replace the placeholder divs with `<Image>` components pointing to `/images/logos/[filename]`

## Current implementation:

The code currently uses styled icon placeholders that match the luxury design aesthetic. These can be replaced with actual logos when available.

