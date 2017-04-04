namespace PetShop.Controllers {

    export class HomeController {
        public dogs = [{ name: "Poodle", pic: 'https://s-media-cache-ak0.pinimg.com/736x/f3/72/03/f372036449fff46364cbc0e64b726a50.jpg' }, {
            name: "Pitbull", pic: 'http://americanbullydaily.com/wp-content/uploads/2016/01/Blue-Nose-Pit-bulls-Puppies.jpg'
        }, { name: "Chihuahua", pic: 'http://cdn2-www.dogtime.com/assets/uploads/gallery/chihuahua-puppies/chihuahua-puppy-2.jpg' }, { name: "Golden Retriever", pic: 'https://i.ytimg.com/vi/a6KGPBflhiM/hqdefault.jpg' }];
    
        public birds = [{ name: "Peacock", pic: 'http://animal-dream.com/data_images/peacock/peacock6.jpg' }, { name: "Dove", pic: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/what-does-the-dove-symbolize_a1ebd73c-cd02-4aa3-8513-d617cfb484f6.jpg?domain=cx.aos.ask.com' }, { name: "Chicken", pic: 'http://www.gourmetsleuth.com/images/default-source/articles/big-white-chicken.jpg?sfvrsn=8' }, { name: "Penguin", pic: 'http://www.stateofdigital.com/wp-content/uploads/2016/09/Penguin.jpg'}];

    }



    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
