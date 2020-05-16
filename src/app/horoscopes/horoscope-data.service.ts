import { Injectable } from '@angular/core';
import {IHoroscopes} from './horoscopes';

@Injectable({
  providedIn: 'root'
})
export class HoroscopeDataService {

   horoscopes: IHoroscopes [] = [
    {
      id: 1,
      horoscopeSign: 'Capricorn',
      horoscopeDate: 'DEC 22 - JAN 19',
      element: 'Earth',
      elementIcon: '../../../assets/images/icons/earth.png',
      celebrity: 'Michelle Obama, Elvis Presley, Bradley Cooper, Diane Keaton',
      planet: 'Saturn',
      attractedTo: 'Taurus, Pisces, Virgo',
      unattractedTo: 'Aries, Libra, Gemini',
      keywords: {
        first: 'Ambitious',
        second: 'Down to Earth',
        third: 'Reliable'
          },
      description: 'Capricorns are reflective and cautious creatures. The ruling planet Saturn symbolises wisdom which contributes to the Capricorns responsible and mature nature. Appreciating order and structure, they dislike complications and feel most comfortable in their routines and when they are control of their environment. \n' +
        'Capricorns can be stubborn at times but always willing to take on a challenge, they are very goal orientated and ambitious, and will look to climb the ladder within any organisation. Once they set they eye on something there is little that can stop them from achieving this. \n' +
        'Regarding matters of the heart, Capricorns are very traditional. They are attracted to security and loyalty and someone with the same drive as them. Capricorns may appear shy and reserved but are deeply emotional creatures and are attracted to signs that can coax out some of that passion and sensuality. \n',
      imageUrl: '../../../assets/images/horoscopes/capricorn.png',
      profileImage: '../../../assets/images/horoscopes/capricorn2.png',
      symbol: 'The Goat',
      icon: '../../../assets/images/icons/goat.png'
    },
    {
      id: 2,
      horoscopeSign: 'Aquarius',
      horoscopeDate: 'JAN 20 - FEB 18',
      element: 'Air',
      elementIcon: '../../../assets/images/icons/air.png',
      celebrity: 'Abraham Lincoln, Michael Jordon, Jennifer Aniston, Oprah Winfrey',
      planet: 'Uranus',
      attractedTo: 'Aries, Gemini, Libra',
      unattractedTo: 'Taurus, Scorpio, Capricorn',
      keywords: {
        first: 'Eccentric',
        second: 'Sociable',
        third: 'Innovative'
      },
      description: 'Aquarians are ruled by the planet Uranus which symbolises innovation and visionary, this reflects true in an Aquarius. \n' +
        'Aquarians are free thinkers and aspire to make big world changes, they have a strong sense of social justice and equality. An Aquarian does not like authority and will question social conventions. They are rebels at heart and eccentric, they are bold in their appearance and enjoy standing out from the crowd. This allows the Aquarian to shine, thanks to their originality, curiosity and unpredictability. \n' +
        'Aquarians can tend to get bored easily and need to keep themselves busy and exercise their minds by learning new things and emerging themselves in new cultures. An Aquarian is witty and enjoys the occasional intellectual banter. Regarding relationships, Aquarians prioritise those close to them and will often drop plans to help someone in need. Aquarians asses and organise their relationship in order of people who need them most, this can leave other relationships not feeling as important, communication is key to help this.\n',
      imageUrl: '../../../assets/images/horoscopes/aquarius.png',
      profileImage: '../../../assets/images/horoscopes/aquarius2.png',
      symbol: 'The Water Bearer',
      icon: '../../../assets/images/icons/waterJug.png'
    },
    {
      id: 3,
      horoscopeSign: 'Pisces',
      horoscopeDate: 'FEB 19 - MAR 20',
      element: 'Water',
      elementIcon: '../../../assets/images/icons/water.png',
      celebrity: 'Steve Jobs, Drew Barrymore, Justin Bieber, Liza Minnelli',
      planet: 'Neptune',
      attractedTo: 'Capricorn, Cancer, Scorpio',
      unattractedTo: 'Gemini, Sagittarius, Leo',
      keywords: {
        first: 'Adaptable',
        second: 'Imaginative',
        third: 'Kind'
      },
      description: 'Pisces is ruled by the planet Neptune which symbolises creativity, philosophy and dreams. This is reflected in a Pisces as they are the biggest dreamers, who enjoy thinking outside of reality. They are naturally musical, artistic, expressive creatures. This can make a Pisces appear alluring and radiant with inner beauty and joy. They are deeply compassionate and empathetic, and would not turn down a person in need. This can leave Pisces vulnerable and in a position where their caring nature can be taken advantage of. \n' +
        'They often carry other people’s problems without realising that they themself are struggling. Pisces should take time to take care of themselves as they can become destructive if it gets all too much. \n' +
        'Regarding matters of the heart, a Pisces is a hopeless romantic and would be willing to drop everything to drive off into the sunset. A Pisces has great intuition and are a good judge of character, this gives them the ability to quickly know if something or someone is bad news. \n',
      imageUrl: '../../../assets/images/horoscopes/pisces.png',
      profileImage: '../../../assets/images/horoscopes/pisces2.png',
      symbol: 'Fish',
      icon: '../../../assets/images/icons/fish.png'
    },
    {
      id: 4,
      horoscopeSign: 'Aries',
      horoscopeDate: 'MAR 21 - APR 19',
      element: 'Fire',
      elementIcon: '../../../assets/images/icons/fire.png',
      celebrity: 'Lady Gaga, Charlie Chapman, Keira Knightley, Robert Downey Jr',
      planet: 'Mars',
      attractedTo: 'Gemini, Leo, Sagittarius',
      unattractedTo: 'Cancer, Capricorn, Libra',
      keywords: {
        first: 'Assertive',
        second: 'Romantic',
        third: 'Energetic'
      },
      description: 'Represented by the ram, Aries are passionate independent and committed people. They are motivated through competition and a desire to win. They are dreamers and have already planned out their wedding, home and children’s names, and won’t be satisfied until they have achieved each goal. \n' +
        'Loyal, smart, and impulsive, they have a hard time controlling themselves and conserving their energy. Because Aries is a passionate fire sign, burnout is a constant threat unless they incorporate relaxation time into their lifestyle. \n' +
        'When it comes to love, Aries is all about initial attraction and can sense if there is chemistry or not in the first few interactions. In relationships, they need a partner with a fighting spirit—one who would fight for their affections. Aries are very impatient and often find it hard to slow down and go at someone else pace. To make a relationship work an Aries should take time to listen to their partner’s views and adapt to different ways of doing things. Nevertheless, Aries are amazing lovers, they are versatile, passionate, and always invested in the moment. \n',
      imageUrl: '../../../assets/images/horoscopes/aries.png',
      profileImage: '../../../assets/images/horoscopes/aries2.png',
      symbol: 'The Ram',
      icon: '../../../assets/images/icons/ram.png'
    },
    {
      id: 5,
      horoscopeSign: 'Taurus',
      horoscopeDate: 'APR 20 - MAY 20',
      element: 'Earth',
      elementIcon: '../../../assets/images/icons/earth.png',
      celebrity: 'Adele, Dwayne Johnson, Gigi Hadid, Travis Scott',
      planet: 'Venus',
      attractedTo: 'Cancer, Virgo, Capricorn',
      unattractedTo: 'Leo, Gemini, Aquarius',
      keywords: {
        first: 'Practical',
        second: 'Grounded',
        third: 'Trustworthy'
      },
      description: 'Taureans are very harmonious creatures and try to avoid drama at all costs. They are smart, trustworthy and ambitious. As a bull sign, Taureans are known for being hard-working and putting in those extra hours to get the job done. A Taurean’s motto is “work hard, play hard”, as well as working hard towards a goal a Taurean enjoys indulging in pleasures such as getting a massage or eating a luxurious meal. \n' +
        'When it comes to love, Taureans value honesty above all else, from the very get-go. They despise dishonesty and people who lie (even white lies). Ruled by the planet Venus, they stand for love beauty and money, this makes Taureans the most sensual of all the zodiac signs. \n' +
        'As Taureans are driven mostly by their internal compass they can be stubborn at times and struggle to listen to other peoples opinions. However, this quality also allows them to smash their goals and dominate whatever challenges they have through sheer will power and hard work.\n',
      imageUrl: '../../../assets/images/horoscopes/taurus.png',
      profileImage: '../../../assets/images/horoscopes/taurus2.png',
      symbol: 'The Bull',
      icon: '../../../assets/images/icons/bull.png'
    },
    {
      id: 6,
      horoscopeSign: 'Gemini',
      horoscopeDate: 'MAY 21 - JUN 20',
      element: 'Air',
      elementIcon: '../../../assets/images/icons/air.png',
      celebrity: 'Kendrick Lamar, Marilyn Monroe, Donald Trump, Angelina Jolie',
      planet: 'Mercury',
      attractedTo: 'Aries, Leo, Aquarius',
      unattractedTo: 'Virgo, Pisces, Capricorn',
      keywords: {
        first: 'Curious',
        second: 'Quick Witted',
        third: 'Independent'
      },
      description: 'A Gemini, represented by twins are able to complete a job that would take two people to do. They are super-efficient and adaptable, they are able to juggle several projects at any one time. They are known for their curious nature, no topic is ruled out. They are fascinated by people and enjoy researching and gathering data on all sorts of different subjects. The internet is made for Geminis! However, due to their curious nature and being easily bored, they tend to flitter between interests with lack of direction and struggle to commit to a single cause. \n' +
        'Gemini is ruled by the planet Mercury which symbolises communication, this is reflected in Geminis qualities. They are quick-witted and have a wicked sense of humour, they are social butterflies and have no trouble making friends. They will always be up for a party or social gathering, they can easily read a room and know exactly what people are thinking. In a relationship Geminis value people who is consistent and reliable, communication is key. They enjoy someone who they can be playful with and share banter with. \n',
      imageUrl: '../../../assets/images/horoscopes/gemini.png',
      profileImage: '../../../assets/images/horoscopes/gemini2.png',
      symbol: 'Twins',
      icon: '../../../assets/images/icons/twin.png'
    },
    {
      id: 7,
      horoscopeSign: 'Cancer',
      horoscopeDate: 'JUN 21 - JUL 22',
      element: 'Water',
      elementIcon: '../../../assets/images/icons/water.png',
      celebrity: 'Selena Gomez, Kevin Hart, Jayden Smith, Lionel Messi',
      planet: 'Moon',
      attractedTo: 'Taurus, Virgo, Pisces',
      unattractedTo: 'Aries, Libra, Cancer',
      keywords: {
        first: 'Empathic',
        second: 'Tenacious',
        third: 'Home-loving'
      },
      description: 'A Cancerian ruled by the moon which represents fertility and care. They are maternal and nurturing creatures, and value family and home life above all else. A Cancerian enjoys taking on the role of the caretaker or the hostess, and likes to create an environment of safety and love. They are big foodies and love home cooked meals, however, can become emotional eaters if stressed. They have great intuition and almost a psychic ability to predict things that are about to happen. They are spiritual beings and find comfort in connecting in a higher power, through religion or rituals. \n' +
        'Cancerians are one of the more sensitive signs of the zodiac. As they are very emotional beings, their feelings are always first to take the impact if something happens to them. They are prone to mood swings, feeling up and down without much explanation. A Cancerian will need to find a healthy outlet as they can try to find ways to escape when things get too much. \n' +
        'In a relationship Cancerians needs to feel loved and cared for, they search for security and someone invested in home life. They are incredibly loyal and will go to the ends of the earth for the ones they love. \n',
      imageUrl: '../../../assets/images/horoscopes/cancer.png',
      profileImage: '../../../assets/images/horoscopes/cancer2.png',
      symbol: 'The Crab',
      icon: '../../../assets/images/icons/crab.png'
    },
    {
      id: 8,
      horoscopeSign: 'Leo',
      horoscopeDate: 'JUL 23 - AUG 22',
      element: 'Fire',
      elementIcon: '../../../assets/images/icons/fire.png',
      celebrity: 'Madonna, Leonardo DiCaprio, Barack Obama, J.K Rowling',
      planet: 'Sun',
      attractedTo: 'Aries , Gemini, Sagittarius',
      unattractedTo: 'Taurus, Scorpio, Pisces',
      keywords: {
        first: 'Courageous',
        second: 'Warm',
        third: 'Natural Leader'
      },
      description: 'Leos are represented by the lion, known for being fearless, brave and strong. Leos are natural leaders and strive to be in a position where they can have the most influence, they have a lot of determination and energy to get themself to where they want to be.  Theatrical and passionate creatures, they love being the centre of attention and are always the life of the party. A Leo enjoys the lavish lifestyle, similar to that of a celebrity, grand dinners and exclusive parties is where the Leo is at. Governed by the sun a Leo is represented through warmth, life and vitality, they love life and live life to the fullest. \n' +
        'In a relationship, Leo is fiercely loyal and faithful, they look for someone who will keep things exciting and someone who will go on adventures with them. They love grand gestures and expressing their love to the world.  A Leo can feel jealous though if they feel threatened by anyone outside their relationship. Despite this Leos are secretly the most generous signs, and have a boundless capacity for love and affection for others. \n',
      imageUrl: '../../../assets/images/horoscopes/leo.png',
      profileImage: '../../../assets/images/horoscopes/leo2.png',
      symbol: 'The Lion',
      icon: '../../../assets/images/icons/lion.png'
    },
    {
      id: 9,
      horoscopeSign: 'Virgo',
      horoscopeDate: 'AUG 23 - SEP 22',
      element: 'Earth',
      elementIcon: '../../../assets/images/icons/earth.png',
      celebrity: 'Cameron Diaz, Freddie Mercury, Keanu Reeves, Beyonce',
      planet: 'Mercury',
      attractedTo: 'Capricorn, Cancer, Scorpio',
      unattractedTo: 'Cancer, Sagittarius, Leo',
      keywords: {
        first: 'Self-Growth',
        second: 'Organised',
        third: 'Analytical'
      },
      description: 'A Virgo is a sign that strives for perfection, they have a keen eye for detail and are methodical in all that they do. Organised and analytical a Virgo is like a computer, they can take in large amounts of jumbled up information and be able to organise and add structure to it so that it is understandable. \n' +
        'Their obsession for things being a certain way can be their downfall if they are not happy with the outcome, this can make them seem fussy and self-critical. \n' +
        'Ruled by the planet Mercury, which is the same as Gemini, they are radically different. A Virgo is more concerned with input and staying focused on a set task until it is achieved with the highest standards, whereas a Gemini can be less concerned about the end goal but more about experience. \n' +
        'In a relationship, a Virgo can seem shy and reserved at first, and it may take some time to gain their trust and open up. Despite their cold exterior, a Virgo is a passionate lover in the bedroom, they value the physical connection with their partner and show their affection this way. A Virgo is reliable and supportive in all relationships important to them, they are grounded and offer practical and sound advice. \n',
      imageUrl: '../../../assets/images/horoscopes/virgo.png',
      profileImage: '../../../assets/images/horoscopes/virgo2.png',
      symbol: 'The Virgin',
      icon: '../../../assets/images/icons/virgo.png'
    },
    {
      id: 10,
      horoscopeSign: 'Libra',
      horoscopeDate: 'SEP 23 - OCT 22',
      element: 'Air',
      elementIcon: '../../../assets/images/icons/air.png',
      celebrity: 'Hugh Jackman, Will Smith, Kim Kardashian, Kate Winslet',
      planet: 'Venus',
      attractedTo: 'Gemini, Leo, Sagittarius',
      unattractedTo: 'Cancer, Capricorn, Scorpio',
      keywords: {
        first: 'Charming',
        second: 'Creative',
        third: 'Dreamer'
      },
      description: 'A Libra sign is represented by the scale, they seek harmony and balance in all aspects of their life. They fight for equality and fairness, they dislike social ranking and strives to treat everyone the same. They are charming and attract attention from those around them, their outlook on life can seem inspiring and alluring. \n' +
        'Making decisions can be hard for a Libra as they will weigh up all the pro’s and con’s before deciding on something, and sometimes their own feelings can get lost in the process. Libra’s should try to listen to their intuition and gut feeling from time to time as they can get caught up in trying to please other all the time that they forget about themselves. \n' +
        'Libra’s ruling planet is Venus, which represents love and beauty,  and to a Libra life is all about love, companionship and beauty. They find inspiration in everyday things such as art, music and culture. \n' +
        'Libras love being in a relationship, they are rarely ever alone as they have large circle of friends and family around them. They are attracted to intelligence and someone that can excite their imagination. \n',
      imageUrl: '../../../assets/images/horoscopes/libra.png',
      profileImage: '../../../assets/images/horoscopes/libra2.png',
      symbol: 'The Scales',
      icon: '../../../assets/images/icons/scales.png'
    },
    {
      id: 11,
      horoscopeSign: 'Scorpio',
      horoscopeDate: 'OCT 23 - NOV 21',
      element: 'Water',
      elementIcon: '../../../assets/images/icons/water.png',
      celebrity: 'Julia Roberts, Drake, Katy Perry, Ryan Gosling',
      planet: 'Pluto, Mars',
      attractedTo: 'Capricorn, Cancer, Virgo',
      unattractedTo: 'Leo, Gemini, Aquarius',
      keywords: {
        first: 'Observant',
        second: 'Mysterious',
        third: 'Passionate'
      },
      description: 'Scorpions are an enigma, even to themselves. They are deeply intuitive, so much so that they themself don\'t know where their thoughts come from. They have magical ability to read a room and peoples intentions straight away.  \n' +
        'They are career focused and enjoy taking on a challenge. Scorpions are not afraid of causing controversy and will address a situation head on if they feel a way about it. They do not beat around they bush, but are honest and straight to the point which in return receives respect from others. They are masters of persuasion and can argue in any debate convincing the other party to change their mind. \n' +
        'Scorpions are intense brooding characters, they hold their cards close to their chest which only adds to their mysterious appeal. However, once you get to know them you’ll find that Scorpions are deeply emotional and empathetic creatures. \n' +
        'In a relationship a Scopion respects loyalty and someone they are able to confide in, they value authenticity and honesty above all. They can be very loving and committed to a relationship however if their trust is broken then they will strike with a sting in their tail.  In the bedroom a Scorpion is seductive and passionate, however sex is not just a physical act but a spiritual one where two bodies connect on a deeper level. \n',
      imageUrl: '../../../assets/images/horoscopes/scorpio.png',
      profileImage: '../../../assets/images/horoscopes/scorpio2.png',
      symbol: 'The Scorpion',
      icon: '../../../assets/images/icons/scorpion.png'
    },
    {
      id: 12,
      horoscopeSign: 'Sagittarius',
      horoscopeDate: 'NOV 22 - DEC 21',
      element: 'Fire',
      elementIcon: '../../../assets/images/icons/fire.png',
      celebrity: 'Jay-Z, Taylor Swift, Ben Stiller, Tina Turner',
      planet: 'Jupiter',
      attractedTo: 'Aries, Leo, Aquarius',
      unattractedTo: 'Virgo, Pisces, Taurus',
      keywords: {
        first: 'Explorer',
        second: 'Optimistic',
        third: 'Honest'
      },
      description: 'Sagittarius is the wild child of the zodiac signs, they were strong willed and independent people. A Sagittarius is traveller and explorers at heart, they are thrill seekers and aren’t afraid to go solo. \n' +
        'People can find themselves drawn to Sagittarians as they radiate positive energy, they are true optimistics who like to look at the glass as half full. They are enthusiastic and have an infectious aura, that people just gravitate towards. They are able to effortlessly captivates the whole room through a story or tell a joke that has people in stitches.\n' +
        'Natural leaders they are not afraid to step outside the norm, governed by Jupiter they are concerned about personal growth and spirituality. They are great at detecting BS and are not afraid to confront it. In a relationship a Sagittarius is very grounded in their self and their emotions. If they feel that the relationship is not working they will not stick around. This can work against the Sagittarians as they may decide to leave or end a relationship at the slightest hint of trouble, or boredom. However if a Sagittarius is able to commit then you will find a companion that is trustworthy, full of adventure and will help you grow. \n',
      imageUrl: '../../../assets/images/horoscopes/sagittarius.png',
      profileImage: '../../../assets/images/horoscopes/sagittarius2.png',
      symbol: 'The Archer',
      icon: '../../../assets/images/icons/archer.png'
    }
  ];


  constructor() { }




}




