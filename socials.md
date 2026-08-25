### Adding new social media information

To add new social media information, there are a few places you might need to modify. Currently, the template supports icons from [Academicons](https://jpswalsh.github.io/academicons/), [Font Awesome](https://fontawesome.com/), and [Tabler Icons](https://tabler.io/icons). For an example PR, check [Add HAL id to socials](https://github.com/alshedivat/al-folio/pull/3206/files). Note that the information in all these files are alphabetically sorted.

- \_data/socials.yml - your social media information
- \_includes/metadata.liquid - add social media information to site metadata
- \_includes/social.liquid - where the social media icon will be displayed
- \_scripts/search.liquid.js - make the social media information appear in search