
import file from 'underscore';
var _ = file;


var data = [
  
    {
      country: "England",
      info: [
        {
          landmark: "Big Ben",
          imageUrl: require('../src/ben.jpg')
        },
        {
          landmark: 'Stonehenge',
          imageUrl: require('../src/stonehenge.jpg')
        }
      ]
    },
    // {
    //   country: "America",
    //   info: [
    //     {
    //       landmark: 'Statue of Liberty',
    //       imageUrl: 'liberty.jpg',
    //     },
    //     {
    //       landmark: 'Empire State Building',
    //       imageUrl: 'empire.jpg'
    //     },
    //     {
    //       landmark: 'Golden Gate Bridge',
    //       imageUrl: 'goldengate.jpg'
    //     },
    //     {
    //       landmark: 'White House',
    //       imageUrl: 'whitehouse.jpg'
    //     }
    //   ]
    // },
    // {
    //   country: "France",
    //   info: [
    //     {
    //       landmark:'Louvre',
    //       imageUrl: 'louvre.jpg'
    //     },
    //     {
    //       landmark:'Eifel Tower',
    //       imageUrl: 'eiffel.jpg'
    //     },
    //     {
    //       landmark: 'Arc De Triumph',
    //       imageUrl: 'arcdetriumph.jpg'
    //     }  
    //   ]
    // },
    // {
    //   country: 'Egypt',
    //   info: [
    //     {
    //       landmark: 'The Pyramids',
    //       imageUrl: 'pyramids.jpg'
    //     }
    //   ]
    // },
    // {
    //   country: 'Italy',
    //   info: [
    //     {
    //       landmark: 'Tahj Mahal',
    //       imageUrl: 'tahj.jpg'
    //     },
    //     {
    //       landmark: 'Colloseum',
    //       imageUrl: 'coloseum.jpg'
    //     },
    //      {
    //       landmark: 'Leaning Tower of Pizza',
    //       imageUrl: 'pizza.jpg'
    //     }
    //   ]
    // },
    // {
    //   country: 'Israel',
    //   info: [
    //     {
    //       landmark: 'Western Wall',
    //       imageUrl: 'wall.jpg'
    //     }
    //   ]
    // }
  ];

   data.selectGame = function ()  {
      var answerSelection = _.shuffle (
        this.reduce(function
          (a,b)  {
              return a.concat(b.country);
          },[]
        )
      ).slice(0,4);

      var answer = answerSelection[_.random(
        answerSelection.length-1
      )];

      var answerObj =  _.find(
          this, function(val) {
            if (val.country === answer) {
              return val;
            };
          }
        )

        var landmark = answerObj.info[_.random(
        answerObj.info.length-1
      )];

      return {
        answerSelection: answerSelection,
        landmark: landmark,
        answer: answer
      };
    };
    
module.exports = {data}