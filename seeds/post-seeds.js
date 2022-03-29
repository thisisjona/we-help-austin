const { Post } = require("../models");

const postdata = [
    {
        tag: "animal",
        username: "classiccanines",
        title: "Senior shelter dog foster homes needed",
        body: "It's true that Austin area shelters are no kill however that comes with some consequences for senior dogs. They tend to stay a long, long time, months, sometimes a year or more, as they overlooked by the many other available choices onsite such as puppies and young dogs. This is the problem we target to help. Our advocacy's goal is to place senior dogs into loving homes as quickly as possible after rescues have been made aware but they remain unselected. In loving foster homes, we can get them any necessary medical care that will help them thrive and live the best of the rest of their lives, Once they are viewed as more adoptable, fosters and our advocacy helps to make land bridges to a final loving home. Our motto is \"A friend till the end\". Every dog deserves that, don't you agree?",
        deadline: "none",
        requirements: "Must be at least 18"
    },
    {
        tag: "animal",
        username: "fosterspace",
        title: "Drive a leg, Save a Life!",
        body: "Donating a little of your time and driving skills will make a tremendous difference in helping our furry friends. We are seeking dedicated and compassionate people who are willing to be a Transport Volunteer. Animal Rescues and Shelters are always in need of transporting animals who are at risk of euthanasia. If you love animals and have a vehicle then you can help!",
        deadline: "none",
        requirements: "Must be at least 18"
    },
    {
        tag: "seniors",
        username: "suncresthospice",
        title: "Feel good again, share your talents !",
        body: "You are awesome, come and be part of a different and exceptional Hospice organization where we are committed to maintaining a team comprised of the most talented and compassionate people. We are seeking volunteers who want to be a part of helping by sharing your time and talents. We have opportunities available for Administrative Volunteers where you can assist with clerical tasks such as filing, answering phones or data entry.",
        deadline: "none",
        requirements: "Good for people over 55"
    },
    {
        tag: "health",
        username: "nationalmssociety",
        title: "MS150 Austin Start Line Volunteers!",
        body: "Responsibilities can include anything from site set-up to serving food to organizing the groups of our riders and shifts can be as short as three hours. This event would be a great opportunity to help us launch into our new normal of in-person events while helping those living with MS.",
        deadline: "April 30",
        requirements: "none"
    },
    {
        tag: "sports",
        username: "UTAustin",
        title: "University of Texas Basketball Games ",
        body: "Leads will be responsible for inventory count before and after the game Also will help with prep and be the GoTo person for volunteers",
        deadline: "Feb 16 - May 10",
        requirements: "none"
    },
    {
        tag: "youth friendship",
        username: "thebestmom",
        title: "Need a playdate for my daughter",
        body: "We are new to the area and are looking for a playdate at the park.  My daughter is 4 and would love to meet new friends.",
        deadline: "June",
        requirements: "ages 3-5"
    },
    {
        tag: "advice education",
        username: "thebestmom",
        title: "Looking for preschool recommendations",
        body: "We are new to the area.  Do you have any preschools that you would recommend for my 4 year old?  We would love a co-op.",
        deadline: "June",
        requirements: "none"
    },
    {
        tag: "hunger ride-share",
        username: "delifood",
        title: "Need a driver for left over food",
        body: "We own a local deli and need someone to deliver our unused food to the homeless shelters.",
        deadline: "Ongoing",
        requirements: "Over 18"
    },
    {
        tag: "advice home repairs",
        username: "notthisagain",
        title: "What do I do about a noisy frig?",
        body: "My frig isn't very old but it sounds like something poisoned it.  Will I need a new one soon?  Would having a repair person look at it help?",
        deadline: "asap",
        requirements: "none"
    },
    {
        tag: "arts friendship",
        username: "justchillin",
        title: "I have an extra ticket for botanical gardens!",
        body: "Does anyone want to come with me?  I'm a huge plant lover and would love to make some new plants friends and go explore the gardens with you. ",
        deadline: "June",
        requirements: "over 18"
    },
    {
        tag: "arts",
        username: "fiddlerlove",
        title: "Need a tutor for a few questions about fiddles",
        body: "I just want to know if I'm holding it correctly.  Thank you in advance!",
        deadline: "asap",
        requirements: "none"
    },
    {
        tag: "advice misc",
        username: "fiddlerlove",
        title: "What was that noise?!!?  Big bang near Stassney",
        body: "Did anyone else hear that noise?  Know what it was? ",
        deadline: "asap",
        requirements: "none"
    },
    {
        tag: "animal",
        username: "stormy",
        title: "Alamo needs a home today!",
        body: "We found a stray cat and she needs a home! She's the sweetest kitty and will make the perfect pet for you.",
        deadline: "asap",
        requirements: "none"
    },
    {
        tag: "home repair",
        username: "hollyjackson",
        title: "In desperate need of a lawn mower repair",
        body: "I've checked everywhere!  Does anyone know of a good repair place for lawn mowers?",
        deadline: "asap",
        requirements: "none"
    },
    {
        tag: "arts",
        username: "janieguzman",
        title: "Done repainting my pet flamingos",
        body: "Just a few touch ups and I'm done",
        deadline: "none",
        requirements: "none"
    },
    {
        tag: "arts",
        username: "fiddlerlove",
        title: "Need a tutor for a few questions about fiddles",
        body: "I just want to know if I'm holding it correctly.  Thank you in advance!",
        deadline: "asap",
        requirements: "none"
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
