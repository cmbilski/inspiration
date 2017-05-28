Inspiration App

A simple webapp to host and display images in a Pinterest-esque fashion.

Example Board
![Example Board](http://i.imgur.com/LKb0UaD.jpg)
Example Image Clicked
![Clicked Image](http://i.imgur.com/VCzj6EY.jpg)

To run, Docker must be installed and the content/ directory must first be populated.

It must include an inspiration.json file which lists the paths at which the images are located.
For example:

Sample inspiration.json
```
  [
    {
      "image_path": "images/my_image1.jpg"
    },
    {
      "image_path": "images/my_image2.jpg"
    }
  ]
```

Then, the images listed must be placed in the correct directories. For the example inspiration.json above, the following files must exist:

```
  content/inspiration.json
  content/images/my_image1.jpg
  content/images/my_image2.jpg
```

Then, execute:

`./scripts/build_and_run`

To run tests, execute:

`./scripts/build_and_test`

Technology used:
  * AngularJS
  * Angular Material
  * CSS
  * Docker
  * Karma
  * Jasmine
  * NodeJS
